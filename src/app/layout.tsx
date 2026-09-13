import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukhammad Raihan Apriliansyah | Web Developer",
  description:
    "Portfolio website of Mukhammad Raihan Apriliansyah, a Software Engineering (RPL) student at SMKN 1 Pasuruan who aspires to become a web developer.",
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