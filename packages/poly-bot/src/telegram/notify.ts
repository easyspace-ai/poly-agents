import { getTelegramAuthorizedChatId, getTelegramBotToken } from '../effectiveBotSettings';
import { createLogger } from '../logger';
import type { BalanceSummary } from '../adapters/balance';

const log = createLogger('telegram-notify');

let lastBalanceFingerprint: string | null = null;

function fingerprintBalances(s: BalanceSummary): string {
  const parts = [`agg:${s.polymarket ?? 'null'}`];
  for (const row of s.polymarketAccounts) {
    parts.push(`${row.id}:${row.polymarket ?? 'null'}`);
  }
  return parts.join('|');
}

/** Outbound Telegram message via Bot API (no grammy polling — safe alongside Craft Messaging). */
export function sendTelegramPlainMessage(text: string): void {
  const token = getTelegramBotToken()?.trim();
  const chatRaw = getTelegramAuthorizedChatId()?.trim();
  if (!token || !chatRaw) return;

  const chatParam = /^-?\d+$/.test(chatRaw) ? Number(chatRaw) : chatRaw;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  void fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatParam, text }),
  }).catch((err: unknown) => {
    log.error({ err }, 'telegram sendMessage failed');
  });
}

/** When GET /api/balances runs, notify only if aggregate or per-account collateral changed vs last poll. */
export function notifyPolymarketBalancesIfChanged(summary: BalanceSummary): void {
  const fp = fingerprintBalances(summary);
  if (lastBalanceFingerprint === null) {
    lastBalanceFingerprint = fp;
    return;
  }
  if (fp === lastBalanceFingerprint) return;
  lastBalanceFingerprint = fp;

  const lines = ['💰 Polymarket 余额变动'];
  if (summary.polymarket != null) {
    lines.push(`活动账户 collateral: $${summary.polymarket.toFixed(2)}`);
  }
  for (const a of summary.polymarketAccounts) {
    const v = a.polymarket == null ? '—' : `$${a.polymarket.toFixed(2)}`;
    lines.push(`${a.name}: ${v}`);
  }
  sendTelegramPlainMessage(lines.join('\n'));
}

export interface TradeNotificationData {
  marketName: string;
  outcomeLabel: string;
  platform: string;
  side: string;
  size: number;
  fillOdds?: number;
  txHash?: string;
  status: 'filled' | 'failed';
  failureReason?: string;
}

export function sendTradeNotification(data: TradeNotificationData): void {
  const platformLabel = data.platform === 'sx' ? 'SX Bet' : 'Polymarket';
  const oddsStr = data.fillOdds != null ? (data.fillOdds * 100).toFixed(1) + '%' : '—';

  let head: string;
  if (data.status === 'failed') {
    head = '❌ 订单失败';
  } else if (data.side === 'buy') {
    head = '✅ 开单（买入成交）';
  } else {
    head = '✅ 卖出成交';
  }

  let text =
    `${head}\n` +
    `市场: ${data.marketName}\n` +
    `结果: ${data.outcomeLabel}\n` +
    `方向: ${data.side} | 金额: $${data.size}\n` +
    `平台: ${platformLabel} | 隐含概率: ${oddsStr}`;

  if (data.txHash) {
    text += `\n订单/成交: ${data.txHash}`;
  }
  if (data.status === 'failed' && data.failureReason) {
    text += `\n原因: ${data.failureReason}`;
  }

  sendTelegramPlainMessage(text);
}

export function sendPositionClosedNotification(params: {
  title: string;
  sideLabel: string;
  reason?: string;
}): void {
  const lines = [
    '📤 平仓',
    `标的: ${params.title}`,
    `方向: ${params.sideLabel}`,
  ];
  if (params.reason) lines.push(`说明: ${params.reason}`);
  sendTelegramPlainMessage(lines.join('\n'));
}
