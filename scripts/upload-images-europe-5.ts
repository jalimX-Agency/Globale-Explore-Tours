export {};

// Europe batch 5 (République tchèque, Allemagne, Slovénie). Sources and uploads every image
// referenced by scripts/seed-trips-europe-5.ts. Run this first; the seed script refuses to
// write anything if a referenced image isn't already live.
//   npx tsx scripts/upload-images-europe-5.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- République tchèque : Český Krumlov et la Bohême du Sud (standard) ---
    { key: "tours/tcheque-cesky-krumlov-boheme-sud.jpg", url: "https://images.pexels.com/photos/33706923/pexels-photo-33706923.jpeg" },
    { key: "trips/tcheque-cesky-krumlov-gallery-1.jpg", url: "https://images.pexels.com/photos/33514628/pexels-photo-33514628.jpeg" },
    { key: "trips/tcheque-cesky-krumlov-gallery-2.jpg", url: "https://images.pexels.com/photos/15259724/pexels-photo-15259724.jpeg" },
    { key: "trips/tcheque-cesky-krumlov-gallery-3.jpg", url: "https://images.pexels.com/photos/8172257/pexels-photo-8172257.jpeg" },
    { key: "trips/tcheque-cesky-krumlov-gallery-4.jpg", url: "https://images.pexels.com/photos/15259730/pexels-photo-15259730.jpeg" },
    { key: "trips/tcheque-cesky-krumlov-gallery-5.jpg", url: "https://images.pexels.com/photos/570020/pexels-photo-570020.jpeg" },
    { key: "trips/tcheque-cesky-krumlov-gallery-6.jpg", url: "https://images.pexels.com/photos/9933139/pexels-photo-9933139.jpeg" },
    { key: "trips/tcheque-cesky-krumlov-hotel-1.jpg", url: "https://images.pexels.com/photos/15717924/pexels-photo-15717924.jpeg" },
    { key: "trips/tcheque-cesky-krumlov-hotel-2.jpg", url: "https://images.pexels.com/photos/6234116/pexels-photo-6234116.jpeg" },

    // --- République tchèque : la Moravie viticole et la Suisse bohémienne (journey) ---
    { key: "journeys/tcheque-moravie-boheme-hero.jpg", url: "https://images.pexels.com/photos/572940/pexels-photo-572940.jpeg" },
    { key: "journeys/tcheque-moravie-gallery1.jpg", url: "https://images.pexels.com/photos/35494393/pexels-photo-35494393.jpeg" },
    { key: "journeys/tcheque-moravie-gallery2.jpg", url: "https://images.pexels.com/photos/38487679/pexels-photo-38487679.jpeg" },
    { key: "journeys/tcheque-moravie-gallery3.jpg", url: "https://images.pexels.com/photos/35494401/pexels-photo-35494401.jpeg" },
    { key: "journeys/tcheque-moravie-day1.jpg", url: "https://images.pexels.com/photos/35494390/pexels-photo-35494390.jpeg" },
    { key: "journeys/tcheque-moravie-day2.jpg", url: "https://images.pexels.com/photos/1209290/pexels-photo-1209290.jpeg" },
    { key: "journeys/tcheque-boheme-gallery1.jpg", url: "https://images.pexels.com/photos/38351736/pexels-photo-38351736.jpeg" },
    { key: "journeys/tcheque-boheme-gallery2.jpg", url: "https://images.pexels.com/photos/36602205/pexels-photo-36602205.jpeg" },
    { key: "journeys/tcheque-boheme-gallery3.jpg", url: "https://images.pexels.com/photos/30601518/pexels-photo-30601518.jpeg" },
    { key: "journeys/tcheque-boheme-day1.jpg", url: "https://images.pexels.com/photos/36846941/pexels-photo-36846941.jpeg" },
    { key: "journeys/tcheque-boheme-day2.jpg", url: "https://images.pexels.com/photos/4335640/pexels-photo-4335640.jpeg" },

    // --- Allemagne : les Alpes bavaroises et Berchtesgaden (standard) ---
    { key: "tours/allemagne-alpes-bavaroises-berchtesgaden.jpg", url: "https://images.pexels.com/photos/1460803/pexels-photo-1460803.jpeg" },
    { key: "trips/allemagne-berchtesgaden-gallery-1.jpg", url: "https://images.pexels.com/photos/30335472/pexels-photo-30335472.jpeg" },
    { key: "trips/allemagne-berchtesgaden-gallery-2.jpg", url: "https://images.pexels.com/photos/2259797/pexels-photo-2259797.jpeg" },
    { key: "trips/allemagne-berchtesgaden-gallery-3.jpg", url: "https://images.pexels.com/photos/20725733/pexels-photo-20725733.jpeg" },
    { key: "trips/allemagne-berchtesgaden-gallery-4.jpg", url: "https://images.pexels.com/photos/34572834/pexels-photo-34572834.jpeg" },
    { key: "trips/allemagne-berchtesgaden-gallery-5.jpg", url: "https://images.pexels.com/photos/13894132/pexels-photo-13894132.jpeg" },
    { key: "trips/allemagne-berchtesgaden-gallery-6.jpg", url: "https://images.pexels.com/photos/3833466/pexels-photo-3833466.jpeg" },
    { key: "trips/allemagne-berchtesgaden-hotel-1.jpg", url: "https://images.pexels.com/photos/30835932/pexels-photo-30835932.jpeg" },
    { key: "trips/allemagne-berchtesgaden-hotel-2.jpg", url: "https://images.pexels.com/photos/28347473/pexels-photo-28347473.jpeg" },

    // --- Allemagne : la vallée du Rhin et la Suisse saxonne (journey) ---
    { key: "journeys/allemagne-rhin-saxonne-hero.jpg", url: "https://images.pexels.com/photos/38816815/pexels-photo-38816815.jpeg" },
    { key: "journeys/allemagne-rhin-gallery1.jpg", url: "https://images.pexels.com/photos/12944722/pexels-photo-12944722.jpeg" },
    { key: "journeys/allemagne-rhin-gallery2.jpg", url: "https://images.pexels.com/photos/37310709/pexels-photo-37310709.jpeg" },
    { key: "journeys/allemagne-rhin-gallery3.jpg", url: "https://images.pexels.com/photos/38086677/pexels-photo-38086677.jpeg" },
    { key: "journeys/allemagne-rhin-day1.jpg", url: "https://images.pexels.com/photos/33991980/pexels-photo-33991980.jpeg" },
    { key: "journeys/allemagne-rhin-day2.jpg", url: "https://images.pexels.com/photos/5793158/pexels-photo-5793158.jpeg" },
    { key: "journeys/allemagne-saxonne-gallery1.jpg", url: "https://images.pexels.com/photos/13342028/pexels-photo-13342028.jpeg" },
    { key: "journeys/allemagne-saxonne-gallery2.jpg", url: "https://images.pexels.com/photos/25347415/pexels-photo-25347415.jpeg" },
    { key: "journeys/allemagne-saxonne-gallery3.jpg", url: "https://images.pexels.com/photos/5659178/pexels-photo-5659178.jpeg" },
    { key: "journeys/allemagne-saxonne-day1.jpg", url: "https://images.pexels.com/photos/27588471/pexels-photo-27588471.jpeg" },
    { key: "journeys/allemagne-saxonne-day2.jpg", url: "https://images.pexels.com/photos/37358646/pexels-photo-37358646.jpeg" },

    // --- Slovénie : le lac de Bled (standard) ---
    { key: "tours/slovenie-lac-bled.jpg", url: "https://images.pexels.com/photos/258136/pexels-photo-258136.jpeg" },
    { key: "trips/slovenie-bled-gallery-1.jpg", url: "https://images.pexels.com/photos/11003575/pexels-photo-11003575.jpeg" },
    { key: "trips/slovenie-bled-gallery-2.jpg", url: "https://images.pexels.com/photos/38957561/pexels-photo-38957561.jpeg" },
    { key: "trips/slovenie-bled-gallery-3.jpg", url: "https://images.pexels.com/photos/3525983/pexels-photo-3525983.jpeg" },
    { key: "trips/slovenie-bled-gallery-4.jpg", url: "https://images.pexels.com/photos/27219277/pexels-photo-27219277.jpeg" },
    { key: "trips/slovenie-bled-gallery-5.jpg", url: "https://images.pexels.com/photos/30207656/pexels-photo-30207656.jpeg" },
    { key: "trips/slovenie-bled-gallery-6.jpg", url: "https://images.pexels.com/photos/8037865/pexels-photo-8037865.jpeg" },
    { key: "trips/slovenie-bled-hotel-1.jpg", url: "https://images.pexels.com/photos/13126059/pexels-photo-13126059.jpeg" },
    { key: "trips/slovenie-bled-hotel-2.jpg", url: "https://images.pexels.com/photos/16436924/pexels-photo-16436924.jpeg" },

    // --- Slovénie : les Alpes juliennes et la vallée de la Soča (journey) ---
    { key: "journeys/slovenie-triglav-soca-hero.jpg", url: "https://images.pexels.com/photos/33240145/pexels-photo-33240145.jpeg" },
    { key: "journeys/slovenie-triglav-gallery1.jpg", url: "https://images.pexels.com/photos/16926201/pexels-photo-16926201.jpeg" },
    { key: "journeys/slovenie-triglav-gallery2.jpg", url: "https://images.pexels.com/photos/31919441/pexels-photo-31919441.jpeg" },
    { key: "journeys/slovenie-triglav-gallery3.jpg", url: "https://images.pexels.com/photos/6873228/pexels-photo-6873228.jpeg" },
    { key: "journeys/slovenie-triglav-day1.jpg", url: "https://images.pexels.com/photos/38836257/pexels-photo-38836257.jpeg" },
    { key: "journeys/slovenie-triglav-day2.jpg", url: "https://images.pexels.com/photos/551851/pexels-photo-551851.jpeg" },
    { key: "journeys/slovenie-soca-gallery1.jpg", url: "https://images.pexels.com/photos/24243300/pexels-photo-24243300.jpeg" },
    { key: "journeys/slovenie-soca-gallery2.jpg", url: "https://images.pexels.com/photos/23914303/pexels-photo-23914303.jpeg" },
    { key: "journeys/slovenie-soca-gallery3.jpg", url: "https://images.pexels.com/photos/17095137/pexels-photo-17095137.jpeg" },
    { key: "journeys/slovenie-soca-day1.jpg", url: "https://images.pexels.com/photos/9529804/pexels-photo-9529804.jpeg" },
    { key: "journeys/slovenie-soca-day2.jpg", url: "https://images.pexels.com/photos/13830324/pexels-photo-13830324.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/europe-5.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
