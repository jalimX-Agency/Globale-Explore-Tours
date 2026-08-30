// Batch 5 — Zambia, Uganda, Tunisia, Zimbabwe. Sourced from Pexels (free commercial license,
// no attribution required) via WebFetch on pexels.com search pages, then verified live with a
// direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-africa-5.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Zambie : le Bas-Zambèze, safari en canoë" --
  { key: "tours/zambie-bas-zambeze.jpg", url: "https://images.pexels.com/photos/7202618/pexels-photo-7202618.jpeg" },
  { key: "trips/zambie-bas-zambeze-gallery-1.jpg", url: "https://images.pexels.com/photos/7202619/pexels-photo-7202619.jpeg" },
  { key: "trips/zambie-bas-zambeze-gallery-2.jpg", url: "https://images.pexels.com/photos/30371893/pexels-photo-30371893.jpeg" },
  { key: "trips/zambie-bas-zambeze-gallery-3.jpg", url: "https://images.pexels.com/photos/6703505/pexels-photo-6703505.jpeg" },
  { key: "trips/zambie-bas-zambeze-gallery-4.jpg", url: "https://images.pexels.com/photos/1054672/pexels-photo-1054672.jpeg" },
  { key: "trips/zambie-bas-zambeze-gallery-5.jpg", url: "https://images.pexels.com/photos/5125390/pexels-photo-5125390.jpeg" },
  { key: "trips/zambie-bas-zambeze-gallery-6.jpg", url: "https://images.pexels.com/photos/33643712/pexels-photo-33643712.png" },
  { key: "trips/zambie-bas-zambeze-hotel-sausagetree.jpg", url: "https://images.pexels.com/photos/6790685/pexels-photo-6790685.jpeg" },
  { key: "trips/zambie-bas-zambeze-hotel-chiawa.jpg", url: "https://images.pexels.com/photos/9130979/pexels-photo-9130979.jpeg" },

  // -- Journey trip: "Zambie : le parc du Kafue, la nature à l'état brut" --
  { key: "journeys/zambie-kafue-hero.jpg", url: "https://images.pexels.com/photos/8975754/pexels-photo-8975754.jpeg" },
  { key: "journeys/zambie-busanga-gallery1.jpg", url: "https://images.pexels.com/photos/17135378/pexels-photo-17135378.jpeg" },
  { key: "journeys/zambie-busanga-gallery2.jpg", url: "https://images.pexels.com/photos/14854868/pexels-photo-14854868.jpeg" },
  { key: "journeys/zambie-busanga-gallery3.jpg", url: "https://images.pexels.com/photos/13590779/pexels-photo-13590779.jpeg" },
  { key: "journeys/zambie-busanga-day1.jpg", url: "https://images.pexels.com/photos/29003461/pexels-photo-29003461.jpeg" },
  { key: "journeys/zambie-busanga-day2.jpg", url: "https://images.pexels.com/photos/39034105/pexels-photo-39034105.jpeg" },
  { key: "journeys/zambie-kafueriver-gallery1.jpg", url: "https://images.pexels.com/photos/6241459/pexels-photo-6241459.jpeg" },
  { key: "journeys/zambie-kafueriver-gallery2.jpg", url: "https://images.pexels.com/photos/14855018/pexels-photo-14855018.jpeg" },
  { key: "journeys/zambie-kafueriver-gallery3.jpg", url: "https://images.pexels.com/photos/31481933/pexels-photo-31481933.jpeg" },
  { key: "journeys/zambie-kafueriver-day1.jpg", url: "https://images.pexels.com/photos/37638743/pexels-photo-37638743.jpeg" },
  { key: "journeys/zambie-kafueriver-day2.jpg", url: "https://images.pexels.com/photos/34644439/pexels-photo-34644439.jpeg" },

  // -- Standard trip: "Ouganda : Murchison Falls, le Nil déchaîné" --
  { key: "tours/ouganda-murchison-falls.jpg", url: "https://images.pexels.com/photos/31939652/pexels-photo-31939652.jpeg" },
  { key: "trips/ouganda-murchison-falls-gallery-1.jpg", url: "https://images.pexels.com/photos/29897218/pexels-photo-29897218.jpeg" },
  { key: "trips/ouganda-murchison-falls-gallery-2.jpg", url: "https://images.pexels.com/photos/29897219/pexels-photo-29897219.jpeg" },
  { key: "trips/ouganda-murchison-falls-gallery-3.jpg", url: "https://images.pexels.com/photos/31740855/pexels-photo-31740855.jpeg" },
  { key: "trips/ouganda-murchison-falls-gallery-4.jpg", url: "https://images.pexels.com/photos/39048488/pexels-photo-39048488.jpeg" },
  { key: "trips/ouganda-murchison-falls-gallery-5.jpg", url: "https://images.pexels.com/photos/13530267/pexels-photo-13530267.jpeg" },
  { key: "trips/ouganda-murchison-falls-gallery-6.jpg", url: "https://images.pexels.com/photos/6827273/pexels-photo-6827273.jpeg" },
  { key: "trips/ouganda-murchison-falls-hotel-paraa.jpg", url: "https://images.pexels.com/photos/37638742/pexels-photo-37638742.jpeg" },
  { key: "trips/ouganda-murchison-falls-hotel-bakers.jpg", url: "https://images.pexels.com/photos/13255158/pexels-photo-13255158.jpeg" },

  // -- Journey trip: "Ouganda : les monts Rwenzori et le lac Bunyonyi" --
  { key: "journeys/ouganda-rwenzori-bunyonyi-hero.jpg", url: "https://images.pexels.com/photos/28510764/pexels-photo-28510764.jpeg" },
  { key: "journeys/ouganda-rwenzori-gallery1.jpg", url: "https://images.pexels.com/photos/35106826/pexels-photo-35106826.jpeg" },
  { key: "journeys/ouganda-rwenzori-gallery2.jpg", url: "https://images.pexels.com/photos/5193343/pexels-photo-5193343.jpeg" },
  { key: "journeys/ouganda-rwenzori-gallery3.jpg", url: "https://images.pexels.com/photos/12077118/pexels-photo-12077118.jpeg" },
  { key: "journeys/ouganda-rwenzori-day1.jpg", url: "https://images.pexels.com/photos/8389360/pexels-photo-8389360.jpeg" },
  { key: "journeys/ouganda-rwenzori-day2.jpg", url: "https://images.pexels.com/photos/37855557/pexels-photo-37855557.jpeg" },
  { key: "journeys/ouganda-bunyonyi-gallery1.jpg", url: "https://images.pexels.com/photos/37638752/pexels-photo-37638752.jpeg" },
  { key: "journeys/ouganda-bunyonyi-gallery2.jpg", url: "https://images.pexels.com/photos/14078247/pexels-photo-14078247.jpeg" },
  { key: "journeys/ouganda-bunyonyi-gallery3.jpg", url: "https://images.pexels.com/photos/28263584/pexels-photo-28263584.jpeg" },
  { key: "journeys/ouganda-bunyonyi-day1.jpg", url: "https://images.pexels.com/photos/37638743/pexels-photo-37638743.jpeg" },
  { key: "journeys/ouganda-bunyonyi-day2.jpg", url: "https://images.pexels.com/photos/13255158/pexels-photo-13255158.jpeg" },

  // -- Standard trip: "Tunisie : Djerba, l'île aux mille couleurs" --
  { key: "tours/tunisie-djerba.jpg", url: "https://images.pexels.com/photos/15965246/pexels-photo-15965246.jpeg" },
  { key: "trips/tunisie-djerba-gallery-1.jpg", url: "https://images.pexels.com/photos/6460890/pexels-photo-6460890.jpeg" },
  { key: "trips/tunisie-djerba-gallery-2.jpg", url: "https://images.pexels.com/photos/37296581/pexels-photo-37296581.jpeg" },
  { key: "trips/tunisie-djerba-gallery-3.jpg", url: "https://images.pexels.com/photos/39200187/pexels-photo-39200187.jpeg" },
  { key: "trips/tunisie-djerba-gallery-4.jpg", url: "https://images.pexels.com/photos/35410577/pexels-photo-35410577.jpeg" },
  { key: "trips/tunisie-djerba-gallery-5.jpg", url: "https://images.pexels.com/photos/39200193/pexels-photo-39200193.jpeg" },
  { key: "trips/tunisie-djerba-gallery-6.jpg", url: "https://images.pexels.com/photos/31481326/pexels-photo-31481326.jpeg" },
  { key: "trips/tunisie-djerba-hotel-dardhiafa.jpg", url: "https://images.pexels.com/photos/6460882/pexels-photo-6460882.jpeg" },
  { key: "trips/tunisie-djerba-hotel-yasmin.jpg", url: "https://images.pexels.com/photos/28300250/pexels-photo-28300250.jpeg" },

  // -- Journey trip: "Tunisie : Kairouan et Dougga, sur la route de l'intérieur" --
  { key: "journeys/tunisie-kairouan-dougga-hero.jpg", url: "https://images.pexels.com/photos/37257225/pexels-photo-37257225.jpeg" },
  { key: "journeys/tunisie-kairouan-gallery1.jpg", url: "https://images.pexels.com/photos/38978084/pexels-photo-38978084.jpeg" },
  { key: "journeys/tunisie-kairouan-gallery2.jpg", url: "https://images.pexels.com/photos/37243430/pexels-photo-37243430.jpeg" },
  { key: "journeys/tunisie-kairouan-gallery3.jpg", url: "https://images.pexels.com/photos/35087908/pexels-photo-35087908.jpeg" },
  { key: "journeys/tunisie-kairouan-day1.jpg", url: "https://images.pexels.com/photos/37243431/pexels-photo-37243431.jpeg" },
  { key: "journeys/tunisie-kairouan-day2.jpg", url: "https://images.pexels.com/photos/37243432/pexels-photo-37243432.jpeg" },
  { key: "journeys/tunisie-dougga-gallery1.jpg", url: "https://images.pexels.com/photos/17420649/pexels-photo-17420649.jpeg" },
  { key: "journeys/tunisie-dougga-gallery2.jpg", url: "https://images.pexels.com/photos/27546724/pexels-photo-27546724.jpeg" },
  { key: "journeys/tunisie-dougga-gallery3.jpg", url: "https://images.pexels.com/photos/30939962/pexels-photo-30939962.jpeg" },
  { key: "journeys/tunisie-dougga-day1.jpg", url: "https://images.pexels.com/photos/17420652/pexels-photo-17420652.jpeg" },
  { key: "journeys/tunisie-dougga-day2.jpg", url: "https://images.pexels.com/photos/27546755/pexels-photo-27546755.jpeg" },

  // -- Standard trip: "Zimbabwe : Mana Pools, le sanctuaire du Zambèze" --
  { key: "tours/zimbabwe-mana-pools.jpg", url: "https://images.pexels.com/photos/31336816/pexels-photo-31336816.jpeg" },
  { key: "trips/zimbabwe-mana-pools-gallery-1.jpg", url: "https://images.pexels.com/photos/7235409/pexels-photo-7235409.jpeg" },
  { key: "trips/zimbabwe-mana-pools-gallery-2.jpg", url: "https://images.pexels.com/photos/7235414/pexels-photo-7235414.jpeg" },
  { key: "trips/zimbabwe-mana-pools-gallery-3.jpg", url: "https://images.pexels.com/photos/9106782/pexels-photo-9106782.jpeg" },
  { key: "trips/zimbabwe-mana-pools-gallery-4.jpg", url: "https://images.pexels.com/photos/7235405/pexels-photo-7235405.jpeg" },
  { key: "trips/zimbabwe-mana-pools-gallery-5.jpg", url: "https://images.pexels.com/photos/31370275/pexels-photo-31370275.jpeg" },
  { key: "trips/zimbabwe-mana-pools-gallery-6.jpg", url: "https://images.pexels.com/photos/16241901/pexels-photo-16241901.jpeg" },
  { key: "trips/zimbabwe-mana-pools-hotel-ruckomechi.jpg", url: "https://images.pexels.com/photos/6790680/pexels-photo-6790680.jpeg" },
  { key: "trips/zimbabwe-mana-pools-hotel-expeditions.jpg", url: "https://images.pexels.com/photos/17831034/pexels-photo-17831034.jpeg" },

  // -- Journey trip: "Zimbabwe : le Grand Zimbabwe et les collines de Matobo" --
  { key: "journeys/zimbabwe-grandzim-matobo-hero.jpg", url: "https://images.pexels.com/photos/12420771/pexels-photo-12420771.jpeg" },
  { key: "journeys/zimbabwe-grandzim-gallery1.jpg", url: "https://images.pexels.com/photos/31654569/pexels-photo-31654569.jpeg" },
  { key: "journeys/zimbabwe-grandzim-gallery2.jpg", url: "https://images.pexels.com/photos/9551082/pexels-photo-9551082.jpeg" },
  { key: "journeys/zimbabwe-grandzim-gallery3.jpg", url: "https://images.pexels.com/photos/18511976/pexels-photo-18511976.jpeg" },
  { key: "journeys/zimbabwe-grandzim-day1.jpg", url: "https://images.pexels.com/photos/20450506/pexels-photo-20450506.jpeg" },
  { key: "journeys/zimbabwe-grandzim-day2.jpg", url: "https://images.pexels.com/photos/12461890/pexels-photo-12461890.jpeg" },
  { key: "journeys/zimbabwe-matobo-gallery1.jpg", url: "https://images.pexels.com/photos/27691801/pexels-photo-27691801.jpeg" },
  { key: "journeys/zimbabwe-matobo-gallery2.jpg", url: "https://images.pexels.com/photos/10471882/pexels-photo-10471882.jpeg" },
  { key: "journeys/zimbabwe-matobo-gallery3.jpg", url: "https://images.pexels.com/photos/8044882/pexels-photo-8044882.jpeg" },
  { key: "journeys/zimbabwe-matobo-day1.jpg", url: "https://images.pexels.com/photos/30239041/pexels-photo-30239041.jpeg" },
  { key: "journeys/zimbabwe-matobo-day2.jpg", url: "https://images.pexels.com/photos/5915794/pexels-photo-5915794.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/africa-5.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
