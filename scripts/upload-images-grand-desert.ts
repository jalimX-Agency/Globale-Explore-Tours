// Sourced from Pexels (free commercial license, no attribution required) via WebFetch on
// pexels.com search pages, then verified visually before being listed here.
// Run with: npx tsx scripts/upload-images-grand-desert.ts
process.loadEnvFile(".env");

import { join } from "node:path";

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  { key: "tours/grand-desert-marrakech-medina.jpg", url: "https://images.pexels.com/photos/13474271/pexels-photo-13474271.jpeg" },
  { key: "tours/grand-desert-tizi-ntichka.jpg", url: "https://images.pexels.com/photos/37672148/pexels-photo-37672148.jpeg" },
  { key: "tours/grand-desert-ait-ben-haddou.jpg", url: "https://images.pexels.com/photos/33514521/pexels-photo-33514521.jpeg" },
  { key: "tours/grand-desert-poterie.jpg", url: "https://images.pexels.com/photos/30557507/pexels-photo-30557507.jpeg" },
  { key: "tours/grand-desert-gorges-dades.jpg", url: "https://images.pexels.com/photos/14145715/pexels-photo-14145715.jpeg" },
  { key: "tours/grand-desert-kasbah-tamnougalt.jpg", url: "https://images.pexels.com/photos/23456866/pexels-photo-23456866.jpeg" },
  { key: "tours/grand-desert-tisserands.jpg", url: "https://images.pexels.com/photos/9552186/pexels-photo-9552186.jpeg" },
  { key: "tours/grand-desert-dunes-crepuscule.jpg", url: "https://images.pexels.com/photos/30710172/pexels-photo-30710172.jpeg" },
  { key: "tours/grand-desert-dunes-isolees.jpg", url: "https://images.pexels.com/photos/13714970/pexels-photo-13714970.jpeg" },
  { key: "tours/grand-desert-hamada.jpg", url: "https://images.pexels.com/photos/9464158/pexels-photo-9464158.jpeg" },
  { key: "tours/grand-desert-tannerie.jpg", url: "https://images.pexels.com/photos/38112369/pexels-photo-38112369.jpeg" },
  { key: "tours/grand-desert-remparts.jpg", url: "https://images.pexels.com/photos/37926810/pexels-photo-37926810.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  const manifestPath = join(__dirname, ".manifests", "grand-desert.json");
  await uploadImageBatch(images, manifestPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
