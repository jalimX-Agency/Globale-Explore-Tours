import { NextRequest, NextResponse } from "next/server";
import { requireBlogApiKey } from "@/lib/blog-api-auth";
import { revalidateAllPages } from "@/lib/revalidateSite";

// Refreshes every cached public page after content was changed outside the admin (seed
// scripts, direct database edits). Public pages are cached for 7 days, so without this such a
// change would only show up after the next deploy.
//
//   POST /api/revalidate   Authorization: Bearer <BLOG_API_KEY>   → 200 { ok: true }
export async function POST(request: NextRequest) {
  const denied = requireBlogApiKey(request);
  if (denied) return denied;
  revalidateAllPages();
  return NextResponse.json({ ok: true });
}
