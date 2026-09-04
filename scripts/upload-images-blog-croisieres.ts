export {};

// Hero image for the new blog post "Croisière en petit navire : le guide complet".
// Run before scripts/seed-blog-croisieres.ts.
//   npx tsx scripts/upload-images-blog-croisieres.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    { key: "blog/croisiere-petit-navire-guide-hero.jpg", url: "https://images.pexels.com/photos/36140352/pexels-photo-36140352.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/blog-croisieres.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
