// Argentina Brazil circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-arb-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["arb-aa1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ywumbnodtbeabgmkvx8m.jpg"],
  ["arb-aa2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/gllja4ecaba8d7tvtwv5.jpg"],
  ["arb-aa3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/osztrnoupgqqt9e5owcr.jpg"],
  ["arb-aa4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/tcfsvwpl3mi189qclse9.jpg"],
  ["arb-aa5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/w4rl322drp2slekywwd6.jpg"],
  ["arb-aa6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/k7wryv8j9q2fyjdg8gg3.jpg"],
  ["arb-aa7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/jeu7ylkzglsumg62lyxk.jpg"],
  ["arb-aa8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/yrvndg2bxj4g8see9zgc.jpg"],
  ["arb-cp1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/COEUR_PATAGONIE/1-AdobeStock_152200051.jpeg"],
  ["arb-cp2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/COEUR_PATAGONIE/AdobeStock_109950870.jpeg"],
  ["arb-cp3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/COEUR_PATAGONIE/AdobeStock_152199950.jpeg"],
  ["arb-cp4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/COEUR_PATAGONIE/AdobeStock_186776489.jpeg"],
  ["arb-cp6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/COEUR_PATAGONIE/AdobeStock_337522787.jpeg"],
  ["arb-cp7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/COEUR_PATAGONIE/AdobeStock_82255968.jpeg"],
  ["arb-cp8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/COEUR_PATAGONIE/AdobeStock_95562905.jpeg"],
  ["arb-ca1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/CHILI/COULEURS_ANDINES/AdobeStock_2084729679.jpeg"],
  ["arb-ca3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/za50fisfk3dodg6vpjd4.jpg"],
  ["arb-ca4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/lronrcillpoglfyfuomd.jpg"],
  ["arb-ca5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/cfqit5qhzzgwdef4ulgl.jpg"],
  ["arb-ca6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ickgtlbi0hgyc9cdwbbe.jpg"],
  ["arb-ca7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/vbuhkkwbtwxszcwsltbu.jpg"],
  ["arb-ca8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/mo5w3gvxaeokveew31it.jpg"],
  ["arb-ts1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DU_TANGO_A_LA_SAMBA/AdobeStock_191264522.jpeg"],
  ["arb-ts2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DU_TANGO_A_LA_SAMBA/AdobeStock_228590504.jpeg"],
  ["arb-ts3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DU_TANGO_A_LA_SAMBA/AdobeStock_255450512.jpeg"],
  ["arb-ts4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DU_TANGO_A_LA_SAMBA/AdobeStock_262263896.jpeg"],
  ["arb-ts5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DU_TANGO_A_LA_SAMBA/AdobeStock_584298207.jpeg"],
  ["arb-ts6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DU_TANGO_A_LA_SAMBA/AdobeStock_91449318.jpeg"],
  ["arb-ts7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DU_TANGO_A_LA_SAMBA/AdobeStock_95824301.jpeg"],
  ["arb-ts8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DU_TANGO_A_LA_SAMBA/AdobeStock_98098871.jpeg"],
  ["arb-da1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/lms373dl4crizokdmm8r.jpg"],
  ["arb-da2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/korjnpf8pv6yzjnqffzj.jpg"],
  ["arb-da3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/tuud2hpgbk2e7mwouool.jpg"],
  ["arb-da4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/qjvi1hjgtjczaftt1hbh.jpg"],
  ["arb-da5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/sibhgj4qrmouhjsolng8.jpg"],
  ["arb-da6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/xwmbymapnzejj5mbj8r3.jpg"],
  ["arb-da7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/rfqnxfgh3ny0rxixzqbj.jpg"],
  ["arb-da8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/jddtcy54low4uynwgt4w.jpg"],
  ["arb-bm1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DECOUVERTE_BOUT_DU_MONDE_2025/AdobeStock_184762570.jpeg"],
  ["arb-bm3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/DECOUVERTE_BOUT_DU_MONDE_2025/AdobeStock_396844125.jpeg"],
  ["arb-ia1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/ARBUEIMP/6.jpeg"],
  ["arb-ia2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/ARBUEIMP/1.jpeg"],
  ["arb-ia3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/ARBUEIMP/3.jpeg"],
  ["arb-ia4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/ARBUEIMP/4.jpeg"],
  ["arb-ia5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/ARBUEIMP/5.jpeg"],
  ["arb-ia6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/ARGENTINE/ARBUEIMP/7.jpeg"],
  ["arb-ab1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/fyzylqs6gtk6zpd9kfv4.jpg"],
  ["arb-ab2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hkb696516bcmh666xkwz.jpg"],
  ["arb-ab3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/sbfadffn826i8jbf1qqy.jpg"],
  ["arb-ab4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/zyxsjrpdbs5hfl9nfsys.jpg"],
  ["arb-ab5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/df48jlrd4tn8b7bwef6k.jpg"],
  ["arb-ab6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/dqlk2ih3xh7pn91mqmlw.jpg"],
  ["arb-ab7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/tsr8agbkspwklcwlxiax.jpg"],
  ["arb-ab8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/rquqce1iaqej3zsrhfxf.jpg"],
  ["arb-eb1", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/1050/20260717142831-barreirinhas-shutterstock-1870405003-1.jpg"],
  ["arb-eb3", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/5853/20260707083237-sao-luis-shutterstock-460604659-1.jpg"],
  ["arb-eb4", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/5855/20260707083628-barreirinhas-shutterstock-1832226025-1.jpg"],
  ["arb-eb5", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/5856/20260707083902-parnaiba-shutterstock-1901917867-1.jpg"],
  ["arb-eb6", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/5857/20260707084149-jericoacoara-shutterstock-2516556321-1.jpg"],
  ["arb-ib1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/fl52c3pnguswjvlnsm9m.jpg"],
  ["arb-ib2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ujgnqwqgct0q6cfxsqv8.jpg"],
  ["arb-ib3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/rxmb1zdjrxydblyioch3.jpg"],
  ["arb-ib4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/zi8vj5vjox7vktiojymt.jpg"],
  ["arb-ib5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/nm89sblltlfqiyfetkcr.jpg"],
  ["arb-ib6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ugmbhfopizr512fi9hy1.jpg"],
  ["arb-ib7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ltxkz2a3xwh6uuq1rviq.jpg"],
  ["arb-ib8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/debzwqjs2vik1qji4tan.jpg"],
  ["arb-nb1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/INCONTOURNABLES_DU_BRESIL/AdobeStock_143885651.jpeg"],
  ["arb-nb2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/INCONTOURNABLES_DU_BRESIL/AdobeStock_118183731.jpeg"],
  ["arb-nb3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/INCONTOURNABLES_DU_BRESIL/AdobeStock_229874964.jpeg"],
  ["arb-nb4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/INCONTOURNABLES_DU_BRESIL/AdobeStock_260844927.jpeg"],
  ["arb-nb5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/INCONTOURNABLES_DU_BRESIL/AdobeStock_454209468.jpeg"],
  ["arb-nb6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/INCONTOURNABLES_DU_BRESIL/AdobeStock_490097752.jpeg"],
  ["arb-nb7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/INCONTOURNABLES_DU_BRESIL/AdobeStock_57779449.jpeg"],
  ["arb-mb1", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/1156/20260718143931-foz-do-iguazu-shutterstock-477870331-1.jpg"],
  ["arb-mb5", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/6512/20260718144248-rio-de-janeiro-floresta-da-tijuca-shutterstock-419562127-1.jpg"],
  ["arb-ob1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/OLA_BRASIL_EN_PRIVATIF/profil.jpeg"],
  ["arb-ob2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/OLA_BRASIL_EN_PRIVATIF/AdobeStock_577794490_.jpeg"],
  ["arb-ob3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/OLA_BRASIL_EN_PRIVATIF/AdobeStock_649477169.jpeg"],
  ["arb-ob4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AMERIQUE_DU_SUD/BRESIL/OLA_BRASIL_EN_PRIVATIF/AdobeStock_90001685.jpeg"],
  ["arb-xb1", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/1221/20260718125138-rio-de-janeiro-shutterstock-2516439735-2-1.jpg"],
  ["arb-xb2", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/6940/20260707150033-rio-de-janeiro-santa-teresa-shutterstock-1434916826-1.jpg"],
  ["arb-xb3", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/6941/20260707150134-rio-de-janeiro-jardim-botanico-shutterstock-2144320725-1.jpg"],
  ["arb-xb4", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/6943/20260707151706-buzios-shutterstock-2426932991-1.jpg"],
  ["arb-xb5", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/6944/20260707151617-buzios-shutterstock-1927141418-1.jpg"],
  ["arb-xb6", "https://axiome-space-prod.fra1.digitaloceanspaces.com/dmcs/18/module-packages/days/6945/20260707151624-buzios-shutterstock-2357015147-1.jpg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/arb-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
