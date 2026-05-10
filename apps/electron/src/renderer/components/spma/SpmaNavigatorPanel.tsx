/**
 * SPMA navigator body — wired to poly subprocess API via preload IPC.
 * Markets, accounts, risk, and history use dedicated navigator + main column components.
 */

import { useEffect, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import type { PolyTab } from '../../../shared/types'
import { polyFetchHealth, polyFetchSetupStatus, type PolySetupStatus } from '../../lib/poly-client'
import { SpmaPolySetupGateInline } from '@/components/spma/SpmaPolySetupGateInline'

const TAB_KEYS: Record<PolyTab, string> = {
  markets: 'spma.listTitle.markets',
  risk: 'spma.listTitle.risk',
  history: 'spma.listTitle.history',
  accounts: 'spma.listTitle.accounts',
  setup: 'spma.listTitle.setup',
}

export function SpmaNavigatorPanel({ tab }: { tab: PolyTab }) {
  const { t } = useTranslation()
  const titleKey = TAB_KEYS[tab]
  const [ready, setReady] = useState<boolean | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [health, setHealth] = useState<string | null>(null)
  const [polySetup, setPolySetup] = useState<PolySetupStatus | null>(null)

  const reloadSetup = useCallback(async () => {
    if (tab !== 'setup') return
    try {
      setPolySetup(await polyFetchSetupStatus())
    } catch {
      setPolySetup(null)
    }
  }, [tab])

  useEffect(() => {
    let cancelled = false
    setError(null)
    setHealth(null)
    setPolySetup(null)

    if (tab !== 'setup') {
      setReady(null)
      return () => {
        cancelled = true
      }
    }

    setReady(null)

    ;(async () => {
      try {
        const [h, st] = await Promise.all([polyFetchHealth(), polyFetchSetupStatus()])
        if (cancelled) return
        setReady(true)
        setHealth(`${h.status}${h.db ? ` · ${h.db}` : ''}`)
        setPolySetup(st)
      } catch (e) {
        if (cancelled) return
        setReady(false)
        setError(e instanceof Error ? e.message : String(e))
      }
    })()

    return () => {
      cancelled = true
    }
  }, [tab])

  if (tab === 'markets' || tab === 'accounts' || tab === 'risk' || tab === 'history') {
    return null
  }

  return (
    <div className="flex flex-col gap-3 p-4 text-sm text-muted-foreground">
      <h2 className="text-base font-medium text-foreground">{t(titleKey)}</h2>
      {ready === false && <p className="text-destructive">{error}</p>}
      {ready && health && <p className="text-xs text-muted-foreground">{health}</p>}
      {error && ready !== false && <p className="text-destructive">{error}</p>}

      {tab === 'setup' && ready && (
        <div className="space-y-3">
          <SpmaPolySetupGateInline setup={polySetup} bannerKey="spma.setup.onboardingGate" onReload={reloadSetup} />
          <p className="leading-relaxed text-muted-foreground">{t('spma.setup.hint')}</p>
        </div>
      )}
    </div>
  )
}
