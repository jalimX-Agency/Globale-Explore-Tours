export type RouteMarker = { x: number; y: number; label: string };

export function RouteMap({
  mapImage,
  markers,
  activeIndex,
  progress = 0,
}: {
  mapImage: string;
  markers: RouteMarker[];
  activeIndex: number;
  /** 0-1: how far scrolled through the active chapter's own section — draws the line to the
   * *next* marker live as the user scrolls, instead of it just snapping to fully-reached. */
  progress?: number;
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
        <img src={mapImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
          {markers.slice(0, -1).map((m, i) => {
            const next = markers[i + 1];
            const reached = i < activeIndex;
            const isCurrent = i === activeIndex;
            return (
              <g key={i}>
                {/* Faint static track for the road ahead — always present so the full route
                    is legible at a glance, drawn under the live segment below. */}
                {!reached && (
                  <line
                    x1={m.x}
                    y1={m.y}
                    x2={next.x}
                    y2={next.y}
                    stroke="var(--brand-clay)"
                    strokeWidth={0.22}
                    strokeDasharray="1.5 1.5"
                    opacity={0.5}
                  />
                )}
                {/* pathLength=1 normalizes the dash math to a 0-1 fraction regardless of this
                    line's actual geometric length, so "reached" is just offset 0 (fully drawn)
                    and the current segment's offset is driven live by scroll progress through
                    this chapter's own section — the road visibly extends as you scroll. */}
                {(reached || isCurrent) && (
                  <line
                    x1={m.x}
                    y1={m.y}
                    x2={next.x}
                    y2={next.y}
                    pathLength={1}
                    strokeDasharray={1}
                    strokeDashoffset={reached ? 0 : 1 - progress}
                    stroke="var(--brand-accent)"
                    strokeWidth={0.35}
                  />
                )}
              </g>
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
