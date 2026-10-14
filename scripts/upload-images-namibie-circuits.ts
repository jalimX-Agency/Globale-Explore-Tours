// Namibia circuits — photos from the supplier's own gallery for each circuit. Run with:
//   npx tsx scripts/upload-images-namibie-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const SRC = "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AFRIQUE/NAMIBIE";

// code -> supplier folder + files in order; published as journeys/namibie-<code><n>.jpg (n from 1).
// An empty string skips that position (duplicate picture).
const GALLERIES: Array<[string, string, string[]]> = [
  ["dn", "DECOUVERTE_NAMIBIE", ["A.jpeg", "B.jpeg", "C.jpeg", "D.jpeg", "E.jpeg", "F.jpeg", "G.jpeg", "H.jpeg", "I.jpeg"]],
  ["cn", "COULEURS_NAMIBIE_ET_CHUTES_VIC_27", ["2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"]],
  ["ta", "TRESORS_AFRIQUE_AUSTRALE_2027_INVERSE", ["2.jpeg", "1-2.jpeg", "1.jpeg", "4.jpeg", "", "6.jpeg", "7.jpeg", "8.jpeg"]],
];

const images: ImageSpec[] = GALLERIES.flatMap(([code, folder, files]) =>
  files.flatMap((file, i) => (file ? [{ key: `journeys/namibie-${code}${i + 1}.jpg`, url: `${SRC}/${folder}/${file}` }] : []))
);

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/namibie-circuits.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
