import { getProfile } from "@/api/profile.api";
import HeroSection from "@/components/hero-section";
import { ProfileI } from "@/interfaces/profile.interface";

export default async function Home() {
  const profile: ProfileI = await getProfile();
  return (
    <>
    <HeroSection profile={profile}/>
    </>
  );
}
