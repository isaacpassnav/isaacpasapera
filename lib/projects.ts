export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  href: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-mvp",
    title: "Portfolio MVP",
    summary: "Diseño moderno con animaciones suaves y SEO técnico.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://example.com",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    summary: "Panel de métricas con autenticación y persistencia en PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL"],
    href: "https://example.com",
  },
];
