const api = process.env.NEXT_PUBLIC_API_URL;

export async function getReferences() {
  const response = await fetch(`${api}/references`, {
    next: { revalidate: 3600 },
  });
  const data = await response.json();
  return data.data;
}

export async function getSpeceficReference(slug: string) {
  const response = await fetch(`${api}/references/${slug}`);
  const data = await response.json();
  return data.data;
}
