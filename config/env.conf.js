import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

/**
 * Environment Variable Schema
 */
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  PORT: z
    .string()
    .transform((val) => Number(val))
    .default("5000"),

  CLIENT_URL: z.string().pipe(z.url("Invalid CLIENT_URL")),

  LOG_LEVEL: z.string().min(1),
});

/**
 * Parse & Validate ENV
 */
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment variables:");
  const tree = z.treeifyError(parsed.error);
  console.dir(tree, { depth: null });
  process.exit(1);
}

export const env = parsed.data;
