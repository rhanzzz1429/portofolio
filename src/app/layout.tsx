import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.raihan-apriliansyah.my.id"),

  title: {
    default: "Mukhammad Raihan Apriliansyah | Web Developer",
    template: "%s | Mukhammad Raihan Apriliansyah",
  },

  description:
    "Portfolio Mukhammad Raihan Apriliansyah, siswa Rekayasa Perangkat Lunak SMKN 1 Pasuruan yang belajar dan mengembangkan website menggunakan Next.js, React, TypeScript, Tailwind CSS, dan Supabase.",

  keywords: [
    "Mukhammad Raihan Apriliansyah",
    "Raihan Apriliansyah",
    "Web Developer",
    "Web Developer Pasuruan",
    "Web Developer Indonesia",
    "Siswa RPL",
    "SMKN 1 Pasuruan",
    "Rekayasa Perangkat Lunak",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Portfolio Web Developer",
  ],

  openGraph: {
    title: "Mukhammad Raihan Apriliansyah | Web Developer",
    description:
      "Portfolio Mukhammad Raihan Apriliansyah, siswa Rekayasa Perangkat Lunak SMKN 1 Pasuruan yang belajar dan mengembangkan website menggunakan Next.js, React, TypeScript, Tailwind CSS, dan Supabase.",
    url: "https://www.raihan-apriliansyah.my.id",
    siteName: "Mukhammad Raihan Apriliansyah",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}