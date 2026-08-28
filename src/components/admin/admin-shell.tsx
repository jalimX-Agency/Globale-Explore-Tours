"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  MapPin,
  Globe2,
  LogOut,
  Newspaper,
  Quote,
  CalendarCheck,
  Mail,
  Compass,
  Route,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SIDEBAR_COLLAPSED_COOKIE = "admin-sidebar-collapsed";

// Each section keeps a fixed, distinct color chip on its icon — a quick visual anchor when
// scanning the sidebar, instead of every entry reading as the same flat black/white row.
const CONTENT_NAV_ITEMS = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard, exact: true, iconBg: "bg-slate-100", iconColor: "text-slate-600" },
  { href: "/admin/regions", label: "Régions", icon: Globe2, exact: false, iconBg: "bg-sky-100", iconColor: "text-sky-600" },
  { href: "/admin/destinations", label: "Destinations", icon: MapPin, exact: false, iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
  { href: "/admin/tours", label: "Voyages", icon: Route, exact: false, iconBg: "bg-orange-100", iconColor: "text-orange-600" },
  { href: "/admin/experiences", label: "Expériences", icon: Compass, exact: false, iconBg: "bg-fuchsia-100", iconColor: "text-fuchsia-600" },
  { href: "/admin/blog", label: "Blog", icon: Newspaper, exact: false, iconBg: "bg-violet-100", iconColor: "text-violet-600" },
  { href: "/admin/testimonials", label: "Témoignages", icon: Quote, exact: false, iconBg: "bg-amber-100", iconColor: "text-amber-600" },
];

const ACTIVITY_NAV_ITEMS = [
  { href: "/admin/demandes", label: "Demandes", icon: CalendarCheck, exact: false, iconBg: "bg-rose-100", iconColor: "text-rose-600" },
  { href: "/admin/messages", label: "Messages", icon: Mail, exact: false, iconBg: "bg-cyan-100", iconColor: "text-cyan-600" },
];

type NavItem = {
  href: string;
  label: string;
  icon: typeof LayoutDashboard;
  exact: boolean;
  iconBg: string;
  iconColor: string;
};

function NavLink({ item, pathname, collapsed }: { item: NavItem; pathname: string; collapsed: boolean }) {
  const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      title={collapsed ? item.label : undefined}
      className={cn(
        "relative flex items-center gap-2.5 rounded-lg py-1.5 pr-3 pl-3.5 text-sm font-medium transition-colors",
        collapsed && "justify-center px-0",
        active
          ? "bg-brand-ink text-brand-paper"
          : "text-foreground/70 hover:bg-sidebar-accent hover:text-foreground"
      )}
    >
      {active && !collapsed && (
        <span className="absolute top-1/2 -left-3 h-4 w-1 -translate-y-1/2 rounded-full bg-brand-accent" />
      )}
      <span className={cn("flex size-6 shrink-0 items-center justify-center rounded-md", item.iconBg)}>
        <Icon className={cn("size-3.5", item.iconColor)} />
      </span>
      {!collapsed && item.label}
    </Link>
  );
}

export function AdminShell({
  userEmail,
  defaultCollapsed = false,
  children,
}: {
  userEmail: string;
  defaultCollapsed?: boolean;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Initial value comes from a cookie read server-side (see (dashboard)/layout.tsx) — no
  // client effect needed, so there's nothing to mismatch between server and first paint.
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  function toggleCollapsed() {
    setCollapsed((prev) => {
      const next = !prev;
      document.cookie = `${SIDEBAR_COLLAPSED_COOKIE}=${next ? "1" : "0"}; path=/; max-age=31536000; samesite=lax`;
      return next;
    });
  }

  return (
    <div className="flex min-h-screen bg-background">
      <aside
        className={cn(
          "flex shrink-0 flex-col border-r border-sidebar-border bg-sidebar transition-[width] duration-150",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className={cn("flex h-16 items-center gap-2.5 border-b border-sidebar-border", collapsed ? "justify-center px-2" : "px-5")}>
          <Image
            src="/logo.png"
            alt="Globale Explore Tours"
            width={36}
            height={36}
            className="size-9 shrink-0 object-contain"
            priority
          />
          {!collapsed && (
            <div className="min-w-0 leading-tight">
              <div className="truncate text-sm font-semibold text-sidebar-foreground">
                Globale Explore Tours
              </div>
              <div className="text-xs text-muted-foreground">Console d&apos;administration</div>
            </div>
          )}
        </div>

        <nav className="flex-1 space-y-4 p-3" aria-label="Navigation principale">
          <div className="space-y-0.5">
            {CONTENT_NAV_ITEMS.map((item) => (
              <NavLink key={item.href} item={item} pathname={pathname} collapsed={collapsed} />
            ))}
          </div>
          <div className="space-y-0.5">
            {!collapsed && (
              <div className="px-3.5 pb-1 text-xs font-semibold text-muted-foreground uppercase">Activité</div>
            )}
            {ACTIVITY_NAV_ITEMS.map((item) => (
              <NavLink key={item.href} item={item} pathname={pathname} collapsed={collapsed} />
            ))}
          </div>
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <div className={cn("flex items-center gap-2.5 rounded-lg px-1 py-1.5", collapsed && "justify-center")}>
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sidebar-accent text-xs font-semibold text-foreground"
              title={collapsed ? userEmail : undefined}
            >
              {userEmail.slice(0, 2).toUpperCase()}
            </span>
            {!collapsed && (
              <div className="min-w-0 flex-1 leading-tight">
                <div className="truncate text-xs font-medium text-sidebar-foreground">{userEmail}</div>
                <div className="text-xs text-muted-foreground">Administrateur</div>
              </div>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className={cn("mt-2 w-full justify-center", collapsed && "px-0")}
            title={collapsed ? "Déconnexion" : undefined}
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
          >
            <LogOut className="size-3.5" />
            {!collapsed && "Déconnexion"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="mt-1 w-full justify-center text-muted-foreground"
            title={collapsed ? "Développer le menu" : "Réduire le menu"}
            onClick={toggleCollapsed}
          >
            {collapsed ? <PanelLeftOpen className="size-3.5" /> : <PanelLeftClose className="size-3.5" />}
            {!collapsed && "Réduire le menu"}
          </Button>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <div className="mx-auto max-w-6xl px-8 py-8">{children}</div>
      </main>
    </div>
  );
}
