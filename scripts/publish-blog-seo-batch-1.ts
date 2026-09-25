export {};

// Publishes the three SEO guides from scripts/lib/blogPostsSeoBatch1.ts through the site's
// /api/blog-posts endpoint — no database credentials needed, only the API key. Posts that
// already exist come back 409 and are skipped, so re-running is safe.
//   BLOG_API_KEY=... npx tsx scripts/publish-blog-seo-batch-1.ts
// Optional: BLOG_API_URL (default https://www.globaleexploretours.com, e.g. a Vercel preview
// URL to try it first) and NEXT_PUBLIC_R2_URL (default https://cdn.globaleexploretours.com).

import { SEO_BLOG_POSTS_BATCH_1 } from "./lib/blogPostsSeoBatch1";
import { addLocalePrefix } from "./lib/blogLinks";

try {
  process.loadEnvFile(".env");
} catch {
  // No .env — everything this script needs can come from the environment instead.
}

async function main() {
  const key = process.env.BLOG_API_KEY;
  if (!key) throw new Error("BLOG_API_KEY is not set.");
  const baseUrl = (process.env.BLOG_API_URL ?? "https://www.globaleexploretours.com").replace(/\/$/, "");
  const cdn = (process.env.NEXT_PUBLIC_R2_URL ?? "https://cdn.globaleexploretours.com").replace(/\/$/, "");

  for (const post of SEO_BLOG_POSTS_BATCH_1) {
    const res = await fetch(`${baseUrl}/api/blog-posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: post.slug,
        category: post.category,
        image: `${cdn}/${post.heroPath}`,
        title: post.title,
        titleEn: post.titleEn,
        titleEs: post.titleEs,
        excerpt: post.excerpt,
        excerptEn: post.excerptEn,
        excerptEs: post.excerptEs,
        content: addLocalePrefix(post.content, "fr"),
        contentEn: addLocalePrefix(post.contentEn, "en"),
        contentEs: addLocalePrefix(post.contentEs, "es"),
      }),
    });

    if (res.status === 201) {
      const { url } = (await res.json()) as { url: string };
      console.log(`Published ${post.slug} → ${url}`);
    } else if (res.status === 409) {
      console.log(`Skipped ${post.slug} — already published.`);
    } else {
      throw new Error(`${post.slug}: HTTP ${res.status} ${await res.text()}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
