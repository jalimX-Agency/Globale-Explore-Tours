// India and Reunion circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-inr-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["inr-la1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/BEAUTE_DU_LADAKH/1.jpeg"],
  ["inr-la2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/BEAUTE_DU_LADAKH/2.jpeg"],
  ["inr-la3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/BEAUTE_DU_LADAKH/3.jpeg"],
  ["inr-la4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/BEAUTE_DU_LADAKH/4.jpeg"],
  ["inr-la5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/BEAUTE_DU_LADAKH/5.jpeg"],
  ["inr-la6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/BEAUTE_DU_LADAKH/6.jpeg"],
  ["inr-su1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/JOYAUX_DE_L_INDE_TX/1.jpeg"],
  ["inr-su2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/JOYAUX_DE_L_INDE_TX/2.jpeg"],
  ["inr-su3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/JOYAUX_DE_L_INDE_TX/3.jpeg"],
  ["inr-su4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/JOYAUX_DE_L_INDE_TX/4.jpeg"],
  ["inr-su5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/JOYAUX_DE_L_INDE_TX/5.jpeg"],
  ["inr-rj1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/1.1.jpeg"],
  ["inr-rj2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/1.2.jpeg"],
  ["inr-rj3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/2.jpeg"],
  ["inr-rj4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/3.jpeg"],
  ["inr-rj5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/4.jpeg"],
  ["inr-rj6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/5.jpeg"],
  ["inr-rj7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/6.jpeg"],
  ["inr-rj8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/7.jpeg"],
  ["inr-rj9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/8.jpeg"],
  ["inr-rj10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/MAGIE_DU_RAJASTHAN/9.jpeg"],
  ["inr-ke1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/s06pvoz8jq7k86yx1mmp.jpg"],
  ["inr-ke2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/faw0tjlkgcvtd8azvyk4.jpg"],
  ["inr-ke3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/yhxhcemms6ranrhnmnnw.jpg"],
  ["inr-ke4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/plihaq3mma1nw6fgg9nm.jpg"],
  ["inr-ke5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/pxle9vtto0vzdb92dq9w.jpg"],
  ["inr-ke6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hksvjvyakmjfsrbtzq8n.jpg"],
  ["inr-ke7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/a5ujgkq5hlynaqofogdj.jpg"],
  ["inr-ke8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ko9ctr4s1czxcezdfwci.jpg"],
  ["inr-ke9", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/lkb1rmpgryee4mkzfalm.jpg"],
  ["inr-ke10", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/o7a0iw7nfwg0bwscfkbx.jpg"],
  ["inr-ri1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/RAJASTHAN_INTIMISTE/RAJASTHAN_INTIMISTE_2026/1.jpeg"],
  ["inr-ri2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/RAJASTHAN_INTIMISTE/RAJASTHAN_INTIMISTE_2026/2.jpeg"],
  ["inr-ri3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/RAJASTHAN_INTIMISTE/RAJASTHAN_INTIMISTE_2026/3.jpeg"],
  ["inr-ri4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/RAJASTHAN_INTIMISTE/RAJASTHAN_INTIMISTE_2026/4.jpeg"],
  ["inr-ri5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/RAJASTHAN_INTIMISTE/RAJASTHAN_INTIMISTE_2026/5.jpeg"],
  ["inr-ri6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/RAJASTHAN_INTIMISTE/RAJASTHAN_INTIMISTE_2026/6.jpeg"],
  ["inr-ri7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/RAJASTHAN_INTIMISTE/RAJASTHAN_INTIMISTE_2026/7.jpeg"],
  ["inr-ri8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/INDE/RAJASTHAN_INTIMISTE/RAJASTHAN_INTIMISTE_2026/8.jpeg"],
  ["inr-re1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/CIRCUITS/LA_REUNION_JOYAU_DE_L_OCEAN_INDIEN/1.jpeg"],
  ["inr-re2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/CIRCUITS/LA_REUNION_JOYAU_DE_L_OCEAN_INDIEN/2.jpeg"],
  ["inr-re3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/CIRCUITS/LA_REUNION_JOYAU_DE_L_OCEAN_INDIEN/3.jpeg"],
  ["inr-re4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/CIRCUITS/LA_REUNION_JOYAU_DE_L_OCEAN_INDIEN/4.jpeg"],
  ["inr-re5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/CIRCUITS/LA_REUNION_JOYAU_DE_L_OCEAN_INDIEN/5.jpeg"],
  ["inr-ra1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/AUTOTOURS/SUR_LA_ROUTE_LA_REUNION_ENTRE_VOLCANS_ET_LAGON/1.jpeg"],
  ["inr-ra2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/AUTOTOURS/SUR_LA_ROUTE_LA_REUNION_ENTRE_VOLCANS_ET_LAGON/2.jpeg"],
  ["inr-ra3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/AUTOTOURS/SUR_LA_ROUTE_LA_REUNION_ENTRE_VOLCANS_ET_LAGON/3.jpeg"],
  ["inr-ra4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/AUTOTOURS/SUR_LA_ROUTE_LA_REUNION_ENTRE_VOLCANS_ET_LAGON/4.jpeg"],
  ["inr-ra5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/AUTOTOURS/SUR_LA_ROUTE_LA_REUNION_ENTRE_VOLCANS_ET_LAGON/5.jpeg"],
  ["inr-ra6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/AUTOTOURS/SUR_LA_ROUTE_LA_REUNION_ENTRE_VOLCANS_ET_LAGON/6.jpeg"],
  ["inr-ra7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/OCEAN_INDIEN/AUTOTOURS/SUR_LA_ROUTE_LA_REUNION_ENTRE_VOLCANS_ET_LAGON/7.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/inr-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
