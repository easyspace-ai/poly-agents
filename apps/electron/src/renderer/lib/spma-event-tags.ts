/** Lowercase league / sport tags — same shape as dashboard `eventClassificationTags`. */

export const DEFAULT_SPMA_EVENT_TAGS = ['nba', 'nhl'] as const

export const SUGGESTED_SPMA_LEAGUE_TAGS = ['NBA', 'NCAAB', 'NHL', 'EPL', 'MLS', 'UCL', 'MLB'] as const

export function parseEventClassificationTags(raw: string): string[] {
  if (!raw.trim()) return [...DEFAULT_SPMA_EVENT_TAGS]
  try {
    const p = JSON.parse(raw) as unknown
    if (!Array.isArray(p)) return [...DEFAULT_SPMA_EVENT_TAGS]
    return p
      .map((x) => String(x).trim().toLowerCase())
      .filter(Boolean)
  } catch {
    return [...DEFAULT_SPMA_EVENT_TAGS]
  }
}

/** Match dashboard `leagueMatchesEventTag` — tag is lowercased league key from settings. */
export function leagueMatchesEventTag(league: string, tagLower: string): boolean {
  return league.trim().toLowerCase() === tagLower.trim().toLowerCase()
}
