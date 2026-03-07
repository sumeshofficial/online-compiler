import { runners } from "../runners/index.js";
import { error_codes, error_msgs } from "../utils/constants.js";
import { deleteFile } from "../utils/deleteFile.js";
import { generateFile } from "../utils/generateFile.js";
import { AppError, asyncHandler, sendResponse } from "../utils/helper.js";
import { status_codes } from "../utils/statusCode.js";

export const executeCode = asyncHandler(async (req, res) => {
  const { code, language } = req.body;

  if (!language || !code) {
    return new AppError(
      status_codes.badRequest,
      error_codes.allFieldsAreRequired,
      error_msgs.langAndCodeRequired
    );
  }

  const runner = runners[language];

  if (!runner) {
    return new AppError(
      status_codes.badRequest,
      error_codes.unsupportedLang,
      error_msgs.unsupportedLang
    );
  }

  const fileName = generateFile(language, code);

  const output = await runner(fileName);

  deleteFile(fileName);

  sendResponse(res, output, status_codes.ok);
});
