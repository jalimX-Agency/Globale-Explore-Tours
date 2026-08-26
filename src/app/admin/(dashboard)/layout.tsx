import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AdminShell } from "@/components/admin/admin-shell";
import { Toaster } from "@/components/ui/sonner";

// This route group covers every protected /admin page — /admin/login lives outside it
// (sibling of this group, not a child), so it never goes through this check. This is the
// sole gate for these pages (no middleware/proxy involved — Next.js 16.3's Turbopack
// production build was found to leave the proxy matcher unregistered on Vercel, which
// left every /admin/* page briefly served with no auth check at all).
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  const cookieStore = await cookies();
  const defaultCollapsed = cookieStore.get("admin-sidebar-collapsed")?.value === "1";

  return (
    <>
      <AdminShell userEmail={session.user?.email ?? ""} defaultCollapsed={defaultCollapsed}>
        {children}
      </AdminShell>
      <Toaster richColors position="top-center" />
    </>
  );
}
