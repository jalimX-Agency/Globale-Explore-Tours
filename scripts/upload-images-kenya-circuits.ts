// Kenya circuits batch — 7 new journey trips for the existing "kenya" destination. Photos come
// from the supplier's own gallery for each circuit. Run with:
//   npx tsx scripts/upload-images-kenya-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const SRC = "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AFRIQUE/KENYA";

// short code -> supplier folder + file names; published as journeys/kenya-<code><n>.jpg
const GALLERIES: Array<[string, string, string[]]> = [
  ["es", "ESSENTIEL_DU_KENYA", ["1", "2", "3", "4", "5", "6", "7"]],
  ["ev", "EVASION_KENYANE_2026", ["1", "2", "3", "4", "5", "6", "7", "8", "9"]],
  ["dk", "DECOUVERTES_KENYANES_2026", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "91"]],
  ["dm", "DETENTE_A_MOMBASA_ET_SAFARIS_A_TSAVO", ["1", "2", "3", "4", "4-MDID-8JQZHP3", "5", "6", "7"]],
  ["tr", "TRAINS_SAVANES_ET_PLAGES", ["1", "2", "3", "4", "5", "6", "7"]],
  ["cb", "COMBINE_KENYA_TANZANIE_27", ["1", "2", "3", "4", "5", "6", "7"]],
];

const images: ImageSpec[] = GALLERIES.flatMap(([code, folder, files]) =>
  files.map((file) => ({
    key: `journeys/kenya-${code}${file === "4-MDID-8JQZHP3" ? "4b" : file}.jpg`,
    url: `${SRC}/${folder}/${file}.jpeg`,
  }))
);

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/kenya-circuits.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
