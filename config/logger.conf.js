import pino from "pino";
import { env } from "./env.conf.js";

const isDev = env.NODE_ENV !== "production";

const logger = pino({
  level: env.LOG_LEVEL || "info",

  transport: isDev
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        },
      }
    : undefined,

  base: {
    service: "online-compiler-api",
  },

  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
