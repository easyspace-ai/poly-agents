/**
 * SPMA / poly UI odds display — local renderer only (mirrors cccc/dashboard Settings OddsFormatToggle).
 */

import * as React from 'react'

export type SpmaOddsFormat = 'decimal' | 'american' | 'percent'

const STORAGE_KEY = 'craft.polySpma.oddsFormat'
const VALID: readonly SpmaOddsFormat[] = ['decimal', 'american', 'percent']

function readStored(): SpmaOddsFormat {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw && (VALID as readonly string[]).includes(raw)) return raw as SpmaOddsFormat
  } catch {
    // ignore
  }
  return 'decimal'
}

let current: SpmaOddsFormat = readStored()
const listeners = new Set<(f: SpmaOddsFormat) => void>()

export function getSpmaOddsFormat(): SpmaOddsFormat {
  return current
}

export function setSpmaOddsFormat(format: SpmaOddsFormat): void {
  if (!(VALID as readonly string[]).includes(format)) return
  if (format === current) return
  current = format
  try {
    localStorage.setItem(STORAGE_KEY, format)
  } catch {
    // ignore
  }
  for (const fn of listeners) fn(current)
}

export function subscribeSpmaOddsFormat(fn: (f: SpmaOddsFormat) => void): () => void {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

export function useSpmaOddsFormat(): [SpmaOddsFormat, (f: SpmaOddsFormat) => void] {
  const [format, setFormat] = React.useState<SpmaOddsFormat>(getSpmaOddsFormat)
  React.useEffect(() => subscribeSpmaOddsFormat(setFormat), [])
  return [format, setSpmaOddsFormat]
}

/** Display implied probability as decimal / American / percent (same rules as cccc/dashboard). */
export function formatSpmaOdds(impliedOdds: number | null | undefined, format: SpmaOddsFormat): string {
  if (impliedOdds == null || !isFinite(impliedOdds) || impliedOdds <= 0 || impliedOdds > 1) {
    return '—'
  }
  if (format === 'percent') {
    return `${(impliedOdds * 100).toFixed(1)}%`
  }
  const decimal = 1 / impliedOdds
  if (format === 'american') {
    if (decimal <= 1.0001) return '—'
    if (decimal >= 2) return `+${Math.round((decimal - 1) * 100)}`
    return `-${Math.round(100 / (decimal - 1))}`
  }
  return decimal.toFixed(2)
}
