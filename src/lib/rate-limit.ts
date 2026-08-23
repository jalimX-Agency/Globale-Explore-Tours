import { headers } from "next/headers";
import { db } from "@/lib/db";

// Sliding-window rate limit backed by Postgres (RateLimitHit) — no external service needed
// at this scale. Expired rows for the window being checked are pruned on the same call, so
// the table stays small without a separate cleanup job.
export async function checkRateLimit(action: string, limit: number, windowMs: number): Promise<boolean> {
  const ip = await getClientIp();
  const key = `${action}:${ip}`;
  const windowStart = new Date(Date.now() - windowMs);

  await db.rateLimitHit.deleteMany({ where: { key, createdAt: { lt: windowStart } } });

  const count = await db.rateLimitHit.count({ where: { key, createdAt: { gte: windowStart } } });
  if (count >= limit) return false;

  await db.rateLimitHit.create({ data: { key } });
  return true;
}

async function getClientIp(): Promise<string> {
  const hdrs = await headers();
  const forwardedFor = hdrs.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return hdrs.get("x-real-ip") ?? "unknown";
}
