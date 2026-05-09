import { POLY_IPC_CHANNELS, parsePolyHttpRequestSpec, type PolyHttpResponseEnvelope } from '@craft-agent/shared/poly-ipc'
import { ipcMain } from 'electron'
import log from '../logger'

let polyBaseUrl: string | null = null

export function setPolyHttpBaseUrl(url: string | null): void {
  polyBaseUrl = url
}

export function registerPolyIpcHandlers(): void {
  ipcMain.handle(POLY_IPC_CHANNELS.IS_READY, async () => Boolean(polyBaseUrl))

  ipcMain.handle(POLY_IPC_CHANNELS.HTTP_REQUEST, async (_event, raw: unknown): Promise<PolyHttpResponseEnvelope> => {
    if (!polyBaseUrl) {
      return { ok: false, status: 503, text: 'poly_not_ready' }
    }
    const parsed = parsePolyHttpRequestSpec(raw)
    if (!parsed.ok) {
      return { ok: false, status: 400, text: parsed.reason }
    }
    const s = parsed.value
    const path = s.path.startsWith('/') ? s.path : `/${s.path}`
    const url = `${polyBaseUrl}${path}`
    const method = s.method ?? 'GET'
    const headers: Record<string, string> = { ...s.headers }
    const init: RequestInit = { method, headers }
    if (s.body != null && method !== 'GET' && method !== 'HEAD') {
      if (!headers['content-type'] && !headers['Content-Type']) {
        headers['content-type'] = 'application/json'
      }
      init.body = typeof s.body === 'string' ? s.body : JSON.stringify(s.body)
    }
    try {
      const res = await fetch(url, init)
      const ct = res.headers.get('content-type') || ''
      if (ct.includes('application/json')) {
        const json = await res.json()
        return { ok: res.ok, status: res.status, json }
      }
      const text = await res.text()
      return { ok: res.ok, status: res.status, text }
    } catch (err) {
      log.error(err, 'poly:httpRequest failed')
      return { ok: false, status: 502, text: err instanceof Error ? err.message : 'fetch_failed' }
    }
  })
}
