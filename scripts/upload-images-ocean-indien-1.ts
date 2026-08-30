// Océan Indien batch 1 (full region) — Maldives, Seychelles, Mauritius, Réunion. First batch
// of the Océan Indien region, following the completed Africa and Amérique du Nord/du Sud
// regions. Sourced from Pexels (free commercial license, no attribution required) via WebFetch
// on pexels.com search pages, then verified live with a direct HEAD/GET before being listed
// here. Run with:
//   npx tsx scripts/upload-images-ocean-indien-1.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Maldives : croisière de plongée en liveaboard" --
  { key: "tours/maldives-liveaboard.jpg", url: "https://images.pexels.com/photos/33243110/pexels-photo-33243110.jpeg" },
  { key: "trips/maldives-liveaboard-gallery-1.jpg", url: "https://images.pexels.com/photos/9080914/pexels-photo-9080914.jpeg" },
  { key: "trips/maldives-liveaboard-gallery-2.jpg", url: "https://images.pexels.com/photos/4890139/pexels-photo-4890139.jpeg" },
  { key: "trips/maldives-liveaboard-gallery-3.jpg", url: "https://images.pexels.com/photos/12890017/pexels-photo-12890017.jpeg" },
  { key: "trips/maldives-liveaboard-gallery-4.jpg", url: "https://images.pexels.com/photos/5061256/pexels-photo-5061256.jpeg" },
  { key: "trips/maldives-liveaboard-gallery-5.jpg", url: "https://images.pexels.com/photos/7206851/pexels-photo-7206851.jpeg" },
  { key: "trips/maldives-liveaboard-gallery-6.jpg", url: "https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg" },
  { key: "trips/maldives-liveaboard-hotel-serenity.jpg", url: "https://images.pexels.com/photos/9394646/pexels-photo-9394646.jpeg" },
  { key: "trips/maldives-liveaboard-hotel-carpediem.jpg", url: "https://images.pexels.com/photos/9394651/pexels-photo-9394651.jpeg" },

  // -- Journey trip: "Maldives : îles locales et l'atoll de Baa" --
  { key: "journeys/maldives-iles-locales-baa-hero.jpg", url: "https://images.pexels.com/photos/36386696/pexels-photo-36386696.jpeg" },
  { key: "journeys/maldives-maafushi-gallery1.jpg", url: "https://images.pexels.com/photos/31433655/pexels-photo-31433655.jpeg" },
  { key: "journeys/maldives-maafushi-gallery2.jpg", url: "https://images.pexels.com/photos/36365344/pexels-photo-36365344.jpeg" },
  { key: "journeys/maldives-maafushi-gallery3.jpg", url: "https://images.pexels.com/photos/36651470/pexels-photo-36651470.jpeg" },
  { key: "journeys/maldives-maafushi-day1.jpg", url: "https://images.pexels.com/photos/36386696/pexels-photo-36386696.jpeg" },
  { key: "journeys/maldives-maafushi-day2.jpg", url: "https://images.pexels.com/photos/1456292/pexels-photo-1456292.jpeg" },
  { key: "journeys/maldives-baa-gallery1.jpg", url: "https://images.pexels.com/photos/8447760/pexels-photo-8447760.jpeg" },
  { key: "journeys/maldives-baa-gallery2.jpg", url: "https://images.pexels.com/photos/27402083/pexels-photo-27402083.jpeg" },
  { key: "journeys/maldives-baa-gallery3.jpg", url: "https://images.pexels.com/photos/4666740/pexels-photo-4666740.jpeg" },
  { key: "journeys/maldives-baa-day1.jpg", url: "https://images.pexels.com/photos/4751277/pexels-photo-4751277.jpeg" },
  { key: "journeys/maldives-baa-day2.jpg", url: "https://images.pexels.com/photos/6565102/pexels-photo-6565102.jpeg" },

  // -- Standard trip: "Seychelles : Silhouette, l'île sanctuaire" --
  { key: "tours/seychelles-silhouette.jpg", url: "https://images.pexels.com/photos/736897/pexels-photo-736897.jpeg" },
  { key: "trips/seychelles-silhouette-gallery-1.jpg", url: "https://images.pexels.com/photos/6136116/pexels-photo-6136116.jpeg" },
  { key: "trips/seychelles-silhouette-gallery-2.jpg", url: "https://images.pexels.com/photos/34114528/pexels-photo-34114528.jpeg" },
  { key: "trips/seychelles-silhouette-gallery-3.jpg", url: "https://images.pexels.com/photos/35255957/pexels-photo-35255957.jpeg" },
  { key: "trips/seychelles-silhouette-gallery-4.jpg", url: "https://images.pexels.com/photos/13449476/pexels-photo-13449476.jpeg" },
  { key: "trips/seychelles-silhouette-gallery-5.jpg", url: "https://images.pexels.com/photos/31421326/pexels-photo-31421326.jpeg" },
  { key: "trips/seychelles-silhouette-gallery-6.jpg", url: "https://images.pexels.com/photos/31421310/pexels-photo-31421310.jpeg" },
  { key: "trips/seychelles-silhouette-hotel-labriz.jpg", url: "https://images.pexels.com/photos/32262441/pexels-photo-32262441.jpeg" },
  { key: "trips/seychelles-silhouette-hotel-foret.jpg", url: "https://images.pexels.com/photos/7292829/pexels-photo-7292829.jpeg" },

  // -- Journey trip: "Seychelles : Aldabra et l'île de Denis" --
  { key: "journeys/seychelles-aldabra-denis-hero.jpg", url: "https://images.pexels.com/photos/29264334/pexels-photo-29264334.jpeg" },
  { key: "journeys/seychelles-aldabra-gallery1.jpg", url: "https://images.pexels.com/photos/29264338/pexels-photo-29264338.jpeg" },
  { key: "journeys/seychelles-aldabra-gallery2.jpg", url: "https://images.pexels.com/photos/29092491/pexels-photo-29092491.jpeg" },
  { key: "journeys/seychelles-aldabra-gallery3.jpg", url: "https://images.pexels.com/photos/38339567/pexels-photo-38339567.jpeg" },
  { key: "journeys/seychelles-aldabra-day1.jpg", url: "https://images.pexels.com/photos/13262090/pexels-photo-13262090.jpeg" },
  { key: "journeys/seychelles-aldabra-day2.jpg", url: "https://images.pexels.com/photos/31421326/pexels-photo-31421326.jpeg" },
  { key: "journeys/seychelles-denis-gallery1.jpg", url: "https://images.pexels.com/photos/28408430/pexels-photo-28408430.jpeg" },
  { key: "journeys/seychelles-denis-gallery2.jpg", url: "https://images.pexels.com/photos/8892807/pexels-photo-8892807.jpeg" },
  { key: "journeys/seychelles-denis-gallery3.jpg", url: "https://images.pexels.com/photos/28408420/pexels-photo-28408420.jpeg" },
  { key: "journeys/seychelles-denis-day1.jpg", url: "https://images.pexels.com/photos/9149283/pexels-photo-9149283.jpeg" },
  { key: "journeys/seychelles-denis-day2.jpg", url: "https://images.pexels.com/photos/8356054/pexels-photo-8356054.jpeg" },

  // -- Standard trip: "Île Maurice : Rodrigues, l'autre île" --
  { key: "tours/maurice-rodrigues.jpg", url: "https://images.pexels.com/photos/34809456/pexels-photo-34809456.jpeg" },
  { key: "trips/maurice-rodrigues-gallery-1.jpg", url: "https://images.pexels.com/photos/27000787/pexels-photo-27000787.jpeg" },
  { key: "trips/maurice-rodrigues-gallery-2.jpg", url: "https://images.pexels.com/photos/17056954/pexels-photo-17056954.jpeg" },
  { key: "trips/maurice-rodrigues-gallery-3.jpg", url: "https://images.pexels.com/photos/12386417/pexels-photo-12386417.jpeg" },
  { key: "trips/maurice-rodrigues-gallery-4.jpg", url: "https://images.pexels.com/photos/13449476/pexels-photo-13449476.jpeg" },
  { key: "trips/maurice-rodrigues-gallery-5.jpg", url: "https://images.pexels.com/photos/31421310/pexels-photo-31421310.jpeg" },
  { key: "trips/maurice-rodrigues-gallery-6.jpg", url: "https://images.pexels.com/photos/23270247/pexels-photo-23270247.jpeg" },
  { key: "trips/maurice-rodrigues-hotel-tekoma.jpg", url: "https://images.pexels.com/photos/28300250/pexels-photo-28300250.jpeg" },
  { key: "trips/maurice-rodrigues-hotel-cottonbay.jpg", url: "https://images.pexels.com/photos/14401111/pexels-photo-14401111.jpeg" },

  // -- Journey trip: "Île Maurice : Grand Bassin et l'île aux Cerfs" --
  { key: "journeys/maurice-grandbassin-cerfs-hero.jpg", url: "https://images.pexels.com/photos/18490351/pexels-photo-18490351.jpeg" },
  { key: "journeys/maurice-grandbassin-gallery1.jpg", url: "https://images.pexels.com/photos/27834047/pexels-photo-27834047.jpeg" },
  { key: "journeys/maurice-grandbassin-gallery2.jpg", url: "https://images.pexels.com/photos/889954/pexels-photo-889954.jpeg" },
  { key: "journeys/maurice-grandbassin-gallery3.jpg", url: "https://images.pexels.com/photos/8333127/pexels-photo-8333127.jpeg" },
  { key: "journeys/maurice-grandbassin-day1.jpg", url: "https://images.pexels.com/photos/27375286/pexels-photo-27375286.jpeg" },
  { key: "journeys/maurice-grandbassin-day2.jpg", url: "https://images.pexels.com/photos/6136116/pexels-photo-6136116.jpeg" },
  { key: "journeys/maurice-iledescerfs-gallery1.jpg", url: "https://images.pexels.com/photos/9394646/pexels-photo-9394646.jpeg" },
  { key: "journeys/maurice-iledescerfs-gallery2.jpg", url: "https://images.pexels.com/photos/9394651/pexels-photo-9394651.jpeg" },
  { key: "journeys/maurice-iledescerfs-gallery3.jpg", url: "https://images.pexels.com/photos/31832141/pexels-photo-31832141.jpeg" },
  { key: "journeys/maurice-iledescerfs-day1.jpg", url: "https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg" },
  { key: "journeys/maurice-iledescerfs-day2.jpg", url: "https://images.pexels.com/photos/1450358/pexels-photo-1450358.jpeg" },

  // -- Standard trip: "La Réunion : le cirque de Cilaos, thermes et vignoble d'altitude" --
  { key: "tours/reunion-cilaos.jpg", url: "https://images.pexels.com/photos/29065651/pexels-photo-29065651.jpeg" },
  { key: "trips/reunion-cilaos-gallery-1.jpg", url: "https://images.pexels.com/photos/30463261/pexels-photo-30463261.jpeg" },
  { key: "trips/reunion-cilaos-gallery-2.jpg", url: "https://images.pexels.com/photos/35362859/pexels-photo-35362859.jpeg" },
  { key: "trips/reunion-cilaos-gallery-3.jpg", url: "https://images.pexels.com/photos/24738306/pexels-photo-24738306.jpeg" },
  { key: "trips/reunion-cilaos-gallery-4.jpg", url: "https://images.pexels.com/photos/736897/pexels-photo-736897.jpeg" },
  { key: "trips/reunion-cilaos-gallery-5.jpg", url: "https://images.pexels.com/photos/35255957/pexels-photo-35255957.jpeg" },
  { key: "trips/reunion-cilaos-gallery-6.jpg", url: "https://images.pexels.com/photos/34114528/pexels-photo-34114528.jpeg" },
  { key: "trips/reunion-cilaos-hotel-vieuxcep.jpg", url: "https://images.pexels.com/photos/14579403/pexels-photo-14579403.jpeg" },
  { key: "trips/reunion-cilaos-hotel-relaisdescimes.jpg", url: "https://images.pexels.com/photos/24805041/pexels-photo-24805041.jpeg" },

  // -- Journey trip: "La Réunion : la côte sauvage du Sud et les baleines de Saint-Leu" --
  { key: "journeys/reunion-sudsauvage-saintleu-hero.jpg", url: "https://images.pexels.com/photos/6134240/pexels-photo-6134240.jpeg" },
  { key: "journeys/reunion-sudsauvage-gallery1.jpg", url: "https://images.pexels.com/photos/38000612/pexels-photo-38000612.jpeg" },
  { key: "journeys/reunion-sudsauvage-gallery2.jpg", url: "https://images.pexels.com/photos/36064056/pexels-photo-36064056.jpeg" },
  { key: "journeys/reunion-sudsauvage-gallery3.jpg", url: "https://images.pexels.com/photos/28588346/pexels-photo-28588346.jpeg" },
  { key: "journeys/reunion-sudsauvage-day1.jpg", url: "https://images.pexels.com/photos/34350147/pexels-photo-34350147.jpeg" },
  { key: "journeys/reunion-sudsauvage-day2.jpg", url: "https://images.pexels.com/photos/29269787/pexels-photo-29269787.jpeg" },
  { key: "journeys/reunion-saintleu-gallery1.jpg", url: "https://images.pexels.com/photos/6134257/pexels-photo-6134257.jpeg" },
  { key: "journeys/reunion-saintleu-gallery2.jpg", url: "https://images.pexels.com/photos/6134284/pexels-photo-6134284.jpeg" },
  { key: "journeys/reunion-saintleu-gallery3.jpg", url: "https://images.pexels.com/photos/13820932/pexels-photo-13820932.jpeg" },
  { key: "journeys/reunion-saintleu-day1.jpg", url: "https://images.pexels.com/photos/13028012/pexels-photo-13028012.jpeg" },
  { key: "journeys/reunion-saintleu-day2.jpg", url: "https://images.pexels.com/photos/19926804/pexels-photo-19926804.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/ocean-indien-1.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
