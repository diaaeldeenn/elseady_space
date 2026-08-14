"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { ReferenceI } from "@/interfaces/reference.interface";
import { motion } from "framer-motion";

interface ReferenceCardProps {
  reference: ReferenceI;
  index: number;
}

export default function ReferenceCard({
  reference,
  index,
}: ReferenceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
    >
      <Link
        href={`/references/${reference.slug}`}
        className="group flex flex-col sm:flex-row gap-6 sm:gap-0 py-8 transition-colors duration-200 hover:bg-muted/30 px-2 -mx-2 items-center sm:items-start"
      >
  
        <div className="shrink-0 w-full sm:w-56 mb-2 sm:mb-0 sm:mr-8 self-center">
          <div className="relative w-full overflow-hidden bg-transparent">
            {reference.thumbnail ? (
              <Image
                src={reference.thumbnail}
                alt={reference.title}
                width={600}
                height={338}
                loading="eager"
                sizes="(max-width: 640px) 100vw, 224px"
                className="w-full h-auto object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="w-full aspect-video bg-card flex items-center justify-center">
                <BookOpen size={20} className="text-muted-foreground" />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-between gap-4 w-full">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground mb-2">
                {String(index + 1).padStart(2, "0")} / REFERENCE
              </p>
              <h2 className="font-mono text-base sm:text-lg font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                {reference.title}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 font-mono text-[10px] tracking-[0.12em] text-accent bg-accent/10 px-3 py-1.5 h-fit">
              <BookOpen size={10} />
              {reference.sessionsCount} SESSION
              {reference.sessionsCount !== 1 ? "S" : ""}
            </div>
          </div>

          <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {reference.description}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {reference.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9px] tracking-widest text-muted-foreground border border-border px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {reference.topics?.length > 0 && (
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {reference.topics.slice(0, 4).map((topic) => (
                    <span
                      key={topic}
                      className="font-mono text-[9px] tracking-[0.08em] text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                  {reference.topics.length > 4 && (
                    <span className="font-mono text-[9px] tracking-[0.08em] text-muted-foreground">
                      +{reference.topics.length - 4} more
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-muted-foreground group-hover:text-foreground transition-colors duration-200 shrink-0">
              VIEW REFERENCE
              <ArrowUpRight
                size={12}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}