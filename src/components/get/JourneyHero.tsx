import Image from "next/image";

export function JourneyHero({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative flex h-[75vh] min-h-[520px] items-center justify-center overflow-hidden">
      {image && <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 px-6 text-center">
        <p className="label-eyebrow text-white/85">{eyebrow}</p>
        <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="label-eyebrow mt-4 text-white/80">{subtitle}</p>}
      </div>
    </div>
  );
}
