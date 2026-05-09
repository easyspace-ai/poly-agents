/**
 * SPMA main column — selected market: outcome picker + right slip (order book + buy).
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { PanelHeader } from '@/components/app-shell/PanelHeader'
import { ScrollArea } from '@/components/ui/scroll-area'
import { HeaderMenu } from '@/components/ui/HeaderMenu'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/navigate'
import { SpmaPolySetupGateInline } from '@/components/spma/SpmaPolySetupGateInline'
import { SpmaPolyMarketsSlipPanel } from '@/components/spma/SpmaPolyMarketsSlipPanel'
import { formatSpmaOdds, useSpmaOddsFormat } from '@/lib/spma-odds-format-preference'
import {
  polyFetchHealth,
  polyFetchMarkets,
  polyFetchSetupStatus,
  polyIsReady,
  type PolyMarketOutcomeRow,
  type PolyMarketRow,
  type PolySetupStatus,
} from '@/lib/poly-client'
import { usePolyDataWarmupPoll } from '@/lib/use-poly-data-warmup-poll'
import { cn } from '@/lib/utils'

function formatStartTime(raw: string | null | undefined, locale: string): string | null {
  if (!raw) return null
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return raw
  return d.toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' })
}

function pickDefaultOutcome(outcomes: PolyMarketOutcomeRow[] | undefined): string | null {
  if (!outcomes?.length) return null
  const poly = outcomes.find((o) => o.platform === 'polymarket')
  return (poly ?? outcomes[0])?.id ?? null
}

export function SpmaPolyMarketsMainPanel({ marketId }: { marketId: string | null }) {
  const { t, i18n } = useTranslation()
  const [oddsFormat] = useSpmaOddsFormat()
  const [ready, setReady] = React.useState<boolean | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [health, setHealth] = React.useState<string | null>(null)
  const [setup, setSetup] = React.useState<PolySetupStatus | null>(null)
  const [markets, setMarkets] = React.useState<PolyMarketRow[] | null>(null)
  const [slipOutcomeId, setSlipOutcomeId] = React.useState<string | null>(null)

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
      const [h, st, list] = await Promise.all([
        polyFetchHealth(),
        polyFetchSetupStatus(),
        polyFetchMarkets(),
      ])
      setHealth(`${h.status}${h.db ? ` · ${h.db}` : ''}`)
      setSetup(st)
      setMarkets(list)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    }
  }, [])

  React.useEffect(() => {
    void reload()
  }, [reload])

  usePolyDataWarmupPoll({
    enabled:
      ready === true &&
      Boolean(setup && !setup.needsOnboarding && markets && markets.length === 0),
    reload,
  })

  const selected = React.useMemo(() => {
    if (!marketId || !markets) return null
    return markets.find((m) => m.id === marketId) ?? null
  }, [marketId, markets])

  React.useEffect(() => {
    if (!marketId || !selected) {
      setSlipOutcomeId(null)
      return
    }
    setSlipOutcomeId((prev) => {
      if (prev && selected.outcomes?.some((o) => o.id === prev)) return prev
      return pickDefaultOutcome(selected.outcomes)
    })
  }, [marketId, selected])

  const slipOutcome = React.useMemo(() => {
    if (!selected?.outcomes || !slipOutcomeId) return null
    return selected.outcomes.find((o) => o.id === slipOutcomeId) ?? null
  }, [selected, slipOutcomeId])

  const startLabel = selected?.startTime
    ? formatStartTime(selected.startTime, i18n.language)
    : null

  return (
    <div className="flex h-full min-h-0 flex-col">
      <PanelHeader
        title={t('spma.listTitle.markets')}
        actions={
          <HeaderMenu route={marketId ? routes.view.poly('markets', marketId) : routes.view.poly('markets')} />
        }
      />
      <div className="flex min-h-0 flex-1">
        <div className="mask-fade-y min-h-0 min-w-0 flex-1">
          <ScrollArea className="h-full">
            <div className="space-y-4 px-5 py-6">
              {ready === false && <p className="text-sm text-destructive">{error}</p>}
              {ready && health && <p className="text-xs text-muted-foreground">{health}</p>}
              {error && ready !== false && <p className="text-sm text-destructive">{error}</p>}

              <SpmaPolySetupGateInline setup={setup} bannerKey="spma.markets.onboardingBanner" onReload={reload} />

              {!marketId && (
                <div className="rounded-lg border border-dashed border-border bg-muted/20 px-4 py-8 text-center text-sm text-muted-foreground">
                  {t('spma.markets.mainSelectHint')}
                </div>
              )}

              {marketId && markets && !selected && (
                <p className="text-sm text-muted-foreground">{t('spma.markets.notFound')}</p>
              )}

              {selected && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">{selected.name}</h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {selected.league} · {selected.sport} · {selected.status}
                    </p>
                    {startLabel && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t('spma.markets.startTime')}: {startLabel}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-medium text-muted-foreground">{t('spma.markets.outcomesPick')}</p>
                    {!selected.outcomes || selected.outcomes.length === 0 ? (
                      <p className="text-sm text-muted-foreground">{t('spma.markets.emptyOutcomes')}</p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {selected.outcomes.map((o) => {
                          const active = slipOutcomeId === o.id
                          return (
                            <Button
                              key={o.id}
                              type="button"
                              size="sm"
                              variant={active ? 'default' : 'outline'}
                              className={cn('h-auto max-w-full flex-col gap-0.5 py-2', active && 'ring-2 ring-primary/30')}
                              onClick={() => setSlipOutcomeId(o.id)}
                            >
                              <span className="truncate text-left text-xs font-medium">{o.label}</span>
                              <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                                {formatSpmaOdds(o.impliedOdds, oddsFormat)}
                              </span>
                            </Button>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] leading-relaxed text-muted-foreground">{t('spma.markets.liveNote')}</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {marketId && (
          <div className="hidden h-full w-[min(22rem,36vw)] shrink-0 md:block">
            <SpmaPolyMarketsSlipPanel
              outcomeId={slipOutcome?.id ?? null}
              outcomeLabel={slipOutcome?.label ?? null}
              matchTitle={selected?.name ?? null}
              onTradeExecuted={() => void reload()}
            />
          </div>
        )}
      </div>

      {marketId && (
        <div className="max-h-[min(50vh,28rem)] shrink-0 border-t border-border md:hidden">
          <SpmaPolyMarketsSlipPanel
            className="border-t-0"
            outcomeId={slipOutcome?.id ?? null}
            outcomeLabel={slipOutcome?.label ?? null}
            matchTitle={selected?.name ?? null}
            onTradeExecuted={() => void reload()}
          />
        </div>
      )}
    </div>
  )
}
