// Nordics new circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-nd-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["nd-cn1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/NORVEGE/CAP_NORD_LOFOTEN_ET_3_LAPONIES_TEX/1.jpeg"],
  ["nd-cn2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/NORVEGE/CAP_NORD_LOFOTEN_ET_3_LAPONIES_TEX/2.jpeg"],
  ["nd-cn3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/NORVEGE/CAP_NORD_LOFOTEN_ET_3_LAPONIES_TEX/3.jpeg"],
  ["nd-cn4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/NORVEGE/CAP_NORD_LOFOTEN_ET_3_LAPONIES_TEX/4.jpeg"],
  ["nd-cn5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/NORVEGE/CAP_NORD_LOFOTEN_ET_3_LAPONIES_TEX/5.jpeg"],
  ["nd-cn6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/NORVEGE/CAP_NORD_LOFOTEN_ET_3_LAPONIES_TEX/6.jpeg"],
  ["nd-ro1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/AAKENUS/1.jpg"],
  ["nd-ro2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/AAKENUS/2.jpg"],
  ["nd-ro3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/AAKENUS/3.jpg"],
  ["nd-ro4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/AAKENUS/4.jpg"],
  ["nd-ro5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/AAKENUS/5.jpg"],
  ["nd-su1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_SUOMU/10.jpeg"],
  ["nd-su2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_SUOMU/20.jpeg"],
  ["nd-su3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_SUOMU/30.jpeg"],
  ["nd-su4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_SUOMU/40.jpeg"],
  ["nd-su5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_SUOMU/50.jpeg"],
  ["nd-su6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_SUOMU/60.jpeg"],
  ["nd-ak1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTI_AKAS/2.jpeg"],
  ["nd-ak2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTI_AKAS/3.jpeg"],
  ["nd-ak3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTI_AKAS/4.jpeg"],
  ["nd-ak4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTI_AKAS/5.jpg"],
  ["nd-le1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITE_LEVI/A.jpeg"],
  ["nd-le2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITE_LEVI/B.jpeg"],
  ["nd-le3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITE_LEVI/C.jpeg"],
  ["nd-le5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITE_LEVI/E.jpeg"],
  ["nd-le6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITE_LEVI/F.jpeg"],
  ["nd-le7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITE_LEVI/G.jpg"],
  ["nd-ny2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/NAYA_SAAGA/22.jpeg"],
  ["nd-ny3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/NAYA_SAAGA/33.jpeg"],
  ["nd-ny4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/NAYA_SAAGA/44.jpeg"],
  ["nd-ny6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/NAYA_SAAGA/66.jpg"],
  ["nd-rv1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_OLOS/2.jpeg"],
  ["nd-rv2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_OLOS/3.jpeg"],
  ["nd-rv3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_OLOS/4.jpeg"],
  ["nd-rv4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_OLOS/6.jpeg"],
  ["nd-rv5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/MULTI_ACTIVITES_OLOS/7.jpeg"],
  ["nd-el1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/ECHAPPEE_LAPONE/1.jpeg"],
  ["nd-el2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/ECHAPPEE_LAPONE/2.jpeg"],
  ["nd-el3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/ECHAPPEE_LAPONE/3.jpeg"],
  ["nd-el4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/ECHAPPEE_LAPONE/4.jpeg"],
  ["nd-el5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/ECHAPPEE_LAPONE/5.jpeg"],
  ["nd-el6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/ECHAPPEE_LAPONE/6.jpeg"],
  ["nd-el7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/ECHAPPEE_LAPONE/AdobeStock_368653872.jpeg"],
  ["nd-et1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/LAPONIE_LEVI_ETE26/1-1.jpeg"],
  ["nd-et2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/LAPONIE_LEVI_ETE26/2.jpg"],
  ["nd-et3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/LAPONIE_LEVI_ETE26/3.jpg"],
  ["nd-et4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/LAPONIE_LEVI_ETE26/4.jpg"],
  ["nd-et5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/LAPONIE_LEVI_ETE26/5.jpg"],
  ["nd-et6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/FINLANDE/LAPONIE_LEVI_ETE26/1.jpg"],
  ["nd-se1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SUEDE/CAP_SUEDE_27/1.jpeg"],
  ["nd-se2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SUEDE/CAP_SUEDE_27/2.jpeg"],
  ["nd-se3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SUEDE/CAP_SUEDE_27/3.jpeg"],
  ["nd-se4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SUEDE/CAP_SUEDE_27/4.jpeg"],
  ["nd-se5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SUEDE/CAP_SUEDE_27/5.jpeg"],
  ["nd-se6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/SUEDE/CAP_SUEDE_27/6.jpeg"],
  ["nd-ba1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/maxum79nssh7vzspgfcm.jpg"],
  ["nd-ba2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/u87qozwoia2la4jmkkep.jpg"],
  ["nd-ba3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/mvunvk7g8gcqagsysv5c.jpg"],
  ["nd-ba4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/qhpasmymrzyikqgyxolo.jpg"],
  ["nd-ba5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/wnwhf131k13posz3nlml.jpg"],
  ["nd-ba6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/awh40nouwdir9b9mbzbg.jpg"],
  ["nd-ba7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/w51hbvhbenf50xktjfwp.jpg"],
  ["nd-fo1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/DANEMARK/CAP_SUR_LES_ILES_FEROE/2026/1.jpeg"],
  ["nd-fo2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/DANEMARK/CAP_SUR_LES_ILES_FEROE/2026/2.jpeg"],
  ["nd-fo3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/DANEMARK/CAP_SUR_LES_ILES_FEROE/2026/3.jpg"],
  ["nd-fo4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/DANEMARK/CAP_SUR_LES_ILES_FEROE/2026/4.jpeg"],
  ["nd-fo5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/DANEMARK/CAP_SUR_LES_ILES_FEROE/2026/5.jpeg"],
  ["nd-fo6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/EUROPE/DANEMARK/CAP_SUR_LES_ILES_FEROE/2026/6.jpeg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/nd-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
