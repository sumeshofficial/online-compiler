import express from "express";
import cors from "cors";
import { env } from "./config/env.conf.js";
import logger from "./config/logger.conf.js";
import executeRoutes from "./routes/execute.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

const PORT = env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use("/api/v1/execute", executeRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
