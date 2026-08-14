import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReferenceI } from "@/interfaces/reference.interface";
import { getSpeceficReference } from "@/api/references.api";
import ReferenceDetailClient from "@/components/references/reference-detail-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ReferenceDetails({ params }: Props) {
  const { slug } = await params;
  const reference: ReferenceI = await getSpeceficReference(slug);

  if (!reference) notFound();

  return (
    <section className="min-h-[calc(100svh-4rem)] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/references"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-200 mb-12"
        >
          <ArrowLeft size={12} />
          ALL REFERENCES
        </Link>

        <div className="mb-8">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-4">
            DEVELOPER REFERENCE
          </p>
          <h1
            className="font-mono font-medium leading-[0.88] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {reference.title}
          </h1>
        </div>

        <div className="border-t border-border mb-10" />

        <ReferenceDetailClient reference={reference} />
      </div>
    </section>
  );
}