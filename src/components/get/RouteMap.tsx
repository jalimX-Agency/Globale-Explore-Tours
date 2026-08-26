import Image from "next/image";

export type RouteMarker = { x: number; y: number; label: string };

export function RouteMap({
  mapImage,
  markers,
  activeIndex,
}: {
  mapImage: string;
  markers: RouteMarker[];
  activeIndex: number;
}) {
  if (!mapImage || markers.length === 0) return null;

  return (
    <div className="relative h-full w-full">
      <Image src={mapImage} alt="" fill className="object-contain" sizes="544px" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        {markers.slice(0, -1).map((m, i) => {
          const next = markers[i + 1];
          const filled = i < activeIndex;
          return (
            <line
              key={i}
              x1={m.x}
              y1={m.y}
              x2={next.x}
              y2={next.y}
              stroke={filled ? "var(--brand-accent)" : "var(--brand-clay)"}
              strokeWidth={filled ? 0.8 : 0.5}
              strokeDasharray={filled ? undefined : "2 2"}
              opacity={filled ? 1 : 0.5}
            />
          );
        })}
        {markers.map((m, i) => {
          const reached = i <= activeIndex;
          return (
            // Destination names are already printed on the uploaded map artwork itself — this
            // just marks the point, no <text> here (would duplicate what the image already shows).
            <circle
              key={i}
              cx={m.x}
              cy={m.y}
              r={i === activeIndex ? 2.6 : 1.8}
              fill={reached ? "var(--brand-accent)" : "white"}
              stroke="var(--brand-accent)"
              strokeWidth="0.6"
            >
              <title>{m.label}</title>
            </circle>
          );
        })}
      </svg>
    </div>
  );
}
