/**
 * SPMA navigator — three-column shell uses this as columns 1+2: tags (from BotConfig) + filtered event list.
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { navigate, routes } from '@/lib/navigate'
import { cn } from '@/lib/utils'
import { SpmaPolySetupGateInline } from '@/components/spma/SpmaPolySetupGateInline'
import {
  DEFAULT_SPMA_EVENT_TAGS,
  leagueMatchesEventTag,
  parseEventClassificationTags,
} from '@/lib/spma-event-tags'
import {
  polyFetchConfig,
  polyFetchHealth,
  polyFetchMarkets,
  polyFetchSetupStatus,
  polyIsReady,
  type PolyMarketRow,
  type PolySetupStatus,
} from '@/lib/poly-client'
import { usePolyDataWarmupPoll } from '@/lib/use-poly-data-warmup-poll'
import { filterToMoneylineList } from '@/lib/spma-moneyline-markets'

function filterByTag(
  moneyLineMarkets: PolyMarketRow[],
  tags: string[],
  selectedTag: string,
  inPlayMode: boolean,
): PolyMarketRow[] {
  const tagged = moneyLineMarkets.filter((m) => tags.some((t) => leagueMatchesEventTag(m.league, t)))
  if (inPlayMode) {
    const now = Date.now()
    return tagged.filter((m) => {
      if (!m.startTime) return false
      const t = new Date(m.startTime).getTime()
      if (!Number.isFinite(t)) return false
      // Heuristic “likely in window” without fixture WS — same kickoff window as dashboard list.
      return t <= now && now - t < 5 * 60 * 60 * 1000
    })
  }
  return tagged.filter((m) => leagueMatchesEventTag(m.league, selectedTag))
}

function inPlayHeuristic(m: PolyMarketRow): boolean {
  if (!m.startTime) return false
  const t = new Date(m.startTime).getTime()
  const now = Date.now()
  return Number.isFinite(t) && t <= now && now - t < 5 * 60 * 60 * 1000
}

export function SpmaPolyMarketsNavigator({ selectedMarketId }: { selectedMarketId: string | null }) {
  const { t } = useTranslation()
  const [ready, setReady] = React.useState<boolean | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [health, setHealth] = React.useState<string | null>(null)
  const [setup, setSetup] = React.useState<PolySetupStatus | null>(null)
  const [markets, setMarkets] = React.useState<PolyMarketRow[] | null>(null)
  const [eventTags, setEventTags] = React.useState<string[]>(() => [...DEFAULT_SPMA_EVENT_TAGS])
  const [selectedTag, setSelectedTag] = React.useState<string>(DEFAULT_SPMA_EVENT_TAGS[0] ?? 'nba')
  const [inPlayMode, setInPlayMode] = React.useState(false)

  const reload = React.useCallback(async () => {
    setError(null)
    try {
      const ok = await polyIsReady()
      setReady(ok)
      if (!ok) {
        setError('Poly backend is not running (install Bun and restart the app).')
        setMarkets(null)
        setHealth(null)
        setSetup(null)
        return
      }
      const [h, st, list, cfg] = await Promise.all([
        polyFetchHealth(),
        polyFetchSetupStatus(),
        polyFetchMarkets(),
        polyFetchConfig().catch(() => [] as { key: string; value: string }[]),
      ])
      setHealth(`${h.status}${h.db ? ` · ${h.db}` : ''}`)
      setSetup(st)
      setMarkets(list)
      const raw = cfg.find((r) => r.key === 'eventClassificationTags')?.value ?? ''
      setEventTags(parseEventClassificationTags(raw))
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    }
  }, [])

  React.useEffect(() => {
    void reload()
  }, [reload])

  React.useEffect(() => {
    if (eventTags.length === 0) return
    setSelectedTag((prev) => (eventTags.includes(prev) ? prev : eventTags[0]!))
  }, [eventTags])

  usePolyDataWarmupPoll({
    enabled:
      ready === true &&
      Boolean(setup && !setup.needsOnboarding && markets && markets.length === 0),
    reload,
  })

  const moneyLineMarkets = React.useMemo(
    () => (markets ? filterToMoneylineList(markets) : []),
    [markets],
  )

  const taggedMarkets = React.useMemo(() => {
    return moneyLineMarkets.filter((m) => eventTags.some((tag) => leagueMatchesEventTag(m.league, tag)))
  }, [moneyLineMarkets, eventTags])

  const tagCounts = React.useMemo(() => {
    const map = new Map<string, number>()
    for (const tag of eventTags) {
      map.set(tag, taggedMarkets.filter((m) => leagueMatchesEventTag(m.league, tag)).length)
    }
    return map
  }, [eventTags, taggedMarkets])

  const inPlayCount = React.useMemo(
    () => taggedMarkets.filter((m) => inPlayHeuristic(m)).length,
    [taggedMarkets],
  )

  const filteredMarkets = React.useMemo(
    () => (markets ? filterByTag(moneyLineMarkets, eventTags, selectedTag, inPlayMode) : []),
    [markets, moneyLineMarkets, eventTags, selectedTag, inPlayMode],
  )

  const moneyLineEmpty = Boolean(markets && markets.length > 0 && moneyLineMarkets.length === 0)

  const [tick, setTick] = React.useState(0)
  const [lastFetch, setLastFetch] = React.useState<Date | null>(null)
  React.useEffect(() => {
    if (markets) setLastFetch(new Date())
  }, [markets])
  React.useEffect(() => {
    const id = window.setInterval(() => setTick((x) => x + 1), 1000)
    return () => window.clearInterval(id)
  }, [])

  const fetchAge = React.useMemo(() => {
    void tick
    if (!lastFetch) return '—'
    const s = Math.floor((Date.now() - lastFetch.getTime()) / 1000)
    if (s < 60) return t('spma.markets.fetchAgeSeconds', { n: s })
    if (s < 3600) return t('spma.markets.fetchAgeMinutes', { n: Math.floor(s / 60) })
    return t('spma.markets.fetchAgeHours', { n: Math.floor(s / 3600) })
  }, [lastFetch, t, tick])

  return (
    <div className="flex h-full min-h-0 flex-col text-sm text-muted-foreground">
      <div className="shrink-0 border-b border-border px-3 py-2">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-medium text-foreground">{t('spma.listTitle.markets')}</h2>
          <span className="rounded border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            {fetchAge}
          </span>
        </div>
        {ready === false && <p className="mt-1 text-xs text-destructive">{error}</p>}
        {ready && health && <p className="mt-1 text-xs text-muted-foreground">{health}</p>}
        {error && ready !== false && <p className="mt-1 text-xs text-destructive">{error}</p>}
      </div>

      <SpmaPolySetupGateInline setup={setup} bannerKey="spma.markets.onboardingBanner" onReload={reload} />

      <div className="flex min-h-0 flex-1 divide-x divide-border">
        <aside className="flex w-[7.5rem] shrink-0 flex-col overflow-y-auto bg-muted/20 py-2">
          <p className="px-2 pb-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t('spma.markets.tagColumnTitle')}
          </p>
          <button
            type="button"
            onClick={() => {
              setInPlayMode(true)
              navigate(routes.view.poly('markets'))
            }}
            className={cn(
              'mx-1 flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-left text-xs transition-colors',
              inPlayMode ? 'bg-primary/15 text-foreground' : 'hover:bg-muted/80',
            )}
          >
            <span className="flex min-w-0 items-center gap-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
              <span className="truncate">{t('spma.markets.inPlay')}</span>
            </span>
            <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{inPlayCount}</span>
          </button>
          {eventTags.map((tag) => {
            const active = !inPlayMode && selectedTag === tag
            const c = tagCounts.get(tag) ?? 0
            return (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setInPlayMode(false)
                  setSelectedTag(tag)
                  navigate(routes.view.poly('markets'))
                }}
                className={cn(
                  'mx-1 flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-left text-xs transition-colors',
                  active ? 'bg-primary/15 text-foreground' : 'hover:bg-muted/80',
                )}
              >
                <span className="truncate font-medium uppercase">{tag}</span>
                <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{c}</span>
              </button>
            )
          })}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="shrink-0 space-y-0.5 border-b border-border px-3 py-1.5">
            <p className="font-mono text-[10px] text-muted-foreground">
              {inPlayMode ? t('spma.markets.listInPlay') : t('spma.markets.listForTag', { tag: selectedTag.toUpperCase() })}
            </p>
            <p className="text-[10px] leading-snug text-muted-foreground/90">{t('spma.markets.moneyLineOnlyHint')}</p>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            {markets && (
              <table className="w-full text-left text-xs">
                <thead className="sticky top-0 z-10 bg-muted/90 backdrop-blur">
                  <tr>
                    <th className="p-2 font-medium text-foreground">{t('spma.markets.colLeague')}</th>
                    <th className="p-2 font-medium text-foreground">{t('spma.markets.colMatch')}</th>
                    <th className="p-2 font-medium text-foreground">{t('spma.markets.colStatus')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMarkets.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="p-3 text-muted-foreground">
                        {markets.length === 0
                          ? t('spma.markets.empty')
                          : moneyLineEmpty
                            ? t('spma.markets.emptyNoMoneyline')
                            : inPlayMode
                              ? t('spma.markets.emptyInPlay')
                              : t('spma.markets.emptyForTag', { tag: selectedTag.toUpperCase() })}
                      </td>
                    </tr>
                  ) : (
                    filteredMarkets.slice(0, 400).map((m) => {
                      const selected = selectedMarketId === m.id
                      return (
                        <tr
                          key={m.id}
                          role="button"
                          tabIndex={0}
                          className={cn(
                            'cursor-pointer border-t border-border/60 transition-colors hover:bg-muted/50',
                            selected && 'bg-muted/70',
                          )}
                          onClick={() => navigate(routes.view.poly('markets', m.id))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              navigate(routes.view.poly('markets', m.id))
                            }
                          }}
                        >
                          <td className="p-2 align-top text-foreground">{m.league}</td>
                          <td className="p-2 align-top text-foreground">{m.name}</td>
                          <td className="p-2 align-top">{m.status}</td>
                        </tr>
                      )
                    })
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
