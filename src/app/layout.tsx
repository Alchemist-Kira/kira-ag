import type { Metadata } from "next";
import { Inter, Outfit, Caveat } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { LenisScroll } from "@/components/LenisScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenith | Modern Agency",
  description: "A premium design and engineering agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${caveat.variable} antialiased`}>
      <body className="flex flex-col font-sans">
        <LenisScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
