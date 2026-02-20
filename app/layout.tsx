import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Isaac Pasapera | Full Stack Developer",
  description: "Portfolio profesional con proyectos, experiencia y asistente IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="container-app py-10">{children}</main>
      </body>
    </html>
  );
}
