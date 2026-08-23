import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { MessagesTable } from "./messages-table";

// Same reasoning as bookings/page.tsx: contact messages carry PII, are never pruned, and
// grow forever — cap the fetch rather than pull the whole table on every load.
const MAX_ROWS = 200;

export default async function MessagesListPage() {
  const [messages, totalCount, unreadCount] = await Promise.all([
    db.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: MAX_ROWS }),
    db.contactMessage.count(),
    db.contactMessage.count({ where: { read: false } }),
  ]);

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
        description={
          (totalCount > messages.length
            ? `${messages.length} plus récents sur ${totalCount} messages`
            : `${messages.length} message${messages.length > 1 ? "s" : ""}`) +
          (unreadCount > 0 ? ` — ${unreadCount} non lu${unreadCount > 1 ? "s" : ""}` : "")
        }
      />
      <MessagesTable data={rows} />
    </div>
  );
}
