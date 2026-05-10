/**
 * SPMA middle column — trades list (first page) for history tab.
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { navigate, routes } from '@/lib/navigate'
import { cn } from '@/lib/utils'
import {
  polyFetchHealth,
  polyFetchTradesPage,
  type PolyTradesPayload,
} from '@/lib/poly-client'

const PAGE_SIZE = 40

export function SpmaPolyHistoryNavigator({ selectedTradeId }: { selectedTradeId: string | null }) {
  const { t } = useTranslation()
  const [ready, setReady] = React.useState<boolean | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [health, setHealth] = React.useState<string | null>(null)
  const [trades, setTrades] = React.useState<PolyTradesPayload | null>(null)

  const reload = React.useCallback(async () => {
    setError(null)
    try {
      const [h, tr] = await Promise.all([polyFetchHealth(), polyFetchTradesPage(1, PAGE_SIZE)])
      setHealth(`${h.status}${h.db ? ` · ${h.db}` : ''}`)
      setTrades(tr)
      setReady(true)
    } catch (e) {
      setReady(false)
      setError(e instanceof Error ? e.message : String(e))
      setTrades(null)
      setHealth(null)
    }
  }, [])

  React.useEffect(() => {
    void reload()
  }, [reload])

  return (
    <div className="flex flex-col gap-3 p-4 text-sm text-muted-foreground">
      <h2 className="text-base font-medium text-foreground">{t('spma.listTitle.history')}</h2>
      {ready === false && <p className="text-destructive">{error}</p>}
      {ready && health && <p className="text-xs text-muted-foreground">{health}</p>}
      {error && ready !== false && <p className="text-destructive">{error}</p>}

      {trades && (
        <>
          <p className="text-[11px] text-muted-foreground">
            {t('spma.history.pageSummary', { page: trades.page, total: trades.total })}
          </p>
          <div className="mt-1 max-h-[55vh] overflow-auto rounded-md border border-border">
            <table className="w-full text-left text-xs">
              <thead className="sticky top-0 bg-muted/80 backdrop-blur">
                <tr>
                  <th className="p-2 font-medium text-foreground">{t('spma.history.colTime')}</th>
                  <th className="p-2 font-medium text-foreground">{t('spma.history.colMarket')}</th>
                  <th className="p-2 font-medium text-foreground">{t('spma.history.colOutcome')}</th>
                  <th className="p-2 font-medium text-foreground">{t('spma.history.colPlatform')}</th>
                  <th className="p-2 font-medium text-foreground">{t('spma.history.colStatus')}</th>
                </tr>
              </thead>
              <tbody>
                {trades.trades.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-3 text-muted-foreground">
                      {t('spma.history.empty')}
                    </td>
                  </tr>
                ) : (
                  trades.trades.map((tr) => {
                    const selected = selectedTradeId === tr.id
                    return (
                      <tr
                        key={tr.id}
                        role="button"
                        tabIndex={0}
                        className={cn(
                          'border-t border-border/60 cursor-pointer transition-colors hover:bg-muted/50',
                          selected && 'bg-muted/70',
                        )}
                        onClick={() => navigate(routes.view.poly('history', tr.id))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            navigate(routes.view.poly('history', tr.id))
                          }
                        }}
                      >
                        <td className="p-2 align-top text-[11px] text-muted-foreground">{tr.createdAt}</td>
                        <td className="p-2 align-top text-foreground">{tr.marketName}</td>
                        <td className="p-2 align-top">{tr.outcomeLabel}</td>
                        <td className="p-2 align-top">{tr.platform}</td>
                        <td className="p-2 align-top">{tr.status}</td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
