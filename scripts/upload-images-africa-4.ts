// Batch 4 — Tanzania, Rwanda, Senegal. Sourced from Pexels (free commercial license, no
// attribution required) via WebFetch on pexels.com search pages, then verified live with a
// direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-africa-4.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Tanzanie : l'ascension du Kilimandjaro" --
  { key: "tours/tanzanie-kilimandjaro.jpg", url: "https://images.pexels.com/photos/15994039/pexels-photo-15994039.jpeg" },
  { key: "trips/tanzanie-kilimandjaro-gallery-1.jpg", url: "https://images.pexels.com/photos/12592504/pexels-photo-12592504.jpeg" },
  { key: "trips/tanzanie-kilimandjaro-gallery-2.jpg", url: "https://images.pexels.com/photos/36240283/pexels-photo-36240283.jpeg" },
  { key: "trips/tanzanie-kilimandjaro-gallery-3.jpg", url: "https://images.pexels.com/photos/12592298/pexels-photo-12592298.jpeg" },
  { key: "trips/tanzanie-kilimandjaro-gallery-4.jpg", url: "https://images.pexels.com/photos/15994011/pexels-photo-15994011.jpeg" },
  { key: "trips/tanzanie-kilimandjaro-gallery-5.jpg", url: "https://images.pexels.com/photos/37808650/pexels-photo-37808650.jpeg" },
  { key: "trips/tanzanie-kilimandjaro-gallery-6.jpg", url: "https://images.pexels.com/photos/15994023/pexels-photo-15994023.jpeg" },
  { key: "trips/tanzanie-kilimandjaro-hotel-machame.jpg", url: "https://images.pexels.com/photos/17831034/pexels-photo-17831034.jpeg" },
  { key: "trips/tanzanie-kilimandjaro-hotel-moshi.jpg", url: "https://images.pexels.com/photos/9130978/pexels-photo-9130978.jpeg" },

  // -- Journey trip: "Tanzanie : le circuit du Sud, Ruaha et le Nyerere" --
  { key: "journeys/tanzanie-circuit-sud-hero.jpg", url: "https://images.pexels.com/photos/24713100/pexels-photo-24713100.jpeg" },
  { key: "journeys/tanzanie-ruaha-gallery1.jpg", url: "https://images.pexels.com/photos/19986850/pexels-photo-19986850.jpeg" },
  { key: "journeys/tanzanie-ruaha-gallery2.jpg", url: "https://images.pexels.com/photos/16444279/pexels-photo-16444279.jpeg" },
  { key: "journeys/tanzanie-ruaha-gallery3.jpg", url: "https://images.pexels.com/photos/34033965/pexels-photo-34033965.jpeg" },
  { key: "journeys/tanzanie-ruaha-day1.jpg", url: "https://images.pexels.com/photos/29003461/pexels-photo-29003461.jpeg" },
  { key: "journeys/tanzanie-ruaha-day2.jpg", url: "https://images.pexels.com/photos/7343161/pexels-photo-7343161.jpeg" },
  { key: "journeys/tanzanie-nyerere-gallery1.jpg", url: "https://images.pexels.com/photos/789331/pexels-photo-789331.jpeg" },
  { key: "journeys/tanzanie-nyerere-gallery2.jpg", url: "https://images.pexels.com/photos/34644439/pexels-photo-34644439.jpeg" },
  { key: "journeys/tanzanie-nyerere-gallery3.jpg", url: "https://images.pexels.com/photos/37638743/pexels-photo-37638743.jpeg" },
  { key: "journeys/tanzanie-nyerere-day1.jpg", url: "https://images.pexels.com/photos/28349843/pexels-photo-28349843.jpeg" },
  { key: "journeys/tanzanie-nyerere-day2.jpg", url: "https://images.pexels.com/photos/39034105/pexels-photo-39034105.jpeg" },

  // -- Standard trip: "Rwanda : la forêt de Nyungwe, sur les traces des chimpanzés" --
  { key: "tours/rwanda-nyungwe.jpg", url: "https://images.pexels.com/photos/1238346/pexels-photo-1238346.jpeg" },
  { key: "trips/rwanda-nyungwe-gallery-1.jpg", url: "https://images.pexels.com/photos/1344690/pexels-photo-1344690.jpeg" },
  { key: "trips/rwanda-nyungwe-gallery-2.jpg", url: "https://images.pexels.com/photos/26689576/pexels-photo-26689576.jpeg" },
  { key: "trips/rwanda-nyungwe-gallery-3.jpg", url: "https://images.pexels.com/photos/30929410/pexels-photo-30929410.jpeg" },
  { key: "trips/rwanda-nyungwe-gallery-4.jpg", url: "https://images.pexels.com/photos/17989037/pexels-photo-17989037.jpeg" },
  { key: "trips/rwanda-nyungwe-gallery-5.jpg", url: "https://images.pexels.com/photos/7211435/pexels-photo-7211435.jpeg" },
  { key: "trips/rwanda-nyungwe-gallery-6.jpg", url: "https://images.pexels.com/photos/4730170/pexels-photo-4730170.jpeg" },
  { key: "trips/rwanda-nyungwe-hotel-lodge.jpg", url: "https://images.pexels.com/photos/35772450/pexels-photo-35772450.jpeg" },
  { key: "trips/rwanda-nyungwe-hotel-gisakura.jpg", url: "https://images.pexels.com/photos/33613748/pexels-photo-33613748.jpeg" },

  // -- Journey trip: "Rwanda : le lac Kivu et l'Akagera" --
  { key: "journeys/rwanda-kivu-hero.jpg", url: "https://images.pexels.com/photos/11612743/pexels-photo-11612743.jpeg" },
  { key: "journeys/rwanda-kivu-gallery1.jpg", url: "https://images.pexels.com/photos/19755751/pexels-photo-19755751.jpeg" },
  { key: "journeys/rwanda-kivu-gallery2.jpg", url: "https://images.pexels.com/photos/30164275/pexels-photo-30164275.jpeg" },
  { key: "journeys/rwanda-kivu-gallery3.jpg", url: "https://images.pexels.com/photos/30184930/pexels-photo-30184930.jpeg" },
  { key: "journeys/rwanda-kivu-day1.jpg", url: "https://images.pexels.com/photos/30164276/pexels-photo-30164276.jpeg" },
  { key: "journeys/rwanda-kivu-day2.jpg", url: "https://images.pexels.com/photos/30164275/pexels-photo-30164275.jpeg" },
  { key: "journeys/rwanda-akagera-gallery1.jpg", url: "https://images.pexels.com/photos/15373903/pexels-photo-15373903.jpeg" },
  { key: "journeys/rwanda-akagera-gallery2.jpg", url: "https://images.pexels.com/photos/34033965/pexels-photo-34033965.jpeg" },
  { key: "journeys/rwanda-akagera-gallery3.jpg", url: "https://images.pexels.com/photos/33182167/pexels-photo-33182167.jpeg" },
  { key: "journeys/rwanda-akagera-day1.jpg", url: "https://images.pexels.com/photos/29003461/pexels-photo-29003461.jpeg" },
  { key: "journeys/rwanda-akagera-day2.jpg", url: "https://images.pexels.com/photos/34644439/pexels-photo-34644439.jpeg" },

  // -- Standard trip: "Sénégal : la Casamance, l'Afrique verte" --
  { key: "tours/senegal-casamance.jpg", url: "https://images.pexels.com/photos/32882940/pexels-photo-32882940.jpeg" },
  { key: "trips/senegal-casamance-gallery-1.jpg", url: "https://images.pexels.com/photos/29090326/pexels-photo-29090326.jpeg" },
  { key: "trips/senegal-casamance-gallery-2.jpg", url: "https://images.pexels.com/photos/11385115/pexels-photo-11385115.jpeg" },
  { key: "trips/senegal-casamance-gallery-3.jpg", url: "https://images.pexels.com/photos/11406359/pexels-photo-11406359.jpeg" },
  { key: "trips/senegal-casamance-gallery-4.jpg", url: "https://images.pexels.com/photos/35594681/pexels-photo-35594681.png" },
  { key: "trips/senegal-casamance-gallery-5.jpg", url: "https://images.pexels.com/photos/14434228/pexels-photo-14434228.jpeg" },
  { key: "trips/senegal-casamance-gallery-6.jpg", url: "https://images.pexels.com/photos/35594683/pexels-photo-35594683.png" },
  { key: "trips/senegal-casamance-hotel-carabane.jpg", url: "https://images.pexels.com/photos/32262441/pexels-photo-32262441.jpeg" },
  { key: "trips/senegal-casamance-hotel-bouhannier.jpg", url: "https://images.pexels.com/photos/7292829/pexels-photo-7292829.jpeg" },

  // -- Journey trip: "Sénégal : Saint-Louis et le parc du Djoudj" --
  { key: "journeys/senegal-saint-louis-hero.jpg", url: "https://images.pexels.com/photos/20156729/pexels-photo-20156729.jpeg" },
  { key: "journeys/senegal-saint-louis-gallery1.jpg", url: "https://images.pexels.com/photos/18189692/pexels-photo-18189692.jpeg" },
  { key: "journeys/senegal-saint-louis-gallery2.jpg", url: "https://images.pexels.com/photos/20156733/pexels-photo-20156733.jpeg" },
  { key: "journeys/senegal-saint-louis-gallery3.jpg", url: "https://images.pexels.com/photos/36500953/pexels-photo-36500953.jpeg" },
  { key: "journeys/senegal-saint-louis-day1.jpg", url: "https://images.pexels.com/photos/18189692/pexels-photo-18189692.jpeg" },
  { key: "journeys/senegal-saint-louis-day2.jpg", url: "https://images.pexels.com/photos/37904491/pexels-photo-37904491.jpeg" },
  { key: "journeys/senegal-djoudj-gallery1.jpg", url: "https://images.pexels.com/photos/35738969/pexels-photo-35738969.jpeg" },
  { key: "journeys/senegal-djoudj-gallery2.jpg", url: "https://images.pexels.com/photos/31817955/pexels-photo-31817955.jpeg" },
  { key: "journeys/senegal-djoudj-gallery3.jpg", url: "https://images.pexels.com/photos/26924199/pexels-photo-26924199.jpeg" },
  { key: "journeys/senegal-djoudj-day1.jpg", url: "https://images.pexels.com/photos/32011172/pexels-photo-32011172.jpeg" },
  { key: "journeys/senegal-djoudj-day2.jpg", url: "https://images.pexels.com/photos/8341090/pexels-photo-8341090.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/africa-4.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
