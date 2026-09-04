export {};

// New "Croisières" (cruise) themed trips — Egypt (Red Sea), Greece (Mediterranean), USA (New
// England coast) as standard trips; Norway (fjords), Saint Lucia (Caribbean), Vietnam (Ha Long
// Bay) as journey trips — plus the /experience-types/croisieres landing page hero image.
// Sources and uploads every image referenced by scripts/seed-trips-croisieres.ts and
// scripts/create-experience-type-croisieres.ts. Run this first.
//   npx tsx scripts/upload-images-croisieres.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Landing page hero (Croisières experience-type) ---
    { key: "experiences/croisieres.jpg", url: "https://images.pexels.com/photos/32609062/pexels-photo-32609062.jpeg" },

    // --- Égypte : croisière en mer Rouge (standard) ---
    { key: "tours/egypte-croisiere-mer-rouge.jpg", url: "https://images.pexels.com/photos/28682229/pexels-photo-28682229.jpeg" },
    { key: "trips/egypte-croisiere-gallery-1.jpg", url: "https://images.pexels.com/photos/32522828/pexels-photo-32522828.jpeg" },
    { key: "trips/egypte-croisiere-gallery-2.jpg", url: "https://images.pexels.com/photos/35206706/pexels-photo-35206706.jpeg" },
    { key: "trips/egypte-croisiere-gallery-3.jpg", url: "https://images.pexels.com/photos/37126191/pexels-photo-37126191.jpeg" },
    { key: "trips/egypte-croisiere-gallery-4.jpg", url: "https://images.pexels.com/photos/9004341/pexels-photo-9004341.jpeg" },
    { key: "trips/egypte-croisiere-gallery-5.jpg", url: "https://images.pexels.com/photos/29290970/pexels-photo-29290970.jpeg" },
    { key: "trips/egypte-croisiere-gallery-6.jpg", url: "https://images.pexels.com/photos/26830602/pexels-photo-26830602.jpeg" },
    { key: "trips/egypte-croisiere-hotel-1.jpg", url: "https://images.pexels.com/photos/34496715/pexels-photo-34496715.jpeg" },
    { key: "trips/egypte-croisiere-hotel-2.jpg", url: "https://images.pexels.com/photos/32021575/pexels-photo-32021575.jpeg" },

    // --- Grèce : croisière en Méditerranée (standard) ---
    { key: "tours/grece-croisiere-mediterranee.jpg", url: "https://images.pexels.com/photos/37844490/pexels-photo-37844490.jpeg" },
    { key: "trips/grece-croisiere-gallery-1.jpg", url: "https://images.pexels.com/photos/16511635/pexels-photo-16511635.jpeg" },
    { key: "trips/grece-croisiere-gallery-2.jpg", url: "https://images.pexels.com/photos/32302617/pexels-photo-32302617.jpeg" },
    { key: "trips/grece-croisiere-gallery-3.jpg", url: "https://images.pexels.com/photos/37844831/pexels-photo-37844831.jpeg" },
    { key: "trips/grece-croisiere-gallery-4.jpg", url: "https://images.pexels.com/photos/16738967/pexels-photo-16738967.jpeg" },
    { key: "trips/grece-croisiere-gallery-5.jpg", url: "https://images.pexels.com/photos/37844505/pexels-photo-37844505.jpeg" },
    { key: "trips/grece-croisiere-gallery-6.jpg", url: "https://images.pexels.com/photos/33851769/pexels-photo-33851769.jpeg" },
    { key: "trips/grece-croisiere-hotel-1.jpg", url: "https://images.pexels.com/photos/39338444/pexels-photo-39338444.jpeg" },
    { key: "trips/grece-croisiere-hotel-2.jpg", url: "https://images.pexels.com/photos/17836120/pexels-photo-17836120.jpeg" },

    // --- États-Unis : croisière côtière de Nouvelle-Angleterre (standard) ---
    { key: "tours/etats-unis-croisiere-nouvelle-angleterre.jpg", url: "https://images.pexels.com/photos/34918724/pexels-photo-34918724.jpeg" },
    { key: "trips/etats-unis-croisiere-gallery-1.jpg", url: "https://images.pexels.com/photos/35484054/pexels-photo-35484054.jpeg" },
    { key: "trips/etats-unis-croisiere-gallery-2.jpg", url: "https://images.pexels.com/photos/38346703/pexels-photo-38346703.jpeg" },
    { key: "trips/etats-unis-croisiere-gallery-3.jpg", url: "https://images.pexels.com/photos/29161287/pexels-photo-29161287.jpeg" },
    { key: "trips/etats-unis-croisiere-gallery-4.jpg", url: "https://images.pexels.com/photos/34993330/pexels-photo-34993330.jpeg" },
    { key: "trips/etats-unis-croisiere-gallery-5.jpg", url: "https://images.pexels.com/photos/33420383/pexels-photo-33420383.jpeg" },
    { key: "trips/etats-unis-croisiere-gallery-6.jpg", url: "https://images.pexels.com/photos/37770413/pexels-photo-37770413.jpeg" },
    { key: "trips/etats-unis-croisiere-hotel-1.jpg", url: "https://images.pexels.com/photos/30070551/pexels-photo-30070551.jpeg" },
    { key: "trips/etats-unis-croisiere-hotel-2.jpg", url: "https://images.pexels.com/photos/19737829/pexels-photo-19737829.jpeg" },

    // --- Norvège : croisière dans les fjords (journey) ---
    { key: "journeys/norvege-croisiere-fjords-hero.jpg", url: "https://images.pexels.com/photos/35671454/pexels-photo-35671454.jpeg" },
    { key: "journeys/norvege-croisiere-ch1-gallery1.jpg", url: "https://images.pexels.com/photos/15979078/pexels-photo-15979078.jpeg" },
    { key: "journeys/norvege-croisiere-ch1-gallery2.jpg", url: "https://images.pexels.com/photos/27061025/pexels-photo-27061025.jpeg" },
    { key: "journeys/norvege-croisiere-ch1-gallery3.jpg", url: "https://images.pexels.com/photos/28981068/pexels-photo-28981068.jpeg" },
    { key: "journeys/norvege-croisiere-ch1-day1.jpg", url: "https://images.pexels.com/photos/37823922/pexels-photo-37823922.jpeg" },
    { key: "journeys/norvege-croisiere-ch1-day2.jpg", url: "https://images.pexels.com/photos/27442122/pexels-photo-27442122.jpeg" },
    { key: "journeys/norvege-croisiere-ch2-gallery1.jpg", url: "https://images.pexels.com/photos/32574836/pexels-photo-32574836.jpeg" },
    { key: "journeys/norvege-croisiere-ch2-gallery2.jpg", url: "https://images.pexels.com/photos/18903363/pexels-photo-18903363.jpeg" },
    { key: "journeys/norvege-croisiere-ch2-gallery3.jpg", url: "https://images.pexels.com/photos/29106470/pexels-photo-29106470.jpeg" },
    { key: "journeys/norvege-croisiere-ch2-day1.jpg", url: "https://images.pexels.com/photos/27743565/pexels-photo-27743565.jpeg" },
    { key: "journeys/norvege-croisiere-ch2-day2.jpg", url: "https://images.pexels.com/photos/27647525/pexels-photo-27647525.jpeg" },

    // --- Sainte-Lucie : croisière dans les Caraïbes (journey) ---
    { key: "journeys/saintelucie-croisiere-caraibes-hero.jpg", url: "https://images.pexels.com/photos/38059196/pexels-photo-38059196.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch1-gallery1.jpg", url: "https://images.pexels.com/photos/14555473/pexels-photo-14555473.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch1-gallery2.jpg", url: "https://images.pexels.com/photos/29311388/pexels-photo-29311388.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch1-gallery3.jpg", url: "https://images.pexels.com/photos/36137526/pexels-photo-36137526.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch1-day1.jpg", url: "https://images.pexels.com/photos/36095905/pexels-photo-36095905.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch1-day2.jpg", url: "https://images.pexels.com/photos/33336006/pexels-photo-33336006.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch2-gallery1.jpg", url: "https://images.pexels.com/photos/33710240/pexels-photo-33710240.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch2-gallery2.jpg", url: "https://images.pexels.com/photos/34773362/pexels-photo-34773362.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch2-gallery3.jpg", url: "https://images.pexels.com/photos/33642476/pexels-photo-33642476.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch2-day1.jpg", url: "https://images.pexels.com/photos/16686270/pexels-photo-16686270.jpeg" },
    { key: "journeys/saintelucie-croisiere-ch2-day2.jpg", url: "https://images.pexels.com/photos/30441205/pexels-photo-30441205.jpeg" },

    // --- Vietnam : croisière dans la baie d'Ha Long (journey) ---
    { key: "journeys/vietnam-croisiere-halong-hero.jpg", url: "https://images.pexels.com/photos/38116437/pexels-photo-38116437.jpeg" },
    { key: "journeys/vietnam-croisiere-ch1-gallery1.jpg", url: "https://images.pexels.com/photos/37701230/pexels-photo-37701230.jpeg" },
    { key: "journeys/vietnam-croisiere-ch1-gallery2.jpg", url: "https://images.pexels.com/photos/30667662/pexels-photo-30667662.jpeg" },
    { key: "journeys/vietnam-croisiere-ch1-gallery3.jpg", url: "https://images.pexels.com/photos/36175403/pexels-photo-36175403.jpeg" },
    { key: "journeys/vietnam-croisiere-ch1-day1.jpg", url: "https://images.pexels.com/photos/38116442/pexels-photo-38116442.jpeg" },
    { key: "journeys/vietnam-croisiere-ch1-day2.jpg", url: "https://images.pexels.com/photos/29904815/pexels-photo-29904815.jpeg" },
    { key: "journeys/vietnam-croisiere-ch2-gallery1.jpg", url: "https://images.pexels.com/photos/35762784/pexels-photo-35762784.jpeg" },
    { key: "journeys/vietnam-croisiere-ch2-gallery2.jpg", url: "https://images.pexels.com/photos/31387030/pexels-photo-31387030.jpeg" },
    { key: "journeys/vietnam-croisiere-ch2-gallery3.jpg", url: "https://images.pexels.com/photos/38116445/pexels-photo-38116445.jpeg" },
    { key: "journeys/vietnam-croisiere-ch2-day1.jpg", url: "https://images.pexels.com/photos/30634746/pexels-photo-30634746.jpeg" },
    { key: "journeys/vietnam-croisiere-ch2-day2.jpg", url: "https://images.pexels.com/photos/34353508/pexels-photo-34353508.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/croisieres.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
