import type { MetadataRoute } from "next";
import { getProjects } from "@/api/projects.api";
import { getReferences } from "@/api/references.api";
import { ProjectsI } from "@/interfaces/project.interface";
import { ReferenceI } from "@/interfaces/reference.interface";

const BASE_URL = "https://elseady-space.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, references] = await Promise.all([
    getProjects(),
    getReferences(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/references`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map(
    (project: ProjectsI) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const referencePages: MetadataRoute.Sitemap = references.map(
    (reference: ReferenceI) => ({
      url: `${BASE_URL}/references/${reference.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticPages, ...projectPages, ...referencePages];
}
