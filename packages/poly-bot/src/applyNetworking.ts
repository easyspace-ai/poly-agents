import { refreshBotConfigCache } from './botConfigCache';
import {
  installAxiosProxyForPolymarket,
  resetAxiosPolymarketProxy,
  resetPlatformProxyAgents,
} from './proxySupport';
import { resetOutboundWsProxyAgent } from './proxiedWebSocket';
import { hardResetPolymarketMarketWs } from './services/polymarketWs';
import { hardResetPolymarketUserWs } from './services/polymarketUserWs';

export async function applyNetworkingFromDb(): Promise<void> {
  await refreshBotConfigCache();
  resetPlatformProxyAgents();
  resetOutboundWsProxyAgent();
  resetAxiosPolymarketProxy();
  installAxiosProxyForPolymarket();
  hardResetPolymarketMarketWs();
  hardResetPolymarketUserWs();
}
