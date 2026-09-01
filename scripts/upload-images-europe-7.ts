export {};

// Europe batch 7 (Géorgie, Malte, Monténégro). Sources and uploads every image referenced by
// scripts/seed-trips-europe-7.ts. Run this first; the seed script refuses to write anything
// if a referenced image isn't already live.
//   npx tsx scripts/upload-images-europe-7.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Géorgie : la Kakhétie viticole (standard) ---
    { key: "tours/georgie-kakhetie-vin.jpg", url: "https://images.pexels.com/photos/9562380/pexels-photo-9562380.jpeg" },
    { key: "trips/georgie-kakhetie-gallery-1.jpg", url: "https://images.pexels.com/photos/8747714/pexels-photo-8747714.jpeg" },
    { key: "trips/georgie-kakhetie-gallery-2.jpg", url: "https://images.pexels.com/photos/5140586/pexels-photo-5140586.jpeg" },
    { key: "trips/georgie-kakhetie-gallery-3.jpg", url: "https://images.pexels.com/photos/4639048/pexels-photo-4639048.jpeg" },
    { key: "trips/georgie-kakhetie-gallery-4.jpg", url: "https://images.pexels.com/photos/39297086/pexels-photo-39297086.jpeg" },
    { key: "trips/georgie-kakhetie-gallery-5.jpg", url: "https://images.pexels.com/photos/32300797/pexels-photo-32300797.jpeg" },
    { key: "trips/georgie-kakhetie-gallery-6.jpg", url: "https://images.pexels.com/photos/37825622/pexels-photo-37825622.jpeg" },
    { key: "trips/georgie-kakhetie-hotel-1.jpg", url: "https://images.pexels.com/photos/15717924/pexels-photo-15717924.jpeg" },
    { key: "trips/georgie-kakhetie-hotel-2.jpg", url: "https://images.pexels.com/photos/6466236/pexels-photo-6466236.jpeg" },

    // --- Géorgie : la Svanétie et le Kazbek (journey) ---
    { key: "journeys/georgie-svanetie-kazbek-hero.jpg", url: "https://images.pexels.com/photos/4639152/pexels-photo-4639152.jpeg" },
    { key: "journeys/georgie-svanetie-gallery1.jpg", url: "https://images.pexels.com/photos/2990832/pexels-photo-2990832.jpeg" },
    { key: "journeys/georgie-svanetie-gallery2.jpg", url: "https://images.pexels.com/photos/33334107/pexels-photo-33334107.jpeg" },
    { key: "journeys/georgie-svanetie-gallery3.jpg", url: "https://images.pexels.com/photos/8747700/pexels-photo-8747700.jpeg" },
    { key: "journeys/georgie-svanetie-day1.jpg", url: "https://images.pexels.com/photos/4639196/pexels-photo-4639196.jpeg" },
    { key: "journeys/georgie-svanetie-day2.jpg", url: "https://images.pexels.com/photos/4639135/pexels-photo-4639135.jpeg" },
    { key: "journeys/georgie-kazbek-gallery1.jpg", url: "https://images.pexels.com/photos/32898925/pexels-photo-32898925.jpeg" },
    { key: "journeys/georgie-kazbek-gallery2.jpg", url: "https://images.pexels.com/photos/4383690/pexels-photo-4383690.jpeg" },
    { key: "journeys/georgie-kazbek-gallery3.jpg", url: "https://images.pexels.com/photos/31623485/pexels-photo-31623485.jpeg" },
    { key: "journeys/georgie-kazbek-day1.jpg", url: "https://images.pexels.com/photos/27792616/pexels-photo-27792616.jpeg" },
    { key: "journeys/georgie-kazbek-day2.jpg", url: "https://images.pexels.com/photos/34337063/pexels-photo-34337063.jpeg" },

    // --- Malte : l'île de Gozo (standard) ---
    { key: "tours/malte-gozo.jpg", url: "https://images.pexels.com/photos/34694003/pexels-photo-34694003.jpeg" },
    { key: "trips/malte-gozo-gallery-1.jpg", url: "https://images.pexels.com/photos/38724900/pexels-photo-38724900.jpeg" },
    { key: "trips/malte-gozo-gallery-2.jpg", url: "https://images.pexels.com/photos/6159117/pexels-photo-6159117.jpeg" },
    { key: "trips/malte-gozo-gallery-3.jpg", url: "https://images.pexels.com/photos/35713077/pexels-photo-35713077.jpeg" },
    { key: "trips/malte-gozo-gallery-4.jpg", url: "https://images.pexels.com/photos/37845478/pexels-photo-37845478.jpeg" },
    { key: "trips/malte-gozo-gallery-5.jpg", url: "https://images.pexels.com/photos/18489579/pexels-photo-18489579.jpeg" },
    { key: "trips/malte-gozo-gallery-6.jpg", url: "https://images.pexels.com/photos/36908396/pexels-photo-36908396.jpeg" },
    { key: "trips/malte-gozo-hotel-1.jpg", url: "https://images.pexels.com/photos/3926334/pexels-photo-3926334.jpeg" },
    { key: "trips/malte-gozo-hotel-2.jpg", url: "https://images.pexels.com/photos/28247932/pexels-photo-28247932.jpeg" },

    // --- Malte : La Valette et Marsaxlokk (journey) ---
    { key: "journeys/malte-valette-marsaxlokk-hero.jpg", url: "https://images.pexels.com/photos/7664714/pexels-photo-7664714.jpeg" },
    { key: "journeys/malte-valette-gallery1.jpg", url: "https://images.pexels.com/photos/17404652/pexels-photo-17404652.jpeg" },
    { key: "journeys/malte-valette-gallery2.jpg", url: "https://images.pexels.com/photos/16580686/pexels-photo-16580686.jpeg" },
    { key: "journeys/malte-valette-gallery3.jpg", url: "https://images.pexels.com/photos/30160122/pexels-photo-30160122.jpeg" },
    { key: "journeys/malte-valette-day1.jpg", url: "https://images.pexels.com/photos/17667771/pexels-photo-17667771.jpeg" },
    { key: "journeys/malte-valette-day2.jpg", url: "https://images.pexels.com/photos/36832033/pexels-photo-36832033.jpeg" },
    { key: "journeys/malte-marsaxlokk-gallery1.jpg", url: "https://images.pexels.com/photos/7587265/pexels-photo-7587265.jpeg" },
    { key: "journeys/malte-marsaxlokk-gallery2.jpg", url: "https://images.pexels.com/photos/19725918/pexels-photo-19725918.jpeg" },
    { key: "journeys/malte-marsaxlokk-gallery3.jpg", url: "https://images.pexels.com/photos/34065721/pexels-photo-34065721.jpeg" },
    { key: "journeys/malte-marsaxlokk-day1.jpg", url: "https://images.pexels.com/photos/20227898/pexels-photo-20227898.jpeg" },
    { key: "journeys/malte-marsaxlokk-day2.jpg", url: "https://images.pexels.com/photos/8090943/pexels-photo-8090943.jpeg" },

    // --- Monténégro : la baie de Kotor (standard) ---
    { key: "tours/montenegro-baie-kotor.jpg", url: "https://images.pexels.com/photos/18924404/pexels-photo-18924404.jpeg" },
    { key: "trips/montenegro-kotor-gallery-1.jpg", url: "https://images.pexels.com/photos/21967149/pexels-photo-21967149.jpeg" },
    { key: "trips/montenegro-kotor-gallery-2.jpg", url: "https://images.pexels.com/photos/21628622/pexels-photo-21628622.jpeg" },
    { key: "trips/montenegro-kotor-gallery-3.jpg", url: "https://images.pexels.com/photos/29284506/pexels-photo-29284506.jpeg" },
    { key: "trips/montenegro-kotor-gallery-4.jpg", url: "https://images.pexels.com/photos/31989354/pexels-photo-31989354.jpeg" },
    { key: "trips/montenegro-kotor-gallery-5.jpg", url: "https://images.pexels.com/photos/13450134/pexels-photo-13450134.jpeg" },
    { key: "trips/montenegro-kotor-gallery-6.jpg", url: "https://images.pexels.com/photos/33222555/pexels-photo-33222555.jpeg" },
    { key: "trips/montenegro-kotor-hotel-1.jpg", url: "https://images.pexels.com/photos/34909685/pexels-photo-34909685.jpeg" },
    { key: "trips/montenegro-kotor-hotel-2.jpg", url: "https://images.pexels.com/photos/32168943/pexels-photo-32168943.jpeg" },

    // --- Monténégro : le Durmitor et le Lovćen (journey) ---
    { key: "journeys/montenegro-durmitor-lovcen-hero.jpg", url: "https://images.pexels.com/photos/37876088/pexels-photo-37876088.jpeg" },
    { key: "journeys/montenegro-durmitor-gallery1.jpg", url: "https://images.pexels.com/photos/13535605/pexels-photo-13535605.jpeg" },
    { key: "journeys/montenegro-durmitor-gallery2.jpg", url: "https://images.pexels.com/photos/12194995/pexels-photo-12194995.jpeg" },
    { key: "journeys/montenegro-durmitor-gallery3.jpg", url: "https://images.pexels.com/photos/11133383/pexels-photo-11133383.jpeg" },
    { key: "journeys/montenegro-durmitor-day1.jpg", url: "https://images.pexels.com/photos/12384267/pexels-photo-12384267.jpeg" },
    { key: "journeys/montenegro-durmitor-day2.jpg", url: "https://images.pexels.com/photos/5710778/pexels-photo-5710778.jpeg" },
    { key: "journeys/montenegro-lovcen-gallery1.jpg", url: "https://images.pexels.com/photos/14227346/pexels-photo-14227346.jpeg" },
    { key: "journeys/montenegro-lovcen-gallery2.jpg", url: "https://images.pexels.com/photos/12271247/pexels-photo-12271247.jpeg" },
    { key: "journeys/montenegro-lovcen-gallery3.jpg", url: "https://images.pexels.com/photos/16218022/pexels-photo-16218022.jpeg" },
    { key: "journeys/montenegro-lovcen-day1.jpg", url: "https://images.pexels.com/photos/12222262/pexels-photo-12222262.jpeg" },
    { key: "journeys/montenegro-lovcen-day2.jpg", url: "https://images.pexels.com/photos/12271244/pexels-photo-12271244.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/europe-7.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
