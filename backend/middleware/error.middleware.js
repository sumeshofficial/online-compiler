import logger from "../config/logger.conf.js";
import { error_codes, error_msgs } from "../utils/constants.js";
import { status_codes } from "../utils/statusCode.js";

export const errorHandler = (err, req, res, _next) => {
  logger.error(err);
  const statusCode = err.status || status_codes.serverError;
  const code = err.code || error_codes.serverError;
  const message = err.message || error_msgs.serverError;
  res.status(statusCode).json({ error: { code, message } });
};
