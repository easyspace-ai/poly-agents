/**
 * Poly ↔ Electron IPC — channel names and request shapes (single source of truth).
 * See docs/poly-integration/04-ipc-contract.md.
 */

export const POLY_IPC_CHANNELS = {
  HTTP_REQUEST: 'poly:httpRequest',
} as const

export type PolyIpcChannel = (typeof POLY_IPC_CHANNELS)[keyof typeof POLY_IPC_CHANNELS]

/** Renderer → main → loopback poly HTTP (path must stay under `/api/`). */
export type PolyHttpRequestSpec = {
  method?: string
  path: string
  body?: unknown
  headers?: Record<string, string>
}

/** Proxied fetch result (`ok` mirrors `Response.ok`, not transport success). */
export type PolyHttpResponseEnvelope = {
  ok: boolean
  status: number
  json?: unknown
  text?: string
}

function isPlainRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

/**
 * Validates the IPC payload before the main process proxies to the poly child HTTP server.
 */
export function parsePolyHttpRequestSpec(raw: unknown): { ok: true; value: PolyHttpRequestSpec } | { ok: false; reason: string } {
  if (!isPlainRecord(raw)) {
    return { ok: false, reason: 'invalid_body' }
  }
  const path = raw.path
  if (typeof path !== 'string' || !path.startsWith('/api/')) {
    return { ok: false, reason: 'invalid_poly_path' }
  }
  const methodRaw = raw.method
  const method = typeof methodRaw === 'string' && methodRaw.length > 0 ? methodRaw.toUpperCase() : 'GET'
  if (method.length > 24 || !/^[A-Z]+$/.test(method)) {
    return { ok: false, reason: 'invalid_method' }
  }
  let headers: Record<string, string> | undefined
  if (raw.headers !== undefined) {
    if (!isPlainRecord(raw.headers)) {
      return { ok: false, reason: 'invalid_headers' }
    }
    headers = {}
    for (const [k, v] of Object.entries(raw.headers)) {
      if (typeof v === 'string') headers[k] = v
    }
  }
  return {
    ok: true,
    value: {
      method,
      path,
      body: raw.body,
      headers,
    },
  }
}
