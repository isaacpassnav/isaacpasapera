import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Isaac Pasapera | Full Stack Developer",
  description:
    "Portfolio of Isaac Pasapera: full stack projects, engineering approach, and contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_42%),radial-gradient(circle_at_75%_25%,_rgba(56,189,248,0.12),_transparent_40%),linear-gradient(to_bottom,_#070b15,_#0a1020_45%,_#070b15)]" />
        <Navbar />
        <main className="container-app py-10 md:py-14">{children}</main>
      </body>
    </html>
  );
}
