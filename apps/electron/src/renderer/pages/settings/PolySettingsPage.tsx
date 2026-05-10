/**
 * SPMA / Polymarket trading settings — migrated from cccc/dashboard Settings.tsx:
 * tabs (general / tags / prices), GET+PUT /api/config via poly IPC.
 * HTTP proxy and Telegram use the app-wide Settings → Network / Messaging (not BotConfig).
 */

import * as React from 'react'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { Trash2 } from 'lucide-react'
import { PanelHeader } from '@/components/app-shell/PanelHeader'
import { ScrollArea } from '@/components/ui/scroll-area'
import { HeaderMenu } from '@/components/ui/HeaderMenu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  SettingsSection,
  SettingsCard,
  SettingsCardContent,
  SettingsCardFooter,
  SettingsSegmentedControl,
} from '@/components/settings'
import { navigate, routes } from '@/lib/navigate'
import type { DetailsPageMeta } from '@/lib/navigation-registry'
import { cn } from '@/lib/utils'
import {
  polyFetchBalances,
  polyFetchConfig,
  polyFetchHealth,
  polyFetchMarkets,
  polyFetchPolymarketAccounts,
  polyFetchRiskOverview,
  polyFetchSetupStatus,
  polyFetchTradesPage,
  polyPostSetupComplete,
  polyPutConfigKey,
  type PolyConfigRow,
  type PolySetupStatus,
} from '@/lib/poly-client'
import { formatPolyUsdcCollateral } from '@/lib/poly-format'
import { POLY_CONFIG_SENSITIVE_KEYS } from './poly-config-defaults'
import {
  DEFAULT_SPMA_EVENT_TAGS,
  parseEventClassificationTags,
  SUGGESTED_SPMA_LEAGUE_TAGS,
} from '@/lib/spma-event-tags'
import { useSpmaOddsFormat, type SpmaOddsFormat } from '@/lib/spma-odds-format-preference'

export const meta: DetailsPageMeta = {
  navigator: 'settings',
  slug: 'poly',
}

const RESERVED_CONFIG_KEYS = new Set(['eventClassificationTags', 'priceStopLossRanges'])

export interface PriceStopLossRangeRow {
  id: string
  name: string
  minCents: number
  maxCents: number
  fundPct: number
  stopLossPct: number
}

const DEFAULT_PRICE_ROWS: PriceStopLossRangeRow[] = [
  { id: 'r1', name: '20-30¢', minCents: 20, maxCents: 30, fundPct: 17, stopLossPct: 20 },
  { id: 'r2', name: '30-40¢', minCents: 30, maxCents: 40, fundPct: 17, stopLossPct: 20 },
  { id: 'r3', name: '40-50¢', minCents: 40, maxCents: 50, fundPct: 17, stopLossPct: 20 },
  { id: 'r4', name: '50-60¢', minCents: 50, maxCents: 60, fundPct: 17, stopLossPct: 20 },
  { id: 'r5', name: '60-70¢', minCents: 60, maxCents: 70, fundPct: 16, stopLossPct: 20 },
  { id: 'r6', name: '70-80¢', minCents: 70, maxCents: 80, fundPct: 16, stopLossPct: 20 },
]

const BOT_KEY_DESC_I18N: Partial<Record<string, string>> = {
  maxTradeSize: 'settings.poly.desc.maxTradeSize',
  slippageTolerance: 'settings.poly.desc.slippageTolerance',
  pollingInterval: 'settings.poly.desc.pollingInterval',
  orderBookLevels: 'settings.poly.desc.orderBookLevels',
  polymarketFokBuyExtraTicks: 'settings.poly.desc.polymarketFokBuyExtraTicks',
  polymarketFokSellExtraTicks: 'settings.poly.desc.polymarketFokSellExtraTicks',
  minOpenRiskShares: 'settings.poly.desc.minOpenRiskShares',
}

function rowValue(rows: PolyConfigRow[], key: string): string {
  return rows.find((r) => r.key === key)?.value ?? ''
}

function normalizeDisplayValue(key: string, value: string): string {
  if (POLY_CONFIG_SENSITIVE_KEYS.has(key) && value === '***') return ''
  return value
}

function parsePriceRowsJson(raw: string): PriceStopLossRangeRow[] {
  if (!raw.trim()) return DEFAULT_PRICE_ROWS.map((r) => ({ ...r }))
  try {
    const p = JSON.parse(raw) as unknown
    if (!Array.isArray(p) || p.length === 0) return DEFAULT_PRICE_ROWS.map((r) => ({ ...r }))
    return p.map((row: unknown, i: number) => {
      const o = row as Record<string, unknown>
      return {
        id: typeof o.id === 'string' && o.id ? o.id : `r${i + 1}`,
        name: String(o.name ?? ''),
        minCents: Number(o.minCents) || 0,
        maxCents: Number(o.maxCents) || 0,
        fundPct: Number(o.fundPct) || 0,
        stopLossPct: Number(o.stopLossPct) || 0,
      }
    })
  } catch {
    return DEFAULT_PRICE_ROWS.map((r) => ({ ...r }))
  }
}

export default function PolySettingsPage() {
  const { t } = useTranslation()
  const [tab, setTab] = React.useState('general')
  const [ready, setReady] = React.useState(false)
  const [bootLoading, setBootLoading] = React.useState(true)
  const [bootError, setBootError] = React.useState<string | null>(null)

  const [rows, setRows] = React.useState<PolyConfigRow[]>([])
  const [edited, setEdited] = React.useState<Record<string, string>>({})
  const [saving, setSaving] = React.useState<string | null>(null)
  const [configLoading, setConfigLoading] = React.useState(false)
  const [configError, setConfigError] = React.useState<string | null>(null)

  const [healthLine, setHealthLine] = React.useState<string | null>(null)
  const [stats, setStats] = React.useState<{
    markets: number
    accounts: number
    tradesTotal: number
    positions: number
    collateralUsdc: number | null
  } | null>(null)

  const [setupStatus, setSetupStatus] = React.useState<PolySetupStatus | null>(null)
  const [completingSetup, setCompletingSetup] = React.useState(false)

  const [tags, setTags] = React.useState<string[]>([...DEFAULT_SPMA_EVENT_TAGS])
  const [tagInput, setTagInput] = React.useState('')
  const [priceRows, setPriceRows] = React.useState<PriceStopLossRangeRow[]>(() =>
    DEFAULT_PRICE_ROWS.map((r) => ({ ...r })),
  )

  const [oddsFormat, setOddsFormat] = useSpmaOddsFormat()

  const applyConfigRows = React.useCallback((data: PolyConfigRow[]) => {
    setRows(data)
    setEdited({})
    setTags(parseEventClassificationTags(rowValue(data, 'eventClassificationTags')))
    setPriceRows(parsePriceRowsJson(rowValue(data, 'priceStopLossRanges')))
  }, [])

  const reloadConfig = React.useCallback(
    async (opts?: { silent?: boolean }) => {
      const silent = opts?.silent
      if (!silent) setConfigLoading(true)
      setConfigError(null)
      try {
        const data = await polyFetchConfig()
        applyConfigRows(data)
      } catch (err) {
        setConfigError(err instanceof Error ? err.message : t('settings.poly.configLoadFailed'))
      } finally {
        if (!silent) setConfigLoading(false)
      }
    },
    [applyConfigRows, t],
  )

  const reloadSnapshot = React.useCallback(async () => {
    try {
      const h = await polyFetchHealth()
      setHealthLine([h.status, h.db, h.message].filter(Boolean).join(' · ') || h.status)
      const [markets, accounts, trades, risk, bal] = await Promise.all([
        polyFetchMarkets(),
        polyFetchPolymarketAccounts(),
        polyFetchTradesPage(1, 1),
        polyFetchRiskOverview(),
        polyFetchBalances().catch(() => null),
      ])
      setStats({
        markets: markets.length,
        accounts: accounts.length,
        tradesTotal: trades.total,
        positions: risk.positions.length,
        collateralUsdc: bal?.polymarket ?? null,
      })
    } catch {
      setHealthLine(null)
      setStats(null)
    }
  }, [])

  const boot = React.useCallback(async () => {
    setBootLoading(true)
    setBootError(null)
    try {
      await Promise.all([reloadConfig({ silent: true }), reloadSnapshot()])
      try {
        setSetupStatus(await polyFetchSetupStatus())
      } catch {
        setSetupStatus(null)
      }
      setReady(true)
    } catch (e) {
      setReady(false)
      setBootError(e instanceof Error ? e.message : String(e))
    } finally {
      setBootLoading(false)
    }
  }, [reloadConfig, reloadSnapshot])

  React.useEffect(() => {
    void boot()
  }, [boot])

  const getValue = React.useCallback(
    (key: string) => {
      const raw = rows.find((r) => r.key === key)?.value ?? ''
      const base = normalizeDisplayValue(key, raw)
      return key in edited ? edited[key]! : base
    },
    [edited, rows],
  )

  const generalRows = React.useMemo(
    () => rows.filter((r) => !RESERVED_CONFIG_KEYS.has(r.key)),
    [rows],
  )

  async function handleSaveKey(key: string) {
    const value = getValue(key)
    const prevRaw = rows.find((r) => r.key === key)?.value ?? ''
    if (POLY_CONFIG_SENSITIVE_KEYS.has(key) && prevRaw === '***' && value.trim() === '') {
      toast.message(t('settings.poly.secretUnchanged'))
      return
    }
    setSaving(key)
    try {
      await polyPutConfigKey(key, value)
      setRows((prev) => {
        const i = prev.findIndex((r) => r.key === key)
        if (i >= 0) {
          const next = [...prev]
          next[i] = { ...next[i], value }
          return next
        }
        return [...prev, { key, value }].sort((a, b) => a.key.localeCompare(b.key))
      })
      setEdited((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
      toast.success(t('settings.poly.savedKey', { key }))
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t('settings.poly.saveFailed'))
    } finally {
      setSaving(null)
    }
  }

  async function saveStandalone(key: string, value: string, successKey: string) {
    setSaving(key)
    try {
      await polyPutConfigKey(key, value)
      await reloadConfig({ silent: true })
      toast.success(t(successKey))
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t('settings.poly.saveFailed'))
    } finally {
      setSaving(null)
    }
  }

  const oddsOptions = React.useMemo(
    () =>
      (['decimal', 'american', 'percent'] as const).map((v) => ({
        value: v,
        label: t(`settings.poly.oddsFormat.${v}`),
      })),
    [t],
  )

  const fundSum = priceRows.reduce((a, r) => a + (Number.isFinite(r.fundPct) ? r.fundPct : 0), 0)

  function addTag(raw: string) {
    const x = raw.trim().toLowerCase()
    if (!x) return
    if (tags.includes(x)) return
    setTags((prev) => [...prev, x])
    setTagInput('')
  }

  function removeTag(x: string) {
    setTags((prev) => prev.filter((y) => y !== x))
  }

  async function handleCompletePolySetup() {
    setCompletingSetup(true)
    try {
      await polyPostSetupComplete()
      toast.success(t('settings.poly.completeSetupDone'))
      try {
        setSetupStatus(await polyFetchSetupStatus())
      } catch {
        setSetupStatus(null)
      }
      await reloadSnapshot()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t('settings.poly.completeSetupError'))
    } finally {
      setCompletingSetup(false)
    }
  }

  return (
    <div className="h-full flex flex-col">
      <PanelHeader title={t('settings.poly.pageTitle')} actions={<HeaderMenu route={routes.view.settings('poly')} />} />
      <div className="flex-1 min-h-0 mask-fade-y">
        <ScrollArea className="h-full">
          <div className="px-5 py-7 max-w-3xl mx-auto space-y-8">
            <p className="text-sm text-muted-foreground leading-relaxed">{t('settings.poly.pageBody')}</p>

            {bootLoading && <p className="text-sm text-muted-foreground">{t('settings.poly.loading')}</p>}

            {!bootLoading && bootError && (
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {bootError}
                <div className="mt-2">
                  <Button variant="outline" size="sm" type="button" onClick={() => void boot()}>
                    {t('settings.poly.refresh')}
                  </Button>
                </div>
              </div>
            )}

            {!bootLoading && ready && (
              <>
                {setupStatus?.needsOnboarding && (
                  <SettingsSection title={t('settings.poly.onboardingGateTitle')}>
                    <SettingsCard divided={false}>
                      <SettingsCardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t('settings.poly.onboardingGateBody')}
                        </p>
                        <ul className="list-inside list-disc text-xs text-muted-foreground space-y-1">
                          <li>
                            {t('settings.poly.onboardingCheckPoly', {
                              ok: setupStatus.polymarketConfigured ? t('settings.poly.checkOk') : t('settings.poly.checkPending'),
                            })}
                          </li>
                          <li>
                            {t('settings.poly.onboardingCheckProxy', {
                              ok: setupStatus.proxyConfigured ? t('settings.poly.checkOk') : t('settings.poly.checkPending'),
                            })}
                          </li>
                        </ul>
                        <Button
                          type="button"
                          variant="default"
                          size="sm"
                          disabled={completingSetup}
                          onClick={() => void handleCompletePolySetup()}
                        >
                          {completingSetup ? t('settings.poly.completeSetupWorking') : t('settings.poly.completeSetupCta')}
                        </Button>
                      </SettingsCardContent>
                    </SettingsCard>
                  </SettingsSection>
                )}

                <SettingsSection title={t('settings.poly.liveTitle')}>
                  <SettingsCard divided={false}>
                    <SettingsCardContent className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          type="button"
                          disabled={configLoading}
                          onClick={() => {
                            void reloadConfig()
                            void reloadSnapshot()
                          }}
                        >
                          {t('settings.poly.refresh')}
                        </Button>
                        <Button variant="default" size="sm" type="button" onClick={() => navigate(routes.view.poly('markets'))}>
                          {t('settings.poly.openMarkets')}
                        </Button>
                        <Button variant="outline" size="sm" type="button" onClick={() => navigate(routes.view.poly('risk'))}>
                          {t('settings.poly.openRisk')}
                        </Button>
                      </div>
                      {healthLine && (
                        <p className="rounded-md border border-border bg-muted/40 px-3 py-2 font-mono text-xs text-foreground">
                          {healthLine}
                        </p>
                      )}
                      {stats && (
                        <ul className="grid gap-2 text-foreground sm:grid-cols-2 text-xs">
                          <li className="rounded-md border border-border/60 bg-background px-3 py-2">
                            {t('settings.poly.marketsCount', { count: stats.markets })}
                          </li>
                          <li className="rounded-md border border-border/60 bg-background px-3 py-2">
                            {t('settings.poly.accountsCount', { count: stats.accounts })}
                          </li>
                          <li className="rounded-md border border-border/60 bg-background px-3 py-2">
                            {t('settings.poly.tradesCount', { count: stats.tradesTotal })}
                          </li>
                          <li className="rounded-md border border-border/60 bg-background px-3 py-2">
                            {t('settings.poly.positionsCount', { count: stats.positions })}
                          </li>
                          <li className="rounded-md border border-border/60 bg-background px-3 py-2 sm:col-span-2">
                            {t('settings.poly.activeCollateral', {
                              amount: formatPolyUsdcCollateral(stats.collateralUsdc),
                            })}
                          </li>
                        </ul>
                      )}
                    </SettingsCardContent>
                  </SettingsCard>
                </SettingsSection>

                <SettingsSection title={t('settings.poly.configSectionTitle')} description={t('settings.poly.configSectionDesc')}>
                  {configError && (
                    <div className="mb-3 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      {configError}
                    </div>
                  )}

                  <Tabs value={tab} onValueChange={setTab} className="w-full">
                    <TabsList className="flex h-auto min-h-9 w-full flex-wrap justify-start gap-1 p-1">
                      <TabsTrigger value="general" className="text-xs shrink-0">
                        {t('settings.poly.tabs.general')}
                      </TabsTrigger>
                      <TabsTrigger value="tags" className="text-xs shrink-0">
                        {t('settings.poly.tabs.tags')}
                      </TabsTrigger>
                      <TabsTrigger value="prices" className="text-xs shrink-0">
                        {t('settings.poly.tabs.prices')}
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="general" className="mt-4 space-y-4">
                      <SettingsCard divided={false}>
                        <SettingsCardContent className="space-y-3">
                          <div className="text-sm font-medium">{t('settings.poly.displaySection')}</div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{t('settings.poly.oddsFormatHelp')}</p>
                          <SettingsSegmentedControl<SpmaOddsFormat>
                            value={oddsFormat}
                            onValueChange={setOddsFormat}
                            options={oddsOptions}
                            size="sm"
                          />
                        </SettingsCardContent>
                      </SettingsCard>

                      {configLoading && <p className="text-sm text-muted-foreground">{t('settings.poly.configLoading')}</p>}

                      {!configLoading && generalRows.length === 0 && !configError && (
                        <p className="text-sm text-muted-foreground">{t('settings.poly.generalEmpty')}</p>
                      )}

                      {!configLoading &&
                        generalRows.map((row) => {
                          const isDirty = row.key in edited && edited[row.key] !== normalizeDisplayValue(row.key, row.value)
                          const isSaving = saving === row.key
                          const descI18n = BOT_KEY_DESC_I18N[row.key]
                          return (
                            <SettingsCard key={row.key} divided={false}>
                              <SettingsCardContent className="space-y-2">
                                <div className="font-mono text-xs font-semibold break-all">{row.key}</div>
                                {descI18n && (
                                  <p className="text-xs text-muted-foreground leading-relaxed">{t(descI18n)}</p>
                                )}
                                <Input
                                  value={getValue(row.key)}
                                  onChange={(e) =>
                                    setEdited((prev) => ({ ...prev, [row.key]: e.target.value }))
                                  }
                                  className="font-mono text-sm"
                                />
                              </SettingsCardContent>
                              <SettingsCardFooter>
                                <Button
                                  type="button"
                                  size="sm"
                                  disabled={!isDirty || isSaving}
                                  onClick={() => void handleSaveKey(row.key)}
                                >
                                  {isSaving ? t('settings.poly.saving') : t('settings.poly.save')}
                                </Button>
                              </SettingsCardFooter>
                            </SettingsCard>
                          )
                        })}
                    </TabsContent>

                    <TabsContent value="tags" className="mt-4">
                      <SettingsCard divided={false}>
                        <SettingsCardContent className="space-y-3">
                          <div className="text-sm font-medium">{t('settings.poly.tagsTitle')}</div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{t('settings.poly.tagsHelp')}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-500/15 px-2 py-0.5 text-xs font-medium text-sky-200"
                              >
                                {tag.toUpperCase()}
                                <button
                                  type="button"
                                  onClick={() => removeTag(tag)}
                                  className="p-0.5 rounded hover:bg-sky-500/25 text-muted-foreground"
                                  aria-label={t('settings.poly.removeTag', { tag })}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            <Input
                              value={tagInput}
                              onChange={(e) => setTagInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault()
                                  addTag(tagInput)
                                }
                              }}
                              placeholder={t('settings.poly.tagPlaceholder')}
                              className="min-w-[12rem] flex-1 font-mono text-sm"
                            />
                            <Button type="button" variant="secondary" size="sm" onClick={() => addTag(tagInput)}>
                              {t('settings.poly.addTag')}
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {SUGGESTED_SPMA_LEAGUE_TAGS.map((label) => {
                              const key = label.toLowerCase()
                              const selected = tags.includes(key)
                              return (
                                <button
                                  key={label}
                                  type="button"
                                  disabled={selected}
                                  onClick={() => addTag(key)}
                                  className={cn(
                                    'rounded-full border px-2 py-0.5 text-xs transition-colors',
                                    selected
                                      ? 'border-border bg-muted text-muted-foreground cursor-default opacity-50'
                                      : 'border-border bg-background hover:border-primary',
                                  )}
                                >
                                  {label}
                                </button>
                              )
                            })}
                          </div>
                        </SettingsCardContent>
                        <SettingsCardFooter>
                          <Button
                            type="button"
                            size="sm"
                            disabled={
                              saving === 'eventClassificationTags' ||
                              JSON.stringify(tags) === rowValue(rows, 'eventClassificationTags')
                            }
                            onClick={() =>
                              void saveStandalone('eventClassificationTags', JSON.stringify(tags), 'settings.poly.savedTags')
                            }
                          >
                            {saving === 'eventClassificationTags' ? t('settings.poly.saving') : t('settings.poly.saveTags')}
                          </Button>
                        </SettingsCardFooter>
                      </SettingsCard>
                    </TabsContent>

                    <TabsContent value="prices" className="mt-4">
                      <SettingsCard divided={false}>
                        <SettingsCardContent className="space-y-3">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <div className="text-sm font-medium">{t('settings.poly.pricesTitle')}</div>
                              <p className="mt-1 text-xs text-muted-foreground leading-relaxed max-w-md">
                                {t('settings.poly.pricesHelp')}
                              </p>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setPriceRows((prev) => [
                                  ...prev,
                                  {
                                    id: `r${Date.now()}`,
                                    name: t('settings.poly.priceRowNew'),
                                    minCents: 0,
                                    maxCents: 10,
                                    fundPct: 0,
                                    stopLossPct: 15,
                                  },
                                ])
                              }
                            >
                              {t('settings.poly.addPriceRange')}
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {t('settings.poly.fundSum', { sum: fundSum.toFixed(0) })}
                          </p>
                          <div className="overflow-x-auto">
                            <div
                              className="grid gap-x-2 gap-y-1.5 items-center text-xs text-muted-foreground min-w-[520px]"
                              style={{
                                gridTemplateColumns: 'minmax(72px,1fr) 56px 56px 64px 72px 28px',
                              }}
                            >
                              <span>{t('settings.poly.priceColName')}</span>
                              <span>{t('settings.poly.priceColMin')}</span>
                              <span>{t('settings.poly.priceColMax')}</span>
                              <span>{t('settings.poly.priceColFund')}</span>
                              <span>{t('settings.poly.priceColStop')}</span>
                              <span />
                              {priceRows.map((r, idx) => (
                                <Fragment key={r.id}>
                                  <Input
                                    value={r.name}
                                    onChange={(e) =>
                                      setPriceRows((prev) =>
                                        prev.map((x, i) => (i === idx ? { ...x, name: e.target.value } : x)),
                                      )
                                    }
                                    className="h-8 font-mono text-xs"
                                  />
                                  <Input
                                    type="number"
                                    value={r.minCents}
                                    onChange={(e) =>
                                      setPriceRows((prev) =>
                                        prev.map((x, i) =>
                                          i === idx ? { ...x, minCents: Number(e.target.value) || 0 } : x,
                                        ),
                                      )
                                    }
                                    className="h-8 font-mono text-xs"
                                  />
                                  <Input
                                    type="number"
                                    value={r.maxCents}
                                    onChange={(e) =>
                                      setPriceRows((prev) =>
                                        prev.map((x, i) =>
                                          i === idx ? { ...x, maxCents: Number(e.target.value) || 0 } : x,
                                        ),
                                      )
                                    }
                                    className="h-8 font-mono text-xs"
                                  />
                                  <Input
                                    type="number"
                                    value={r.fundPct}
                                    onChange={(e) =>
                                      setPriceRows((prev) =>
                                        prev.map((x, i) =>
                                          i === idx ? { ...x, fundPct: Number(e.target.value) || 0 } : x,
                                        ),
                                      )
                                    }
                                    className="h-8 font-mono text-xs"
                                  />
                                  <Input
                                    type="number"
                                    value={r.stopLossPct}
                                    onChange={(e) =>
                                      setPriceRows((prev) =>
                                        prev.map((x, i) =>
                                          i === idx ? { ...x, stopLossPct: Number(e.target.value) || 0 } : x,
                                        ),
                                      )
                                    }
                                    className="h-8 font-mono text-xs"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => setPriceRows((prev) => prev.filter((_, i) => i !== idx))}
                                    className="flex justify-center p-1 rounded-sm hover:bg-destructive/15 text-muted-foreground"
                                    aria-label={t('settings.poly.removePriceRow')}
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </Fragment>
                              ))}
                            </div>
                          </div>
                        </SettingsCardContent>
                        <SettingsCardFooter>
                          <Button
                            type="button"
                            size="sm"
                            disabled={
                              saving === 'priceStopLossRanges' ||
                              JSON.stringify(priceRows) === rowValue(rows, 'priceStopLossRanges')
                            }
                            onClick={() =>
                              void saveStandalone(
                                'priceStopLossRanges',
                                JSON.stringify(priceRows),
                                'settings.poly.savedPrices',
                              )
                            }
                          >
                            {saving === 'priceStopLossRanges' ? t('settings.poly.saving') : t('settings.poly.savePrices')}
                          </Button>
                        </SettingsCardFooter>
                      </SettingsCard>
                    </TabsContent>
                  </Tabs>
                </SettingsSection>
              </>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
