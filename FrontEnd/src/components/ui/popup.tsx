"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface PopupProps {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  description: string;
}

export default function Popup({
  open,
  onClose,
  eyebrow,
  title,
  description,
}: PopupProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.97 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-xs border border-border bg-background shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-border px-3.5 py-2.5">
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close popup"
              className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
            >
              <X size={15} />
            </button>
          </div>

          <div className="p-4">
            <h2 className="font-mono text-sm font-medium tracking-tight text-foreground">
              {title}
            </h2>

            <p className="mt-1.5 font-sans text-xs leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
