export {};

// Europe batch 8 (Pays-Bas, Belgique, Chypre) — final Europe batch. Sources and uploads every
// image referenced by scripts/seed-trips-europe-8.ts. Run this first; the seed script refuses
// to write anything if a referenced image isn't already live.
//   npx tsx scripts/upload-images-europe-8.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Pays-Bas : Keukenhof et les moulins de Kinderdijk (standard) ---
    { key: "tours/pays-bas-keukenhof-kinderdijk.jpg", url: "https://images.pexels.com/photos/12991541/pexels-photo-12991541.jpeg" },
    { key: "trips/pays-bas-keukenhof-gallery-1.jpg", url: "https://images.pexels.com/photos/37198226/pexels-photo-37198226.jpeg" },
    { key: "trips/pays-bas-keukenhof-gallery-2.jpg", url: "https://images.pexels.com/photos/37123054/pexels-photo-37123054.jpeg" },
    { key: "trips/pays-bas-keukenhof-gallery-3.jpg", url: "https://images.pexels.com/photos/35400479/pexels-photo-35400479.jpeg" },
    { key: "trips/pays-bas-keukenhof-gallery-4.jpg", url: "https://images.pexels.com/photos/14884951/pexels-photo-14884951.jpeg" },
    { key: "trips/pays-bas-keukenhof-gallery-5.jpg", url: "https://images.pexels.com/photos/39199160/pexels-photo-39199160.jpeg" },
    { key: "trips/pays-bas-keukenhof-gallery-6.jpg", url: "https://images.pexels.com/photos/37515654/pexels-photo-37515654.jpeg" },
    { key: "trips/pays-bas-keukenhof-hotel-1.jpg", url: "https://images.pexels.com/photos/34458188/pexels-photo-34458188.jpeg" },
    { key: "trips/pays-bas-keukenhof-hotel-2.jpg", url: "https://images.pexels.com/photos/12083119/pexels-photo-12083119.jpeg" },

    // --- Pays-Bas : Utrecht et Giethoorn (journey) ---
    { key: "journeys/pays-bas-utrecht-giethoorn-hero.jpg", url: "https://images.pexels.com/photos/37539527/pexels-photo-37539527.jpeg" },
    { key: "journeys/pays-bas-utrecht-gallery1.jpg", url: "https://images.pexels.com/photos/37539522/pexels-photo-37539522.jpeg" },
    { key: "journeys/pays-bas-utrecht-gallery2.jpg", url: "https://images.pexels.com/photos/5201634/pexels-photo-5201634.jpeg" },
    { key: "journeys/pays-bas-utrecht-gallery3.jpg", url: "https://images.pexels.com/photos/19749747/pexels-photo-19749747.jpeg" },
    { key: "journeys/pays-bas-utrecht-day1.jpg", url: "https://images.pexels.com/photos/37362442/pexels-photo-37362442.jpeg" },
    { key: "journeys/pays-bas-utrecht-day2.jpg", url: "https://images.pexels.com/photos/33375300/pexels-photo-33375300.jpeg" },
    { key: "journeys/pays-bas-giethoorn-gallery1.jpg", url: "https://images.pexels.com/photos/20169733/pexels-photo-20169733.jpeg" },
    { key: "journeys/pays-bas-giethoorn-gallery2.jpg", url: "https://images.pexels.com/photos/20169720/pexels-photo-20169720.jpeg" },
    { key: "journeys/pays-bas-giethoorn-gallery3.jpg", url: "https://images.pexels.com/photos/33590275/pexels-photo-33590275.jpeg" },
    { key: "journeys/pays-bas-giethoorn-day1.jpg", url: "https://images.pexels.com/photos/37397354/pexels-photo-37397354.jpeg" },
    { key: "journeys/pays-bas-giethoorn-day2.jpg", url: "https://images.pexels.com/photos/20169608/pexels-photo-20169608.jpeg" },

    // --- Belgique : Bruges, les canaux (standard) ---
    { key: "tours/belgique-bruges-canaux.jpg", url: "https://images.pexels.com/photos/21771329/pexels-photo-21771329.jpeg" },
    { key: "trips/belgique-bruges-gallery-1.jpg", url: "https://images.pexels.com/photos/13505273/pexels-photo-13505273.jpeg" },
    { key: "trips/belgique-bruges-gallery-2.jpg", url: "https://images.pexels.com/photos/35855208/pexels-photo-35855208.jpeg" },
    { key: "trips/belgique-bruges-gallery-3.jpg", url: "https://images.pexels.com/photos/34743842/pexels-photo-34743842.jpeg" },
    { key: "trips/belgique-bruges-gallery-4.jpg", url: "https://images.pexels.com/photos/37441886/pexels-photo-37441886.jpeg" },
    { key: "trips/belgique-bruges-gallery-5.jpg", url: "https://images.pexels.com/photos/27996690/pexels-photo-27996690.jpeg" },
    { key: "trips/belgique-bruges-gallery-6.jpg", url: "https://images.pexels.com/photos/31900579/pexels-photo-31900579.jpeg" },
    { key: "trips/belgique-bruges-hotel-1.jpg", url: "https://images.pexels.com/photos/35115154/pexels-photo-35115154.jpeg" },
    { key: "trips/belgique-bruges-hotel-2.jpg", url: "https://images.pexels.com/photos/37034503/pexels-photo-37034503.jpeg" },

    // --- Belgique : les Ardennes et Gand (journey) ---
    { key: "journeys/belgique-ardennes-gand-hero.jpg", url: "https://images.pexels.com/photos/38520172/pexels-photo-38520172.jpeg" },
    { key: "journeys/belgique-ardennes-gallery1.jpg", url: "https://images.pexels.com/photos/36413866/pexels-photo-36413866.jpeg" },
    { key: "journeys/belgique-ardennes-gallery2.jpg", url: "https://images.pexels.com/photos/31135434/pexels-photo-31135434.jpeg" },
    { key: "journeys/belgique-ardennes-gallery3.jpg", url: "https://images.pexels.com/photos/38870338/pexels-photo-38870338.jpeg" },
    { key: "journeys/belgique-ardennes-day1.jpg", url: "https://images.pexels.com/photos/14332270/pexels-photo-14332270.jpeg" },
    { key: "journeys/belgique-ardennes-day2.jpg", url: "https://images.pexels.com/photos/18777083/pexels-photo-18777083.jpeg" },
    { key: "journeys/belgique-gand-gallery1.jpg", url: "https://images.pexels.com/photos/25383631/pexels-photo-25383631.jpeg" },
    { key: "journeys/belgique-gand-gallery2.jpg", url: "https://images.pexels.com/photos/18926431/pexels-photo-18926431.jpeg" },
    { key: "journeys/belgique-gand-gallery3.jpg", url: "https://images.pexels.com/photos/18358620/pexels-photo-18358620.jpeg" },
    { key: "journeys/belgique-gand-day1.jpg", url: "https://images.pexels.com/photos/31992524/pexels-photo-31992524.jpeg" },
    { key: "journeys/belgique-gand-day2.jpg", url: "https://images.pexels.com/photos/37144091/pexels-photo-37144091.jpeg" },

    // --- Chypre : Paphos et le rocher d'Aphrodite (standard) ---
    { key: "tours/chypre-paphos-aphrodite.jpg", url: "https://images.pexels.com/photos/8962406/pexels-photo-8962406.jpeg" },
    { key: "trips/chypre-paphos-gallery-1.jpg", url: "https://images.pexels.com/photos/6190823/pexels-photo-6190823.jpeg" },
    { key: "trips/chypre-paphos-gallery-2.jpg", url: "https://images.pexels.com/photos/10103605/pexels-photo-10103605.jpeg" },
    { key: "trips/chypre-paphos-gallery-3.jpg", url: "https://images.pexels.com/photos/31377787/pexels-photo-31377787.jpeg" },
    { key: "trips/chypre-paphos-gallery-4.jpg", url: "https://images.pexels.com/photos/11062554/pexels-photo-11062554.jpeg" },
    { key: "trips/chypre-paphos-gallery-5.jpg", url: "https://images.pexels.com/photos/32658608/pexels-photo-32658608.jpeg" },
    { key: "trips/chypre-paphos-gallery-6.jpg", url: "https://images.pexels.com/photos/38254050/pexels-photo-38254050.jpeg" },
    { key: "trips/chypre-paphos-hotel-1.jpg", url: "https://images.pexels.com/photos/8332863/pexels-photo-8332863.jpeg" },
    { key: "trips/chypre-paphos-hotel-2.jpg", url: "https://images.pexels.com/photos/10067488/pexels-photo-10067488.jpeg" },

    // --- Chypre : les Troodos et la péninsule d'Akamas (journey) ---
    { key: "journeys/chypre-troodos-akamas-hero.jpg", url: "https://images.pexels.com/photos/37256764/pexels-photo-37256764.jpeg" },
    { key: "journeys/chypre-troodos-gallery1.jpg", url: "https://images.pexels.com/photos/13799165/pexels-photo-13799165.jpeg" },
    { key: "journeys/chypre-troodos-gallery2.jpg", url: "https://images.pexels.com/photos/37256961/pexels-photo-37256961.jpeg" },
    { key: "journeys/chypre-troodos-gallery3.jpg", url: "https://images.pexels.com/photos/5966348/pexels-photo-5966348.jpeg" },
    { key: "journeys/chypre-troodos-day1.jpg", url: "https://images.pexels.com/photos/34116125/pexels-photo-34116125.jpeg" },
    { key: "journeys/chypre-troodos-day2.jpg", url: "https://images.pexels.com/photos/9480438/pexels-photo-9480438.jpeg" },
    { key: "journeys/chypre-akamas-gallery1.jpg", url: "https://images.pexels.com/photos/39168935/pexels-photo-39168935.jpeg" },
    { key: "journeys/chypre-akamas-gallery2.jpg", url: "https://images.pexels.com/photos/10785671/pexels-photo-10785671.jpeg" },
    { key: "journeys/chypre-akamas-gallery3.jpg", url: "https://images.pexels.com/photos/8602497/pexels-photo-8602497.jpeg" },
    { key: "journeys/chypre-akamas-day1.jpg", url: "https://images.pexels.com/photos/20074217/pexels-photo-20074217.jpeg" },
    { key: "journeys/chypre-akamas-day2.jpg", url: "https://images.pexels.com/photos/20074215/pexels-photo-20074215.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/europe-8.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
