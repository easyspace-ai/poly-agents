/**
 * SPMA main column — trade detail; searches paginated `/api/trades` when id is not on page 1.
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { PanelHeader } from '@/components/app-shell/PanelHeader'
import { ScrollArea } from '@/components/ui/scroll-area'
import { HeaderMenu } from '@/components/ui/HeaderMenu'
import { routes } from '@/lib/navigate'
import {
  polyFetchHealth,
  polyFetchTradesPage,
  polyIsReady,
  type PolyTradesPayload,
} from '@/lib/poly-client'

const PAGE_SIZE = 40
const MAX_SCAN_PAGES = 25

type TradeRow = PolyTradesPayload['trades'][number]

export function SpmaPolyHistoryMainPanel({ tradeId }: { tradeId: string | null }) {
  const { t } = useTranslation()
  const [ready, setReady] = React.useState<boolean | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [health, setHealth] = React.useState<string | null>(null)
  const [summary, setSummary] = React.useState<PolyTradesPayload | null>(null)
  const [selected, setSelected] = React.useState<TradeRow | null>(null)
  const [scanNote, setScanNote] = React.useState<string | null>(null)

  const reload = React.useCallback(async () => {
    setError(null)
    setScanNote(null)
    setSelected(null)
    try {
      const ok = await polyIsReady()
      setReady(ok)
      if (!ok) {
        setError('Poly backend is not running (install Bun and restart the app).')
        setSummary(null)
        setHealth(null)
        return
      }
      const h = await polyFetchHealth()
      setHealth(`${h.status}${h.db ? ` · ${h.db}` : ''}`)

      const first = await polyFetchTradesPage(1, PAGE_SIZE)
      setSummary(first)

      if (!tradeId) {
        return
      }

      const onFirst = first.trades.find((x) => x.id === tradeId)
      if (onFirst) {
        setSelected(onFirst)
        return
      }

      let found: TradeRow | null = null
      let page = 2
      while (page <= MAX_SCAN_PAGES) {
        const chunk = await polyFetchTradesPage(page, PAGE_SIZE)
        found = chunk.trades.find((x) => x.id === tradeId) ?? null
        if (found) {
          setSelected(found)
          setScanNote(t('spma.history.foundOnPage', { page }))
          break
        }
        if (chunk.trades.length === 0) break
        if (page * PAGE_SIZE >= chunk.total) break
        page += 1
      }
      if (!found) {
        setSelected(null)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    }
  }, [tradeId])

  React.useEffect(() => {
    void reload()
  }, [reload])

  return (
    <div className="flex h-full min-h-0 flex-col">
      <PanelHeader
        title={t('spma.listTitle.history')}
        actions={<HeaderMenu route={tradeId ? routes.view.poly('history', tradeId) : routes.view.poly('history')} />}
      />
      <div className="mask-fade-y min-h-0 flex-1">
        <ScrollArea className="h-full">
          <div className="max-w-3xl space-y-4 px-5 py-6">
            {ready === false && <p className="text-sm text-destructive">{error}</p>}
            {ready && health && <p className="text-xs text-muted-foreground">{health}</p>}
            {error && ready !== false && <p className="text-sm text-destructive">{error}</p>}
            {summary && (
              <p className="text-xs text-muted-foreground">
                {t('spma.history.pageSummary', { page: summary.page, total: summary.total })}
              </p>
            )}
            {scanNote && <p className="text-[11px] text-muted-foreground">{scanNote}</p>}

            {!tradeId && (
              <div className="rounded-lg border border-dashed border-border bg-muted/20 px-4 py-8 text-center text-sm text-muted-foreground">
                {t('spma.history.mainSelectHint')}
              </div>
            )}

            {tradeId && !selected && (
              <p className="text-sm text-muted-foreground">{t('spma.history.notFound')}</p>
            )}

            {selected && (
              <div className="rounded-lg border border-border bg-card p-4 space-y-3">
                <h2 className="text-lg font-semibold text-foreground">{selected.marketName}</h2>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs">
                  <dt className="text-muted-foreground">{t('spma.history.colTime')}</dt>
                  <dd className="text-foreground">{selected.createdAt}</dd>
                  <dt className="text-muted-foreground">{t('spma.history.colOutcome')}</dt>
                  <dd className="text-foreground">{selected.outcomeLabel}</dd>
                  <dt className="text-muted-foreground">{t('spma.history.colPlatform')}</dt>
                  <dd className="text-foreground">{selected.platform}</dd>
                  <dt className="text-muted-foreground">{t('spma.history.colStatus')}</dt>
                  <dd className="text-foreground">{selected.status}</dd>
                </dl>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
