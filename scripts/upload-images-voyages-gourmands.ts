// Sourced from Pexels (free commercial license, no attribution required) via WebFetch on
// pexels.com search pages, then verified visually before being listed here.
// Run with: npx tsx scripts/upload-images-voyages-gourmands.ts
process.loadEnvFile(".env");

import { join } from "node:path";

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  { key: "tours/voyages-gourmands-riad.jpg", url: "https://images.pexels.com/photos/18320914/pexels-photo-18320914.jpeg" },
  { key: "tours/voyages-gourmands-souk.jpg", url: "https://images.pexels.com/photos/35919230/pexels-photo-35919230.jpeg" },
  { key: "tours/voyages-gourmands-tajine.jpg", url: "https://images.pexels.com/photos/4917090/pexels-photo-4917090.jpeg" },
  { key: "tours/voyages-gourmands-jemaa-nuit.jpg", url: "https://images.pexels.com/photos/16188292/pexels-photo-16188292.jpeg" },
  { key: "tours/voyages-gourmands-agafay-camp.jpg", url: "https://images.pexels.com/photos/35666328/pexels-photo-35666328.jpeg" },
  { key: "tours/voyages-gourmands-agafay-montgolfiere.jpg", url: "https://images.pexels.com/photos/27498082/pexels-photo-27498082.jpeg" },
  { key: "tours/voyages-gourmands-agafay-chameaux.jpg", url: "https://images.pexels.com/photos/34275850/pexels-photo-34275850.jpeg" },
  { key: "tours/voyages-gourmands-oliviers.jpg", url: "https://images.pexels.com/photos/36005582/pexels-photo-36005582.jpeg" },
  { key: "tours/voyages-gourmands-lodge.jpg", url: "https://images.pexels.com/photos/37991058/pexels-photo-37991058.jpeg" },
  { key: "tours/voyages-gourmands-sidecar.jpg", url: "https://images.pexels.com/photos/2827379/pexels-photo-2827379.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  const manifestPath = join(__dirname, ".manifests", "voyages-gourmands.json");
  await uploadImageBatch(images, manifestPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
