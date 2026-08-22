import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AdminShell } from "@/components/admin/admin-shell";
import { Toaster } from "@/components/ui/sonner";

// This route group covers every protected /admin page — /admin/login lives outside it
// (sibling of this group, not a child), so it never goes through this check. Enforcing
// the session here directly (rather than relying solely on proxy.ts) means these pages
// stay protected even if the proxy/middleware layer fails to run for any reason.
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return (
    <>
      <AdminShell userEmail={session.user?.email ?? ""}>{children}</AdminShell>
      <Toaster richColors position="top-center" />
    </>
  );
}
