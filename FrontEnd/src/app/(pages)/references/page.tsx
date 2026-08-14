import { getReferences } from "@/api/references.api";
import ReferencesClient from "@/components/references/references-client";
import { ReferenceI } from "@/interfaces/reference.interface";

export default async function References() {
  const references: ReferenceI[] = await getReferences();

  return (
    <section className="min-h-[calc(100svh-4rem)] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-4">
            03 / REFERENCES
          </p>
          <h1
            className="font-mono font-medium leading-[0.88] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            DEVELOPER
            <br />
            REFERENCES
          </h1>
          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed mt-6">
            Structured technical references covering the technologies I work
            with, organized by sessions and topics.
          </p>
        </div>

        <div className="border-t border-border mb-12" />

        <ReferencesClient references={references} />
      </div>
    </section>
  );
}