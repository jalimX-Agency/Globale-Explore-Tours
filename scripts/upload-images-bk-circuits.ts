// Balkans Caucasus new circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-bk-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["bk-am1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/27_MAGIE_ARMENIE/profil.jpeg"],
  ["bk-am2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/27_MAGIE_ARMENIE/AdobeStock_103931052.jpeg"],
  ["bk-am3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/27_MAGIE_ARMENIE/AdobeStock_116350501.jpeg"],
  ["bk-am4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/27_MAGIE_ARMENIE/AdobeStock_128289429.jpeg"],
  ["bk-am5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/27_MAGIE_ARMENIE/AdobeStock_129078850.jpeg"],
  ["bk-am6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/27_MAGIE_ARMENIE/AdobeStock_141405436.jpeg"],
  ["bk-am7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/27_MAGIE_ARMENIE/AdobeStock_240609093.jpeg"],
  ["bk-ag1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/CAP_ARMENIE_ET_GEORGIE/1.jpg"],
  ["bk-ag2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/CAP_ARMENIE_ET_GEORGIE/2.jpeg"],
  ["bk-ag3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/CAP_ARMENIE_ET_GEORGIE/3.jpg"],
  ["bk-ag4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/CAP_ARMENIE_ET_GEORGIE/4.jpg"],
  ["bk-ag5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/CAP_ARMENIE_ET_GEORGIE/6.jpeg"],
  ["bk-ag6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/CAP_ARMENIE_ET_GEORGIE/7.jpg"],
  ["bk-ag7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ARMENIE/CAP_ARMENIE_ET_GEORGIE/8.jpg"],
  ["bk-ea1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/MAGIE_ALBANIE/1.jpg"],
  ["bk-ea2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/MAGIE_ALBANIE/2.jpeg"],
  ["bk-ea3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/MAGIE_ALBANIE/3.jpg"],
  ["bk-ea4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/MAGIE_ALBANIE/4.jpg"],
  ["bk-ea5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/MAGIE_ALBANIE/5.jpg"],
  ["bk-ea7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/MAGIE_ALBANIE/7.jpg"],
  ["bk-sa1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/SOUFFLE_ALBANIE/1.jpeg"],
  ["bk-sa2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/SOUFFLE_ALBANIE/1-1.jpeg"],
  ["bk-sa3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/SOUFFLE_ALBANIE/2-1.jpeg"],
  ["bk-sa4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/SOUFFLE_ALBANIE/2.jpeg"],
  ["bk-sa5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/SOUFFLE_ALBANIE/3-1.jpeg"],
  ["bk-sa6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/SOUFFLE_ALBANIE/3.jpeg"],
  ["bk-sa7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ALBANIE/SOUFFLE_ALBANIE/4.jpeg"],
  ["bk-bg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/BULGARIE/MAGIE_DE_LA_BULGARIE/1.jpg"],
  ["bk-bg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/BULGARIE/MAGIE_DE_LA_BULGARIE/2.jpg"],
  ["bk-bg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/BULGARIE/MAGIE_DE_LA_BULGARIE/3.jpg"],
  ["bk-bg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/BULGARIE/MAGIE_DE_LA_BULGARIE/4.jpg"],
  ["bk-bg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/BULGARIE/MAGIE_DE_LA_BULGARIE/5.jpg"],
  ["bk-bg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/BULGARIE/MAGIE_DE_LA_BULGARIE/6.jpg"],
  ["bk-ro1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ROUMANIE/CAP_SUR_LA_ROUMANIE/1.jpeg"],
  ["bk-ro2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ROUMANIE/CAP_SUR_LA_ROUMANIE/2.jpeg"],
  ["bk-ro3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ROUMANIE/CAP_SUR_LA_ROUMANIE/3.jpeg"],
  ["bk-ro4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ROUMANIE/CAP_SUR_LA_ROUMANIE/4.jpeg"],
  ["bk-ro5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ROUMANIE/CAP_SUR_LA_ROUMANIE/5.jpeg"],
  ["bk-ro6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ROUMANIE/CAP_SUR_LA_ROUMANIE/6.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/bk-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
