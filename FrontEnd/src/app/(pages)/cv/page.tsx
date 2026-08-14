import type { Metadata } from "next";
import { getProfile } from "@/api/profile.api";
import { ProfileI } from "@/interfaces/profile.interface";
import CvPageViewer from "@/components/cv/cv-page-viewer";

export const metadata: Metadata = {
  title: "CV | Diaa Eldeen",
  description: "View Diaa Eldeen's CV.",
};

export default async function CvPage() {
  const profile: ProfileI = await getProfile();

  return (
    <section className="min-h-[calc(100svh-4rem)] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-4">
            05 / CURRICULUM VITAE
          </p>
          <h1
            className="font-mono font-medium leading-[0.88] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            MY
            <br />
            RESUME
          </h1>
          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed mt-6">
            {profile.title} based in {profile.location}. Preview or download the
            full CV below.
          </p>
        </div>

        <div className="border-t border-border mb-12" />

        <CvPageViewer profile={profile} />
      </div>
    </section>
  );
}
