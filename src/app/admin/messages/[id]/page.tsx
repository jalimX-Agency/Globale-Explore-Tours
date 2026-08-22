import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { db } from "@/lib/db";
import { Card } from "@/components/ui/card";
import { MessageReadToggle } from "../message-read-toggle";

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-medium text-muted-foreground uppercase">{label}</div>
      <div className="mt-0.5 text-sm text-foreground">{value}</div>
    </div>
  );
}

export default async function MessageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const message = await db.contactMessage.findUnique({ where: { id } });
  if (!message) notFound();

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Link
          href="/admin/messages"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Messages
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {message.subject || "Message sans sujet"}
          </h1>
          <MessageReadToggle messageId={message.id} initialRead={message.read} />
        </div>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Field label="Nom" value={message.name} />
          <Field label="Email" value={message.email} />
          <Field label="Téléphone" value={message.phone || "—"} />
        </div>
        <div className="mt-5 border-t border-border pt-5">
          <Field label="Message" value={<p className="whitespace-pre-wrap">{message.message}</p>} />
        </div>
        <div className="mt-5 border-t border-border pt-5">
          <Field label="Reçu le" value={message.createdAt.toLocaleString("fr-FR")} />
        </div>
      </Card>
    </div>
  );
}
