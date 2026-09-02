export {};

// One-off fix for 4 broken (404) R2 objects on live Morocco pages — the underlying files were
// deleted at some point (likely as part of another session's "fix duplicated/mismatched trip
// images" work), but several Tour/TourSection/TourHotel/ContentBlock rows still reference
// these exact keys. Re-uploading a suitable replacement to the SAME key fixes every page that
// references it — no DB changes needed. Confirmed broken via live HTTP 404 checks and found
// still rendered on:
//   - /fr/destinations/afrique/maroc (ContentBlock "Une nuit dans le Sahara")
//   - /fr/destinations/afrique/maroc/maroc-en-profondeur-villes-imperiales-sahara
//   - /fr/destinations/afrique/maroc/fes-essaouira-agadir-medinas-littoral
//   - /fr/destinations/afrique/maroc/voyage-au-maroc-marrakech-agafay-haut-atlas
//
//   npx tsx scripts/fix-broken-maroc-images.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // Sahara dunes at dusk — matches the "Une nuit dans le Sahara" ContentBlock theme.
    { key: "blocks/maroc-sahara.jpg", url: "https://images.pexels.com/photos/30710172/pexels-photo-30710172.jpeg" },
    // Taghazout, Atlantic surf coastline near Agadir.
    { key: "tours/decouverte-taghazout-gallery-3.jpg", url: "https://images.pexels.com/photos/38786762/pexels-photo-38786762.jpeg" },
    // Paradise Valley, palm oasis canyon near Agadir — cover + one gallery shot.
    { key: "tours/paradise-valley.jpg", url: "https://images.pexels.com/photos/36685507/pexels-photo-36685507.jpeg" },
    { key: "tours/paradise-valley-gallery-1.jpg", url: "https://images.pexels.com/photos/30544112/pexels-photo-30544112.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/fix-broken-maroc-images.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
