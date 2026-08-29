// One-off correction: the Kenya journey trip's days were seeded without images (a "keep it
// lean" call that turned out to look unfinished — DayCarousel renders a flat gray box when a
// day has no image, unlike the Greece reference trip which has one on every day). This fills
// them in on the trip that's already live, rather than re-running seed-trips-africa.ts (which
// would reject the whole batch — its guard rail treats the now-existing slugs as a collision).
// Run with: npx tsx scripts/update-kenya-nord-day-images.ts

// `export {}` forces TS to treat this file as a module (its own scope) rather than a global
// script — without it, `main` below would be a *global* declaration, colliding with any other
// script in this folder that also has no top-level static import and its own `main`.
export {};

process.loadEnvFile(".env");

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const dayImages = [
  // [chapter order, day order] -> image key
  { chapterOrder: 0, dayOrder: 0, image: `${R2}/journeys/kenya-nord-lewa-day1.jpg` },
  { chapterOrder: 0, dayOrder: 1, image: `${R2}/journeys/kenya-nord-lewa-day2.jpg` },
  { chapterOrder: 1, dayOrder: 0, image: `${R2}/journeys/kenya-nord-samburu-day1.jpg` },
  { chapterOrder: 1, dayOrder: 1, image: `${R2}/journeys/kenya-nord-samburu-day2.jpg` },
];

async function main() {
  const { PrismaClient } = await import("@prisma/client");
  const db = new PrismaClient();

  try {
    const tour = await db.tour.findUnique({
      where: { slug: "kenya-nord-lewa-samburu" },
      include: { chapters: { orderBy: { order: "asc" }, include: { days: { orderBy: { order: "asc" } } } } },
    });
    if (!tour) throw new Error("Tour kenya-nord-lewa-samburu not found — has seed-trips-africa.ts been run yet?");

    for (const { chapterOrder, dayOrder, image } of dayImages) {
      const chapter = tour.chapters[chapterOrder];
      const day = chapter?.days[dayOrder];
      if (!day) throw new Error(`Chapter ${chapterOrder} / day ${dayOrder} not found on this tour`);
      await db.itineraryDay.update({ where: { id: day.id }, data: { image } });
      console.log(`OK   chapter "${chapter.title}" day ${day.dayNumber} -> ${image}`);
    }
    console.log("\nDone.");
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
