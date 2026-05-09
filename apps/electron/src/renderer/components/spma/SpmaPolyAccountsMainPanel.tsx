/**
 * SPMA main column — selected Polymarket account detail (placeholders) or empty state.
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { PanelHeader } from '@/components/app-shell/PanelHeader'
import { ScrollArea } from '@/components/ui/scroll-area'
import { HeaderMenu } from '@/components/ui/HeaderMenu'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/navigate'
import { formatPolyUsdcCollateral } from '@/lib/poly-format'
import { usePolyAccountsData } from '@/lib/use-poly-accounts-data'

export function SpmaPolyAccountsMainPanel({ accountId }: { accountId: string | null }) {
  const { t } = useTranslation()
  const { ready, error, health, accounts, collateralById } = usePolyAccountsData()

  const selected = React.useMemo(() => {
    if (!accountId || !accounts) return null
    return accounts.find((a) => a.id === accountId) ?? null
  }, [accountId, accounts])

  async function copyAddress(addr: string) {
    try {
      await navigator.clipboard.writeText(addr)
      toast.success(t('spma.accounts.copied'))
    } catch {
      toast.error(t('settings.poly.saveFailed'))
    }
  }

  return (
    <div className="h-full flex flex-col min-h-0">
      <PanelHeader
        title={t('spma.listTitle.accounts')}
        actions={
          <HeaderMenu route={accountId ? routes.view.poly('accounts', accountId) : routes.view.poly('accounts')} />
        }
      />
      <div className="flex-1 min-h-0 mask-fade-y">
        <ScrollArea className="h-full">
          <div className="px-5 py-6 max-w-2xl space-y-4">
            {ready === false && <p className="text-sm text-destructive">{error}</p>}
            {ready && health && <p className="text-xs text-muted-foreground">{health}</p>}
            {error && ready !== false && <p className="text-sm text-destructive">{error}</p>}

            {!accountId && (
              <div className="rounded-lg border border-dashed border-border bg-muted/20 px-4 py-8 text-center text-sm text-muted-foreground">
                {t('spma.accounts.mainSelectHint')}
              </div>
            )}

            {accountId && accounts && !selected && (
              <p className="text-sm text-muted-foreground">{t('spma.accounts.notFound')}</p>
            )}

            {selected && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{selected.name}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t('spma.accounts.detailCreated')}: {selected.createdAt}
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 space-y-2">
                  <div className="text-xs font-medium text-muted-foreground">{t('spma.accounts.colAddress')}</div>
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="text-xs font-mono break-all text-foreground">{selected.funderAddress}</code>
                    <Button type="button" variant="outline" size="sm" onClick={() => void copyAddress(selected.funderAddress)}>
                      {t('spma.accounts.copyAddress')}
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <div className="text-xs font-medium text-foreground mb-1">{t('spma.accounts.colActive')}</div>
                  <p className="text-sm text-muted-foreground">
                    {selected.isActive ? t('spma.accounts.badgeActive') : t('spma.accounts.badgeInactive')}
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">{t('spma.accounts.collateralLabel')}</div>
                  <p className="text-sm font-mono tabular-nums text-foreground">
                    {formatPolyUsdcCollateral(
                      Object.hasOwn(collateralById, selected.id) ? collateralById[selected.id] : undefined,
                    )}
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-snug">{t('spma.accounts.collateralHint')}</p>
                </div>
                <div className="rounded-lg border border-dashed border-border bg-muted/15 p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{t('spma.accounts.mainPnlPlaceholder')}</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
