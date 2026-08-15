import { ContactSchemaType } from "@/utils/contact.schema";

const api = process.env.NEXT_PUBLIC_API_URL;

export async function sendMsg(form: ContactSchemaType) {
  const response = await fetch(`${api}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to send message");
  }

  return data;
}
