import { error_codes, error_msgs } from "./constants.js";
import { status_codes } from "./statusCode.js";

export class AppError extends Error {
  constructor(
    status = status_codes.serverError,
    code = error_codes.serverError,
    message = error_msgs.serverError
  ) {
    super(message);
    this.status = status;
    this.code = code;
    this.isOperational = true;
  }
}

export const sendResponse = (res, data, statusCode = status_codes.ok) => {
  res.status(statusCode).json(data);
};

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
