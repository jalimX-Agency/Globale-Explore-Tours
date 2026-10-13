// Removes trips listed in src/lib/retiredTrips.ts from the database, after saving a full copy
// of each (with chapters, days, sections and hotels) under docs/voyamar/backup/. Refuses to
// touch a trip that has booking requests attached or whose replacement does not exist.
// Run with:  npx tsx scripts/voyamar-retire.ts      Safe to re-run.

process.loadEnvFile(".env");
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { RETIRED_TRIPS } from "../src/lib/retiredTrips";

async function main() {
  const { PrismaClient } = await import("@prisma/client");
  const db = new PrismaClient();
  mkdirSync("docs/voyamar/backup", { recursive: true });
  try {
    for (const { from, to } of RETIRED_TRIPS) {
      const tour = await db.tour.findUnique({
        where: { slug: from },
        include: { chapters: true, itineraryDays: true, sections: true, hotels: true, _count: { select: { bookings: true } } },
      });
      if (!tour) { console.log(`skip  ${from} (already removed)`); continue; }
      if (!(await db.tour.findUnique({ where: { slug: to }, select: { id: true } }))) throw new Error(`Replacement missing: ${to}`);
      if (tour._count.bookings > 0) throw new Error(`${from} has ${tour._count.bookings} booking request(s); not removing`);
      const file = `docs/voyamar/backup/${from}.json`;
      if (!existsSync(file)) writeFileSync(file, JSON.stringify(tour, null, 1));
      await db.itineraryDay.deleteMany({ where: { tourId: tour.id } });
      await db.tour.delete({ where: { id: tour.id } });
      console.log(`gone  ${from} -> ${to}  (backup: ${file})`);
    }
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
