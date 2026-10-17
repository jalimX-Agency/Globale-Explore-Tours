// China circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-chine-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["chine-pa1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/AU_PAYS_DES_PANDAS/1.jpg"],
  ["chine-pa2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/AU_PAYS_DES_PANDAS/2.jpg"],
  ["chine-pa3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/AU_PAYS_DES_PANDAS/3.jpg"],
  ["chine-pa4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/AU_PAYS_DES_PANDAS/4.jpg"],
  ["chine-pa5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/AU_PAYS_DES_PANDAS/5.jpg"],
  ["chine-pa6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/AU_PAYS_DES_PANDAS/6.jpg"],
  ["chine-pa7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/AU_PAYS_DES_PANDAS/7.jpg"],
  ["chine-pa8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/AU_PAYS_DES_PANDAS/8.jpg"],
  ["chine-ya1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/CHINE_MILLENAIRE_AU_FIL/1.jpeg"],
  ["chine-ya2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/CHINE_MILLENAIRE_AU_FIL/2.jpeg"],
  ["chine-ya3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/CHINE_MILLENAIRE_AU_FIL/3.jpeg"],
  ["chine-ya4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/CHINE_MILLENAIRE_AU_FIL/4.jpeg"],
  ["chine-ya7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/CHINE_MILLENAIRE_AU_FIL/7.jpeg"],
  ["chine-hk1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/DE_HKG_A_PEK/1.jpeg"],
  ["chine-hk2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/DE_HKG_A_PEK/2.jpeg"],
  ["chine-hk3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/DE_HKG_A_PEK/3.jpeg"],
  ["chine-hk4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/DE_HKG_A_PEK/4.jpeg"],
  ["chine-hk5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/DE_HKG_A_PEK/5.jpeg"],
  ["chine-hk6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/DE_HKG_A_PEK/6.jpeg"],
  ["chine-es1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/ESSENTIEL_DE_LA_CHINE_PRIVATIF/1.jpg"],
  ["chine-es5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/ESSENTIEL_DE_LA_CHINE_PRIVATIF/5.jpg"],
  ["chine-es6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/ESSENTIEL_DE_LA_CHINE_PRIVATIF/6.jpg"],
  ["chine-jo1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/JOYAUX_DE_LA_CHINE/1.jpeg"],
  ["chine-jo2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/JOYAUX_DE_LA_CHINE/2.jpeg"],
  ["chine-jo5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/JOYAUX_DE_LA_CHINE/5.jpeg"],
  ["chine-jo6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/JOYAUX_DE_LA_CHINE/6.jpeg"],
  ["chine-jo7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/JOYAUX_DE_LA_CHINE/7.jpeg"],
  ["chine-jo8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/JOYAUX_DE_LA_CHINE/8.jpeg"],
  ["chine-in1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/INCONTOURNABLE_CHINE/1.jpeg"],
  ["chine-in3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/INCONTOURNABLE_CHINE/3.jpeg"],
  ["chine-in4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/INCONTOURNABLE_CHINE/4.jpeg"],
  ["chine-in5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/INCONTOURNABLE_CHINE/5.jpeg"],
  ["chine-in6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/CHINE/INCONTOURNABLE_CHINE/6.jpeg"],
  ["chine-yu1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ycetsqvsxrcgbnxfuhmd.jpg"],
  ["chine-yu2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/on3c51nnqgvhygnnctzb.jpg"],
  ["chine-yu4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ezm2tfrzcoa8ahpr83sx.jpg"],
  ["chine-yu5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/exd1qrilhxfnkfoykwhg.jpg"],
  ["chine-yu6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/sslg413xutmbi0zp8kpo.jpg"],
  ["chine-yu7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/vziladbvlrjrkv3vc0qg.jpg"],
  ["chine-yu8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/gmhd4wpgwo1vbb7nes7x.jpg"],
  ["chine-yu10", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/huju2xuotawa111othss.jpg"],
  ["chine-yu11", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/nkdz7xdnhobkqmstpxc4.jpg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/chine-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
