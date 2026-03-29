export async function fetchReadme(owner: string, repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/readme`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_GITHUB_TOKEN}`,
      },
      cache: "no-store", // or 'force-cache' for ISR
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch README");
  }

  const data = await res.json();

  // Decode Base64
 const markdown = decodeURIComponent(
  escape(atob(data.content))
);

  return markdown;
}
