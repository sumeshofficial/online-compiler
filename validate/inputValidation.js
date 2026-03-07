import { z } from "zod";

export const LanguageEnum = z.enum(["cpp", "python", "javascript"]);

export const executeCodeSchema = z.object({
  code: z
    .string()
    .min(1, "Code cannot be empty")
    .max(100000, "Code is too large"),

  language: LanguageEnum,
});
