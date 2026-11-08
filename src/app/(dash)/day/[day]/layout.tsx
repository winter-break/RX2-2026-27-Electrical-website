import { notFound } from "next/navigation";
import DayTabs from "@/components/DayTabs";

export default async function DayLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const n = Number(day);
  if (!Number.isInteger(n) || n < 1 || n > 5) notFound();
  return (
    <main className="day">
      <DayTabs day={n} />
      {children}
    </main>
  );
}
