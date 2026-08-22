import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { MessagesTable } from "./messages-table";

export default async function MessagesListPage() {
  const messages = await db.contactMessage.findMany({ orderBy: { createdAt: "desc" } });
  const unreadCount = messages.filter((m) => !m.read).length;

  const rows = messages.map((m) => ({
    id: m.id,
    name: m.name,
    email: m.email,
    subject: m.subject,
    read: m.read,
    createdAt: m.createdAt.toLocaleDateString("fr-FR"),
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Messages"
        description={`${messages.length} message${messages.length > 1 ? "s" : ""}${unreadCount > 0 ? ` — ${unreadCount} non lu${unreadCount > 1 ? "s" : ""}` : ""}`}
      />
      <MessagesTable data={rows} />
    </div>
  );
}
