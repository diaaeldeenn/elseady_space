import { getProfile } from "@/api/profile.api";
import { ProfileI } from "@/interfaces/profile.interface";
import AboutClient from "@/components/about/about-client";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Diaa Eldeen, a Full-Stack Developer focused on building modern web applications with React, Next.js, Node.js, and TypeScript.",
};


export default async function About() {
  const profile: ProfileI = await getProfile();

  return (
    <section className="min-h-[calc(100svh-4rem)] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-4">
            04 / ABOUT
          </p>
          <h1
            className="font-mono font-medium leading-[0.88] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            ABOUT
            <br />
            ME
          </h1>
          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed mt-6">
            A little about who I am, what I do, and how I got here.
          </p>
        </div>

        <div className="border-t border-border mb-12" />

        <AboutClient profile={profile} />
      </div>
    </section>
  );
}