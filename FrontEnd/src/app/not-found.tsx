import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100svh-4rem)] flex items-center py-16 md:py-24">
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="flex items-center justify-between border-b border-border pb-4 mb-10 md:mb-14">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground">
            404 / ERROR
          </p>

          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-muted-foreground">
            ELSEADY SPACE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-12 md:gap-16 items-end">
          <div>
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-accent mb-6">
              00 / PAGE NOT FOUND
            </p>

            <h1
              className="font-mono font-medium leading-[0.82] tracking-tighter text-foreground"
              style={{
                fontSize: "clamp(4.5rem, 14vw, 11rem)",
              }}
            >
              404
            </h1>

            <div className="mt-8 md:mt-10 max-w-md">
              <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                The page you're looking for doesn't exist, has been moved, or
                the address might be incorrect.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-8 md:mt-10 font-mono text-[10px] sm:text-xs tracking-[0.12em] text-foreground border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              <ArrowLeft size={13} />
              BACK TO HOME
            </Link>
          </div>

          <div className="border-t border-border pt-5 md:border-t-0 md:border-l md:pl-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive" />

              <span className="font-mono text-[10px] tracking-[0.15em] text-foreground">
                ROUTE UNAVAILABLE
              </span>
            </div>

            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.12em] text-muted-foreground leading-relaxed">
              REQUESTED RESOURCE
              <br />
              COULD NOT BE LOCATED.
            </p>

            <div className="mt-6 pt-5 border-t border-border">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                BROWSE PROJECTS
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-5 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-muted-foreground">
            DIAA ELDEEN
          </span>

          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-muted-foreground">
            FULL-STACK DEVELOPER · ALEXANDRIA, EGYPT
          </span>
        </div>
      </div>
    </main>
  );
}