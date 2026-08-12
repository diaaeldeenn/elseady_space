import * as z from "zod";

export const ContactSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters"),

  email: z.email("Please provide a valid email address"),

  message: z
    .string({ message: "Message is required" })
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message cannot exceed 1000 characters"),

  subject: z
    .string({ message: "Subject is required" })
    .min(3, "Subject must be at least 3 characters long")
    .max(100, "Subject cannot exceed 100 characters"),
});

export type ContactDto = z.infer<typeof ContactSchema>;
