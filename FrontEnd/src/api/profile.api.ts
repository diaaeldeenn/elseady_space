const api = process.env.NEXT_PUBLIC_API_URL;

export async function getProfile() {
  const response = await fetch(`${api}/profile`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data.data;
}
