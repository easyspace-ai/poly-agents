/**
 * When poly `needsOnboarding`, show actions: open Settings → Poly, or POST /api/setup/complete.
 */

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { navigate, routes } from '@/lib/navigate'
import { Button } from '@/components/ui/button'
import { polyPostSetupComplete, type PolySetupStatus } from '@/lib/poly-client'

type BannerKey = 'spma.markets.onboardingBanner' | 'spma.setup.onboardingGate'

export function SpmaPolySetupGateInline({
  setup,
  bannerKey,
  onReload,
}: {
  setup: PolySetupStatus | null
  bannerKey: BannerKey
  onReload: () => void | Promise<void>
}) {
  const { t } = useTranslation()
  const [busy, setBusy] = React.useState(false)

  if (!setup?.needsOnboarding) {
    return null
  }

  async function handleComplete() {
    setBusy(true)
    try {
      await polyPostSetupComplete()
      toast.success(t('settings.poly.completeSetupDone'))
      await onReload()
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t('settings.poly.completeSetupError'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-foreground">
      <p className="leading-relaxed">{t(bannerKey)}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <Button type="button" size="sm" variant="secondary" onClick={() => navigate(routes.view.settings('poly'))}>
          {t('spma.markets.openPolySettings')}
        </Button>
        <Button type="button" size="sm" variant="default" disabled={busy} onClick={() => void handleComplete()}>
          {busy ? t('settings.poly.completeSetupWorking') : t('settings.poly.completeSetupCta')}
        </Button>
      </div>
    </div>
  )
}
