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
    "egypte-trois-capitales-nil-privatif-10j",
    "egypte-nil-mer-rouge-hurghada-15j",
    "egypte-jordanie-combine-nil-petra-16j",
    "egypte-nil-oasis-fayoum-13j",
    "egypte-nil-lac-nasser-abou-simbel-11j",
    "egypte-caire-nil-dahabeya-9j",
    "egypte-odyssee-pharaons-11j",
    "egypte-secrets-nil-caire-assouan-16j",
  ],
  tanzanie: [
    "tanzanie-zanzibar-epices-ocean-10j",
    "tanzanie-saadani-safari-zanzibar-11j",
    "tanzanie-essentiel-safari-nord-8j",
    "tanzanie-escapade-terre-sauvage-10j",
    "tanzanie-couleurs-quatre-parcs-10j",
    "tanzanie-autrement-lac-natron-11j",
    "tanzanie-evasion-safari-zanzibar-11j",
  ],
  "afrique-du-sud": [
    "afrique-du-sud-safari-dream-kruger-eswatini-10j",
    "afrique-du-sud-le-cap-kruger-eswatini-13j",
    "afrique-du-sud-intimiste-petit-groupe-13j",
    "afrique-du-sud-drakensberg-lesotho-le-cap-15j",
    "afrique-du-sud-grand-tour-route-jardin-18j",
    "afrique-du-sud-le-cap-kruger-victoria-chobe-13j",
  ],
  namibie: [
    "namibie-decouverte-etosha-sossusvlei-12j",
    "namibie-couleurs-4x4-petit-groupe-14j",
    "namibie-victoria-chobe-caprivi-etosha-16j",
  ],
  senegal: [
    "senegal-authentique-slow-travel-9j",
    "senegal-decouverte-saint-louis-lompoul-9j",
    "senegal-visages-saloum-casamance-9j",
  ],
  tunisie: ["tunisie-mer-oasis-sahara-8j", "tunisie-saharienne-djerba-ksar-ghilane-8j"],
  botswana: ["botswana-okavango-moremi-chobe-12j"],
  rwanda: ["rwanda-gorilles-akagera-nyungwe-kivu-12j"],
  thailande: [
    "thailande-incontournables-bangkok-chiang-mai-10j",
    "thailande-bangkok-khao-lak-sejour-11j",
    "thailande-sud-khao-sok-krabi-koh-lanta-11j",
    "thailande-paradis-phuket-krabi-phi-phi-12j",
    "thailande-intimiste-kanchanaburi-chiang-mai-13j",
    "thailande-nord-sud-khao-sok-khao-lak-15j",
    "thailande-joyaux-sud-phang-nga-phi-phi-12j",
    "thailande-grand-tour-koh-lanta-krabi-17j",
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
