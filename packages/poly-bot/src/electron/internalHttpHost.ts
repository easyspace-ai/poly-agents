/**
 * Embeds the existing Express API on a loopback HTTP server (random port) in the poly child process.
 * The renderer never receives this URL: Electron main proxies `/api/*` via typed IPC (`POLY_IPC_CHANNELS.HTTP_REQUEST`).
 */
import http from 'node:http';
import { createLogger } from '../logger';
import { runPendingMigrationsOrThrow } from '../runPendingMigrations';
import { prisma } from '../db';
import { applyNetworkingFromDb } from '../applyNetworking';
import { ensureOnboardingDefault, isOnboardingCompleteCached } from '../onboarding';
import { registerMainHttpServer, startHeavyServicesIfIdle } from '../heavyServices';
import app from '../app';

const log = createLogger('poly:electron');

export type PolyInternalHttpHost = {
  readonly port: number;
  readonly baseUrl: string;
  stop: () => Promise<void>;
};

export async function startInternalPolyHttpHost(): Promise<PolyInternalHttpHost> {
  runPendingMigrationsOrThrow();
  await prisma.$connect();
  log.info('db connected');

  const staleRunning = await prisma.riskTask.updateMany({
    where: { status: 'running' },
    data: {
      status: 'pending',
      nextRunAt: new Date(),
      lastError: 'reset_after_restart',
    },
  });
  if (staleRunning.count > 0) {
    log.info({ count: staleRunning.count }, 'risk: reset stale running tasks on startup');
  }

  await ensureOnboardingDefault();
  await applyNetworkingFromDb();

  const server = http.createServer(app);
  await new Promise<void>((resolve, reject) => {
    server.listen(0, '127.0.0.1', () => resolve()).once('error', reject);
  });
  const addr = server.address();
  if (!addr || typeof addr === 'string') {
    throw new Error('poly internal server: expected TCP address');
  }
  const port = addr.port;
  const baseUrl = `http://127.0.0.1:${port}`;

  registerMainHttpServer(server);
  // Defer heavy services so the parent process can read POLY_READY quickly (Electron subprocess handshake).
  if (isOnboardingCompleteCached()) {
    setImmediate(() => {
      startHeavyServicesIfIdle(server, 'full');
    });
  } else {
    log.info('onboarding: heavy services deferred until setup complete');
  }

  log.info({ port, baseUrl }, 'internal poly HTTP API listening (loopback only)');

  return {
    port,
    baseUrl,
    stop: () =>
      new Promise<void>((resolve) => {
        server.close(() => resolve());
      }).then(() => prisma.$disconnect()),
  };
}
