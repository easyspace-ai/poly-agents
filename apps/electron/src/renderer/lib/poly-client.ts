export type PolyHealth = { status: string; db?: string; message?: string }

export type PolySetupStatus = {
  needsOnboarding: boolean
  proxyConfigured: boolean
  polymarketConfigured: boolean
}

export type PolyMarketOutcomeRow = {
  id: string
  label: string
  platform?: string
  externalId?: string
  impliedOdds: number
  availableSize?: number
  lastUpdated?: string
  canonicalKey?: string
}

/** `/api/markets` row — fields optional where older caches omit them. */
export type PolyMarketRow = {
  id: string
  eventId?: string
  /** `12` = two-way money line (NA); `1x2` = soccer W/D/W; omit spread/total in list UI. */
  betType?: string
  mainLine?: boolean
  platform?: string
  name: string
  league: string
  sport: string
  status: string
  startTime?: string | null
  homeTeam?: string | null
  awayTeam?: string | null
  outcomes?: PolyMarketOutcomeRow[]
}

export type PolyRiskPositionRow = {
  id: string
  title: string
  sideLabel: string
  sizeShares: number
  status: string
  pnlUsd: number | null
}

export type PolyRiskTasksPayload = {
  tasks: Array<{
    id: string
    type: string
    status: string
    attempts: number
    lastError: string | null
    updatedAt: string
  }>
}

export type PolyRiskPositionsPayload = {
  positions: PolyRiskPositionRow[]
  meta: {
    userWsConnected: boolean
    userWsConnecting: boolean
    /** Legacy / alternate field names from the bot API — UI may read either. */
    userWsLastIssue?: string | null
    userWsLastMessageAt?: string | null
    restTradesSyncLastAt?: string | null
    outboundProxyConfigured?: boolean
    minOpenRiskShares?: number
  }
}

export type PolyTradesPayload = {
  total: number
  page: number
  limit: number
  trades: Array<{
    id: string
    createdAt: string
    marketName: string
    outcomeLabel: string
    platform: string
    status: string
  }>
}

export type PolyAccountRow = {
  id: string
  name: string
  funderAddress: string
  isActive: boolean
  createdAt: string
}

/** `/api/balances` — per-account Polymarket collateral (USDC) + active summary. */
export type PolyBalanceAccountRow = {
  id: string
  name: string
  isActive: boolean
  polymarket: number | null
}

export type PolyBalancesPayload = {
  polymarket: number | null
  polymarketAccounts: PolyBalanceAccountRow[]
}

export async function polyIsReady(): Promise<boolean> {
  return window.electronAPI.polyIsReady()
}

function buildPathWithQuery(path: string, query?: Record<string, string | number | boolean | undefined>): string {
  if (!query || Object.keys(query).length === 0) return path
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(query)) {
    if (v === undefined) continue
    params.set(k, String(v))
  }
  const qs = params.toString()
  return qs ? `${path}?${qs}` : path
}

function polyErrorMessageFromEnvelope(res: {
  ok: boolean
  status: number
  json?: unknown
  text?: string
}): string {
  if (typeof res.json === 'object' && res.json !== null) {
    const j = res.json as { message?: unknown; error?: unknown }
    if (typeof j.message === 'string' && j.message.length > 0) return j.message
    if (typeof j.error === 'string' && j.error.length > 0) return j.error
  }
  if (typeof res.text === 'string' && res.text.length > 0) return res.text
  return `HTTP ${res.status}`
}

export async function polyRequestJson<T>(opts: {
  method?: string
  path: string
  query?: Record<string, string | number | boolean | undefined>
  body?: unknown
}): Promise<T> {
  const fullPath = buildPathWithQuery(opts.path, opts.query)
  const res = await window.electronAPI.polyHttpRequest({
    method: opts.method ?? 'GET',
    path: fullPath,
    body: opts.body,
  })
  if (!res.ok) {
    throw new Error(polyErrorMessageFromEnvelope(res))
  }
  if (res.json === undefined) {
    throw new Error('poly: expected JSON body')
  }
  return res.json as T
}

export async function polyGetJson<T>(path: string, query?: Record<string, string | number | boolean | undefined>): Promise<T> {
  return polyRequestJson<T>({ method: 'GET', path, query })
}

export type PolyConfigRow = { key: string; value: string }

export async function polyFetchConfig(): Promise<PolyConfigRow[]> {
  return polyGetJson<PolyConfigRow[]>('/api/config')
}

export async function polyPutConfigKey(key: string, value: string): Promise<PolyConfigRow> {
  const path = `/api/config/${encodeURIComponent(key)}`
  return polyRequestJson<PolyConfigRow>({ method: 'PUT', path, body: { value } })
}

export async function polyFetchMarkets(): Promise<PolyMarketRow[]> {
  return polyGetJson<PolyMarketRow[]>('/api/markets')
}

export async function polyFetchSetupStatus(): Promise<PolySetupStatus> {
  return polyGetJson<PolySetupStatus>('/api/setup/status')
}

/** Marks onboarding complete and starts heavy services (market sync, WS, etc.). */
export async function polyPostSetupComplete(): Promise<{ ok: boolean }> {
  return polyRequestJson<{ ok: boolean }>({ method: 'POST', path: '/api/setup/complete' })
}

export async function polyFetchHealth(): Promise<PolyHealth> {
  return polyGetJson<PolyHealth>('/api/health')
}

export async function polyFetchRiskOverview(): Promise<PolyRiskPositionsPayload> {
  return polyGetJson<PolyRiskPositionsPayload>('/api/risk/positions')
}

export async function polyFetchRiskTasks(limit = 40): Promise<PolyRiskTasksPayload> {
  return polyGetJson<PolyRiskTasksPayload>('/api/risk/tasks', { limit })
}

export async function polyFetchTradesPage(page = 1, limit = 25): Promise<PolyTradesPayload> {
  return polyGetJson<PolyTradesPayload>('/api/trades', { page, limit })
}

export async function polyFetchPolymarketAccounts(): Promise<PolyAccountRow[]> {
  return polyGetJson<PolyAccountRow[]>('/api/polymarket/accounts')
}

export async function polyFetchBalances(): Promise<PolyBalancesPayload> {
  return polyGetJson<PolyBalancesPayload>('/api/balances')
}

export type PolyOrderBookLevel = {
  odds: number
  size: number
  platform: 'sx' | 'polymarket'
}

export type PolyOrderBookPayload = {
  levels: PolyOrderBookLevel[]
  polyTokenId?: string
}

export async function polyFetchOrderbook(outcomeId: string): Promise<PolyOrderBookPayload> {
  return polyGetJson<PolyOrderBookPayload>('/api/trade/orderbook', { outcomeId })
}

export type PolyTradeExecuteResponse = {
  status: 'filled' | 'partial' | 'failed'
  trades: Array<{ tradeId: string; status: string; platform: string; txHash?: string }>
}

export async function polyPostTrade(body: {
  outcomeId: string
  side: string
  size: number
}): Promise<PolyTradeExecuteResponse> {
  return polyRequestJson<PolyTradeExecuteResponse>({ method: 'POST', path: '/api/trade', body })
}

export type PolyCreateAccountResult = {
  id: string
  name: string
  funderAddress: string
  isActive: boolean
}

export async function polyCreatePolymarketAccount(body: {
  name: string
  privateKey: string
}): Promise<PolyCreateAccountResult> {
  return polyRequestJson<PolyCreateAccountResult>({
    method: 'POST',
    path: '/api/polymarket/accounts',
    body,
  })
}
