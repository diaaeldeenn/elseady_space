"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8" />
        <button
          type="button"
          aria-label="Toggle theme"
          className="inline-flex size-9 items-center justify-center"
        />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="inline-flex size-9 items-center justify-center cursor-pointer text-foreground hover:text-accent transition-colors relative overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ y: -15, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 15, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute flex items-center justify-center"
            >
              <Sun size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ y: -15, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 15, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute flex items-center justify-center"
            >
              <Moon size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <Link
        href="/"
        className="relative block w-8 h-8 overflow-hidden rounded-full transition-transform hover:scale-105"
      >
        <Image
          src={isDark ? "/images/Logo.png" : "/images/Logonon.png"}
          alt="Diaa Eldeen Logo"
          fill
          sizes="32px"
          className="object-cover transition-opacity duration-300"
        />
      </Link>
    </div>
  );
}