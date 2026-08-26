import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { Card } from "@/components/ui/card";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";
import { BookingStatusForm } from "../booking-status-form";

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-medium text-muted-foreground uppercase">{label}</div>
      <div className="mt-0.5 text-sm text-foreground">{value}</div>
    </div>
  );
}

export default async function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const booking = await db.booking.findUnique({
    where: { id },
    include: { tour: { select: { id: true, name: true } } },
  });
  if (!booking) notFound();

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <AdminBreadcrumb
          items={[
            { label: "Tableau de bord", href: "/admin" },
            { label: "Réservations", href: "/admin/bookings" },
            { label: `${booking.firstName} ${booking.lastName}` },
          ]}
        />
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {booking.firstName} {booking.lastName}
        </h1>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Email" value={booking.email} />
          <Field label="Téléphone" value={booking.phone || "—"} />
          <Field
            label="Voyage"
            value={
              booking.tour ? (
                <Link href={`/admin/tours/${booking.tour.id}`} className="text-brand-accent hover:underline">
                  {booking.tour.name}
                </Link>
              ) : (
                "—"
              )
            }
          />
          <Field
            label="Date souhaitée"
            value={booking.preferredDate ? booking.preferredDate.toLocaleDateString("fr-FR") : "—"}
          />
          <Field label="Voyageurs" value={`${booking.guests} adulte${booking.guests > 1 ? "s" : ""}, ${booking.children} enfant${booking.children > 1 ? "s" : ""}`} />
          <Field label="Durée souhaitée" value={booking.duration || "—"} />
          <Field label="Budget par personne" value={booking.budget || "—"} />
          <Field label="Destinations d'intérêt" value={booking.destinationsInterest || "—"} />
          <Field label="Connu via" value={booking.hearAboutUs || "—"} />
          <Field label="Langue" value={booking.language.toUpperCase()} />
          <Field label="Reçu le" value={booking.createdAt.toLocaleString("fr-FR")} />
        </div>
        {booking.message && (
          <div className="mt-5 border-t border-border pt-5">
            <Field label="Message" value={<p className="whitespace-pre-wrap">{booking.message}</p>} />
          </div>
        )}
      </Card>

      <Card className="p-6">
        <div className="mb-3 text-sm font-medium text-foreground">Statut</div>
        <BookingStatusForm bookingId={booking.id} initialStatus={booking.status} />
      </Card>
    </div>
  );
}
