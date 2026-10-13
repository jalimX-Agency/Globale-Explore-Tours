// Trips replaced by a supplier circuit. next.config.ts turns each entry into a permanent
// redirect (so the old URL keeps its search value), and scripts/voyamar-retire.ts removes the
// old trip from the database once its redirect is listed here.
export type RetiredTrip = { region: string; country: string; from: string; to: string };

export const RETIRED_TRIPS: RetiredTrip[] = [
  { region: "afrique", country: "kenya", from: "kenya-grande-migration", to: "kenya-evasion-masai-mara-amboseli-10j" },
  { region: "afrique", country: "kenya", from: "kenya-nord-lewa-samburu", to: "kenya-autrement-samburu-masai-mara-14j" },
  { region: "afrique", country: "kenya", from: "kenya-cote-diani-lamu", to: "kenya-mombasa-tsavo-plage-safari-10j" },
  { region: "afrique", country: "maroc", from: "maroc-en-profondeur-villes-imperiales-sahara", to: "maroc-circuit-villes-imperiales-8j" },
  { region: "afrique", country: "maroc", from: "maroc-du-nord-fes-chefchaouen-tanger", to: "maroc-fes-chefchaouen-5j" },
  { region: "afrique", country: "maroc", from: "grand-desert-marrakech-erg-chigaga", to: "maroc-desert-riad-kasbah-5j" },
  { region: "afrique", country: "egypte", from: "egypte-caire-assouan", to: "egypte-decouvertes-caire-nil-9j" },
  { region: "afrique", country: "egypte", from: "egypte-mer-rouge-hurghada", to: "egypte-nil-mer-rouge-hurghada-15j" },
  { region: "afrique", country: "egypte", from: "egypte-croisiere-mer-rouge", to: "egypte-nil-mer-rouge-hurghada-15j" },
  { region: "afrique", country: "tanzanie", from: "tanzanie-serengeti-zanzibar", to: "tanzanie-couleurs-quatre-parcs-10j" },
];
