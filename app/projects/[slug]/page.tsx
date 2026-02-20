import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-muted">{project.summary}</p>
      <p className="text-sm text-accent">Tecnologías: {project.tech.join(", ")}</p>
      <a className="inline-block rounded-lg border border-slate-700 px-4 py-2" href={project.href} target="_blank">
        Ver demo
      </a>
    </article>
  );
}
