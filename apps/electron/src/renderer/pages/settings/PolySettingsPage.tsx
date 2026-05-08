/**
 * SPMA / Polymarket trading settings (merged from legacy dashboard Settings).
 * Full IPC-backed forms will land with packages/poly-*; this page holds the shell and copy.
 */

import { useTranslation } from 'react-i18next'

export default function PolySettingsPage() {
  const { t } = useTranslation()

  return (
    <div className="settings-page flex flex-col gap-6 p-6 max-w-2xl">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">{t('settings.poly.pageTitle')}</h1>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {t('settings.poly.pageBody')}
        </p>
      </div>
      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1.5">
        <li>{t('settings.poly.bulletProxy')}</li>
        <li>{t('settings.poly.bulletTelegram')}</li>
        <li>{t('settings.poly.bulletRouting')}</li>
        <li>{t('settings.poly.bulletTags')}</li>
      </ul>
    </div>
  )
}
