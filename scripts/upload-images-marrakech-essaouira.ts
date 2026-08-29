// Sourced from Pexels (free commercial license, no attribution required) via WebFetch on
// pexels.com search pages, then verified visually before being listed here.
// Run with: npx tsx scripts/upload-images-marrakech-essaouira.ts
process.loadEnvFile(".env");

import { join } from "node:path";

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  { key: "tours/marrakech-essaouira-quad.jpg", url: "https://images.pexels.com/photos/11294565/pexels-photo-11294565.jpeg" },
  { key: "tours/marrakech-essaouira-kitesurf.jpg", url: "https://images.pexels.com/photos/5141507/pexels-photo-5141507.jpeg" },
  { key: "tours/marrakech-essaouira-argan-goats.jpg", url: "https://images.pexels.com/photos/9756598/pexels-photo-9756598.jpeg" },
  { key: "tours/marrakech-essaouira-harbor.jpg", url: "https://images.pexels.com/photos/13308439/pexels-photo-13308439.jpeg" },
  { key: "tours/marrakech-essaouira-blue-streets.jpg", url: "https://images.pexels.com/photos/30232565/pexels-photo-30232565.jpeg" },
  { key: "tours/marrakech-essaouira-atlas-village.jpg", url: "https://images.pexels.com/photos/37684070/pexels-photo-37684070.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  const manifestPath = join(__dirname, ".manifests", "marrakech-essaouira.json");
  await uploadImageBatch(images, manifestPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
