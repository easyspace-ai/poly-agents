import fs from 'node:fs';
import path from 'node:path';
import pino from 'pino';
import pretty from 'pino-pretty';
import { config } from './config';

const isDev = config.NODE_ENV !== 'production';

function resolveLogDestination(): pino.DestinationStream {
  const logFileRaw = process.env.POLY_LOG_FILE?.trim();
  const logFile = logFileRaw ? path.resolve(logFileRaw) : null;

  const consoleStream: NodeJS.WritableStream = isDev
    ? pretty({
        colorize: true,
        translateTime: 'HH:MM:ss.l',
        ignore: 'pid,hostname',
        messageFormat: '[{module}] {msg}',
      })
    : process.stdout;

  if (!logFile) {
    return consoleStream as pino.DestinationStream;
  }

  try {
    fs.mkdirSync(path.dirname(logFile), { recursive: true });
  } catch {
    // best-effort; pino.destination with mkdir may still succeed
  }

  const fileDest = pino.destination({ dest: logFile, sync: false, mkdir: true });

  return pino.multistream(
    [
      { level: config.LOG_LEVEL, stream: consoleStream },
      { level: config.LOG_LEVEL, stream: fileDest },
    ],
    { dedupe: false },
  ) as pino.DestinationStream;
}

const stream = resolveLogDestination();

const root = pino(
  {
    level: config.LOG_LEVEL,
    base: undefined,
    redact: {
      paths: [
        '*.privateKey',
        '*.apiKey',
        '*.secret',
        '*.passphrase',
        '*.token',
        'privateKey',
        'apiKey',
        'secret',
        'passphrase',
        'token',
      ],
      censor: '[REDACTED]',
    },
  },
  stream,
);

const logFileForBoot = process.env.POLY_LOG_FILE?.trim();
if (logFileForBoot) {
  root.info({ polyLogFile: path.resolve(logFileForBoot) }, 'poly file logging enabled');
}

export const logger = root;
export const createLogger = (module: string): pino.Logger => root.child({ module });
