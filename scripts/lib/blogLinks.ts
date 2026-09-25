// Blog content is authored with locale-free internal links ("/destinations/..."); each language
// version needs its own /fr, /en or /es prefix, or every reader lands on the French site (see
// scripts/fix-blog-croisieres-links.ts for when that shipped by mistake).
export function addLocalePrefix(html: string, locale: string): string {
  return html
    .replace(/href="\/destinations\//g, `href="/${locale}/destinations/`)
    .replace(/href="\/experience-types\//g, `href="/${locale}/experience-types/`)
    .replace(/href="\/faire-une-demande"/g, `href="/${locale}/faire-une-demande"`);
}
