// Spain Turkey Poland circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-etp-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["etp-an2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ANDALOUSIE/CAP_ANDALOUSIE_2024/AdobeStock_272307054.jpeg"],
  ["etp-an3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ANDALOUSIE/CAP_ANDALOUSIE_2024/Andalousie_2.jpg"],
  ["etp-an4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ANDALOUSIE/CAP_ANDALOUSIE_2024/Andalousie_5.jpg"],
  ["etp-an5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ANDALOUSIE/CAP_ANDALOUSIE_2024/andalousie_84.jpg"],
  ["etp-an6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ANDALOUSIE/CAP_ANDALOUSIE_2024/andalousie3.jpg"],
  ["etp-ma1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CAP_MADRID_ET_CASTILLE/AdobeStock_288674124.jpeg"],
  ["etp-ma2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CAP_MADRID_ET_CASTILLE/AdobeStock_171083989_.jpeg"],
  ["etp-ma3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CAP_MADRID_ET_CASTILLE/AdobeStock_383029635.jpeg"],
  ["etp-ma4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CAP_MADRID_ET_CASTILLE/AdobeStock_455126588.jpeg"],
  ["etp-ma5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CAP_MADRID_ET_CASTILLE/AdobeStock_508808796.jpeg"],
  ["etp-ma6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CAP_MADRID_ET_CASTILLE/AdobeStock_66419912.jpeg"],
  ["etp-ma7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CAP_MADRID_ET_CASTILLE/AdobeStock_72286096.jpeg"],
  ["etp-nm1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CIRCUITS/NOUVEL_AN_MADRID/PROFIL.jpeg"],
  ["etp-nm2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CIRCUITS/NOUVEL_AN_MADRID/AdobeStock_159446732_-_Copie.jpeg"],
  ["etp-nm3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CIRCUITS/NOUVEL_AN_MADRID/AdobeStock_229526382.jpeg"],
  ["etp-nm4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CIRCUITS/NOUVEL_AN_MADRID/AdobeStock_240890829_-_Copie.jpeg"],
  ["etp-nm5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CIRCUITS/NOUVEL_AN_MADRID/AdobeStock_317374566_-_Copie.jpeg"],
  ["etp-ns1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/NOUVEL_AN_A_SEVILLE/2.jpeg"],
  ["etp-ns2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/CIRCUITS/NOUVEL_AN_A_SEVILLE_2023/9.jpg"],
  ["etp-ns3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/NOUVEL_AN_A_SEVILLE/3.jpeg"],
  ["etp-ns4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESPAGNE/NOUVEL_AN_A_SEVILLE/1.jpeg"],
  ["etp-ca1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/CANARIES/TENERIFE/CAP_SUR_LES_CANARIES/AdobeStock_108142476.jpeg"],
  ["etp-ca3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/CANARIES/TENERIFE/CAP_SUR_LES_CANARIES/AdobeStock_136888921.jpeg"],
  ["etp-ca4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/CANARIES/TENERIFE/CAP_SUR_LES_CANARIES/AdobeStock_146193007.jpeg"],
  ["etp-ca5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/CANARIES/TENERIFE/CAP_SUR_LES_CANARIES/AdobeStock_309052414.jpeg"],
  ["etp-ca6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/CANARIES/TENERIFE/CAP_SUR_LES_CANARIES/AdobeStock_73990129.jpeg"],
  ["etp-tu1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/MERVEILLES_DE_LA_TURQUIE/1.jpeg"],
  ["etp-tu2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/MERVEILLES_DE_LA_TURQUIE/2.jpeg"],
  ["etp-tu3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/MERVEILLES_DE_LA_TURQUIE/3.jpeg"],
  ["etp-tu4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/MERVEILLES_DE_LA_TURQUIE/4.jpg"],
  ["etp-tu6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/MERVEILLES_DE_LA_TURQUIE/6.jpeg"],
  ["etp-tu8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/MERVEILLES_DE_LA_TURQUIE/8.jpeg"],
  ["etp-is1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/ISTANBUL_ROMANTIQUE/5.jpeg"],
  ["etp-is2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/ISTANBUL_ROMANTIQUE/1.jpeg"],
  ["etp-is3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/ISTANBUL_ROMANTIQUE/2.jpeg"],
  ["etp-is4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/ISTANBUL_ROMANTIQUE/3.jpeg"],
  ["etp-is5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/ISTANBUL_ROMANTIQUE/4.jpeg"],
  ["etp-is6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/ISTANBUL_ROMANTIQUE/6.jpeg"],
  ["etp-is7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/ISTANBUL_ROMANTIQUE/7.jpeg"],
  ["etp-is8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/TURQUIE/CIRCUIT/ISTANBUL_ROMANTIQUE/8.jpeg"],
  ["etp-ta1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_CRACOVIE_ET_LES_TATRAS/1.jpeg"],
  ["etp-ta2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_CRACOVIE_ET_LES_TATRAS/1-1.jpeg"],
  ["etp-ta3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_CRACOVIE_ET_LES_TATRAS/2.jpeg"],
  ["etp-ta4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_CRACOVIE_ET_LES_TATRAS/3.jpeg"],
  ["etp-ta5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_CRACOVIE_ET_LES_TATRAS/4-2.jpeg"],
  ["etp-ta6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_CRACOVIE_ET_LES_TATRAS/4.jpeg"],
  ["etp-ta7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_CRACOVIE_ET_LES_TATRAS/5.jpeg"],
  ["etp-cp1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_LA_POLOGNE/Via_TRAVEL_EXCHANGE/1.jpeg"],
  ["etp-cp2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_LA_POLOGNE/Via_TRAVEL_EXCHANGE/2.jpeg"],
  ["etp-cp3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_LA_POLOGNE/Via_TRAVEL_EXCHANGE/3.jpg"],
  ["etp-cp4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_LA_POLOGNE/Via_TRAVEL_EXCHANGE/4.jpeg"],
  ["etp-cp5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_LA_POLOGNE/Via_TRAVEL_EXCHANGE/5.jpeg"],
  ["etp-cp6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/CAP_SUR_LA_POLOGNE/Via_TRAVEL_EXCHANGE/6.jpeg"],
  ["etp-vc1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/VARSOVIE_A_CRAVOCIE_EN_PRIVATIF/AdobeStock_113604536.jpeg"],
  ["etp-vc2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/VARSOVIE_A_CRAVOCIE_EN_PRIVATIF/AdobeStock_121054623.jpeg"],
  ["etp-vc3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/VARSOVIE_A_CRAVOCIE_EN_PRIVATIF/AdobeStock_121793696.jpeg"],
  ["etp-vc4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/VARSOVIE_A_CRAVOCIE_EN_PRIVATIF/AdobeStock_277462714.jpeg"],
  ["etp-vc5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/VARSOVIE_A_CRAVOCIE_EN_PRIVATIF/AdobeStock_90084388.jpeg"],
  ["etp-vc6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/VARSOVIE_A_CRAVOCIE_EN_PRIVATIF/cracovie.jpg"],
  ["etp-kr2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/DEC_DE_CRACOVIE_EN_PRIVATIF/2.jpeg"],
  ["etp-kr4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/DEC_DE_CRACOVIE_EN_PRIVATIF/4.jpeg"],
  ["etp-kr6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/DEC_DE_CRACOVIE_EN_PRIVATIF/6.jpg"],
  ["etp-kn1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MARCHE_NOEL_CRACOVIE/11.jpeg"],
  ["etp-kn2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MARCHE_NOEL_CRACOVIE/22.jpeg"],
  ["etp-kn3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MARCHE_NOEL_CRACOVIE/33.jpeg"],
  ["etp-kn5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MARCHE_NOEL_CRACOVIE/55.jpeg"],
  ["etp-kn6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MARCHE_NOEL_CRACOVIE/66.jpeg"],
  ["etp-mp1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MERVEILLE_POLOGNE_2027/1.jpeg"],
  ["etp-mp2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MERVEILLE_POLOGNE_2027/2.jpeg"],
  ["etp-mp3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MERVEILLE_POLOGNE_2027/3.jpeg"],
  ["etp-mp4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MERVEILLE_POLOGNE_2027/4.jpeg"],
  ["etp-mp5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MERVEILLE_POLOGNE_2027/5.jpeg"],
  ["etp-mp6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/POLOGNE/MERVEILLE_POLOGNE_2027/6.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/etp-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
