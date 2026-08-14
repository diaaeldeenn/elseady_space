"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BookOpen, Hash } from "lucide-react";
import { ReferenceI } from "@/interfaces/reference.interface";

interface Props {
  reference: ReferenceI;
}

export default function ReferenceDetailClient({ reference }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-12">
      <div className="flex flex-col gap-10">
        {reference.thumbnail && (
          <div className="relative w-full overflow-hidden">
            <Image
              src={reference.thumbnail}
              alt={reference.title}
              width={1200}
              height={630}
              priority
              sizes="(max-width: 768px) 100vw, 672px"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
          {reference.description}
        </p>

        {reference.sessionsCount > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="font-mono text-[10px] tracking-[0.15em] text-foreground">
                SESSIONS
              </p>

              <span className="font-mono text-[10px] tracking-widest text-accent">
                {reference.sessionsCount} TOTAL
              </span>
            </div>

            <div className="flex flex-col border border-border divide-y divide-border">
              {Array.from({ length: reference.sessionsCount }, (_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-4 px-5 py-4"
                >
                  <span className="font-mono text-[9px] text-accent shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-mono text-[11px] tracking-[0.12em] text-foreground">
                    SESSION {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {reference.topics?.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="font-mono text-[10px] tracking-[0.15em] text-foreground">
                IMPORTANT TOPICS
              </p>

              <span className="font-mono text-[10px] tracking-widest text-accent">
                {reference.topics.length} TOPICS
              </span>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
            >
              {reference.topics.map((topic) => (
                <motion.div
                  key={topic}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 8,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.35,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="flex items-start gap-3"
                >
                  <Hash size={9} className="text-accent mt-1 shrink-0" />

                  <span className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {topic}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-8">
        {reference.technologies?.length > 0 && (
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-foreground mb-4">
              BUILT WITH
            </p>

            <div className="flex flex-wrap gap-2">
              {reference.technologies.map((tech) => (
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

        <div>
          <p className="font-mono text-[10px] tracking-[0.15em] text-foreground mb-4">
            OVERVIEW
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BookOpen size={12} className="text-accent shrink-0" />

              <div>
                <p className="font-mono text-[9px] tracking-widest text-muted-foreground">
                  SESSIONS
                </p>

                <p className="font-mono text-sm text-foreground">
                  {reference.sessionsCount}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Hash size={12} className="text-accent shrink-0" />

              <div>
                <p className="font-mono text-[9px] tracking-widest text-muted-foreground">
                  TOPICS
                </p>

                <p className="font-mono text-sm text-foreground">
                  {reference.topics?.length ?? 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        {reference.githubUrl && (
          <div className="pt-4 border-t border-border">
            <a
              href={reference.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-foreground border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-200 w-fit"
            >
              <FaGithub size={13} />
              VIEW ON GITHUB
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
