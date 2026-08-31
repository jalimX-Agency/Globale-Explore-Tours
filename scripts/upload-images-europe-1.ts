export {};

// Europe batch 1 (Islande, Italie, France). Sources and uploads every image referenced by
// scripts/seed-trips-europe-1.ts. Run this first; the seed script refuses to write anything
// if a referenced image isn't already live.
//   npx tsx scripts/upload-images-europe-1.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Islande : les Westfjords (standard) ---
    { key: "tours/islande-westfjords.jpg", url: "https://images.pexels.com/photos/37156169/pexels-photo-37156169.jpeg" },
    { key: "trips/islande-westfjords-gallery-1.jpg", url: "https://images.pexels.com/photos/6310896/pexels-photo-6310896.jpeg" },
    { key: "trips/islande-westfjords-gallery-2.jpg", url: "https://images.pexels.com/photos/6236586/pexels-photo-6236586.jpeg" },
    { key: "trips/islande-westfjords-gallery-3.jpg", url: "https://images.pexels.com/photos/28869748/pexels-photo-28869748.jpeg" },
    { key: "trips/islande-westfjords-gallery-4.jpg", url: "https://images.pexels.com/photos/34586141/pexels-photo-34586141.jpeg" },
    { key: "trips/islande-westfjords-gallery-5.jpg", url: "https://images.pexels.com/photos/37156169/pexels-photo-37156169.jpeg" },
    { key: "trips/islande-westfjords-gallery-6.jpg", url: "https://images.pexels.com/photos/6310896/pexels-photo-6310896.jpeg" },
    { key: "trips/islande-westfjords-hotel-1.jpg", url: "https://images.pexels.com/photos/6236586/pexels-photo-6236586.jpeg" },
    { key: "trips/islande-westfjords-hotel-2.jpg", url: "https://images.pexels.com/photos/28869748/pexels-photo-28869748.jpeg" },

    // --- Islande : Snæfellsnes et Landmannalaugar (journey) ---
    { key: "journeys/islande-snaefellsnes-landmannalaugar-hero.jpg", url: "https://images.pexels.com/photos/32765202/pexels-photo-32765202.jpeg" },
    { key: "journeys/islande-snaefellsnes-gallery1.jpg", url: "https://images.pexels.com/photos/32777590/pexels-photo-32777590.jpeg" },
    { key: "journeys/islande-snaefellsnes-gallery2.jpg", url: "https://images.pexels.com/photos/6731941/pexels-photo-6731941.jpeg" },
    { key: "journeys/islande-snaefellsnes-gallery3.jpg", url: "https://images.pexels.com/photos/13613126/pexels-photo-13613126.jpeg" },
    { key: "journeys/islande-snaefellsnes-day1.jpg", url: "https://images.pexels.com/photos/32765202/pexels-photo-32765202.jpeg" },
    { key: "journeys/islande-snaefellsnes-day2.jpg", url: "https://images.pexels.com/photos/32777590/pexels-photo-32777590.jpeg" },
    { key: "journeys/islande-landmannalaugar-gallery1.jpg", url: "https://images.pexels.com/photos/12083623/pexels-photo-12083623.jpeg" },
    { key: "journeys/islande-landmannalaugar-gallery2.jpg", url: "https://images.pexels.com/photos/17827646/pexels-photo-17827646.jpeg" },
    { key: "journeys/islande-landmannalaugar-gallery3.jpg", url: "https://images.pexels.com/photos/28408807/pexels-photo-28408807.jpeg" },
    { key: "journeys/islande-landmannalaugar-day1.jpg", url: "https://images.pexels.com/photos/29053369/pexels-photo-29053369.jpeg" },
    { key: "journeys/islande-landmannalaugar-day2.jpg", url: "https://images.pexels.com/photos/27245717/pexels-photo-27245717.jpeg" },

    // --- Italie : Venise et les Dolomites (standard) ---
    { key: "tours/italie-venise-dolomites.jpg", url: "https://images.pexels.com/photos/29487687/pexels-photo-29487687.jpeg" },
    { key: "trips/italie-venise-gallery-1.jpg", url: "https://images.pexels.com/photos/10002258/pexels-photo-10002258.jpeg" },
    { key: "trips/italie-venise-gallery-2.jpg", url: "https://images.pexels.com/photos/20068237/pexels-photo-20068237.jpeg" },
    { key: "trips/italie-venise-gallery-3.jpg", url: "https://images.pexels.com/photos/3791013/pexels-photo-3791013.jpeg" },
    { key: "trips/italie-venise-gallery-4.jpg", url: "https://images.pexels.com/photos/13086481/pexels-photo-13086481.jpeg" },
    { key: "trips/italie-venise-gallery-5.jpg", url: "https://images.pexels.com/photos/20457216/pexels-photo-20457216.jpeg" },
    { key: "trips/italie-venise-gallery-6.jpg", url: "https://images.pexels.com/photos/33805109/pexels-photo-33805109.jpeg" },
    { key: "trips/italie-venise-hotel-1.jpg", url: "https://images.pexels.com/photos/34621374/pexels-photo-34621374.jpeg" },
    { key: "trips/italie-venise-hotel-2.jpg", url: "https://images.pexels.com/photos/28534531/pexels-photo-28534531.jpeg" },

    // --- Italie : la Sicile et les îles Éoliennes (journey) ---
    { key: "journeys/italie-sicile-eoliennes-hero.jpg", url: "https://images.pexels.com/photos/4563289/pexels-photo-4563289.jpeg" },
    { key: "journeys/italie-sicile-gallery1.jpg", url: "https://images.pexels.com/photos/5469933/pexels-photo-5469933.jpeg" },
    { key: "journeys/italie-sicile-gallery2.jpg", url: "https://images.pexels.com/photos/20321939/pexels-photo-20321939.jpeg" },
    { key: "journeys/italie-sicile-gallery3.jpg", url: "https://images.pexels.com/photos/5469917/pexels-photo-5469917.jpeg" },
    { key: "journeys/italie-sicile-day1.jpg", url: "https://images.pexels.com/photos/4563289/pexels-photo-4563289.jpeg" },
    { key: "journeys/italie-sicile-day2.jpg", url: "https://images.pexels.com/photos/33489145/pexels-photo-33489145.jpeg" },
    { key: "journeys/italie-eoliennes-gallery1.jpg", url: "https://images.pexels.com/photos/11019946/pexels-photo-11019946.jpeg" },
    { key: "journeys/italie-eoliennes-gallery2.jpg", url: "https://images.pexels.com/photos/36842133/pexels-photo-36842133.jpeg" },
    { key: "journeys/italie-eoliennes-gallery3.jpg", url: "https://images.pexels.com/photos/36781947/pexels-photo-36781947.jpeg" },
    { key: "journeys/italie-eoliennes-day1.jpg", url: "https://images.pexels.com/photos/19045777/pexels-photo-19045777.jpeg" },
    { key: "journeys/italie-eoliennes-day2.jpg", url: "https://images.pexels.com/photos/13610016/pexels-photo-13610016.jpeg" },

    // --- France : la Bretagne et le Mont-Saint-Michel (standard) ---
    { key: "tours/france-bretagne-mont-saint-michel.jpg", url: "https://images.pexels.com/photos/31721637/pexels-photo-31721637.jpeg" },
    { key: "trips/france-bretagne-gallery-1.jpg", url: "https://images.pexels.com/photos/18681607/pexels-photo-18681607.jpeg" },
    { key: "trips/france-bretagne-gallery-2.jpg", url: "https://images.pexels.com/photos/29033815/pexels-photo-29033815.jpeg" },
    { key: "trips/france-bretagne-gallery-3.jpg", url: "https://images.pexels.com/photos/19539358/pexels-photo-19539358.jpeg" },
    { key: "trips/france-bretagne-gallery-4.jpg", url: "https://images.pexels.com/photos/32916975/pexels-photo-32916975.jpeg" },
    { key: "trips/france-bretagne-gallery-5.jpg", url: "https://images.pexels.com/photos/31707375/pexels-photo-31707375.jpeg" },
    { key: "trips/france-bretagne-gallery-6.jpg", url: "https://images.pexels.com/photos/8910675/pexels-photo-8910675.jpeg" },
    { key: "trips/france-bretagne-hotel-1.jpg", url: "https://images.pexels.com/photos/28309186/pexels-photo-28309186.jpeg" },
    { key: "trips/france-bretagne-hotel-2.jpg", url: "https://images.pexels.com/photos/31721637/pexels-photo-31721637.jpeg" },

    // --- France : la Dordogne et la vallée de la Loire (journey) ---
    { key: "journeys/france-dordogne-loire-hero.jpg", url: "https://images.pexels.com/photos/33505416/pexels-photo-33505416.jpeg" },
    { key: "journeys/france-dordogne-gallery1.jpg", url: "https://images.pexels.com/photos/33505431/pexels-photo-33505431.jpeg" },
    { key: "journeys/france-dordogne-gallery2.jpg", url: "https://images.pexels.com/photos/33505447/pexels-photo-33505447.jpeg" },
    { key: "journeys/france-dordogne-gallery3.jpg", url: "https://images.pexels.com/photos/33505451/pexels-photo-33505451.jpeg" },
    { key: "journeys/france-dordogne-day1.jpg", url: "https://images.pexels.com/photos/14295963/pexels-photo-14295963.jpeg" },
    { key: "journeys/france-dordogne-day2.jpg", url: "https://images.pexels.com/photos/33505416/pexels-photo-33505416.jpeg" },
    { key: "journeys/france-loire-gallery1.jpg", url: "https://images.pexels.com/photos/19136624/pexels-photo-19136624.jpeg" },
    { key: "journeys/france-loire-gallery2.jpg", url: "https://images.pexels.com/photos/19136583/pexels-photo-19136583.jpeg" },
    { key: "journeys/france-loire-gallery3.jpg", url: "https://images.pexels.com/photos/28530087/pexels-photo-28530087.jpeg" },
    { key: "journeys/france-loire-day1.jpg", url: "https://images.pexels.com/photos/19136601/pexels-photo-19136601.jpeg" },
    { key: "journeys/france-loire-day2.jpg", url: "https://images.pexels.com/photos/16052597/pexels-photo-16052597.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/europe-1.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
