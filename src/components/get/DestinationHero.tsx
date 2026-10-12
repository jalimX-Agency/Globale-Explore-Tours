import Image from "next/image";
import { isVideoUrl } from "@/lib/media";

// `eyebrow` sits inside the <h1> so the heading reads as the searched phrase ("Voyage sur mesure
// Japon") while the page still shows the place name as the large title.
export function DestinationHero({ image, title, eyebrow }: { image: string; title: string; eyebrow?: string }) {
  return (
    <div className="relative flex h-[55vh] min-h-[420px] items-center justify-center overflow-hidden">
      {image &&
        (isVideoUrl(image) ? (
          <video
            src={image}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
        ))}
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="font-display relative z-10 px-6 text-center text-4xl text-white sm:text-5xl lg:text-6xl">
        {eyebrow && <span className="label-eyebrow mb-3 block text-white/85">{eyebrow} </span>}
        {title}
      </h1>
    </div>
  );
}
