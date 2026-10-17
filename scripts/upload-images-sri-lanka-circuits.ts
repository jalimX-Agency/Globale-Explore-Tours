// Sri Lanka circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-sri-lanka-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["srilanka-in1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/INCONTOURNABLES_SRI_LANKA/1.2.jpeg"],
  ["srilanka-in2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/INCONTOURNABLES_SRI_LANKA/2.1.jpeg"],
  ["srilanka-in3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/INCONTOURNABLES_SRI_LANKA/3.1.jpeg"],
  ["srilanka-in4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/INCONTOURNABLES_SRI_LANKA/4.1.jpeg"],
  ["srilanka-in5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/INCONTOURNABLES_SRI_LANKA/5.1.jpeg"],
  ["srilanka-in6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/INCONTOURNABLES_SRI_LANKA/6.1.jpeg"],
  ["srilanka-gt1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA/A.jpeg"],
  ["srilanka-gt2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA/B.jpeg"],
  ["srilanka-gt5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA/E.jpeg"],
  ["srilanka-gm1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA/EXTENSION_MALDIVES/1.jpg"],
  ["srilanka-gm2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA/EXTENSION_MALDIVES/2.jpg"],
  ["srilanka-gm3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA/EXTENSION_MALDIVES/3.jpg"],
  ["srilanka-gm5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA/EXTENSION_MALDIVES/5.jpeg"],
  ["srilanka-gm7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA/EXTENSION_MALDIVES/91.jpeg"],
  ["srilanka-jf1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA_2027/1.jpeg"],
  ["srilanka-jf2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA_2027/2.jpeg"],
  ["srilanka-jf3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA_2027/3.jpeg"],
  ["srilanka-jf4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA_2027/4.jpeg"],
  ["srilanka-jf5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA_2027/5.jpeg"],
  ["srilanka-jf6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA_2027/6.jpeg"],
  ["srilanka-jf7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA_2027/7.jpeg"],
  ["srilanka-jf8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA_2027/8.jpeg"],
  ["srilanka-jf9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/GRAND_TOUR_DU_SRI_LANKA_2027/9.jpeg"],
  ["srilanka-mg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MAGIE_DU_SRI_LANKA/1.jpeg"],
  ["srilanka-mg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MAGIE_DU_SRI_LANKA/2.jpeg"],
  ["srilanka-mg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MAGIE_DU_SRI_LANKA/3.jpeg"],
  ["srilanka-mg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MAGIE_DU_SRI_LANKA/4.jpeg"],
  ["srilanka-mg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MAGIE_DU_SRI_LANKA/5.jpeg"],
  ["srilanka-mg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MAGIE_DU_SRI_LANKA/6.jpeg"],
  ["srilanka-mg7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MAGIE_DU_SRI_LANKA/7.jpeg"],
  ["srilanka-mg8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MAGIE_DU_SRI_LANKA/8.jpeg"],
  ["srilanka-mg9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MAGIE_DU_SRI_LANKA/9.jpeg"],
  ["srilanka-ex2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/EXPERIENCE_SRI_LANKAISE/2.jpeg"],
  ["srilanka-ex3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/EXPERIENCE_SRI_LANKAISE/3.jpeg"],
  ["srilanka-ex4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/EXPERIENCE_SRI_LANKAISE/4.jpeg"],
  ["srilanka-ex5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/EXPERIENCE_SRI_LANKAISE/5.jpeg"],
  ["srilanka-ex6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/EXPERIENCE_SRI_LANKAISE/6.jpeg"],
  ["srilanka-ex7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/EXPERIENCE_SRI_LANKAISE/7.jpeg"],
  ["srilanka-ex9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/EXPERIENCE_SRI_LANKAISE/9.1.jpeg"],
  ["srilanka-ex10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/EXPERIENCE_SRI_LANKAISE/9.jpeg"],
  ["srilanka-mv1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MERVEILLE_CEYLAN/1.jpeg"],
  ["srilanka-mv2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MERVEILLE_CEYLAN/2.jpeg"],
  ["srilanka-mv3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MERVEILLE_CEYLAN/3.jpeg"],
  ["srilanka-mv4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MERVEILLE_CEYLAN/4.jpeg"],
  ["srilanka-mv5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MERVEILLE_CEYLAN/5.jpeg"],
  ["srilanka-mv7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MERVEILLE_CEYLAN/7.jpeg"],
  ["srilanka-mv8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/MERVEILLE_CEYLAN/8.jpeg"],
  ["srilanka-av3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/AVENTURE_SRI_LANKAISE_ET_PLAGE_DE_REE/3.jpeg"],
  ["srilanka-sk1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/COMBINE_SIGIRIYA_KANDY_NAYA_EDEN_27/1.jpeg"],
  ["srilanka-sk2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/COMBINE_SIGIRIYA_KANDY_NAYA_EDEN_27/2.jpeg"],
  ["srilanka-sk3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/COMBINE_SIGIRIYA_KANDY_NAYA_EDEN_27/3.jpeg"],
  ["srilanka-sk4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/COMBINE_SIGIRIYA_KANDY_NAYA_EDEN_27/4.jpg"],
  ["srilanka-sk5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/COMBINE_SIGIRIYA_KANDY_NAYA_EDEN_27/5.jpg"],
  ["srilanka-bw4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/COMBINE_SIGIRYA_NAYA_WATER_BLUE/4.jpg"],
  ["srilanka-bw5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/COMBINE_SIGIRYA_NAYA_WATER_BLUE/5.jpg"],
  ["srilanka-bw8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/SRI_LANKA/COMBINE_SIGIRYA_NAYA_WATER_BLUE/8.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/sri-lanka-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
