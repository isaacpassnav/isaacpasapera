import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Proyectos</h1>
      <div className="mt-8 space-y-4">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-xl border border-slate-800 p-5">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-muted">{project.summary}</p>
            <Link className="mt-4 inline-block text-accent" href={`/projects/${project.slug}`}>
              Ver detalle →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
