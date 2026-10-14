// Senegal, Tunisia, Botswana and Rwanda circuits — photos from the supplier's own gallery for each
// circuit. Run with:
//   npx tsx scripts/upload-images-afrique-fin-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const SRC = "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AFRIQUE";

// [key prefix, supplier folder, files in order]; published as journeys/<prefix><n>.jpg (n from 1).
// An empty string skips that position (route map, duplicate or too-small picture).
const GALLERIES: Array<[string, string, string[]]> = [
  ["senegal-sa", "SENEGAL/CIRCUITS/SENEGAL_AUTHENTIQUE_BY_TOMORROW", ["1.jpeg", "", "4.jpg", "5.jpg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "91.jpeg", "92.JPG", "93.jpeg", "95.jpg"]],
  ["senegal-ds", "SENEGAL/CIRCUITS/DECOUVERTE_DU_SENEGAL", ["1.jpg", "", "3.jpg", "6.jpg", "7.jpeg", "", "", "91.jpg", "", "94.jpg"]],
  ["senegal-vs", "SENEGAL/CIRCUITS/VISAGES_DU_SENEGAL", ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpg"]],
  ["tunisie-mo", "TUNISIE/1-CIRCUIT/MER_ET_OASIS", ["1.1.jpeg", "", "2.jpeg", "3.jpg", "4.jpeg", "5.jpeg", "6.jpg"]],
  ["tunisie-sh", "TUNISIE/1-CIRCUIT/LA_SAHARIENNE_EN_4X4", ["1.jpg", "", "3.jpeg", "", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg"]],
  ["botswana-bw", "BOTSWANA/DECOUVERTE_BOTSWANNAISES_2024", [
    "1.jpeg", "10.jpeg", "3.jpeg", "4.jpg", "5.jpeg", "6.jpeg", "7.jpg", "8.JPG", "9.jpeg", "91.jpg", "92.jpg", "", "94.jpeg", "95.jpeg",
  ]],
  ["rwanda-rw", "RWANDA/IMMERSION_RWANDA_2027", ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"]],
];

const images: ImageSpec[] = GALLERIES.flatMap(([prefix, folder, files]) =>
  files.flatMap((file, i) => (file ? [{ key: `journeys/${prefix}${i + 1}.jpg`, url: `${SRC}/${folder}/${file}` }] : []))
);

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/afrique-fin-circuits.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
