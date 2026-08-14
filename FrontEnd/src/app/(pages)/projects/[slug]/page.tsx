import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectVideo from "@/components/projects/project-video";
import { SpeceficProjectI } from "@/interfaces/project.interface";
import { getSpeceficProject } from "@/api/projects.api";
import ProjectFeatures from "@/components/projects/project-features";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;
  const project: SpeceficProjectI = await getSpeceficProject(slug);

  if (!project) notFound();

  return (
    <section className="min-h-[calc(100svh-4rem)] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-200 mb-12"
        >
          <ArrowLeft size={12} />
          ALL PROJECTS
        </Link>

        <div className="mb-8">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-4">
            {project.category?.toUpperCase()}
          </p>
          <h1
            className="font-mono font-medium leading-[0.88] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {project.title}
          </h1>
        </div>

        <div className="border-t border-border mb-10" />

        {project.liveDemo && (
          <div className="mb-12">
            <ProjectVideo src={project.liveDemo} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-12">
          <div className="flex flex-col gap-8">
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {project.features?.length > 0 && (
              <div>
                <p className="font-mono text-[10px] tracking-[0.15em] text-foreground mb-4">
                  KEY FEATURES
                </p>
                <ProjectFeatures features={project.features} />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-8">
            {project.technologies?.length > 0 && (
              <div>
                <p className="font-mono text-[10px] tracking-[0.15em] text-foreground mb-4">
                  BUILT WITH
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground border border-border px-3 py-1.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-foreground border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-200 w-fit"
                >
                  LIVE SITE
                  <ArrowUpRight size={12} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit"
                >
                  <FaGithub size={13} />
                  SOURCE CODE
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
