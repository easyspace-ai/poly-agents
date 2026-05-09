import { spawn, type ChildProcess } from 'node:child_process'
import { createInterface } from 'node:readline'
import type { Readable } from 'node:stream'
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { app } from 'electron'
import { CONFIG_DIR } from '@poly-agents/shared/config/storage'
import log from '../logger'
import { setPolyHttpBaseUrl } from './register-poly-ipc'
import { resolvePolySpawnEnv } from './resolve-poly-spawn-env'

let polyChild: ChildProcess | null = null

function resolvePolyBotPackageRoot(): string {
  const bundledRoot = join(__dirname, 'resources', 'poly-bot')
  /** Must match the Bun entry we spawn — copy-assets may only ship prisma until a full bundle exists. */
  const bundledEntry = join(bundledRoot, 'src', 'electron-stdio-port.ts')
  if (existsSync(bundledEntry)) {
    return bundledRoot
  }
  return join(__dirname, '../../../packages/poly-bot')
}

function resolveBunExecutable(): string {
  const fromEnv = process.env.CRAFT_BUN_PATH?.trim()
  if (fromEnv) return fromEnv
  return process.platform === 'win32' ? 'bun.exe' : 'bun'
}

async function waitForPolyReady(child: ChildProcess, timeoutMs: number): Promise<number> {
  const stdout = child.stdout
  if (!stdout) {
    throw new Error('poly child: stdout not piped')
  }
  return await new Promise((resolve, reject) => {
    const rl = createInterface({ input: stdout as Readable })
    const timer = setTimeout(() => {
      cleanup()
      reject(new Error('poly child: timeout waiting for POLY_READY'))
    }, timeoutMs)

    const onExit = (code: number | null, signal: NodeJS.Signals | null) => {
      cleanup()
      reject(new Error(`poly child exited before ready (code=${String(code)} signal=${String(signal)})`))
    }

    const onErr = (err: Error) => {
      cleanup()
      reject(err)
    }

    function cleanup(): void {
      clearTimeout(timer)
      child.off('exit', onExit)
      child.off('error', onErr)
      rl.close()
    }

    child.stderr?.on('data', (chunk: Buffer) => {
      const s = chunk.toString()
      if (s.trim()) log.warn(`[poly-child] ${s.slice(0, 800)}`)
    })

    child.once('exit', onExit)
    child.once('error', onErr)

    rl.on('line', (line) => {
      const m = /^POLY_READY\s+(\d+)\s*$/.exec(line)
      if (m) {
        cleanup()
        child.stderr?.removeAllListeners('data')
        resolve(Number(m[1]))
      }
    })
  })
}

/**
 * Starts poly-bot in a **subprocess** (Bun) so the Electron main bundle does not include the full bot graph.
 */
export async function startPolyBackendInMain(isClientOnly: boolean): Promise<void> {
  if (isClientOnly) {
    return
  }
  const polyRoot = resolvePolyBotPackageRoot()
  const entry = join(polyRoot, 'src', 'electron-stdio-port.ts')
  if (!existsSync(entry)) {
    log.error({ entry }, '[poly] entry missing — skip start')
    setPolyHttpBaseUrl(null)
    return
  }

  const polyDir = join(CONFIG_DIR, 'poly')
  mkdirSync(polyDir, { recursive: true })
  const dbPath = join(polyDir, 'app.db')
  const legacyDbPath = join(app.getPath('userData'), 'poly', 'app.db')
  if (!existsSync(dbPath) && existsSync(legacyDbPath)) {
    try {
      copyFileSync(legacyDbPath, dbPath)
      log.info({ from: legacyDbPath, to: dbPath }, '[poly] migrated SQLite to CRAFT_CONFIG_DIR')
    } catch (err) {
      log.warn({ err, legacyDbPath, dbPath }, '[poly] could not migrate legacy DB; continuing with fresh DB if needed')
    }
  }
  const defaultPolyLogFile = join(polyDir, 'poly-bot.log')

  const craftEnv = await resolvePolySpawnEnv()
  const env = {
    ...process.env,
    ...craftEnv,
    POLY_ELECTRON: '1',
    DATABASE_URL: `file:${dbPath}`,
    POLY_BOT_PACKAGE_ROOT: polyRoot,
    /** JSON lines from pino (packages/poly-bot logger); override with POLY_LOG_FILE in shell if needed. */
    POLY_LOG_FILE: process.env.POLY_LOG_FILE?.trim() || defaultPolyLogFile,
  }

  const bun = resolveBunExecutable()
  const child = spawn(bun, [entry], {
    cwd: polyRoot,
    env,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  polyChild = child

  try {
    const port = await waitForPolyReady(child, 120_000)
    const baseUrl = `http://127.0.0.1:${port}`
    setPolyHttpBaseUrl(baseUrl)
    log.info({ baseUrl, polyRoot, polyLogFile: env.POLY_LOG_FILE }, '[poly] subprocess backend ready')
  } catch (err) {
    log.error(err, '[poly] subprocess failed to start')
    child.kill('SIGTERM')
    polyChild = null
    setPolyHttpBaseUrl(null)
  }
}

export async function disposePolyBackend(): Promise<void> {
  setPolyHttpBaseUrl(null)
  if (polyChild) {
    polyChild.kill('SIGTERM')
    polyChild = null
  }
}
