export {};

// Enrichment pass for the 6 existing "Croisières" trips — 4 more gallery images per standard
// trip, 3 more gallery images per journey chapter. Run before
// scripts/enrich-trips-croisieres.ts, which appends these to the existing Tour.images /
// JourneyChapter.galleryImages fields and adds a 3rd TourSection per standard trip.
//   npx tsx scripts/upload-images-croisieres-extra.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Égypte : 4 photos supplémentaires ---
    { key: "trips/egypte-croisiere-gallery-7.jpg", url: "https://images.pexels.com/photos/13211929/pexels-photo-13211929.jpeg" },
    { key: "trips/egypte-croisiere-gallery-8.jpg", url: "https://images.pexels.com/photos/7970796/pexels-photo-7970796.jpeg" },
    { key: "trips/egypte-croisiere-gallery-9.jpg", url: "https://images.pexels.com/photos/3113238/pexels-photo-3113238.jpeg" },
    { key: "trips/egypte-croisiere-gallery-10.jpg", url: "https://images.pexels.com/photos/18894915/pexels-photo-18894915.jpeg" },

    // --- Grèce : 4 photos supplémentaires ---
    { key: "trips/grece-croisiere-gallery-7.jpg", url: "https://images.pexels.com/photos/33851769/pexels-photo-33851769.jpeg" },
    { key: "trips/grece-croisiere-gallery-8.jpg", url: "https://images.pexels.com/photos/35051775/pexels-photo-35051775.jpeg" },
    { key: "trips/grece-croisiere-gallery-9.jpg", url: "https://images.pexels.com/photos/31740844/pexels-photo-31740844.jpeg" },
    { key: "trips/grece-croisiere-gallery-10.jpg", url: "https://images.pexels.com/photos/33276547/pexels-photo-33276547.jpeg" },

    // --- États-Unis : 4 photos supplémentaires ---
    { key: "trips/etats-unis-croisiere-gallery-7.jpg", url: "https://images.pexels.com/photos/13734394/pexels-photo-13734394.jpeg" },
    { key: "trips/etats-unis-croisiere-gallery-8.jpg", url: "https://images.pexels.com/photos/7740312/pexels-photo-7740312.jpeg" },
    { key: "trips/etats-unis-croisiere-gallery-9.jpg", url: "https://images.pexels.com/photos/14157193/pexels-photo-14157193.jpeg" },
    { key: "trips/etats-unis-croisiere-gallery-10.jpg", url: "https://images.pexels.com/photos/13025821/pexels-photo-13025821.jpeg" },

    // --- Norvège : 3 photos supplémentaires par chapitre ---
    { key: "journeys/norvege-croisiere-ch1-gallery4.jpg", url: "https://images.pexels.com/photos/27442122/pexels-photo-27442122.jpeg" },
    { key: "journeys/norvege-croisiere-ch1-gallery5.jpg", url: "https://images.pexels.com/photos/29091101/pexels-photo-29091101.jpeg" },
    { key: "journeys/norvege-croisiere-ch1-gallery6.jpg", url: "https://images.pexels.com/photos/38886447/pexels-photo-38886447.jpeg" },
    { key: "journeys/norvege-croisiere-ch2-gallery4.jpg", url: "https://images.pexels.com/photos/38295125/pexels-photo-38295125.jpeg" },
    { key: "journeys/norvege-croisiere-ch2-gallery5.jpg", url: "https://images.pexels.com/photos/1559402/pexels-photo-1559402.jpeg" },
    { key: "journeys/norvege-croisiere-ch2-gallery6.jpg", url: "https://images.pexels.com/photos/29446421/pexels-photo-29446421.jpeg" },

    // --- Sainte-Lucie : 3 photos supplémentaires par chapitre ---
    { key: "journeys/saintelucie-croisiere-ch1-gallery4.jpg", url: "https://images.pexels.com/photos/2414296/pexels-photo-2414296.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch1-gallery5.jpg", url: "https://images.pexels.com/photos/17126466/pexels-photo-17126466.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch1-gallery6.jpg", url: "https://images.pexels.com/photos/17497597/pexels-photo-17497597.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch2-gallery4.jpg", url: "https://images.pexels.com/photos/27970950/pexels-photo-27970950.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch2-gallery5.jpg", url: "https://images.pexels.com/photos/8597497/pexels-photo-8597497.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch2-gallery6.jpg", url: "https://images.pexels.com/photos/34224471/pexels-photo-34224471.jpeg" },

    // --- Vietnam : 3 photos supplémentaires par chapitre ---
    { key: "journeys/vietnam-croisiere-ch1-gallery4.jpg", url: "https://images.pexels.com/photos/17494950/pexels-photo-17494950.jpeg" },
    { key: "journeys/vietnam-croisiere-ch1-gallery5.jpg", url: "https://images.pexels.com/photos/30634817/pexels-photo-30634817.jpeg" },
    { key: "journeys/vietnam-croisiere-ch1-gallery6.jpg", url: "https://images.pexels.com/photos/7276634/pexels-photo-7276634.jpeg" },
    { key: "journeys/vietnam-croisiere-ch2-gallery4.jpg", url: "https://images.pexels.com/photos/20244788/pexels-photo-20244788.jpeg" },
    { key: "journeys/vietnam-croisiere-ch2-gallery5.jpg", url: "https://images.pexels.com/photos/6348811/pexels-photo-6348811.jpeg" },
    { key: "journeys/vietnam-croisiere-ch2-gallery6.jpg", url: "https://images.pexels.com/photos/5993054/pexels-photo-5993054.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/croisieres-extra.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
