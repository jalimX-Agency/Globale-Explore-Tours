// Tanzania circuits — photos from the supplier's own gallery for each circuit. Run with:
//   npx tsx scripts/upload-images-tanzanie-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const SRC = "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AFRIQUE";

// code -> supplier folder + files in order; published as journeys/tanzanie-<code><n>.jpg (n from 1).
// An empty string skips that position (duplicate or unusable picture).
const GALLERIES: Array<[string, string, string[]]> = [
  ["zz", "ZANZIBAR/ZANZIBAR_EPICES_ET_OCEAN", [
    "1_-_AdobeStock_1422101678.jpeg", "2_-_AdobeStock_420862997.jpeg", "3_-_AdobeStock_512211567.jpeg", "4_-_AdobeStock_564994476.jpeg",
    "5_-_AdobeStock_260004393.jpeg", "6_-_AdobeStock_197999128.jpeg", "7_-_AdobeStock_73988374.jpeg", "8_-_AdobeStock_431477897.jpeg",
    "9_-_AdobeStock_1321503070.jpeg", "91_-_AdobeStock_188338396.jpeg", "92_-_AdobeStock_25055979.jpeg",
  ]],
  ["sa", "TANZANIE/CIRCUITS/SAFARIS_SAADANI_EXT_ZANZIBAR_27", ["1.jpg", "2.jpg", "3.jpeg", "4.jpg", "5.jpg", "6.jpg", "", "8.jpg", "9.jpeg", "91.jpeg"]],
  ["es", "TANZANIE/CIRCUITS/ESSENTIEL_DE_TANZANIE_27", ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpg", "5.jpg", "6.jpg"]],
  ["ts", "TANZANIE/CIRCUITS/ESCAPADE_EN_TERRE_SAUVAGE/2027", ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpg", "6.jpeg", "7.jpeg", "8.jpeg"]],
  ["ct", "TANZANIE/CIRCUITS/COULEURS_DE_TANZANIE_27", ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"]],
  ["ta", "TANZANIE/CIRCUITS/TANZANIE_AUTREMENT_2027", ["Tanzanie-autrement1.jpeg", "2.jpeg", "3.jpeg", "", "5.jpeg", "6.jpeg"]],
  ["ev", "TANZANIE/CIRCUITS/EVASION_TANZANIENNE_ZANZIBAR", ["1.jpeg", "", "4.jpg", "5.jpg", "6.jpg"]],
];

const images: ImageSpec[] = GALLERIES.flatMap(([code, folder, files]) =>
  files.flatMap((file, i) => (file ? [{ key: `journeys/tanzanie-${code}${i + 1}.jpg`, url: `${SRC}/${folder}/${file}` }] : []))
);

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/tanzanie-circuits.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
