// Puts supplier circuits first everywhere trips are listed. Every list on the site sorts by
// `featured` desc then `order` asc, so supplier circuits get featured=true with a negative
// order, and the older trips of the same destination lose `featured` (their own order is kept,
// so they stay in their previous sequence, just after the supplier circuits).
// Add a destination's slugs here when its circuits are published, then run:
//   npx tsx scripts/voyamar-priority.ts
// Safe to re-run.

process.loadEnvFile(".env");

// destination slug -> supplier circuit slugs, in display order
const PRIORITY: Record<string, string[]> = {
  maroc: [
    "maroc-circuit-villes-imperiales-8j",
    "maroc-grand-sud-kasbahs-8j",
    "maroc-desert-riad-kasbah-5j",
    "maroc-fes-chefchaouen-5j",
  ],
  kenya: [
    "kenya-essentiel-amboseli-tsavo-mombasa-8j",
    "kenya-evasion-masai-mara-amboseli-10j",
    "kenya-decouvertes-masai-mara-mombasa-12j",
    "kenya-autrement-samburu-masai-mara-14j",
    "kenya-mombasa-tsavo-plage-safari-10j",
    "kenya-train-savanes-plages-9j",
    "kenya-tanzanie-combine-safari-12j",
  ],
  egypte: [
    "egypte-croisiere-fil-du-nil-8j",
    "egypte-incontournables-nil-8j",
    "egypte-croisiere-nil-pharaonique-8j",
    "egypte-le-caire-pyramides-4j",
    "egypte-dahabeya-nil-8j",
    "egypte-paysages-nil-caire-9j",
    "egypte-decouvertes-caire-nil-9j",
    "egypte-splendeurs-caire-nil-12j",
  ],
};

async function main() {
  const { PrismaClient } = await import("@prisma/client");
  const db = new PrismaClient();
  try {
    let base = -100000;
    for (const [destinationSlug, slugs] of Object.entries(PRIORITY)) {
      const destination = await db.destination.findUnique({ where: { slug: destinationSlug }, select: { id: true } });
      if (!destination) throw new Error(`Unknown destination: ${destinationSlug}`);
      const found = await db.tour.findMany({ where: { slug: { in: slugs } }, select: { slug: true } });
      const missing = slugs.filter((s) => !found.some((f) => f.slug === s));
      if (missing.length) throw new Error(`Unknown tour slug(s) for ${destinationSlug}: ${missing.join(", ")}`);

      for (const [i, slug] of slugs.entries()) {
        await db.tour.update({ where: { slug }, data: { featured: true, order: base + i } });
      }
      const demoted = await db.tour.updateMany({
        where: { destinationId: destination.id, slug: { notIn: slugs }, featured: true },
        data: { featured: false },
      });
      console.log(`${destinationSlug}: ${slugs.length} supplier circuit(s) first, ${demoted.count} older trip(s) un-featured`);
      base += 1000;
    }
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
