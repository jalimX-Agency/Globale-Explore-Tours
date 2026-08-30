// Amérique du Sud batch 1 — Argentina, Chile, Peru. Sourced from Pexels (free commercial
// license, no attribution required) via WebFetch on pexels.com search pages, then verified
// live with a direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-amerique-du-sud-1.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Argentine : Mendoza, le vignoble au pied des Andes" --
  { key: "tours/argentine-mendoza.jpg", url: "https://images.pexels.com/photos/31025244/pexels-photo-31025244.jpeg" },
  { key: "trips/argentine-mendoza-gallery-1.jpg", url: "https://images.pexels.com/photos/38896296/pexels-photo-38896296.jpeg" },
  { key: "trips/argentine-mendoza-gallery-2.jpg", url: "https://images.pexels.com/photos/31025236/pexels-photo-31025236.jpeg" },
  { key: "trips/argentine-mendoza-gallery-3.jpg", url: "https://images.pexels.com/photos/19046646/pexels-photo-19046646.jpeg" },
  { key: "trips/argentine-mendoza-gallery-4.jpg", url: "https://images.pexels.com/photos/24805041/pexels-photo-24805041.jpeg" },
  { key: "trips/argentine-mendoza-gallery-5.jpg", url: "https://images.pexels.com/photos/15337404/pexels-photo-15337404.jpeg" },
  { key: "trips/argentine-mendoza-gallery-6.jpg", url: "https://images.pexels.com/photos/15395246/pexels-photo-15395246.jpeg" },
  { key: "trips/argentine-mendoza-hotel-cavas.jpg", url: "https://images.pexels.com/photos/6532155/pexels-photo-6532155.jpeg" },
  { key: "trips/argentine-mendoza-hotel-diplomatic.jpg", url: "https://images.pexels.com/photos/37790193/pexels-photo-37790193.jpeg" },

  // -- Journey trip: "Argentine : Iguazu et le Nord-Ouest andin" --
  { key: "journeys/argentine-iguazu-noroeste-hero.jpg", url: "https://images.pexels.com/photos/33950105/pexels-photo-33950105.jpeg" },
  { key: "journeys/argentine-iguazu-gallery1.jpg", url: "https://images.pexels.com/photos/92743/pexels-photo-92743.jpeg" },
  { key: "journeys/argentine-iguazu-gallery2.jpg", url: "https://images.pexels.com/photos/26971428/pexels-photo-26971428.jpeg" },
  { key: "journeys/argentine-iguazu-gallery3.jpg", url: "https://images.pexels.com/photos/6942697/pexels-photo-6942697.jpeg" },
  { key: "journeys/argentine-iguazu-day1.jpg", url: "https://images.pexels.com/photos/623174/pexels-photo-623174.jpeg" },
  { key: "journeys/argentine-iguazu-day2.jpg", url: "https://images.pexels.com/photos/36839861/pexels-photo-36839861.jpeg" },
  { key: "journeys/argentine-noroeste-gallery1.jpg", url: "https://images.pexels.com/photos/5542897/pexels-photo-5542897.jpeg" },
  { key: "journeys/argentine-noroeste-gallery2.jpg", url: "https://images.pexels.com/photos/5855005/pexels-photo-5855005.jpeg" },
  { key: "journeys/argentine-noroeste-gallery3.jpg", url: "https://images.pexels.com/photos/4613200/pexels-photo-4613200.jpeg" },
  { key: "journeys/argentine-noroeste-day1.jpg", url: "https://images.pexels.com/photos/5801905/pexels-photo-5801905.jpeg" },
  { key: "journeys/argentine-noroeste-day2.jpg", url: "https://images.pexels.com/photos/5606491/pexels-photo-5606491.jpeg" },

  // -- Standard trip: "Chili : Torres del Paine, la Patagonie australe" --
  { key: "tours/chili-torres-del-paine.jpg", url: "https://images.pexels.com/photos/66092/pexels-photo-66092.jpeg" },
  { key: "trips/chili-paine-gallery-1.jpg", url: "https://images.pexels.com/photos/12106778/pexels-photo-12106778.jpeg" },
  { key: "trips/chili-paine-gallery-2.jpg", url: "https://images.pexels.com/photos/7499997/pexels-photo-7499997.jpeg" },
  { key: "trips/chili-paine-gallery-3.jpg", url: "https://images.pexels.com/photos/26627956/pexels-photo-26627956.jpeg" },
  { key: "trips/chili-paine-gallery-4.jpg", url: "https://images.pexels.com/photos/4599300/pexels-photo-4599300.jpeg" },
  { key: "trips/chili-paine-gallery-5.jpg", url: "https://images.pexels.com/photos/18823718/pexels-photo-18823718.jpeg" },
  { key: "trips/chili-paine-gallery-6.jpg", url: "https://images.pexels.com/photos/36164471/pexels-photo-36164471.jpeg" },
  { key: "trips/chili-paine-hotel-explora.jpg", url: "https://images.pexels.com/photos/14579403/pexels-photo-14579403.jpeg" },
  { key: "trips/chili-paine-hotel-patagoniacamp.jpg", url: "https://images.pexels.com/photos/24805041/pexels-photo-24805041.jpeg" },

  // -- Journey trip: "Chili : l'île de Pâques et l'archipel de Chiloé" --
  { key: "journeys/chili-pascua-chiloe-hero.jpg", url: "https://images.pexels.com/photos/19701497/pexels-photo-19701497.jpeg" },
  { key: "journeys/chili-pascua-gallery1.jpg", url: "https://images.pexels.com/photos/33111981/pexels-photo-33111981.jpeg" },
  { key: "journeys/chili-pascua-gallery2.jpg", url: "https://images.pexels.com/photos/14635524/pexels-photo-14635524.jpeg" },
  { key: "journeys/chili-pascua-gallery3.jpg", url: "https://images.pexels.com/photos/33083028/pexels-photo-33083028.jpeg" },
  { key: "journeys/chili-pascua-day1.jpg", url: "https://images.pexels.com/photos/27878353/pexels-photo-27878353.jpeg" },
  { key: "journeys/chili-pascua-day2.jpg", url: "https://images.pexels.com/photos/33125875/pexels-photo-33125875.jpeg" },
  { key: "journeys/chili-chiloe-gallery1.jpg", url: "https://images.pexels.com/photos/7213869/pexels-photo-7213869.jpeg" },
  { key: "journeys/chili-chiloe-gallery2.jpg", url: "https://images.pexels.com/photos/36186978/pexels-photo-36186978.jpeg" },
  { key: "journeys/chili-chiloe-gallery3.jpg", url: "https://images.pexels.com/photos/36186943/pexels-photo-36186943.jpeg" },
  { key: "journeys/chili-chiloe-day1.jpg", url: "https://images.pexels.com/photos/10142472/pexels-photo-10142472.jpeg" },
  { key: "journeys/chili-chiloe-day2.jpg", url: "https://images.pexels.com/photos/20521123/pexels-photo-20521123.jpeg" },

  // -- Standard trip: "Pérou : l'Amazonie, sur les traces du fleuve" --
  { key: "tours/perou-amazonie.jpg", url: "https://images.pexels.com/photos/16094393/pexels-photo-16094393.jpeg" },
  { key: "trips/perou-amazonie-gallery-1.jpg", url: "https://images.pexels.com/photos/17862061/pexels-photo-17862061.jpeg" },
  { key: "trips/perou-amazonie-gallery-2.jpg", url: "https://images.pexels.com/photos/37812265/pexels-photo-37812265.jpeg" },
  { key: "trips/perou-amazonie-gallery-3.jpg", url: "https://images.pexels.com/photos/38719481/pexels-photo-38719481.jpeg" },
  { key: "trips/perou-amazonie-gallery-4.jpg", url: "https://images.pexels.com/photos/33570693/pexels-photo-33570693.jpeg" },
  { key: "trips/perou-amazonie-gallery-5.jpg", url: "https://images.pexels.com/photos/37812273/pexels-photo-37812273.jpeg" },
  { key: "trips/perou-amazonie-gallery-6.jpg", url: "https://images.pexels.com/photos/30205697/pexels-photo-30205697.jpeg" },
  { key: "trips/perou-amazonie-hotel-inkaterra.jpg", url: "https://images.pexels.com/photos/17862062/pexels-photo-17862062.jpeg" },
  { key: "trips/perou-amazonie-hotel-refugio.jpg", url: "https://images.pexels.com/photos/36349806/pexels-photo-36349806.jpeg" },

  // -- Journey trip: "Pérou : le lac Titicaca et le canyon de Colca" --
  { key: "journeys/perou-titicaca-colca-hero.jpg", url: "https://images.pexels.com/photos/34057369/pexels-photo-34057369.jpeg" },
  { key: "journeys/perou-titicaca-gallery1.jpg", url: "https://images.pexels.com/photos/34057358/pexels-photo-34057358.jpeg" },
  { key: "journeys/perou-titicaca-gallery2.jpg", url: "https://images.pexels.com/photos/28034052/pexels-photo-28034052.jpeg" },
  { key: "journeys/perou-titicaca-gallery3.jpg", url: "https://images.pexels.com/photos/19032103/pexels-photo-19032103.jpeg" },
  { key: "journeys/perou-titicaca-day1.jpg", url: "https://images.pexels.com/photos/16881400/pexels-photo-16881400.jpeg" },
  { key: "journeys/perou-titicaca-day2.jpg", url: "https://images.pexels.com/photos/34053243/pexels-photo-34053243.jpeg" },
  { key: "journeys/perou-colca-gallery1.jpg", url: "https://images.pexels.com/photos/6447942/pexels-photo-6447942.jpeg" },
  { key: "journeys/perou-colca-gallery2.jpg", url: "https://images.pexels.com/photos/13448291/pexels-photo-13448291.jpeg" },
  { key: "journeys/perou-colca-gallery3.jpg", url: "https://images.pexels.com/photos/5503142/pexels-photo-5503142.jpeg" },
  { key: "journeys/perou-colca-day1.jpg", url: "https://images.pexels.com/photos/35690160/pexels-photo-35690160.jpeg" },
  { key: "journeys/perou-colca-day2.jpg", url: "https://images.pexels.com/photos/10906882/pexels-photo-10906882.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/amerique-du-sud-1.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
