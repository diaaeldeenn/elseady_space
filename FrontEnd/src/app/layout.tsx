import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getProfile } from "@/api/profile.api";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diaa Eldeen | Full-Stack Developer",
  description:
    "Portfolio of Diaa Eldeen, a Full-Stack Developer based in Alexandria, Egypt.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const profile = await getProfile();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased pt-17.5">
        <ThemeProvider>
          <Navbar cvUrl={profile.cv} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
