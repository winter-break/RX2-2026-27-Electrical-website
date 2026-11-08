import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RX2 | Solar Race Car",
  description: "Introduction to our solar race car build.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
