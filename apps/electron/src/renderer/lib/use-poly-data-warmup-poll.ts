import * as React from 'react'

/**
 * Periodically re-fetch while `enabled` (e.g. empty catalog right after heavy services start).
 * Stops after `maxTicks` or when the parent clears `enabled`.
 */
export function usePolyDataWarmupPoll(opts: {
  enabled: boolean
  reload: () => void | Promise<void>
  intervalMs?: number
  maxTicks?: number
}): void {
  const { enabled, reload, intervalMs = 15_000, maxTicks = 48 } = opts
  React.useEffect(() => {
    if (!enabled) return undefined
    let ticks = 0
    const id = setInterval(() => {
      ticks += 1
      if (ticks > maxTicks) {
        clearInterval(id)
        return
      }
      void reload()
    }, intervalMs)
    return () => clearInterval(id)
  }, [enabled, reload, intervalMs, maxTicks])
}
