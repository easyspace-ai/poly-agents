/**
 * Shared spawn helpers for esbuild / Bun-driven CLI builds.
 * Exit 137 is often SIGKILL from the OOM reaper — cap Go parallelism (GOMAXPROCS) and retry.
 */

import { spawn } from "bun";

export function childEnvWithGoMax(goMaxProcs: string): Record<string, string> {
  const env: Record<string, string> = {};
  for (const [k, v] of Object.entries(process.env)) {
    if (v !== undefined) env[k] = v;
  }
  env.GOMAXPROCS = goMaxProcs;
  return env;
}

/**
 * Run a build command with GOMAXPROCS capped (default 2; override CRAFT_ESBUILD_GOMAXPROCS).
 * Retries up to 3 times on exit 137 with GOMAXPROCS=1.
 */
export async function spawnWithOomRetry(
  cmd: string[],
  cwd: string,
  opts?: { label?: string },
): Promise<number> {
  const maxAttempts = 3;
  const label = opts?.label ?? cmd[0] ?? "build";
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (attempt > 0) {
      const delayMs = attempt === 1 ? 2000 : 4500;
      console.warn(
        `⚠️  ${label} exited 137 (often OOM killer). Waiting ${delayMs}ms and retrying with GOMAXPROCS=1 (${attempt + 1}/${maxAttempts})…`,
      );
      await Bun.sleep(delayMs);
    }
    const go =
      attempt === 0 ? (process.env.CRAFT_ESBUILD_GOMAXPROCS?.trim() || "2") : "1";
    const proc = spawn({
      cmd,
      cwd,
      stdout: "inherit",
      stderr: "inherit",
      env: childEnvWithGoMax(go),
    });
    const exitCode = await proc.exited;
    if (exitCode === 0) return 0;
    if (exitCode === 137 && attempt < maxAttempts - 1) continue;
    return exitCode ?? 1;
  }
  return 137;
}
