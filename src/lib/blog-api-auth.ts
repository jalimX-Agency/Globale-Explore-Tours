import { createHash, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

// Shared Bearer-key check for the automation endpoints (/api/blog-posts, /api/blog-topics/*).
// They stay disabled (404) until BLOG_API_KEY is set to a random value of at least 32
// characters; the key grants the same power as an admin session over blog content.
const MIN_KEY_LENGTH = 32;

// Hashing both sides first gives equal-length buffers, so timingSafeEqual never throws and the
// comparison time doesn't depend on how much of the key was guessed right.
function keyMatches(provided: string, expected: string): boolean {
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

/** Returns an error response to send as-is, or null when the request carries the right key. */
export function requireBlogApiKey(request: NextRequest): NextResponse | null {
  const expected = process.env.BLOG_API_KEY ?? "";
  if (expected.length < MIN_KEY_LENGTH) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const provided = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!provided || !keyMatches(provided, expected)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
