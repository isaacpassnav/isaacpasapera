import Link from "next/link";
import { AskAi } from "@/components/ask-ai";
import { getFeaturedRepos } from "@/lib/github";
import { projects } from "@/lib/projects";

export default async function HomePage() {
  const repos = await getFeaturedRepos("isaacpasapera", 3);

  const featuredItems = repos.length
    ? repos.map((repo) => ({
        key: String(repo.id),
        title: repo.name,
        summary: repo.description ?? "No description provided yet.",
        tech: [repo.language ?? "General", `${repo.stargazers_count} stars`],
        href: repo.html_url,
      }))
    : projects.slice(0, 3).map((project) => ({
        key: project.slug,
        title: project.title,
        summary: project.summary,
        tech: project.tech,
        href: `/projects/${project.slug}`,
      }));

  return (
    <section className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Full Stack Developer</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            I build fast, reliable products with clean architecture.
          </h1>
          <p className="max-w-2xl text-base text-muted md:text-lg">
            I am Isaac Pasapera, a full stack developer focused on production quality, rapid iteration,
            and clear product outcomes. I work with modern web technologies to ship solutions that are
            scalable and maintainable.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="button-primary" href="/projects">
              Explore projects
            </Link>
            <Link className="button-secondary" href="/contact">
              Let us work together
            </Link>
          </div>
        </div>

        <AskAi />
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Featured Work</h2>
          <Link href="/projects" className="text-sm text-accent hover:text-cyan-300">
            View all projects
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredItems.map((item) => (
            <article key={item.key} className="card flex h-full flex-col p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted">{item.summary}</p>
              <p className="mt-4 text-xs text-accent">{item.tech.join(" | ")}</p>
              <a
                className="mt-5 inline-flex items-center text-sm font-medium text-cyan-200 hover:text-cyan-100"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                Open project
              </a>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
