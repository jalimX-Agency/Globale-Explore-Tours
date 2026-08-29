import { PrismaClient } from "@prisma/client";
import { extractR2Urls } from "../../src/lib/r2";

// The entry-point script that imports this file is responsible for calling
// process.loadEnvFile(".env") and using a dynamic import() *before* importing this module —
// ESM hoists static imports above other top-level code, so `new PrismaClient()` below (reads
// DATABASE_URL) and src/lib/r2.ts's module-level `process.env.NEXT_PUBLIC_R2_URL` read would
// otherwise both run before env is loaded, regardless of where in the entry file the
// env-loading call appears.
const db = new PrismaClient();

export type NewDestination = Record<string, unknown> & { slug: string };

export type NewWorldTrip = {
  destinationSlug: string;
  tour: Record<string, unknown> & { slug: string };
  sections: Array<{ heading: string; headingEn: string; headingEs: string; body: string; bodyEn: string; bodyEs: string }>;
  hotels: Array<{ name: string; nameEn: string; nameEs: string; description: string; descriptionEn: string; descriptionEs: string; image: string }>;
};

export type NewJourneyTrip = {
  destinationSlug: string;
  tour: Record<string, unknown> & { slug: string };
  chapters: Array<{
    title: string; titleEn: string; titleEs: string;
    intro: string; introEn: string; introEs: string;
    galleryImages: string; mapMarkerX: number; mapMarkerY: number;
    days: Array<{ dayNumber: number; title: string; titleEn: string; titleEs: string; description: string; descriptionEn: string; descriptionEs: string; image: string; images: string }>;
  }>;
};

// A single HEAD attempt, alongside ~80+ others fired concurrently for a full batch, is prone
// to spurious DNS/connection blips having nothing to do with whether the image is actually
// live — a bare fetch failure here isn't trustworthy on the first try. Retries a few times
// with a short backoff before really giving up on a URL.
async function headOk(url: string, attempts = 3): Promise<boolean> {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(10_000) });
      if (res.ok) return true;
    } catch {
      // fall through to retry
    }
    if (i < attempts - 1) await new Promise((r) => setTimeout(r, 500 * (i + 1)));
  }
  return false;
}

async function assertImagesLive(records: unknown[]): Promise<void> {
  const urls = new Set<string>();
  for (const r of records) extractR2Urls(r, urls);
  const checks = await Promise.all([...urls].map(async (url) => ({ url, ok: await headOk(url) })));
  const dead = checks.filter((c) => !c.ok);
  if (dead.length > 0) {
    throw new Error(
      `Aborting before any write — ${dead.length} referenced image(s) are not live yet:\n` +
        dead.map((d) => `  ${d.url}`).join("\n")
    );
  }
  console.log(`Verified ${urls.size} referenced image(s) are live.`);
}

async function assertNoCollisions(input: {
  newDestinations: NewDestination[];
  newStandardTrips: NewWorldTrip[];
  newJourneyTrips: NewJourneyTrip[];
}): Promise<void> {
  const destSlugs = input.newDestinations.map((d) => d.slug);
  const tourSlugs = [...input.newStandardTrips, ...input.newJourneyTrips].map((t) => t.tour.slug);

  const [existingDests, existingTours] = await Promise.all([
    destSlugs.length ? db.destination.findMany({ where: { slug: { in: destSlugs } }, select: { slug: true } }) : [],
    db.tour.findMany({ where: { slug: { in: tourSlugs } }, select: { slug: true } }),
  ]);

  if (existingDests.length > 0 || existingTours.length > 0) {
    throw new Error(
      "Aborting before any write — these slugs already exist:\n" +
        [...existingDests.map((d) => `  destination: ${d.slug}`), ...existingTours.map((t) => `  tour: ${t.slug}`)].join("\n")
    );
  }
  console.log(`Verified ${destSlugs.length} destination slug(s) and ${tourSlugs.length} tour slug(s) are free.`);
}

// Additive-only: never imports from src/lib/seed.ts (which runs its whole 15k-line file,
// including unscoped ContentBlock/TeamMember/Faq wipes, the instant anything imports from
// it — confirmed by reading its unguarded top-level main() call). This file touches only
// Destination and Tour + Tour's own children, nothing else, and refuses to run at all if any
// referenced image isn't already live or any slug already exists.
export async function runSeedBatch(input: {
  newDestinations?: NewDestination[];
  newStandardTrips: NewWorldTrip[];
  newJourneyTrips: NewJourneyTrip[];
}): Promise<void> {
  const newDestinations = input.newDestinations ?? [];
  await assertNoCollisions({ newDestinations, newStandardTrips: input.newStandardTrips, newJourneyTrips: input.newJourneyTrips });
  await assertImagesLive([newDestinations, input.newStandardTrips, input.newJourneyTrips]);

  for (const dest of newDestinations) {
    await db.destination.create({ data: dest as never });
  }
  if (newDestinations.length > 0) console.log(`Created ${newDestinations.length} new destination(s).`);

  const destinationIds: Record<string, string> = {};
  const allDestSlugs = [...new Set([...input.newStandardTrips, ...input.newJourneyTrips].map((t) => t.destinationSlug))];
  const destRows = await db.destination.findMany({ where: { slug: { in: allDestSlugs } }, select: { id: true, slug: true } });
  for (const row of destRows) destinationIds[row.slug] = row.id;

  for (const trip of input.newStandardTrips) {
    const destinationId = destinationIds[trip.destinationSlug];
    if (!destinationId) throw new Error(`Unknown destination slug: ${trip.destinationSlug}`);
    const tourRow = await db.tour.create({ data: { ...trip.tour, destinationId } as never });

    for (const [i, section] of trip.sections.entries()) {
      await db.tourSection.create({ data: { ...section, tourId: tourRow.id, order: i } });
    }
    for (const [i, hotel] of trip.hotels.entries()) {
      await db.tourHotel.create({ data: { ...hotel, tourId: tourRow.id, order: i } });
    }
  }
  console.log(`Created ${input.newStandardTrips.length} standard trip(s).`);

  for (const trip of input.newJourneyTrips) {
    const destinationId = destinationIds[trip.destinationSlug];
    if (!destinationId) throw new Error(`Unknown destination slug: ${trip.destinationSlug}`);
    const tourRow = await db.tour.create({ data: { ...trip.tour, destinationId } as never });

    for (const [i, chapter] of trip.chapters.entries()) {
      const { days, ...chapterData } = chapter;
      const chapterRow = await db.journeyChapter.create({ data: { ...chapterData, tourId: tourRow.id, order: i } });
      for (const [j, day] of days.entries()) {
        await db.itineraryDay.create({ data: { ...day, tourId: tourRow.id, chapterId: chapterRow.id, order: j } });
      }
    }
  }
  console.log(`Created ${input.newJourneyTrips.length} journey trip(s).`);
}

export async function disconnect(): Promise<void> {
  await db.$disconnect();
}
