import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <main className="min-h-[calc(100svh-4rem)] flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="border-t border-border pt-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Spinner className="size-4 text-accent" />

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-foreground">
                  LOADING
                </span>

                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-muted-foreground">
                  FETCHING CONTENT...
                </span>
              </div>
            </div>

            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-muted-foreground">
              PLEASE WAIT
            </span>
          </div>

          <div className="mt-6 h-px w-full overflow-hidden bg-border">
            <div className="h-full w-1/3 bg-accent animate-[loading_1.4s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </main>
  );
}