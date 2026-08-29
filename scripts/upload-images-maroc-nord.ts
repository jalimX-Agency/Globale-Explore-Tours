// Sourced from Pexels (free commercial license, no attribution required) via WebFetch on
// pexels.com search pages, then verified visually before being listed here.
// Run with: npx tsx scripts/upload-images-maroc-nord.ts
process.loadEnvFile(".env");

import { join } from "node:path";

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  { key: "tours/maroc-nord-casablanca.jpg", url: "https://images.pexels.com/photos/30362133/pexels-photo-30362133.jpeg" },
  { key: "tours/maroc-nord-fes-medina.jpg", url: "https://images.pexels.com/photos/38112513/pexels-photo-38112513.jpeg" },
  { key: "tours/maroc-nord-tbal-artisan.jpg", url: "https://images.pexels.com/photos/32357220/pexels-photo-32357220.jpeg" },
  { key: "tours/maroc-nord-volubilis.jpg", url: "https://images.pexels.com/photos/18767562/pexels-photo-18767562.jpeg" },
  { key: "tours/maroc-nord-chefchaouen.jpg", url: "https://images.pexels.com/photos/5472518/pexels-photo-5472518.jpeg" },
  { key: "tours/maroc-nord-akchour.jpg", url: "https://images.pexels.com/photos/30580974/pexels-photo-30580974.jpeg" },
  { key: "tours/maroc-nord-marche-poisson.jpg", url: "https://images.pexels.com/photos/6313478/pexels-photo-6313478.jpeg" },
  { key: "tours/maroc-nord-asilah.jpg", url: "https://images.pexels.com/photos/25255084/pexels-photo-25255084.jpeg" },
  { key: "tours/maroc-nord-chevaux-plage.jpg", url: "https://images.pexels.com/photos/19943683/pexels-photo-19943683.jpeg" },
  { key: "tours/maroc-nord-pique-nique-coucher-soleil.jpg", url: "https://images.pexels.com/photos/27523570/pexels-photo-27523570.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  const manifestPath = join(__dirname, ".manifests", "maroc-nord.json");
  await uploadImageBatch(images, manifestPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
