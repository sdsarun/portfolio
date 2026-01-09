import "server-only";

// env
import { serverEnv } from "@/infrastructure/env/server-env";

// http
import { createHttpClient } from "@/infrastructure/http/http-client";

export const portfolioApi = createHttpClient({
  baseUrl: serverEnv.PORTFOLIO_BACKEND_URL,
  defaultHeaders: {
    "x-api-key": serverEnv.PORTFOLIO_BACKEND_API_KEY
  }
});
