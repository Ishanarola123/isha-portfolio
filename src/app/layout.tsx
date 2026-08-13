import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Isha Narola - Senior Consultant",
  description:
    "Senior Consultant with 3+ years of expertise in ReactJS, NextJS development, client communication, and project estimation. Experienced in leading team delivery and building scalable web applications.",
  keywords:
    "Isha Narola, Senior Consultant, Project Estimation, Client Communication, ReactJS, NextJS, JavaScript, TypeScript, Full Stack Developer, Web Development, Gujarat, Surat",
  authors: [{ name: "Isha Narola" }],
  creator: "Isha Narola",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isha-narola-portfolio.vercel.app",
    title: "Isha Narola - Senior Consultant",
    description:
      "Senior Consultant specializing in ReactJS, NextJS, project estimation, and client communication.",
    siteName: "Isha Narola Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isha Narola - Senior Consultant",
    description:
      "Senior Consultant specializing in ReactJS, NextJS, project estimation, and client communication.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${firaCode.variable} font-sans antialiased text-slate-100 bg-[#090d16]`}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
