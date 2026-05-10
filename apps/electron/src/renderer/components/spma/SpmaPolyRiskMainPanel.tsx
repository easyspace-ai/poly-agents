/**
 * SPMA main column — selected position detail + risk tasks (same data as legacy combined view).
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { PanelHeader } from '@/components/app-shell/PanelHeader'
import { ScrollArea } from '@/components/ui/scroll-area'
import { HeaderMenu } from '@/components/ui/HeaderMenu'
import { routes } from '@/lib/navigate'
import {
  polyFetchHealth,
  polyFetchRiskOverview,
  polyFetchRiskTasks,
  type PolyRiskPositionRow,
  type PolyRiskPositionsPayload,
  type PolyRiskTasksPayload,
} from '@/lib/poly-client'

export function SpmaPolyRiskMainPanel({ positionId }: { positionId: string | null }) {
  const { t } = useTranslation()
  const [ready, setReady] = React.useState<boolean | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [health, setHealth] = React.useState<string | null>(null)
  const [risk, setRisk] = React.useState<PolyRiskPositionsPayload | null>(null)
  const [riskTasks, setRiskTasks] = React.useState<PolyRiskTasksPayload | null>(null)

  const reload = React.useCallback(async () => {
    setError(null)
    try {
      const [h, pos, tasks] = await Promise.all([
        polyFetchHealth(),
        polyFetchRiskOverview(),
        polyFetchRiskTasks(40),
      ])
      setHealth(`${h.status}${h.db ? ` · ${h.db}` : ''}`)
      setRisk(pos)
      setRiskTasks(tasks)
      setReady(true)
    } catch (e) {
      setReady(false)
      setError(e instanceof Error ? e.message : String(e))
      setRisk(null)
      setRiskTasks(null)
      setHealth(null)
    }
  }, [])

  React.useEffect(() => {
    void reload()
  }, [reload])

  const selected: PolyRiskPositionRow | null = React.useMemo(() => {
    if (!positionId || !risk) return null
    return risk.positions.find((p) => p.id === positionId) ?? null
  }, [positionId, risk])

  const wsLine =
    risk &&
    t('spma.risk.metaWs', {
      state: risk.meta.userWsConnected
        ? t('spma.risk.wsConnected')
        : risk.meta.userWsConnecting
          ? t('spma.risk.wsConnecting')
          : t('spma.risk.wsDisconnected'),
    })

  return (
    <div className="flex h-full min-h-0 flex-col">
      <PanelHeader
        title={t('spma.listTitle.risk')}
        actions={
          <HeaderMenu route={positionId ? routes.view.poly('risk', positionId) : routes.view.poly('risk')} />
        }
      />
      <div className="mask-fade-y min-h-0 flex-1">
        <ScrollArea className="h-full">
          <div className="max-w-3xl space-y-5 px-5 py-6">
            {ready === false && <p className="text-sm text-destructive">{error}</p>}
            {ready && health && <p className="text-xs text-muted-foreground">{health}</p>}
            {error && ready !== false && <p className="text-sm text-destructive">{error}</p>}
            {risk && wsLine && (
              <p className="text-xs text-muted-foreground">
                {wsLine}
                {risk.meta.userWsLastIssue ? ` — ${risk.meta.userWsLastIssue}` : ''}
              </p>
            )}

            {!positionId && (
              <div className="rounded-lg border border-dashed border-border bg-muted/20 px-4 py-8 text-center text-sm text-muted-foreground">
                {t('spma.risk.mainSelectHint')}
              </div>
            )}

            {positionId && risk && !selected && (
              <p className="text-sm text-muted-foreground">{t('spma.risk.notFound')}</p>
            )}

            {selected && (
              <div className="rounded-lg border border-border bg-card p-4 space-y-2">
                <h2 className="text-lg font-semibold text-foreground">{selected.title}</h2>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  <dt className="text-muted-foreground">{t('spma.risk.colSide')}</dt>
                  <dd className="text-foreground">{selected.sideLabel}</dd>
                  <dt className="text-muted-foreground">{t('spma.risk.colSize')}</dt>
                  <dd className="tabular-nums text-foreground">{selected.sizeShares.toFixed(2)}</dd>
                  <dt className="text-muted-foreground">{t('spma.risk.colPnl')}</dt>
                  <dd className="tabular-nums text-foreground">
                    {selected.pnlUsd == null ? '—' : selected.pnlUsd.toFixed(2)}
                  </dd>
                  <dt className="text-muted-foreground">{t('spma.risk.colStatus')}</dt>
                  <dd className="text-foreground">{selected.status}</dd>
                </dl>
              </div>
            )}

            {riskTasks && (
              <div>
                <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-foreground">
                  {t('spma.risk.sectionTasks')}
                </h3>
                <div className="max-h-[36vh] overflow-auto rounded-md border border-border">
                  <table className="w-full text-left text-xs">
                    <thead className="sticky top-0 bg-muted/80 backdrop-blur">
                      <tr>
                        <th className="p-2 font-medium text-foreground">{t('spma.risk.colType')}</th>
                        <th className="p-2 font-medium text-foreground">{t('spma.risk.colStatus')}</th>
                        <th className="p-2 font-medium text-foreground">{t('spma.risk.colAttempts')}</th>
                        <th className="p-2 font-medium text-foreground">{t('spma.risk.colUpdated')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {riskTasks.tasks.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="p-3 text-muted-foreground">
                            {t('spma.risk.emptyTasks')}
                          </td>
                        </tr>
                      ) : (
                        riskTasks.tasks.map((tk) => (
                          <tr key={tk.id} className="border-t border-border/60">
                            <td className="p-2 align-top text-foreground">{tk.type}</td>
                            <td className="p-2 align-top">{tk.status}</td>
                            <td className="p-2 align-top tabular-nums">{tk.attempts}</td>
                            <td className="p-2 align-top text-[11px] text-muted-foreground">{tk.updatedAt}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
