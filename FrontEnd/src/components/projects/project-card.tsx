"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectsI } from "@/interfaces/project.interface";

interface ProjectCardProps {
  project: ProjectsI;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      suppressHydrationWarning
      className="group relative bg-background overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
        transition-all duration-300
        outline-2 outline-transparent
        hover:outline-accent hover:shadow-[0_0_24px_0px_color-mix(in_srgb,var(--accent)_35%,transparent)]
        hover:z-10"
    >
      <div className="relative h-56 sm:h-64 overflow-hidden bg-muted">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-card flex items-center justify-center">
            <span className="font-mono text-xs text-muted-foreground tracking-widest">
              NO PREVIEW
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 px-2 py-0.5 bg-accent text-accent-foreground font-mono text-[9px] tracking-widest">
          {project.category}
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-7 h-7 bg-accent text-accent-foreground flex items-center justify-center">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border">
        <p className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground mb-1">
          {String(index + 1).padStart(2, "0")} /{" "}
          {project.category?.toUpperCase()}
        </p>
        <h2 className="font-mono text-sm sm:text-base font-medium tracking-tight text-foreground truncate">
          {project.title}
        </h2>

        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[9px] tracking-[0.08em] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="font-mono text-[9px] tracking-[0.08em] text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
