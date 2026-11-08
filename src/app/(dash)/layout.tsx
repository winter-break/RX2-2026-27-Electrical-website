import type { Metadata } from "next";
import Header from "@/components/Header";
import "./dash.css";

export const metadata: Metadata = { title: "RX2 Dashboard" };

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dash">
      <div className="stage">{children}</div>
      <Header />
    </div>
  );
}
