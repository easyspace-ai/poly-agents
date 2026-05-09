/**
 * SPMA middle column — Polymarket account list + add account (navigator only).
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { navigate, routes } from '@/lib/navigate'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { polyCreatePolymarketAccount } from '@/lib/poly-client'
import { formatPolyUsdcCollateral } from '@/lib/poly-format'
import { usePolyAccountsData } from '@/lib/use-poly-accounts-data'

export function SpmaPolyAccountsNavigator({ selectedAccountId }: { selectedAccountId: string | null }) {
  const { t } = useTranslation()
  const { ready, error, health, accounts, collateralById, reload } = usePolyAccountsData()
  const [addOpen, setAddOpen] = React.useState(false)
  const [addName, setAddName] = React.useState('')
  const [addPk, setAddPk] = React.useState('')
  const [addSubmitting, setAddSubmitting] = React.useState(false)

  async function handleCreate() {
    const name = addName.trim()
    const pk = addPk.trim()
    if (!name || !pk) {
      toast.error(t('spma.accounts.validationRequired'))
      return
    }
    setAddSubmitting(true)
    try {
      const created = await polyCreatePolymarketAccount({ name, privateKey: pk })
      setAddName('')
      setAddPk('')
      setAddOpen(false)
      toast.success(t('spma.accounts.addSuccess'))
      await reload()
      navigate(routes.view.poly('accounts', created.id))
    } catch (e) {
      toast.error(e instanceof Error ? e.message : String(e))
    } finally {
      setAddSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-3 p-4 text-sm text-muted-foreground">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base font-medium text-foreground">{t('spma.listTitle.accounts')}</h2>
        <Button type="button" size="sm" variant="secondary" disabled={ready !== true} onClick={() => setAddOpen(true)}>
          {t('spma.accounts.navAdd')}
        </Button>
      </div>
      {ready === false && <p className="text-destructive">{error}</p>}
      {ready && health && <p className="text-xs text-muted-foreground">{health}</p>}
      {error && ready !== false && <p className="text-destructive">{error}</p>}

      {accounts && (
        <div className="mt-1 max-h-[55vh] overflow-auto rounded-md border border-border">
          <table className="w-full text-left text-xs">
            <thead className="sticky top-0 bg-muted/80 backdrop-blur">
              <tr>
                <th className="p-2 font-medium text-foreground">{t('spma.accounts.colName')}</th>
                <th className="p-2 font-medium text-foreground">{t('spma.accounts.colAddress')}</th>
                <th className="p-2 font-medium text-foreground whitespace-nowrap">{t('spma.accounts.colBalance')}</th>
                <th className="p-2 font-medium text-foreground">{t('spma.accounts.colActive')}</th>
              </tr>
            </thead>
            <tbody>
              {accounts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-3 text-muted-foreground">
                    {t('spma.accounts.empty')}
                  </td>
                </tr>
              ) : (
                accounts.map((a) => {
                  const selected = selectedAccountId === a.id
                  return (
                    <tr
                      key={a.id}
                      role="button"
                      tabIndex={0}
                      className={cn(
                        'border-t border-border/60 cursor-pointer transition-colors hover:bg-muted/50',
                        selected && 'bg-muted/70',
                      )}
                      onClick={() => navigate(routes.view.poly('accounts', a.id))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          navigate(routes.view.poly('accounts', a.id))
                        }
                      }}
                    >
                      <td className="p-2 align-top text-foreground">{a.name}</td>
                      <td className="p-2 align-top font-mono text-[11px] text-muted-foreground">{a.funderAddress}</td>
                      <td className="p-2 align-top font-mono text-[11px] tabular-nums text-foreground whitespace-nowrap">
                        {formatPolyUsdcCollateral(
                          Object.hasOwn(collateralById, a.id) ? collateralById[a.id] : undefined,
                        )}
                      </td>
                      <td className="p-2 align-top">
                        {a.isActive ? t('spma.accounts.badgeActive') : t('spma.accounts.badgeInactive')}
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      )}

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('spma.accounts.addDialogTitle')}</DialogTitle>
            <DialogDescription>{t('spma.accounts.addDialogDesc')}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-1">
            <div className="space-y-2">
              <Label htmlFor="spma-add-acc-name">{t('spma.accounts.fieldName')}</Label>
              <Input
                id="spma-add-acc-name"
                value={addName}
                onChange={(e) => setAddName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="spma-add-acc-pk">{t('spma.accounts.fieldPrivateKey')}</Label>
              <Input
                id="spma-add-acc-pk"
                type="password"
                value={addPk}
                onChange={(e) => setAddPk(e.target.value)}
                autoComplete="off"
                className="font-mono text-xs"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setAddOpen(false)} disabled={addSubmitting}>
              {t('spma.accounts.cancelAdd')}
            </Button>
            <Button type="button" onClick={() => void handleCreate()} disabled={addSubmitting}>
              {addSubmitting ? t('settings.poly.saving') : t('spma.accounts.submitAdd')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
