export {};

// Sous-continent Indien batch 1 (full region) — Inde, Sri Lanka, Bhoutan, Népal. Sources and
// uploads every image referenced by scripts/seed-trips-sous-continent-indien-1.ts. Run this
// first; the seed script refuses to write anything if a referenced image isn't already live.
//   npx tsx scripts/upload-images-sous-continent-indien-1.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Inde : Kerala backwaters (standard) ---
    { key: "tours/inde-kerala-backwaters.jpg", url: "https://images.pexels.com/photos/17928231/pexels-photo-17928231.jpeg" },
    { key: "trips/inde-kerala-gallery-1.jpg", url: "https://images.pexels.com/photos/12950219/pexels-photo-12950219.jpeg" },
    { key: "trips/inde-kerala-gallery-2.jpg", url: "https://images.pexels.com/photos/32518360/pexels-photo-32518360.jpeg" },
    { key: "trips/inde-kerala-gallery-3.jpg", url: "https://images.pexels.com/photos/34588372/pexels-photo-34588372.jpeg" },
    { key: "trips/inde-kerala-gallery-4.jpg", url: "https://images.pexels.com/photos/28890056/pexels-photo-28890056.jpeg" },
    { key: "trips/inde-kerala-gallery-5.jpg", url: "https://images.pexels.com/photos/35735209/pexels-photo-35735209.jpeg" },
    { key: "trips/inde-kerala-gallery-6.jpg", url: "https://images.pexels.com/photos/36998153/pexels-photo-36998153.jpeg" },
    { key: "trips/inde-kerala-hotel-kettuvallam.jpg", url: "https://images.pexels.com/photos/14172615/pexels-photo-14172615.jpeg" },
    { key: "trips/inde-kerala-hotel-kumarakom.jpg", url: "https://images.pexels.com/photos/9242873/pexels-photo-9242873.jpeg" },

    // --- Inde : Varanasi et le désert du Thar (journey) ---
    { key: "journeys/inde-varanasi-thar-hero.jpg", url: "https://images.pexels.com/photos/34741303/pexels-photo-34741303.jpeg" },
    { key: "journeys/inde-varanasi-gallery1.jpg", url: "https://images.pexels.com/photos/17869831/pexels-photo-17869831.jpeg" },
    { key: "journeys/inde-varanasi-gallery2.jpg", url: "https://images.pexels.com/photos/19272041/pexels-photo-19272041.jpeg" },
    { key: "journeys/inde-varanasi-gallery3.jpg", url: "https://images.pexels.com/photos/38857186/pexels-photo-38857186.jpeg" },
    { key: "journeys/inde-varanasi-day1.jpg", url: "https://images.pexels.com/photos/38857186/pexels-photo-38857186.jpeg" },
    { key: "journeys/inde-varanasi-day2.jpg", url: "https://images.pexels.com/photos/39121732/pexels-photo-39121732.jpeg" },
    { key: "journeys/inde-thar-gallery1.jpg", url: "https://images.pexels.com/photos/35130760/pexels-photo-35130760.jpeg" },
    { key: "journeys/inde-thar-gallery2.jpg", url: "https://images.pexels.com/photos/31833225/pexels-photo-31833225.jpeg" },
    { key: "journeys/inde-thar-gallery3.jpg", url: "https://images.pexels.com/photos/12912712/pexels-photo-12912712.jpeg" },
    { key: "journeys/inde-thar-day1.jpg", url: "https://images.pexels.com/photos/37415412/pexels-photo-37415412.jpeg" },
    { key: "journeys/inde-thar-day2.jpg", url: "https://images.pexels.com/photos/30573733/pexels-photo-30573733.jpeg" },

    // --- Sri Lanka : Triangle Culturel (standard) ---
    { key: "tours/sri-lanka-triangle-culturel.jpg", url: "https://images.pexels.com/photos/31154120/pexels-photo-31154120.jpeg" },
    { key: "trips/sri-lanka-triangle-gallery-1.jpg", url: "https://images.pexels.com/photos/34128249/pexels-photo-34128249.jpeg" },
    { key: "trips/sri-lanka-triangle-gallery-2.jpg", url: "https://images.pexels.com/photos/35606851/pexels-photo-35606851.jpeg" },
    { key: "trips/sri-lanka-triangle-gallery-3.jpg", url: "https://images.pexels.com/photos/38181922/pexels-photo-38181922.jpeg" },
    { key: "trips/sri-lanka-triangle-gallery-4.jpg", url: "https://images.pexels.com/photos/6045035/pexels-photo-6045035.jpeg" },
    { key: "trips/sri-lanka-triangle-gallery-5.jpg", url: "https://images.pexels.com/photos/18727240/pexels-photo-18727240.jpeg" },
    { key: "trips/sri-lanka-triangle-gallery-6.jpg", url: "https://images.pexels.com/photos/3869004/pexels-photo-3869004.jpeg" },
    { key: "trips/sri-lanka-triangle-hotel-viluyana.jpg", url: "https://images.pexels.com/photos/35606860/pexels-photo-35606860.jpeg" },
    { key: "trips/sri-lanka-triangle-hotel-kandalama.jpg", url: "https://images.pexels.com/photos/12185842/pexels-photo-12185842.jpeg" },

    // --- Sri Lanka : Yala et Arugam Bay (journey) ---
    { key: "journeys/sri-lanka-yala-arugambay-hero.jpg", url: "https://images.pexels.com/photos/33130315/pexels-photo-33130315.jpeg" },
    { key: "journeys/sri-lanka-yala-gallery1.jpg", url: "https://images.pexels.com/photos/13784932/pexels-photo-13784932.jpeg" },
    { key: "journeys/sri-lanka-yala-gallery2.jpg", url: "https://images.pexels.com/photos/33724002/pexels-photo-33724002.jpeg" },
    { key: "journeys/sri-lanka-yala-gallery3.jpg", url: "https://images.pexels.com/photos/17081253/pexels-photo-17081253.jpeg" },
    { key: "journeys/sri-lanka-yala-day1.jpg", url: "https://images.pexels.com/photos/10607669/pexels-photo-10607669.jpeg" },
    { key: "journeys/sri-lanka-yala-day2.jpg", url: "https://images.pexels.com/photos/11718270/pexels-photo-11718270.jpeg" },
    { key: "journeys/sri-lanka-arugambay-gallery1.jpg", url: "https://images.pexels.com/photos/16053993/pexels-photo-16053993.jpeg" },
    { key: "journeys/sri-lanka-arugambay-gallery2.jpg", url: "https://images.pexels.com/photos/34218746/pexels-photo-34218746.jpeg" },
    { key: "journeys/sri-lanka-arugambay-gallery3.jpg", url: "https://images.pexels.com/photos/35511623/pexels-photo-35511623.jpeg" },
    { key: "journeys/sri-lanka-arugambay-day1.jpg", url: "https://images.pexels.com/photos/34714740/pexels-photo-34714740.jpeg" },
    { key: "journeys/sri-lanka-arugambay-day2.jpg", url: "https://images.pexels.com/photos/11266596/pexels-photo-11266596.jpeg" },

    // --- Bhoutan : vallée de Bumthang (standard) ---
    { key: "tours/bhoutan-bumthang.jpg", url: "https://images.pexels.com/photos/39128857/pexels-photo-39128857.jpeg" },
    { key: "trips/bhoutan-bumthang-gallery-1.jpg", url: "https://images.pexels.com/photos/17898806/pexels-photo-17898806.jpeg" },
    { key: "trips/bhoutan-bumthang-gallery-2.jpg", url: "https://images.pexels.com/photos/33296797/pexels-photo-33296797.jpeg" },
    { key: "trips/bhoutan-bumthang-gallery-3.jpg", url: "https://images.pexels.com/photos/30086805/pexels-photo-30086805.jpeg" },
    { key: "trips/bhoutan-bumthang-gallery-4.jpg", url: "https://images.pexels.com/photos/35279808/pexels-photo-35279808.jpeg" },
    { key: "trips/bhoutan-bumthang-gallery-5.jpg", url: "https://images.pexels.com/photos/37747845/pexels-photo-37747845.jpeg" },
    { key: "trips/bhoutan-bumthang-gallery-6.jpg", url: "https://images.pexels.com/photos/37747857/pexels-photo-37747857.jpeg" },
    { key: "trips/bhoutan-bumthang-hotel-amankora.jpg", url: "https://images.pexels.com/photos/34505115/pexels-photo-34505115.jpeg" },
    { key: "trips/bhoutan-bumthang-hotel-mountainlodge.jpg", url: "https://images.pexels.com/photos/37992661/pexels-photo-37992661.jpeg" },

    // --- Bhoutan : vallée de Haa et Gangtey (journey) ---
    { key: "journeys/bhoutan-haa-gangtey-hero.jpg", url: "https://images.pexels.com/photos/7967949/pexels-photo-7967949.jpeg" },
    { key: "journeys/bhoutan-haa-gallery1.jpg", url: "https://images.pexels.com/photos/12072400/pexels-photo-12072400.jpeg" },
    { key: "journeys/bhoutan-haa-gallery2.jpg", url: "https://images.pexels.com/photos/1670579/pexels-photo-1670579.jpeg" },
    { key: "journeys/bhoutan-haa-gallery3.jpg", url: "https://images.pexels.com/photos/20808429/pexels-photo-20808429.jpeg" },
    { key: "journeys/bhoutan-haa-day1.jpg", url: "https://images.pexels.com/photos/7967949/pexels-photo-7967949.jpeg" },
    { key: "journeys/bhoutan-haa-day2.jpg", url: "https://images.pexels.com/photos/38817855/pexels-photo-38817855.jpeg" },
    { key: "journeys/bhoutan-gangtey-gallery1.jpg", url: "https://images.pexels.com/photos/7254394/pexels-photo-7254394.jpeg" },
    { key: "journeys/bhoutan-gangtey-gallery2.jpg", url: "https://images.pexels.com/photos/7254391/pexels-photo-7254391.jpeg" },
    { key: "journeys/bhoutan-gangtey-gallery3.jpg", url: "https://images.pexels.com/photos/30023843/pexels-photo-30023843.jpeg" },
    { key: "journeys/bhoutan-gangtey-day1.jpg", url: "https://images.pexels.com/photos/33296797/pexels-photo-33296797.jpeg" },
    { key: "journeys/bhoutan-gangtey-day2.jpg", url: "https://images.pexels.com/photos/19523278/pexels-photo-19523278.jpeg" },

    // --- Népal : Namche Bazaar (standard) ---
    { key: "tours/nepal-namche-bazaar.jpg", url: "https://images.pexels.com/photos/28625168/pexels-photo-28625168.jpeg" },
    { key: "trips/nepal-namche-gallery-1.jpg", url: "https://images.pexels.com/photos/32225789/pexels-photo-32225789.jpeg" },
    { key: "trips/nepal-namche-gallery-2.jpg", url: "https://images.pexels.com/photos/24486632/pexels-photo-24486632.jpeg" },
    { key: "trips/nepal-namche-gallery-3.jpg", url: "https://images.pexels.com/photos/23915432/pexels-photo-23915432.jpeg" },
    { key: "trips/nepal-namche-gallery-4.jpg", url: "https://images.pexels.com/photos/32225790/pexels-photo-32225790.jpeg" },
    { key: "trips/nepal-namche-gallery-5.jpg", url: "https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg" },
    { key: "trips/nepal-namche-gallery-6.jpg", url: "https://images.pexels.com/photos/14663863/pexels-photo-14663863.jpeg" },
    { key: "trips/nepal-namche-hotel-yeti.jpg", url: "https://images.pexels.com/photos/39008298/pexels-photo-39008298.jpeg" },
    { key: "trips/nepal-namche-hotel-panorama.jpg", url: "https://images.pexels.com/photos/14158631/pexels-photo-14158631.jpeg" },

    // --- Népal : Bandipur et le Haut Mustang (journey) ---
    { key: "journeys/nepal-bandipur-mustang-hero.jpg", url: "https://images.pexels.com/photos/34241677/pexels-photo-34241677.jpeg" },
    { key: "journeys/nepal-bandipur-gallery1.jpg", url: "https://images.pexels.com/photos/35149053/pexels-photo-35149053.jpeg" },
    { key: "journeys/nepal-bandipur-gallery2.jpg", url: "https://images.pexels.com/photos/13747468/pexels-photo-13747468.jpeg" },
    { key: "journeys/nepal-bandipur-gallery3.jpg", url: "https://images.pexels.com/photos/37662362/pexels-photo-37662362.jpeg" },
    { key: "journeys/nepal-bandipur-day1.jpg", url: "https://images.pexels.com/photos/31928610/pexels-photo-31928610.jpeg" },
    { key: "journeys/nepal-bandipur-day2.jpg", url: "https://images.pexels.com/photos/32563830/pexels-photo-32563830.jpeg" },
    { key: "journeys/nepal-mustang-gallery1.jpg", url: "https://images.pexels.com/photos/33575366/pexels-photo-33575366.jpeg" },
    { key: "journeys/nepal-mustang-gallery2.jpg", url: "https://images.pexels.com/photos/20808426/pexels-photo-20808426.jpeg" },
    { key: "journeys/nepal-mustang-gallery3.jpg", url: "https://images.pexels.com/photos/33575360/pexels-photo-33575360.jpeg" },
    { key: "journeys/nepal-mustang-day1.jpg", url: "https://images.pexels.com/photos/34022824/pexels-photo-34022824.jpeg" },
    { key: "journeys/nepal-mustang-day2.jpg", url: "https://images.pexels.com/photos/37253631/pexels-photo-37253631.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/sous-continent-indien-1.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
