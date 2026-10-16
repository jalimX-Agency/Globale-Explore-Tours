// Thailand circuits — photos from each circuit's gallery on the supplier site. Several circuits
// keep their photos on the local partner's image hosts rather than the supplier's own, so each
// image is listed with its full source URL. Published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-thailande-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — hotel-room, restaurant, map and branded pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["thailande-in1", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/379/20250508110149-5.jpg"],
  ["thailande-in3", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/382/20250508110443-3.jpg"],
  ["thailande-in4", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/383/20250508110907-8.jpg"],
  ["thailande-in5", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/384/20250508110918-1.jpg"],
  ["thailande-in6", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/385/20250508111236-66272.jpg"],
  ["thailande-in7", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/385/20250508111236-explore-thailand-by-train-multi-city-journeys-to-and-from-bangkok.jpg"],
  ["thailande-ny2", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/5841/20260706035402-featured-image-wat-phra-kaew-and-the-grand-palace-bangkok-thailand.jpg"],
  ["thailande-ny5", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/5842/20260706041441-everything-you-need-to-know-about-tuk-tuks-in-bangkok-2933.jpg"],
  ["thailande-ny8", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/6473/20260707102019-1274304556.jpg"],
  ["thailande-su2", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/3837/20251016083124-f259bb28-895e-4da6-8e41-d363baed887b.jpg"],
  ["thailande-su3", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/3837/20251016083124-2c88dd07-43f3-4df6-93a7-c79f68de2b3a.jpg"],
  ["thailande-su4", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/3837/20251016083124-9a26ee45-9a3b-467f-bbe3-e0d4b14e4f9c.jpg"],
  ["thailande-su5", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/3837/20251016083124-chiewlarn.jpg"],
  ["thailande-su11", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/3842/20251016105603-4357.jpg"],
  ["thailande-su12", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/60/module-packages/days/3842/20251016105603-4356.jpg"],
  ["thailande-pa1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/rupliprdqvlzkyp0euob.jpg"],
  ["thailande-pa2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ukhp499jeiz5iihqropl.jpg"],
  ["thailande-pa3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/pdewhldvzxk5q4mn2hku.jpg"],
  ["thailande-pa4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/drivfbdjhjftor237c6p.jpg"],
  ["thailande-pa5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/mnabjvulbhnr2uhmtoth.jpg"],
  ["thailande-pa6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/yb53vw9fzxxqwdiyemig.jpg"],
  ["thailande-pa8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/iqn5v6rmqgbky2s3j12r.jpg"],
  ["thailande-it1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/THAILANDE_INTIMISTE/CLASSIQUE/1.jpeg"],
  ["thailande-it2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/THAILANDE_INTIMISTE/CLASSIQUE/2.jpeg"],
  ["thailande-it3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/THAILANDE_INTIMISTE/CLASSIQUE/3.jpeg"],
  ["thailande-it4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/THAILANDE_INTIMISTE/CLASSIQUE/4.jpeg"],
  ["thailande-it5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/THAILANDE_INTIMISTE/CLASSIQUE/5.jpeg"],
  ["thailande-it6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/THAILANDE_INTIMISTE/CLASSIQUE/6.jpeg"],
  ["thailande-it7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/THAILANDE_INTIMISTE/CLASSIQUE/7.jpeg"],
  ["thailande-it8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/THAILANDE_INTIMISTE/CLASSIQUE/8.jpeg"],
  ["thailande-it9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/THAILANDE_INTIMISTE/CLASSIQUE/9.jpeg"],
  ["thailande-mg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/MAGIE_DE_LA_THAILANDE_DU_NORD_AU_SUD_PRIVATIF/1.jpeg"],
  ["thailande-mg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/MAGIE_DE_LA_THAILANDE_DU_NORD_AU_SUD_PRIVATIF/2.jpeg"],
  ["thailande-mg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/MAGIE_DE_LA_THAILANDE_DU_NORD_AU_SUD_PRIVATIF/3.jpeg"],
  ["thailande-mg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/MAGIE_DE_LA_THAILANDE_DU_NORD_AU_SUD_PRIVATIF/4.jpeg"],
  ["thailande-mg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/MAGIE_DE_LA_THAILANDE_DU_NORD_AU_SUD_PRIVATIF/5.jpeg"],
  ["thailande-mg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/MAGIE_DE_LA_THAILANDE_DU_NORD_AU_SUD_PRIVATIF/6.jpeg"],
  ["thailande-mg7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/MAGIE_DE_LA_THAILANDE_DU_NORD_AU_SUD_PRIVATIF/7.jpeg"],
  ["thailande-mg8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/MAGIE_DE_LA_THAILANDE_DU_NORD_AU_SUD_PRIVATIF/8.jpeg"],
  ["thailande-mg9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/MAGIE_DE_LA_THAILANDE_DU_NORD_AU_SUD_PRIVATIF/9.jpeg"],
  ["thailande-jy1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/JOYAUX_THAILANDE_DU_SUD/1.jpeg"],
  ["thailande-jy2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/JOYAUX_THAILANDE_DU_SUD/2.jpeg"],
  ["thailande-jy3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/JOYAUX_THAILANDE_DU_SUD/3.jpeg"],
  ["thailande-jy4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/JOYAUX_THAILANDE_DU_SUD/4.jpeg"],
  ["thailande-jy5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/JOYAUX_THAILANDE_DU_SUD/5.jpeg"],
  ["thailande-jy6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/JOYAUX_THAILANDE_DU_SUD/6.jpeg"],
  ["thailande-jy7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/JOYAUX_THAILANDE_DU_SUD/9.1.jpeg"],
  ["thailande-gt1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/GRAND_TOUR_DE_LA_THAILANDE_/1.jpeg"],
  ["thailande-gt3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/GRAND_TOUR_DE_LA_THAILANDE_/3.jpeg"],
  ["thailande-gt8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/GRAND_TOUR_DE_LA_THAILANDE_/8.jpeg"],
  ["thailande-gt9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/PARFUM_THAI/1.jpeg"],
  ["thailande-gt10", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/PARFUM_THAI/2.jpeg"],
  ["thailande-gt11", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/PARFUM_THAI/3.jpeg"],
  ["thailande-gt12", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/PARFUM_THAI/4.jpeg"],
  ["thailande-gt13", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/PARFUM_THAI/5.jpeg"],
  ["thailande-gt15", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/THAILANDE/PARFUM_THAI/7.JPG"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/thailande-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
