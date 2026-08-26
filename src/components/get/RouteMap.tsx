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

  const active = markers[Math.min(activeIndex, markers.length - 1)];

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Camera layer: zooming via transform-origin at the active marker (rather than a
          translate-to-center) means the scaled image always still covers the panel — scaling
          up around any interior point can never expose a blank edge, so no clamping math is
          needed. transform-origin is animatable, so changing chapters glides the focus point. */}
      <div
        className="absolute inset-0"
        style={{
          // Kept subtle: object-cover of portrait map art into a wide section already
          // magnifies it heavily — this scale only exists to give the camera room to pan
          // toward the active chapter's marker.
          transform: "scale(1.1)",
          transformOrigin: `${active.x}% ${active.y}%`,
          transition: "transform-origin 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mapImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
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
                strokeWidth={filled ? 0.35 : 0.22}
                strokeDasharray={filled ? undefined : "1.5 1.5"}
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
                r={i === activeIndex ? 1 : 0.65}
                fill={reached ? "var(--brand-accent)" : "white"}
                stroke="var(--brand-accent)"
                strokeWidth="0.25"
              >
                <title>{m.label}</title>
              </circle>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
