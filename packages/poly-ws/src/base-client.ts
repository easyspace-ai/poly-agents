/**
 * Base WebSocket Client
 * Provides connection management, automatic reconnection, heartbeat, and error handling
 */

import { TypedEventEmitter } from './event-emitter.js';
import type { BaseClientOptions, ConnectionState, ClientEventMap, Logger } from './types.js';
import WebSocket from 'ws';
import { HttpsProxyAgent } from 'https-proxy-agent';

/** Default logger using console */
const defaultLogger: Logger = {
  error: (message: string, ...args: unknown[]) => console.error(message, ...args),
};

/** Default configuration values */
const DEFAULTS = {
  autoReconnect: true,
  maxReconnectAttempts: Infinity,
  reconnectDelay: 1000,
  maxReconnectDelay: 30000,
  heartbeatInterval: 10000,
  connectionTimeout: 10000,
} as const;

/** Extended event map including raw message */
interface BaseEventMap extends ClientEventMap {
  rawMessage: string;
}

/** Internal options type */
interface InternalOptions {
  url: string;
  autoReconnect: boolean;
  maxReconnectAttempts: number;
  reconnectDelay: number;
  maxReconnectDelay: number;
  heartbeatInterval: number;
  connectionTimeout: number;
  logger: Logger;
  proxyUrl?: string;
  proxyHeaders?: Record<string, string>;
}

/**
 * Abstract base class for WebSocket clients
 * Handles connection lifecycle, reconnection logic, and heartbeat mechanism
 */
export abstract class BaseWebSocketClient extends TypedEventEmitter<BaseEventMap> {
  protected ws: WebSocket | null = null;
  protected readonly options: InternalOptions;
  protected state: ConnectionState = 'disconnected';
  protected reconnectAttempts = 0;
  protected reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  protected heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  protected connectionTimer: ReturnType<typeof setTimeout> | null = null;
  protected isIntentionalClose = false;
  protected pendingSubscriptions: (() => void)[] = [];

  constructor(options: BaseClientOptions) {
    super();
    this.options = {
      url: options.url,
      autoReconnect: options.autoReconnect ?? DEFAULTS.autoReconnect,
      maxReconnectAttempts: options.maxReconnectAttempts ?? DEFAULTS.maxReconnectAttempts,
      reconnectDelay: options.reconnectDelay ?? DEFAULTS.reconnectDelay,
      maxReconnectDelay: options.maxReconnectDelay ?? DEFAULTS.maxReconnectDelay,
      heartbeatInterval: options.heartbeatInterval ?? DEFAULTS.heartbeatInterval,
      connectionTimeout: options.connectionTimeout ?? DEFAULTS.connectionTimeout,
      logger: options.logger ?? defaultLogger,
      proxyUrl: options.proxyUrl,
      proxyHeaders: options.proxyHeaders,
    };
  }

  /**
   * Current connection state
   */
  get connectionState(): ConnectionState {
    return this.state;
  }

  /**
   * Whether the client is currently connected
   */
  get isConnected(): boolean {
    return this.state === 'connected';
  }

  /**
   * Connect to the WebSocket server
   */
  async connect(): Promise<void> {
    if (this.state === 'connected' || this.state === 'connecting') {
      return;
    }

    this.isIntentionalClose = false;
    await this.createConnection();
  }

  /**
   * Disconnect from the WebSocket server
   */
  disconnect(): void {
    this.isIntentionalClose = true;
    this.cleanup();
    this.setState('disconnected');
  }

  /**
   * Send a message through the WebSocket
   */
  protected send(data: unknown): void {
    if (!this.ws || this.state !== 'connected') {
      throw new Error('WebSocket is not connected');
    }

    const message = typeof data === 'string' ? data : JSON.stringify(data);
    this.ws.send(message);
  }
  /**
   * Create the WebSocket connection
   */
  private async createConnection(): Promise<void> {
    this.setState('connecting');

    return new Promise((resolve, reject) => {
      try {
        const wsOptions: WebSocket.ClientOptions = {
          handshakeTimeout: this.options.connectionTimeout,
        };

        // prepare headers from options if any
        if ((this.options as any).headers) {
          wsOptions.headers = (this.options as any).headers;
        }

        // Proxy handling: create an agent compatible with https-proxy-agent common signatures.
        if (this.options.proxyUrl) {
          try {
            // https-proxy-agent accepts either a proxy URL string or an options object.
            // Prefer simple URL string to maximize compatibility.
            // If proxyHeaders provided, merge them into wsOptions.headers so they are sent during the WS handshake.
            if (this.options.proxyHeaders) {
              wsOptions.headers = Object.assign({}, wsOptions.headers || {}, this.options.proxyHeaders);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            wsOptions.agent = new HttpsProxyAgent(this.options.proxyUrl) as any;
          } catch (agentErr) {
            // agent construction failed — surface this error
            const err = agentErr instanceof Error ? agentErr : new Error(String(agentErr));
            this.handleError(err);
            reject(err);
            return;
          }
        }

        // Note: ws constructor signature: new WebSocket(address, [protocols], [options])
        const protocols = (this.options as any).subprotocols || undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.ws = protocols
          ? new WebSocket(this.options.url, protocols as any, wsOptions)
          : new WebSocket(this.options.url, wsOptions);

        // debug/logging to help diagnose handshake issues (do not expose sensitive headers)
        try {
          const debugInfo = {
            url: this.options.url,
            viaProxy: !!this.options.proxyUrl,
            hasAgent: !!wsOptions.agent,
            headerKeys: wsOptions.headers ? Object.keys(wsOptions.headers) : [],
            timeout: this.options.connectionTimeout,
          };
          this.emit('debug', debugInfo as unknown as Record<string, unknown>);
        } catch (_) {}

        let settled = false;

        this.ws.onopen = () => {
          if (settled) return;
          settled = true;
          this.clearConnectionTimeout();
          this.reconnectAttempts = 0;
          this.setState('connected');
          this.startHeartbeat();
          this.flushPendingSubscriptions();
          this.onConnected();
          this.emit('connected', undefined);
          resolve();
        };

        this.ws.onclose = (event: WebSocket.CloseEvent) => {
          // If not yet resolved/rejected, reject to avoid hanging connection promise
          if (!settled) {
            settled = true;
            const err = new Error(`WebSocket closed during connect (code=${event.code}, reason=${event.reason})`);
            this.clearConnectionTimeout();
            this.handleError(err);
            reject(err);
            // continue to normal close handling after reject
          } else {
            this.clearConnectionTimeout();
          }

          this.stopHeartbeat();
          this.emit('disconnected', {
            code: event.code,
            reason: event.reason,
            viaProxy: !!this.options.proxyUrl,
          });
          this.onDisconnected(event.code, event.reason);

          if (!this.isIntentionalClose && this.options.autoReconnect) {
            this.scheduleReconnect();
          } else {
            this.setState('disconnected');
          }
        };

        this.ws.onerror = (errEvent: unknown) => {
          // Provide as much detail as available
          const err =
            errEvent instanceof Error
              ? errEvent
              : errEvent && typeof errEvent === 'object' && 'message' in (errEvent as any)
              ? new Error((errEvent as any).message)
              : new Error('WebSocket error');

          // If connection phase still ongoing, reject promise so caller knows
          if (!settled) {
            settled = true;
            this.clearConnectionTimeout();
            try {
              // attempt to close socket if it's still there
              this.ws?.close();
            } catch (_) {}
            this.handleError(err);
            reject(err);
            return;
          }

          // Otherwise just emit and handle error
          this.handleError(err);
        };

        this.ws.onmessage = (event: WebSocket.MessageEvent) => {
          this.handleIncomingMessage(event.data as string);
        };

        // connection timeout: ensure we reject once timeout reached
        this.connectionTimer = setTimeout(() => {
          if (settled) return;
          settled = true;
          const error = new Error(`Connection timeout after ${this.options.connectionTimeout}ms`);
          this.handleError(error);
          try {
            this.ws?.terminate();
          } catch (_) {}
          reject(error);
        }, this.options.connectionTimeout);
      } catch (error) {
        this.clearConnectionTimeout();
        const err = error instanceof Error ? error : new Error(String(error));
        this.handleError(err);
        reject(err);
      }
    });
  }

  /**
   * Handle incoming messages
   */
  private handleIncomingMessage(data: string): void {
    this.emit('rawMessage', data);

    try {
      const parsed = JSON.parse(data);
      this.handleParsedMessage(parsed);
    } catch {
      this.handleParsedMessage(data);
    }
  }

  /**
   * Handle errors
   */
  private handleError(error: Error): void {
    this.emit('error', error);
    this.onError(error);
  }

  /**
   * Update connection state
   */
  private setState(newState: ConnectionState): void {
    if (this.state !== newState) {
      const previousState = this.state;
      this.state = newState;
      this.emit('stateChange', { state: newState, previousState });
    }
  }

  /**
   * Schedule a reconnection attempt
   */
  private scheduleReconnect(): void {
    if (this.reconnectAttempts >= this.options.maxReconnectAttempts) {
      this.setState('disconnected');
      this.handleError(new Error('Max reconnection attempts reached'));
      return;
    }

    this.setState('reconnecting');
    this.reconnectAttempts++;

    const delay = Math.min(
      this.options.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1) + Math.random() * 1000,
      this.options.maxReconnectDelay
    );

    this.emit('reconnecting', {
      attempt: this.reconnectAttempts,
      maxAttempts: this.options.maxReconnectAttempts,
    });

    this.reconnectTimer = setTimeout(async () => {
      try {
        await this.createConnection();
      } catch {
        // Error already handled in createConnection
      }
    }, delay);
  }

  /**
   * Start the heartbeat mechanism
   */
  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      if (this.state === 'connected') {
        this.sendHeartbeat();
      }
    }, this.options.heartbeatInterval);
  }

  /**
   * Stop the heartbeat mechanism
   */
  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  /**
   * Clear connection timeout
   */
  private clearConnectionTimeout(): void {
    if (this.connectionTimer) {
      clearTimeout(this.connectionTimer);
      this.connectionTimer = null;
    }
  }

  /**
   * Flush pending subscriptions after connection
   */
  private flushPendingSubscriptions(): void {
    const pending = this.pendingSubscriptions;
    this.pendingSubscriptions = [];
    for (const subscription of pending) {
      try {
        subscription();
      } catch (error) {
        this.handleError(error instanceof Error ? error : new Error(String(error)));
      }
    }
  }

  /**
   * Cleanup resources
   */
  private cleanup(): void {
    this.clearConnectionTimeout();
    this.stopHeartbeat();

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    if (this.ws) {
      this.ws.onopen = null;
      this.ws.onclose = null;
      this.ws.onerror = null;
      this.ws.onmessage = null;
      if (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) {
        this.ws.close(1000, 'Client disconnect');
      }
      this.ws = null;
    }

    this.pendingSubscriptions = [];
    this.reconnectAttempts = 0;
    this.onCleanup();
  }

  /**
   * Called during cleanup to allow subclasses to release resources
   */
  protected onCleanup(): void {}

  /**
   * Send heartbeat/ping message
   */
  protected sendHeartbeat(): void {
    try {
      this.send('PING');
    } catch {
      // Ignore send errors during heartbeat
    }
  }

  /**
   * Called when connection is established
   */
  protected onConnected(): void {}

  /**
   * Called when connection is closed
   */
  protected onDisconnected(_code: number, _reason: string): void {}

  /**
   * Called when a message is received
   */
  protected abstract handleParsedMessage(data: unknown): void;

  /**
   * Called when an error occurs
   */
  protected onError(_error: Error): void {}
}
