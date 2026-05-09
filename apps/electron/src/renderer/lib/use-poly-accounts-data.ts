import * as React from 'react'
import {
  polyFetchBalances,
  polyFetchHealth,
  polyFetchPolymarketAccounts,
  polyIsReady,
  type PolyAccountRow,
} from '@/lib/poly-client'

export function usePolyAccountsData() {
  const [ready, setReady] = React.useState<boolean | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [health, setHealth] = React.useState<string | null>(null)
  const [accounts, setAccounts] = React.useState<PolyAccountRow[] | null>(null)
  const [collateralById, setCollateralById] = React.useState<Record<string, number | null>>({})

  const reload = React.useCallback(async () => {
    setError(null)
    try {
      const ok = await polyIsReady()
      setReady(ok)
      if (!ok) {
        setError('Poly backend is not running (install Bun and restart the app).')
        setAccounts(null)
        setHealth(null)
        setCollateralById({})
        return
      }
      const h = await polyFetchHealth()
      setHealth(`${h.status}${h.db ? ` · ${h.db}` : ''}`)
      const list = await polyFetchPolymarketAccounts()
      setAccounts(list)
      try {
        const b = await polyFetchBalances()
        const next: Record<string, number | null> = {}
        for (const row of b.polymarketAccounts) {
          next[row.id] = row.polymarket
        }
        setCollateralById(next)
      } catch {
        setCollateralById({})
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
      setCollateralById({})
    }
  }, [])

  React.useEffect(() => {
    void reload()
  }, [reload])

  return { ready, error, health, accounts, collateralById, reload }
}
