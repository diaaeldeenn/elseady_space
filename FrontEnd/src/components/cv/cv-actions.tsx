"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Download, ChevronDown } from "lucide-react";
import Link from "next/link";
import { getCvDownloadUrl } from "@/utils/cv";

interface Props {
  cvUrl: string;
  variant?: "dropdown" | "inline";
  label?: string;
}

export default function CvActions({
  cvUrl,
  variant = "dropdown",
  label = "CV",
}: Props) {
  const [open, setOpen] = useState(false);

  const downloadUrl = getCvDownloadUrl(cvUrl);

  if (variant === "inline") {
    return (
      <div className="flex gap-4">
        <Link
          href="/cv"
          className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200 border border-border px-4 py-2.5"
        >
          <FileText size={12} />
          VIEW CV
        </Link>

        <a
          href={downloadUrl}
          download
          className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200 border border-border px-4 py-2.5"
        >
          <Download size={12} />
          DOWNLOAD CV
        </a>
      </div>
    );
  }

  return (
    <div className="relative">
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-50 font-mono text-xs tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
      >
        {label}

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="block"
        >
          <ChevronDown size={14} className="text-current" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-3 w-44 bg-card border border-border shadow-md z-50"
          >
            <Link
              href="/cv"
              onClick={() => setOpen(false)}
              className="w-full flex items-center gap-2.5 px-4 py-3 text-xs font-mono tracking-[0.08em] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150 border-b border-border"
            >
              <FileText size={13} />
              VIEW CV
            </Link>

            <a
              href={downloadUrl}
              download
              className="flex items-center gap-2.5 px-4 py-3 text-xs font-mono tracking-[0.08em] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150"
            >
              <Download size={13} />
              DOWNLOAD CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}