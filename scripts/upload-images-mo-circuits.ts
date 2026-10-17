// Middle East circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-mo-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["mo-ji1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/INCONTOURNABLES_DE_LA_JORDANIE/1.1.jpeg"],
  ["mo-ji2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/INCONTOURNABLES_DE_LA_JORDANIE/2.2.jpeg"],
  ["mo-ji3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/INCONTOURNABLES_DE_LA_JORDANIE/3.3.jpeg"],
  ["mo-ji4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/INCONTOURNABLES_DE_LA_JORDANIE/5.5.jpeg"],
  ["mo-ji5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/INCONTOURNABLES_DE_LA_JORDANIE/6.6.jpeg"],
  ["mo-ji6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/INCONTOURNABLES_DE_LA_JORDANIE/7.7.jpeg"],
  ["mo-ji7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/INCONTOURNABLES_DE_LA_JORDANIE/8.8.jpeg"],
  ["mo-je7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE_ENTRE_NOUS/7.jpeg"],
  ["mo-jn1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE_INTIMISTE_/AdobeStock_105758945.jpg"],
  ["mo-jn2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE_INTIMISTE_/AdobeStock_114180817.jpg"],
  ["mo-jn3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE_INTIMISTE_/AdobeStock_203351407.jpg"],
  ["mo-jn5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE_INTIMISTE_/AdobeStock_227505505.jpg"],
  ["mo-jn6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE_INTIMISTE_/AdobeStock_240799963.jpg"],
  ["mo-jn7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE_INTIMISTE_/AdobeStock_265270319.jpg"],
  ["mo-jn8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE_INTIMISTE_/AdobeStock_269519267.jpg"],
  ["mo-jx2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/JORDANIE_EXPRESS/2.jpeg"],
  ["mo-jx4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/JORDANIE_EXPRESS/4.jpeg"],
  ["mo-jm1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MEILLEUR_DE_LA_JORDANIE/1.2.jpeg"],
  ["mo-jm2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MEILLEUR_DE_LA_JORDANIE/2.jpeg"],
  ["mo-jm5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MEILLEUR_DE_LA_JORDANIE/5.jpeg"],
  ["mo-jm6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MEILLEUR_DE_LA_JORDANIE/6.jpeg"],
  ["mo-jm7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MEILLEUR_DE_LA_JORDANIE/7.jpeg"],
  ["mo-jm8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MEILLEUR_DE_LA_JORDANIE/8.jpeg"],
  ["mo-jv1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MERVEILLE_JORDANIE/1.jpeg"],
  ["mo-jg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MAGNIFIQUE_JORDANIE/Amman_1.jpeg"],
  ["mo-jg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MAGNIFIQUE_JORDANIE/Aqaba_2.jpeg"],
  ["mo-jg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MAGNIFIQUE_JORDANIE/Mer_Morte.jpeg"],
  ["mo-jg7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MAGNIFIQUE_JORDANIE/Petra_1.jpeg"],
  ["mo-jg8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/JORDANIE/MAGNIFIQUE_JORDANIE/Petra_2.jpeg"],
  ["mo-ea1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/CIRCUIT_EXCLU_EMIRATS/Emirats_1.jpeg"],
  ["mo-ea2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/CIRCUIT_EXCLU_EMIRATS/Emirats_2.jpeg"],
  ["mo-ea3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/CIRCUIT_EXCLU_EMIRATS/Emirats_3.jpeg"],
  ["mo-ea4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/CIRCUIT_EXCLU_EMIRATS/Emirats_4.jpeg"],
  ["mo-ea5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/CIRCUIT_EXCLU_EMIRATS/Emirats_5.jpeg"],
  ["mo-ea6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/CIRCUIT_EXCLU_EMIRATS/Emirats_6.jpeg"],
  ["mo-ea7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/CIRCUIT_EXCLU_EMIRATS/Emirats_7.jpeg"],
  ["mo-ea8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/CIRCUIT_EXCLU_EMIRATS/Emirats_8.jpeg"],
  ["mo-ef1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/IL_ETAIT_UNE_FOIS_/2.jpeg"],
  ["mo-ef2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/IL_ETAIT_UNE_FOIS_/3.jpeg"],
  ["mo-ef3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/IL_ETAIT_UNE_FOIS_/4.jpeg"],
  ["mo-ef4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/IL_ETAIT_UNE_FOIS_/7.jpeg"],
  ["mo-ef5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/IL_ETAIT_UNE_FOIS_/AdobeStock_265360165.jpeg"],
  ["mo-ef6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/IL_ETAIT_UNE_FOIS_/AdobeStock_287783022.jpeg"],
  ["mo-ef7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/IL_ETAIT_UNE_FOIS_/AdobeStock_65374904.jpeg"],
  ["mo-ef8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/EMIRATS_ARABES_UNIS/IL_ETAIT_UNE_FOIS_/AdobeStock_73416988.jpeg"],
  ["mo-em1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/1.jpg"],
  ["mo-em2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/10.jpeg"],
  ["mo-em3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/3.jpeg"],
  ["mo-em4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/4.jpg"],
  ["mo-em5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/5.jpeg"],
  ["mo-em6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/6.jpeg"],
  ["mo-em7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/7.jpeg"],
  ["mo-em8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/8.jpeg"],
  ["mo-em9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/9.jpeg"],
  ["mo-em10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ENTRE_MERS_ET_DESERTS/91.jpeg"],
  ["mo-ij1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/ESCAPADES_AUTOUR_DE_JERUSALEM/1.jpeg"],
  ["mo-ij3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/ESCAPADES_AUTOUR_DE_JERUSALEM/3.jpeg"],
  ["mo-ij4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/ESCAPADES_AUTOUR_DE_JERUSALEM/4.jpeg"],
  ["mo-ij5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/ESCAPADES_AUTOUR_DE_JERUSALEM/5.jpeg"],
  ["mo-ij6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/ESCAPADES_AUTOUR_DE_JERUSALEM/6.jpeg"],
  ["mo-ij7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/ESCAPADES_AUTOUR_DE_JERUSALEM/7.jpeg"],
  ["mo-ij8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/ESCAPADES_AUTOUR_DE_JERUSALEM/8.jpeg"],
  ["mo-ij9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/ESCAPADES_AUTOUR_DE_JERUSALEM/9.jpeg"],
  ["mo-is1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/1.jpeg"],
  ["mo-is3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/3.jpeg"],
  ["mo-is4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/4.jpeg"],
  ["mo-is5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/5.1.jpeg"],
  ["mo-is6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/5.2.jpeg"],
  ["mo-is7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/6.jpeg"],
  ["mo-is8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/7.jpeg"],
  ["mo-is9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/8.jpeg"],
  ["mo-is10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/9.2.jpeg"],
  ["mo-is11", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/ISRAEL/SUPER_BLEU/9.3.jpeg"],
  ["mo-om1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/DECOUVERTE_OMAN/a.jpeg"],
  ["mo-om2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/DECOUVERTE_OMAN/b.jpeg"],
  ["mo-om3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/DECOUVERTE_OMAN/c.jpeg"],
  ["mo-om4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/DECOUVERTE_OMAN/d.jpeg"],
  ["mo-om5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/DECOUVERTE_OMAN/e.jpeg"],
  ["mo-om6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/DECOUVERTE_OMAN/f.jpeg"],
  ["mo-om7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/DECOUVERTE_OMAN/g.jpeg"],
  ["mo-om8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/DECOUVERTE_OMAN/h.jpeg"],
  ["mo-om9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/A_LA_RENCONTRE_D_OMAN/1.jpeg"],
  ["mo-om10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/A_LA_RENCONTRE_D_OMAN/3.jpeg"],
  ["mo-om11", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/A_LA_RENCONTRE_D_OMAN/4.jpeg"],
  ["mo-om12", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/A_LA_RENCONTRE_D_OMAN/5.jpeg"],
  ["mo-om13", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/A_LA_RENCONTRE_D_OMAN/6.jpeg"],
  ["mo-om16", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/A_LA_RENCONTRE_D_OMAN/91.jpeg"],
  ["mo-om17", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/MOYEN_ORIENT/OMAN/A_LA_RENCONTRE_D_OMAN/93.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/mo-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
