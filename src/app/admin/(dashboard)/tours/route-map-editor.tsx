"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Maximize2, Minimize2 } from "lucide-react";

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
  const [fullscreen, setFullscreen] = useState(false);

  // Escape closes the fullscreen overlay, same as a Dialog would — but this isn't a Dialog
  // (the map still needs pointer events routed to containerRef for click/drag placement, which
  // a portal-based Dialog would complicate for no benefit here).
  useEffect(() => {
    if (!fullscreen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setFullscreen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [fullscreen]);

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
      className={
        fullscreen
          ? "fixed inset-0 z-50 flex flex-col bg-background p-4"
          : "relative"
      }
    >
      {fullscreen && (
        <p className="mb-2 shrink-0 text-xs text-muted-foreground">
          Cliquez pour placer le chapitre sélectionné, ou faites glisser un point pour l&apos;ajuster.
          Échap pour fermer.
        </p>
      )}
      <div
        ref={containerRef}
        // aspect-[16/9] + object-cover approximates the public panel: the map is now a full-bleed
        // section BACKGROUND (JourneyChapterSection renders it absolute/inset-0 behind the day
        // cards, min-h-screen), not a narrow side column — so this preview needs a wide landscape
        // box, not a portrait one, or pins/labels placed near the top/bottom edge here would fall
        // outside what the live page actually crops to. In fullscreen, drop the fixed aspect
        // ratio and just fill the available height for maximum precision when placing pins.
        className={
          fullscreen
            ? "relative min-h-0 flex-1 cursor-crosshair overflow-hidden rounded-lg border border-border bg-muted/30"
            : "relative aspect-[16/9] w-full cursor-crosshair overflow-hidden rounded-lg border border-border bg-muted/30"
        }
        onClick={(e) => {
          if (draggingIndex !== null) return; // a drag's final pointerup already handled this
          const pos = positionFromEvent(e);
          if (pos) onPositionChange(activeIndex, pos.x, pos.y);
        }}
      >
        <Image src={mapImage} alt="" fill className="object-cover" sizes={fullscreen ? "100vw" : "600px"} />
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
                strokeWidth={0.35}
                strokeDasharray="1.5 1.5"
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
                {/* Deliberately small pins: the pin center IS the exact stored coordinate, and a
                    large disc makes it hard to judge precisely which spot on the artwork it
                    lands on. The invisible wider circle underneath keeps the grab/click target
                    comfortable without bloating the visible dot. */}
                <circle cx={c.mapMarkerX} cy={c.mapMarkerY} r={4} fill="transparent" />
                <circle
                  cx={c.mapMarkerX}
                  cy={c.mapMarkerY}
                  r={active ? 1.6 : 1.1}
                  fill={active ? "var(--brand-accent)" : "white"}
                  stroke="var(--brand-accent)"
                  strokeWidth={0.35}
                  strokeDasharray={untouched ? "1 1" : undefined}
                />
                <text
                  x={c.mapMarkerX}
                  y={c.mapMarkerY + 0.5}
                  textAnchor="middle"
                  fontSize={active ? 1.5 : 1.2}
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

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // don't also place/move a pin at the button's position
            setFullscreen((v) => !v);
          }}
          title={fullscreen ? "Réduire" : "Agrandir pour plus de précision"}
          className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-md border border-border bg-background/90 px-2 py-1 text-xs text-muted-foreground backdrop-blur-sm hover:text-foreground"
        >
          {fullscreen ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
          {fullscreen ? "Réduire" : "Plein écran"}
        </button>
      </div>
    </div>
  );
}
