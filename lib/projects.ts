export const PROJECT_CATEGORIES = ["fullstack", "backend", "frontend", "ai", "product"] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type ProjectStatus = "production" | "active" | "archive";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  highlights: string[];
  href: string;
  repoUrl?: string;
  liveUrl?: string;
  year: string;
  featured: boolean;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    slug: "appointment-system",
    title: "appointment-system",
    summary: "Scheduling workflow with booking validation, persistence, and availability rules.",
    description:
      "Appointment management platform focused on backend reliability for booking, schedule control, and service-based workflows.",
    category: "backend",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    highlights: ["Appointment CRUD", "Availability validation", "Structured API routes"],
    href: "https://github.com/isaacpassnav/appointment-system",
    repoUrl: "https://github.com/isaacpassnav/appointment-system",
    liveUrl: "https://appointment-system-web-delta.vercel.app/",
    year: "2025",
    featured: true,
    status: "active",
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    summary: "Commerce flows with cart, products, and checkout-oriented architecture.",
    description:
      "E-commerce implementation that prioritizes scalable domain modeling for products, shopping flows, and ordering operations.",
    category: "fullstack",
    tech: ["JavaScript", "React", "Node.js", "API Integration"],
    highlights: ["Catalog and cart flows", "Order path modeling", "Reusable UI components"],
    href: "https://github.com/isaacpassnav/E-commerce",
    repoUrl: "https://github.com/isaacpassnav/E-commerce",
    liveUrl: "https://e-commerce-delta-flax-84.vercel.app/login",
    year: "2025",
    featured: true,
    status: "active",
  },
  {
    slug: "m02paginaweb",
    title: "M02PaginaWeb",
    summary: "Web project with structured frontend layout and component organization.",
    description:
      "Foundational web project used to practice clean page composition, responsive structure, and maintainable styling patterns.",
    category: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: ["Responsive layout", "Semantic sections", "Component-oriented structure"],
    href: "https://github.com/isaacpassnav/M02PaginaWeb",
    repoUrl: "https://github.com/isaacpassnav/M02PaginaWeb",
    liveUrl: "https://m02-pagina-web.vercel.app/",
    year: "2024",
    featured: false,
    status: "archive",
  },
  {
    slug: "fws-isaac",
    title: "FWS-isaac",
    summary: "Full web solution focused on practical delivery and incremental architecture.",
    description:
      "Project centered on delivering complete web experiences while balancing backend logic, frontend implementation, and deployment readiness.",
    category: "fullstack",
    tech: ["JavaScript", "Node.js", "Responsive Design"],
    highlights: ["End-to-end structure", "Iterative feature delivery", "Production mindset"],
    href: "https://github.com/isaacpassnav/FWS-isaac",
    repoUrl: "https://github.com/isaacpassnav/FWS-isaac",
    liveUrl: "https://fws-isaac.vercel.app/",
    year: "2024",
    featured: false,
    status: "archive",
  },
  {
    slug: "wdd430-project",
    title: "wdd430-project",
    summary: "Backend-oriented coursework project with routing and data management patterns.",
    description:
      "Full stack learning project emphasizing controller structure, data workflows, and practical API behavior.",
    category: "backend",
    tech: ["Node.js", "Express", "MongoDB"],
    highlights: ["Route controllers", "Data persistence", "Validation basics"],
    href: "https://github.com/isaacpassnav/wdd430-project",
    repoUrl: "https://github.com/isaacpassnav/wdd430-project",
    liveUrl: "https://wdd430-project-five.vercel.app/home",
    year: "2024",
    featured: true,
    status: "active",
  },
  {
    slug: "concerts-events-finder-app",
    title: "Concerts-Events-Finder-App",
    summary: "Event discovery app integrating external APIs and filtered search UX.",
    description:
      "Application designed for discovering events and concerts with API-driven data, query-based filtering, and responsive presentation.",
    category: "fullstack",
    tech: ["React", "API Integration", "JavaScript", "CSS"],
    highlights: ["External events API", "Search and filtering", "Responsive cards"],
    href: "https://github.com/isaacpassnav/Concerts-Events-Finder-App",
    repoUrl: "https://github.com/isaacpassnav/Concerts-Events-Finder-App",
    liveUrl: "https://isaacpassnav.github.io/Concerts-Events-Finder-App/",
    year: "2025",
    featured: true,
    status: "active",
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    summary: "Personal platform with technical storytelling, API integrations, and production-ready UX.",
    description:
      "Portfolio app that consolidates projects, contact workflows, and AI-assisted recruiter Q&A in a production-oriented Next.js stack.",
    category: "product",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: ["Server routes", "Typed project catalog", "Deploy-ready setup"],
    href: "https://example.com",
    year: "2026",
    featured: true,
    status: "production",
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    summary:
      "Metrics and KPI dashboard with role-based access, real-time cards, and PostgreSQL persistence.",
    description:
      "Dashboard prototype focused on product analytics with backend persistence, segmented data views, and role-aware access.",
    category: "fullstack",
    tech: ["React", "Node.js", "PostgreSQL"],
    highlights: ["KPI modules", "Role-aware interface", "Data persistence"],
    href: "https://example.com",
    year: "2025",
    featured: false,
    status: "active",
  },
  {
    slug: "ai-support-assistant",
    title: "AI Support Assistant",
    summary: "AI assistant endpoint with domain prompts, latency controls, and human handoff patterns.",
    description:
      "Support assistant concept for handling domain-specific Q&A with well-structured prompts and API-response safety checks.",
    category: "ai",
    tech: ["Next.js", "OpenAI API", "REST"],
    highlights: ["Prompt design", "Error handling", "Domain response constraints"],
    href: "https://example.com",
    year: "2025",
    featured: false,
    status: "active",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  const normalizedSlug = slug.trim().toLowerCase();
  return projects.find((project) => project.slug === normalizedSlug);
}

export function getProjects(options?: {
  featured?: boolean;
  category?: string;
}): Project[] {
  const category = options?.category?.trim().toLowerCase();

  return projects.filter((project) => {
    if (typeof options?.featured === "boolean" && project.featured !== options.featured) {
      return false;
    }

    if (category && project.category !== category) {
      return false;
    }

    return true;
  });
}

export function buildProjectsPromptContext(): string {
  return projects
    .map((project) => {
      const highlights = project.highlights.join(", ");
      return `- ${project.title} (${project.year}) [${project.category}] :: ${project.summary} | Tech: ${project.tech.join(", ")} | Highlights: ${highlights}`;
    })
    .join("\n");
}
