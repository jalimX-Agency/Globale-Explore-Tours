export {};

// Europe batch 2 (Royaume-Uni, Espagne, Grèce). Sources and uploads every image referenced by
// scripts/seed-trips-europe-2.ts. Run this first; the seed script refuses to write anything
// if a referenced image isn't already live.
//   npx tsx scripts/upload-images-europe-2.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Royaume-Uni : les Cornouailles (standard) ---
    { key: "tours/royaume-uni-cornouailles.jpg", url: "https://images.pexels.com/photos/14281759/pexels-photo-14281759.jpeg" },
    { key: "trips/royaume-uni-cornouailles-gallery-1.jpg", url: "https://images.pexels.com/photos/27813693/pexels-photo-27813693.jpeg" },
    { key: "trips/royaume-uni-cornouailles-gallery-2.jpg", url: "https://images.pexels.com/photos/28446121/pexels-photo-28446121.jpeg" },
    { key: "trips/royaume-uni-cornouailles-gallery-3.jpg", url: "https://images.pexels.com/photos/10694225/pexels-photo-10694225.jpeg" },
    { key: "trips/royaume-uni-cornouailles-gallery-4.jpg", url: "https://images.pexels.com/photos/27813681/pexels-photo-27813681.jpeg" },
    { key: "trips/royaume-uni-cornouailles-gallery-5.jpg", url: "https://images.pexels.com/photos/28446121/pexels-photo-28446121.jpeg" },
    { key: "trips/royaume-uni-cornouailles-gallery-6.jpg", url: "https://images.pexels.com/photos/27813699/pexels-photo-27813699.jpeg" },
    { key: "trips/royaume-uni-cornouailles-hotel-1.jpg", url: "https://images.pexels.com/photos/3353810/pexels-photo-3353810.jpeg" },
    { key: "trips/royaume-uni-cornouailles-hotel-2.jpg", url: "https://images.pexels.com/photos/27813693/pexels-photo-27813693.jpeg" },

    // --- Royaume-Uni : le pays de Galles et le Lake District (journey) ---
    { key: "journeys/royaume-uni-galles-lakedistrict-hero.jpg", url: "https://images.pexels.com/photos/19952904/pexels-photo-19952904.jpeg" },
    { key: "journeys/royaume-uni-galles-gallery1.jpg", url: "https://images.pexels.com/photos/12488675/pexels-photo-12488675.jpeg" },
    { key: "journeys/royaume-uni-galles-gallery2.jpg", url: "https://images.pexels.com/photos/12488676/pexels-photo-12488676.jpeg" },
    { key: "journeys/royaume-uni-galles-gallery3.jpg", url: "https://images.pexels.com/photos/5582920/pexels-photo-5582920.jpeg" },
    { key: "journeys/royaume-uni-galles-day1.jpg", url: "https://images.pexels.com/photos/5036289/pexels-photo-5036289.jpeg" },
    { key: "journeys/royaume-uni-galles-day2.jpg", url: "https://images.pexels.com/photos/2127925/pexels-photo-2127925.jpeg" },
    { key: "journeys/royaume-uni-lakedistrict-gallery1.jpg", url: "https://images.pexels.com/photos/19952904/pexels-photo-19952904.jpeg" },
    { key: "journeys/royaume-uni-lakedistrict-gallery2.jpg", url: "https://images.pexels.com/photos/19952931/pexels-photo-19952931.jpeg" },
    { key: "journeys/royaume-uni-lakedistrict-gallery3.jpg", url: "https://images.pexels.com/photos/19952903/pexels-photo-19952903.jpeg" },
    { key: "journeys/royaume-uni-lakedistrict-day1.jpg", url: "https://images.pexels.com/photos/36178201/pexels-photo-36178201.jpeg" },
    { key: "journeys/royaume-uni-lakedistrict-day2.jpg", url: "https://images.pexels.com/photos/34554379/pexels-photo-34554379.jpeg" },

    // --- Espagne : le Pays basque, Saint-Sébastien (standard) ---
    { key: "tours/espagne-pays-basque.jpg", url: "https://images.pexels.com/photos/38542113/pexels-photo-38542113.jpeg" },
    { key: "trips/espagne-paysbasque-gallery-1.jpg", url: "https://images.pexels.com/photos/38542114/pexels-photo-38542114.jpeg" },
    { key: "trips/espagne-paysbasque-gallery-2.jpg", url: "https://images.pexels.com/photos/17870219/pexels-photo-17870219.jpeg" },
    { key: "trips/espagne-paysbasque-gallery-3.jpg", url: "https://images.pexels.com/photos/38542118/pexels-photo-38542118.jpeg" },
    { key: "trips/espagne-paysbasque-gallery-4.jpg", url: "https://images.pexels.com/photos/38619400/pexels-photo-38619400.jpeg" },
    { key: "trips/espagne-paysbasque-gallery-5.jpg", url: "https://images.pexels.com/photos/6415905/pexels-photo-6415905.jpeg" },
    { key: "trips/espagne-paysbasque-gallery-6.jpg", url: "https://images.pexels.com/photos/28400311/pexels-photo-28400311.jpeg" },
    { key: "trips/espagne-paysbasque-hotel-1.jpg", url: "https://images.pexels.com/photos/38542127/pexels-photo-38542127.jpeg" },
    { key: "trips/espagne-paysbasque-hotel-2.jpg", url: "https://images.pexels.com/photos/38542113/pexels-photo-38542113.jpeg" },

    // --- Espagne : les îles Canaries, Tenerife et La Palma (journey) ---
    { key: "journeys/espagne-canaries-hero.jpg", url: "https://images.pexels.com/photos/31277368/pexels-photo-31277368.jpeg" },
    { key: "journeys/espagne-tenerife-gallery1.jpg", url: "https://images.pexels.com/photos/38458683/pexels-photo-38458683.jpeg" },
    { key: "journeys/espagne-tenerife-gallery2.jpg", url: "https://images.pexels.com/photos/28917673/pexels-photo-28917673.jpeg" },
    { key: "journeys/espagne-tenerife-gallery3.jpg", url: "https://images.pexels.com/photos/35513868/pexels-photo-35513868.jpeg" },
    { key: "journeys/espagne-tenerife-day1.jpg", url: "https://images.pexels.com/photos/10550307/pexels-photo-10550307.jpeg" },
    { key: "journeys/espagne-tenerife-day2.jpg", url: "https://images.pexels.com/photos/29845959/pexels-photo-29845959.jpeg" },
    { key: "journeys/espagne-lapalma-gallery1.jpg", url: "https://images.pexels.com/photos/32636714/pexels-photo-32636714.jpeg" },
    { key: "journeys/espagne-lapalma-gallery2.jpg", url: "https://images.pexels.com/photos/32636712/pexels-photo-32636712.jpeg" },
    { key: "journeys/espagne-lapalma-gallery3.jpg", url: "https://images.pexels.com/photos/32636710/pexels-photo-32636710.jpeg" },
    { key: "journeys/espagne-lapalma-day1.jpg", url: "https://images.pexels.com/photos/32636712/pexels-photo-32636712.jpeg" },
    { key: "journeys/espagne-lapalma-day2.jpg", url: "https://images.pexels.com/photos/11827206/pexels-photo-11827206.jpeg" },

    // --- Grèce : la Crète (standard) ---
    { key: "tours/grece-crete.jpg", url: "https://images.pexels.com/photos/38906527/pexels-photo-38906527.jpeg" },
    { key: "trips/grece-crete-gallery-1.jpg", url: "https://images.pexels.com/photos/37958492/pexels-photo-37958492.jpeg" },
    { key: "trips/grece-crete-gallery-2.jpg", url: "https://images.pexels.com/photos/18730919/pexels-photo-18730919.jpeg" },
    { key: "trips/grece-crete-gallery-3.jpg", url: "https://images.pexels.com/photos/14322617/pexels-photo-14322617.jpeg" },
    { key: "trips/grece-crete-gallery-4.jpg", url: "https://images.pexels.com/photos/18192908/pexels-photo-18192908.jpeg" },
    { key: "trips/grece-crete-gallery-5.jpg", url: "https://images.pexels.com/photos/19930011/pexels-photo-19930011.jpeg" },
    { key: "trips/grece-crete-gallery-6.jpg", url: "https://images.pexels.com/photos/19153766/pexels-photo-19153766.jpeg" },
    { key: "trips/grece-crete-hotel-1.jpg", url: "https://images.pexels.com/photos/17603759/pexels-photo-17603759.jpeg" },
    { key: "trips/grece-crete-hotel-2.jpg", url: "https://images.pexels.com/photos/13422715/pexels-photo-13422715.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/europe-2.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
