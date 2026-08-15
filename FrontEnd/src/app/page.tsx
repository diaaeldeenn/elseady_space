import { getProfile } from "@/api/profile.api";
import HeroSection from "@/components/hero-section";
import WelcomePopup from "@/components/welcome-popup";
import { ProfileI } from "@/interfaces/profile.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diaa Eldeen | Full-Stack Developer",
  description:
    "Portfolio of Diaa Eldeen, a Full-Stack Developer specializing in React, Next.js, Node.js, and modern web development.",
};

export default async function Home() {
  const profile: ProfileI = await getProfile();
  return (
    <>
      <HeroSection profile={profile} />
      <WelcomePopup />
    </>
  );
}
