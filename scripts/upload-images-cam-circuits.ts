// Central America circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-cam-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["cam-cs4", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/45/module-packages/days/6997/20251012121508-pont-suspendu.jpg"],
  ["cam-cs7", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/45/module-packages/days/7000/20251014172600-3.jpg"],
  ["cam-hc1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/HOLA_COSTA_RICA_EN_PRIVATIF/1-AdobeStock_252621347.jpeg"],
  ["cam-hc2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/HOLA_COSTA_RICA_EN_PRIVATIF/AdobeStock_189379767.jpeg"],
  ["cam-hc3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/HOLA_COSTA_RICA_EN_PRIVATIF/AdobeStock_273993835.jpeg"],
  ["cam-hc4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/HOLA_COSTA_RICA_EN_PRIVATIF/AdobeStock_328323532.jpeg"],
  ["cam-hc5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/HOLA_COSTA_RICA_EN_PRIVATIF/AdobeStock_339201500.jpeg"],
  ["cam-hc6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/HOLA_COSTA_RICA_EN_PRIVATIF/AdobeStock_527089464.jpeg"],
  ["cam-hc7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/HOLA_COSTA_RICA_EN_PRIVATIF/AdobeStock_77237485.jpeg"],
  ["cam-ni1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/ESSENTIEL_COSTA_RICA/AdobeStock_109566467.jpeg"],
  ["cam-ni2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/ESSENTIEL_COSTA_RICA/AdobeStock_114416968_.jpeg"],
  ["cam-ni3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/ESSENTIEL_COSTA_RICA/AdobeStock_143450186.jpeg"],
  ["cam-ni4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/ESSENTIEL_COSTA_RICA/AdobeStock_189311748.jpeg"],
  ["cam-ni5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/ESSENTIEL_COSTA_RICA/AdobeStock_207554738.jpeg"],
  ["cam-ni6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/ESSENTIEL_COSTA_RICA/AdobeStock_230548282.jpeg"],
  ["cam-ni7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/ESSENTIEL_COSTA_RICA/AdobeStock_277233627.jpeg"],
  ["cam-ni8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/ESSENTIEL_COSTA_RICA/AdobeStock_307238552.jpeg"],
  ["cam-ir1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/INCONTOURNABLES_COSTA_RICA/1-AdobeStock_192413528.jpeg"],
  ["cam-ir2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/INCONTOURNABLES_COSTA_RICA/AdobeStock_135642267.jpeg"],
  ["cam-ir3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/INCONTOURNABLES_COSTA_RICA/AdobeStock_168243431.jpeg"],
  ["cam-ir4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/INCONTOURNABLES_COSTA_RICA/AdobeStock_261488168.jpeg"],
  ["cam-ir5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/INCONTOURNABLES_COSTA_RICA/AdobeStock_353251094.jpeg"],
  ["cam-mg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/MAGIE_DU_COSTA_RICA/circuit-costa-rica-1.jpeg"],
  ["cam-mg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/MAGIE_DU_COSTA_RICA/circuit-costa-rica-2.jpeg"],
  ["cam-mg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/MAGIE_DU_COSTA_RICA/circuit-costa-rica-4.jpeg"],
  ["cam-mg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/MAGIE_DU_COSTA_RICA/circuit-costa-rica-6.jpeg"],
  ["cam-sp5", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/45/module-packages/days/5429/20260724131312-jaco-shutterstock-1149266882-1.jpg"],
  ["cam-tr1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/TRESORS_DU_COSTA_RICA_2027/1._AdobeStock_1125631666.jpeg"],
  ["cam-tr3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/TRESORS_DU_COSTA_RICA_2027/3._AdobeStock_276384018.jpeg"],
  ["cam-tr4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/TRESORS_DU_COSTA_RICA_2027/4._AdobeStock_375271183.jpeg"],
  ["cam-tr5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/TRESORS_DU_COSTA_RICA_2027/5.jpeg"],
  ["cam-tr6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/TRESORS_DU_COSTA_RICA_2027/6.jpeg"],
  ["cam-tr7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/TRESORS_DU_COSTA_RICA_2027/7.jpeg"],
  ["cam-tr8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/COSTA_RICA/TRESORS_DU_COSTA_RICA_2027/8.jpeg"],
  ["cam-cp1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/PANAMA/COULEURS_DU_PANAMA/PTY_AdobeStock_577510532.jpeg"],
  ["cam-cp2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ccdcomkh69h7suqrsqio.jpg"],
  ["cam-cp3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/masjezq1lm0tbfgsq1pm.jpg"],
  ["cam-cp4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/tt3ozocxrxlj2rbzviml.jpg"],
  ["cam-cp5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ewgm7zeajpzcvuvyxm5r.jpg"],
  ["cam-cp6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/xmwh85zz7ftsbfi2ch8o.jpg"],
  ["cam-cp7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ma67jwqoafj22oztuqpz.jpg"],
  ["cam-cp8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/qns3a8q4ikzcbkcyl5ml.jpg"],
  ["cam-dp1", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/36/module-packages/841/20260310171015-panama-shutterstock-2337763573-3.jpg"],
  ["cam-dp2", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/36/module-packages/days/4497/20260310121000-panama-shutterstock-2344921443.jpg"],
  ["cam-dp3", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/36/module-packages/days/4498/20260310122026-panama-shutterstock-1756558637-3.jpg"],
  ["cam-dp4", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/36/module-packages/days/4499/20260310163016-isla-mono-shutterstock-2295860977.jpg"],
  ["cam-dp5", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/36/module-packages/days/4500/20260310162455-portobelo-shutterstock-782418328-2.jpg"],
  ["cam-dp6", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/36/module-packages/days/4501/20260310162821-valle-de-anton-shutterstock-2262101523.jpg"],
  ["cam-dp7", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/36/module-packages/days/4502/20260310163030-gamboa-shutterstock-2301090257.jpg"],
  ["cam-cg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/GUATEMALA/DECOUVERTE_GUATEMALA/2.jpeg"],
  ["cam-cg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/GUATEMALA/DECOUVERTE_GUATEMALA/1.jpeg"],
  ["cam-cg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/GUATEMALA/DECOUVERTE_GUATEMALA/3.jpeg"],
  ["cam-cg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/GUATEMALA/DECOUVERTE_GUATEMALA/4.jpeg"],
  ["cam-cg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/GUATEMALA/DECOUVERTE_GUATEMALA/5.jpeg"],
  ["cam-mx1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/MEXIQUE/COULEURS_MEXIQUE_EXT_GUATEMALA/Coul_AdobeStock_629689748.jpeg"],
  ["cam-mx2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/bjxhphhoxab2apgqlhrg.jpg"],
  ["cam-mx3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/rcsfetoeq22hjm5yxvf4.jpg"],
  ["cam-mx4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/n3csurk0qvzjlpbvaool.jpg"],
  ["cam-mx5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/kfnsbddmnf0liap09ir4.jpg"],
  ["cam-mx6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/dmpfdzwrsmeoehiurrqw.jpg"],
  ["cam-mx7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/afpba2neldzhg3wl13u6.jpg"],
  ["cam-mx8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/f80fgasinqjlbk9uw40y.jpg"],
  ["cam-dg1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/af2obuck7oxgp74emisk.jpg"],
  ["cam-dg2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ounbwsd6gcfoy3bnyzti.jpg"],
  ["cam-dg3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/jprpn0v71psjxwaqfhrv.jpg"],
  ["cam-dg4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/d8msgwnrwr7cuhty5fns.jpg"],
  ["cam-dg5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/rbxhgjr8rkdl9idmkkdk.jpg"],
  ["cam-dg6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/vlsyxaqfjoxwjg3woaig.jpg"],
  ["cam-dg7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/mktm5nck3qwqadunv37k.jpg"],
  ["cam-dg8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/vla7z9zqfpf2ykuwwsxk.jpg"],
  ["cam-bz1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/GUATEMALA/27_DECOUVERTE_GUATEMALA_EXT_BELIZE/1-_Pacifique_AdobeStock_179482175.jpeg"],
  ["cam-bz2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/GUATEMALA/27_DECOUVERTE_GUATEMALA_EXT_BELIZE/Belize_-AdobeStock_332061580.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/cam-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
