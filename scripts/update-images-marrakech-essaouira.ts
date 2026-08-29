process.loadEnvFile(".env");

async function main() {
  const { PrismaClient } = await import("@prisma/client");
  const db = new PrismaClient();
  const R2 = process.env.NEXT_PUBLIC_R2_URL;
  const img = (key: string) => `${R2}/${key}`;

  const quad = img("tours/marrakech-essaouira-quad.jpg");
  const kitesurf = img("tours/marrakech-essaouira-kitesurf.jpg");
  const arganGoats = img("tours/marrakech-essaouira-argan-goats.jpg");
  const harbor = img("tours/marrakech-essaouira-harbor.jpg");
  const blueStreets = img("tours/marrakech-essaouira-blue-streets.jpg");
  const atlasVillage = img("tours/marrakech-essaouira-atlas-village.jpg");

  // Reused from the voyages-gourmands set — same Marrakech riad/souk/Agafay/lodge imagery,
  // matching the client's own pattern of reusing images across trips that share locations.
  const riad = img("tours/voyages-gourmands-riad.jpg");
  const souk = img("tours/voyages-gourmands-souk.jpg");
  const tajine = img("tours/voyages-gourmands-tajine.jpg");
  const jemaaNuit = img("tours/voyages-gourmands-jemaa-nuit.jpg");
  const agafayCamp = img("tours/voyages-gourmands-agafay-camp.jpg");
  const lodge = img("tours/voyages-gourmands-lodge.jpg");
  const oliviers = img("tours/voyages-gourmands-oliviers.jpg");

  const tour = await db.tour.findUnique({
    where: { slug: "marrakech-agafay-essaouira-medina-cote" },
    include: { chapters: { include: { days: true } } },
  });
  if (!tour) throw new Error("Tour not found");

  await db.tour.update({ where: { id: tour.id }, data: { image: blueStreets } });

  const cMarrakech = tour.chapters.find((c) => c.title === "Marrakech")!;
  const cAgafay = tour.chapters.find((c) => c.title === "Le désert d'Agafay")!;
  const cHautAtlas = tour.chapters.find((c) => c.title === "Le Haut Atlas")!;
  const cEssaouira = tour.chapters.find((c) => c.title === "Essaouira")!;

  await db.journeyChapter.update({ where: { id: cMarrakech.id }, data: { galleryImages: [souk, riad, tajine].join(",") } });
  await db.journeyChapter.update({ where: { id: cAgafay.id }, data: { galleryImages: [quad, agafayCamp].join(",") } });
  await db.journeyChapter.update({ where: { id: cHautAtlas.id }, data: { galleryImages: [lodge, oliviers, atlasVillage].join(",") } });
  await db.journeyChapter.update({ where: { id: cEssaouira.id }, data: { galleryImages: [arganGoats, kitesurf, blueStreets, harbor].join(",") } });

  const day1 = cMarrakech.days.find((d) => d.dayNumber === 1)!;
  const day2 = cMarrakech.days.find((d) => d.dayNumber === 2)!;
  const day3 = cMarrakech.days.find((d) => d.dayNumber === 3)!;
  const day4 = cAgafay.days.find((d) => d.dayNumber === 4)!;
  const day5 = cHautAtlas.days.find((d) => d.dayNumber === 5)!;
  const day6 = cHautAtlas.days.find((d) => d.dayNumber === 6)!;
  const day7 = cHautAtlas.days.find((d) => d.dayNumber === 7)!;
  const day8 = cEssaouira.days.find((d) => d.dayNumber === 8)!;
  const day9 = cEssaouira.days.find((d) => d.dayNumber === 9)!;
  const day10 = cEssaouira.days.find((d) => d.dayNumber === 10)!;

  await db.itineraryDay.update({ where: { id: day1.id }, data: { image: riad } });
  await db.itineraryDay.update({ where: { id: day2.id }, data: { image: souk } });
  await db.itineraryDay.update({ where: { id: day3.id }, data: { image: jemaaNuit, images: tajine } });
  await db.itineraryDay.update({ where: { id: day4.id }, data: { image: quad, images: agafayCamp } });
  await db.itineraryDay.update({ where: { id: day5.id }, data: { image: lodge, images: oliviers } });
  await db.itineraryDay.update({ where: { id: day6.id }, data: { image: atlasVillage } });
  await db.itineraryDay.update({ where: { id: day7.id }, data: { image: oliviers } });
  await db.itineraryDay.update({ where: { id: day8.id }, data: { image: arganGoats } });
  await db.itineraryDay.update({ where: { id: day9.id }, data: { image: kitesurf, images: blueStreets } });
  await db.itineraryDay.update({ where: { id: day10.id }, data: { image: harbor } });

  console.log("Updated tour, 4 chapters, and 10 days for marrakech-agafay-essaouira-medina-cote.");
  await db.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
