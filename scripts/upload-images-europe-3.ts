export {};

// Europe batch 3 (Portugal, Croatie, Suisse). Sources and uploads every image referenced by
// scripts/seed-trips-europe-3.ts. Run this first; the seed script refuses to write anything
// if a referenced image isn't already live.
//   npx tsx scripts/upload-images-europe-3.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Portugal : les Açores, São Miguel (standard) ---
    { key: "tours/portugal-acores-sao-miguel.jpg", url: "https://images.pexels.com/photos/29141707/pexels-photo-29141707.jpeg" },
    { key: "trips/portugal-acores-gallery-1.jpg", url: "https://images.pexels.com/photos/121087/pexels-photo-121087.jpeg" },
    { key: "trips/portugal-acores-gallery-2.jpg", url: "https://images.pexels.com/photos/26757530/pexels-photo-26757530.jpeg" },
    { key: "trips/portugal-acores-gallery-3.jpg", url: "https://images.pexels.com/photos/34854390/pexels-photo-34854390.jpeg" },
    { key: "trips/portugal-acores-gallery-4.jpg", url: "https://images.pexels.com/photos/17731160/pexels-photo-17731160.jpeg" },
    { key: "trips/portugal-acores-gallery-5.jpg", url: "https://images.pexels.com/photos/29141707/pexels-photo-29141707.jpeg" },
    { key: "trips/portugal-acores-gallery-6.jpg", url: "https://images.pexels.com/photos/121087/pexels-photo-121087.jpeg" },
    { key: "trips/portugal-acores-hotel-1.jpg", url: "https://images.pexels.com/photos/26757530/pexels-photo-26757530.jpeg" },
    { key: "trips/portugal-acores-hotel-2.jpg", url: "https://images.pexels.com/photos/34854390/pexels-photo-34854390.jpeg" },

    // --- Portugal : Sintra et l'Algarve (journey) ---
    { key: "journeys/portugal-sintra-algarve-hero.jpg", url: "https://images.pexels.com/photos/5511316/pexels-photo-5511316.jpeg" },
    { key: "journeys/portugal-sintra-gallery1.jpg", url: "https://images.pexels.com/photos/26646250/pexels-photo-26646250.jpeg" },
    { key: "journeys/portugal-sintra-gallery2.jpg", url: "https://images.pexels.com/photos/37401240/pexels-photo-37401240.jpeg" },
    { key: "journeys/portugal-sintra-gallery3.jpg", url: "https://images.pexels.com/photos/11724099/pexels-photo-11724099.jpeg" },
    { key: "journeys/portugal-sintra-day1.jpg", url: "https://images.pexels.com/photos/5511316/pexels-photo-5511316.jpeg" },
    { key: "journeys/portugal-sintra-day2.jpg", url: "https://images.pexels.com/photos/36599721/pexels-photo-36599721.jpeg" },
    { key: "journeys/portugal-algarve-gallery1.jpg", url: "https://images.pexels.com/photos/18720876/pexels-photo-18720876.jpeg" },
    { key: "journeys/portugal-algarve-gallery2.jpg", url: "https://images.pexels.com/photos/28429329/pexels-photo-28429329.jpeg" },
    { key: "journeys/portugal-algarve-gallery3.jpg", url: "https://images.pexels.com/photos/36701165/pexels-photo-36701165.jpeg" },
    { key: "journeys/portugal-algarve-day1.jpg", url: "https://images.pexels.com/photos/6073579/pexels-photo-6073579.jpeg" },
    { key: "journeys/portugal-algarve-day2.jpg", url: "https://images.pexels.com/photos/37013876/pexels-photo-37013876.jpeg" },

    // --- Croatie : l'Istrie, Rovinj (standard) ---
    { key: "tours/croatie-istrie-rovinj.jpg", url: "https://images.pexels.com/photos/33676833/pexels-photo-33676833.jpeg" },
    { key: "trips/croatie-istrie-gallery-1.jpg", url: "https://images.pexels.com/photos/36230973/pexels-photo-36230973.jpeg" },
    { key: "trips/croatie-istrie-gallery-2.jpg", url: "https://images.pexels.com/photos/12336439/pexels-photo-12336439.jpeg" },
    { key: "trips/croatie-istrie-gallery-3.jpg", url: "https://images.pexels.com/photos/33676820/pexels-photo-33676820.jpeg" },
    { key: "trips/croatie-istrie-gallery-4.jpg", url: "https://images.pexels.com/photos/36074762/pexels-photo-36074762.jpeg" },
    { key: "trips/croatie-istrie-gallery-5.jpg", url: "https://images.pexels.com/photos/10914418/pexels-photo-10914418.jpeg" },
    { key: "trips/croatie-istrie-gallery-6.jpg", url: "https://images.pexels.com/photos/38817489/pexels-photo-38817489.jpeg" },
    { key: "trips/croatie-istrie-hotel-1.jpg", url: "https://images.pexels.com/photos/33676833/pexels-photo-33676833.jpeg" },
    { key: "trips/croatie-istrie-hotel-2.jpg", url: "https://images.pexels.com/photos/36230973/pexels-photo-36230973.jpeg" },

    // --- Croatie : Zadar et les îles Kornati (journey) ---
    { key: "journeys/croatie-zadar-kornati-hero.jpg", url: "https://images.pexels.com/photos/17268865/pexels-photo-17268865.jpeg" },
    { key: "journeys/croatie-zadar-gallery1.jpg", url: "https://images.pexels.com/photos/32965999/pexels-photo-32965999.jpeg" },
    { key: "journeys/croatie-zadar-gallery2.jpg", url: "https://images.pexels.com/photos/39076867/pexels-photo-39076867.jpeg" },
    { key: "journeys/croatie-zadar-gallery3.jpg", url: "https://images.pexels.com/photos/17268871/pexels-photo-17268871.jpeg" },
    { key: "journeys/croatie-zadar-day1.jpg", url: "https://images.pexels.com/photos/17268879/pexels-photo-17268879.jpeg" },
    { key: "journeys/croatie-zadar-day2.jpg", url: "https://images.pexels.com/photos/32966130/pexels-photo-32966130.jpeg" },
    { key: "journeys/croatie-kornati-gallery1.jpg", url: "https://images.pexels.com/photos/6547045/pexels-photo-6547045.jpeg" },
    { key: "journeys/croatie-kornati-gallery2.jpg", url: "https://images.pexels.com/photos/5306582/pexels-photo-5306582.jpeg" },
    { key: "journeys/croatie-kornati-gallery3.jpg", url: "https://images.pexels.com/photos/30064500/pexels-photo-30064500.jpeg" },
    { key: "journeys/croatie-kornati-day1.jpg", url: "https://images.pexels.com/photos/30492415/pexels-photo-30492415.jpeg" },
    { key: "journeys/croatie-kornati-day2.jpg", url: "https://images.pexels.com/photos/5457972/pexels-photo-5457972.jpeg" },

    // --- Suisse : Interlaken et la Jungfrau (standard) ---
    { key: "tours/suisse-interlaken-jungfrau.jpg", url: "https://images.pexels.com/photos/37995173/pexels-photo-37995173.jpeg" },
    { key: "trips/suisse-interlaken-gallery-1.jpg", url: "https://images.pexels.com/photos/35282293/pexels-photo-35282293.jpeg" },
    { key: "trips/suisse-interlaken-gallery-2.jpg", url: "https://images.pexels.com/photos/5742863/pexels-photo-5742863.jpeg" },
    { key: "trips/suisse-interlaken-gallery-3.jpg", url: "https://images.pexels.com/photos/38246288/pexels-photo-38246288.jpeg" },
    { key: "trips/suisse-interlaken-gallery-4.jpg", url: "https://images.pexels.com/photos/32379753/pexels-photo-32379753.jpeg" },
    { key: "trips/suisse-interlaken-gallery-5.jpg", url: "https://images.pexels.com/photos/35282297/pexels-photo-35282297.jpeg" },
    { key: "trips/suisse-interlaken-gallery-6.jpg", url: "https://images.pexels.com/photos/38246288/pexels-photo-38246288.jpeg" },
    { key: "trips/suisse-interlaken-hotel-1.jpg", url: "https://images.pexels.com/photos/27562170/pexels-photo-27562170.jpeg" },
    { key: "trips/suisse-interlaken-hotel-2.jpg", url: "https://images.pexels.com/photos/37995173/pexels-photo-37995173.jpeg" },

    // --- Suisse : le Tessin et l'Appenzell (journey) ---
    { key: "journeys/suisse-ticino-appenzell-hero.jpg", url: "https://images.pexels.com/photos/33847169/pexels-photo-33847169.jpeg" },
    { key: "journeys/suisse-ticino-gallery1.jpg", url: "https://images.pexels.com/photos/33847172/pexels-photo-33847172.jpeg" },
    { key: "journeys/suisse-ticino-gallery2.jpg", url: "https://images.pexels.com/photos/10666137/pexels-photo-10666137.jpeg" },
    { key: "journeys/suisse-ticino-gallery3.jpg", url: "https://images.pexels.com/photos/37732169/pexels-photo-37732169.jpeg" },
    { key: "journeys/suisse-ticino-day1.jpg", url: "https://images.pexels.com/photos/13091887/pexels-photo-13091887.jpeg" },
    { key: "journeys/suisse-ticino-day2.jpg", url: "https://images.pexels.com/photos/1105840/pexels-photo-1105840.jpeg" },
    { key: "journeys/suisse-appenzell-gallery1.jpg", url: "https://images.pexels.com/photos/37716312/pexels-photo-37716312.jpeg" },
    { key: "journeys/suisse-appenzell-gallery2.jpg", url: "https://images.pexels.com/photos/37716315/pexels-photo-37716315.jpeg" },
    { key: "journeys/suisse-appenzell-gallery3.jpg", url: "https://images.pexels.com/photos/34425597/pexels-photo-34425597.jpeg" },
    { key: "journeys/suisse-appenzell-day1.jpg", url: "https://images.pexels.com/photos/33358513/pexels-photo-33358513.jpeg" },
    { key: "journeys/suisse-appenzell-day2.jpg", url: "https://images.pexels.com/photos/34467341/pexels-photo-34467341.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/europe-3.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
