import Link from "next/link";
import { db } from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/admin/page-header";
import { MapPin, Globe2, Route, ArrowUpRight, CalendarCheck, Mail } from "lucide-react";

export default async function AdminDashboardPage() {
  const [destinationCount, regionCount, tourCount, pendingBookingCount, unreadMessageCount] = await Promise.all([
    db.destination.count(),
    db.region.count(),
    db.tour.count(),
    db.booking.count({ where: { status: "pending" } }),
    db.contactMessage.count({ where: { read: false } }),
  ]);

  const contentStats = [
    { label: "Destinations", value: destinationCount, icon: MapPin, href: "/admin/destinations", iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
    { label: "Régions", value: regionCount, icon: Globe2, href: "/admin/regions", iconBg: "bg-sky-100", iconColor: "text-sky-600" },
    { label: "Voyages", value: tourCount, icon: Route, href: "/admin/destinations", iconBg: "bg-violet-100", iconColor: "text-violet-600" },
  ];

  const activityStats = [
    { label: "Demandes en attente", value: pendingBookingCount, icon: CalendarCheck, href: "/admin/demandes", iconBg: "bg-rose-100", iconColor: "text-rose-600" },
    { label: "Messages non lus", value: unreadMessageCount, icon: Mail, href: "/admin/messages", iconBg: "bg-cyan-100", iconColor: "text-cyan-600" },
  ];

  return (
    <div className="space-y-8">
      <PageHeader title="Tableau de bord" description="Aperçu rapide du contenu du site." />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {contentStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase">À traiter</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {activityStats.map((stat) => (
            <StatCard key={stat.label} {...stat} highlight={stat.value > 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  href,
  iconBg,
  iconColor,
  highlight = false,
}: {
  label: string;
  value: number;
  icon: typeof MapPin;
  href: string;
  iconBg: string;
  iconColor: string;
  highlight?: boolean;
}) {
  return (
    <Link href={href} className="block">
      <Card className="group/stat transition-shadow hover:shadow-md">
        <CardContent className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">{label}</div>
            <div className="mt-1 text-3xl font-semibold tracking-tight text-foreground">{value}</div>
          </div>
          <div
            className={
              highlight
                ? "flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-paper"
                : `flex size-11 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`
            }
          >
            <Icon className="size-5" />
          </div>
        </CardContent>
        <div className="flex items-center gap-1 border-t border-border px-(--card-spacing) pt-3 text-xs font-medium text-muted-foreground transition-colors group-hover/stat:text-foreground">
          Voir le détail
          <ArrowUpRight className="size-3.5 transition-transform group-hover/stat:translate-x-0.5 group-hover/stat:-translate-y-0.5" />
        </div>
      </Card>
    </Link>
  );
}
