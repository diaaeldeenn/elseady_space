const api = process.env.NEXT_PUBLIC_API_URL;

export async function getProjects() {
  const response = await fetch(`${api}/projects`, {
    next: { revalidate: 3600 },
  });
  const data = await response.json();
  return data.data;
}

export async function getSpeceficProject(slug: string) {
  const response = await fetch(`${api}/projects/${slug}`);
  const data = await response.json();
  return data.data;
}
