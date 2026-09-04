export {};

// Fixes a bug in the just-created "croisiere-petit-navire-guide" blog post: its internal
// links were written without a locale prefix (e.g. href="/destinations/..." instead of
// href="/fr/destinations/..."), so every reader — regardless of which language version they
// were reading — got redirected to the French site on click. Re-writes content/contentEn/
// contentEs with the correct /fr, /en, /es prefixes respectively.
//   npx tsx scripts/fix-blog-croisieres-links.ts

process.loadEnvFile(".env");

function addLocalePrefix(html: string, locale: string): string {
  return html
    .replace(/href="\/destinations\//g, `href="/${locale}/destinations/`)
    .replace(/href="\/experience-types\//g, `href="/${locale}/experience-types/`)
    .replace(/href="\/faire-une-demande"/g, `href="/${locale}/faire-une-demande"`);
}

async function main() {
  const { db } = await import("../src/lib/db");

  const slug = "croisiere-petit-navire-guide";
  const post = await db.blogPost.findUnique({ where: { slug } });
  if (!post) throw new Error(`Blog post not found: ${slug}`);

  const content = addLocalePrefix(post.content, "fr");
  const contentEn = addLocalePrefix(post.contentEn, "en");
  const contentEs = addLocalePrefix(post.contentEs, "es");

  await db.blogPost.update({ where: { slug }, data: { content, contentEn, contentEs } });
  console.log("Fixed locale-prefixed internal links for all 3 language versions.");
  await db.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
