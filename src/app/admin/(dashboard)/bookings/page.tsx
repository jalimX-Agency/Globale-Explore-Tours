import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";
import { BookingsTable } from "./bookings-table";

// Bookings carry customer PII (name/email/phone) and this table has no pruning — grows
// forever. Capped to the most recent 200 rather than fetched unbounded; pending requests
// should get worked before they'd ever fall off the back of that window in practice.
const MAX_ROWS = 200;

export default async function BookingsListPage() {
  const [bookings, totalCount] = await Promise.all([
    db.booking.findMany({
      orderBy: { createdAt: "desc" },
      take: MAX_ROWS,
      include: { tour: { select: { name: true } } },
    }),
    db.booking.count(),
  ]);

  const rows = bookings.map((b) => ({
    id: b.id,
    firstName: b.firstName,
    lastName: b.lastName,
    email: b.email,
    tourName: b.tour?.name ?? null,
    preferredDate: b.preferredDate ? b.preferredDate.toLocaleDateString("fr-FR") : null,
    status: b.status,
    createdAt: b.createdAt.toLocaleDateString("fr-FR"),
  }));

  return (
    <div className="space-y-6">
      <AdminBreadcrumb items={[{ label: "Tableau de bord", href: "/admin" }, { label: "Réservations" }]} />
      <PageHeader
        title="Réservations"
        description={
          totalCount > bookings.length
            ? `${bookings.length} plus récentes sur ${totalCount} demandes de réservation`
            : `${bookings.length} demande${bookings.length > 1 ? "s" : ""} de réservation`
        }
      />
      <BookingsTable data={rows} />
    </div>
  );
}
