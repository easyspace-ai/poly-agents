/**
 * SPMA middle column — risk positions list (navigator).
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { navigate, routes } from '@/lib/navigate'
import { cn } from '@/lib/utils'
import {
  polyFetchHealth,
  polyFetchRiskOverview,
  polyIsReady,
  type PolyRiskPositionsPayload,
} from '@/lib/poly-client'

export function SpmaPolyRiskNavigator({ selectedPositionId }: { selectedPositionId: string | null }) {
  const { t } = useTranslation()
  const [ready, setReady] = React.useState<boolean | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [health, setHealth] = React.useState<string | null>(null)
  const [risk, setRisk] = React.useState<PolyRiskPositionsPayload | null>(null)

  const reload = React.useCallback(async () => {
    setError(null)
    try {
      const ok = await polyIsReady()
      setReady(ok)
      if (!ok) {
        setError('Poly backend is not running (install Bun and restart the app).')
        setRisk(null)
        setHealth(null)
        return
      }
      const [h, pos] = await Promise.all([polyFetchHealth(), polyFetchRiskOverview()])
      setHealth(`${h.status}${h.db ? ` · ${h.db}` : ''}`)
      setRisk(pos)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    }
  }, [])

  React.useEffect(() => {
    void reload()
  }, [reload])

  const wsLabel = risk
    ? t('spma.risk.metaWs', {
        state: risk.meta.userWsConnected
          ? t('spma.risk.wsConnected')
          : risk.meta.userWsConnecting
            ? t('spma.risk.wsConnecting')
            : t('spma.risk.wsDisconnected'),
      })
    : null

  return (
    <div className="flex flex-col gap-3 p-4 text-sm text-muted-foreground">
      <h2 className="text-base font-medium text-foreground">{t('spma.listTitle.risk')}</h2>
      {ready === false && <p className="text-destructive">{error}</p>}
      {ready && health && <p className="text-xs text-muted-foreground">{health}</p>}
      {error && ready !== false && <p className="text-destructive">{error}</p>}
      {risk && wsLabel && (
        <p className="text-[11px] leading-snug text-muted-foreground">
          {wsLabel}
          {risk.meta.userWsLastIssue ? ` — ${risk.meta.userWsLastIssue}` : ''}
        </p>
      )}

      {risk && (
        <div className="mt-1 max-h-[55vh] overflow-auto rounded-md border border-border">
          <table className="w-full text-left text-xs">
            <thead className="sticky top-0 bg-muted/80 backdrop-blur">
              <tr>
                <th className="p-2 font-medium text-foreground">{t('spma.risk.colTitle')}</th>
                <th className="p-2 font-medium text-foreground">{t('spma.risk.colSide')}</th>
                <th className="p-2 font-medium text-foreground">{t('spma.risk.colSize')}</th>
                <th className="p-2 font-medium text-foreground">{t('spma.risk.colPnl')}</th>
                <th className="p-2 font-medium text-foreground">{t('spma.risk.colStatus')}</th>
              </tr>
            </thead>
            <tbody>
              {risk.positions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-3 text-muted-foreground">
                    {t('spma.risk.emptyPositions')}
                  </td>
                </tr>
              ) : (
                risk.positions.map((p) => {
                  const selected = selectedPositionId === p.id
                  return (
                    <tr
                      key={p.id}
                      role="button"
                      tabIndex={0}
                      className={cn(
                        'border-t border-border/60 cursor-pointer transition-colors hover:bg-muted/50',
                        selected && 'bg-muted/70',
                      )}
                      onClick={() => navigate(routes.view.poly('risk', p.id))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          navigate(routes.view.poly('risk', p.id))
                        }
                      }}
                    >
                      <td className="p-2 align-top text-foreground">{p.title}</td>
                      <td className="p-2 align-top">{p.sideLabel}</td>
                      <td className="p-2 align-top tabular-nums">{p.sizeShares.toFixed(2)}</td>
                      <td className="p-2 align-top tabular-nums">
                        {p.pnlUsd == null ? '—' : p.pnlUsd.toFixed(2)}
                      </td>
                      <td className="p-2 align-top">{p.status}</td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
