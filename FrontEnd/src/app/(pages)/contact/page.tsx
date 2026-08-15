import type { Metadata } from "next";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { getProfile } from "@/api/profile.api";
import { ProfileI } from "@/interfaces/profile.interface";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Diaa Eldeen, a Full-Stack Developer based in Alexandria, Egypt.",
};

export default async function ContactPage() {
  const profile: ProfileI = await getProfile();

  return (
    <section className="min-h-[calc(100svh-4rem)] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground mb-4">
            06 / GET IN TOUCH
          </p>

          <h1
            className="font-mono font-medium leading-[0.88] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            LET&apos;S
            <br />
            TALK
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed mt-6">
            Have a project in mind, a question, or just want to say hello? Send
            me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="border-t border-border mb-12 md:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          <aside className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] text-foreground mb-4">
                CONTACT
              </p>

              <div className="flex flex-col gap-4">
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-start gap-3"
                  >
                    <Mail size={14} className="text-accent mt-0.5 shrink-0" />

                    <span className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground group-hover:text-foreground transition-colors duration-200 break-all">
                      {profile.email}
                    </span>
                  </a>
                )}

                {profile.location && (
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-accent mt-0.5 shrink-0" />

                    <span className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground">
                      {profile.location}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[10px] tracking-[0.15em] text-foreground mb-4">
                SOCIAL
              </p>

              <div className="flex flex-col gap-3">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <FaGithub size={13} />
                    GITHUB
                    <ArrowUpRight
                      size={11}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}

                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <FaLinkedinIn size={13} />
                    LINKEDIN
                    <ArrowUpRight
                      size={11}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground leading-relaxed">
                AVAILABLE FOR FREELANCE
                <br />
                PROJECTS &amp; COLLABORATIONS
              </p>
            </div>
          </aside>

          <div className="max-w-2xl">
            <div className="mb-8">
              <p className="font-mono text-[10px] tracking-[0.15em] text-foreground">
                SEND A MESSAGE
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
