// Italy circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-ita-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["ita-ns1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_L_ITALIE_DU_NORD_AU_SUD_2025/1.jpeg"],
  ["ita-ns2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_L_ITALIE_DU_NORD_AU_SUD_2025/3.jpeg"],
  ["ita-ns3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_L_ITALIE_DU_NORD_AU_SUD_2025/5.jpeg"],
  ["ita-ns4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_L_ITALIE_DU_NORD_AU_SUD_2025/8.jpeg"],
  ["ita-ns5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_L_ITALIE_DU_NORD_AU_SUD_2025/AdobeStock_138018907.jpeg"],
  ["ita-ns6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_L_ITALIE_DU_NORD_AU_SUD_2025/AdobeStock_184438229.jpeg"],
  ["ita-ns7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_L_ITALIE_DU_NORD_AU_SUD_2025/AdobeStock_214367292.jpeg"],
  ["ita-ns8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_L_ITALIE_DU_NORD_AU_SUD_2025/AdobeStock_282381041.jpeg"],
  ["ita-sa1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LA_SARDAIGNE/1.jpeg"],
  ["ita-sa3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LA_SARDAIGNE/3.jpg"],
  ["ita-sa4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LA_SARDAIGNE/4.jpg"],
  ["ita-sa5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LA_SARDAIGNE/5.jpg"],
  ["ita-sa7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LA_SARDAIGNE/7.jpg"],
  ["ita-sa8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LA_SARDAIGNE/8.jpg"],
  ["ita-si1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SICILE/DECOUVERTE_SICILE/1.jpeg"],
  ["ita-si2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SICILE/DECOUVERTE_SICILE/3.jpeg"],
  ["ita-si3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SICILE/DECOUVERTE_SICILE/4.jpeg"],
  ["ita-si4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SICILE/DECOUVERTE_SICILE/5.jpeg"],
  ["ita-si5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SICILE/DECOUVERTE_SICILE/7.jpeg"],
  ["ita-si6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SICILE/DECOUVERTE_SICILE/8.jpeg"],
  ["ita-to1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_TOSCANE_ET_LES_5_TERRES/1.jpeg"],
  ["ita-to3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_TOSCANE_ET_LES_5_TERRES/3.jpeg"],
  ["ita-to4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_TOSCANE_ET_LES_5_TERRES/5.jpeg"],
  ["ita-to5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_TOSCANE_ET_LES_5_TERRES/6.jpeg"],
  ["ita-to6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_TOSCANE_ET_LES_5_TERRES/7.jpg"],
  ["ita-to7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_TOSCANE_ET_LES_5_TERRES/8.jpg"],
  ["ita-to8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_TOSCANE_ET_LES_5_TERRES/9.jpg"],
  ["ita-po1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_LES_POUILLES/1.jpeg"],
  ["ita-po2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_LES_POUILLES/3.jpeg"],
  ["ita-po4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_LES_POUILLES/AdobeStock_130051618.jpeg"],
  ["ita-po5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_LES_POUILLES/AdobeStock_142666937.jpeg"],
  ["ita-po6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_LES_POUILLES/AdobeStock_189731382.jpeg"],
  ["ita-po8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_LES_POUILLES/AdobeStock_215562082.jpeg"],
  ["ita-eo1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LES_ILES_EOLIENNES/1.jpeg"],
  ["ita-eo3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LES_ILES_EOLIENNES/3.jpg"],
  ["ita-eo4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LES_ILES_EOLIENNES/4.jpg"],
  ["ita-eo6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LES_ILES_EOLIENNES/6.jpg"],
  ["ita-eo7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SARDAIGNE/CAP_SUR_LES_ILES_EOLIENNES/7.jpg"],
  ["ita-la1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_MILAN_ET_LES_LACS_ITALIENS/PROFIL.jpeg"],
  ["ita-la2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_MILAN_ET_LES_LACS_ITALIENS/AdobeStock_120899544.jpeg"],
  ["ita-la3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_MILAN_ET_LES_LACS_ITALIENS/AdobeStock_168616950.jpeg"],
  ["ita-la4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_MILAN_ET_LES_LACS_ITALIENS/AdobeStock_207853282.jpeg"],
  ["ita-la5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_MILAN_ET_LES_LACS_ITALIENS/AdobeStock_230987244.jpeg"],
  ["ita-la6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_MILAN_ET_LES_LACS_ITALIENS/AdobeStock_258357827.jpeg"],
  ["ita-la7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_MILAN_ET_LES_LACS_ITALIENS/AdobeStock_301370704.jpeg"],
  ["ita-la8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_MILAN_ET_LES_LACS_ITALIENS/AdobeStock_493304574.jpeg"],
  ["ita-rf1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_ROME_FLORENCE_ET_VENISE_2025/AdobeStock_167835604.jpeg"],
  ["ita-rf2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_ROME_FLORENCE_ET_VENISE_2025/AdobeStock_195783169.jpeg"],
  ["ita-rf3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_ROME_FLORENCE_ET_VENISE_2025/AdobeStock_262821706.jpeg"],
  ["ita-rf5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_ROME_FLORENCE_ET_VENISE_2025/AdobeStock_37045590.jpeg"],
  ["ita-rf6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_ROME_FLORENCE_ET_VENISE_2025/AdobeStock_60925172.jpeg"],
  ["ita-rn2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_ROME_NAPLES_ET_COTE_AMALFITAINE_25/AdobeStock_164960151.jpeg"],
  ["ita-rn3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_ROME_NAPLES_ET_COTE_AMALFITAINE_25/AdobeStock_181078879.jpeg"],
  ["ita-rn4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_ROME_NAPLES_ET_COTE_AMALFITAINE_25/AdobeStock_192210934.jpeg"],
  ["ita-rn5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_ROME_NAPLES_ET_COTE_AMALFITAINE_25/AdobeStock_229276956.jpeg"],
  ["ita-rn6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_SUR_ROME_NAPLES_ET_COTE_AMALFITAINE_25/AdobeStock_275590531.jpeg"],
  ["ita-ve1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/fiawdbgx5oh4mznt3e75.jpg"],
  ["ita-ve2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/okaca4zbsdahhbgkyvwl.jpg"],
  ["ita-ve3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/zv7gf9uyh84lq8yccznj.jpg"],
  ["ita-cv1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/ITVCECAR/A.jpg"],
  ["ita-cv2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/ITVCECAR/B.jpeg"],
  ["ita-cv3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/ITVCECAR/C.jpeg"],
  ["ita-cv4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/ITVCECAR/D.jpeg"],
  ["ita-cv5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/ITVCECAR/E.jpeg"],
  ["ita-cv6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/ITVCECAR/F.jpg"],
  ["ita-te1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/L_ITALIE_EN_ETOILE_DEPUIS_TERRACINA/AdobeStock_106318574.jpeg"],
  ["ita-te2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/L_ITALIE_EN_ETOILE_DEPUIS_TERRACINA/AdobeStock_134998829.jpeg"],
  ["ita-te3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/L_ITALIE_EN_ETOILE_DEPUIS_TERRACINA/AdobeStock_157226672.jpeg"],
  ["ita-te4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/L_ITALIE_EN_ETOILE_DEPUIS_TERRACINA/AdobeStock_279664966.jpeg"],
  ["ita-te5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/L_ITALIE_EN_ETOILE_DEPUIS_TERRACINA/AdobeStock_361552754.jpeg"],
  ["ita-te6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/L_ITALIE_EN_ETOILE_DEPUIS_TERRACINA/AdobeStock_40207802.jpeg"],
  ["ita-np1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_NAPLES_ET_LES_POUILLES_2026/1._AdobeStock_64759108.jpeg"],
  ["ita-np2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_NAPLES_ET_LES_POUILLES_2026/2._AdobeStock_182252366.jpeg"],
  ["ita-np3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_NAPLES_ET_LES_POUILLES_2026/3._AdobeStock_579769564.jpeg"],
  ["ita-np4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_NAPLES_ET_LES_POUILLES_2026/4._AdobeStock_184835744.jpeg"],
  ["ita-np5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_NAPLES_ET_LES_POUILLES_2026/5._AdobeStock_248928408.jpeg"],
  ["ita-np6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_NAPLES_ET_LES_POUILLES_2026/6._AdobeStock_171092456.jpeg"],
  ["ita-np7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_NAPLES_ET_LES_POUILLES_2026/7._AdobeStock_186684938.jpeg"],
  ["ita-np8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ITALIE_CONTINENTALE/CAP_NAPLES_ET_LES_POUILLES_2026/8._AdobeStock_396849053.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/ita-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
