// core
import z from "zod";

// env
import { validateEnv } from "@/infrastructure/env/env-utils";

const serverEnvSchema = z
  .object({
    NODE_ENV: z.string(),
    SERVICE_NAME: z.string().default("portfolio"),
    PORTFOLIO_BACKEND_URL: z.url(),
    PORTFOLIO_BACKEND_API_KEY: z.string().min(1),
    REDIS_URL: z.string().min(1)
  })
  .readonly();

export type ServerEnv = z.infer<typeof serverEnvSchema>;
export const serverEnv = validateEnv(serverEnvSchema);
