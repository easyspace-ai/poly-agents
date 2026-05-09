/**
 * Right column — order book + buy size (Polymarket routing via bot `/api/trade`).
 * REST snapshot is polled; live WS can be added later like cccc/dashboard TradePanel.
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { formatSpmaOdds, useSpmaOddsFormat } from '@/lib/spma-odds-format-preference'
import {
  polyFetchOrderbook,
  polyPostTrade,
  type PolyOrderBookLevel,
} from '@/lib/poly-client'
import { cn } from '@/lib/utils'

const POLL_MS = 2500

export function SpmaPolyMarketsSlipPanel({
  outcomeId,
  outcomeLabel,
  matchTitle,
  onTradeExecuted,
  className,
}: {
  outcomeId: string | null
  outcomeLabel: string | null
  matchTitle: string | null
  onTradeExecuted?: () => void
  className?: string
}) {
  const { t } = useTranslation()
  const [oddsFormat] = useSpmaOddsFormat()
  const [size, setSize] = React.useState('')
  const [executing, setExecuting] = React.useState(false)
  const [levels, setLevels] = React.useState<PolyOrderBookLevel[] | null>(null)
  const [bookError, setBookError] = React.useState(false)

  const loadBook = React.useCallback(async () => {
    if (!outcomeId) return
    try {
      const res = await polyFetchOrderbook(outcomeId)
      setLevels(res.levels ?? [])
      setBookError(false)
    } catch {
      setBookError(true)
      setLevels([])
    }
  }, [outcomeId])

  React.useEffect(() => {
    setLevels(null)
    setBookError(false)
    setSize('')
    if (!outcomeId) return
    void loadBook()
    const id = window.setInterval(() => void loadBook(), POLL_MS)
    return () => window.clearInterval(id)
  }, [outcomeId, loadBook])

  const sizeNum = parseFloat(size)
  const validSize = !Number.isNaN(sizeNum) && sizeNum > 0

  const sortedLevels = React.useMemo(() => {
    if (!levels) return []
    const poly = levels.filter((l) => l.platform === 'polymarket')
    return [...poly].sort((a, b) => a.odds - b.odds)
  }, [levels])

  async function handleExecute() {
    if (!outcomeId || !validSize) return
    setExecuting(true)
    try {
      const result = await polyPostTrade({ outcomeId, side: 'buy', size: sizeNum })
      if (result.status === 'filled') {
        toast.success(t('spma.markets.tradeFilled'))
      } else if (result.status === 'partial') {
        toast.info(t('spma.markets.tradePartial'))
      } else {
        toast.error(t('spma.markets.tradeFailed'))
      }
      setSize('')
      onTradeExecuted?.()
      void loadBook()
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t('spma.markets.tradeFailed'))
    } finally {
      setExecuting(false)
    }
  }

  return (
    <div
      className={cn(
        'flex h-full min-h-0 flex-col bg-muted/15 md:border-l md:border-border',
        className,
      )}
    >
      <div className="shrink-0 space-y-1 border-b border-border px-4 py-3">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {t('spma.markets.slipTitle')}
        </p>
        {outcomeId && outcomeLabel ? (
          <>
            <p className="truncate text-sm font-semibold text-foreground">▸ {outcomeLabel}</p>
            {matchTitle && <p className="truncate text-xs text-muted-foreground">{matchTitle}</p>}
          </>
        ) : (
          <p className="text-xs text-muted-foreground">{t('spma.markets.slipEmpty')}</p>
        )}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {!outcomeId ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 py-12 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-border text-xl text-muted-foreground">
              +
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{t('spma.markets.slipHint')}</p>
          </div>
        ) : (
          <div className="space-y-4 p-4">
            <div>
              <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 border-b border-border pb-1.5 font-mono text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                <span>{t('spma.markets.bookPlatform')}</span>
                <span>{t('spma.markets.bookOdds')}</span>
                <span className="text-right">{t('spma.markets.bookSize')}</span>
              </div>
              {bookError ? (
                <p className="py-3 text-xs text-destructive">{t('spma.markets.bookError')}</p>
              ) : levels === null ? (
                <p className="py-3 text-xs text-muted-foreground">{t('spma.markets.bookLoading')}</p>
              ) : sortedLevels.length === 0 ? (
                <p className="py-3 text-xs text-muted-foreground">{t('spma.markets.bookEmpty')}</p>
              ) : (
                <ul className="divide-y divide-border/60">
                  {sortedLevels.slice(0, 12).map((row, i) => (
                    <li key={i} className="grid grid-cols-[1fr_1fr_1fr] gap-2 py-1.5 text-xs tabular-nums">
                      <span
                        className={cn(
                          'font-medium',
                          row.platform === 'polymarket' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600',
                        )}
                      >
                        {row.platform === 'polymarket' ? 'Poly' : 'SX'}
                      </span>
                      <span>{formatSpmaOdds(row.odds, oddsFormat)}</span>
                      <span className="text-right text-muted-foreground">{row.size.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="spma-trade-size" className="text-xs">
                {t('spma.markets.sizeUsdc')}
              </Label>
              <Input
                id="spma-trade-size"
                type="number"
                min={0}
                step="any"
                inputMode="decimal"
                placeholder="0"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="font-mono text-sm"
              />
              <Button
                type="button"
                className="w-full"
                disabled={!validSize || executing}
                onClick={() => void handleExecute()}
              >
                {executing ? t('spma.markets.executing') : t('spma.markets.buy')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
