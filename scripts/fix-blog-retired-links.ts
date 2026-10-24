// Rewrites blog links that still point at retired trips so they go straight to the supplier
// circuit that replaced them (the old URLs only reach it through a 308 redirect). Backs up every
// post it changes to docs/voyamar/backup/ first. Safe to re-run: a second run finds nothing.
//   npx tsx scripts/fix-blog-retired-links.ts [--dry]

process.loadEnvFile(".env");

async function main() {
  const { PrismaClient } = await import("@prisma/client");
  const { RETIRED_TRIPS } = await import("../src/lib/retiredTrips");
  const { mkdirSync, writeFileSync } = await import("node:fs");
  const dry = process.argv.includes("--dry");
  const db = new PrismaClient();
  try {
    const posts = await db.blogPost.findMany({ select: { id: true, slug: true, content: true, contentEn: true, contentEs: true } });
    const rewrite = (html: string) => {
      let count = 0;
      const out = html.replace(/(\/destinations\/[a-z-]+\/[a-z-]+\/)([a-z0-9-]+)(?=["/?#])/g, (match, prefix: string, slug: string) => {
        const retired = RETIRED_TRIPS.find((r) => r.from === slug && prefix === `/destinations/${r.region}/${r.country}/`);
        if (!retired) return match;
        count++;
        return prefix + retired.to;
      });
      return { out, count };
    };

    const backupDir = "docs/voyamar/backup";
    mkdirSync(backupDir, { recursive: true });
    let total = 0;
    for (const post of posts) {
      const fr = rewrite(post.content);
      const en = rewrite(post.contentEn);
      const es = rewrite(post.contentEs);
      const n = fr.count + en.count + es.count;
      if (!n) continue;
      total += n;
      console.log(`${post.slug}: ${n} link(s)`);
      if (dry) continue;
      writeFileSync(`${backupDir}/blog-${post.slug}.json`, JSON.stringify(post, null, 1));
      await db.blogPost.update({ where: { id: post.id }, data: { content: fr.out, contentEn: en.out, contentEs: es.out } });
    }
    console.log(`${dry ? "Would rewrite" : "Rewrote"} ${total} link(s)`);
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
