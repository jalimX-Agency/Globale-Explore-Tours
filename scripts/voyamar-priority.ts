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
  indonesie: [
    "indonesie-bali-ubud-plage-sejour-12j",
    "indonesie-bali-roue-libre-chauffeur-11j",
    "indonesie-instant-balinais-prive-11j",
    "indonesie-bali-passion-12j",
    "indonesie-bali-ubud-gili-sejour-14j",
    "indonesie-bali-autre-angle-prive-14j",
    "indonesie-trio-iles-bali-nusa-penida-lembongan-11j",
    "indonesie-boheme-balinaise-gili-15j",
    "indonesie-bali-authentique-14j",
    "indonesie-reverie-balinaise-chauffeur-16j",
    "indonesie-esprit-balinais-prive-15j",
    "indonesie-perles-bali-java-bromo-13j",
    "indonesie-bali-java-celebes-toraja-17j",
    "indonesie-evasion-privilege-bali-12j",
  ],
  cambodge: [
    "cambodge-magie-angkor-battambang-kampot-14j",
    "cambodge-intimiste-angkor-koh-sdach-14j",
    "cambodge-indispensable-prive-11j",
    "cambodge-thailande-angkor-chiang-mai-13j",
    "cambodge-laos-luang-prabang-angkor-12j",
    "cambodge-immersion-mondulkiri-ratanakiri-17j",
  ],
  "sri-lanka": [
    "sri-lanka-incontournables-sigiriya-kandy-galle-10j",
    "sri-lanka-grand-tour-anuradhapura-udawalawe-12j",
    "sri-lanka-magie-haputale-yala-12j",
    "sri-lanka-experiences-knuckles-gal-oya-13j",
    "sri-lanka-merveille-ceylan-prive-11j",
    "sri-lanka-aventure-trincomalee-mirissa-prive-12j",
    "sri-lanka-grand-tour-jaffna-prive-14j",
    "sri-lanka-sigiriya-kandy-plage-beruwala-10j",
    "sri-lanka-grand-tour-maldives-15j",
  ],
  vietnam: [
    "vietnam-incontournables-halong-hoi-an-mekong-12j",
    "vietnam-magie-halong-hue-delta-mekong-15j",
    "vietnam-intimiste-pu-luong-lan-ha-17j",
    "vietnam-cambodge-incontournables-angkor-15j",
  ],
  malaisie: [
    "malaisie-joyaux-malacca-ipoh-penang-10j",
    "malaisie-a-la-folie-taman-negara-cameron-penang-prive-10j",
    "malaisie-sur-la-route-autotour-malacca-penang-10j",
    "malaisie-trio-malacca-kuala-lumpur-langkawi-prive-10j",
    "malaisie-passion-taman-negara-tioman-prive-10j",
    "malaisie-kuala-lumpur-langkawi-rebak-10j",
    "malaisie-kuala-lumpur-perhentian-10j",
  ],
  chine: [
    "chine-joyaux-pekin-pingyao-xian-shanghai-12j",
    "chine-incontournables-shaolin-suzhou-13j",
    "chine-passion-pekin-guilin-hong-kong-15j",
    "chine-essentiels-pekin-xian-shanghai-prive-14j",
    "chine-tresors-du-yunnan-13j",
    "chine-hong-kong-guilin-pekin-15j",
    "chine-pays-des-pandas-chengdu-prive-16j",
    "chine-millenaire-croisiere-yangtze-17j",
  ],
  japon: [
    "japon-incontournables-himeji-kyoto-fuji-tokyo-12j",
    "japon-trio-tokyo-hakone-kyoto-liberte-12j",
    "japon-megalopoles-tokyo-kyoto-koya-hiroshima-liberte-14j",
    "japon-magie-hiroshima-koya-takayama-fuji-14j",
    "japon-beaute-tokyo-osaka-hiroshima-kyoto-liberte-16j",
    "japon-famille-tokyo-kyoto-universal-liberte-16j",
    "japon-esprit-shikoku-naoshima-kyoto-liberte-16j",
    "japon-instant-manga-okayama-miyajima-liberte-17j",
    "japon-panorama-fukuoka-okinawa-liberte-21j",
    "japon-autre-angle-kinosaki-matsue-tsuwano-liberte-21j",
    "japon-merveilles-du-nord-hokkaido-tohoku-18j",
  ],
  "coree-du-sud": [
    "coree-du-sud-pays-du-matin-calme-12j",
    "coree-du-sud-panorama-liberte-seoul-busan-12j",
    "coree-du-sud-japon-passion-liberte-15j",
  ],
  mongolie: [
    "mongolie-pays-des-nomades-gobi-orkhon-15j",
  ],
  laos: [
    "laos-passion-luang-prabang-vang-vieng-10j",
    "laos-experience-nong-khiaw-nam-ou-prive-13j",
    "laos-grand-tour-indochine-cambodge-vietnam-21j",
  ],
  philippines: [
    "philippines-manille-boracay-11j",
    "philippines-ile-en-ile-bohol-dumaguete-siquijor-14j",
    "philippines-bohol-chocolate-hills-prive-11j",
    "philippines-beaute-visayas-siquijor-bohol-12j",
    "philippines-passion-palawan-coron-el-nido-11j",
  ],
  ouzbekistan: [
    "ouzbekistan-intimiste-khiva-boukhara-samarcande-12j",
  ],
  inde: [
    "inde-magie-du-rajasthan-12j",
    "inde-joyaux-inde-du-sud-tamil-nadu-kerala-11j",
    "inde-rajasthan-intimiste-thar-bundi-ranthambore-15j",
    "inde-merveilles-du-kerala-munnar-backwaters-14j",
    "inde-beaute-du-ladakh-prive-14j",
  ],
  reunion: [
    "reunion-joyau-ocean-indien-cirques-volcan-10j",
    "reunion-autotour-volcans-lagons-11j",
  ],
  maldives: [
    "maldives-sri-lanka-incontournables-adaaran-13j",
  ],
  jordanie: [
    "jordanie-incontournables-chateaux-petra-wadi-rum-8j",
    "jordanie-entre-nous-salt-petra-mer-morte-8j",
    "jordanie-express-petra-wadi-rum-5j",
    "jordanie-circuit-et-sejour-mer-morte-ou-aqaba-10j",
    "jordanie-intimiste-petra-wadi-rum-aqaba-8j",
    "jordanie-etoile-aqaba-petra-wadi-rum-privatif-8j",
    "jordanie-legendes-privatif-petra-mer-morte-8j",
    "jordanie-magnifique-privatif-5-etoiles-10j",
  ],
  "emirats-arabes-unis": [
    "emirats-arabes-unis-dubai-abu-dhabi-al-ain-musandam-7j",
    "emirats-arabes-unis-il-etait-une-fois-6j",
    "emirats-arabes-unis-oman-entre-mers-et-deserts-12j",
  ],
  israel: [
    "israel-super-bleu-tel-aviv-massada-jerusalem-galilee-8j",
    "israel-escapade-autour-de-jerusalem-8j",
  ],
  oman: [
    "oman-decouverte-mascate-nizwa-wahiba-sur-8j",
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
