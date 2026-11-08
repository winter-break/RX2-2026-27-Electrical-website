"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DAY_SUBTABS } from "@/lib/dash";

export default function DayTabs({ day }: { day: number }) {
  const path = usePathname();
  return (
    <div className="sub">
      <nav className="subtabs">
        {DAY_SUBTABS.map((t) => (
          <Link
            key={t.slug}
            href={`/day/${day}/${t.slug}`}
            className={path.endsWith(`/${t.slug}`) ? "is-active" : ""}
          >
            {t.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
