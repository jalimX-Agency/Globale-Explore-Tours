"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    // Registered globally at page load by TrustpilotWidgetScript (src/components/TrustpilotWidget.tsx).
    tp?: (command: string, payload?: Record<string, unknown>) => void;
  }
}

export function TrustpilotInviteButton({
  email,
  name,
  referenceId,
}: {
  email: string;
  name: string;
  referenceId: string;
}) {
  // Session-only guard against an accidental double-click; Trustpilot itself dedupes
  // invitations server-side by referenceId, so nothing is persisted here.
  const [sent, setSent] = useState(false);

  function handleSend() {
    if (typeof window === "undefined" || !window.tp) {
      toast.error("Le widget Trustpilot n'est pas chargé sur cette page");
      return;
    }
    window.tp("createInvitation", {
      recipientEmail: email,
      recipientName: name,
      referenceId,
      source: "InvitationScript",
    });
    setSent(true);
    toast.success(`Invitation Trustpilot envoyée à ${email}`);
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={handleSend} disabled={sent}>
      <Star className="size-3.5" />
      {sent ? "Invitation envoyée" : "Demander un avis Trustpilot"}
    </Button>
  );
}
