/**
 * Default BotConfig string values (align with packages/poly-bot sync/marketSync seed).
 * Used when GET /api/config has not yet returned a row (e.g. before first market sync).
 */

export const DEFAULT_POLY_PRICE_STOP_LOSS_RANGES_JSON = JSON.stringify([
  { id: 'r1', name: '20-30¢', minCents: 20, maxCents: 30, fundPct: 17, stopLossPct: 20 },
  { id: 'r2', name: '30-40¢', minCents: 30, maxCents: 40, fundPct: 17, stopLossPct: 20 },
  { id: 'r3', name: '40-50¢', minCents: 40, maxCents: 50, fundPct: 17, stopLossPct: 20 },
  { id: 'r4', name: '50-60¢', minCents: 50, maxCents: 60, fundPct: 17, stopLossPct: 20 },
  { id: 'r5', name: '60-70¢', minCents: 60, maxCents: 70, fundPct: 16, stopLossPct: 20 },
  { id: 'r6', name: '70-80¢', minCents: 70, maxCents: 80, fundPct: 16, stopLossPct: 20 },
])

export const POLY_BOT_CONFIG_DEFAULTS: Record<string, string> = {
  pollingInterval: '30',
  maxTradeSize: '100',
  slippageTolerance: '0.05',
  orderBookLevels: '10',
  eventClassificationTags: '["nba","nhl"]',
  priceStopLossRanges: DEFAULT_POLY_PRICE_STOP_LOSS_RANGES_JSON,
  polymarketFokBuyExtraTicks: '5',
  polymarketFokSellExtraTicks: '5',
  minOpenRiskShares: '1',
  onboardingComplete: 'false',
}

/** Keys masked in GET /api/config — must match packages/poly-bot/src/routes/config.ts */
export const POLY_CONFIG_SENSITIVE_KEYS = new Set([
  'polymarketApiKey',
  'polymarketSecret',
  'polymarketPassphrase',
])
