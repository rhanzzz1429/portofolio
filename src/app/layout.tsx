import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-smoky-eight.vercel.app"),

  title: {
    default: "Mukhammad Raihan Apriliansyah | Web Developer",
    template: "%s | Mukhammad Raihan Apriliansyah",
  },

  description:
    "Portfolio website of Mukhammad Raihan Apriliansyah, a Software Engineering (RPL) student at SMKN 1 Pasuruan who aspires to become a web developer.",

  openGraph: {
    title: "Mukhammad Raihan Apriliansyah | Web Developer",
    description:
      "Portfolio website of Mukhammad Raihan Apriliansyah, a Software Engineering (RPL) student at SMKN 1 Pasuruan who aspires to become a web developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}