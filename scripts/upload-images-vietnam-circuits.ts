// Vietnam circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-vietnam-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["vietnam-in1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/1.jpeg"],
  ["vietnam-in2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/2.jpeg"],
  ["vietnam-in3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/3.jpeg"],
  ["vietnam-in4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/4.jpeg"],
  ["vietnam-in5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/5.jpeg"],
  ["vietnam-in6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/6.jpeg"],
  ["vietnam-in7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/7.jpeg"],
  ["vietnam-in8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/8.jpeg"],
  ["vietnam-in9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/9.1.jpeg"],
  ["vietnam-in10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM/9.2.jpeg"],
  ["vietnam-ca4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_CAMBODGE/4.jpeg"],
  ["vietnam-ca6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_CAMBODGE/6.jpeg"],
  ["vietnam-ca7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_CAMBODGE/7.jpeg"],
  ["vietnam-ca8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_CAMBODGE/8.jpeg"],
  ["vietnam-ca9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_CAMBODGE/9.1.jpeg"],
  ["vietnam-ca10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_CAMBODGE/9.jpeg"],
  ["vietnam-ma3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/MAGIE_DU_VIETNAM_2024/3.jpeg"],
  ["vietnam-ma4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/MAGIE_DU_VIETNAM_2024/4.jpeg"],
  ["vietnam-ma6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/MAGIE_DU_VIETNAM_2024/6.jpeg"],
  ["vietnam-ma7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/MAGIE_DU_VIETNAM_2024/7.jpeg"],
  ["vietnam-ma8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/MAGIE_DU_VIETNAM_2024/8.jpeg"],
  ["vietnam-ma10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/MAGIE_DU_VIETNAM_2024/9.jpeg"],
  ["vietnam-it1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/VIETNAM_INTIMISTE/1.jpeg"],
  ["vietnam-it2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/VIETNAM_INTIMISTE/2.jpeg"],
  ["vietnam-it3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/VIETNAM_INTIMISTE/3.jpeg"],
  ["vietnam-it4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/VIETNAM_INTIMISTE/4.jpeg"],
  ["vietnam-it5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/VIETNAM_INTIMISTE/5.jpeg"],
  ["vietnam-it6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/VIETNAM_INTIMISTE/6.jpeg"],
  ["vietnam-it7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/VIETNAM_INTIMISTE/7.jpeg"],
  ["vietnam-pq3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_PHU_QUOC/3.jpeg"],
  ["vietnam-pq7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_PHU_QUOC/7.jpeg"],
  ["vietnam-pq8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_PHU_QUOC/8.jpeg"],
  ["vietnam-pq9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_PHU_QUOC/9.1.jpeg"],
  ["vietnam-pq10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_PHU_QUOC/9.jpeg"],
  ["vietnam-mn2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_MUI_NE/2.jpeg"],
  ["vietnam-mn4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_MUI_NE/4.jpg"],
  ["vietnam-mn6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_MUI_NE/6.jpeg"],
  ["vietnam-mn7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_MUI_NE/7.jpeg"],
  ["vietnam-mn8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_MUI_NE/8.jpeg"],
  ["vietnam-mn9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_MUI_NE/9.1.jpeg"],
  ["vietnam-mn10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/VIETNAM/LES_INCONTOURNABLES_DU_VIETNAM_EXT_MUI_NE/9.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/vietnam-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
