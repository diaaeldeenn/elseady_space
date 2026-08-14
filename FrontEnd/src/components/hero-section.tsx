"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal, Download, FileText } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ProfileI } from "@/interfaces/profile.interface";
import { motion, Variants } from "framer-motion";
import { getCvDownloadUrl } from "@/utils/cv";

const stack = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const techContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const techItemVariants: Variants = {
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
};

interface HeroSectionProps {
  profile: ProfileI;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  const [firstName, ...restName] = profile.name.split(" ");
  const lastName = restName.join(" ");
  const downloadUrl = getCvDownloadUrl(profile.cv);

  return (
    <section className="relative min-h-[calc(100svh-4rem)] md:h-[calc(100svh-6rem)] md:min-h-0 overflow-hidden flex items-center py-10 md:py-0">
      <motion.div
        className="max-w-6xl mx-auto px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center">
          <motion.p
            variants={fadeUp}
            className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-6 md:mb-0"
          >
            01 / {profile.title.toUpperCase()}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              variants={containerVariants}
              className="flex flex-col justify-center min-w-0 order-2 md:order-1"
            >
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-mono font-medium leading-[0.88] tracking-tighter text-foreground"
                  style={{
                    fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  }}
                >
                  {firstName}
                  <br />
                  {lastName}
                </motion.h1>
              </div>

              <motion.p
                variants={fadeUp}
                className="font-sans text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed mt-5 md:mt-6"
              >
                {profile.bio}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3 mt-5 md:mt-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/cv"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-[0.12em] text-foreground border border-border px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
                  >
                    <FileText size={13} />
                    VIEW CV
                  </Link>

                  <a
                    href={downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-[0.12em] text-muted-foreground border border-border px-5 py-3 hover:text-foreground hover:bg-muted transition-colors duration-200"
                  >
                    <Download size={13} />
                    DOWNLOAD CV
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center font-mono text-[10px] sm:text-xs tracking-[0.12em] text-foreground border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
                  >
                    VIEW PROJECTS
                  </Link>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <FaGithub size={13} />
                    GITHUB
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <FaLinkedinIn size={13} />
                    LINKEDIN
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <HiOutlineMail size={14} />
                    EMAIL
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-6 pt-5 border-t border-border"
              >
                <motion.div
                  variants={techContainerVariants}
                  className="flex flex-wrap gap-x-4 gap-y-2"
                >
                  {stack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      variants={techItemVariants}
                      className="font-mono text-[10px] sm:text-xs tracking-[0.08em] text-muted-foreground flex items-center"
                    >
                      {tech}

                      {i < stack.length - 1 && (
                        <span className="ml-4 text-border select-none">
                          ·
                        </span>
                      )}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="flex flex-col gap-4 order-1 md:order-2"
            >
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

                <div className="relative h-75 sm:h-90 md:h-90 w-full overflow-hidden bg-background">
                  <Image
                    src="/images/diaa-eldeen.jpg"
                    alt={`${profile.name} - ${profile.title}`}
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

                <span className="font-mono text-[12px] tracking-widest text-muted-foreground">
                  FULL-STACK
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}