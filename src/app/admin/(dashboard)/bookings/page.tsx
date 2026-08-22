import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { BookingsTable } from "./bookings-table";

export default async function BookingsListPage() {
  const bookings = await db.booking.findMany({
    orderBy: { createdAt: "desc" },
    include: { tour: { select: { name: true } } },
  });

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
      <PageHeader
        title="Réservations"
        description={`${bookings.length} demande${bookings.length > 1 ? "s" : ""} de réservation`}
      />
      <BookingsTable data={rows} />
    </div>
  );
}
