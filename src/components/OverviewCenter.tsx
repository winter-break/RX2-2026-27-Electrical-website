"use client";

import { useState } from "react";

const VIEWS = [
  { id: "stream", label: "Live stream", title: "LIVE STREAM" },
  { id: "map", label: "Position on track", title: "Position on track" },
] as const;

export default function OverviewCenter() {
  const [view, setView] = useState<(typeof VIEWS)[number]["id"]>("stream");
  const current = VIEWS.find((v) => v.id === view)!;
  return (
    <>
      <section className="ov-center">
        {/* Put your live stream <iframe> or track map here when you have it. */}
        <h2>{current.title}</h2>
      </section>
      <div className="ov-toggle" role="tablist" aria-label="Center panel">
        {VIEWS.map((v) => (
          <button
            key={v.id}
            role="tab"
            aria-selected={view === v.id}
            className={view === v.id ? "is-on" : ""}
            onClick={() => setView(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>
    </>
  );
}
