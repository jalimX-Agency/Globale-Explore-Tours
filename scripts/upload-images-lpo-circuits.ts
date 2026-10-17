// Laos, Philippines and Uzbekistan circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-lpo-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["lpo-le1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/EXPERIENCE_LAOTIENNE/1.jpeg"],
  ["lpo-le2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/EXPERIENCE_LAOTIENNE/2.jpeg"],
  ["lpo-le3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/EXPERIENCE_LAOTIENNE/3.jpeg"],
  ["lpo-le4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/EXPERIENCE_LAOTIENNE/4.jpeg"],
  ["lpo-le5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/EXPERIENCE_LAOTIENNE/5.jpeg"],
  ["lpo-le6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/EXPERIENCE_LAOTIENNE/6.jpeg"],
  ["lpo-le7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/EXPERIENCE_LAOTIENNE/7.jpeg"],
  ["lpo-gi1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/GRAND_TOUR_D_INDOCHINE/1.jpeg"],
  ["lpo-gi2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/GRAND_TOUR_D_INDOCHINE/2.jpeg"],
  ["lpo-gi3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/GRAND_TOUR_D_INDOCHINE/3.jpeg"],
  ["lpo-gi4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/GRAND_TOUR_D_INDOCHINE/4.jpeg"],
  ["lpo-gi5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/GRAND_TOUR_D_INDOCHINE/5.jpeg"],
  ["lpo-gi7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/GRAND_TOUR_D_INDOCHINE/7.jpeg"],
  ["lpo-gi8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/GRAND_TOUR_D_INDOCHINE/8.jpeg"],
  ["lpo-gi10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/GRAND_TOUR_D_INDOCHINE/91.jpeg"],
  ["lpo-lp1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/PASSION_LAOTIENNE/1.jpeg"],
  ["lpo-lp2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/PASSION_LAOTIENNE/2.jpeg"],
  ["lpo-lp3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/PASSION_LAOTIENNE/3.jpeg"],
  ["lpo-lp4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/PASSION_LAOTIENNE/4.jpeg"],
  ["lpo-lp5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/PASSION_LAOTIENNE/5.jpeg"],
  ["lpo-lp6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/PASSION_LAOTIENNE/6.jpeg"],
  ["lpo-lp7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/LAOS/PASSION_LAOTIENNE/7.jpeg"],
  ["lpo-uz1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/OUZBEKISTAN/CONFIDENTIEL_OUZB/1.jpeg"],
  ["lpo-uz2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/OUZBEKISTAN/CONFIDENTIEL_OUZB/3.jpeg"],
  ["lpo-uz3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/OUZBEKISTAN/CONFIDENTIEL_OUZB/4.jpeg"],
  ["lpo-uz4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/OUZBEKISTAN/CONFIDENTIEL_OUZB/5.jpeg"],
  ["lpo-uz5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/OUZBEKISTAN/CONFIDENTIEL_OUZB/6.jpeg"],
  ["lpo-bo1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/A_LA_DECOUVERTE_DE_BOHOL/A.jpeg"],
  ["lpo-bo2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/A_LA_DECOUVERTE_DE_BOHOL/B.jpeg"],
  ["lpo-bo3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/A_LA_DECOUVERTE_DE_BOHOL/C.jpeg"],
  ["lpo-bo4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/A_LA_DECOUVERTE_DE_BOHOL/D.jpeg"],
  ["lpo-bo5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/A_LA_DECOUVERTE_DE_BOHOL/E.jpeg"],
  ["lpo-bo6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/A_LA_DECOUVERTE_DE_BOHOL/F.jpeg"],
  ["lpo-vi1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/BEAUTES_DES_ILES_VISAYAS/2.jpeg"],
  ["lpo-vi2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/BEAUTES_DES_ILES_VISAYAS/3.jpeg"],
  ["lpo-vi3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/BEAUTES_DES_ILES_VISAYAS/4.jpeg"],
  ["lpo-vi5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/BEAUTES_DES_ILES_VISAYAS/7.jpeg"],
  ["lpo-vi6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/BEAUTES_DES_ILES_VISAYAS/8.jpeg"],
  ["lpo-mb1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/g09h7atdujvfbubpq6k0.jpg"],
  ["lpo-mb2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/q3izudod3gbyzcrm3jwm.jpg"],
  ["lpo-mb3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/pyltgvdhxvjx9xj4qqvh.jpg"],
  ["lpo-mb4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/svhpmn4fkgtrijwrqx5g.jpg"],
  ["lpo-mb5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/fpjvey7iewhyg9wdo1fg.jpg"],
  ["lpo-mb6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/jlp8ecj9whnfdhod0bli.jpg"],
  ["lpo-pw1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/fg69kplitzllf1uay8ff.jpg"],
  ["lpo-pw2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/japp0vczw5krcetkgnfr.jpg"],
  ["lpo-pw3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/e13qtedmd9gypakjuasm.jpg"],
  ["lpo-pw4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ttjil8h0mgl9m6ii9b42.jpg"],
  ["lpo-pw5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/v7cmgvuxwqwr0gyv8uks.jpg"],
  ["lpo-pw6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/cfpikcngdp2qtjgpxwf7.jpg"],
  ["lpo-ie3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/VISAYAS/3.jpeg"],
  ["lpo-ie4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/VISAYAS/4.jpeg"],
  ["lpo-ie5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/VISAYAS/5.jpeg"],
  ["lpo-ie6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/VISAYAS/6.jpeg"],
  ["lpo-ie7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/SEJOUR_ILE_EN_ILE_AU_PARADIS_PHILIPPIN/3.jpeg"],
  ["lpo-ie8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/SEJOUR_ILE_EN_ILE_AU_PARADIS_PHILIPPIN/4.jpeg"],
  ["lpo-ie9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/SEJOUR_ILE_EN_ILE_AU_PARADIS_PHILIPPIN/6.jpeg"],
  ["lpo-ie13", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/PHILIPPINE/SEJOUR_D_ILE_EN_ILE_ARCHIPEL_DES_VISAYAS/7.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/lpo-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
