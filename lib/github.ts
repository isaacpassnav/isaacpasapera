export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  homepage: string | null;
};

export async function getFeaturedRepos(username: string, limit = 4): Promise<GitHubRepo[]> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}&type=owner`,
    {
      headers,
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    return [];
  }

  const repos = (await response.json()) as GitHubRepo[];
  return repos.slice(0, limit);
}
