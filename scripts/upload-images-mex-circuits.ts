// Mexique circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-mex-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["mex-cm1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/sbx0mxaotqjonpbhzrlu.jpg"],
  ["mex-cm2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/xc06nhduethjxkxpcdks.jpg"],
  ["mex-cm3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/nrgmwxiqzfdkztdym8du.jpg"],
  ["mex-cm4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/vtcd5uyxkyepa8eenf7n.jpg"],
  ["mex-cm5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/brjjj6rfmn66punuef8t.jpg"],
  ["mex-cm6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/js3vjyhpre9bytwzs8ni.jpg"],
  ["mex-cm7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/udqk9cgwfuar04rvsazd.jpg"],
  ["mex-cm8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/cflmzmvj4quuuben5dyr.jpg"],
  ["mex-cy1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/w7erxelgpg7y0cfppc1a.jpg"],
  ["mex-cy2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/dtvxkun6iuvoy6mbzt0o.jpg"],
  ["mex-cy3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/yypodqi6xw7ox9fuaa8z.jpg"],
  ["mex-cy4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/dvhyhpgiyo5j9ozdzmut.jpg"],
  ["mex-cy5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/zaouflu7d7unusztien9.jpg"],
  ["mex-cy6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hfp74rwxw64tugvsbs8l.jpg"],
  ["mex-cy7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/e2mdtvwkhxp7zdlvi1k6.jpg"],
  ["mex-cy8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/tacx8clx4uuvdv2q540y.jpg"],
  ["mex-co1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/COULEURS_DU_MEXIQUE/1.jpg"],
  ["mex-co2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/COULEURS_DU_MEXIQUE/3.jpg"],
  ["mex-co5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/COULEURS_DU_MEXIQUE/6.jpg"],
  ["mex-co6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/COULEURS_DU_MEXIQUE/7.jpg"],
  ["mex-co8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/COULEURS_DU_MEXIQUE/9.jpg"],
  ["mex-dy1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/tvkauus0j03ocpce22vb.jpg"],
  ["mex-dy2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ntdajoljzpmhkesfrc39.jpg"],
  ["mex-dy3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/bsenzeyncnelbbjqvrun.jpg"],
  ["mex-dy4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/bxupl2kbjy2zmlz9buns.jpg"],
  ["mex-dy5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/qy1mtawjlvb6jksyamnp.jpg"],
  ["mex-dy6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/lxuz7zyniqdenduxya8w.jpg"],
  ["mex-dy7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/suycnuweoxxtvfdbprba.jpg"],
  ["mex-dy8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/zal18h7rqowbqmhsiwhg.jpg"],
  ["mex-ho1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/HOLA_MEXICO/AdobeStock_199738162.jpeg"],
  ["mex-ho2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/HOLA_MEXICO/AdobeStock_208738269.jpeg"],
  ["mex-ho3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/HOLA_MEXICO/AdobeStock_237158529.jpeg"],
  ["mex-ho4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/HOLA_MEXICO/AdobeStock_24205393.jpeg"],
  ["mex-ho5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/HOLA_MEXICO/AdobeStock_410648405.jpeg"],
  ["mex-ho6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/HOLA_MEXICO/AdobeStock_456089184.jpeg"],
  ["mex-ho7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/HOLA_MEXICO/AdobeStock_45744627.jpeg"],
  ["mex-ho8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/HOLA_MEXICO/AdobeStock_567552440.jpeg"],
  ["mex-im1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/INCONTOURNABLES_DU_MEXIQUE/AdobeStock_192845126.jpeg"],
  ["mex-im2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/INCONTOURNABLES_DU_MEXIQUE/AdobeStock_260360316.jpeg"],
  ["mex-im3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/INCONTOURNABLES_DU_MEXIQUE/AdobeStock_297887612.jpeg"],
  ["mex-im4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/INCONTOURNABLES_DU_MEXIQUE/AdobeStock_303734810.jpeg"],
  ["mex-im5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/INCONTOURNABLES_DU_MEXIQUE/AdobeStock_357327602.jpeg"],
  ["mex-im6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/INCONTOURNABLES_DU_MEXIQUE/AdobeStock_450743138.jpeg"],
  ["mex-im7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/INCONTOURNABLES_DU_MEXIQUE/AdobeStock_497161997.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/mex-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
