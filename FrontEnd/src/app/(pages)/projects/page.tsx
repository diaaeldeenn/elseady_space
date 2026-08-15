import { getProjects } from "@/api/projects.api";
import ProjectsClient from "@/components/projects/projects-client";
import { ProjectsI } from "@/interfaces/project.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Diaa Eldeen across frontend and backend development, using React, Next.js, Node.js, and modern web technologies.",
};

export default async function Projects() {
  const projects: ProjectsI[] = await getProjects();

  return (
    <section className="min-h-[calc(100svh-4rem)] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-4">
            02 / PROJECTS
          </p>
          <h1
            className="font-mono font-medium leading-[0.88] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            SELECTED
            <br />
            PROJECTS
          </h1>
          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed mt-6">
            A collection of projects built across the full stack.
          </p>
        </div>

        <div className="border-t border-border mb-12" />

        <ProjectsClient projects={projects} />
      </div>
    </section>
  );
}
