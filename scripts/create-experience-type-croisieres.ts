export {};

// Creates the /experience-types/croisieres landing page — a new top-level "what" kind
// ExperienceType filtered by Tour.theme = "cruise". The page auto-pulls any tour tagged with
// that theme (see scripts/seed-trips-croisieres.ts), and it auto-appears in the nav mega-menu
// (NavigationServer.tsx queries all top-level ExperienceType rows).
//   npx tsx scripts/create-experience-type-croisieres.ts
//
// Guard rail: refuses to run if the slug already exists, matching the additive-only discipline
// used across this project's other seed scripts.

process.loadEnvFile(".env");

async function main() {
  const { db } = await import("../src/lib/db");
  const R2 = process.env.NEXT_PUBLIC_R2_URL!;

  const existing = await db.experienceType.findUnique({ where: { slug: "croisieres" } });
  if (existing) {
    console.log("ExperienceType 'croisieres' already exists — nothing to do.");
    await db.$disconnect();
    return;
  }

  await db.experienceType.create({
    data: {
      slug: "croisieres",
      kind: "what",
      filterTheme: "cruise",
      cardImage: `${R2}/experiences/croisieres.jpg`,
      cardTitle: "Croisières",
      cardTitleEn: "Cruises",
      cardTitleEs: "Cruceros",
      cardDescription: "Mouiller dans une baie différente chaque soir, loin des grands ports de croisière.",
      cardDescriptionEn: "Anchoring in a different bay every evening, far from the big cruise ports.",
      cardDescriptionEs: "Fondear en una bahía diferente cada noche, lejos de los grandes puertos de crucero.",
      heroImage: `${R2}/experiences/croisieres.jpg`,
      heroTitle: "Croisières sur-mesure",
      heroTitleEn: "Tailor-Made Cruises",
      heroTitleEs: "Cruceros a medida",
      heroSubtitle: "De petits navires qui vont là où les grands paquebots ne passent pas.",
      heroSubtitleEn: "Small ships that go where the large liners can't.",
      heroSubtitleEs: "Pequeños barcos que llegan donde los grandes transatlánticos no pueden.",
      overviewTitle: "Voir le monde depuis l'eau",
      overviewTitleEn: "Seeing the World from the Water",
      overviewTitleEs: "Ver el mundo desde el agua",
      overviewBody:
        "Nos croisières ne ressemblent pas à un grand paquebot qui accoste dans un port bondé pour quelques heures. Ce sont de petits navires ou voiliers qui mouillent chaque soir dans une baie différente, s'approchent des parois d'un fjord bien plus près qu'un géant des mers ne le pourrait, et s'arrêtent sur une plage accessible uniquement depuis l'eau. La mer devient un fil conducteur entre plusieurs mondes — îles, récifs, villages de pêcheurs — plutôt qu'un simple moyen de transport entre deux escales.",
      overviewBodyEn:
        "Our cruises aren't a large liner docking in a crowded port for a few hours. These are small ships or sailboats that anchor in a different bay every evening, come far closer to a fjord's walls than any sea giant ever could, and stop at a beach reachable only from the water. The sea becomes a thread connecting several worlds — islands, reefs, fishing villages — rather than just a means of transport between two stops.",
      overviewBodyEs:
        "Nuestros cruceros no son un gran transatlántico que atraca en un puerto abarrotado durante unas horas. Son pequeños barcos o veleros que fondean cada noche en una bahía distinta, se acercan a las paredes de un fiordo mucho más que cualquier gigante de los mares, y se detienen en una playa accesible solo desde el agua. El mar se convierte en un hilo conductor entre varios mundos — islas, arrecifes, pueblos de pescadores — en lugar de un simple medio de transporte entre dos escalas.",
      order: 14,
    },
  });

  console.log("Created ExperienceType 'croisieres'.");
  await db.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
