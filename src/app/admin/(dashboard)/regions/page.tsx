import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";
import { RegionsTable } from "./regions-table";

export default async function RegionsListPage() {
  const [regions, destinations] = await Promise.all([
    db.region.findMany({ orderBy: { order: "asc" }, take: 500 }),
    db.destination.findMany({ select: { regionSlug: true, region: true }, take: 500 }),
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
    heroImage: r.heroImage,
    order: r.order,
    destinationCount: countByRegionSlug.get(r.slug) ?? 0,
  }));

  return (
    <div className="space-y-6">
      <AdminBreadcrumb items={[{ label: "Tableau de bord", href: "/admin" }, { label: "Régions" }]} />
      <PageHeader
        title="Régions"
        description={`${regions.length} régions — cliquez sur une région pour voir ses pays.`}
      />

      <RegionsTable data={rows} />
    </div>
  );
}
