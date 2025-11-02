import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay J Vadchhak - Android Developer (Java)",
  description:
    "Android Developer with 2+ years of experience in building efficient, user-friendly, and scalable mobile applications using Java, XML, and Firebase. Skilled in Android Studio, Retrofit, and Material Design.",
  keywords:
    "Akshay J Vadchhak, Android Developer, Java, Android Studio, Mobile App Developer, Firebase, Retrofit, SQLite, Material Design, MVVM, Surat, Gujarat",
  authors: [{ name: "Akshay J Vadchhak" }],
  creator: "Akshay J Vadchhak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshay-portfolio.vercel.app",
    title: "Akshay J Vadchhak - Android Developer (Java)",
    description:
      "Professional Android Developer specializing in Java, XML, and Firebase with a focus on clean architecture and optimized performance.",
    siteName: "Akshay J Vadchhak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay J Vadchhak - Android Developer (Java)",
    description:
      "Professional Android Developer specializing in Java, XML, and Firebase with a focus on clean architecture and optimized performance.",
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
