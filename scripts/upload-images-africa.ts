// Sourced from Pexels (free commercial license, no attribution required — same source class
// the existing catalog already uses) via WebFetch on pexels.com search pages, then verified
// live with a direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-africa.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

process.loadEnvFile(".env");

import { readFileSync } from "node:fs";
import { join } from "node:path";

type ImageSpec = { key: string; url: string };

const africaImages: ImageSpec[] = [
  // -- Journey trip: "Kenya du Nord : Lewa et Samburu" --
  { key: "journeys/kenya-nord-hero.jpg", url: "https://images.pexels.com/photos/12029294/pexels-photo-12029294.jpeg" },
  { key: "journeys/kenya-nord-lewa-gallery1.jpg", url: "https://images.pexels.com/photos/18000427/pexels-photo-18000427.jpeg" },
  { key: "journeys/kenya-nord-lewa-gallery2.jpg", url: "https://images.pexels.com/photos/7251110/pexels-photo-7251110.jpeg" },
  { key: "journeys/kenya-nord-lewa-gallery3.jpg", url: "https://images.pexels.com/photos/6156855/pexels-photo-6156855.jpeg" },
  { key: "journeys/kenya-nord-samburu-gallery1.jpg", url: "https://images.pexels.com/photos/29435756/pexels-photo-29435756.jpeg" },
  { key: "journeys/kenya-nord-samburu-gallery2.jpg", url: "https://images.pexels.com/photos/30972239/pexels-photo-30972239.jpeg" },
  { key: "journeys/kenya-nord-samburu-gallery3.jpg", url: "https://images.pexels.com/photos/31020851/pexels-photo-31020851.jpeg" },
  { key: "journeys/kenya-nord-samburu-gallery4.jpg", url: "https://images.pexels.com/photos/36021436/pexels-photo-36021436.jpeg" },
  { key: "journeys/kenya-nord-lewa-day1.jpg", url: "https://images.pexels.com/photos/18000460/pexels-photo-18000460.jpeg" },
  { key: "journeys/kenya-nord-lewa-day2.jpg", url: "https://images.pexels.com/photos/7182178/pexels-photo-7182178.jpeg" },
  { key: "journeys/kenya-nord-samburu-day1.jpg", url: "https://images.pexels.com/photos/28555071/pexels-photo-28555071.jpeg" },
  { key: "journeys/kenya-nord-samburu-day2.jpg", url: "https://images.pexels.com/photos/16238102/pexels-photo-16238102.jpeg" },

  // -- Standard trip: "Kenya : la côte swahilie, de Diani à Lamu" --
  { key: "tours/kenya-cote-diani-lamu.jpg", url: "https://images.pexels.com/photos/35067629/pexels-photo-35067629.jpeg" },
  { key: "trips/kenya-cote-gallery-1.jpg", url: "https://images.pexels.com/photos/1476356/pexels-photo-1476356.jpeg" },
  { key: "trips/kenya-cote-gallery-2.jpg", url: "https://images.pexels.com/photos/35890017/pexels-photo-35890017.jpeg" },
  { key: "trips/kenya-cote-gallery-3.jpg", url: "https://images.pexels.com/photos/18558205/pexels-photo-18558205.jpeg" },
  { key: "trips/kenya-cote-gallery-4.jpg", url: "https://images.pexels.com/photos/30282791/pexels-photo-30282791.jpeg" },
  { key: "trips/kenya-cote-gallery-5.jpg", url: "https://images.pexels.com/photos/30282793/pexels-photo-30282793.jpeg" },
  { key: "trips/kenya-cote-gallery-6.jpg", url: "https://images.pexels.com/photos/17368124/pexels-photo-17368124.jpeg" },
  { key: "trips/kenya-cote-hotel-diani.jpg", url: "https://images.pexels.com/photos/15948257/pexels-photo-15948257.jpeg" },
  { key: "trips/kenya-cote-hotel-lamu.jpg", url: "https://images.pexels.com/photos/15898680/pexels-photo-15898680.jpeg" },

  // -- Standard trip: "Afrique du Sud : la Garden Route, de Port Elizabeth au Cap" --
  { key: "tours/afrique-du-sud-garden-route.jpg", url: "https://images.pexels.com/photos/38853002/pexels-photo-38853002.jpeg" },
  { key: "trips/afrique-du-sud-garden-route-gallery-1.jpg", url: "https://images.pexels.com/photos/38853004/pexels-photo-38853004.jpeg" },
  { key: "trips/afrique-du-sud-garden-route-gallery-2.jpg", url: "https://images.pexels.com/photos/38853006/pexels-photo-38853006.jpeg" },
  { key: "trips/afrique-du-sud-garden-route-gallery-3.jpg", url: "https://images.pexels.com/photos/38201192/pexels-photo-38201192.jpeg" },
  { key: "trips/afrique-du-sud-garden-route-gallery-4.jpg", url: "https://images.pexels.com/photos/36764016/pexels-photo-36764016.jpeg" },
  { key: "trips/afrique-du-sud-garden-route-gallery-5.jpg", url: "https://images.pexels.com/photos/14982212/pexels-photo-14982212.jpeg" },
  { key: "trips/afrique-du-sud-garden-route-gallery-6.jpg", url: "https://images.pexels.com/photos/33641653/pexels-photo-33641653.jpeg" },
  { key: "trips/afrique-du-sud-garden-route-hotel-tsitsikamma.jpg", url: "https://images.pexels.com/photos/38852998/pexels-photo-38852998.jpeg" },
  { key: "trips/afrique-du-sud-garden-route-hotel-hermanus.jpg", url: "https://images.pexels.com/photos/36764002/pexels-photo-36764002.jpeg" },

  // -- Journey trip: "Afrique du Sud : KwaZulu-Natal, du Drakensberg à la mer" --
  { key: "journeys/afrique-du-sud-kzn-hero.jpg", url: "https://images.pexels.com/photos/33702607/pexels-photo-33702607.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-drakensberg-gallery1.jpg", url: "https://images.pexels.com/photos/33702535/pexels-photo-33702535.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-drakensberg-gallery2.jpg", url: "https://images.pexels.com/photos/31315433/pexels-photo-31315433.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-drakensberg-gallery3.jpg", url: "https://images.pexels.com/photos/6486008/pexels-photo-6486008.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-drakensberg-day1.jpg", url: "https://images.pexels.com/photos/32420127/pexels-photo-32420127.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-drakensberg-day2.jpg", url: "https://images.pexels.com/photos/16105126/pexels-photo-16105126.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-isimangaliso-gallery1.jpg", url: "https://images.pexels.com/photos/33500836/pexels-photo-33500836.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-isimangaliso-gallery2.jpg", url: "https://images.pexels.com/photos/19085507/pexels-photo-19085507.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-isimangaliso-gallery3.jpg", url: "https://images.pexels.com/photos/30333011/pexels-photo-30333011.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-isimangaliso-day1.jpg", url: "https://images.pexels.com/photos/30172601/pexels-photo-30172601.jpeg" },
  { key: "journeys/afrique-du-sud-kzn-isimangaliso-day2.jpg", url: "https://images.pexels.com/photos/30333010/pexels-photo-30333010.jpeg" },

  // -- Standard trip: "Botswana : Kalahari et Makgadikgadi" --
  { key: "tours/botswana-kalahari-makgadikgadi.jpg", url: "https://images.pexels.com/photos/33083959/pexels-photo-33083959.jpeg" },
  { key: "trips/botswana-kalahari-gallery-1.jpg", url: "https://images.pexels.com/photos/7557707/pexels-photo-7557707.jpeg" },
  { key: "trips/botswana-kalahari-gallery-2.jpg", url: "https://images.pexels.com/photos/17176393/pexels-photo-17176393.jpeg" },
  { key: "trips/botswana-kalahari-gallery-3.jpg", url: "https://images.pexels.com/photos/14328415/pexels-photo-14328415.jpeg" },
  { key: "trips/botswana-kalahari-gallery-4.jpg", url: "https://images.pexels.com/photos/7002612/pexels-photo-7002612.jpeg" },
  { key: "trips/botswana-kalahari-gallery-5.jpg", url: "https://images.pexels.com/photos/20208990/pexels-photo-20208990.jpeg" },
  { key: "trips/botswana-kalahari-gallery-6.jpg", url: "https://images.pexels.com/photos/17526403/pexels-photo-17526403.jpeg" },
  { key: "trips/botswana-kalahari-hotel-kalahari.jpg", url: "https://images.pexels.com/photos/17831034/pexels-photo-17831034.jpeg" },
  { key: "trips/botswana-kalahari-hotel-makgadikgadi.jpg", url: "https://images.pexels.com/photos/18611231/pexels-photo-18611231.jpeg" },

  // -- Journey trip: "Botswana : Chobe, le fleuve aux éléphants" --
  { key: "journeys/botswana-chobe-hero.jpg", url: "https://images.pexels.com/photos/7235409/pexels-photo-7235409.jpeg" },
  { key: "journeys/botswana-chobe-gallery1.jpg", url: "https://images.pexels.com/photos/12563366/pexels-photo-12563366.jpeg" },
  { key: "journeys/botswana-chobe-gallery2.jpg", url: "https://images.pexels.com/photos/7235413/pexels-photo-7235413.jpeg" },
  { key: "journeys/botswana-chobe-gallery3.jpg", url: "https://images.pexels.com/photos/9106782/pexels-photo-9106782.jpeg" },
  { key: "journeys/botswana-chobe-day1.jpg", url: "https://images.pexels.com/photos/5125390/pexels-photo-5125390.jpeg" },
  { key: "journeys/botswana-chobe-day2.jpg", url: "https://images.pexels.com/photos/37902517/pexels-photo-37902517.jpeg" },
  { key: "journeys/botswana-linyanti-gallery1.jpg", url: "https://images.pexels.com/photos/39257508/pexels-photo-39257508.jpeg" },
  { key: "journeys/botswana-linyanti-gallery2.jpg", url: "https://images.pexels.com/photos/34595631/pexels-photo-34595631.jpeg" },
  { key: "journeys/botswana-linyanti-gallery3.jpg", url: "https://images.pexels.com/photos/7235405/pexels-photo-7235405.jpeg" },
  { key: "journeys/botswana-linyanti-day1.jpg", url: "https://images.pexels.com/photos/4255189/pexels-photo-4255189.jpeg" },
  { key: "journeys/botswana-linyanti-day2.jpg", url: "https://images.pexels.com/photos/37573617/pexels-photo-37573617.jpeg" },

  // -- Standard trip: "Égypte : la mer Rouge, Hurghada et El Gouna" --
  { key: "tours/egypte-mer-rouge-hurghada.jpg", url: "https://images.pexels.com/photos/1540108/pexels-photo-1540108.jpeg" },
  { key: "trips/egypte-mer-rouge-gallery-1.jpg", url: "https://images.pexels.com/photos/31895961/pexels-photo-31895961.jpeg" },
  { key: "trips/egypte-mer-rouge-gallery-2.jpg", url: "https://images.pexels.com/photos/4809065/pexels-photo-4809065.jpeg" },
  { key: "trips/egypte-mer-rouge-gallery-3.jpg", url: "https://images.pexels.com/photos/32522831/pexels-photo-32522831.jpeg" },
  { key: "trips/egypte-mer-rouge-gallery-4.jpg", url: "https://images.pexels.com/photos/37110383/pexels-photo-37110383.jpeg" },
  { key: "trips/egypte-mer-rouge-gallery-5.jpg", url: "https://images.pexels.com/photos/20401343/pexels-photo-20401343.jpeg" },
  { key: "trips/egypte-mer-rouge-gallery-6.jpg", url: "https://images.pexels.com/photos/12937505/pexels-photo-12937505.jpeg" },
  { key: "trips/egypte-mer-rouge-hotel-hurghada.jpg", url: "https://images.pexels.com/photos/18614692/pexels-photo-18614692.jpeg" },
  { key: "trips/egypte-mer-rouge-hotel-elgouna.jpg", url: "https://images.pexels.com/photos/20401331/pexels-photo-20401331.jpeg" },

  // -- Journey trip: "Égypte : Sinaï et désert Blanc, l'autre Égypte" --
  { key: "journeys/egypte-sinai-hero.jpg", url: "https://images.pexels.com/photos/35966384/pexels-photo-35966384.jpeg" },
  { key: "journeys/egypte-sinai-gallery1.jpg", url: "https://images.pexels.com/photos/35966438/pexels-photo-35966438.jpeg" },
  { key: "journeys/egypte-sinai-gallery2.jpg", url: "https://images.pexels.com/photos/35997094/pexels-photo-35997094.jpeg" },
  { key: "journeys/egypte-sinai-gallery3.jpg", url: "https://images.pexels.com/photos/11560860/pexels-photo-11560860.jpeg" },
  { key: "journeys/egypte-sinai-day1.jpg", url: "https://images.pexels.com/photos/35997099/pexels-photo-35997099.jpeg" },
  { key: "journeys/egypte-sinai-day2.jpg", url: "https://images.pexels.com/photos/35966383/pexels-photo-35966383.jpeg" },
  { key: "journeys/egypte-desert-blanc-gallery1.jpg", url: "https://images.pexels.com/photos/32739448/pexels-photo-32739448.jpeg" },
  { key: "journeys/egypte-desert-blanc-gallery2.jpg", url: "https://images.pexels.com/photos/30400589/pexels-photo-30400589.jpeg" },
  { key: "journeys/egypte-desert-blanc-gallery3.jpg", url: "https://images.pexels.com/photos/34328977/pexels-photo-34328977.jpeg" },
  { key: "journeys/egypte-desert-blanc-day1.jpg", url: "https://images.pexels.com/photos/7403631/pexels-photo-7403631.jpeg" },
  { key: "journeys/egypte-desert-blanc-day2.jpg", url: "https://images.pexels.com/photos/7403671/pexels-photo-7403671.jpeg" },
];

// Local file, uploaded as-is (not downloaded from a URL like the rest).
const localImages: { key: string; filePath: string; contentType: string }[] = [
  {
    key: "journeys/kenya-nord-map.svg",
    filePath: join(
      "C:", "Users", "pc", "AppData", "Local", "Temp", "claude",
      "C--projects-client-projects-Globale-Explore-Tours",
      "b7891be9-6c0b-4908-b674-3d8fe2ccf778", "scratchpad", "kenya-nord-map.svg"
    ),
    contentType: "image/svg+xml",
  },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  const { uploadToR2 } = await import("../src/lib/r2");

  await uploadImageBatch(africaImages, "scripts/.manifests/africa.json");

  for (const img of localImages) {
    const buffer = readFileSync(img.filePath);
    await uploadToR2(img.key, buffer, img.contentType);
    console.log(`OK   ${img.key} (local file)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
