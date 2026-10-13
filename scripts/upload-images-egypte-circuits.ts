// Egypt circuits, batch 1 — photos from the supplier's own gallery for each circuit. Run with:
//   npx tsx scripts/upload-images-egypte-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const SRC = "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image";

// code -> supplier folder + files in order; published as journeys/egypte-<code><n>.jpg (n from 1).
// An empty string skips that position (map, branded banner, duplicate or too-small picture).
const GALLERIES: Array<[string, string, string[]]> = [
  ["fn", "AFRIQUE/EGYPTE/CROISIERES2027/NAYA_AU_FIL_DU_NIL", [
    "ABOU_SIMBEL.jpg", "AdobeStock_229563737.jpg", "AdobeStock_264752889.jpg", "Assouan.jpg", "Colosses_de_Memnon.jpg",
    "egypt-1291004_1280.jpg", "Hieoglyphe.jpg", "Kom_Ombo.jpg", "Temple_Edfou.jpg", "Temple_Karnak.jpg", "Vallee_des_rois.jpg",
  ]],
  ["np", "MOYEN_ORIENT/EGYPTE/NIL_PHARAONIQUE_27", [
    "AdobeStock_243678442.jpeg", "Colosses_De_Memnon.1.jpeg", "Felouque_2.jpeg", "hatshepsut.jpeg", "Obelisque_inacheee.jpeg",
    "Temple_de_Karnak.3.jpeg", "Temple_de_Karnak.4.jpeg", "Temple_de_Kom_Ombo.3.jpeg", "Temple_de_Philae.1.jpeg",
    "Temple_de_Philae.4.jpeg", "Temple_dEdfu.2.jpeg",
  ]],
  ["in", "MOYEN_ORIENT/EGYPTE/INCONTOURNABLES_DU_NIL", ["egyptesplendeurs.jpeg"]],
  ["ca", "AFRIQUE/EGYPTE/27_COUP_DOEIL_AU_CAIRE_", [
    "AdobeStock_174829787.jpeg", "AdobeStock_18267551.jpeg", "AdobeStock_269561418.jpeg", "AdobeStock_59171711.jpeg",
    "AdobeStock_63113949.jpeg", "AdobeStock_84412026.jpeg", "AdobeStock_86286687.jpeg",
    "Page_31_AdobeStock_194613298.jpeg", "Sakkarah_-_AdobeStock_398340510.jpeg",
  ]],
  ["dc", "AFRIQUE/EGYPTE/DECOUVERTES_DU_CAIRE_ET_DU_NIL_", [
    "1.jpeg", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "91.jpeg", "92.jpeg", "93.jpg",
  ]],
  ["pn", "MOYEN_ORIENT/EGYPTE/PAYSAGES_DU_NIL_ET_DU_CAIRE", ["1.jpeg", "", "", "", "", "", "9.JPG"]],
  ["sp", "MOYEN_ORIENT/EGYPTE/SPLENDEURS_CAIRE_ET_NIL_2027", [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.JPG", "6.jpg", "7.JPG", "8.JPG", "9.jpeg", "91.jpg", "92.jpg", "93.jpg", "94.jpg", "95.jpg",
  ]],
  ["dh", "LFDC/CIRCUITS/EGYPTE/REGRD_SUR_LE_NIL_EN_DAHABIEH", [
    "1-_EG_Louxor_shutterstock_1056922610.jpg", "", "1-_pour_Croisiere_Caire.jpg", "EG_Temple_de_Kom-Ombo_shut_238443574.jpg",
    "IMG_1146_enhanced_sharpened.JPG", "IMG_8685.jpg",
  ]],
];

const images: ImageSpec[] = GALLERIES.flatMap(([code, folder, files]) =>
  files.flatMap((file, i) => (file ? [{ key: `journeys/egypte-${code}${i + 1}.jpg`, url: `${SRC}/${folder}/${file}` }] : []))
);

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/egypte-circuits.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
