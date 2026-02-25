import { AskAi } from "@/components/ask-ai";
import { HomeFeatured } from "@/components/home-featured";
import { HomeHero } from "@/components/home-hero";
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
        <HomeHero />
        <AskAi />
      </section>
      <HomeFeatured items={featuredItems} />
    </section>
  );
}
