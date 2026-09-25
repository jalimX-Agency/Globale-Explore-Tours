import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireBlogApiKey } from "@/lib/blog-api-auth";

// GET /api/blog-topics/next — the next topic the daily publishing routine should write: the
// first `planned` topic in calendar order. A planned topic whose slug is already a published
// post (e.g. created by hand in /admin/blog) is marked published on the way and skipped.
// 404 when the calendar has nothing left to write.
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const denied = requireBlogApiKey(request);
  if (denied) return denied;

  const planned = await db.blogTopic.findMany({
    where: { status: "planned" },
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
  });
  const existing = new Set(
    (await db.blogPost.findMany({ where: { slug: { in: planned.map((t) => t.slug) } }, select: { slug: true } })).map(
      (p) => p.slug
    )
  );

  for (const topic of planned) {
    if (existing.has(topic.slug)) {
      await db.blogTopic.update({ where: { id: topic.id }, data: { status: "published", publishedAt: topic.publishedAt ?? new Date() } });
      continue;
    }
    return NextResponse.json({
      slug: topic.slug,
      title: topic.title,
      notes: topic.notes,
      remaining: planned.filter((t) => !existing.has(t.slug)).length,
    });
  }

  return NextResponse.json({ error: "No planned topic left" }, { status: 404 });
}
