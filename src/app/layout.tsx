import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isha Narola - Senior Software Engineer",
  description:
    "Senior Software Engineer with 2.5+ years of expertise in ReactJS and NextJS development. Experienced in building scalable web applications with modern JavaScript frameworks.",
  keywords:
    "Isha Narola, Senior Software Engineer, ReactJS, NextJS, JavaScript, TypeScript, Full Stack Developer, Web Development, Gujarat, Surat",
  authors: [{ name: "Isha Narola" }],
  creator: "Isha Narola",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isha-narola-portfolio.vercel.app",
    title: "Isha Narola - Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in ReactJS, NextJS, and modern web technologies.",
    siteName: "Isha Narola Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isha Narola - Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in ReactJS, NextJS, and modern web technologies.",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
