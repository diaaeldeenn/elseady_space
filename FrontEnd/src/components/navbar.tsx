"use client";

import {  useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu, FileText, Download, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

const navLinks = [
  { label: "PROJECTS", href: "/projects" },
  { label: "REFERENCES", href: "/references" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setCvOpen(false);
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
            <div className="relative">
              {cvOpen && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setCvOpen(false)}
                />
              )}
              <button
                onClick={() => setCvOpen((prev) => !prev)}
                className="relative z-50 font-mono text-xs tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5"
              >
                CV
                <motion.span
                  animate={{ rotate: cvOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <ChevronDown size={14} className="text-current" />
                </motion.span>
              </button>

              <AnimatePresence>
                {cvOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-3 w-44 bg-card border border-border shadow-md z-50"
                  >
                    <Link
                      href="/cv"
                      className="flex items-center gap-2.5 px-4 py-3 text-xs font-mono tracking-[0.08em] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150 border-b border-border"
                    >
                      <FileText size={13} />
                      VIEW CV
                    </Link>
                    <a
                      href="/cv/Diaa-Eldeen-CV.pdf"
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
                  transition={{ delay: 0.1 + navLinks.length * 0.06, duration: 0.3 }}
                  className="pt-8"
                >
                  <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-4">
                    CV
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="/cv"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200 border border-border px-4 py-2.5"
                    >
                      <FileText size={12} />
                      VIEW
                    </Link>
                    <a
                      href="/cv/Diaa-Eldeen-CV.pdf"
                      download
                      className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200 border border-border px-4 py-2.5"
                    >
                      <Download size={12} />
                      DOWNLOAD
                    </a>
                  </div>
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