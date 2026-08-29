// Batch 3 — Namibia, Mozambique, Malawi. Sourced from Pexels (free commercial license, no
// attribution required) via WebFetch on pexels.com search pages, then verified live with a
// direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-africa-3.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Namibie : Etosha, le grand safari" --
  { key: "tours/namibie-etosha.jpg", url: "https://images.pexels.com/photos/34780131/pexels-photo-34780131.jpeg" },
  { key: "trips/namibie-etosha-gallery-1.jpg", url: "https://images.pexels.com/photos/31042104/pexels-photo-31042104.jpeg" },
  { key: "trips/namibie-etosha-gallery-2.jpg", url: "https://images.pexels.com/photos/31042103/pexels-photo-31042103.jpeg" },
  { key: "trips/namibie-etosha-gallery-3.jpg", url: "https://images.pexels.com/photos/9951456/pexels-photo-9951456.jpeg" },
  { key: "trips/namibie-etosha-gallery-4.jpg", url: "https://images.pexels.com/photos/33231638/pexels-photo-33231638.jpeg" },
  { key: "trips/namibie-etosha-gallery-5.jpg", url: "https://images.pexels.com/photos/12035858/pexels-photo-12035858.jpeg" },
  { key: "trips/namibie-etosha-gallery-6.jpg", url: "https://images.pexels.com/photos/30970498/pexels-photo-30970498.jpeg" },
  { key: "trips/namibie-etosha-hotel-namutoni.jpg", url: "https://images.pexels.com/photos/34780212/pexels-photo-34780212.jpeg" },
  { key: "trips/namibie-etosha-hotel-okaukuejo.jpg", url: "https://images.pexels.com/photos/26990535/pexels-photo-26990535.jpeg" },

  // -- Journey trip: "Namibie : la bande de Caprivi, le pays de l'eau" --
  { key: "journeys/namibie-caprivi-hero.jpg", url: "https://images.pexels.com/photos/27171286/pexels-photo-27171286.jpeg" },
  { key: "journeys/namibie-mudumu-gallery1.jpg", url: "https://images.pexels.com/photos/5504233/pexels-photo-5504233.jpeg" },
  { key: "journeys/namibie-mudumu-gallery2.jpg", url: "https://images.pexels.com/photos/30503960/pexels-photo-30503960.jpeg" },
  { key: "journeys/namibie-mudumu-gallery3.jpg", url: "https://images.pexels.com/photos/13869968/pexels-photo-13869968.jpeg" },
  { key: "journeys/namibie-mudumu-day1.jpg", url: "https://images.pexels.com/photos/6674007/pexels-photo-6674007.jpeg" },
  { key: "journeys/namibie-mudumu-day2.jpg", url: "https://images.pexels.com/photos/30371898/pexels-photo-30371898.jpeg" },
  { key: "journeys/namibie-nkasa-gallery1.jpg", url: "https://images.pexels.com/photos/34632546/pexels-photo-34632546.jpeg" },
  { key: "journeys/namibie-nkasa-gallery2.jpg", url: "https://images.pexels.com/photos/35327205/pexels-photo-35327205.jpeg" },
  { key: "journeys/namibie-nkasa-gallery3.jpg", url: "https://images.pexels.com/photos/13098935/pexels-photo-13098935.jpeg" },
  { key: "journeys/namibie-nkasa-day1.jpg", url: "https://images.pexels.com/photos/37738806/pexels-photo-37738806.jpeg" },
  { key: "journeys/namibie-nkasa-day2.jpg", url: "https://images.pexels.com/photos/36036438/pexels-photo-36036438.jpeg" },

  // -- Standard trip: "Mozambique : Gorongosa, la renaissance sauvage" --
  { key: "tours/mozambique-gorongosa.jpg", url: "https://images.pexels.com/photos/33621858/pexels-photo-33621858.jpeg" },
  { key: "trips/mozambique-gorongosa-gallery-1.jpg", url: "https://images.pexels.com/photos/32170340/pexels-photo-32170340.jpeg" },
  { key: "trips/mozambique-gorongosa-gallery-2.jpg", url: "https://images.pexels.com/photos/6790590/pexels-photo-6790590.jpeg" },
  { key: "trips/mozambique-gorongosa-gallery-3.jpg", url: "https://images.pexels.com/photos/16444296/pexels-photo-16444296.jpeg" },
  { key: "trips/mozambique-gorongosa-gallery-4.jpg", url: "https://images.pexels.com/photos/31322900/pexels-photo-31322900.jpeg" },
  { key: "trips/mozambique-gorongosa-gallery-5.jpg", url: "https://images.pexels.com/photos/4191659/pexels-photo-4191659.jpeg" },
  { key: "trips/mozambique-gorongosa-gallery-6.jpg", url: "https://images.pexels.com/photos/4577114/pexels-photo-4577114.jpeg" },
  { key: "trips/mozambique-gorongosa-hotel-chitengo.jpg", url: "https://images.pexels.com/photos/38312459/pexels-photo-38312459.jpeg" },
  { key: "trips/mozambique-gorongosa-hotel-explore.jpg", url: "https://images.pexels.com/photos/31938883/pexels-photo-31938883.jpeg" },

  // -- Journey trip: "Mozambique : île de Mozambique et les Quirimbas" --
  { key: "journeys/mozambique-ilha-hero.jpg", url: "https://images.pexels.com/photos/17931812/pexels-photo-17931812.jpeg" },
  { key: "journeys/mozambique-ilha-gallery1.jpg", url: "https://images.pexels.com/photos/16520614/pexels-photo-16520614.jpeg" },
  { key: "journeys/mozambique-ilha-gallery2.jpg", url: "https://images.pexels.com/photos/16520657/pexels-photo-16520657.jpeg" },
  { key: "journeys/mozambique-ilha-gallery3.jpg", url: "https://images.pexels.com/photos/37087441/pexels-photo-37087441.jpeg" },
  { key: "journeys/mozambique-ilha-day1.jpg", url: "https://images.pexels.com/photos/17368124/pexels-photo-17368124.jpeg" },
  { key: "journeys/mozambique-ilha-day2.jpg", url: "https://images.pexels.com/photos/15898680/pexels-photo-15898680.jpeg" },
  { key: "journeys/mozambique-quirimbas-gallery1.jpg", url: "https://images.pexels.com/photos/16156054/pexels-photo-16156054.jpeg" },
  { key: "journeys/mozambique-quirimbas-gallery2.jpg", url: "https://images.pexels.com/photos/33243110/pexels-photo-33243110.jpeg" },
  { key: "journeys/mozambique-quirimbas-gallery3.jpg", url: "https://images.pexels.com/photos/28628306/pexels-photo-28628306.jpeg" },
  { key: "journeys/mozambique-quirimbas-day1.jpg", url: "https://images.pexels.com/photos/37943870/pexels-photo-37943870.jpeg" },
  { key: "journeys/mozambique-quirimbas-day2.jpg", url: "https://images.pexels.com/photos/19758822/pexels-photo-19758822.jpeg" },

  // -- Standard trip: "Malawi : le plateau du Nyika, l'Afrique en altitude" --
  { key: "tours/malawi-plateau-nyika.jpg", url: "https://images.pexels.com/photos/1764556/pexels-photo-1764556.jpeg" },
  { key: "trips/malawi-nyika-gallery-1.jpg", url: "https://images.pexels.com/photos/29698260/pexels-photo-29698260.jpeg" },
  { key: "trips/malawi-nyika-gallery-2.jpg", url: "https://images.pexels.com/photos/36174042/pexels-photo-36174042.jpeg" },
  { key: "trips/malawi-nyika-gallery-3.jpg", url: "https://images.pexels.com/photos/27037858/pexels-photo-27037858.jpeg" },
  { key: "trips/malawi-nyika-gallery-4.jpg", url: "https://images.pexels.com/photos/4180912/pexels-photo-4180912.jpeg" },
  { key: "trips/malawi-nyika-gallery-5.jpg", url: "https://images.pexels.com/photos/7280784/pexels-photo-7280784.jpeg" },
  { key: "trips/malawi-nyika-gallery-6.jpg", url: "https://images.pexels.com/photos/8026005/pexels-photo-8026005.jpeg" },
  { key: "trips/malawi-nyika-hotel-lodge.jpg", url: "https://images.pexels.com/photos/99820/pexels-photo-99820.jpeg" },
  { key: "trips/malawi-nyika-hotel-camp.jpg", url: "https://images.pexels.com/photos/36174042/pexels-photo-36174042.jpeg" },

  // -- Journey trip: "Malawi : Majete et le mont Mulanje" --
  { key: "journeys/malawi-majete-hero.jpg", url: "https://images.pexels.com/photos/26382010/pexels-photo-26382010.jpeg" },
  { key: "journeys/malawi-majete-gallery1.jpg", url: "https://images.pexels.com/photos/26769766/pexels-photo-26769766.jpeg" },
  { key: "journeys/malawi-majete-gallery2.jpg", url: "https://images.pexels.com/photos/26442830/pexels-photo-26442830.jpeg" },
  { key: "journeys/malawi-majete-gallery3.jpg", url: "https://images.pexels.com/photos/35413120/pexels-photo-35413120.jpeg" },
  { key: "journeys/malawi-majete-day1.jpg", url: "https://images.pexels.com/photos/31322900/pexels-photo-31322900.jpeg" },
  { key: "journeys/malawi-majete-day2.jpg", url: "https://images.pexels.com/photos/37551704/pexels-photo-37551704.jpeg" },
  { key: "journeys/malawi-mulanje-gallery1.jpg", url: "https://images.pexels.com/photos/34025336/pexels-photo-34025336.jpeg" },
  { key: "journeys/malawi-mulanje-gallery2.jpg", url: "https://images.pexels.com/photos/35735046/pexels-photo-35735046.jpeg" },
  { key: "journeys/malawi-mulanje-gallery3.jpg", url: "https://images.pexels.com/photos/30534343/pexels-photo-30534343.jpeg" },
  { key: "journeys/malawi-mulanje-day1.jpg", url: "https://images.pexels.com/photos/31537320/pexels-photo-31537320.jpeg" },
  { key: "journeys/malawi-mulanje-day2.jpg", url: "https://images.pexels.com/photos/38221705/pexels-photo-38221705.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/africa-3.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
