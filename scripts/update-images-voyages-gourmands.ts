process.loadEnvFile(".env");

async function main() {
  const { PrismaClient } = await import("@prisma/client");
  const db = new PrismaClient();
  const R2 = process.env.NEXT_PUBLIC_R2_URL;
  const img = (key: string) => `${R2}/${key}`;

  const riad = img("tours/voyages-gourmands-riad.jpg");
  const souk = img("tours/voyages-gourmands-souk.jpg");
  const tajine = img("tours/voyages-gourmands-tajine.jpg");
  const jemaaNuit = img("tours/voyages-gourmands-jemaa-nuit.jpg");
  const agafayCamp = img("tours/voyages-gourmands-agafay-camp.jpg");
  const agafayBalloon = img("tours/voyages-gourmands-agafay-montgolfiere.jpg");
  const agafayChameaux = img("tours/voyages-gourmands-agafay-chameaux.jpg");
  const oliviers = img("tours/voyages-gourmands-oliviers.jpg");
  const lodge = img("tours/voyages-gourmands-lodge.jpg");
  const sidecar = img("tours/voyages-gourmands-sidecar.jpg");

  // Verify every image is actually live on R2 before writing anything.
  const all = [riad, souk, tajine, jemaaNuit, agafayCamp, agafayBalloon, agafayChameaux, oliviers, lodge, sidecar];
  for (const url of all) {
    const res = await fetch(url, { method: "HEAD" });
    if (!res.ok) throw new Error(`Not live: ${url} (${res.status})`);
  }
  console.log(`Verified ${all.length} images live on R2.`);

  const tour = await db.tour.findUnique({
    where: { slug: "voyages-gourmands-marrakech" },
    include: { chapters: { include: { days: true } } },
  });
  if (!tour) throw new Error("Tour not found");

  await db.tour.update({ where: { id: tour.id }, data: { image: riad } });

  const marrakech = tour.chapters.find((c) => c.title === "Marrakech")!;
  const agafay = tour.chapters.find((c) => c.title === "Le désert d'Agafay")!;
  const campagne = tour.chapters.find((c) => c.title === "La campagne de Marrakech")!;

  await db.journeyChapter.update({ where: { id: marrakech.id }, data: { galleryImages: [souk, riad, tajine].join(",") } });
  await db.journeyChapter.update({ where: { id: agafay.id }, data: { galleryImages: [agafayCamp, agafayBalloon, agafayChameaux].join(",") } });
  await db.journeyChapter.update({ where: { id: campagne.id }, data: { galleryImages: [oliviers, lodge].join(",") } });

  const day1 = marrakech.days.find((d) => d.dayNumber === 1)!;
  const day2 = marrakech.days.find((d) => d.dayNumber === 2)!;
  const day3 = marrakech.days.find((d) => d.dayNumber === 3)!;
  const day4 = agafay.days.find((d) => d.dayNumber === 4)!;
  const day5 = campagne.days.find((d) => d.dayNumber === 5)!;
  const day6 = campagne.days.find((d) => d.dayNumber === 6)!;

  await db.itineraryDay.update({ where: { id: day1.id }, data: { image: riad } });
  await db.itineraryDay.update({ where: { id: day2.id }, data: { image: jemaaNuit } });
  await db.itineraryDay.update({ where: { id: day3.id }, data: { image: tajine } });
  await db.itineraryDay.update({ where: { id: day4.id }, data: { image: agafayBalloon, images: agafayChameaux } });
  await db.itineraryDay.update({ where: { id: day5.id }, data: { image: sidecar } });
  await db.itineraryDay.update({ where: { id: day6.id }, data: { image: oliviers } });

  console.log("Updated tour, 3 chapters, and 6 days for voyages-gourmands-marrakech.");
  await db.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
