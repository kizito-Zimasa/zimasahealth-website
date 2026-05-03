// lib/rate-limit.ts
// Upstash Redis rate limiting utility

import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function rateLimit(
  identifier: string,
  action: string,
  limit: number,
  window: number // in seconds
): Promise<{ success: boolean; remaining: number }> {
  const key = `rate-limit:${action}:${identifier}`;

  try {
    const current = await redis.incr(key);

    // Set expiry on first request
    if (current === 1) {
      await redis.expire(key, window);
    }

    return {
      success: current <= limit,
      remaining: Math.max(0, limit - current),
    };
  } catch (error) {
    // If Redis is unavailable, fail open (allow request) but log error
    console.error('[rate-limit] Redis error:', error);
    return { success: true, remaining: limit };
  }
}
