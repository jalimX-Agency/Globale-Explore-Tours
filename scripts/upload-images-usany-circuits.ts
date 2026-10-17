// New York circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-usany-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["usany-ba1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/swwwzednudbqhxy17man.jpg"],
  ["usany-ba2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/a5tow6mzokzf5r39n70f.jpg"],
  ["usany-ba3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/izfvvvjykn6dk6r4ed7q.jpg"],
  ["usany-ba4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/p3ogbnrjyq0lphterhwm.jpg"],
  ["usany-ba5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/clwf6vfvavgqzr1zlaa3.jpg"],
  ["usany-ba6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/bbrgspdjoluunxmzizet.jpg"],
  ["usany-ba7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/mwyhdvn1wadbwwz6mvtw.jpg"],
  ["usany-au1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/k2humii51ngqvpiw6ltq.jpg"],
  ["usany-au5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/bnepmeynebqxybgia5qe.jpg"],
  ["usany-mg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/MAGIE_DE_NY_-_GLOBE/4N/1.jpeg"],
  ["usany-mg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/MAGIE_DE_NY_-_GLOBE/4N/2.jpg"],
  ["usany-mg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/MAGIE_DE_NY_-_GLOBE/4N/3.jpeg"],
  ["usany-mg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/MAGIE_DE_NY_-_GLOBE/4N/4.jpeg"],
  ["usany-mg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/MAGIE_DE_NY_-_GLOBE/4N/5.jpeg"],
  ["usany-mg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/MAGIE_DE_NY_-_GLOBE/4N/6.jpeg"],
  ["usany-fr1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/SEJOURS/FRENCHIES_HOLIDAY_INN_TIME_SQUARE/1._AdobeStock_606569106.jpeg"],
  ["usany-fr2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/SEJOURS/FRENCHIES_HOLIDAY_INN_TIME_SQUARE/2._AdobeStock_177783526.jpeg"],
  ["usany-fr3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/SEJOURS/FRENCHIES_HOLIDAY_INN_TIME_SQUARE/3._AdobeStock_247468304.jpeg"],
  ["usany-fr6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/SEJOURS/FRENCHIES_HOLIDAY_INN_TIME_SQUARE/6._visite-guidee-harlem-8.jpg"],
  ["usany-fr7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/SEJOURS/FRENCHIES_HOLIDAY_INN_TIME_SQUARE/9._Visite-guidee-lower-east-side-chinatown-little-italy-31.jpg"],
  ["usany-in1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/NEW_YORK_INTIMISTE/1._AdobeStock_305168081.jpeg"],
  ["usany-in2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/NEW_YORK_INTIMISTE/2._AdobeStock_73330266.jpeg"],
  ["usany-in3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/NEW_YORK_INTIMISTE/3._AdobeStock_345329030.jpeg"],
  ["usany-in4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/NEW_YORK_INTIMISTE/4._AdobeStock_126108994.jpeg"],
  ["usany-in5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/NEW_YORK_INTIMISTE/5._AdobeStock_187679965.jpeg"],
  ["usany-in6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/NEW_YORK_INTIMISTE/6._AdobeStock_333604223_Editorial_Use_Only.jpeg"],
  ["usany-in7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/NEW_YORK_INTIMISTE/7._AdobeStock_270697456.jpeg"],
  ["usany-in8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/USA_CANADA/NEW_YORK_INTIMISTE/8._AdobeStock_782039184.jpeg"],
  ["usany-no1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/CIRCUITS/TRESORS_DE_NYC/SPECIAL_NOEL/1._AdobeStock_321128408.jpeg"],
  ["usany-no2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/CIRCUITS/TRESORS_DE_NYC/SPECIAL_NOEL/2._AdobeStock_131353860.jpeg"],
  ["usany-no3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/CIRCUITS/TRESORS_DE_NYC/SPECIAL_NOEL/3._AdobeStock_188189686.jpeg"],
  ["usany-no4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/CIRCUITS/TRESORS_DE_NYC/SPECIAL_NOEL/4._AdobeStock_400441369.jpeg"],
  ["usany-no5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/CIRCUITS/TRESORS_DE_NYC/SPECIAL_NOEL/5._AdobeStock_100427541.jpeg"],
  ["usany-no6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/CIRCUITS/TRESORS_DE_NYC/SPECIAL_NOEL/6._AdobeStock_83174501.jpeg"],
  ["usany-no7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/CIRCUITS/TRESORS_DE_NYC/SPECIAL_NOEL/7._AdobeStock_99784912.jpeg"],
  ["usany-no8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/CIRCUITS/TRESORS_DE_NYC/SPECIAL_NOEL/8._AdobeStock_543784854.jpeg"],
  ["usany-no9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ETATS-UNIS/CIRCUITS/TRESORS_DE_NYC/SPECIAL_NOEL/9._AdobeStock_236184594.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/usany-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
