// Amérique du Sud batch 4 — Uruguay, Guatemala, Belize. Sourced from Pexels (free commercial
// license, no attribution required) via WebFetch on pexels.com search pages, then verified
// live with a direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-amerique-du-sud-4.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Uruguay : Montevideo, la capitale bohème du Río de la Plata" --
  { key: "tours/uruguay-montevideo.jpg", url: "https://images.pexels.com/photos/22422359/pexels-photo-22422359.jpeg" },
  { key: "trips/uruguay-montevideo-gallery-1.jpg", url: "https://images.pexels.com/photos/8334104/pexels-photo-8334104.jpeg" },
  { key: "trips/uruguay-montevideo-gallery-2.jpg", url: "https://images.pexels.com/photos/33631939/pexels-photo-33631939.jpeg" },
  { key: "trips/uruguay-montevideo-gallery-3.jpg", url: "https://images.pexels.com/photos/36704813/pexels-photo-36704813.jpeg" },
  { key: "trips/uruguay-montevideo-gallery-4.jpg", url: "https://images.pexels.com/photos/35542457/pexels-photo-35542457.jpeg" },
  { key: "trips/uruguay-montevideo-gallery-5.jpg", url: "https://images.pexels.com/photos/12161968/pexels-photo-12161968.jpeg" },
  { key: "trips/uruguay-montevideo-gallery-6.jpg", url: "https://images.pexels.com/photos/22422359/pexels-photo-22422359.jpeg" },
  { key: "trips/uruguay-montevideo-hotel-cottage.jpg", url: "https://images.pexels.com/photos/1658083/pexels-photo-1658083.jpeg" },
  { key: "trips/uruguay-montevideo-hotel-almahistorica.jpg", url: "https://images.pexels.com/photos/37928700/pexels-photo-37928700.jpeg" },

  // -- Journey trip: "Uruguay : les estancias gauchesques et Cabo Polonio" --
  { key: "journeys/uruguay-estancias-cabopolonio-hero.jpg", url: "https://images.pexels.com/photos/4581223/pexels-photo-4581223.jpeg" },
  { key: "journeys/uruguay-estancia-gallery1.jpg", url: "https://images.pexels.com/photos/29143842/pexels-photo-29143842.jpeg" },
  { key: "journeys/uruguay-estancia-gallery2.jpg", url: "https://images.pexels.com/photos/29143844/pexels-photo-29143844.jpeg" },
  { key: "journeys/uruguay-estancia-gallery3.jpg", url: "https://images.pexels.com/photos/36922741/pexels-photo-36922741.jpeg" },
  { key: "journeys/uruguay-estancia-day1.jpg", url: "https://images.pexels.com/photos/29907116/pexels-photo-29907116.jpeg" },
  { key: "journeys/uruguay-estancia-day2.jpg", url: "https://images.pexels.com/photos/28806547/pexels-photo-28806547.jpeg" },
  { key: "journeys/uruguay-cabopolonio-gallery1.jpg", url: "https://images.pexels.com/photos/20705850/pexels-photo-20705850.jpeg" },
  { key: "journeys/uruguay-cabopolonio-gallery2.jpg", url: "https://images.pexels.com/photos/18778255/pexels-photo-18778255.jpeg" },
  { key: "journeys/uruguay-cabopolonio-gallery3.jpg", url: "https://images.pexels.com/photos/7333039/pexels-photo-7333039.jpeg" },
  { key: "journeys/uruguay-cabopolonio-day1.jpg", url: "https://images.pexels.com/photos/33970601/pexels-photo-33970601.jpeg" },
  { key: "journeys/uruguay-cabopolonio-day2.jpg", url: "https://images.pexels.com/photos/18569642/pexels-photo-18569642.jpeg" },

  // -- Standard trip: "Guatemala : Semuc Champey, les piscines turquoise de la jungle" --
  { key: "tours/guatemala-semuc-champey.jpg", url: "https://images.pexels.com/photos/36525944/pexels-photo-36525944.jpeg" },
  { key: "trips/guatemala-semuc-gallery-1.jpg", url: "https://images.pexels.com/photos/23657775/pexels-photo-23657775.jpeg" },
  { key: "trips/guatemala-semuc-gallery-2.jpg", url: "https://images.pexels.com/photos/36525943/pexels-photo-36525943.jpeg" },
  { key: "trips/guatemala-semuc-gallery-3.jpg", url: "https://images.pexels.com/photos/21273787/pexels-photo-21273787.jpeg" },
  { key: "trips/guatemala-semuc-gallery-4.jpg", url: "https://images.pexels.com/photos/13872541/pexels-photo-13872541.jpeg" },
  { key: "trips/guatemala-semuc-gallery-5.jpg", url: "https://images.pexels.com/photos/15837762/pexels-photo-15837762.jpeg" },
  { key: "trips/guatemala-semuc-gallery-6.jpg", url: "https://images.pexels.com/photos/34522532/pexels-photo-34522532.jpeg" },
  { key: "trips/guatemala-semuc-hotel-utopia.jpg", url: "https://images.pexels.com/photos/6790685/pexels-photo-6790685.jpeg" },
  { key: "trips/guatemala-semuc-hotel-lasmarias.jpg", url: "https://images.pexels.com/photos/29588259/pexels-photo-29588259.jpeg" },

  // -- Journey trip: "Guatemala : Río Dulce et El Mirador, la cité perdue du Petén" --
  { key: "journeys/guatemala-riodulce-mirador-hero.jpg", url: "https://images.pexels.com/photos/34318598/pexels-photo-34318598.jpeg" },
  { key: "journeys/guatemala-riodulce-gallery1.jpg", url: "https://images.pexels.com/photos/29000107/pexels-photo-29000107.jpeg" },
  { key: "journeys/guatemala-riodulce-gallery2.jpg", url: "https://images.pexels.com/photos/13872541/pexels-photo-13872541.jpeg" },
  { key: "journeys/guatemala-riodulce-gallery3.jpg", url: "https://images.pexels.com/photos/13872543/pexels-photo-13872543.jpeg" },
  { key: "journeys/guatemala-riodulce-day1.jpg", url: "https://images.pexels.com/photos/15991977/pexels-photo-15991977.png" },
  { key: "journeys/guatemala-riodulce-day2.jpg", url: "https://images.pexels.com/photos/31449018/pexels-photo-31449018.jpeg" },
  { key: "journeys/guatemala-mirador-gallery1.jpg", url: "https://images.pexels.com/photos/35668048/pexels-photo-35668048.jpeg" },
  { key: "journeys/guatemala-mirador-gallery2.jpg", url: "https://images.pexels.com/photos/7205915/pexels-photo-7205915.jpeg" },
  { key: "journeys/guatemala-mirador-gallery3.jpg", url: "https://images.pexels.com/photos/25929068/pexels-photo-25929068.jpeg" },
  { key: "journeys/guatemala-mirador-day1.jpg", url: "https://images.pexels.com/photos/29357408/pexels-photo-29357408.jpeg" },
  { key: "journeys/guatemala-mirador-day2.jpg", url: "https://images.pexels.com/photos/28949665/pexels-photo-28949665.jpeg" },

  // -- Standard trip: "Belize : la péninsule de Placencia, l'autre Belize" --
  { key: "tours/belize-placencia.jpg", url: "https://images.pexels.com/photos/38399098/pexels-photo-38399098.jpeg" },
  { key: "trips/belize-placencia-gallery-1.jpg", url: "https://images.pexels.com/photos/19823325/pexels-photo-19823325.jpeg" },
  { key: "trips/belize-placencia-gallery-2.jpg", url: "https://images.pexels.com/photos/31376165/pexels-photo-31376165.jpeg" },
  { key: "trips/belize-placencia-gallery-3.jpg", url: "https://images.pexels.com/photos/38399100/pexels-photo-38399100.jpeg" },
  { key: "trips/belize-placencia-gallery-4.jpg", url: "https://images.pexels.com/photos/38399128/pexels-photo-38399128.jpeg" },
  { key: "trips/belize-placencia-gallery-5.jpg", url: "https://images.pexels.com/photos/31376177/pexels-photo-31376177.jpeg" },
  { key: "trips/belize-placencia-gallery-6.jpg", url: "https://images.pexels.com/photos/38399120/pexels-photo-38399120.jpeg" },
  { key: "trips/belize-placencia-hotel-turtleinn.jpg", url: "https://images.pexels.com/photos/32262441/pexels-photo-32262441.jpeg" },
  { key: "trips/belize-placencia-hotel-robertsgrove.jpg", url: "https://images.pexels.com/photos/7292829/pexels-photo-7292829.jpeg" },

  // -- Journey trip: "Belize : Cockscomb Basin et le village garifuna de Hopkins" --
  { key: "journeys/belize-cockscomb-hopkins-hero.jpg", url: "https://images.pexels.com/photos/37883862/pexels-photo-37883862.jpeg" },
  { key: "journeys/belize-cockscomb-gallery1.jpg", url: "https://images.pexels.com/photos/37107304/pexels-photo-37107304.jpeg" },
  { key: "journeys/belize-cockscomb-gallery2.jpg", url: "https://images.pexels.com/photos/12861718/pexels-photo-12861718.jpeg" },
  { key: "journeys/belize-cockscomb-gallery3.jpg", url: "https://images.pexels.com/photos/26605601/pexels-photo-26605601.jpeg" },
  { key: "journeys/belize-cockscomb-day1.jpg", url: "https://images.pexels.com/photos/39136026/pexels-photo-39136026.jpeg" },
  { key: "journeys/belize-cockscomb-day2.jpg", url: "https://images.pexels.com/photos/25929063/pexels-photo-25929063.jpeg" },
  { key: "journeys/belize-hopkins-gallery1.jpg", url: "https://images.pexels.com/photos/9482595/pexels-photo-9482595.jpeg" },
  { key: "journeys/belize-hopkins-gallery2.jpg", url: "https://images.pexels.com/photos/34228075/pexels-photo-34228075.jpeg" },
  { key: "journeys/belize-hopkins-gallery3.jpg", url: "https://images.pexels.com/photos/37987884/pexels-photo-37987884.jpeg" },
  { key: "journeys/belize-hopkins-day1.jpg", url: "https://images.pexels.com/photos/37987885/pexels-photo-37987885.jpeg" },
  { key: "journeys/belize-hopkins-day2.jpg", url: "https://images.pexels.com/photos/15991977/pexels-photo-15991977.png" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/amerique-du-sud-4.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
