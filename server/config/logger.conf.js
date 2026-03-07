import pino from "pino";
import { env } from "./env.conf.js";
import path from "path";
import fs from "fs";

const isDev = env.NODE_ENV !== "production";

const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const combinedLog = pino.destination({
  dest: path.join(logDir, "combined.log"),
  sync: false,
});

const errorLog = pino.destination({
  dest: path.join(logDir, "error.log"),
  sync: false,
});

const streams = [{ stream: combinedLog }, { level: "error", stream: errorLog }];

if (isDev) {
  streams.push({
    stream: pino.transport({
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    }),
  });
}

const logger = pino(
  {
    level: env.LOG_LEVEL || "info",
    base: {
      service: "online-compiler-api",
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  pino.multistream(streams)
);

export default logger;
