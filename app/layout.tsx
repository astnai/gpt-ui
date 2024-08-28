import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPT - Grupo Para Todo",
  description: "Conoce al equipo de GPT, un grupo de jóvenes talentosos apasionados por los videojuegos, el diseño y la tecnología.",
  keywords: "GPT, Grupo Para Todo, equipo, videojuegos, diseño, tecnología",
  authors: [{ name: "GPT Team" }],
  openGraph: {
    title: "GPT - Grupo Para Todo",
    description: "Conoce al equipo de GPT, un grupo de jóvenes talentosos apasionados por los videojuegos, el diseño y la tecnología.",
    images: [{ url: "/gptBanner.jpg", width: 1200, height: 630, alt: "GPT Team Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT - Grupo Para Todo",
    description: "Conoce al equipo de GPT, un grupo de jóvenes talentosos apasionados por los videojuegos, el diseño y la tecnología.",
    images: ["/gptBanner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
