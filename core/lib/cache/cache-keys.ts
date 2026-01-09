import "server-only";
import { serverEnv } from "@/core/configs/env/server-env";

const NAMESPACE = serverEnv.SERVICE_NAME;
const ENV = serverEnv.NODE_ENV;

function key(...parts: string[]) {
  return [NAMESPACE, ENV, ...parts].join(":");
}

export const CacheKeys = {
  profile: {
    all: () => key("profile", "all")
  }
} as const;
