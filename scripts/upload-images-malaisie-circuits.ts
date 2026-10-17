// Malaysia circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-malaisie-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["malaisie-jo1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/pt9ilovsgve3rmls3vyz.jpg"],
  ["malaisie-jo2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/dvixftgscbumzlsosed9.jpg"],
  ["malaisie-jo3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/d9yw7nfezdlshehyidfc.jpg"],
  ["malaisie-jo4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/uqkfeb55n95szun0ke4t.jpg"],
  ["malaisie-jo5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/1.jpeg"],
  ["malaisie-bo1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/g30rseepreibshnq1i8k.jpg"],
  ["malaisie-bo2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hdkhokbig1dwe0tuymsp.jpg"],
  ["malaisie-bo4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/mf4awvg5inbkprvt86cd.jpg"],
  ["malaisie-bo6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/xs75ahflkisi4n9jywqi.jpg"],
  ["malaisie-bo7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/dyuk0g9h8pqawmnsjlqu.jpg"],
  ["malaisie-bo8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/rulqb1tsu7sadd6jaulw.jpg"],
  ["malaisie-bo10", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/irhstpwr4s29amx71ufz.jpg"],
  ["malaisie-tn1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/xk4cr6ifwsif3ousaujq.jpg"],
  ["malaisie-tn4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/yr1ics9kshxour0jszxi.jpg"],
  ["malaisie-tn7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/x3zp5wzutbvrd2egp2uq.jpg"],
  ["malaisie-fo1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ujxlogymg5kqjjk18qgs.jpg"],
  ["malaisie-fo2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ojrphbadavls4bvwuvja.jpg"],
  ["malaisie-fo6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/zirsor6tedduoovgyedj.jpg"],
  ["malaisie-ti1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/9.9.jpeg"],
  ["malaisie-ti2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/9.3.jpeg"],
  ["malaisie-ti3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/5_.jpeg"],
  ["malaisie-ti4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/9.5.jpeg"],
  ["malaisie-ti5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/9.6.jpeg"],
  ["malaisie-ti7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ocndik8u9snzbey8noov.jpg"],
  ["malaisie-ro2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/rdagydknk0p2c0ldlci6.jpg"],
  ["malaisie-ro4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/bbptwuun6ropnujnfowb.jpg"],
  ["malaisie-ro6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ciqepmxptetcuz1muqlq.jpg"],
  ["malaisie-ro7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/utzheouqd8miymb5u074.jpg"],
  ["malaisie-ro8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/flabssybkyrlkbdnkbm9.jpg"],
  ["malaisie-tr1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/9.jpeg"],
  ["malaisie-tr3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/3.jpeg"],
  ["malaisie-tr4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/6.jpeg"],
  ["malaisie-tr5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/lsymind3plzhbnlgqxeu.jpg"],
  ["malaisie-tr7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/aq0qkkhjjkturxzpcerx.jpg"],
  ["malaisie-la1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/zvcc7v5xdyncukzhxeuc.jpg"],
  ["malaisie-la2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/aax03ml2oxzcrndujbmv.jpg"],
  ["malaisie-la4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/usc5rm7adatebespojjq.jpg"],
  ["malaisie-la5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/j8ldmnoczcqff7yfqfhi.jpg"],
  ["malaisie-pe1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/AdobeStock_240939231.jpeg"],
  ["malaisie-pe2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/Malaisie/9.91.jpeg"],
  ["malaisie-pe3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/lwpe8uc63ansflk34c3v.jpg"],
  ["malaisie-pe4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/nsx6ntwu1jvbzpw7oqxm.jpg"],
  ["malaisie-pe5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hgrg8unhwctz50bdazas.jpg"],
  ["malaisie-pe6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/sbhpoih4dmpkyfo0nftc.jpg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/malaisie-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
