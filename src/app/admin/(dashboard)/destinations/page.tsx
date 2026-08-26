import Link from "next/link";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/admin/page-header";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";
import { DestinationsTable } from "./destinations-table";
import { Plus } from "lucide-react";

export default async function DestinationsListPage() {
  const destinations = await db.destination.findMany({
    orderBy: { order: "asc" },
    take: 500, // defensive cap — destinations are naturally bounded (world's countries), but never unbounded fetches
    select: {
      id: true,
      name: true,
      region: true,
      heroImage: true,
      order: true,
      featured: true,
      _count: { select: { tours: true } },
    },
  });

  return (
    <div className="space-y-6">
      <AdminBreadcrumb items={[{ label: "Tableau de bord", href: "/admin" }, { label: "Destinations" }]} />
      <PageHeader
        title="Destinations"
        description={`${destinations.length} destinations au catalogue`}
        action={
          <Button render={<Link href="/admin/destinations/new" />} nativeButton={false}>
            <Plus className="size-3.5" />
            Nouvelle destination
          </Button>
        }
      />

      <DestinationsTable data={destinations} />
    </div>
  );
}
