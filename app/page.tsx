import Link from "next/link";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">Full Stack Developer</p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
        Hi, I'm Isaac Pasapera
      </h1>
      <p className="max-w-2xl text-muted">
        This MVP portfolio is built with Next.js, Tailwind CSS and deployed on Vercel and implement IA agent. It features a clean architecture, fast performance and a responsive design. Check out my projects and contact me if you want to work together!
      </p>
      <div className="flex gap-4">
        <Link className="rounded-lg bg-accent px-5 py-2.5 font-semibold text-slate-900" href="/projects">
          Ver proyectos
        </Link>
        <Link className="rounded-lg border border-slate-700 px-5 py-2.5 font-semibold" href="/contact">
          Trabajemos juntos
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-xl border border-slate-800 p-5">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-muted">{project.summary}</p>
            <p className="mt-3 text-xs text-accent">{project.tech.join(" · ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
