"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { LocaleLink } from "@/components/get/LocaleLink";

export type ExperienceCard = {
  key: string;
  image: string;
  title: string;
  desc: string;
  href: string;
};

// Drag-to-scroll card row with a centered title that gives way to a description on hover —
// shared by the "Who's travelling?" and "What do you want to do?" rows. Each row gets its own
// instance (and its own refs), avoiding the render-time ref-factory pattern that used to trip
// react-hooks/refs here.
//
// Momentum: CSS scroll-snap fought the manual pointer-drag (the browser tried to enforce snap
// points mid-drag, producing visible micro-stutters) — replaced with a plain velocity-tracked
// rAF coast on release, the same technique native carousels use, so a flick keeps gliding and
// decelerates smoothly instead of stopping dead where the pointer let go.
export function ExperienceCardRow({ cards }: { cards: ExperienceCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
    captured: false,
    lastX: 0,
    lastT: 0,
    velocity: 0, // px/ms, smoothed
  });
  const momentumId = useRef<number | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const stopMomentum = () => {
    if (momentumId.current !== null) {
      cancelAnimationFrame(momentumId.current);
      momentumId.current = null;
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    stopMomentum();
    const now = performance.now();
    drag.current = {
      active: true,
      startX: e.clientX,
      startScrollLeft: track.scrollLeft,
      moved: false,
      captured: false,
      lastX: e.clientX,
      lastT: now,
      velocity: 0,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 4 && !drag.current.moved) {
      drag.current.moved = true;
      track.setPointerCapture(e.pointerId);
      drag.current.captured = true;
      track.classList.add("cursor-grabbing");
    }
    if (drag.current.moved) {
      track.scrollLeft = drag.current.startScrollLeft - delta;
      const now = performance.now();
      const dt = now - drag.current.lastT;
      if (dt > 0) {
        const instant = (e.clientX - drag.current.lastX) / dt;
        // Blend with the previous reading so one noisy sample right before release can't
        // dominate the flick — matches how touch carousels smooth their velocity estimate.
        drag.current.velocity = drag.current.velocity * 0.7 + instant * 0.3;
      }
      drag.current.lastX = e.clientX;
      drag.current.lastT = now;
    }
  };

  const endDrag = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    const wasDrag = drag.current.moved;
    const velocity = drag.current.velocity;
    drag.current.active = false;
    track.classList.remove("cursor-grabbing");
    if (drag.current.captured && track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
    drag.current.captured = false;

    if (!wasDrag) return;

    let speed = -velocity * 16; // px per ~16ms frame, flipped to scroll direction
    if (Math.abs(speed) < 0.5) return;
    const step = () => {
      const el = trackRef.current;
      if (!el) return;
      speed *= 0.94;
      const max = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + speed;
      if (next <= 0 || next >= max) {
        el.scrollLeft = Math.max(0, Math.min(max, next));
        momentumId.current = null;
        return;
      }
      el.scrollLeft = next;
      if (Math.abs(speed) > 0.4) {
        momentumId.current = requestAnimationFrame(step);
      } else {
        momentumId.current = null;
      }
    };
    momentumId.current = requestAnimationFrame(step);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onClickCapture={onClickCapture}
      className="no-scrollbar flex cursor-grab touch-pan-y select-none gap-4 overflow-x-auto pb-6"
    >
      {cards.map((card) => (
        <div
          key={card.key}
          className="group relative h-[420px] w-[220px] flex-shrink-0 overflow-hidden rounded-sm bg-neutral-200"
          onMouseEnter={() => setHovered(card.key)}
          onMouseLeave={() => setHovered(null)}
        >
          <LocaleLink href={card.href} draggable={false} className="block h-full w-full">
            <Image
              src={card.image}
              alt={card.title}
              fill
              draggable={false}
              className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="220px"
            />
            <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/75" />

            <div className="absolute inset-0 flex items-center justify-center p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
              <p className="label-eyebrow text-white" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}>
                {card.title}
              </p>
            </div>

            {hovered === card.key && (
              <div className="absolute inset-0 flex flex-col justify-center p-5 text-center text-white">
                <p className="label-eyebrow mb-3 text-white/60">{card.title}</p>
                <p className="font-body text-sm leading-relaxed text-white/95">{card.desc}</p>
              </div>
            )}
          </LocaleLink>
        </div>
      ))}
    </div>
  );
}
