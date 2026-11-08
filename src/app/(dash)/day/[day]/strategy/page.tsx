export default async function StrategyPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = await params;
  return <p className="day-empty">Strategy for Day {day} is coming soon.</p>;
}
