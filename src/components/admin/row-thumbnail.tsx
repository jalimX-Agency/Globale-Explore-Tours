import Image from "next/image";
import { ImageIcon } from "lucide-react";

// Shared media cell for admin list tables — a missing/empty `src` (common for freshly-created
// rows) falls back to a plain tinted box instead of a broken image icon from the browser.
export function RowThumbnail({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return (
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
        <ImageIcon className="size-4" />
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
