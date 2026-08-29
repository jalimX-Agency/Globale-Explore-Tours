import Image from "next/image";
import { ImageIcon, Play } from "lucide-react";
import { isVideoUrl } from "@/lib/media";

// Shared media cell for admin list tables — a missing/empty `src` (common for freshly-created
// rows) falls back to a plain tinted box instead of a broken image icon from the browser. A
// hero field can also hold a video URL (e.g. Destination.heroImage) — next/image can't load
// those, so they get their own branch: the video's own first frame as the thumbnail, with a
// play badge so it reads as a video at a glance instead of looking like a broken image.
export function RowThumbnail({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return (
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
        <ImageIcon className="size-4" />
      </span>
    );
  }
  if (isVideoUrl(src)) {
    return (
      <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted">
        <video src={src} muted playsInline preload="metadata" aria-label={alt} className="size-9 object-cover" />
        <Play className="absolute size-3.5 fill-white text-white drop-shadow" />
      </span>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={36}
      height={36}
      className="size-9 shrink-0 rounded-md object-cover"
    />
  );
}
