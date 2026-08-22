"use client";

import { useState } from "react";
import { useController } from "react-hook-form";
import { toast } from "sonner";
import { Loader2, Upload, X, ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

function isVideoUrl(url: string) {
  return VIDEO_EXTENSIONS.some((ext) => url.toLowerCase().endsWith(ext));
}

async function uploadImage(file: File, folder: string): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);
  const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
  if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error || "Échec de l'envoi");
  const { url } = await res.json();
  return url as string;
}

async function uploadVideo(file: File, folder: string): Promise<string> {
  const res = await fetch("/api/admin/upload-url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fileName: file.name, contentType: file.type, folder }),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error || "Échec de l'envoi");
  const { uploadUrl, publicUrl } = await res.json();
  const putRes = await fetch(uploadUrl, { method: "PUT", body: file, headers: { "Content-Type": file.type } });
  if (!putRes.ok) throw new Error("Échec de l'envoi de la vidéo vers R2");
  return publicUrl as string;
}

// Two flavours behind one component: plain images go through the buffered
// /api/admin/upload route; when `allowVideo` is set (hero fields only) a video file
// instead uploads directly to R2 via a presigned URL, bypassing our server.
//
// `control`/`name` are loosely typed for the same reason as <TrilingualField> — see its
// comment. Every call site is still fully typed by its own `useForm<FormValues>()`.
export function MediaUploadField({
  control,
  name,
  label,
  folder,
  allowVideo = false,
  size = "default",
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  folder: string;
  allowVideo?: boolean;
  /** "lg" is for the one hero field per form — full-width, larger dropzone/preview. */
  size?: "default" | "lg";
}) {
  const { field } = useController({ control, name });
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const value = (field.value as string) || "";
  const inputId = `media-upload-${name.replace(/\./g, "-")}`;
  const maxWidth = size === "lg" ? "max-w-none" : "max-w-xs";

  async function handleFile(file: File) {
    setUploading(true);
    try {
      const isVideo = file.type.startsWith("video/");
      if (isVideo && !allowVideo) throw new Error("La vidéo n'est pas autorisée pour ce champ");
      const url = isVideo ? await uploadVideo(file, folder) : await uploadImage(file, folder);
      field.onChange(url);
      toast.success("Envoi réussi");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Échec de l'envoi");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-2">
      <span className="text-sm leading-none font-medium">{label}</span>

      {value ? (
        <div className={cn("relative w-full overflow-hidden rounded-xl ring-1 ring-foreground/10", maxWidth)}>
          {isVideoUrl(value) ? (
            <video src={value} className="aspect-video w-full bg-muted object-cover" muted controls />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="aspect-video w-full bg-muted object-cover" />
          )}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent p-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-xs font-medium text-white">
              {isVideoUrl(value) ? <Video className="size-3" /> : <ImageIcon className="size-3" />}
              {isVideoUrl(value) ? "Vidéo" : "Image"}
            </span>
            <div className="flex items-center gap-1.5">
              <label
                htmlFor={inputId}
                aria-label="Remplacer le média"
                className="inline-flex cursor-pointer items-center justify-center rounded-md bg-white/90 p-1.5 text-foreground transition-colors hover:bg-white"
              >
                {uploading ? <Loader2 className="size-3.5 animate-spin" /> : <Upload className="size-3.5" />}
              </label>
              <Button
                type="button"
                variant="destructive"
                size="icon-sm"
                aria-label="Retirer le média"
                className="bg-white/90 text-foreground hover:bg-white"
                onClick={() => field.onChange("")}
              >
                <X className="size-3.5" />
              </Button>
            </div>
          </div>
          <input
            id={inputId}
            type="file"
            accept={allowVideo ? "image/*,video/mp4,video/webm,video/quicktime" : "image/*"}
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
              e.target.value = "";
            }}
          />
        </div>
      ) : (
        <label
          htmlFor={inputId}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file) handleFile(file);
          }}
          className={cn(
            "flex w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed text-center transition-colors",
            size === "lg" ? "py-14" : "py-8",
            maxWidth,
            dragOver ? "border-brand-accent bg-brand-accent/5" : "border-border hover:border-foreground/30 hover:bg-muted/50",
            uploading && "pointer-events-none opacity-60"
          )}
        >
          {uploading ? (
            <Loader2 className="size-5 animate-spin text-muted-foreground" />
          ) : (
            <Upload className="size-5 text-muted-foreground" />
          )}
          <span className="text-xs font-medium text-foreground">
            {uploading ? "Envoi en cours..." : "Glissez un fichier ici"}
          </span>
          <span className="text-xs text-muted-foreground">
            ou cliquez pour choisir {allowVideo ? "une image ou vidéo" : "une image"}
          </span>
          <input
            id={inputId}
            type="file"
            accept={allowVideo ? "image/*,video/mp4,video/webm,video/quicktime" : "image/*"}
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
              e.target.value = "";
            }}
          />
        </label>
      )}
    </div>
  );
}
