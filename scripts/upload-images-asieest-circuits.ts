// Korea and Mongolia circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-asieest-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["asieest-mc1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/irakjlhydptdu54eogpn.jpg"],
  ["asieest-mc2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hf7tljsxgfgsy8jom77o.jpg"],
  ["asieest-mc3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/b6bip8e5vhournvnskc1.jpg"],
  ["asieest-mc4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/mv81td35eoctcnvsgvtx.jpg"],
  ["asieest-mc5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/wavhvty4q0njonksylhz.jpg"],
  ["asieest-mc6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/s7fngjinfihacyn6sosd.jpg"],
  ["asieest-mc7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/jiruaa7o8qzcv00afhds.jpg"],
  ["asieest-mc8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/khu0en3srvfrbukkcm7p.jpg"],
  ["asieest-pa1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/nza6owmkqmzkqgf4lvrn.jpg"],
  ["asieest-pa2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/l9sbny02iwrkewhgqcyr.jpg"],
  ["asieest-pa3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/svthtug6ig5sflpgxty6.jpg"],
  ["asieest-pa4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/nh5bhjctukq7yycaasqs.jpg"],
  ["asieest-pa5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/yvhsbzmgjo6xkfkivhnp.jpg"],
  ["asieest-pa6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/suolbohkeirqblslaqve.jpg"],
  ["asieest-pa7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hungvt9vulyfzbzjj5o5.jpg"],
  ["asieest-pa9", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hkgjvjehbczhenz4hzu6.jpg"],
  ["asieest-pa10", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ilb7u1jdrvheoau9cqnx.jpg"],
  ["asieest-cj1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/COREE_DU_SUD/PASSION_COREE_JAPON/1.jpeg"],
  ["asieest-cj2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/COREE_DU_SUD/PASSION_COREE_JAPON/2.jpeg"],
  ["asieest-cj3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/COREE_DU_SUD/PASSION_COREE_JAPON/3.jpeg"],
  ["asieest-cj4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/COREE_DU_SUD/PASSION_COREE_JAPON/4.jpeg"],
  ["asieest-cj5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/COREE_DU_SUD/PASSION_COREE_JAPON/5.jpeg"],
  ["asieest-cj6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/COREE_DU_SUD/PASSION_COREE_JAPON/6.jpeg"],
  ["asieest-cj7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/COREE_DU_SUD/PASSION_COREE_JAPON/7.jpeg"],
  ["asieest-cj8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/COREE_DU_SUD/PASSION_COREE_JAPON/8.jpeg"],
  ["asieest-mo1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/MONGOLIE/AU_PAYS_DES_NOMADES/1.jpeg"],
  ["asieest-mo2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/MONGOLIE/AU_PAYS_DES_NOMADES/2.jpeg"],
  ["asieest-mo3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/MONGOLIE/AU_PAYS_DES_NOMADES/3.jpeg"],
  ["asieest-mo4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/MONGOLIE/AU_PAYS_DES_NOMADES/4.jpeg"],
  ["asieest-mo5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/MONGOLIE/AU_PAYS_DES_NOMADES/5.jpeg"],
  ["asieest-mo6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/MONGOLIE/AU_PAYS_DES_NOMADES/6.jpeg"],
  ["asieest-mo7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/MONGOLIE/AU_PAYS_DES_NOMADES/7.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/asieest-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
