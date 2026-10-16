// Cambodia circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-cambodge-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["cambodge-ma1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/MAGIE_CAMBODGE_2027/1.jpg"],
  ["cambodge-ma2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/MAGIE_CAMBODGE_2027/2.jpg"],
  ["cambodge-ma3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/MAGIE_CAMBODGE_2027/3.jpg"],
  ["cambodge-ma4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/MAGIE_CAMBODGE_2027/4.jpg"],
  ["cambodge-ma5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/MAGIE_CAMBODGE_2027/5.jpg"],
  ["cambodge-ma6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/MAGIE_CAMBODGE_2027/6.jpg"],
  ["cambodge-ma7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/MAGIE_CAMBODGE_2027/7.jpg"],
  ["cambodge-ma8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/MAGIE_CAMBODGE_2027/8.jpg"],
  ["cambodge-ci1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/CAMBODGE_INTIMISTE/1.jpeg"],
  ["cambodge-ci2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/CAMBODGE_INTIMISTE/2.jpeg"],
  ["cambodge-ci3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/CAMBODGE_INTIMISTE/3.jpeg"],
  ["cambodge-ci4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/CAMBODGE_INTIMISTE/4.jpeg"],
  ["cambodge-ci5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/CAMBODGE_INTIMISTE/5.jpeg"],
  ["cambodge-ci6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/CAMBODGE_INTIMISTE/6.jpeg"],
  ["cambodge-ci7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/CAMBODGE_INTIMISTE/7.jpeg"],
  ["cambodge-ci8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/CAMBODGE_INTIMISTE/8.jpeg"],
  ["cambodge-ci9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/CAMBODGE_INTIMISTE/9.jpeg"],
  ["cambodge-tc2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/INCONTOURNABLES_THAILAND_CAMBODGE_2024/2.jpeg"],
  ["cambodge-tc3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/INCONTOURNABLES_THAILAND_CAMBODGE_2024/3.jpeg"],
  ["cambodge-tc4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/INCONTOURNABLES_THAILAND_CAMBODGE_2024/4.jpeg"],
  ["cambodge-tc5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/INCONTOURNABLES_THAILAND_CAMBODGE_2024/5.jpeg"],
  ["cambodge-tc6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/INCONTOURNABLES_THAILAND_CAMBODGE_2024/6.jpeg"],
  ["cambodge-tc7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/INCONTOURNABLES_THAILAND_CAMBODGE_2024/7.jpeg"],
  ["cambodge-lc1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/MERVEILLES_LAOS_CAMBODGE/1.jpeg"],
  ["cambodge-lc2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/MERVEILLES_LAOS_CAMBODGE/2.jpeg"],
  ["cambodge-lc3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/MERVEILLES_LAOS_CAMBODGE/3.jpeg"],
  ["cambodge-lc4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/MERVEILLES_LAOS_CAMBODGE/4.jpeg"],
  ["cambodge-lc5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/MERVEILLES_LAOS_CAMBODGE/5.jpeg"],
  ["cambodge-lc6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/MERVEILLES_LAOS_CAMBODGE/6.jpeg"],
  ["cambodge-lc8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/MERVEILLES_LAOS_CAMBODGE/8.jpeg"],
  ["cambodge-lc9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/MERVEILLES_LAOS_CAMBODGE/9.jpeg"],
  ["cambodge-im1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/IMMERSION_ET_TRADITIONS_AU_CAMBODGE_/1.jpeg"],
  ["cambodge-im2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/IMMERSION_ET_TRADITIONS_AU_CAMBODGE_/2.jpeg"],
  ["cambodge-im3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/IMMERSION_ET_TRADITIONS_AU_CAMBODGE_/3.jpeg"],
  ["cambodge-im4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/IMMERSION_ET_TRADITIONS_AU_CAMBODGE_/4.jpeg"],
  ["cambodge-im5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/IMMERSION_ET_TRADITIONS_AU_CAMBODGE_/5.jpeg"],
  ["cambodge-im6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/IMMERSION_ET_TRADITIONS_AU_CAMBODGE_/6.jpeg"],
  ["cambodge-im7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CAMBODGE/IMMERSION_ET_TRADITIONS_AU_CAMBODGE_/7.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/cambodge-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
