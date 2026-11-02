import type { Metadata } from "next";
import "@fontsource/poppins/700-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "RX2 | Racer X²",
  description: "Racer X² solar race car.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
