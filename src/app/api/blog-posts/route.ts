import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/lib/db";
import { requireBlogApiKey } from "@/lib/blog-api-auth";

// Publishes a blog post with a secret key instead of an admin session — for scripts and
// automation that have no access to the production database (e.g. a cloud coding session).
//
//   POST /api/blog-posts
//   Authorization: Bearer <BLOG_API_KEY>
//   Content-Type: application/json
//   { "slug": "...", "title": "...", "content": "<p>…</p>", ... }   → 201 { id, slug, url }
//
// Create-only: an existing slug is refused with 409, never overwritten — edits go through
// /admin/blog. `content*` is HTML rendered as-is on the post page (same trust level as the
// admin editor), so the key must be treated like an admin password. The endpoint is disabled
// (404) until BLOG_API_KEY is set to a random value of at least 32 characters.
const optionalText = z.string().trim().default("");

const blogPostApiSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "lowercase letters, digits and hyphens only")
    .max(120),
  title: z.string().trim().min(1),
  titleEn: optionalText,
  titleEs: optionalText,
  excerpt: optionalText,
  excerptEn: optionalText,
  excerptEs: optionalText,
  content: z.string().min(1),
  contentEn: optionalText,
  contentEs: optionalText,
  // Any https host — the site's CSP img-src allows them (next.config.ts). Plain http is refused
  // because browsers block it as mixed content on an https page.
  image: z
    .union([
      z.literal(""),
      z
        .string()
        .url()
        // zod still runs refinements after .url() fails, so an unparseable value must not throw.
        .refine((value) => URL.canParse(value) && new URL(value).protocol === "https:", "must be an https URL"),
    ])
    .default(""),
  category: optionalText,
  author: z.string().trim().default("Globale Explore Tours"),
  featured: z.boolean().default(false),
  // Omitted → appended after the current last post, like the admin form's default.
  order: z.number().int().optional(),
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

  const parsed = blogPostApiSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid blog post", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  const { order, ...values } = parsed.data;

  if (await db.blogPost.findUnique({ where: { slug: values.slug }, select: { id: true } })) {
    return NextResponse.json({ error: `A post with slug "${values.slug}" already exists` }, { status: 409 });
  }

  const last = order === undefined
    ? await db.blogPost.findFirst({ orderBy: { order: "desc" }, select: { order: true } })
    : null;
  const post = await db.blogPost.create({
    data: { ...values, order: order ?? (last?.order ?? -1) + 1 },
  });

  // A post whose slug matches a topic of the editorial calendar (/admin/blog/planning) marks
  // that topic published. Best effort: the post is already saved, so a planning failure (e.g.
  // the BlogTopic table not created yet with `prisma db push`) must not turn this into an error
  // response that makes the caller retry a publish that succeeded.
  try {
    await db.blogTopic.updateMany({
      where: { slug: post.slug, status: { not: "published" } },
      data: { status: "published", publishedAt: new Date(), lastRunAt: new Date() },
    });
  } catch (err) {
    console.error("Could not mark the blog topic as published", err);
  }

  revalidatePath("/admin/blog");
  revalidatePath("/admin/blog/planning");
  revalidatePath("/[locale]/blog", "page");
  // A visit to this slug before it existed may have cached the 404.
  revalidatePath("/[locale]/blog/[slug]", "page");
  revalidatePath("/sitemap.xml");
  revalidatePath("/llms.txt");

  return NextResponse.json(
    { id: post.id, slug: post.slug, url: `https://www.globaleexploretours.com/fr/blog/${post.slug}` },
    { status: 201 }
  );
}
