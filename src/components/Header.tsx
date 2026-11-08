"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { TOP_TABS } from "@/lib/dash";

export default function Header() {
  const path = usePathname();
  return (
    <header className="hdr">
      <div className="hdr-checker" />
      <div className="hdr-line1" />
      <div className="hdr-line2" />
      <div className="hdr-in">
      <Link href="/overview" className="hdr-gear" aria-label="Overview">
        <img src="/gear.png" alt="RX²" />
      </Link>
      <nav>
        {TOP_TABS.map((t) => {
          const active = path === t.match || path.startsWith(t.match + "/");
          const style = { "--cx": t.cx, "--cy": t.cy, "--w": t.w, "--h": t.h, "--r": t.r } as CSSProperties;
          return (
            <Link key={t.label} href={t.href} className={`tab${active ? " is-active" : ""}`} style={style}>
              {t.label}
            </Link>
          );
        })}
      </nav>
      </div>
    </header>
  );
}
