import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AdminShell } from "@/components/admin/admin-shell";
import { Toaster } from "@/components/ui/sonner";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  // The login page has its own standalone layout (no sidebar) — this branch only
  // renders for it because layout.tsx wraps every /admin/* route including /admin/login.
  // proxy.ts already redirects unauthenticated users away from every other /admin
  // route, so by the time we get here with no session, we must be on /admin/login.
  if (!session) {
    return (
      <>
        {children}
        <Toaster richColors position="top-center" />
      </>
    );
  }

  return (
    <>
      <AdminShell userEmail={session.user?.email ?? ""}>{children}</AdminShell>
      <Toaster richColors position="top-center" />
    </>
  );
}
