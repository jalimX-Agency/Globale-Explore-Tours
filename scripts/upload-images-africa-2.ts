// Batch 2 — Madagascar, Ethiopia, Ghana. Sourced from Pexels (free commercial license, no
// attribution required) via WebFetch on pexels.com search pages, then verified live with a
// direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-africa-2.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

// `export {}` forces TS to treat this file as a module (its own scope) rather than a global
// script — without it, `main` below would be a *global* declaration, colliding with any other
// script in this folder that also has no top-level static import and its own `main`.
export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Madagascar : Isalo et le Sud, canyons et lémuriens" --
  { key: "tours/madagascar-isalo-sud.jpg", url: "https://images.pexels.com/photos/6313776/pexels-photo-6313776.jpeg" },
  { key: "trips/madagascar-isalo-gallery-1.jpg", url: "https://images.pexels.com/photos/11183944/pexels-photo-11183944.jpeg" },
  { key: "trips/madagascar-isalo-gallery-2.jpg", url: "https://images.pexels.com/photos/13433509/pexels-photo-13433509.jpeg" },
  { key: "trips/madagascar-isalo-gallery-3.jpg", url: "https://images.pexels.com/photos/37837079/pexels-photo-37837079.jpeg" },
  { key: "trips/madagascar-isalo-gallery-4.jpg", url: "https://images.pexels.com/photos/31849008/pexels-photo-31849008.jpeg" },
  { key: "trips/madagascar-isalo-gallery-5.jpg", url: "https://images.pexels.com/photos/14971618/pexels-photo-14971618.jpeg" },
  { key: "trips/madagascar-isalo-gallery-6.jpg", url: "https://images.pexels.com/photos/21936150/pexels-photo-21936150.jpeg" },
  { key: "trips/madagascar-isalo-hotel-isalo.jpg", url: "https://images.pexels.com/photos/20015727/pexels-photo-20015727.jpeg" },
  { key: "trips/madagascar-isalo-hotel-anja.jpg", url: "https://images.pexels.com/photos/14971606/pexels-photo-14971606.jpeg" },

  // -- Journey trip: "Madagascar : Nosy Be et les îles du Nord" --
  { key: "journeys/madagascar-nosybe-hero.jpg", url: "https://images.pexels.com/photos/5033410/pexels-photo-5033410.jpeg" },
  { key: "journeys/madagascar-nosybe-gallery1.jpg", url: "https://images.pexels.com/photos/26731326/pexels-photo-26731326.jpeg" },
  { key: "journeys/madagascar-nosybe-gallery2.jpg", url: "https://images.pexels.com/photos/34644228/pexels-photo-34644228.jpeg" },
  { key: "journeys/madagascar-nosybe-gallery3.jpg", url: "https://images.pexels.com/photos/3880179/pexels-photo-3880179.jpeg" },
  { key: "journeys/madagascar-nosybe-day1.jpg", url: "https://images.pexels.com/photos/5549114/pexels-photo-5549114.jpeg" },
  { key: "journeys/madagascar-nosybe-day2.jpg", url: "https://images.pexels.com/photos/28628306/pexels-photo-28628306.jpeg" },
  { key: "journeys/madagascar-archipel-gallery1.jpg", url: "https://images.pexels.com/photos/33243110/pexels-photo-33243110.jpeg" },
  { key: "journeys/madagascar-archipel-gallery2.jpg", url: "https://images.pexels.com/photos/6530412/pexels-photo-6530412.jpeg" },
  { key: "journeys/madagascar-archipel-gallery3.jpg", url: "https://images.pexels.com/photos/7905795/pexels-photo-7905795.jpeg" },
  { key: "journeys/madagascar-archipel-day1.jpg", url: "https://images.pexels.com/photos/16156054/pexels-photo-16156054.jpeg" },
  { key: "journeys/madagascar-archipel-day2.jpg", url: "https://images.pexels.com/photos/10154784/pexels-photo-10154784.jpeg" },

  // -- Standard trip: "Éthiopie : la vallée de l'Omo, mosaïque de peuples" --
  { key: "tours/ethiopie-vallee-omo.jpg", url: "https://images.pexels.com/photos/33555011/pexels-photo-33555011.jpeg" },
  { key: "trips/ethiopie-omo-gallery-1.jpg", url: "https://images.pexels.com/photos/28535157/pexels-photo-28535157.jpeg" },
  { key: "trips/ethiopie-omo-gallery-2.jpg", url: "https://images.pexels.com/photos/36861158/pexels-photo-36861158.jpeg" },
  { key: "trips/ethiopie-omo-gallery-3.jpg", url: "https://images.pexels.com/photos/34713521/pexels-photo-34713521.jpeg" },
  { key: "trips/ethiopie-omo-gallery-4.jpg", url: "https://images.pexels.com/photos/34314813/pexels-photo-34314813.jpeg" },
  { key: "trips/ethiopie-omo-gallery-5.jpg", url: "https://images.pexels.com/photos/33360960/pexels-photo-33360960.jpeg" },
  { key: "trips/ethiopie-omo-gallery-6.jpg", url: "https://images.pexels.com/photos/34251963/pexels-photo-34251963.jpeg" },
  { key: "trips/ethiopie-omo-hotel-turmi.jpg", url: "https://images.pexels.com/photos/36962236/pexels-photo-36962236.jpeg" },
  { key: "trips/ethiopie-omo-hotel-jinka.jpg", url: "https://images.pexels.com/photos/33555009/pexels-photo-33555009.jpeg" },

  // -- Journey trip: "Éthiopie : Simien et Gondar, montagnes et châteaux" --
  { key: "journeys/ethiopie-simien-hero.jpg", url: "https://images.pexels.com/photos/25853766/pexels-photo-25853766.jpeg" },
  { key: "journeys/ethiopie-simien-gallery1.jpg", url: "https://images.pexels.com/photos/7002321/pexels-photo-7002321.jpeg" },
  { key: "journeys/ethiopie-simien-gallery2.jpg", url: "https://images.pexels.com/photos/5680868/pexels-photo-5680868.jpeg" },
  { key: "journeys/ethiopie-simien-gallery3.jpg", url: "https://images.pexels.com/photos/7002325/pexels-photo-7002325.jpeg" },
  { key: "journeys/ethiopie-simien-day1.jpg", url: "https://images.pexels.com/photos/27015603/pexels-photo-27015603.jpeg" },
  { key: "journeys/ethiopie-simien-day2.jpg", url: "https://images.pexels.com/photos/7002329/pexels-photo-7002329.jpeg" },
  { key: "journeys/ethiopie-gondar-gallery1.jpg", url: "https://images.pexels.com/photos/17853346/pexels-photo-17853346.jpeg" },
  { key: "journeys/ethiopie-gondar-gallery2.jpg", url: "https://images.pexels.com/photos/39134392/pexels-photo-39134392.jpeg" },
  { key: "journeys/ethiopie-gondar-gallery3.jpg", url: "https://images.pexels.com/photos/15976827/pexels-photo-15976827.jpeg" },
  { key: "journeys/ethiopie-gondar-day1.jpg", url: "https://images.pexels.com/photos/17853346/pexels-photo-17853346.jpeg" },
  { key: "journeys/ethiopie-gondar-day2.jpg", url: "https://images.pexels.com/photos/39134392/pexels-photo-39134392.jpeg" },

  // -- Standard trip: "Ghana : le Nord, savane et mosquées de terre" --
  { key: "tours/ghana-nord-mole.jpg", url: "https://images.pexels.com/photos/18868387/pexels-photo-18868387.jpeg" },
  { key: "trips/ghana-nord-gallery-1.jpg", url: "https://images.pexels.com/photos/14529326/pexels-photo-14529326.jpeg" },
  { key: "trips/ghana-nord-gallery-2.jpg", url: "https://images.pexels.com/photos/11264156/pexels-photo-11264156.jpeg" },
  { key: "trips/ghana-nord-gallery-3.jpg", url: "https://images.pexels.com/photos/31253377/pexels-photo-31253377.jpeg" },
  { key: "trips/ghana-nord-gallery-4.jpg", url: "https://images.pexels.com/photos/25754094/pexels-photo-25754094.jpeg" },
  { key: "trips/ghana-nord-gallery-5.jpg", url: "https://images.pexels.com/photos/4577114/pexels-photo-4577114.jpeg" },
  { key: "trips/ghana-nord-gallery-6.jpg", url: "https://images.pexels.com/photos/38312459/pexels-photo-38312459.jpeg" },
  { key: "trips/ghana-nord-hotel-mole.jpg", url: "https://images.pexels.com/photos/31938883/pexels-photo-31938883.jpeg" },
  { key: "trips/ghana-nord-hotel-tamale.jpg", url: "https://images.pexels.com/photos/32981288/pexels-photo-32981288.jpeg" },

  // -- Journey trip: "Ghana : la région de la Volta, cascades et singes sacrés" --
  { key: "journeys/ghana-volta-hero.jpg", url: "https://images.pexels.com/photos/36127927/pexels-photo-36127927.jpeg" },
  { key: "journeys/ghana-wli-gallery1.jpg", url: "https://images.pexels.com/photos/17233021/pexels-photo-17233021.jpeg" },
  { key: "journeys/ghana-wli-gallery2.jpg", url: "https://images.pexels.com/photos/14284537/pexels-photo-14284537.jpeg" },
  { key: "journeys/ghana-wli-gallery3.jpg", url: "https://images.pexels.com/photos/6965505/pexels-photo-6965505.jpeg" },
  { key: "journeys/ghana-wli-day1.jpg", url: "https://images.pexels.com/photos/14055690/pexels-photo-14055690.jpeg" },
  { key: "journeys/ghana-wli-day2.jpg", url: "https://images.pexels.com/photos/14055692/pexels-photo-14055692.jpeg" },
  { key: "journeys/ghana-tafiatome-gallery1.jpg", url: "https://images.pexels.com/photos/30772653/pexels-photo-30772653.jpeg" },
  { key: "journeys/ghana-tafiatome-gallery2.jpg", url: "https://images.pexels.com/photos/6731681/pexels-photo-6731681.jpeg" },
  { key: "journeys/ghana-tafiatome-gallery3.jpg", url: "https://images.pexels.com/photos/26691985/pexels-photo-26691985.jpeg" },
  { key: "journeys/ghana-tafiatome-day1.jpg", url: "https://images.pexels.com/photos/6731682/pexels-photo-6731682.jpeg" },
  { key: "journeys/ghana-tafiatome-day2.jpg", url: "https://images.pexels.com/photos/6731686/pexels-photo-6731686.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/africa-2.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
