// Baltics circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-blt-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["blt-cb1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/AU_COEUR_DE_DES_CAPITALES_BALTE_DE_RIGA_A_TALLINN/1.jpeg"],
  ["blt-cb2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/AU_COEUR_DE_DES_CAPITALES_BALTE_DE_RIGA_A_TALLINN/2.jpeg"],
  ["blt-cb3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/AU_COEUR_DE_DES_CAPITALES_BALTE_DE_RIGA_A_TALLINN/3.jpeg"],
  ["blt-cb4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/AU_COEUR_DE_DES_CAPITALES_BALTE_DE_RIGA_A_TALLINN/44.jpeg"],
  ["blt-cb5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/AU_COEUR_DE_DES_CAPITALES_BALTE_DE_RIGA_A_TALLINN/5.jpeg"],
  ["blt-tr1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/CAP_SUR_LES_CAPITALES_BALTES_EN_TRAIN_27/1.jpeg"],
  ["blt-tr2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/CAP_SUR_LES_CAPITALES_BALTES_EN_TRAIN_27/2.jpeg"],
  ["blt-tr3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/CAP_SUR_LES_CAPITALES_BALTES_EN_TRAIN_27/3.jpeg"],
  ["blt-tr4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/CAP_SUR_LES_CAPITALES_BALTES_EN_TRAIN_27/4.jpeg"],
  ["blt-tr5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/CAP_SUR_LES_CAPITALES_BALTES_EN_TRAIN_27/5.jpeg"],
  ["blt-tr6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/CAP_SUR_LES_CAPITALES_BALTES_EN_TRAIN_27/6.jpeg"],
  ["blt-nt1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/MARCHE_NOEL_TALLINN/A.jpeg"],
  ["blt-nt2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/MARCHE_NOEL_TALLINN/B.jpeg"],
  ["blt-nt3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/MARCHE_NOEL_TALLINN/C.jpeg"],
  ["blt-nt4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/MARCHE_NOEL_TALLINN/D.jpeg"],
  ["blt-nt5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/MARCHE_NOEL_TALLINN/E.jpeg"],
  ["blt-nt6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/MARCHE_NOEL_TALLINN/F.jpeg"],
  ["blt-sp1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/SPLENDEURS_PAYS_BALTES_25/AdobeStock_109407148.jpeg"],
  ["blt-sp2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/SPLENDEURS_PAYS_BALTES_25/AdobeStock_128443920.jpeg"],
  ["blt-sp3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/SPLENDEURS_PAYS_BALTES_25/AdobeStock_129822344.jpeg"],
  ["blt-sp4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/SPLENDEURS_PAYS_BALTES_25/AdobeStock_172425635.jpeg"],
  ["blt-sp5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/SPLENDEURS_PAYS_BALTES_25/AdobeStock_180642462.jpeg"],
  ["blt-sp6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/SPLENDEURS_PAYS_BALTES_25/AdobeStock_182240389.jpeg"],
  ["blt-sp7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/SPLENDEURS_PAYS_BALTES_25/AdobeStock_199121004.jpeg"],
  ["blt-tb1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/TRESORS_PAYS_BALTE/1.jpeg"],
  ["blt-tb2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/TRESORS_PAYS_BALTE/2.jpeg"],
  ["blt-tb3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/TRESORS_PAYS_BALTE/3.jpeg"],
  ["blt-tb4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/TRESORS_PAYS_BALTE/4.jpeg"],
  ["blt-tb5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/TRESORS_PAYS_BALTE/5.jpeg"],
  ["blt-tb6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/TRESORS_PAYS_BALTE/6.jpeg"],
  ["blt-tb7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/ESTONIE/TRESORS_PAYS_BALTE/7.jpeg"],
  ["blt-nr1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/MARCHES_DE_NOEL_A_RIGA/1.jpeg"],
  ["blt-nr2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/MARCHES_DE_NOEL_A_RIGA/2.jpeg"],
  ["blt-nr3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/MARCHES_DE_NOEL_A_RIGA/3.jpeg"],
  ["blt-nr4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/MARCHES_DE_NOEL_A_RIGA/4.jpeg"],
  ["blt-nr5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/MARCHES_DE_NOEL_A_RIGA/5.jpeg"],
  ["blt-sr1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/SPLENDEURS_DES_PAYS_BALTES_RIX_A_RIX/2026/1.jpeg"],
  ["blt-sr2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/SPLENDEURS_DES_PAYS_BALTES_RIX_A_RIX/2026/2.jpeg"],
  ["blt-sr3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/SPLENDEURS_DES_PAYS_BALTES_RIX_A_RIX/2026/3.jpeg"],
  ["blt-sr4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/SPLENDEURS_DES_PAYS_BALTES_RIX_A_RIX/2026/4-1.jpeg"],
  ["blt-sr5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/SPLENDEURS_DES_PAYS_BALTES_RIX_A_RIX/2026/4.jpeg"],
  ["blt-sr6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/SPLENDEURS_DES_PAYS_BALTES_RIX_A_RIX/2026/5.jpeg"],
  ["blt-sr7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LETTONIE/SPLENDEURS_DES_PAYS_BALTES_RIX_A_RIX/2026/6.jpeg"],
  ["blt-nv1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MARCHE_DE_NOEL_A_VILNIUS/1.jpeg"],
  ["blt-nv2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MARCHE_DE_NOEL_A_VILNIUS/2.jpeg"],
  ["blt-nv3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MARCHE_DE_NOEL_A_VILNIUS/3.jpeg"],
  ["blt-nv4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MARCHE_DE_NOEL_A_VILNIUS/4.jpeg"],
  ["blt-nv5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MARCHE_DE_NOEL_A_VILNIUS/5.jpeg"],
  ["blt-nv6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MARCHE_DE_NOEL_A_VILNIUS/6.jpeg"],
  ["blt-mb1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MERVEILLES_PAYS_BALTES/1.jpeg"],
  ["blt-mb2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MERVEILLES_PAYS_BALTES/3.jpg"],
  ["blt-mb3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MERVEILLES_PAYS_BALTES/4.jpeg"],
  ["blt-mb4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MERVEILLES_PAYS_BALTES/5.jpeg"],
  ["blt-mb5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MERVEILLES_PAYS_BALTES/6.jpeg"],
  ["blt-mb6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MERVEILLES_PAYS_BALTES/7.jpeg"],
  ["blt-mb7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/LITUANIE/MERVEILLES_PAYS_BALTES/8.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/blt-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
