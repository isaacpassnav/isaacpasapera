import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Projects</p>
        <h1 className="text-4xl font-bold">Selected Product and Engineering Work</h1>
        <p className="max-w-3xl text-muted">
          Portfolio projects focused on performance, clean architecture, and production standards.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="card p-5">
            <p className="text-xs text-slate-400">{project.year}</p>
            <h2 className="mt-2 text-xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-sm text-muted">{project.summary}</p>
            <p className="mt-4 text-xs text-accent">{project.tech.join(" | ")}</p>
            <Link className="mt-5 inline-block text-sm font-medium text-cyan-200 hover:text-cyan-100" href={`/projects/${project.slug}`}>
              Read case study
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
