import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { RegionsTable } from "./regions-table";

export default async function RegionsListPage() {
  const [regions, destinations] = await Promise.all([
    db.region.findMany({ orderBy: { order: "asc" } }),
    db.destination.findMany({ select: { regionSlug: true, region: true } }),
  ]);

  const countByRegionSlug = new Map<string, number>();
  const nameByRegionSlug = new Map<string, string>();
  for (const d of destinations) {
    countByRegionSlug.set(d.regionSlug, (countByRegionSlug.get(d.regionSlug) ?? 0) + 1);
    if (!nameByRegionSlug.has(d.regionSlug)) nameByRegionSlug.set(d.regionSlug, d.region);
  }

  const rows = regions.map((r) => ({
    id: r.id,
    slug: r.slug,
    displayName: nameByRegionSlug.get(r.slug) ?? r.slug,
    heading: r.heading,
    order: r.order,
    destinationCount: countByRegionSlug.get(r.slug) ?? 0,
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Régions"
        description={`${regions.length} régions — cliquez sur une région pour voir ses pays.`}
      />

      <RegionsTable data={rows} />
    </div>
  );
}
