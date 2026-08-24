// Known-good sub-page sets, reverse-engineered from Black Tomato's real sitemap (see the
// architecture-audit artifact from this project's planning session) — used both by the
// "Générer les sous-pages standard" admin button (createStandardSubPages in actions.ts) and
// by the one-off migration scripts that seeded the initial Family/Honeymoon/Private Travel
// sub-pages. Real slugs, thin French-only starter content — the admin fills in EN/ES and
// real copy afterward.
export type SubPageTemplateItem = {
  leafSlug: string;
  cardTitle: string;
  heroTitle: string;
  filterTheme?: string;
  filterMonths?: string;
};

export const SUB_PAGE_TEMPLATES: Record<string, SubPageTemplateItem[]> = {
  family: [
    { leafSlug: "travel-pre-school-children", cardTitle: "Tout-petits", heroTitle: "Voyager avec des tout-petits" },
    { leafSlug: "teen-travel", cardTitle: "Adolescents", heroTitle: "Voyager avec des adolescents" },
    { leafSlug: "travel-grown-up-family", cardTitle: "Enfants adultes", heroTitle: "Voyager avec des enfants devenus adultes" },
    { leafSlug: "travel-multi-generational-family", cardTitle: "Multigénérationnel", heroTitle: "Voyages multigénérationnels" },
    { leafSlug: "where-to-go-with-the-family-in-spring", cardTitle: "Printemps", heroTitle: "Où partir en famille au printemps", filterMonths: "march,april,may" },
    { leafSlug: "family-travel-holidays-in-the-summer", cardTitle: "Été", heroTitle: "Où partir en famille en été", filterMonths: "june,july,august" },
    { leafSlug: "where-to-go-on-holiday-with-the-family-in-autumn", cardTitle: "Automne", heroTitle: "Où partir en famille en automne", filterMonths: "september,october,november" },
    { leafSlug: "where-to-go-on-a-family-holiday-at-christmas-and-new-year", cardTitle: "Hiver", heroTitle: "Où partir en famille en hiver", filterMonths: "december,january,february" },
    { leafSlug: "family-adventure-holidays", cardTitle: "Aventure", heroTitle: "Vacances en famille : aventure", filterTheme: "adventure" },
    { leafSlug: "cultural-family-holidays", cardTitle: "Culture", heroTitle: "Vacances en famille : culture", filterTheme: "culture" },
    { leafSlug: "relaxing-family-holidays", cardTitle: "Détente", heroTitle: "Vacances en famille : détente", filterTheme: "relax" },
    { leafSlug: "family-wildlife-holidays", cardTitle: "Faune sauvage", heroTitle: "Vacances en famille : faune sauvage" },
    { leafSlug: "bucket-list-family-holidays", cardTitle: "Incontournables", heroTitle: "Les incontournables en famille" },
    { leafSlug: "graduation-trips", cardTitle: "Voyages de fin d'études", heroTitle: "Voyages de fin d'études" },
    { leafSlug: "mother-daughter-trips", cardTitle: "Mère-fille", heroTitle: "Voyages mère-fille" },
    { leafSlug: "father-son-trips", cardTitle: "Père-fils", heroTitle: "Voyages père-fils" },
  ],
  honeymoon: [
    { leafSlug: "april-honeymoons", cardTitle: "Avril", heroTitle: "Lune de miel en avril", filterMonths: "april" },
    { leafSlug: "august-honeymoons", cardTitle: "Août", heroTitle: "Lune de miel en août", filterMonths: "august" },
    { leafSlug: "september-honeymoons", cardTitle: "Septembre", heroTitle: "Lune de miel en septembre", filterMonths: "september" },
    { leafSlug: "october-honeymoons", cardTitle: "Octobre", heroTitle: "Lune de miel en octobre", filterMonths: "october" },
    { leafSlug: "december-honeymoons", cardTitle: "Décembre", heroTitle: "Lune de miel en décembre", filterMonths: "december" },
    { leafSlug: "beach-honeymoons", cardTitle: "Plage", heroTitle: "Lune de miel à la plage", filterTheme: "relax" },
    { leafSlug: "city-honeymoons", cardTitle: "Citadine", heroTitle: "Lune de miel citadine", filterTheme: "culture" },
    { leafSlug: "unusual-honeymoon-destinations", cardTitle: "Insolite", heroTitle: "Destinations insolites pour lune de miel" },
  ],
  "private-travel": [
    { leafSlug: "private-accommodation", cardTitle: "Hébergement privé", heroTitle: "Hébergement privé" },
    { leafSlug: "private-aviation", cardTitle: "Aviation privée", heroTitle: "Aviation privée" },
    { leafSlug: "private-staff", cardTitle: "Personnel dédié", heroTitle: "Personnel dédié" },
    { leafSlug: "private-workspaces", cardTitle: "Espaces de travail privés", heroTitle: "Espaces de travail privés" },
    { leafSlug: "private-yachts", cardTitle: "Yachts privés", heroTitle: "Yachts privés" },
  ],
};

export const SUB_PAGE_TEMPLATE_KEYS = Object.keys(SUB_PAGE_TEMPLATES) as (keyof typeof SUB_PAGE_TEMPLATES)[];
export const SUB_PAGE_TEMPLATE_LABELS: Record<string, string> = {
  family: "Famille (âge / saison / type) — 16 pages",
  honeymoon: "Lune de miel (mois / type) — 8 pages",
  "private-travel": "Private Travel (services) — 5 pages",
};
