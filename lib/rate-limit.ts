import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const isUpstash = (process.env.UPSTASH_REDIS_REST_URL || '').startsWith('https://');

export const redis = isUpstash
  ? new Redis({ url: process.env.UPSTASH_REDIS_REST_URL || '', token: process.env.UPSTASH_REDIS_REST_TOKEN || '', automaticDeserialization: true })
  : null;

const noopLimiter = {
  limit: async (_identifier: string) => ({ success: true, limit: 999, reset: Date.now() + 60000, remaining: 999 }),
};

export const rateLimiter = isUpstash
  ? new Ratelimit({ redis: redis as Redis, limiter: Ratelimit.slidingWindow(5, '60 s'), analytics: true, prefix: '@upstash/ratelimit' })
  : noopLimiter;
