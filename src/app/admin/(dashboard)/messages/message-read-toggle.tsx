"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Mail, MailOpen } from "lucide-react";
import { setMessageRead } from "./actions";

// Opening a message's detail page marks it read automatically — the common inbox
// convention — while the button lets staff flip it back to "unread" as a follow-up flag.
export function MessageReadToggle({
  messageId,
  initialRead,
  onChange,
}: {
  messageId: string;
  initialRead: boolean;
  /** Lets a parent list (e.g. the messages table, behind a dialog) keep its own copy of the
   * read flag in sync without waiting for a full page revalidation. */
  onChange?: (read: boolean) => void;
}) {
  const [read, setRead] = useState(initialRead);
  const [pending, startTransition] = useTransition();
  const markedOnMount = useRef(false);

  useEffect(() => {
    if (markedOnMount.current || initialRead) return;
    markedOnMount.current = true;
    startTransition(async () => {
      await setMessageRead(messageId, true);
      setRead(true);
      onChange?.(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle() {
    const next = !read;
    startTransition(async () => {
      try {
        await setMessageRead(messageId, next);
        setRead(next);
        onChange?.(next);
        toast.success(next ? "Marqué comme lu" : "Marqué comme non lu");
      } catch {
        toast.error("Une erreur est survenue");
      }
    });
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={toggle} disabled={pending}>
      {read ? <Mail className="size-3.5" /> : <MailOpen className="size-3.5" />}
      {read ? "Marquer comme non lu" : "Marquer comme lu"}
    </Button>
  );
}
