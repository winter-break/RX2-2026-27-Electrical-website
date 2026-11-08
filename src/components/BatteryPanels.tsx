"use client";

import { useState } from "react";

// Four empty stat boxes per open panel. Add { label, value } here when you have the data.
const STATS: { label?: string; value?: string }[] = [{}, {}, {}, {}];

const PANELS = [
  { id: "a1", name: "Battery A:", side: "a", row: 1, open: true },
  { id: "b1", name: "Battery B:", side: "b", row: 1, open: false },
  { id: "a2", name: "Battery A:", side: "a", row: 2, open: false },
  { id: "b2", name: "Battery B:", side: "b", row: 2, open: false },
] as const;

export default function BatteryPanels() {
  const [open, setOpen] = useState<Record<string, boolean>>(
    Object.fromEntries(PANELS.map((p) => [p.id, p.open])),
  );
  return (
    <div className="bp-scroll">
    <div className="bp">
      {PANELS.map((p) => (
        <section key={p.id} className={`pn pn-${p.side} pn-r${p.row}`}>
          <button
            className="pn-h"
            aria-expanded={open[p.id]}
            onClick={() => setOpen((o) => ({ ...o, [p.id]: !o[p.id] }))}
          >
            <span>{p.name}</span>
            <span className="pn-ind">{open[p.id] ? <i className="ind-tri" /> : <i className="ind-dash" />}</span>
          </button>
          {open[p.id] && (
            <div className="pn-body">
              {STATS.map((s, i) => (
                <div className="stat" key={i}>
                  {s.label && <span className="stat-l">{s.label}</span>}
                  {s.value && <span className="stat-v">{s.value}</span>}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
    </div>
  );
}
