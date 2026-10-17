// Andes circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-and-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["and-ip1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/INCONTOURNABLES_PEROU_2025/1AdobeStock_87458217.jpeg"],
  ["and-ip2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/INCONTOURNABLES_PEROU_2025/13AdobeStock_88954568.jpeg"],
  ["and-ip3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/INCONTOURNABLES_PEROU_2025/2AdobeStock_100041446.jpeg"],
  ["and-ip4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/INCONTOURNABLES_PEROU_2025/3AdobeStock_111206271.jpeg"],
  ["and-ip5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/INCONTOURNABLES_PEROU_2025/AdobeStock_100151587.jpeg"],
  ["and-ip6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/INCONTOURNABLES_PEROU_2025/AdobeStock_107539601.jpeg"],
  ["and-ip8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/INCONTOURNABLES_PEROU_2025/AdobeStock_320162644.jpeg"],
  ["and-mp1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/IMPRESSION_PEROU_27/1-AdobeStock_320162644.jpeg"],
  ["and-mp2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/IMPRESSION_PEROU_27/2-AdobeStock_329991043.jpeg"],
  ["and-mp3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/IMPRESSION_PEROU_27/AdobeStock_191456583.jpeg"],
  ["and-mp4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/IMPRESSION_PEROU_27/AdobeStock_312433849.jpeg"],
  ["and-mp5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/IMPRESSION_PEROU_27/AdobeStock_65015402.jpeg"],
  ["and-mp6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/IMPRESSION_PEROU_27/AdobeStock_72812774.jpeg"],
  ["and-pb1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/COULEURS_PEROU_BOLIVIE/1.jpeg"],
  ["and-pb2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/COULEURS_PEROU_BOLIVIE/2.jpeg"],
  ["and-pb3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/COULEURS_PEROU_BOLIVIE/3.jpeg"],
  ["and-pb4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/COULEURS_PEROU_BOLIVIE/4.jpeg"],
  ["and-pb5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/COULEURS_PEROU_BOLIVIE/5.jpeg"],
  ["and-pb6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/COULEURS_PEROU_BOLIVIE/6.jpeg"],
  ["and-pb7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PEROU/COULEURS_PEROU_BOLIVIE/7.jpeg"],
  ["and-pa2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/LES_PERLES_DES_ANDES/2.jpeg"],
  ["and-pa3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/LES_PERLES_DES_ANDES/3.jpeg"],
  ["and-pa4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/LES_PERLES_DES_ANDES/4.jpeg"],
  ["and-pa5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/LES_PERLES_DES_ANDES/5.jpeg"],
  ["and-pa6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/LES_PERLES_DES_ANDES/6.jpeg"],
  ["and-pa7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/LES_PERLES_DES_ANDES/7.jpeg"],
  ["and-pa8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/LES_PERLES_DES_ANDES/8.jpeg"],
  ["and-de1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/Decouverte_de_l_equateur_2026/Chimborazo.jpeg"],
  ["and-de2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/Decouverte_de_l_equateur_2026/Amazonie.jpeg"],
  ["and-de3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/Decouverte_de_l_equateur_2026/1-AdobeStock_30876854.jpeg"],
  ["and-de4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/Decouverte_de_l_equateur_2026/AdobeStock_25698082.jpeg"],
  ["and-de5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/Decouverte_de_l_equateur_2026/Banos.jpeg"],
  ["and-de6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/Decouverte_de_l_equateur_2026/Cuenca.jpeg"],
  ["and-de8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/Decouverte_de_l_equateur_2026/Guayaquil.jpeg"],
  ["and-te1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/TRESORS_EQUATEUR_ET_GALAPAGOS_27/1-AdobeStock_166051780.jpeg"],
  ["and-te3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/TRESORS_EQUATEUR_ET_GALAPAGOS_27/AdobeStock_193840548.jpeg"],
  ["and-te4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/TRESORS_EQUATEUR_ET_GALAPAGOS_27/AdobeStock_204936460.jpeg"],
  ["and-te5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/TRESORS_EQUATEUR_ET_GALAPAGOS_27/AdobeStock_209413961.jpeg"],
  ["and-te7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/TRESORS_EQUATEUR_ET_GALAPAGOS_27/AdobeStock_248561529.jpeg"],
  ["and-te8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/EQUATEUR/TRESORS_EQUATEUR_ET_GALAPAGOS_27/AdobeStock_254490324.jpeg"],
  ["and-cc1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/CAP_COLOMBIE_27/1.jpeg"],
  ["and-cc2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/CAP_COLOMBIE_27/2.jpeg"],
  ["and-cc3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/CAP_COLOMBIE_27/3.jpeg"],
  ["and-cc4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/CAP_COLOMBIE_27/4.jpeg"],
  ["and-cc5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/CAP_COLOMBIE_27/5.jpeg"],
  ["and-cc6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/CAP_COLOMBIE_27/6.jpeg"],
  ["and-cc7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/CAP_COLOMBIE_27/AdobeStock_1409616470.jpeg"],
  ["and-kc2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/COULEURS_DE_COLOMBIE_2026/AdobeStock_182437806.jpeg"],
  ["and-kc5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/COULEURS_DE_COLOMBIE_2026/AdobeStock_281401264.jpeg"],
  ["and-kc6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/COULEURS_DE_COLOMBIE_2026/AdobeStock_306606828.jpeg"],
  ["and-kc7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/COULEURS_DE_COLOMBIE_2026/AdobeStock_326697749.jpeg"],
  ["and-kc8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COLOMBIE/COULEURS_DE_COLOMBIE_2026/AdobeStock_524746795.jpeg"],
  ["and-ch2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/COULEURS_DU_CHILI/1.jpeg"],
  ["and-ch3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/COULEURS_DU_CHILI/3.jpeg"],
  ["and-ch4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/COULEURS_DU_CHILI/4.jpeg"],
  ["and-ch5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/COULEURS_DU_CHILI/5.jpeg"],
  ["and-ch7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/COULEURS_DU_CHILI/7.jpeg"],
  ["and-mc2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/MERVEILLES_CHILI_ET_ILE_DE_PAQUES/AdobeStock_113527268.jpeg"],
  ["and-mc4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/MERVEILLES_CHILI_ET_ILE_DE_PAQUES/AdobeStock_247743605.jpeg"],
  ["and-mc6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/MERVEILLES_CHILI_ET_ILE_DE_PAQUES/AdobeStock_74219915.jpeg"],
  ["and-mc7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/MERVEILLES_CHILI_ET_ILE_DE_PAQUES/AdobeStock_94405578.jpeg"],
  ["and-pt1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/nggtbhiznzeri9sdbmyu.jpg"],
  ["and-pt2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/p9dtiaro6qe1qsd9p2w0.jpg"],
  ["and-pt3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/v0dw2sudvin6kzbsudb6.jpg"],
  ["and-pt4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/poqbful5xrfumdhqem8w.jpg"],
  ["and-pt5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/fvnh6okplut4fnjneyp6.jpg"],
  ["and-pt6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/nxn4wji2xqytrvgiuvyc.jpg"],
  ["and-pt7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/yvpfd0zmghcbrhvzcxhk.jpg"],
  ["and-pt8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/zsadjjaujiwafiheybit.jpg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/and-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
