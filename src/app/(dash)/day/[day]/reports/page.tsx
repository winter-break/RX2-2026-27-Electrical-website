export default async function ReportsPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = await params;
  return <p className="day-empty">Reports for Day {day} is coming soon.</p>;
}
