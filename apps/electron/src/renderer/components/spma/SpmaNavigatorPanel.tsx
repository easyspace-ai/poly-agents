/**
 * SPMA navigator body — placeholder until dashboard pages are ported to IPC.
 */

import { useTranslation } from 'react-i18next'
import type { PolyTab } from '../../../shared/types'

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

  return (
    <div className="flex flex-col gap-3 p-4 text-sm text-muted-foreground">
      <h2 className="text-base font-medium text-foreground">{t(titleKey)}</h2>
      <p className="leading-relaxed">
        {t('settings.poly.pageBody')}
      </p>
    </div>
  )
}
