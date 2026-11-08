import { redirect } from "next/navigation";

export default async function DayIndex({ params }: { params: Promise<{ day: string }> }) {
  const { day } = await params;
  redirect(`/day/${day}/data`);
}
