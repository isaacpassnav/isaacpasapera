export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  href: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    summary:
      "Personal platform with technical storytelling, API integrations, and production-ready UX.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://example.com",
    year: "2026",
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    summary:
      "Metrics and KPI dashboard with role-based access, real-time cards, and PostgreSQL persistence.",
    tech: ["React", "Node.js", "PostgreSQL"],
    href: "https://example.com",
    year: "2025",
  },
  {
    slug: "ai-support-assistant",
    title: "AI Support Assistant",
    summary:
      "AI assistant endpoint with domain prompts, latency controls, and human handoff patterns.",
    tech: ["Next.js", "OpenAI API", "REST"],
    href: "https://example.com",
    year: "2025",
  },
];
