import "server-only";

import { serverEnv } from "@/infrastructure/env/server-env";
import { createClient, type RedisClientType } from "redis";

type CacheSetOptions = {
  ttlSeconds?: number;
};

type Cache = {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T, options?: CacheSetOptions): Promise<void>;
  del(key: string): Promise<void>;
};

export class RedisCache implements Cache {
  private static instance: RedisCache | null = null;
  private readonly client: RedisClientType;
  private connectPromise: Promise<any> | null = null;

  private constructor() {
    this.client = createClient({
      url: serverEnv.REDIS_URL
    });

    this.client.on("error", (error) => {
      console.error("Redis Client Error:", error);
    });
  }

  static getInstance(): RedisCache {
    if (!RedisCache.instance) {
      RedisCache.instance = new RedisCache();
    }
    return RedisCache.instance;
  }

  private async ensureConnected(): Promise<void> {
    if (this.client.isOpen) return;
    if (this.connectPromise) {
      await this.connectPromise;
      return;
    }
    this.connectPromise = this.client.connect();
    try {
      await this.connectPromise;
    } finally {
      this.connectPromise = null;
    }
  }

  async get<T>(key: string): Promise<T | null> {
    await this.ensureConnected();

    const value = await this.client.get(key);
    return value ? (JSON.parse(value) as T) : null;
  }

  async set<T>(key: string, value: T, options?: CacheSetOptions): Promise<void> {
    await this.ensureConnected();

    const serialized = JSON.stringify(value);

    if (options?.ttlSeconds) {
      await this.client.set(key, serialized, {
        EX: options.ttlSeconds
      });
    } else {
      await this.client.set(key, serialized);
    }
  }

  async del(key: string): Promise<void> {
    await this.ensureConnected();
    await this.client.del(key);
  }
}
