"use client";

import { useState } from "react";
import { useController } from "react-hook-form";
import { toast } from "sonner";
import { Loader2, Upload, X, ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { isVideoUrl } from "@/lib/media";
import { uploadImage, uploadVideo } from "@/components/admin/media-upload-field";

function parseUrls(value: string) {
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

// Repeatable sibling of <MediaUploadField>: same upload plumbing, but for a field that holds
// several images/videos (chapter gallery, day carousel) rather than one. Backed by the same
// comma-joined string the field already stored as free-typed URLs — only the input widget
// changes, not the data shape — because that's what the public carousels' `.split(",")`
// parsing (see JourneyChapterSection.tsx) already expects.
export function MediaUploadListField({
  control,
  name,
  label,
  folder,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  folder: string;
}) {
  const { field } = useController({ control, name });
  const [uploadingCount, setUploadingCount] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const urls = parseUrls((field.value as string) || "");
  const inputId = `media-upload-list-${name.replace(/\./g, "-")}`;

  async function handleFiles(files: FileList | File[]) {
    const list = Array.from(files);
    if (list.length === 0) return;
    setUploadingCount((n) => n + list.length);
    let current = urls;
    let failures = 0;
    for (const file of list) {
      try {
        const isVideo = file.type.startsWith("video/");
        const url = isVideo ? await uploadVideo(file, folder) : await uploadImage(file, folder);
        current = [...current, url];
        field.onChange(current.join(","));
      } catch (err) {
        failures++;
        toast.error(err instanceof Error ? err.message : "Échec de l'envoi");
      } finally {
        setUploadingCount((n) => n - 1);
      }
    }
    if (list.length - failures > 0) toast.success(list.length > 1 ? "Fichiers envoyés" : "Envoi réussi");
  }

  function removeAt(index: number) {
    field.onChange(urls.filter((_, i) => i !== index).join(","));
  }

  return (
    <div className="space-y-2">
      <span className="text-sm leading-none font-medium">{label}</span>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {urls.map((url, index) => (
          <div key={`${url}-${index}`} className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-foreground/10">
            {isVideoUrl(url) ? (
              <video src={url} className="h-full w-full bg-muted object-cover" muted loop playsInline />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={url} alt="" className="h-full w-full bg-muted object-cover" />
            )}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent p-1.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-1.5 py-0.5 text-[10px] font-medium text-white">
                {isVideoUrl(url) ? <Video className="size-2.5" /> : <ImageIcon className="size-2.5" />}
              </span>
              <Button
                type="button"
                variant="destructive"
                size="icon-sm"
                aria-label="Retirer le média"
                className="size-6 bg-white/90 text-foreground hover:bg-white"
                onClick={() => removeAt(index)}
              >
                <X className="size-3" />
              </Button>
            </div>
          </div>
        ))}

        {Array.from({ length: uploadingCount }).map((_, i) => (
          <div
            key={`uploading-${i}`}
            className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-border"
          >
            <Loader2 className="size-5 animate-spin text-muted-foreground" />
          </div>
        ))}

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
            if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
          }}
          className={cn(
            "flex aspect-video cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed text-center transition-colors",
            dragOver ? "border-brand-accent bg-brand-accent/5" : "border-border hover:border-foreground/30 hover:bg-muted/50"
          )}
        >
          <Upload className="size-4 text-muted-foreground" />
          <span className="text-[11px] font-medium text-foreground">Ajouter</span>
          <span className="px-2 text-[10px] text-muted-foreground">image ou vidéo</span>
          <input
            id={inputId}
            type="file"
            accept="image/*,video/mp4,video/webm,video/quicktime"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) handleFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </label>
      </div>
    </div>
  );
}
