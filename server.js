import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { env } from "./config/env.conf.js";
import logger from "./config/logger.conf.js";
import executeRoutes from './routes/execute.routes.js'
dotenv.config();

const app = express();

const PORT = env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: env.CLIENT_URL,
  })
);

app.use('/api/v1/execute', executeRoutes);

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
