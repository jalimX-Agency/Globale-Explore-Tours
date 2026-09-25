export {};

// Publishes three trilingual SEO guides (content in scripts/lib/blogPostsSeoBatch1.ts):
//   - quand-partir-au-japon
//   - voyage-de-noces-ou-partir-selon-le-mois
//   - quelle-ile-grecque-choisir
// Idempotent: a post whose slug already exists is skipped. Hero images reuse photos already on
// the CDN, checked live before anything is written.
//   npx tsx scripts/seed-blog-seo-batch-1.ts

process.loadEnvFile(".env");

import { SEO_BLOG_POSTS_BATCH_1 } from "./lib/blogPostsSeoBatch1";

function addLocalePrefix(html: string, locale: string): string {
  return html
    .replace(/href="\/destinations\//g, `href="/${locale}/destinations/`)
    .replace(/href="\/experience-types\//g, `href="/${locale}/experience-types/`)
    .replace(/href="\/faire-une-demande"/g, `href="/${locale}/faire-une-demande"`);
}

async function main() {
  const { db } = await import("../src/lib/db");
  const R2 = process.env.NEXT_PUBLIC_R2_URL!;

  for (const post of SEO_BLOG_POSTS_BATCH_1) {
    const existing = await db.blogPost.findUnique({ where: { slug: post.slug } });
    if (existing) {
      console.log(`Skipped ${post.slug} — already exists.`);
      continue;
    }

    const imageUrl = `${R2}/${post.heroPath}`;
    const res = await fetch(imageUrl, { method: "HEAD" }).catch(() => null);
    if (!res || !res.ok) throw new Error(`Hero image not live: ${imageUrl}`);

    const maxOrder = await db.blogPost.findFirst({ orderBy: { order: "desc" }, select: { order: true } });

    await db.blogPost.create({
      data: {
        slug: post.slug,
        category: post.category,
        author: "Globale Explore Tours",
        image: imageUrl,
        featured: false,
        order: (maxOrder?.order ?? -1) + 1,
        title: post.title,
        titleEn: post.titleEn,
        titleEs: post.titleEs,
        excerpt: post.excerpt,
        excerptEn: post.excerptEn,
        excerptEs: post.excerptEs,
        content: addLocalePrefix(post.content, "fr"),
        contentEn: addLocalePrefix(post.contentEn, "en"),
        contentEs: addLocalePrefix(post.contentEs, "es"),
      },
    });
    console.log(`Created ${post.slug}`);
  }

  await db.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
