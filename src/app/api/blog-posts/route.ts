import { createHash, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/lib/db";

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
const MIN_KEY_LENGTH = 32;

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

// Hashing both sides first gives equal-length buffers, so timingSafeEqual never throws and
// the comparison time doesn't depend on how much of the key was guessed right.
function keyMatches(provided: string, expected: string): boolean {
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
  const expected = process.env.BLOG_API_KEY ?? "";
  if (expected.length < MIN_KEY_LENGTH) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const provided = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!provided || !keyMatches(provided, expected)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  revalidatePath("/admin/blog");
  revalidatePath("/[locale]/blog", "page");
  revalidatePath("/sitemap.xml");
  revalidatePath("/llms.txt");

  return NextResponse.json(
    { id: post.id, slug: post.slug, url: `https://www.globaleexploretours.com/fr/blog/${post.slug}` },
    { status: 201 }
  );
}
