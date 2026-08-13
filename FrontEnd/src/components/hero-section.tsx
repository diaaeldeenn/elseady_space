"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const stack = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] md:h-[calc(100svh-4rem)] md:min-h-0 overflow-hidden flex items-center py-12 md:py-0">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-6 md:mb-0">
            01 / FULL-STACK DEVELOPER
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="flex flex-col justify-center min-w-0 order-2 md:order-1">
              <h1
                className=" font-mono font-medium leading-[0.88] tracking-tighter text-foreground"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                }}
              >
                DIAA
                <br />
                ELDEEN
              </h1>

              <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed mt-6 md:mt-8">
                Building modern web experiences across frontend and backend.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center font-mono text-[10px] sm:text-xs tracking-[0.12em] text-foreground border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                  VIEW PROJECTS
                </Link>

                <a
                  href="https://github.com/diaaeldeenn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <FaGithub size={13} />
                  GITHUB
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="https://www.linkedin.com/in/diaaelseady"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <FaLinkedinIn size={13} />
                  LINKEDIN
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="mailto:diaaelseady@gmail.com"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <HiOutlineMail size={14} />
                  EMAIL
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {stack.map((tech, i) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] sm:text-xs tracking-[0.08em] text-muted-foreground flex items-center"
                    >
                      {tech}

                      {i < stack.length - 1 && (
                        <span className="ml-4 text-border select-none">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 order-1 md:order-2">
              <div className="relative group rounded-none border border-border bg-card shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b border-border select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                    <Terminal size={12} />
                    <span>diaa.config.ts</span>
                  </div>
                </div>

                <div className="relative h-75 sm:h-90 md:h-100 w-full overflow-hidden bg-background">
                  <Image
                    src="/images/diaa-eldeen.jpg"
                    alt="Diaa Eldeen - Full-Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 300px, 360px"
                    className="object-cover object-center transition-all duration-700 grayscale-[0.7] contrast-110 group-hover:grayscale-0 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-background/90 backdrop-blur-md border border-border font-mono text-[9px] tracking-widest text-foreground">
                    ./alexandria.tsx
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 px-1">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>

                  <p className="font-mono text-[10px] tracking-[0.15em] text-foreground font-medium">
                    AVAILABLE FOR WORK
                  </p>
                </div>

                <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[12px] tracking-widest text-muted-foreground"
                    >
                      FULL-STACK
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}