import { ClobMarketClient } from '@poly-agents/poly-ws';
import type { ClobBookEvent } from '@poly-agents/poly-ws';
import { polymarketBookCache, type ClobLevel, type PriceChange } from './polymarketBookCache';
import { polymarketOddsCache } from './polymarketOddsCache';
import { prisma } from '../db';
import { emitMarketRemoved } from './marketEvents';
import { createLogger } from '../logger';
import { platformFetch } from '../platformFetch';
import { getEffectiveHttpPlatformProxyUrl } from '../effectiveBotSettings';
import { wsHandshakeTimeoutMs } from '../proxiedWebSocket';

const log = createLogger('polymarketWs');

const CLOB_API = 'https://clob.polymarket.com';

const PING_INTERVAL_MS = 10_000;
const RECONNECT_BACKOFF_MS = 3_000;
const UNSUBSCRIBE_GRACE_MS = 10_000;
const BOOK_SEED_CONCURRENCY = 6;
const ODDS_SEED_CONCURRENCY = 6;
const SEED_TIMEOUT_MS = 5_000;

interface SubState {
  depthRefCount: number;
  bestOddsRefCount: number;
  pendingTeardown: ReturnType<typeof setTimeout> | null;
}

interface BestBidAskEventPayload {
  event_type: 'best_bid_ask';
  asset_id: string;
  market: string;
  best_bid: string;
  best_ask: string;
  spread?: string;
  timestamp: string;
}

interface MarketResolvedEventPayload {
  event_type: 'market_resolved';
  market?: string;
  condition_id?: string;
  assets_ids?: string[];
  clob_token_ids?: string[];
}

const subs = new Map<string, SubState>();

let marketClient: ClobMarketClient | null = null;
let marketListenersBound = false;
let started = false;

function totalRef(s: SubState): number {
  return s.depthRefCount + s.bestOddsRefCount;
}

function getActiveTokenIds(): string[] {
  return Array.from(subs.keys()).filter((id) => {
    const s = subs.get(id);
    return !!s && totalRef(s) > 0;
  });
}

const seedInflight = new Map<string, Promise<void>>();

interface SeedQueue {
  limit: number;
  active: number;
  pending: Array<() => void>;
}

const bookQueue: SeedQueue = { limit: BOOK_SEED_CONCURRENCY, active: 0, pending: [] };
const oddsQueue: SeedQueue = { limit: ODDS_SEED_CONCURRENCY, active: 0, pending: [] };

function runOn(q: SeedQueue, job: () => Promise<void>): void {
  if (q.active < q.limit) {
    q.active += 1;
    job().finally(() => {
      q.active -= 1;
      const next = q.pending.shift();
      if (next) next();
    });
  } else {
    q.pending.push(() => runOn(q, job));
  }
}

async function fetchWithTimeout(url: string): Promise<Response | null> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), SEED_TIMEOUT_MS);
  try {
    return await platformFetch(url, { signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

async function seedBook(tokenId: string): Promise<void> {
  const key = `book:${tokenId}`;
  const existing = seedInflight.get(key);
  if (existing) return existing;
  const promise = new Promise<void>((resolve) => {
    runOn(bookQueue, async () => {
      try {
        const res = await fetchWithTimeout(`${CLOB_API}/book?token_id=${encodeURIComponent(tokenId)}`);
        if (!res || !res.ok) return;
        const body = (await res.json()) as { bids?: ClobLevel[]; asks?: ClobLevel[] };
        polymarketBookCache.replaceBook(tokenId, body.bids ?? [], body.asks ?? [], Date.now());
      } catch {
        // silent
      } finally {
        seedInflight.delete(key);
        resolve();
      }
    });
  });
  seedInflight.set(key, promise);
  return promise;
}

async function seedBestOdds(tokenId: string): Promise<void> {
  const key = `odds:${tokenId}`;
  const existing = seedInflight.get(key);
  if (existing) return existing;
  const promise = new Promise<void>((resolve) => {
    runOn(oddsQueue, async () => {
      try {
        const res = await fetchWithTimeout(`${CLOB_API}/price?token_id=${encodeURIComponent(tokenId)}&side=SELL`);
        if (!res || !res.ok) return;
        const body = (await res.json()) as { price?: string | number };
        const raw = typeof body.price === 'string' ? parseFloat(body.price) : body.price;
        if (typeof raw !== 'number' || !Number.isFinite(raw) || raw <= 0) return;
        if (polymarketOddsCache.get(tokenId)) return;
        polymarketOddsCache.set(tokenId, raw, 0, Date.now());
      } catch {
        // silent
      } finally {
        seedInflight.delete(key);
        resolve();
      }
    });
  });
  seedInflight.set(key, promise);
  return promise;
}

export function warmPolyBook(tokenId: string): Promise<void> {
  if (polymarketBookCache.hasToken(tokenId)) return Promise.resolve();
  return seedBook(tokenId);
}

function mirrorTopOfBookToOddsCache(tokenId: string): void {
  const top = polymarketBookCache.getTopOfBook(tokenId);
  if (!top || top.bestAsk === undefined) return;
  polymarketOddsCache.set(tokenId, top.bestAsk, top.bestBid ?? 0, Date.now());
}

function handleBookPayload(b: ClobBookEvent): void {
  if (!b.asset_id) return;
  const state = subs.get(b.asset_id);
  if (!state || totalRef(state) === 0) return;
  const ts = parseInt(b.timestamp, 10) || Date.now();
  polymarketBookCache.replaceBook(b.asset_id, b.bids ?? [], b.asks ?? [], ts);
  mirrorTopOfBookToOddsCache(b.asset_id);
}

/** Normalize Polymarket `price_change` (typed `price_changes` or legacy `changes` + parent `asset_id`). */
function applyPriceChangeEvent(raw: unknown): void {
  if (!raw || typeof raw !== 'object') return;
  const ev = raw as Record<string, unknown>;
  if (ev.event_type !== 'price_change') return;

  const ts = parseInt(String(ev.timestamp ?? ''), 10) || Date.now();
  const byAsset = new Map<string, PriceChange[]>();

  const legacyChanges = ev.changes;
  const legacyAsset = typeof ev.asset_id === 'string' ? ev.asset_id : '';
  if (Array.isArray(legacyChanges) && legacyAsset) {
    byAsset.set(legacyAsset, legacyChanges as PriceChange[]);
  } else {
    const rows = (ev as { price_changes?: unknown }).price_changes;
    if (!Array.isArray(rows)) return;
    for (const row of rows) {
      if (!row || typeof row !== 'object') continue;
      const r = row as Record<string, unknown>;
      const aid = typeof r.asset_id === 'string' ? r.asset_id : '';
      if (!aid) continue;
      const side = r.side === 'BUY' || r.side === 'SELL' ? r.side : 'SELL';
      const price = String(r.price ?? '');
      const size = String(r.size ?? '');
      const list = byAsset.get(aid) ?? [];
      list.push({ side, price, size });
      byAsset.set(aid, list);
    }
  }

  for (const [asset_id, changes] of byAsset) {
    if (changes.length === 0) continue;
    const state = subs.get(asset_id);
    if (!state || totalRef(state) === 0) continue;
    polymarketBookCache.applyPriceChange(asset_id, changes, ts);
    mirrorTopOfBookToOddsCache(asset_id);
  }
}

function handleBestBidAsk(bba: BestBidAskEventPayload): void {
  if (!bba.asset_id) return;
  const state = subs.get(bba.asset_id);
  if (!state || state.bestOddsRefCount === 0) return;
  const bestAsk = parseFloat(bba.best_ask);
  const bestBid = parseFloat(bba.best_bid);
  if (!Number.isFinite(bestAsk) || bestAsk <= 0) return;
  polymarketOddsCache.set(bba.asset_id, bestAsk, Number.isFinite(bestBid) ? bestBid : 0, Date.now());
}

function handleMarketResolved(r: MarketResolvedEventPayload): void {
  const tokenIds = (r.assets_ids ?? r.clob_token_ids ?? []).filter((s) => typeof s === 'string' && s.length > 0);
  if (tokenIds.length === 0) return;
  void (async () => {
    try {
      const outcomes = await prisma.outcome.findMany({
        where: { externalId: { in: tokenIds }, market: { platform: 'polymarket', status: 'active' } },
        select: { marketId: true },
      });
      if (outcomes.length === 0) return;
      const marketIds = Array.from(new Set(outcomes.map((o) => o.marketId)));
      await prisma.market.updateMany({
        where: { id: { in: marketIds } },
        data: { status: 'inactive' },
      });
      for (const id of marketIds) emitMarketRemoved(id);
      log.info({ count: marketIds.length, tokenIds }, 'polymarket market_resolved → deactivated');
    } catch (err) {
      log.error({ err, tokenIds }, 'market_resolved handler failed');
    }
  })();
}

function wireMarketClient(client: ClobMarketClient): void {
  if (marketListenersBound) return;
  marketListenersBound = true;

  client.on('connected', () => {
    log.info({ viaProxy: Boolean(getEffectiveHttpPlatformProxyUrl()) }, 'clob market connected');
    const tokens = getActiveTokenIds();
    if (tokens.length > 0) {
      client.subscribe(tokens);
    }
  });

  client.on('error', (err: Error) => {
    log.error({ err }, 'clob market ws error');
  });

  client.on('disconnected', (payload: { code: number; reason: string }) => {
    log.warn({ code: payload.code, reason: payload.reason }, 'clob market ws disconnected');
  });

  client.onMarketMessage((ev: unknown) => {
    if (!ev || typeof ev !== 'object') return;
    const e = ev as Record<string, unknown>;
    const t = e.event_type;
    if (t === 'book') handleBookPayload(ev as ClobBookEvent);
    else if (t === 'price_change') applyPriceChangeEvent(ev);
    else if (t === 'best_bid_ask') handleBestBidAsk(ev as BestBidAskEventPayload);
    else if (t === 'market_resolved') handleMarketResolved(ev as MarketResolvedEventPayload);
  });

  marketListenersBound = true;
}

function ensureUpstream(tokenId: string): void {
  const tokens = getActiveTokenIds();
  if (tokens.length === 0) return;

  if (!marketClient) {
    const proxyUrl = getEffectiveHttpPlatformProxyUrl()?.trim();
    marketClient = new ClobMarketClient({
      ...(proxyUrl ? { proxyUrl } : {}),
      connectionTimeout: wsHandshakeTimeoutMs(),
      heartbeatInterval: PING_INTERVAL_MS,
      reconnectDelay: RECONNECT_BACKOFF_MS,
      maxReconnectDelay: 30_000,
    });
    wireMarketClient(marketClient);
    marketClient.subscribe(tokens);
    void marketClient.connect().catch((err) => log.error({ err }, 'clob market connect failed'));
    log.info({ viaProxy: Boolean(proxyUrl), tokenCount: tokens.length }, 'clob market client starting');
    return;
  }

  marketClient.subscribe([tokenId]);
}

/** Drop the CLOB market client so the next subscribe picks up a fresh proxy / TLS stack. */
export function hardResetPolymarketMarketWs(): void {
  marketListenersBound = false;
  if (marketClient) {
    try {
      marketClient.disconnect();
    } catch (err) {
      log.warn({ err }, 'clob market disconnect failed');
    }
    marketClient = null;
  }
  const tokens = getActiveTokenIds();
  if (tokens.length > 0) {
    ensureUpstream(tokens[0]!);
  }
}

function getOrCreate(tokenId: string): SubState {
  let s = subs.get(tokenId);
  if (!s) {
    s = { depthRefCount: 0, bestOddsRefCount: 0, pendingTeardown: null };
    subs.set(tokenId, s);
  }
  return s;
}

function scheduleTeardown(tokenId: string): void {
  const state = subs.get(tokenId);
  if (!state) return;
  if (totalRef(state) > 0) return;
  if (state.pendingTeardown) return;
  state.pendingTeardown = setTimeout(() => {
    const s = subs.get(tokenId);
    if (!s || totalRef(s) > 0) return;
    subs.delete(tokenId);
    if (marketClient?.isConnected) {
      try {
        marketClient.unsubscribe([tokenId]);
      } catch (err) {
        log.warn({ err, tokenId }, 'clob market unsubscribe failed');
      }
    }
    polymarketBookCache.clearBook(tokenId);
    polymarketOddsCache.clear(tokenId);
  }, UNSUBSCRIBE_GRACE_MS);
}

export function subscribeToPolyBook(tokenId: string): void {
  if (!started) {
    log.warn({ tokenId }, 'subscribeToPolyBook called before service started');
    return;
  }
  const state = getOrCreate(tokenId);
  const upstreamActive = totalRef(state) > 0 || state.pendingTeardown !== null;
  if (state.pendingTeardown) {
    clearTimeout(state.pendingTeardown);
    state.pendingTeardown = null;
  }
  const wasDepthActive = state.depthRefCount > 0;
  state.depthRefCount += 1;
  if (!wasDepthActive) {
    polymarketBookCache.clearBook(tokenId);
    seedBook(tokenId).catch((err) => {
      log.error({ err, tokenId }, 'seedBook failed');
    });
  }
  if (!upstreamActive) ensureUpstream(tokenId);
}

export function unsubscribeFromPolyBook(tokenId: string): void {
  const state = subs.get(tokenId);
  if (!state || state.depthRefCount === 0) return;
  state.depthRefCount -= 1;
  if (totalRef(state) > 0) return;
  scheduleTeardown(tokenId);
}

export async function refreshPolymarketBook(tokenId: string): Promise<void> {
  if (!tokenId) return;
  polymarketBookCache.clearBook(tokenId);
  polymarketOddsCache.clear(tokenId);
  await seedBook(tokenId);
}

export function subscribeToPolyBestOdds(tokenId: string): void {
  if (!started) {
    log.warn({ tokenId }, 'subscribeToPolyBestOdds called before service started');
    return;
  }
  const state = getOrCreate(tokenId);
  const upstreamActive = totalRef(state) > 0 || state.pendingTeardown !== null;
  if (state.pendingTeardown) {
    clearTimeout(state.pendingTeardown);
    state.pendingTeardown = null;
  }
  const wasBestOddsActive = state.bestOddsRefCount > 0;
  state.bestOddsRefCount += 1;
  if (!wasBestOddsActive && !polymarketOddsCache.has(tokenId)) {
    seedBestOdds(tokenId).catch((err) => {
      log.error({ err, tokenId }, 'seedBestOdds failed');
    });
  }
  if (!upstreamActive) ensureUpstream(tokenId);
}

export function unsubscribeFromPolyBestOdds(tokenId: string): void {
  const state = subs.get(tokenId);
  if (!state || state.bestOddsRefCount === 0) return;
  state.bestOddsRefCount -= 1;
  if (totalRef(state) > 0) return;
  scheduleTeardown(tokenId);
}

export function startPolymarketWsService(): void {
  if (started) return;
  started = true;
  log.info('service started (lazy @poly-agents/poly-ws ClobMarketClient)');
}
