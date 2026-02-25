import { NextResponse } from "next/server";
import { getProjectBySlug, getProjects } from "@/lib/projects";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug")?.trim();
  const featuredParam = searchParams.get("featured");
  const category = searchParams.get("category")?.trim().toLowerCase();

  if (slug) {
    const project = getProjectBySlug(slug);

    if (!project) {
      return NextResponse.json({ error: "Project not found." }, { status: 404 });
    }

    return NextResponse.json({ project });
  }

  let featured: boolean | undefined;

  if (featuredParam === "true") {
    featured = true;
  } else if (featuredParam === "false") {
    featured = false;
  }

  const projects = getProjects({ featured, category });

  return NextResponse.json({
    count: projects.length,
    projects,
  });
}
