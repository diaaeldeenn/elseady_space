"use client";

import { useEffect } from "react";
import { RefreshCcw, TriangleAlert } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="w-full max-w-xl text-center">
        <div className="inline-flex items-center justify-center size-12 border border-border mb-8">
          <TriangleAlert className="size-5 text-accent" />
        </div>

        <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-4">
          ERROR / SOMETHING WENT WRONG
        </p>

        <h1
          className="font-mono font-medium leading-[0.9] tracking-tighter"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          UNEXPECTED
          <br />
          ERROR
        </h1>

        <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed mt-6">
          Something went wrong while loading this page. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 mt-8 px-5 py-3 border border-foreground font-mono text-[10px] sm:text-xs tracking-[0.12em] text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
        >
          <RefreshCcw size={13} />
          TRY AGAIN
        </button>
      </div>
    </main>
  );
}
