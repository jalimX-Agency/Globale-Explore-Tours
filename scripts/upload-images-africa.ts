// Sourced from Pexels (free commercial license, no attribution required — same source class
// the existing catalog already uses) via WebFetch on pexels.com search pages, then verified
// live with a direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-africa.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

process.loadEnvFile(".env");

import { readFileSync } from "node:fs";
import { join } from "node:path";

type ImageSpec = { key: string; url: string };

const kenya: ImageSpec[] = [
  // -- Journey trip: "Kenya du Nord : Lewa et Samburu" --
  { key: "journeys/kenya-nord-hero.jpg", url: "https://images.pexels.com/photos/12029294/pexels-photo-12029294.jpeg" },
  { key: "journeys/kenya-nord-lewa-gallery1.jpg", url: "https://images.pexels.com/photos/18000427/pexels-photo-18000427.jpeg" },
  { key: "journeys/kenya-nord-lewa-gallery2.jpg", url: "https://images.pexels.com/photos/7251110/pexels-photo-7251110.jpeg" },
  { key: "journeys/kenya-nord-lewa-gallery3.jpg", url: "https://images.pexels.com/photos/6156855/pexels-photo-6156855.jpeg" },
  { key: "journeys/kenya-nord-samburu-gallery1.jpg", url: "https://images.pexels.com/photos/29435756/pexels-photo-29435756.jpeg" },
  { key: "journeys/kenya-nord-samburu-gallery2.jpg", url: "https://images.pexels.com/photos/30972239/pexels-photo-30972239.jpeg" },
  { key: "journeys/kenya-nord-samburu-gallery3.jpg", url: "https://images.pexels.com/photos/31020851/pexels-photo-31020851.jpeg" },
  { key: "journeys/kenya-nord-samburu-gallery4.jpg", url: "https://images.pexels.com/photos/36021436/pexels-photo-36021436.jpeg" },

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

  await uploadImageBatch(kenya, "scripts/.manifests/africa.json");

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
