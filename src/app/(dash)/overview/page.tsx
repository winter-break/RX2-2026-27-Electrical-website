import OverviewCenter from "@/components/OverviewCenter";
import { OVERVIEW_LEFT, OVERVIEW_RIGHT, RACE_DAY_LABEL, RACE_DAY_VALUE } from "@/lib/dash";

export default function OverviewPage() {
  return (
    <main className="ov">
      {OVERVIEW_LEFT.map((title, i) => (
        <div key={`l${i}`} className={`card card-l${i + 1}`}>{title}</div>
      ))}
      <OverviewCenter />
      {OVERVIEW_RIGHT.map((title, i) => (
        <div key={`r${i}`} className={`card card-r${i + 1}`}>{title}</div>
      ))}
      <p className="ov-day">{RACE_DAY_LABEL} {RACE_DAY_VALUE}</p>
    </main>
  );
}
