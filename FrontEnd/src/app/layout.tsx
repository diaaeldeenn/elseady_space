import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getProfile } from "@/api/profile.api";
import Navbar from "@/components/navbar";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elseady-space.vercel.app"),

  title: {
    default: "Diaa Eldeen | Full-Stack Developer",
    template: "%s | Diaa Eldeen",
  },

  description:
    "Portfolio of Diaa Eldeen, a Full-Stack Developer based in Alexandria, Egypt.",

  keywords: [
    "Diaa Eldeen",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Alexandria Developer",
    "Egypt Developer",
  ],

  authors: [{ name: "Diaa Eldeen" }],
  creator: "Diaa Eldeen",
  publisher: "Diaa Eldeen",

  alternates: {
    canonical: "https://elseady-space.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elseady-space.vercel.app",
    siteName: "Diaa Eldeen",
    title: "Diaa Eldeen | Full-Stack Developer",
    description:
      "Portfolio of Diaa Eldeen, a Full-Stack Developer based in Alexandria, Egypt.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diaa Eldeen | Full-Stack Developer",
    description:
      "Portfolio of Diaa Eldeen, a Full-Stack Developer based in Alexandria, Egypt.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await getProfile();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased pt-17.5">
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Diaa Eldeen",
                url: "https://elseady-space.vercel.app",
                jobTitle: "Full-Stack Developer",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Alexandria",
                  addressCountry: "EG",
                },
                sameAs: [
                  "https://github.com/diaaeldeenn",
                  "https://www.linkedin.com/in/diaaelseady",
                ],
              }),
            }}
          />
          <ToastContainer
            position="top-center"
            closeOnClick={true}
            theme="colored"
          />

          <Navbar cvUrl={profile.cv} />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
