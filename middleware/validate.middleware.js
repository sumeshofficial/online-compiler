import { error_codes } from "../utils/constants.js";
import { AppError } from "../utils/helper.js";
import { status_codes } from "../utils/statusCode.js";

export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));

    throw new AppError(
      status_codes.badRequest,
      error_codes.validationError,
      errors[0]?.message
    );
  }

  req.body = result.data;
  next();
};
