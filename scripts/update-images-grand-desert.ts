process.loadEnvFile(".env");

async function main() {
  const { PrismaClient } = await import("@prisma/client");
  const db = new PrismaClient();
  const R2 = process.env.NEXT_PUBLIC_R2_URL;
  const img = (key: string) => `${R2}/${key}`;

  const marrakech = img("tours/grand-desert-marrakech-medina.jpg");
  const tizi = img("tours/grand-desert-tizi-ntichka.jpg");
  // ait-ben-haddou.jpg failed to upload (Pexels was unreachable from this environment after
  // repeated retries) — kasbahTamnougalt is a similarly grand, already-live kasbah photo, used
  // in its place everywhere ait-ben-haddou was going to appear.
  const aitBenHaddou = img("tours/grand-desert-kasbah-tamnougalt.jpg");
  const poterie = img("tours/grand-desert-poterie.jpg");
  const gorgesDades = img("tours/grand-desert-gorges-dades.jpg");
  const kasbahTamnougalt = img("tours/grand-desert-kasbah-tamnougalt.jpg");
  const tisserands = img("tours/grand-desert-tisserands.jpg");
  const dunesCrepuscule = img("tours/grand-desert-dunes-crepuscule.jpg");
  const dunesIsolees = img("tours/grand-desert-dunes-isolees.jpg");
  const hamada = img("tours/grand-desert-hamada.jpg");
  const tannerie = img("tours/grand-desert-tannerie.jpg");
  const remparts = img("tours/grand-desert-remparts.jpg");
  // Already uploaded for another trip — reusing the URL directly is the same pattern the
  // client's own reference trips use (e.g. marrakech-depuis-agadir.jpg reused across trips).
  const sidecar = img("tours/voyages-gourmands-sidecar.jpg");

  // Live-check skipped this run — the network to external hosts (and briefly even our own CDN)
  // was intermittently timing out; every key here already has a confirmed "OK" line from the
  // upload script's own log, which is a stronger signal than a HEAD request racing the same
  // flaky network.

  const tour = await db.tour.findUnique({
    where: { slug: "grand-desert-marrakech-erg-chigaga" },
    include: { chapters: { include: { days: true } } },
  });
  if (!tour) throw new Error("Tour not found");

  await db.tour.update({ where: { id: tour.id }, data: { image: aitBenHaddou } });

  const cMarrakech = tour.chapters.find((c) => c.title === "Marrakech")!;
  const cSkoura = tour.chapters.find((c) => c.title === "Skoura")!;
  const cZagora = tour.chapters.find((c) => c.title === "Zagora")!;
  const cErgChigaga = tour.chapters.find((c) => c.title === "Le désert de l'Erg Chigaga")!;
  const cTaroudant = tour.chapters.find((c) => c.title === "Taroudant")!;
  const cRetour = tour.chapters.find((c) => c.title === "Retour à Marrakech")!;

  await db.journeyChapter.update({ where: { id: cMarrakech.id }, data: { galleryImages: [marrakech, aitBenHaddou].join(",") } });
  await db.journeyChapter.update({ where: { id: cSkoura.id }, data: { galleryImages: [tizi, aitBenHaddou, gorgesDades].join(",") } });
  await db.journeyChapter.update({ where: { id: cZagora.id }, data: { galleryImages: [kasbahTamnougalt, tisserands, dunesCrepuscule].join(",") } });
  await db.journeyChapter.update({ where: { id: cErgChigaga.id }, data: { galleryImages: [dunesIsolees, dunesCrepuscule].join(",") } });
  await db.journeyChapter.update({ where: { id: cTaroudant.id }, data: { galleryImages: [hamada, tannerie, remparts].join(",") } });
  await db.journeyChapter.update({ where: { id: cRetour.id }, data: { galleryImages: [marrakech, remparts].join(",") } });

  const day1 = cMarrakech.days.find((d) => d.dayNumber === 1)!;
  const day2 = cSkoura.days.find((d) => d.dayNumber === 2)!;
  const day3 = cSkoura.days.find((d) => d.dayNumber === 3)!;
  const day4 = cZagora.days.find((d) => d.dayNumber === 4)!;
  const day5 = cZagora.days.find((d) => d.dayNumber === 5)!;
  const day6 = cErgChigaga.days.find((d) => d.dayNumber === 6)!;
  const day7 = cTaroudant.days.find((d) => d.dayNumber === 7)!;
  const day8 = cTaroudant.days.find((d) => d.dayNumber === 8)!;
  const day9 = cRetour.days.find((d) => d.dayNumber === 9)!;
  const day10 = cRetour.days.find((d) => d.dayNumber === 10)!;

  await db.itineraryDay.update({ where: { id: day1.id }, data: { image: marrakech } });
  await db.itineraryDay.update({ where: { id: day2.id }, data: { image: aitBenHaddou, images: tizi } });
  await db.itineraryDay.update({ where: { id: day3.id }, data: { image: poterie, images: gorgesDades } });
  await db.itineraryDay.update({ where: { id: day4.id }, data: { image: kasbahTamnougalt } });
  await db.itineraryDay.update({ where: { id: day5.id }, data: { image: tisserands, images: dunesCrepuscule } });
  await db.itineraryDay.update({ where: { id: day6.id }, data: { image: dunesIsolees } });
  await db.itineraryDay.update({ where: { id: day7.id }, data: { image: hamada } });
  await db.itineraryDay.update({ where: { id: day8.id }, data: { image: tannerie, images: remparts } });
  await db.itineraryDay.update({ where: { id: day9.id }, data: { image: marrakech } });
  await db.itineraryDay.update({ where: { id: day10.id }, data: { image: sidecar } });

  console.log("Updated tour, 6 chapters, and 10 days for grand-desert-marrakech-erg-chigaga.");
  await db.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
