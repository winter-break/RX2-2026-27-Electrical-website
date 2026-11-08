"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const VIEWS = [
  { id: "stream", label: "Live stream", title: "LIVE STREAM" },
  { id: "map", label: "Position on track", title: "Position on track" },
] as const;

const LAST = VIEWS.length - 1;
const LOCK_MS = 700; // matches the slide transition in dash.css

export default function OverviewCenter() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const lockedUntil = useRef(0);

  const go = useCallback((next: number) => {
    const n = Math.max(0, Math.min(LAST, next));
    if (n === indexRef.current) return;
    indexRef.current = n;
    lockedUntil.current = Date.now() + LOCK_MS;
    setIndex(n);
  }, []);

  // Scrolling anywhere on the page (wheel, trackpad, keys, swipe) slides the middle column.
  // The side cards never move.
  useEffect(() => {
    const step = (dir: number) => {
      if (Date.now() < lockedUntil.current) return;
      go(indexRef.current + dir);
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 4) return;
      step(e.deltaY > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") step(1);
      else if (e.key === "ArrowUp" || e.key === "PageUp") step(-1);
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(LAST);
      else return;
      e.preventDefault();
    };
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 40) step(dy > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [go]);

  return (
    <>
      <section className="ov-center">
        <div className="ov-track" style={{ transform: `translateY(${-index * 100}%)` }}>
          {VIEWS.map((v) => (
            <div className="ov-panel" key={v.id}>
              {/* Put your live stream <iframe> / track map inside the matching panel. */}
              <h2>{v.title}</h2>
            </div>
          ))}
        </div>
      </section>
      <div className="ov-toggle" role="tablist" aria-label="Center panel">
        {VIEWS.map((v, i) => (
          <button
            key={v.id}
            role="tab"
            aria-selected={index === i}
            className={index === i ? "is-on" : ""}
            onClick={() => go(i)}
          >
            {v.label}
          </button>
        ))}
      </div>
    </>
  );
}
