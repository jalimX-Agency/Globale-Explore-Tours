// Shared formatting for the two tour fields that used to be free text hiding structured data
// (duration, whenLabel) — both are now derived server-side from a real structured input
// (durationValue+durationUnit, bestMonths) instead of hand-typed per language. The display
// strings are still written into the Tour.duration*/whenLabel* DB columns (dozens of public
// pages read them as plain strings already) — only *how they get there* changed.

export const MONTH_KEYS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

export type MonthKey = (typeof MONTH_KEYS)[number];

export const MONTH_ABBR: Record<MonthKey, { fr: string; en: string; es: string }> = {
  january: { fr: "Jan", en: "Jan", es: "Ene" },
  february: { fr: "Fév", en: "Feb", es: "Feb" },
  march: { fr: "Mars", en: "Mar", es: "Mar" },
  april: { fr: "Avril", en: "Apr", es: "Abr" },
  may: { fr: "Mai", en: "May", es: "May" },
  june: { fr: "Juin", en: "Jun", es: "Jun" },
  july: { fr: "Juil", en: "Jul", es: "Jul" },
  august: { fr: "Août", en: "Aug", es: "Ago" },
  september: { fr: "Sept", en: "Sep", es: "Sep" },
  october: { fr: "Oct", en: "Oct", es: "Oct" },
  november: { fr: "Nov", en: "Nov", es: "Nov" },
  december: { fr: "Déc", en: "Dec", es: "Dic" },
};

const RANGE_CONNECTOR = { fr: "à", en: "to", es: "a" };

export type LocalizedText = { fr: string; en: string; es: string };

function parseBestMonths(bestMonths: string): MonthKey[] {
  const set = new Set(
    bestMonths
      .split(",")
      .map((s) => s.trim())
      .filter((s): s is MonthKey => (MONTH_KEYS as readonly string[]).includes(s))
  );
  return MONTH_KEYS.filter((m) => set.has(m));
}

// Groups selected months into consecutive (calendar-wrapping) ranges — e.g.
// november/december/january/february becomes one "Nov à Fév" run, not four separate months —
// then renders "Mars à Juin | Sept à Nov" style strings per locale, matching the convention
// already used across the seeded catalog.
export function formatWhenLabel(bestMonths: string): LocalizedText {
  const selected = parseBestMonths(bestMonths);
  if (selected.length === 0) return { fr: "", en: "", es: "" };
  if (selected.length === 12) {
    return { fr: "Toute l'année", en: "Year-round", es: "Todo el año" };
  }

  const selectedIndexes = new Set(selected.map((m) => MONTH_KEYS.indexOf(m)));
  // Find a run start: a selected index whose predecessor (wrapping) isn't selected.
  const start = [...selectedIndexes].find((i) => !selectedIndexes.has((i + 11) % 12))!;

  const ranges: MonthKey[][] = [];
  let current: MonthKey[] = [];
  for (let step = 0, i = start; step < 12; step++, i = (i + 1) % 12) {
    if (selectedIndexes.has(i)) {
      current.push(MONTH_KEYS[i]);
    } else if (current.length) {
      ranges.push(current);
      current = [];
    }
  }
  if (current.length) ranges.push(current);

  const render = (locale: "fr" | "en" | "es") =>
    ranges
      .map((run) => {
        const first = MONTH_ABBR[run[0]][locale];
        const last = MONTH_ABBR[run[run.length - 1]][locale];
        return run.length === 1 ? first : `${first} ${RANGE_CONNECTOR[locale]} ${last}`;
      })
      .join(" | ");

  return { fr: render("fr"), en: render("en"), es: render("es") };
}

export type DurationUnit = "days" | "nights" | "hours";

const DURATION_WORDS: Record<DurationUnit, LocalizedText> = {
  days: { fr: "jour", en: "day", es: "día" },
  nights: { fr: "nuit", en: "night", es: "noche" },
  hours: { fr: "heure", en: "hour", es: "hora" },
};

export function formatDuration(value: number, unit: DurationUnit): LocalizedText {
  const v = Math.max(1, Math.round(value) || 1);
  const plural = v > 1;
  const word = DURATION_WORDS[unit];
  return {
    fr: `${v} ${word.fr}${plural ? "s" : ""}`,
    en: `${v} ${word.en}${plural ? "s" : ""}`,
    es: `${v} ${word.es}${plural ? "s" : ""}`,
  };
}

// --- One-time legacy-data parsing (used only by the backfill migration script) ---

const MONTH_ALIASES_FR: Record<string, MonthKey> = {
  jan: "january",
  janv: "january",
  janvier: "january",
  fev: "february",
  fév: "february",
  fevrier: "february",
  février: "february",
  mars: "march",
  avr: "april",
  avril: "april",
  mai: "may",
  juin: "june",
  juil: "july",
  juillet: "july",
  aout: "august",
  août: "august",
  sept: "september",
  septembre: "september",
  oct: "october",
  octobre: "october",
  nov: "november",
  novembre: "november",
  dec: "december",
  déc: "december",
  decembre: "december",
  décembre: "december",
};

// Best-effort reverse-parse of the free-text whenLabel strings seeded before bestMonths
// existed (e.g. "Mars à juin | Sept à nov", "Toute l'année") back into month slugs, so the
// backfill script can populate bestMonths without losing the curated seasonal data already
// written for ~118 tours. Only ever run once, offline — not part of the app's request path.
function stripAccents(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function parseLegacyWhenLabel(text: string): MonthKey[] {
  const plain = text.toLowerCase();
  if (stripAccents(plain).includes("toute l'annee")) {
    return [...MONTH_KEYS];
  }

  const parts = plain.split(/[|,]/).map((p) => p.trim()).filter(Boolean);
  const result = new Set<MonthKey>();

  for (const part of parts) {
    const words = part.match(/[a-zàâäéèêëïîôöùûüç]+/g) ?? [];
    const monthWords = words
      .map((w) => MONTH_ALIASES_FR[w] ?? MONTH_ALIASES_FR[stripAccents(w)])
      .filter((m): m is MonthKey => Boolean(m));

    if (monthWords.length >= 2) {
      let i = MONTH_KEYS.indexOf(monthWords[0]);
      const endI = MONTH_KEYS.indexOf(monthWords[monthWords.length - 1]);
      for (let step = 0; step < 12; step++) {
        result.add(MONTH_KEYS[i]);
        if (i === endI) break;
        i = (i + 1) % 12;
      }
    } else if (monthWords.length === 1) {
      result.add(monthWords[0]);
    }
  }

  return MONTH_KEYS.filter((m) => result.has(m));
}

// Best-effort reverse-parse of "8 nuits" / "2 heures" / "1 jour" style free text into
// {value, unit} — same one-time backfill purpose as parseLegacyWhenLabel above.
export function parseLegacyDuration(text: string): { value: number; unit: DurationUnit } {
  const match = text.match(/(\d+)\s*(jour|nuit|heure)/i);
  if (!match) return { value: 1, unit: "days" };
  const value = parseInt(match[1], 10);
  const word = match[2].toLowerCase();
  const unit: DurationUnit = word.startsWith("nuit") ? "nights" : word.startsWith("heure") ? "hours" : "days";
  return { value: Number.isFinite(value) && value > 0 ? value : 1, unit };
}
