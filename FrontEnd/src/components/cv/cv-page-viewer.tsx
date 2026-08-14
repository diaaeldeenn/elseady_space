"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Download,
  Mail,
  MapPin,
  ArrowUpRight,
  FileWarning,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ProfileI } from "@/interfaces/profile.interface";
import { getCvDownloadUrl } from "@/utils/cv";

interface Props {
  profile: ProfileI;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

export default function CvPageViewer({ profile }: Props) {
  const downloadUrl = getCvDownloadUrl(profile.cv);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col gap-8 lg:order-1 order-2"
      >
        <div className="border border-border p-5 flex flex-col gap-4">
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground mb-1">
              NAME
            </p>
            <p className="font-mono text-sm text-foreground font-medium">
              {profile.name}
            </p>
          </div>

          <div className="w-full h-px bg-border" />

          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground mb-1">
              ROLE
            </p>
            <p className="font-mono text-sm text-foreground">{profile.title}</p>
          </div>

          <div className="w-full h-px bg-border" />

          <div className="flex items-center gap-2">
            <MapPin size={11} className="text-accent shrink-0" />
            <p className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground">
              {profile.location}
            </p>
          </div>
        </div>

        <a
          href={downloadUrl}
          download
          className="group inline-flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.15em] text-foreground border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-200 w-full"
        >
          <Download size={13} />
          DOWNLOAD CV
          <ArrowUpRight
            size={11}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <div className="flex flex-col gap-3 pt-4 border-t border-border">
          <p className="font-mono text-[10px] tracking-[0.15em] text-foreground mb-1">
            CONNECT
          </p>

          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail size={13} />
              {profile.email}
            </a>
          )}

          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <FaGithub size={13} />
              GITHUB
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <FaLinkedin size={13} />
              LINKEDIN
            </a>
          )}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-accent border border-accent px-5 py-3 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 w-full"
        >
          GET IN TOUCH
          <ArrowUpRight size={11} />
        </Link>
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col gap-4 lg:order-2 order-1"
      >
        <div className="flex lg:hidden flex-col items-center justify-center gap-4 px-6 text-center border border-border bg-muted/20 min-h-125">
          <FileText size={24} className="text-muted-foreground" />
          <p className="font-mono text-xs tracking-widest text-muted-foreground max-w-xs">
            PDF PREVIEW ISN&apos;T AVAILABLE ON MOBILE
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://docs.google.com/viewer?url=${encodeURIComponent(
                profile.cv,
              )}&embedded=true`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-foreground border border-foreground px-5 py-3 bg-background hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              <FileText size={12} />
              OPEN CV
            </a>

            <a
              href={downloadUrl}
              download
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-muted-foreground border border-border px-5 py-3 bg-background hover:text-foreground transition-colors duration-200"
            >
              <Download size={12} />
              DOWNLOAD
            </a>
          </div>
        </div>

        <div className="hidden lg:block border border-border bg-muted/20 overflow-hidden h-[70svh] sm:h-[calc(100svh-260px)] min-h-125">
          <object
            data={profile.cv}
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
              <FileWarning size={24} className="text-muted-foreground" />
              <p className="font-mono text-xs tracking-widest text-muted-foreground max-w-xs">
                PDF PREVIEW ISN&apos;T SUPPORTED ON THIS DEVICE
              </p>

              <a
                href={downloadUrl}
                download
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-foreground border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                <Download size={12} />
                DOWNLOAD INSTEAD
              </a>
            </div>
          </object>
        </div>
      </motion.div>
    </div>
  );
}
