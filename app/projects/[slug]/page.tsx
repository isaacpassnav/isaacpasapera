import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-5">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Case Study {project.year}</p>
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="max-w-3xl text-muted">{project.summary}</p>
      <p className="text-sm text-slate-300">Tech stack: {project.tech.join(", ")}</p>
      <a
        className="button-secondary"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        Open demo
      </a>
    </article>
  );
}
