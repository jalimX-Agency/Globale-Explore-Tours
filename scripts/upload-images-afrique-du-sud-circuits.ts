// South Africa circuits — photos from the supplier's own gallery for each circuit. Run with:
//   npx tsx scripts/upload-images-afrique-du-sud-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const SRC = "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AFRIQUE/AFRIQUE_DU_SUD";

// code -> supplier folder + files in order; published as journeys/afs-<code><n>.jpg (n from 1).
// An empty string skips that position (route map, duplicate or unusable picture).
const GALLERIES: Array<[string, string, string[]]> = [
  ["sd", "SAFARI_DREAM_2027", ["11.jpeg", "22.jpeg", "33.jpeg", "44.jpeg", "55.jpeg", "66.jpeg", "77.jpeg"]],
  ["il", "I_LOVE_AFS", ["4.jpg", "1.jpeg", "", "3.jpeg", "3.jpg", "5.jpeg", "6.jpg", "7.jpeg", "8.jpg"]],
  ["in", "AFRIQUE_DU_SUD_INTIMISTE_2026", ["A.jpeg", "B.jpeg", "C.jpeg", "D.jpeg", "E.jpeg", "F.jpeg", "G.jpeg", "H.jpeg"]],
  ["ms", "MERVEILLES_SUD_AFRICAINES", ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"]],
  ["gt", "GRAND_TOUR_AFS", ["3.jpeg", "", "1.jpg", "4.jpg", "5.jpeg", "", "7.jpeg", "8.jpeg", "9.jpg"]],
  ["tr", "TRESORS_D_AFS_VFA_ET_CHOBE_27", ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"]],
];

const images: ImageSpec[] = GALLERIES.flatMap(([code, folder, files]) =>
  files.flatMap((file, i) => (file ? [{ key: `journeys/afs-${code}${i + 1}.jpg`, url: `${SRC}/${folder}/${file}` }] : []))
);

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/afrique-du-sud-circuits.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
