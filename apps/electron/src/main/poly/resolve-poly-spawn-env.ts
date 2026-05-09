/**
 * Build extra env for the poly-bot child: Craft app Network proxy + Messaging Telegram
 * (same sources as Settings → Network / Messaging), so poly-bot does not use separate
 * BotConfig keys for proxy or Telegram.
 */

import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  CONFIG_DIR,
  getActiveWorkspace,
  getNetworkProxySettings,
  getProxyEnvVars,
  getWorkspaces,
} from '@poly-agents/shared/config'
import { getCredentialManager } from '@poly-agents/shared/credentials'

function readJsonFile(path: string): unknown | null {
  try {
    if (!existsSync(path)) return null
    return JSON.parse(readFileSync(path, 'utf-8')) as unknown
  } catch {
    return null
  }
}

function telegramChatIdFromWorkspace(wsId: string): string | undefined {
  const base = join(CONFIG_DIR, 'workspaces', wsId, 'messaging')
  const cfgRaw = readJsonFile(join(base, 'config.json'))
  const cfg = cfgRaw && typeof cfgRaw === 'object' ? (cfgRaw as Record<string, unknown>) : null
  const platforms = cfg?.platforms as Record<string, unknown> | undefined
  const tg = platforms?.telegram as Record<string, unknown> | undefined
  const sg = tg?.supergroup as Record<string, unknown> | undefined
  const fromSuper = typeof sg?.chatId === 'string' && sg.chatId.trim() ? sg.chatId.trim() : undefined
  if (fromSuper) return fromSuper

  const bindRaw = readJsonFile(join(base, 'bindings.json'))
  if (!Array.isArray(bindRaw)) return undefined
  for (const item of bindRaw) {
    if (!item || typeof item !== 'object') continue
    const b = item as Record<string, unknown>
    if (b.platform !== 'telegram') continue
    if (b.enabled === false) continue
    const cid = String(b.channelId ?? '').trim()
    if (cid) return cid
  }
  return undefined
}

function orderedLocalWorkspaceIds(): string[] {
  const all = getWorkspaces()
    .filter((w) => !w.remoteServer)
    .map((w) => w.id)
  const active = getActiveWorkspace()?.id
  const out: string[] = []
  if (active && all.includes(active)) out.push(active)
  for (const id of all) {
    if (!out.includes(id)) out.push(id)
  }
  return out
}

export async function resolvePolySpawnEnv(): Promise<Record<string, string>> {
  const extra: Record<string, string> = { ...getProxyEnvVars() }
  const np = getNetworkProxySettings()
  if (np?.enabled) {
    const u = (np.httpsProxy || np.httpProxy || '').trim()
    if (u) extra.HTTP_PLATFORM_PROXY_URL = u
  }

  const mgr = getCredentialManager()
  for (const wsId of orderedLocalWorkspaceIds()) {
    let token: string | undefined
    try {
      const cred = await mgr.get({ type: 'messaging_bearer', workspaceId: wsId, name: 'telegram' })
      token = cred?.value?.trim()
    } catch {
      token = undefined
    }
    if (!token) continue
    const chatId = telegramChatIdFromWorkspace(wsId)
    if (!chatId) continue
    extra.TELEGRAM_BOT_TOKEN = token
    extra.TELEGRAM_AUTHORIZED_CHAT_ID = chatId
    break
  }

  return extra
}
