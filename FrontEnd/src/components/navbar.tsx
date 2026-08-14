"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import CvActions from "@/components/cv/cv-actions";

const navLinks = [
  { label: "PROJECTS", href: "/projects" },
  { label: "REFERENCES", href: "/references" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

interface NavbarProps {
  cvUrl: string;
}

export default function Navbar({ cvUrl }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-[0.15em] text-foreground hover:text-accent transition-colors duration-200"
          >
            DIAA ELDEEN
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-mono text-xs tracking-[0.12em] transition-colors duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="block h-px bg-accent mt-0.5" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <CvActions cvUrl={cvUrl} variant="dropdown" label="CV" />
            <span className="w-px h-4 bg-border" />
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-9 items-center justify-center text-foreground"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col"
          >
            <div className="h-16 border-b border-border" />

            <div className="flex-1 flex flex-col justify-center px-6">
              <ul className="space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block py-4 border-b border-border font-mono text-2xl tracking-widest transition-colors duration-200 ${
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}

                <motion.li
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + navLinks.length * 0.06,
                    duration: 0.3,
                  }}
                  className="pt-8"
                >
                  <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-4">
                    CV
                  </p>
                  <CvActions cvUrl={cvUrl} variant="inline" />
                </motion.li>
              </ul>
            </div>

            <div className="px-6 pb-8 border-t border-border pt-6">
              <p className="font-mono text-xs tracking-[0.12em] text-muted-foreground">
                FULL-STACK DEVELOPER · ALEXANDRIA, EGYPT
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}