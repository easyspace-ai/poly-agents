/**
 * Markets list should mirror the legacy dashboard “Money Line” column only:
 * NA two-way (`12`) and soccer 1X2 (`1x2`). Excludes spread, totals, alt lines.
 */

export type SpmaMarketBetRow = {
  betType?: string | null
  eventId?: string | null
  name: string
  startTime?: string | null
  platform?: string | null
}

const MONEYLINE_FAMILY = new Set(['12', '1x2'])

export function isMoneylineFamilyMarket(m: SpmaMarketBetRow): boolean {
  const t = (m.betType ?? '').trim().toLowerCase()
  return MONEYLINE_FAMILY.has(t)
}

function venueRank(platform: string | null | undefined): number {
  return platform === 'polymarket' ? 1 : 0
}

/** One row per event for the same bet-type bucket; prefer Polymarket when both exist. */
export function dedupeMoneylineByEvent<T extends SpmaMarketBetRow>(rows: T[]): T[] {
  const map = new Map<string, T>()
  for (const m of rows) {
    const eventKey = (m.eventId && m.eventId.trim()) || `${m.name}\0${m.startTime ?? ''}`
    const key = `${eventKey}\0${(m.betType ?? '').toLowerCase()}`
    const prev = map.get(key)
    if (!prev || venueRank(m.platform) > venueRank(prev.platform)) {
      map.set(key, m)
    }
  }
  return Array.from(map.values())
}

export function filterToMoneylineList<T extends SpmaMarketBetRow>(rows: T[]): T[] {
  const filtered = rows.filter(isMoneylineFamilyMarket)
  return dedupeMoneylineByEvent(filtered).sort((a, b) => {
    const ta = a.startTime ? new Date(a.startTime).getTime() : 0
    const tb = b.startTime ? new Date(b.startTime).getTime() : 0
    return ta - tb
  })
}
