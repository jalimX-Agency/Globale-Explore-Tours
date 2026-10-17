// Japan circuits — photos from each circuit's gallery on the supplier site, listed with their
// full source URL and published as journeys/<key>.jpg. Run with:
//   npx tsx scripts/upload-images-japon-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

// [key, source URL] — duplicate pictures were left out.
const IMAGES: Array<[string, string]> = [
  ["japon-ic1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INCONTOURNABLES_JAPON/1.jpeg"],
  ["japon-ic2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INCONTOURNABLES_JAPON/2.jpeg"],
  ["japon-ic3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INCONTOURNABLES_JAPON/3.jpeg"],
  ["japon-ic4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INCONTOURNABLES_JAPON/4.jpeg"],
  ["japon-ic5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INCONTOURNABLES_JAPON/5.jpeg"],
  ["japon-ic6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INCONTOURNABLES_JAPON/6.jpeg"],
  ["japon-ic7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INCONTOURNABLES_JAPON/7.jpeg"],
  ["japon-ic8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INCONTOURNABLES_JAPON/8.jpeg"],
  ["japon-ic9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INCONTOURNABLES_JAPON/9.jpeg"],
  ["japon-mg1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/MAGIE_JAPON_27/1.jpeg"],
  ["japon-mg2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/MAGIE_JAPON_27/2.jpeg"],
  ["japon-mg3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/MAGIE_JAPON_27/3.jpeg"],
  ["japon-mg4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/MAGIE_JAPON_27/4.jpeg"],
  ["japon-mg5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/MAGIE_JAPON_27/5.jpeg"],
  ["japon-mg6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/MAGIE_JAPON_27/6.jpeg"],
  ["japon-mg7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/MAGIE_JAPON_27/7.jpeg"],
  ["japon-mg8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/MAGIE_JAPON_27/8.jpeg"],
  ["japon-me1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ivwxu3oxynchn7gkurer.jpg"],
  ["japon-me2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ysugdxiytboytlswl3wf.jpg"],
  ["japon-me4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/w8hj9jzr56pasvsvsmrb.jpg"],
  ["japon-me5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/sw0lj9lkvn7phc9j1nr0.jpg"],
  ["japon-me6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/qypwoi1ddpiwwqfnquna.jpg"],
  ["japon-me7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/qc1mg0rynwjjccpkvuxr.jpg"],
  ["japon-me8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/qtvhgssgyolr1bhbpaap.jpg"],
  ["japon-tr1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/TRIO_EVASION_JAPONAISE/1.jpeg"],
  ["japon-tr2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/TRIO_EVASION_JAPONAISE/2.jpeg"],
  ["japon-tr3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/TRIO_EVASION_JAPONAISE/3.jpeg"],
  ["japon-tr4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/TRIO_EVASION_JAPONAISE/4.jpeg"],
  ["japon-tr5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/TRIO_EVASION_JAPONAISE/5.jpeg"],
  ["japon-tr6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/TRIO_EVASION_JAPONAISE/6.jpeg"],
  ["japon-tr7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/TRIO_EVASION_JAPONAISE/7.jpeg"],
  ["japon-be1", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/BEAUTE_DU_JAPON/1.jpeg"],
  ["japon-be2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/BEAUTE_DU_JAPON/2.jpeg"],
  ["japon-be3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/BEAUTE_DU_JAPON/3.jpeg"],
  ["japon-be5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/BEAUTE_DU_JAPON/5.jpeg"],
  ["japon-be6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/BEAUTE_DU_JAPON/6.jpeg"],
  ["japon-be7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/BEAUTE_DU_JAPON/7.jpeg"],
  ["japon-be8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/BEAUTE_DU_JAPON/8.jpeg"],
  ["japon-be9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/BEAUTE_DU_JAPON/9.jpeg"],
  ["japon-es1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/v0bqjqbxd3ensrkywmx0.jpg"],
  ["japon-es2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/gkq6np5go1ea8nhaxjg8.jpg"],
  ["japon-es3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/klfsabaqxdgxsadpj4ux.jpg"],
  ["japon-es4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/f2nnflkzovvcbqe28jc6.jpg"],
  ["japon-es5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/gs0mxnmdltfdvafrltst.jpg"],
  ["japon-es6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/xjad5waleufcq1yaubsr.jpg"],
  ["japon-es7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hvh1uqmezoeg8fjgmumq.jpg"],
  ["japon-es8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/mq7i1g0tzqnxttwdggio.jpg"],
  ["japon-es9", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/yayjvfvkrwgc4ikgtieg.jpg"],
  ["japon-ij2", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INSTANT_JAPONAIS/2.jpeg"],
  ["japon-ij3", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INSTANT_JAPONAIS/3.jpeg"],
  ["japon-ij4", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INSTANT_JAPONAIS/4.jpeg"],
  ["japon-ij5", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INSTANT_JAPONAIS/5.jpeg"],
  ["japon-ij6", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INSTANT_JAPONAIS/6.jpeg"],
  ["japon-ij7", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INSTANT_JAPONAIS/7.jpeg"],
  ["japon-ij8", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INSTANT_JAPONAIS/8.jpg"],
  ["japon-ij9", "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/ASIE/JAPON/INSTANT_JAPONAIS/9.jpeg"],
  ["japon-aa1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/sfd6sou6wpato6k7xdqh.jpg"],
  ["japon-aa2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/kjrmvenr8bficadhd3dj.jpg"],
  ["japon-aa3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/y7oinj1knwoy24mlkzsy.jpg"],
  ["japon-aa4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/lssmxxosdkg9ifb6fzqh.jpg"],
  ["japon-aa5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/iys1gihvwyufoksljx8i.jpg"],
  ["japon-aa6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/gdyprbq6am2cqp9cl7le.jpg"],
  ["japon-aa7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ywgb53teewg1x16rbuem.jpg"],
  ["japon-aa8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/cgdgiymt0lk6m04ecrl7.jpg"],
  ["japon-aa9", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ndtxnldjwu6rhlklspzj.jpg"],
  ["japon-aa10", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/mfhm1fgkerprhu9e39r1.jpg"],
  ["japon-aa11", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hs21f7bgotuaf6kgag7w.jpg"],
  ["japon-aa12", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/g9diqeunbjdlwhfya4wk.jpg"],
  ["japon-pn1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/qdil9a8ybvlx3m21bswv.jpg"],
  ["japon-pn3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ozgffvsrutap6izcvdsl.jpg"],
  ["japon-pn7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/exxhjyohx5ssfa9ottza.jpg"],
  ["japon-pn8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/p31mlkrxw5pbhinqskrb.jpg"],
  ["japon-pn9", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/hpfdkbb6kb2cvky9ngll.jpg"],
  ["japon-pn10", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/snvjh3sfrsqravqtppvq.jpg"],
  ["japon-fa2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/xwlgrndaydaafp4lv3pl.jpg"],
  ["japon-fa8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/z1pbizv7hkxypcabhpod.jpg"],
  ["japon-no1", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/f5zhbaendcpdumnwia3o.jpg"],
  ["japon-no2", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/twesdhqtl4hp7eonmhvh.jpg"],
  ["japon-no3", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/jhxpbppaylscmyrjceec.jpg"],
  ["japon-no4", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/dnyungmhnu4lhv7ob3nx.jpg"],
  ["japon-no5", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/apmhqqoyxkovjsn0s0hy.jpg"],
  ["japon-no6", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/vfkwlm2tgu8dphfp09f5.jpg"],
  ["japon-no7", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/dv7ecqzrrdp8eiyc0piv.jpg"],
  ["japon-no8", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/rm54mdh2n2hfdfadnvni.jpg"],
  ["japon-no9", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/tlq5xmg5xatlypbkhwou.jpg"],
  ["japon-no10", "https://res.cloudinary.com/djvactfsk/image/upload/c_scale,w_1200/v1/EXCHANGE/TOURS/PRODUCTION/ndojtzfm63dxnzd2pcs4.jpg"],
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(
    IMAGES.map(([key, url]) => ({ key: `journeys/${key}.jpg`, url })),
    "scripts/.manifests/japon-circuits.json"
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
