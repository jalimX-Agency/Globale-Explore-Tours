import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";
import { ToursTable } from "./tours-table";
import { NewTourButton } from "./new-tour-button";

export default async function ToursListPage() {
  const [tours, destinations] = await Promise.all([
    db.tour.findMany({
      orderBy: { order: "asc" },
      take: 500,
      select: {
        id: true,
        name: true,
        image: true,
        price: true,
        currency: true,
        theme: true,
        travelerTypes: true,
        featured: true,
        format: true,
        order: true,
        updatedAt: true,
        destination: { select: { id: true, name: true, region: true } },
      },
    }),
    db.destination.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } }),
  ]);

  return (
    <div className="space-y-6">
      <AdminBreadcrumb items={[{ label: "Tableau de bord", href: "/admin" }, { label: "Voyages" }]} />
      <PageHeader
        title="Voyages"
        description={`${tours.length} voyages au catalogue`}
        action={<NewTourButton destinations={destinations} />}
      />

      <ToursTable data={tours} />
    </div>
  );
}
