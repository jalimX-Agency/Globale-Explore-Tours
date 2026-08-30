// Amérique du Nord batch 1 — Canada, États-Unis, Mexique. First region after completing the
// Africa pilot (17/17 destinations at 3+ trips). Sourced from Pexels (free commercial license,
// no attribution required) via WebFetch on pexels.com search pages, then verified live with a
// direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-amerique-du-nord.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Canada : la Nouvelle-Écosse et l'Île-du-Prince-Édouard" --
  { key: "tours/canada-nouvelle-ecosse-ipe.jpg", url: "https://images.pexels.com/photos/33068901/pexels-photo-33068901.jpeg" },
  { key: "trips/canada-nouvelle-ecosse-ipe-gallery-1.jpg", url: "https://images.pexels.com/photos/33068905/pexels-photo-33068905.jpeg" },
  { key: "trips/canada-nouvelle-ecosse-ipe-gallery-2.jpg", url: "https://images.pexels.com/photos/20548388/pexels-photo-20548388.jpeg" },
  { key: "trips/canada-nouvelle-ecosse-ipe-gallery-3.jpg", url: "https://images.pexels.com/photos/33730022/pexels-photo-33730022.jpeg" },
  { key: "trips/canada-nouvelle-ecosse-ipe-gallery-4.jpg", url: "https://images.pexels.com/photos/33730018/pexels-photo-33730018.jpeg" },
  { key: "trips/canada-nouvelle-ecosse-ipe-gallery-5.jpg", url: "https://images.pexels.com/photos/11150610/pexels-photo-11150610.jpeg" },
  { key: "trips/canada-nouvelle-ecosse-ipe-gallery-6.jpg", url: "https://images.pexels.com/photos/11528887/pexels-photo-11528887.jpeg" },
  { key: "trips/canada-nouvelle-ecosse-ipe-hotel-rossmount.jpg", url: "https://images.pexels.com/photos/34933250/pexels-photo-34933250.jpeg" },
  { key: "trips/canada-nouvelle-ecosse-ipe-hotel-greatgeorge.jpg", url: "https://images.pexels.com/photos/12716838/pexels-photo-12716838.jpeg" },

  // -- Journey trip: "Canada : Québec et Charlevoix, la route du fleuve" --
  { key: "journeys/canada-quebec-charlevoix-hero.jpg", url: "https://images.pexels.com/photos/38653032/pexels-photo-38653032.jpeg" },
  { key: "journeys/canada-quebec-gallery1.jpg", url: "https://images.pexels.com/photos/20419683/pexels-photo-20419683.jpeg" },
  { key: "journeys/canada-quebec-gallery2.jpg", url: "https://images.pexels.com/photos/2386870/pexels-photo-2386870.jpeg" },
  { key: "journeys/canada-quebec-gallery3.jpg", url: "https://images.pexels.com/photos/14342578/pexels-photo-14342578.jpeg" },
  { key: "journeys/canada-quebec-day1.jpg", url: "https://images.pexels.com/photos/34953824/pexels-photo-34953824.jpeg" },
  { key: "journeys/canada-quebec-day2.jpg", url: "https://images.pexels.com/photos/5687094/pexels-photo-5687094.jpeg" },
  { key: "journeys/canada-charlevoix-gallery1.jpg", url: "https://images.pexels.com/photos/14342621/pexels-photo-14342621.jpeg" },
  { key: "journeys/canada-charlevoix-gallery2.jpg", url: "https://images.pexels.com/photos/12630214/pexels-photo-12630214.jpeg" },
  { key: "journeys/canada-charlevoix-gallery3.jpg", url: "https://images.pexels.com/photos/17980729/pexels-photo-17980729.jpeg" },
  { key: "journeys/canada-charlevoix-day1.jpg", url: "https://images.pexels.com/photos/23325997/pexels-photo-23325997.jpeg" },
  { key: "journeys/canada-charlevoix-day2.jpg", url: "https://images.pexels.com/photos/18112276/pexels-photo-18112276.jpeg" },

  // -- Standard trip: "États-Unis : New York et la Nouvelle-Angleterre en couleurs d'automne" --
  { key: "tours/etats-unis-newyork-nouvelle-angleterre.jpg", url: "https://images.pexels.com/photos/12327112/pexels-photo-12327112.jpeg" },
  { key: "trips/etats-unis-nyne-gallery-1.jpg", url: "https://images.pexels.com/photos/1461370/pexels-photo-1461370.jpeg" },
  { key: "trips/etats-unis-nyne-gallery-2.jpg", url: "https://images.pexels.com/photos/9404571/pexels-photo-9404571.jpeg" },
  { key: "trips/etats-unis-nyne-gallery-3.jpg", url: "https://images.pexels.com/photos/38048122/pexels-photo-38048122.jpeg" },
  { key: "trips/etats-unis-nyne-gallery-4.jpg", url: "https://images.pexels.com/photos/462267/pexels-photo-462267.jpeg" },
  { key: "trips/etats-unis-nyne-gallery-5.jpg", url: "https://images.pexels.com/photos/34695223/pexels-photo-34695223.jpeg" },
  { key: "trips/etats-unis-nyne-gallery-6.jpg", url: "https://images.pexels.com/photos/33105783/pexels-photo-33105783.jpeg" },
  { key: "trips/etats-unis-nyne-hotel-ludlow.jpg", url: "https://images.pexels.com/photos/34377835/pexels-photo-34377835.jpeg" },
  { key: "trips/etats-unis-nyne-hotel-woodstockinn.jpg", url: "https://images.pexels.com/photos/13278381/pexels-photo-13278381.jpeg" },

  // -- Journey trip: "États-Unis : Hawaï, Maui et Big Island" --
  { key: "journeys/etats-unis-hawaii-hero.jpg", url: "https://images.pexels.com/photos/9650650/pexels-photo-9650650.jpeg" },
  { key: "journeys/etats-unis-maui-gallery1.jpg", url: "https://images.pexels.com/photos/11109300/pexels-photo-11109300.jpeg" },
  { key: "journeys/etats-unis-maui-gallery2.jpg", url: "https://images.pexels.com/photos/14705003/pexels-photo-14705003.jpeg" },
  { key: "journeys/etats-unis-maui-gallery3.jpg", url: "https://images.pexels.com/photos/4925229/pexels-photo-4925229.jpeg" },
  { key: "journeys/etats-unis-maui-day1.jpg", url: "https://images.pexels.com/photos/31350286/pexels-photo-31350286.jpeg" },
  { key: "journeys/etats-unis-maui-day2.jpg", url: "https://images.pexels.com/photos/11109302/pexels-photo-11109302.jpeg" },
  { key: "journeys/etats-unis-bigisland-gallery1.jpg", url: "https://images.pexels.com/photos/31908801/pexels-photo-31908801.jpeg" },
  { key: "journeys/etats-unis-bigisland-gallery2.jpg", url: "https://images.pexels.com/photos/580835/pexels-photo-580835.jpeg" },
  { key: "journeys/etats-unis-bigisland-gallery3.jpg", url: "https://images.pexels.com/photos/1687530/pexels-photo-1687530.jpeg" },
  { key: "journeys/etats-unis-bigisland-day1.jpg", url: "https://images.pexels.com/photos/68645/hawaii-volcano-hot-fire-68645.jpeg" },
  { key: "journeys/etats-unis-bigisland-day2.jpg", url: "https://images.pexels.com/photos/20468896/pexels-photo-20468896.jpeg" },

  // -- Standard trip: "Mexique : Oaxaca, l'âme culturelle du pays" --
  { key: "tours/mexique-oaxaca.jpg", url: "https://images.pexels.com/photos/27065503/pexels-photo-27065503.jpeg" },
  { key: "trips/mexique-oaxaca-gallery-1.jpg", url: "https://images.pexels.com/photos/37908041/pexels-photo-37908041.jpeg" },
  { key: "trips/mexique-oaxaca-gallery-2.jpg", url: "https://images.pexels.com/photos/19586638/pexels-photo-19586638.jpeg" },
  { key: "trips/mexique-oaxaca-gallery-3.jpg", url: "https://images.pexels.com/photos/12789411/pexels-photo-12789411.jpeg" },
  { key: "trips/mexique-oaxaca-gallery-4.jpg", url: "https://images.pexels.com/photos/33219418/pexels-photo-33219418.jpeg" },
  { key: "trips/mexique-oaxaca-gallery-5.jpg", url: "https://images.pexels.com/photos/23268059/pexels-photo-23268059.jpeg" },
  { key: "trips/mexique-oaxaca-gallery-6.jpg", url: "https://images.pexels.com/photos/16977437/pexels-photo-16977437.jpeg" },
  { key: "trips/mexique-oaxaca-hotel-casaoaxaca.jpg", url: "https://images.pexels.com/photos/37928700/pexels-photo-37928700.jpeg" },
  { key: "trips/mexique-oaxaca-hotel-quintareal.jpg", url: "https://images.pexels.com/photos/15978605/pexels-photo-15978605.jpeg" },

  // -- Journey trip: "Mexique : la Barranca del Cobre et la Basse-Californie" --
  { key: "journeys/mexique-copper-baja-hero.jpg", url: "https://images.pexels.com/photos/12271811/pexels-photo-12271811.jpeg" },
  { key: "journeys/mexique-coppercanyon-gallery1.jpg", url: "https://images.pexels.com/photos/12271801/pexels-photo-12271801.jpeg" },
  { key: "journeys/mexique-coppercanyon-gallery2.jpg", url: "https://images.pexels.com/photos/35811397/pexels-photo-35811397.jpeg" },
  { key: "journeys/mexique-coppercanyon-gallery3.jpg", url: "https://images.pexels.com/photos/35924543/pexels-photo-35924543.jpeg" },
  { key: "journeys/mexique-coppercanyon-day1.jpg", url: "https://images.pexels.com/photos/10002559/pexels-photo-10002559.jpeg" },
  { key: "journeys/mexique-coppercanyon-day2.jpg", url: "https://images.pexels.com/photos/12271803/pexels-photo-12271803.jpeg" },
  { key: "journeys/mexique-baja-gallery1.jpg", url: "https://images.pexels.com/photos/37590256/pexels-photo-37590256.jpeg" },
  { key: "journeys/mexique-baja-gallery2.jpg", url: "https://images.pexels.com/photos/15848619/pexels-photo-15848619.jpeg" },
  { key: "journeys/mexique-baja-gallery3.jpg", url: "https://images.pexels.com/photos/16159288/pexels-photo-16159288.jpeg" },
  { key: "journeys/mexique-baja-day1.jpg", url: "https://images.pexels.com/photos/37590255/pexels-photo-37590255.jpeg" },
  { key: "journeys/mexique-baja-day2.jpg", url: "https://images.pexels.com/photos/14019368/pexels-photo-14019368.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/amerique-du-nord.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
