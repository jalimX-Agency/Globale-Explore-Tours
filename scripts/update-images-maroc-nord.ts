process.loadEnvFile(".env");

async function main() {
  const { PrismaClient } = await import("@prisma/client");
  const db = new PrismaClient();
  const R2 = process.env.NEXT_PUBLIC_R2_URL;
  const img = (key: string) => `${R2}/${key}`;

  const casablanca = img("tours/maroc-nord-casablanca.jpg");
  const fesMedina = img("tours/maroc-nord-fes-medina.jpg");
  const tbal = img("tours/maroc-nord-tbal-artisan.jpg");
  const volubilis = img("tours/maroc-nord-volubilis.jpg");
  const chefchaouen = img("tours/maroc-nord-chefchaouen.jpg");
  const akchour = img("tours/maroc-nord-akchour.jpg");
  const marchePoisson = img("tours/maroc-nord-marche-poisson.jpg");
  const asilah = img("tours/maroc-nord-asilah.jpg");
  const chevauxPlage = img("tours/maroc-nord-chevaux-plage.jpg");
  const piqueNique = img("tours/maroc-nord-pique-nique-coucher-soleil.jpg");
  // Already uploaded for grand-desert-marrakech-erg-chigaga — Fès has the most famous tannery
  // in Morocco, so this generic-tannery photo fits even better here than where it first went.
  const tannerie = img("tours/grand-desert-tannerie.jpg");

  const tour = await db.tour.findUnique({
    where: { slug: "maroc-du-nord-fes-chefchaouen-tanger" },
    include: { chapters: { include: { days: true } } },
  });
  if (!tour) throw new Error("Tour not found");

  await db.tour.update({ where: { id: tour.id }, data: { image: chefchaouen } });

  const cFes = tour.chapters.find((c) => c.title === "Fès")!;
  const cChefchaouen = tour.chapters.find((c) => c.title === "Chefchaouen")!;
  const cTanger = tour.chapters.find((c) => c.title === "Tanger")!;
  const cLarache = tour.chapters.find((c) => c.title === "La côte de Larache")!;

  await db.journeyChapter.update({ where: { id: cFes.id }, data: { galleryImages: [fesMedina, tannerie, tbal].join(",") } });
  await db.journeyChapter.update({ where: { id: cChefchaouen.id }, data: { galleryImages: [volubilis, chefchaouen].join(",") } });
  await db.journeyChapter.update({ where: { id: cTanger.id }, data: { galleryImages: [akchour, marchePoisson].join(",") } });
  await db.journeyChapter.update({ where: { id: cLarache.id }, data: { galleryImages: [asilah, chevauxPlage, piqueNique].join(",") } });

  const day1 = cFes.days.find((d) => d.dayNumber === 1)!;
  const day2 = cFes.days.find((d) => d.dayNumber === 2)!;
  const day3 = cFes.days.find((d) => d.dayNumber === 3)!;
  const day4 = cFes.days.find((d) => d.dayNumber === 4)!;
  const day5 = cChefchaouen.days.find((d) => d.dayNumber === 5)!;
  const day6 = cChefchaouen.days.find((d) => d.dayNumber === 6)!;
  const day7 = cTanger.days.find((d) => d.dayNumber === 7)!;
  const day8 = cTanger.days.find((d) => d.dayNumber === 8)!;
  const day9 = cLarache.days.find((d) => d.dayNumber === 9)!;
  const day10 = cLarache.days.find((d) => d.dayNumber === 10)!;
  const day11 = cLarache.days.find((d) => d.dayNumber === 11)!;

  await db.itineraryDay.update({ where: { id: day1.id }, data: { image: casablanca } });
  await db.itineraryDay.update({ where: { id: day2.id }, data: { image: fesMedina } });
  await db.itineraryDay.update({ where: { id: day3.id }, data: { image: tannerie } });
  await db.itineraryDay.update({ where: { id: day4.id }, data: { image: tbal } });
  await db.itineraryDay.update({ where: { id: day5.id }, data: { image: volubilis } });
  await db.itineraryDay.update({ where: { id: day6.id }, data: { image: chefchaouen } });
  await db.itineraryDay.update({ where: { id: day7.id }, data: { image: akchour } });
  await db.itineraryDay.update({ where: { id: day8.id }, data: { image: marchePoisson } });
  await db.itineraryDay.update({ where: { id: day9.id }, data: { image: asilah } });
  await db.itineraryDay.update({ where: { id: day10.id }, data: { image: chevauxPlage } });
  await db.itineraryDay.update({ where: { id: day11.id }, data: { image: piqueNique } });

  console.log("Updated tour, 4 chapters, and 11 days for maroc-du-nord-fes-chefchaouen-tanger.");
  await db.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
