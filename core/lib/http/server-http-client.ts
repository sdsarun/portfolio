import "server-only";

import { serverEnv } from "@/core/configs/env/server-env";
import { createHttpClient } from "@/core/lib/http/http-client";

export const portfolioApi = createHttpClient({
  baseUrl: serverEnv.PORTFOLIO_BACKEND_URL,
  defaultHeaders: {
    "x-api-key": serverEnv.PORTFOLIO_BACKEND_API_KEY
  }
});
