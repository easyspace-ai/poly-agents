/**
 * Child entry: starts the loopback Express API and prints `POLY_READY <port>` for the Electron parent.
 * Run with: `bun run src/electron-stdio-port.ts` (cwd = packages/poly-bot).
 */
import { startInternalPolyHttpHost } from './electron/internalHttpHost';

async function main(): Promise<void> {
  const host = await startInternalPolyHttpHost();
  process.stdout.write(`POLY_READY ${host.port}\n`);
}

main().catch((err) => {
  console.error('[poly-child]', err);
  process.exit(1);
});
