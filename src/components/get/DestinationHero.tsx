import Image from "next/image";
import { isVideoUrl } from "@/lib/media";

export function DestinationHero({ image, title }: { image: string; title: string }) {
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
        {title}
      </h1>
    </div>
  );
}
