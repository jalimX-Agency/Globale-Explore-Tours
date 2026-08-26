"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export type RouteMapChapter = { title: string; mapMarkerX: number; mapMarkerY: number };

// Same viewBox/line/circle visual language as the public RouteMap (src/components/get/
// RouteMap.tsx) so what the admin sees while placing pins matches the live trip page — but
// interactive: clicking the map moves the currently-selected chapter's pin, dragging an
// existing pin fine-tunes it. Writes go straight to the form via onPositionChange, no local
// position state kept here.
export function RouteMapEditor({
  mapImage,
  chapters,
  activeIndex,
  onPositionChange,
}: {
  mapImage: string;
  chapters: RouteMapChapter[];
  activeIndex: number;
  onPositionChange: (index: number, x: number, y: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  function positionFromEvent(e: { clientX: number; clientY: number }) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    return { x, y };
  }

  if (!mapImage) {
    return (
      <p className="rounded-lg border border-dashed border-border py-10 text-center text-sm text-muted-foreground">
        Ajoutez d&apos;abord une image de carte ci-dessus.
      </p>
    );
  }
  if (chapters.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border py-10 text-center text-sm text-muted-foreground">
        Ajoutez un chapitre pour commencer à placer des étapes.
      </p>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[5/7] w-full cursor-crosshair overflow-hidden rounded-lg border border-border bg-muted/30"
      onClick={(e) => {
        if (draggingIndex !== null) return; // a drag's final pointerup already handled this
        const pos = positionFromEvent(e);
        if (pos) onPositionChange(activeIndex, pos.x, pos.y);
      }}
    >
      <Image src={mapImage} alt="" fill className="object-contain" sizes="340px" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        {chapters.slice(0, -1).map((c, i) => {
          const next = chapters[i + 1];
          return (
            <line
              key={i}
              x1={c.mapMarkerX}
              y1={c.mapMarkerY}
              x2={next.mapMarkerX}
              y2={next.mapMarkerY}
              stroke="var(--brand-accent)"
              strokeWidth={0.6}
              strokeDasharray="2 2"
              opacity={0.6}
            />
          );
        })}
        {chapters.map((c, i) => {
          const active = i === activeIndex;
          // A chapter's marker defaults to the exact map center (see newChapter()) until moved
          // — landing back on precisely (50, 50) after a real drag is vanishingly unlikely, so
          // this doubles as a "not yet placed" cue without needing a separate schema field.
          const untouched = c.mapMarkerX === 50 && c.mapMarkerY === 50;
          return (
            <g
              key={i}
              style={{ cursor: "grab", pointerEvents: "auto" }}
              onPointerDown={(e) => {
                e.stopPropagation();
                (e.target as Element).setPointerCapture(e.pointerId);
                setDraggingIndex(i);
              }}
              onPointerMove={(e) => {
                if (draggingIndex !== i) return;
                const pos = positionFromEvent(e);
                if (pos) onPositionChange(i, pos.x, pos.y);
              }}
              onPointerUp={(e) => {
                (e.target as Element).releasePointerCapture(e.pointerId);
                setDraggingIndex(null);
              }}
            >
              <circle
                cx={c.mapMarkerX}
                cy={c.mapMarkerY}
                r={active ? 3.2 : 2.2}
                fill={active ? "var(--brand-accent)" : "white"}
                stroke="var(--brand-accent)"
                strokeWidth={0.6}
                strokeDasharray={untouched ? "1 1" : undefined}
              />
              <text
                x={c.mapMarkerX}
                y={c.mapMarkerY + 0.9}
                textAnchor="middle"
                fontSize={active ? 2.8 : 2.4}
                fontWeight={active ? 700 : 500}
                fill={active ? "white" : "var(--brand-ink)"}
              >
                {i + 1}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-md border border-border bg-background/90 px-2 py-1 text-xs text-muted-foreground backdrop-blur-sm">
        <MapPin className="size-3.5" />
        {chapters[activeIndex]?.title?.trim() || `Chapitre ${activeIndex + 1}`}
      </div>
    </div>
  );
}
