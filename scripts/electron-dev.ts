/**
 * Cross-platform electron dev script
 * Replaces platform-specific npm scripts with a unified TypeScript solution
 */

import { spawn, type Subprocess } from "bun";
import { existsSync, rmSync, cpSync, readFileSync, statSync, mkdirSync } from "fs";
import { join, basename } from "path";
import { downloadUv, type Platform, type Arch } from "./build/common";
import { childEnvWithGoMax, spawnWithOomRetry } from "./spawn-build-guard";

const ROOT_DIR = join(import.meta.dir, "..");
const ELECTRON_DIR = join(ROOT_DIR, "apps/electron");
const DIST_DIR = join(ELECTRON_DIR, "dist");

// Replace grammY's bundled polyfills (node-fetch@2 + abort-controller@3) with
// native Node globals. esbuild otherwise renames the polyfill's `class
// AbortSignal` to `_AbortSignal` to dodge collision with the global, which
// breaks node-fetch@2's `constructor.name === 'AbortSignal'` check and fails
// every Telegram API call with a TypeError. Kept in sync with
// `apps/electron/package.json` build:main and `scripts/electron-build-main.ts`.
const MAIN_PROCESS_ALIAS: Record<string, string> = {
  "node-fetch": join(ROOT_DIR, "apps/electron/src/main/shims/node-fetch.cjs"),
  "abort-controller": join(ROOT_DIR, "apps/electron/src/main/shims/abort-controller.cjs"),
};

// MCP server paths
const SESSION_SERVER_DIR = join(ROOT_DIR, "packages/session-mcp-server");
const SESSION_SERVER_OUTPUT = join(SESSION_SERVER_DIR, "dist/index.js");
// Pi agent server path (subprocess for Pi SDK sessions)
const PI_AGENT_SERVER_DIR = join(ROOT_DIR, "packages/pi-agent-server");
const PI_AGENT_SERVER_OUTPUT = join(PI_AGENT_SERVER_DIR, "dist/index.js");

// Platform-specific binary paths (bun creates .exe on Windows, no extension on Unix)
const IS_WINDOWS = process.platform === "win32";
const BIN_EXT = IS_WINDOWS ? ".exe" : "";
const VITE_BIN = join(ROOT_DIR, `node_modules/.bin/vite${BIN_EXT}`);
const ELECTRON_BIN = join(ROOT_DIR, `node_modules/.bin/electron${BIN_EXT}`);

function resolveBuildPlatform(): Platform {
  if (process.platform === "darwin") return "darwin";
  if (process.platform === "win32") return "win32";
  if (process.platform === "linux") return "linux";
  throw new Error(`Unsupported platform for uv bootstrap: ${process.platform}`);
}

function resolveBuildArch(): Arch {
  if (process.arch === "arm64") return "arm64";
  if (process.arch === "x64") return "x64";
  throw new Error(`Unsupported architecture for uv bootstrap: ${process.arch}`);
}

async function ensureBundledUvForCurrentPlatform(): Promise<void> {
  const platform = resolveBuildPlatform();
  const arch = resolveBuildArch();
  const platformKey = `${platform}-${arch}`;
  const uvBinary = platform === "win32" ? "uv.exe" : "uv";
  const uvPath = join(ELECTRON_DIR, "resources", "bin", platformKey, uvBinary);

  if (existsSync(uvPath)) {
    console.log(`✅ Bundled uv present: ${uvPath}`);
    return;
  }

  console.log(`⬇️  Bundled uv missing, bootstrapping ${platformKey}...`);
  await downloadUv({
    platform,
    arch,
    upload: false,
    uploadLatest: false,
    uploadScript: false,
    rootDir: ROOT_DIR,
    electronDir: ELECTRON_DIR,
  });
}

// Multi-instance detection (matches detect-instance.sh logic)
// Detects instance number from folder name suffix (e.g., craft-agents-1 → instance 1)
function detectInstance(): void {
  // Don't override if already set (e.g., by sourcing detect-instance.sh first)
  if (process.env.CRAFT_VITE_PORT) return;

  const folderName = basename(ROOT_DIR);
  const match = folderName.match(/-(\d+)$/);

  if (match) {
    const instanceNum = match[1];
    process.env.CRAFT_INSTANCE_NUMBER = instanceNum;
    process.env.CRAFT_VITE_PORT = `${instanceNum}173`;
    process.env.CRAFT_APP_NAME = `Craft Agents [${instanceNum}]`;
    process.env.CRAFT_CONFIG_DIR = join(process.env.HOME || "", `.craft-agent-${instanceNum}`);
    process.env.CRAFT_DEEPLINK_SCHEME = `craftagents${instanceNum}`;
    console.log(`🔢 Instance ${instanceNum} detected: port=${process.env.CRAFT_VITE_PORT}, config=${process.env.CRAFT_CONFIG_DIR}`);
  }
}

// Load .env file if it exists
function loadEnvFile(): void {
  const envPath = join(ROOT_DIR, ".env");
  if (existsSync(envPath)) {
    const content = readFileSync(envPath, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#")) {
        const eqIndex = trimmed.indexOf("=");
        if (eqIndex > 0) {
          const key = trimmed.slice(0, eqIndex).trim();
          let value = trimmed.slice(eqIndex + 1).trim();
          // Remove surrounding quotes if present
          if ((value.startsWith('"') && value.endsWith('"')) ||
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          process.env[key] = value;
        }
      }
    }
    console.log("📄 Loaded .env file");
  }
}

// Kill any process using the specified port
async function killProcessOnPort(port: string): Promise<void> {
  const isWindows = process.platform === "win32";

  try {
    if (isWindows) {
      // Windows: use netstat to find PID, then taskkill
      const netstat = spawn({
        cmd: ["cmd", "/c", `netstat -ano | findstr :${port}`],
        stdout: "pipe",
        stderr: "pipe",
      });
      const output = await new Response(netstat.stdout).text();
      await netstat.exited;

      // Parse PIDs from netstat output (last column)
      const pids = new Set<string>();
      for (const line of output.split("\n")) {
        const parts = line.trim().split(/\s+/);
        if (parts.length >= 5) {
          const pid = parts[parts.length - 1];
          if (pid && /^\d+$/.test(pid) && pid !== "0") {
            pids.add(pid);
          }
        }
      }

      // Kill each PID
      for (const pid of pids) {
        const kill = spawn({
          cmd: ["taskkill", "/PID", pid, "/F"],
          stdout: "pipe",
          stderr: "pipe",
        });
        await kill.exited;
      }

      if (pids.size > 0) {
        console.log(`🔪 Killed ${pids.size} process(es) on port ${port}`);
      }
    } else {
      // Mac/Linux: use lsof and kill
      const lsof = spawn({
        cmd: ["sh", "-c", `lsof -ti:${port} | xargs kill -9 2>/dev/null || true`],
        stdout: "pipe",
        stderr: "pipe",
      });
      const output = await new Response(lsof.stdout).text();
      await lsof.exited;

      if (output.trim()) {
        console.log(`🔪 Killed process(es) on port ${port}`);
      }
    }
  } catch {
    // Ignore errors - port may not be in use
  }
}

// Clean Vite cache directory
function cleanViteCache(): void {
  const viteCacheDir = join(ELECTRON_DIR, "node_modules/.vite");
  if (existsSync(viteCacheDir)) {
    rmSync(viteCacheDir, { recursive: true, force: true });
    console.log("🧹 Cleaned Vite cache");
  }
}

// Copy resources to dist
function copyResources(): void {
  const srcDir = join(ELECTRON_DIR, "resources");
  const destDir = join(ELECTRON_DIR, "dist/resources");
  if (existsSync(srcDir)) {
    cpSync(srcDir, destDir, { recursive: true, force: true });
    console.log("📦 Copied resources to dist");
  }
}

// Session MCP server: use `bun build` (same as packages/session-mcp-server and electron-build-main.ts).
// The esbuild JS API path intermittently fails under Bun with "Error: The service was stopped".
async function buildSessionMcpServer(): Promise<{ success: boolean; error?: string }> {
  try {
    const proc = spawn({
      cmd: [
        "bun",
        "build",
        join(SESSION_SERVER_DIR, "src/index.ts"),
        "--outfile",
        SESSION_SERVER_OUTPUT,
        "--target",
        "node",
        "--format",
        "cjs",
      ],
      cwd: ROOT_DIR,
      stdout: "inherit",
      stderr: "inherit",
    });
    const exitCode = await proc.exited;
    if (exitCode !== 0) {
      return { success: false, error: `bun build exited ${String(exitCode)}` };
    }
    if (!existsSync(SESSION_SERVER_OUTPUT)) {
      return { success: false, error: `output missing: ${SESSION_SERVER_OUTPUT}` };
    }
    return { success: true };
  } catch (err) {
    return { success: false, error: String(err) };
  }
}

/** Build-time defines for main esbuild (OAuth + Sentry + dev flag; aligns with scripts/electron-build-main.ts). */
function getMainProcessEsbuildDefines(): Record<string, string> {
  const names = [
    "GOOGLE_OAUTH_CLIENT_ID",
    "GOOGLE_OAUTH_CLIENT_SECRET",
    "SLACK_OAUTH_CLIENT_ID",
    "SLACK_OAUTH_CLIENT_SECRET",
    "MICROSOFT_OAUTH_CLIENT_ID",
    "MICROSOFT_OAUTH_CLIENT_SECRET",
    "SENTRY_ELECTRON_INGEST_URL",
    "CRAFT_DEV_RUNTIME",
  ];
  const defines: Record<string, string> = {};
  for (const varName of names) {
    defines[`process.env.${varName}`] = JSON.stringify(process.env[varName] || "");
  }
  return defines;
}

/** Resolve repo-local esbuild CLI (avoid esbuild JS API under Bun — it often dies with "The service was stopped"). */
function resolveEsbuildBin(): string {
  return IS_WINDOWS
    ? join(ROOT_DIR, "node_modules", ".bin", "esbuild.cmd")
    : join(ROOT_DIR, "node_modules", ".bin", "esbuild");
}

async function runEsbuildCli(cwd: string, args: string[]): Promise<{ success: boolean; error?: string }> {
  const bin = resolveEsbuildBin();
  if (!existsSync(bin)) {
    return { success: false, error: `esbuild not found at ${bin}` };
  }
  try {
    const exitCode = await spawnWithOomRetry([bin, ...args], cwd, { label: "esbuild" });
    if (exitCode === 0) return { success: true };
    let msg = `esbuild exited ${String(exitCode)}`;
    if (exitCode === 137) {
      msg +=
        " — try export CRAFT_ESBUILD_GOMAXPROCS=1 before bun run electron:dev, or close other heavy apps.";
    }
    return { success: false, error: msg };
  } catch (err) {
    return { success: false, error: String(err) };
  }
}

function mainProcessEsbuildArgs(defines: Record<string, string>, watch: boolean): string[] {
  const args = [
    "src/main/index.ts",
    "--bundle",
    "--platform=node",
    "--format=cjs",
    "--outfile=dist/main.cjs",
    "--external:electron",
    `--alias:node-fetch=${MAIN_PROCESS_ALIAS["node-fetch"]}`,
    `--alias:abort-controller=${MAIN_PROCESS_ALIAS["abort-controller"]}`,
    "--log-level=warning",
  ];
  for (const [k, v] of Object.entries(defines)) {
    args.push(`--define:${k}=${v}`);
  }
  if (watch) args.push("--watch");
  return args;
}

function preloadEsbuildArgs(entry: "bootstrap" | "browser-toolbar", watch: boolean): string[] {
  const rel = entry === "bootstrap" ? "src/preload/bootstrap.ts" : "src/preload/browser-toolbar.ts";
  const out =
    entry === "bootstrap" ? "dist/bootstrap-preload.cjs" : "dist/browser-toolbar-preload.cjs";
  const args = [
    rel,
    "--bundle",
    "--platform=node",
    "--format=cjs",
    `--outfile=${out}`,
    "--external:electron",
    "--log-level=warning",
  ];
  if (watch) args.push("--watch");
  return args;
}

/** Session MCP only (small). Pi agent is built later so its huge `bun build` does not run right before the main bundle. */
async function ensureSessionMcpBuilt(): Promise<void> {
  console.log("🌉 Building Session MCP server...");
  const sessionDistDir = join(SESSION_SERVER_DIR, "dist");
  if (!existsSync(sessionDistDir)) mkdirSync(sessionDistDir, { recursive: true });

  const sessionResult = await buildSessionMcpServer();
  if (!sessionResult.success) {
    console.error("❌ Session MCP server build failed:", sessionResult.error);
    process.exit(1);
  }
  console.log("✅ Session MCP server built");
}

async function ensurePiAgentBuilt(): Promise<void> {
  const piDistDir = join(PI_AGENT_SERVER_DIR, "dist");
  if (!existsSync(piDistDir)) mkdirSync(piDistDir, { recursive: true });

  if (!existsSync(join(PI_AGENT_SERVER_DIR, "src"))) {
    console.log("⏭️  Pi agent server skipped (package not found)");
    return;
  }

  console.log("🥧 Building Pi agent server...");
  const piResult = await buildPiAgentServer();
  if (!piResult.success) {
    console.error("❌ Pi agent server build failed:", piResult.error);
    process.exit(1);
  }
  console.log("✅ Pi agent server built");
}

// Get environment variables for electron process
function getElectronEnv(): Record<string, string> {
  const vitePort = process.env.CRAFT_VITE_PORT || "5173";

  // Codex binary path is resolved at runtime by the binary-resolver module.
  // It checks: CODEX_PATH env var > bundled binary > local dev fork > system PATH.
  // You can override with CODEX_PATH env var if needed for debugging.

  return {
    ...process.env as Record<string, string>,
    VITE_DEV_SERVER_URL: `http://localhost:${vitePort}`,
    CRAFT_CONFIG_DIR: process.env.CRAFT_CONFIG_DIR || "",
    CRAFT_APP_NAME: process.env.CRAFT_APP_NAME || "Craft Agents",
    CRAFT_DEEPLINK_SCHEME: process.env.CRAFT_DEEPLINK_SCHEME || "craftagents",
    CRAFT_INSTANCE_NUMBER: process.env.CRAFT_INSTANCE_NUMBER || "",
  };
}

// Build Pi agent server using bun instead of esbuild.
// The Pi SDK (@mariozechner/pi-coding-agent) is ESM-only, and esbuild with
// packages:external leaves ESM imports as require() calls that fail at runtime.
// Bun's bundler handles ESM→ESM bundling correctly.
async function buildPiAgentServer(): Promise<{ success: boolean; error?: string }> {
  try {
    const proc = spawn({
      cmd: ["bun", "build", "src/index.ts", "--outdir=dist", "--target=bun", "--format=esm"],
      cwd: PI_AGENT_SERVER_DIR,
      stdout: "pipe",
      stderr: "pipe",
    });
    const stderr = await new Response(proc.stderr).text();
    const exitCode = await proc.exited;
    if (exitCode !== 0) {
      return { success: false, error: stderr };
    }
    return { success: true };
  } catch (err) {
    return { success: false, error: String(err) };
  }
}

// Verify a built JavaScript bundle is parseable. `node --check` performs
// syntax-only validation — it does NOT execute module-level code or resolve
// `require()`, so Electron-specific top-level requires (e.g. @sentry/electron)
// are safe. This catches truncated writes, FS corruption, and edge cases that
// esbuild's build-success signal doesn't cover.
async function verifyJsFile(filePath: string): Promise<{ valid: boolean; error?: string }> {
  if (!existsSync(filePath)) {
    return { valid: false, error: "File does not exist" };
  }

  const stats = statSync(filePath);
  if (stats.size === 0) {
    return { valid: false, error: "File is empty" };
  }

  try {
    const proc = spawn({
      cmd: ["node", "--check", filePath],
      stdout: "pipe",
      stderr: "pipe",
    });
    const stderr = await new Response(proc.stderr).text();
    const exitCode = await proc.exited;
    if (exitCode !== 0) {
      return { valid: false, error: stderr.trim() || `node --check exited ${exitCode}` };
    }
    return { valid: true };
  } catch (err) {
    return { valid: false, error: String(err) };
  }
}

// Wait for file to stabilize (no size changes)
async function waitForFileStable(filePath: string, timeoutMs = 10000): Promise<boolean> {
  const startTime = Date.now();
  let lastSize = -1;
  let stableCount = 0;

  while (Date.now() - startTime < timeoutMs) {
    if (!existsSync(filePath)) {
      await Bun.sleep(100);
      continue;
    }

    const stats = statSync(filePath);
    if (stats.size === lastSize) {
      stableCount++;
      // File size unchanged for 3 checks (300ms) - consider it stable
      if (stableCount >= 3) {
        return true;
      }
    } else {
      stableCount = 0;
      lastSize = stats.size;
    }

    await Bun.sleep(100);
  }

  return false;
}

async function main(): Promise<void> {
  console.log("🚀 Starting Electron dev environment...\n");

  // Setup
  detectInstance();
  loadEnvFile();
  cleanViteCache();

  // Ensure dist directory exists
  if (!existsSync(DIST_DIR)) {
    mkdirSync(DIST_DIR, { recursive: true });
  }

  await ensureBundledUvForCurrentPlatform();

  copyResources();

  // Session MCP first (small). Pi agent is deferred until after main/preload so a ~20MB+ Pi
  // `bun build` does not exhaust RAM immediately before bundling the Electron main graph.
  await ensureSessionMcpBuilt();

  const vitePort = process.env.CRAFT_VITE_PORT || "5173";

  // Kill any existing process on the Vite port
  await killProcessOnPort(vitePort);

  // =========================================================
  // PHASE 1: Initial build (one-shot, wait for completion)
  // =========================================================
  const mainDefines = getMainProcessEsbuildDefines();
  console.log("🔨 Building main process (esbuild)…");

  const mainCjsPath = join(DIST_DIR, "main.cjs");
  const preloadCjsPath = join(DIST_DIR, "bootstrap-preload.cjs");
  const toolbarPreloadCjsPath = join(DIST_DIR, "browser-toolbar-preload.cjs");

  // Remove old build files to ensure fresh build
  if (existsSync(mainCjsPath)) rmSync(mainCjsPath);
  if (existsSync(preloadCjsPath)) rmSync(preloadCjsPath);
  if (existsSync(toolbarPreloadCjsPath)) rmSync(toolbarPreloadCjsPath);

  const mainResult = await runEsbuildCli(ELECTRON_DIR, mainProcessEsbuildArgs(mainDefines, false));
  if (!mainResult.success) {
    console.error("❌ Main process build failed:", mainResult.error);
    process.exit(1);
  }

  const preloadResult = await runEsbuildCli(ELECTRON_DIR, preloadEsbuildArgs("bootstrap", false));
  if (!preloadResult.success) {
    console.error("❌ Preload build failed:", preloadResult.error);
    process.exit(1);
  }

  const toolbarPreloadResult = await runEsbuildCli(ELECTRON_DIR, preloadEsbuildArgs("browser-toolbar", false));
  if (!toolbarPreloadResult.success) {
    console.error("❌ Browser toolbar preload build failed:", toolbarPreloadResult.error);
    process.exit(1);
  }

  await ensurePiAgentBuilt();

  // Wait for files to stabilize (filesystem flush)
  console.log("⏳ Waiting for build files to stabilize...");
  const [mainStable, preloadStable, toolbarPreloadStable] = await Promise.all([
    waitForFileStable(mainCjsPath),
    waitForFileStable(preloadCjsPath),
    waitForFileStable(toolbarPreloadCjsPath),
  ]);

  if (!mainStable || !preloadStable || !toolbarPreloadStable) {
    console.error("❌ Build files did not stabilize");
    process.exit(1);
  }

  // Verify the built files are valid JavaScript
  console.log("🔍 Verifying build output...");
  const [mainValid, preloadValid, toolbarPreloadValid] = await Promise.all([
    verifyJsFile(mainCjsPath),
    verifyJsFile(preloadCjsPath),
    verifyJsFile(toolbarPreloadCjsPath),
  ]);

  if (!mainValid.valid) {
    console.error("❌ main.cjs is invalid:", mainValid.error);
    process.exit(1);
  }

  if (!preloadValid.valid) {
    console.error("❌ bootstrap-preload.cjs is invalid:", preloadValid.error);
    process.exit(1);
  }

  if (!toolbarPreloadValid.valid) {
    console.error("❌ browser-toolbar-preload.cjs is invalid:", toolbarPreloadValid.error);
    process.exit(1);
  }

  console.log("✅ Initial build complete and verified\n");

  // =========================================================
  // PHASE 2: Start dev servers with watch mode
  // =========================================================
  console.log("📡 Starting dev servers...\n");

  const processes: Subprocess[] = [];
  const esbuildBin = resolveEsbuildBin();

  // 1. Vite dev server (strictPort ensures we don't silently switch ports)
  const viteProc = spawn({
    cmd: [VITE_BIN, "dev", "--config", "apps/electron/vite.config.ts", "--port", vitePort, "--strictPort"],
    cwd: ROOT_DIR,
    stdin: "ignore",
    stdout: "inherit",
    stderr: "inherit",
    env: process.env as Record<string, string>,
  });
  processes.push(viteProc);

  // 2–4. esbuild --watch (GOMAXPROCS capped via childEnvWithGoMax)
  const mainWatch = spawn({
    cmd: [esbuildBin, ...mainProcessEsbuildArgs(mainDefines, true)],
    cwd: ELECTRON_DIR,
    stdin: "ignore",
    stdout: "inherit",
    stderr: "inherit",
    env: childEnvWithGoMax(process.env.CRAFT_ESBUILD_GOMAXPROCS?.trim() || "2"),
  });
  processes.push(mainWatch);
  console.log("👀 Watching main process (esbuild --watch)…");

  const preloadWatch = spawn({
    cmd: [esbuildBin, ...preloadEsbuildArgs("bootstrap", true)],
    cwd: ELECTRON_DIR,
    stdin: "ignore",
    stdout: "inherit",
    stderr: "inherit",
    env: childEnvWithGoMax(process.env.CRAFT_ESBUILD_GOMAXPROCS?.trim() || "2"),
  });
  processes.push(preloadWatch);
  console.log("👀 Watching preload (esbuild --watch)…");

  const toolbarPreloadWatch = spawn({
    cmd: [esbuildBin, ...preloadEsbuildArgs("browser-toolbar", true)],
    cwd: ELECTRON_DIR,
    stdin: "ignore",
    stdout: "inherit",
    stderr: "inherit",
    env: childEnvWithGoMax(process.env.CRAFT_ESBUILD_GOMAXPROCS?.trim() || "2"),
  });
  processes.push(toolbarPreloadWatch);
  console.log("👀 Watching browser toolbar preload (esbuild --watch)…");

  // 5. Start Electron (build already verified)
  console.log("🚀 Starting Electron...\n");

  const electronProc = spawn({
    cmd: [ELECTRON_BIN, "apps/electron"],
    cwd: ROOT_DIR,
    stdin: "ignore",
    stdout: "inherit",
    stderr: "inherit",
    env: getElectronEnv(),
  });
  processes.push(electronProc);

  // Handle cleanup on exit
  const cleanup = async () => {
    console.log("\n🛑 Shutting down...");
    // Kill subprocesses (Vite, esbuild --watch children, Electron)
    for (const proc of processes) {
      try {
        proc.kill();
      } catch {
        // Process may already be dead
      }
    }
    process.exit(0);
  };

  process.on("SIGINT", () => cleanup());
  process.on("SIGTERM", () => cleanup());

  // Windows doesn't have SIGINT/SIGTERM in the same way
  if (process.platform === "win32") {
    process.on("SIGHUP", () => cleanup());
  }

  // Wait for electron to exit (main process)
  await electronProc.exited;
  await cleanup();
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
