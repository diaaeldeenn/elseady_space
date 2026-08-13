"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

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
        className="inline-flex size-9 items-center justify-center cursor-pointer text-foreground hover:text-accent transition-colors"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
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
          className="object-cover"
        />
      </Link>
    </div>
  );
}
