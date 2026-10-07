// Morocco circuits batch — 4 new journey trips (imperial cities, grand sud, desert/riad/kasbah,
// Fes & Chefchaouen). Photos come from the supplier's own gallery for each circuit. Run with:
//   npx tsx scripts/upload-images-maroc-circuits.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const SRC = "https://admin-voyamar.orchestra-platform.com/admin/TS/fckUserFiles/Image/AFRIQUE/MAROC/CIRCUITS";
const VI = `${SRC}/VILLES_IMPERIALES_2025_3ETOILES`;
const GS = `${SRC}/GRAND_SUD_ET_KASBAH_EN_3ETOILES`;
const DR = `${SRC}/DESERT_RIAD_ET_KASBAH`;
const FC = `${SRC}/FES_ET_CHEFCHAOUEN`;

const images: ImageSpec[] = [
  // -- Imperial cities gallery --
  { key: "journeys/maroc-marrakech-koutoubia-palmeraie.jpg", url: `${VI}/AdobeStock_213644090.jpeg` },
  { key: "journeys/maroc-marrakech-terrasse.jpg", url: `${VI}/AdobeStock_213675480.jpeg` },
  { key: "journeys/maroc-marrakech-porte-medina.jpg", url: `${VI}/AdobeStock_55573531.jpeg` },
  { key: "journeys/maroc-marrakech-atlas-remparts.jpg", url: `${VI}/AdobeStock_241241830.jpeg` },
  { key: "journeys/maroc-cuisine-tajines.jpg", url: `${VI}/AdobeStock_114984573.jpeg` },
  { key: "journeys/maroc-fes-tanneries.jpg", url: `${VI}/AdobeStock_317330580.jpeg` },
  { key: "journeys/maroc-rabat-kasbah-bateaux.jpg", url: `${VI}/AdobeStock_319526641.jpeg` },
  { key: "journeys/maroc-casablanca-hassan2.jpg", url: `${VI}/AdobeStock_32040055.jpeg` },
  { key: "journeys/maroc-rabat-mausolee.jpg", url: `${VI}/AdobeStock_68974779.jpeg` },
  { key: "journeys/maroc-porte-bleue-chat.jpg", url: `${VI}/AdobeStock_126570589.jpeg` },

  // -- Grand sud gallery --
  { key: "journeys/maroc-palmeraie.jpg", url: `${GS}/AdobeStock_10722173.jpeg` },
  { key: "journeys/maroc-mosquee-rose.jpg", url: `${GS}/AdobeStock_139469896.jpeg` },
  { key: "journeys/maroc-vallee-palmeraie-draa.jpg", url: `${GS}/AdobeStock_177649784.jpeg` },
  { key: "journeys/maroc-patio-riad.jpg", url: `${GS}/AdobeStock_181875177.jpeg` },
  { key: "journeys/maroc-marrakech-koutoubia-bassin.jpg", url: `${GS}/AdobeStock_185679200.jpeg` },
  { key: "journeys/maroc-zagora-panneau.jpg", url: `${GS}/AdobeStock_221124349.jpeg` },
  { key: "journeys/maroc-kasbah-ait-benhaddou.jpg", url: `${GS}/AdobeStock_228917797.jpeg` },
  { key: "journeys/maroc-marrakech-menara.jpg", url: `${GS}/AdobeStock_260054994.jpeg` },
  { key: "journeys/maroc-marche-epices.jpg", url: `${GS}/AdobeStock_271850256.jpeg` },
  { key: "journeys/maroc-gorges-todra.jpg", url: `${GS}/AdobeStock_274542279.jpeg` },
  { key: "journeys/maroc-route-dades.jpg", url: `${GS}/AdobeStock_304038031.jpeg` },
  { key: "journeys/maroc-jardin-majorelle.jpg", url: `${GS}/AdobeStock_30665397.jpeg` },
  { key: "journeys/maroc-gorges-todra-vallee.jpg", url: `${GS}/AdobeStock_309369555.jpeg` },

  // -- Desert, riad & kasbah gallery (the Koutoubia photo is shared with the grand sud gallery) --
  { key: "journeys/maroc-marrakech-menara-reflet.jpg", url: `${DR}/1AdobeStock_190390654.jpeg` },
  { key: "journeys/maroc-jemaa-el-fna.jpg", url: `${DR}/AdobeStock_231141068.jpeg` },
  { key: "journeys/maroc-kasbah-ruines-vallee.jpg", url: `${DR}/AdobeStock_23435686.jpeg` },
  { key: "journeys/maroc-chameau-dunes.jpg", url: `${DR}/AdobeStock_265107452.jpeg` },
  { key: "journeys/maroc-4x4-dunes.jpg", url: `${DR}/AdobeStock_282278663.jpeg` },
  { key: "journeys/maroc-remparts-atlas-neige.jpg", url: `${DR}/AdobeStock_37995775.jpeg` },
  { key: "journeys/maroc-riad-cour-arches.jpg", url: `${DR}/AdobeStock_579258984.jpeg` },
  { key: "journeys/maroc-souk-lanterne.jpg", url: `${DR}/AdobeStock_91782476.jpeg` },
  { key: "journeys/maroc-ait-benhaddou-vue.jpg", url: `${DR}/AdobeStock_94203168.jpeg` },

  // -- Fes & Chefchaouen gallery --
  { key: "journeys/maroc-portes-zellige.jpg", url: `${FC}/1.jpeg` },
  { key: "journeys/maroc-chefchaouen-escaliers-femme.jpg", url: `${FC}/2.jpeg` },
  { key: "journeys/maroc-fes-vue-medina.jpg", url: `${FC}/4.jpeg` },
  { key: "journeys/maroc-souk-fruits.jpg", url: `${FC}/6.jpeg` },
  { key: "journeys/maroc-chefchaouen-patio.jpg", url: `${FC}/91.jpeg` },
  { key: "journeys/maroc-chefchaouen-ruelle-escaliers.jpg", url: `${FC}/92.jpeg` },
  { key: "journeys/maroc-epices-pyramides.jpg", url: `${FC}/93.jpeg` },
  { key: "journeys/maroc-fes-medersa-fontaine.jpg", url: `${FC}/94.jpeg` },
  { key: "journeys/maroc-riad-patio-fontaine.jpg", url: `${FC}/95.jpeg` },
  { key: "journeys/maroc-chefchaouen-ruelle-tapis.jpg", url: `${FC}/96.jpeg` },
  { key: "journeys/maroc-medersa-cour.jpg", url: `${FC}/97.jpeg` },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/maroc-circuits.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
