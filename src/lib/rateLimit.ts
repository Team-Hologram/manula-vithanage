interface RateLimitEntry {
    count: number;
    resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

export function rateLimit(identifier: string): { success: boolean; remaining: number } {
    const now = Date.now();
    const entry = store.get(identifier);

    // Clean up expired entries periodically
    if (store.size > 1000) {
        for (const [key, val] of store.entries()) {
            if (val.resetAt < now) store.delete(key);
        }
    }

    if (!entry || entry.resetAt < now) {
        store.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
        return { success: true, remaining: MAX_REQUESTS - 1 };
    }

    if (entry.count >= MAX_REQUESTS) {
        return { success: false, remaining: 0 };
    }

    entry.count++;
    return { success: true, remaining: MAX_REQUESTS - entry.count };
}
