import { createConnection } from 'node:net';
import { ClobUserClient } from '@poly-agents/poly-ws';
import type { ClobTradeEvent } from '@poly-agents/poly-ws';
import { createLogger } from '../logger';
import {
  getEffectiveHttpPlatformProxyUrl,
  httpPlatformProxyLogFields,
} from '../effectiveBotSettings';
import { wsHandshakeTimeoutMs } from '../proxiedWebSocket';
import { resolvePolymarketTradingCredentials } from './polymarketTrading';
import {
  applyPolymarketUserTradeFromWs,
  syncRiskPositionsFromRestTrades,
} from './riskService';
import { syncRiskPolymarketBookSubscriptions } from './riskPolymarketSubscriptions';

const log = createLogger('polymarketUserWs');

const PING_INTERVAL_MS = 10_000;
const RECONNECT_MS = 4_000;
const RECONNECT_AFTER_PROXY_DEAD_MS = 30_000;
const PROXY_TCP_PROBE_MS = 10_000;
const REST_SYNC_MS = 45_000;
const BOOK_SUB_SYNC_MS = 12_000;
const WS_STALE_MS = 75_000;

let userClient: ClobUserClient | null = null;
let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
let restTimer: ReturnType<typeof setInterval> | null = null;
let bookSubTimer: ReturnType<typeof setInterval> | null = null;
let started = false;
let lastMessageAt: Date | null = null;
let restSyncLastAt: Date | null = null;
let lastUserWsIssue: string | null = null;

function fmtErr(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (err && typeof err === 'object' && 'message' in err) {
    const m = (err as { message: unknown }).message;
    if (typeof m === 'string' && m.length > 0) return m;
  }
  return String(err);
}

function userWsProxyLogFields(): {
  outboundProxyConfigured: boolean;
  outboundProxyOrigin: string | undefined;
  configuredProxyOrigin: string | undefined;
  proxyRewrittenForDockerHost: boolean;
} {
  return httpPlatformProxyLogFields();
}

function proxyTagZh(): string {
  return getEffectiveHttpPlatformProxyUrl() ? '代理:开' : '代理:关';
}

function defaultProxyPort(u: URL): number {
  if (u.port) return Number(u.port);
  if (u.protocol === 'https:') return 443;
  return 80;
}

async function isProxyHostReachable(proxyUrl: string): Promise<boolean> {
  let u: URL;
  try {
    u = new URL(proxyUrl);
  } catch {
    return false;
  }
  const host = u.hostname;
  const port = defaultProxyPort(u);
  if (!host || !Number.isFinite(port) || port <= 0) return false;

  return await new Promise((resolve) => {
    let settled = false;
    const done = (ok: boolean) => {
      if (settled) return;
      settled = true;
      resolve(ok);
    };

    const socket = createConnection({ host, port }, () => {
      socket.destroy();
      done(true);
    });
    socket.setTimeout(PROXY_TCP_PROBE_MS);
    socket.once('timeout', () => {
      socket.destroy();
      done(false);
    });
    socket.once('error', () => {
      socket.destroy();
      done(false);
    });
  });
}

export function getPolymarketUserWsMeta(): {
  connected: boolean;
  connecting: boolean;
  lastMessageAt: string | null;
  restTradesSyncLastAt: string | null;
  lastIssue: string | null;
  outboundProxyConfigured: boolean;
} {
  const st = userClient?.connectionState;
  return {
    connected: st === 'connected',
    connecting: st === 'connecting' || st === 'reconnecting',
    lastMessageAt: lastMessageAt?.toISOString() ?? null,
    restTradesSyncLastAt: restSyncLastAt?.toISOString() ?? null,
    lastIssue: lastUserWsIssue,
    outboundProxyConfigured: Boolean(getEffectiveHttpPlatformProxyUrl()),
  };
}

function touchMessage(): void {
  lastMessageAt = new Date();
}

function scheduleUserWsReconnect(delayMs: number = RECONNECT_MS): void {
  if (reconnectTimer) clearTimeout(reconnectTimer);
  reconnectTimer = setTimeout(() => {
    reconnectTimer = null;
    void connectUserWs();
  }, delayMs);
}

export function hardResetPolymarketUserWs(): void {
  if (reconnectTimer) {
    clearTimeout(reconnectTimer);
    reconnectTimer = null;
  }
  if (userClient) {
    try {
      userClient.disconnect();
    } catch {
      // ignore
    }
    userClient = null;
  }
  lastUserWsIssue = 'reconnect_after_proxy_change';
  void connectUserWs();
}

async function connectUserWs(): Promise<void> {
  if (userClient && userClient.connectionState !== 'disconnected') return;

  let creds: Awaited<ReturnType<typeof resolvePolymarketTradingCredentials>>;
  try {
    creds = await resolvePolymarketTradingCredentials();
  } catch (err) {
    lastUserWsIssue = `no_trading_credentials:${fmtErr(err)}`;
    log.warn({ err }, 'polymarket user ws: no trading credentials, skip');
    scheduleUserWsReconnect();
    return;
  }

  const proxyUrl = getEffectiveHttpPlatformProxyUrl();
  if (proxyUrl) {
    const alive = await isProxyHostReachable(proxyUrl);
    if (!alive) {
      lastUserWsIssue = `proxy_unreachable [${proxyTagZh()}]`;
      log.error(
        { ...userWsProxyLogFields() },
        'polymarket user ws: outbound proxy TCP unreachable, delaying reconnect',
      );
      scheduleUserWsReconnect(RECONNECT_AFTER_PROXY_DEAD_MS);
      return;
    }
  }

  if (userClient) {
    try {
      userClient.disconnect();
    } catch {
      // ignore
    }
    userClient = null;
  }

  const viaProxy = Boolean(proxyUrl?.trim());
  log.info({ ...userWsProxyLogFields(), viaProxy }, 'polymarket user ws connecting (ClobUserClient)');

  userClient = new ClobUserClient(
    {
      apiKey: creds.apiKey,
      secret: creds.secret,
      passphrase: creds.passphrase,
    },
    {
      ...(proxyUrl?.trim() ? { proxyUrl: proxyUrl.trim() } : {}),
      connectionTimeout: wsHandshakeTimeoutMs(),
      heartbeatInterval: PING_INTERVAL_MS,
      reconnectDelay: RECONNECT_MS,
      maxReconnectDelay: 60_000,
    },
  );

  userClient.on('connected', () => {
    lastUserWsIssue = null;
    touchMessage();
    log.info({ ...userWsProxyLogFields(), viaProxy }, 'polymarket user ws connected');
  });

  userClient.on('error', (err: Error) => {
    const msg = fmtErr(err);
    lastUserWsIssue = `ws_error:${msg} [${proxyTagZh()}]`;
    log.warn({ err, ...userWsProxyLogFields(), viaProxy }, 'polymarket user ws error');
  });

  userClient.on('disconnected', (payload: { code: number; reason: string }) => {
    const { code, reason } = payload;
    const why = reason?.length ? reason : '';
    const base = why ? `closed:${code}:${why.slice(0, 120)}` : `closed:${code}`;
    lastUserWsIssue = `${base} [${proxyTagZh()}]`;
    log.warn({ code, why: why.slice(0, 200), ...userWsProxyLogFields(), viaProxy }, 'polymarket user ws closed');
  });

  userClient.onTrade((ev: ClobTradeEvent) => {
    touchMessage();
    void (async () => {
      try {
        await applyPolymarketUserTradeFromWs(ev);
        await syncRiskPolymarketBookSubscriptions();
      } catch (err) {
        log.warn({ err }, 'user ws trade handling failed');
      }
    })();
  });

  try {
    await userClient.connect();
  } catch (err) {
    lastUserWsIssue = `connect_failed:${fmtErr(err)}`;
    log.error({ err }, 'polymarket user ws connect failed');
    userClient = null;
    scheduleUserWsReconnect();
  }
}

async function maybeRestSync(): Promise<void> {
  const meta = getPolymarketUserWsMeta();
  const stale =
    !meta.connected ||
    (meta.lastMessageAt != null &&
      Date.now() - new Date(meta.lastMessageAt).getTime() > WS_STALE_MS);
  if (!stale) return;
  try {
    await resolvePolymarketTradingCredentials();
    await syncRiskPositionsFromRestTrades();
    restSyncLastAt = new Date();
    log.info('risk: REST trade sync (user ws stale or down)');
  } catch (err) {
    log.warn({ err }, 'risk: REST trade sync failed');
  }
}

export function startPolymarketUserWsService(): void {
  if (started) return;
  started = true;
  void connectUserWs();

  restTimer = setInterval(() => {
    void maybeRestSync();
  }, REST_SYNC_MS);

  bookSubTimer = setInterval(() => {
    void syncRiskPolymarketBookSubscriptions().catch((err) =>
      log.warn({ err }, 'risk poly book sub sync failed'),
    );
  }, BOOK_SUB_SYNC_MS);

  void syncRiskPolymarketBookSubscriptions().catch(() => {});
}
