// Antilles circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-ant-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["ant-dg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/CROISIERES/DREAM_YACHT_GUADELOUPE/1.jpg"],
  ["ant-dg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/CROISIERES/DREAM_YACHT_GUADELOUPE/2.jpeg"],
  ["ant-dg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/CROISIERES/DREAM_YACHT_GUADELOUPE/3.jpeg"],
  ["ant-dg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/CROISIERES/DREAM_YACHT_GUADELOUPE/4.jpeg"],
  ["ant-dg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/CROISIERES/DREAM_YACHT_GUADELOUPE/5.jpeg"],
  ["ant-dg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/CROISIERES/DREAM_YACHT_GUADELOUPE/6.jpeg"],
  ["ant-dg7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/CROISIERES/DREAM_YACHT_GUADELOUPE/7.jpeg"],
  ["ant-an1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/LES_ANTILLES_D_ILE_EN_ILE/1._AdobeStock160020339.jpeg"],
  ["ant-an3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/LES_ANTILLES_D_ILE_EN_ILE/3._AdobeStock285723267.jpeg"],
  ["ant-an4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/LES_ANTILLES_D_ILE_EN_ILE/4._AdobeStock233896531.jpeg"],
  ["ant-an5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/LES_ANTILLES_D_ILE_EN_ILE/6._AdobeStock287460577.jpeg"],
  ["ant-an6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/LES_ANTILLES_D_ILE_EN_ILE/7._AdobeStock144918377.jpeg"],
  ["ant-pg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/SUR_LA_ROUTE_PERLES_DE_GUADELOUPE/1.jpeg"],
  ["ant-pg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/SUR_LA_ROUTE_PERLES_DE_GUADELOUPE/3.jpeg"],
  ["ant-pg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/SUR_LA_ROUTE_PERLES_DE_GUADELOUPE/4.jpeg"],
  ["ant-pg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/SUR_LA_ROUTE_PERLES_DE_GUADELOUPE/5.jpeg"],
  ["ant-pg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/SUR_LA_ROUTE_PERLES_DE_GUADELOUPE/6.jpeg"],
  ["ant-mg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/AUTOTOURS/SUR_LA_ROUTE_MARTINIQUE_GUADELOUPE_LES_SAINTES/1.jpeg"],
  ["ant-mg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/AUTOTOURS/SUR_LA_ROUTE_MARTINIQUE_GUADELOUPE_LES_SAINTES/2.jpeg"],
  ["ant-mg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/AUTOTOURS/SUR_LA_ROUTE_MARTINIQUE_GUADELOUPE_LES_SAINTES/3.jpeg"],
  ["ant-mg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/AUTOTOURS/SUR_LA_ROUTE_MARTINIQUE_GUADELOUPE_LES_SAINTES/4.jpeg"],
  ["ant-mg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/AUTOTOURS/SUR_LA_ROUTE_MARTINIQUE_GUADELOUPE_LES_SAINTES/5.jpeg"],
  ["ant-mg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/AUTOTOURS/SUR_LA_ROUTE_MARTINIQUE_GUADELOUPE_LES_SAINTES/6.jpeg"],
  ["ant-gd1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/EVASION_CARIBEENNE_GUADELOUP_ET_DOMINIQUE/1.jpeg"],
  ["ant-gd3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/EVASION_CARIBEENNE_GUADELOUP_ET_DOMINIQUE/3.jpeg"],
  ["ant-gd4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/EVASION_CARIBEENNE_GUADELOUP_ET_DOMINIQUE/4.jpeg"],
  ["ant-gd5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/EVASION_CARIBEENNE_GUADELOUP_ET_DOMINIQUE/5.jpeg"],
  ["ant-eg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/EVASION_GUADELOUPEENNE_ENTRE_GRANDE_TERRE_ET_LES_SAINTES/2.jpeg"],
  ["ant-eg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/EVASION_GUADELOUPEENNE_ENTRE_GRANDE_TERRE_ET_LES_SAINTES/3.jpeg"],
  ["ant-eg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/EVASION_GUADELOUPEENNE_ENTRE_GRANDE_TERRE_ET_LES_SAINTES/5.jpeg"],
  ["ant-eg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/GUADELOUPE/EVASION_GUADELOUPEENNE_ENTRE_GRANDE_TERRE_ET_LES_SAINTES/6.jpeg"],
  ["ant-dm1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CROISIERES/DREAM_YACHT_GRENADINES/1.jpg"],
  ["ant-dm2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CROISIERES/DREAM_YACHT_GRENADINES/2.jpeg"],
  ["ant-dm3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CROISIERES/DREAM_YACHT_GRENADINES/3.jpeg"],
  ["ant-dm4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CROISIERES/DREAM_YACHT_GRENADINES/4.jpeg"],
  ["ant-dm5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CROISIERES/DREAM_YACHT_GRENADINES/5.jpeg"],
  ["ant-ms1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/EVASION_CARIBEENNE_MARTINIQUE_ET_SAINTE_LUCIE/1.jpeg"],
  ["ant-ms2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/EVASION_CARIBEENNE_MARTINIQUE_ET_SAINTE_LUCIE/2.jpeg"],
  ["ant-ms4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/EVASION_CARIBEENNE_MARTINIQUE_ET_SAINTE_LUCIE/4.jpeg"],
  ["ant-ms5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/EVASION_CARIBEENNE_MARTINIQUE_ET_SAINTE_LUCIE/5.jpeg"],
  ["ant-ms6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/EVASION_CARIBEENNE_MARTINIQUE_ET_SAINTE_LUCIE/6.jpeg"],
  ["ant-ms7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/CARAIBES/MARTINIQUE/CIRCUITS/EVASION_CARIBEENNE_MARTINIQUE_ET_SAINTE_LUCIE/7.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/ant-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
