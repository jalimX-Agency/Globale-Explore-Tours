import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireBlogApiKey } from "@/lib/blog-api-auth";

// POST /api/blog-topics/report — the publishing routine's run report for one topic, shown in
// /admin/blog/planning: what was published (links, sources, word counts) or why it failed.
//   { "slug": "...", "status": "published" | "failed" | "skipped", "report": "..." }
const reportSchema = z.object({
  slug: z.string().min(1).max(120),
  status: z.enum(["published", "failed", "skipped"]),
  report: z.string().max(10000).default(""),
});

export async function POST(request: NextRequest) {
  const denied = requireBlogApiKey(request);
  if (denied) return denied;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Body must be JSON" }, { status: 400 });
  }
  const parsed = reportSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid report", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  const { slug, status, report } = parsed.data;

  const topic = await db.blogTopic.findUnique({ where: { slug } });
  if (!topic) return NextResponse.json({ error: `No topic with slug "${slug}"` }, { status: 404 });

  const now = new Date();
  await db.blogTopic.update({
    where: { slug },
    data: {
      status,
      lastReport: report,
      lastRunAt: now,
      ...(status === "published" ? { publishedAt: topic.publishedAt ?? now } : {}),
    },
  });
  revalidatePath("/admin/blog/planning");
  return NextResponse.json({ ok: true });
}
