// Which destinations each blog guide is about. Drives the "travel guides" block on destination
// pages and the "trips for this destination" block under each guide, so the two page families
// link to each other (the guides earn most of the site's search impressions; the destination
// and trip pages are where enquiries start). Guides about a theme rather than a country
// (cruises, honeymoons, family travel) are deliberately left out.
export const BLOG_DESTINATIONS: Record<string, string[]> = {
  "quand-partir-au-maroc": ["maroc"],
  "desert-maroc-agafay-merzouga-erg-chigaga": ["maroc"],
  "grande-migration-kenya-quand-voir": ["kenya", "tanzanie"],
  "aurores-boreales-islande-guide": ["islande"],
  "quand-partir-au-japon": ["japon"],
  "quelle-ile-grecque-choisir": ["grece"],
  "quand-partir-en-tanzanie": ["tanzanie"],
  "quand-partir-au-perou": ["perou"],
  "quand-partir-en-thailande": ["thailande"],
  "quand-partir-au-vietnam": ["vietnam"],
  "premier-safari-quel-pays-choisir": ["kenya", "tanzanie", "afrique-du-sud", "botswana", "namibie"],
  "quand-partir-en-afrique-du-sud": ["afrique-du-sud"],
  "quand-partir-au-costa-rica": ["costa-rica"],
  "quand-partir-aux-maldives": ["maldives"],
  "quand-partir-en-jordanie": ["jordanie"],
  "quand-partir-en-egypte": ["egypte"],
  "quand-partir-au-sri-lanka": ["sri-lanka"],
  "quand-partir-a-bali": ["indonesie"],
  "quand-partir-en-namibie": ["namibie"],
  "quand-partir-en-nouvelle-zelande": ["nouvelle-zelande"],
  "quand-partir-en-argentine": ["argentine"],
  "quand-partir-au-mexique": ["mexique"],
  "quand-partir-en-inde": ["inde"],
  "quand-partir-a-l-ile-maurice": ["maurice"],
  "voir-les-gorilles-rwanda-ouganda": ["rwanda", "ouganda"],
  "quand-partir-au-canada": ["canada"],
  "quand-partir-au-botswana": ["botswana"],
  "quand-partir-a-madagascar": ["madagascar"],
  "quand-partir-au-chili": ["chili"],
  "quand-partir-en-colombie": ["colombie"],
  "quand-partir-en-norvege": ["norvege"],
  "quand-partir-au-portugal": ["portugal"],
  "quand-partir-en-turquie": ["turquie"],
  "quand-partir-en-polynesie-francaise": ["polynesie-francaise"],
};

export function blogSlugsForDestination(destinationSlug: string): string[] {
  return Object.entries(BLOG_DESTINATIONS)
    .filter(([, dests]) => dests.includes(destinationSlug))
    .map(([slug]) => slug);
}
