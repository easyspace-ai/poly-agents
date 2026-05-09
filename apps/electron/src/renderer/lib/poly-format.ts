/** Format Polymarket collateral (USDC) for UI; null/NaN → dash. */
export function formatPolyUsdcCollateral(value: number | null | undefined, dash = '—'): string {
  if (value == null || !Number.isFinite(value)) return dash
  const s = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })
  return `${s} USDC`
}
