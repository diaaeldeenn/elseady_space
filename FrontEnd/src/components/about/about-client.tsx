"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  GraduationCap,
  BookOpen,
  Trophy,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ProfileI } from "@/interfaces/profile.interface";
import CvActions from "@/components/cv/cv-actions";

interface Props {
  profile: ProfileI;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

const staggerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, ease: "easeOut" as const },
  },
};

export default function AboutClient({ profile }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
      <div className="flex flex-col gap-12">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
          <p className="font-mono text-[10px] tracking-[0.15em] text-foreground mb-4">
            BIO
          </p>
          <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            {profile.bio}
          </p>
        </motion.div>

        {profile.education?.length > 0 && (
          <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={13} className="text-accent shrink-0" />
              <p className="font-mono text-[10px] tracking-[0.15em] text-foreground">
                EDUCATION
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerList}
              className="flex flex-col border border-border divide-y divide-border"
            >
              {profile.education.map((item, i) => (
                <motion.div key={i} variants={listItem} className="flex items-start gap-4 px-5 py-4">
                  <span className="font-mono text-[9px] text-accent shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {profile.courses?.length > 0 && (
          <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={13} className="text-accent shrink-0" />
              <p className="font-mono text-[10px] tracking-[0.15em] text-foreground">
                COURSES & CERTIFICATIONS
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerList}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
            >
              {profile.courses.map((course, i) => (
                <motion.div key={i} variants={listItem} className="flex items-start gap-3">
                  <span className="font-mono text-[9px] text-accent shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {course}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {profile.achievements?.length > 0 && (
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <Trophy size={13} className="text-accent shrink-0" />
              <p className="font-mono text-[10px] tracking-[0.15em] text-foreground">
                ACHIEVEMENTS
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerList}
              className="flex flex-col gap-3"
            >
              {profile.achievements.map((item, i) => (
                <motion.div key={i} variants={listItem} className="flex items-start gap-3">
                  <span className="font-mono text-[9px] text-accent shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      <div className="flex flex-col gap-8">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="border border-border p-5 flex flex-col gap-4"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground mb-1">
              NAME
            </p>
            <p className="font-mono text-sm text-foreground font-medium">
              {profile.name}
            </p>
          </div>

          <div className="w-full h-px bg-border" />

          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground mb-1">
              ROLE
            </p>
            <p className="font-mono text-sm text-foreground">{profile.title}</p>
          </div>

          <div className="w-full h-px bg-border" />

          <div className="flex items-center gap-2">
            <MapPin size={11} className="text-accent shrink-0" />
            <p className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground">
              {profile.location}
            </p>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col gap-3"
        >
          <p className="font-mono text-[10px] tracking-[0.15em] text-foreground">
            CURRICULUM VITAE
          </p>

          <CvActions cvUrl={profile.cv} variant="inline" />
        </motion.div>

        <div className="w-full h-px bg-border" />

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col gap-4"
        >
          <p className="font-mono text-[10px] tracking-[0.15em] text-foreground">
            GET IN TOUCH
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-accent border border-accent px-5 py-3 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 w-full justify-center sm:w-fit"
          >
            <Mail size={12} />
            CONTACT ME
            <ArrowUpRight size={11} />
          </Link>

          <div className="flex flex-col gap-3 pt-1">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <FaGithub size={13} />
                GITHUB
              </a>
            )}

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <FaLinkedin size={13} />
                LINKEDIN
              </a>
            )}

            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail size={13} />
                {profile.email}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}