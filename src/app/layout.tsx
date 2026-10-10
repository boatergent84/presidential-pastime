import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Presidential Pastime | America’s Presidents. America’s Pastime.",
  description: "Explore presidential baseball history, ceremonial first pitches, archival photographs, and the Heritage Collection.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<footer className="mt-auto border-t-4 border-[#a4282d] bg-[#102c44] px-6 py-8 text-center text-sm text-white"><p className="font-serif text-lg font-bold">PRESIDENTIAL PASTIME</p><div className="mt-3 flex flex-wrap justify-center gap-5"><Link href="/">Home</Link><Link href="/presidents">Presidents</Link><Link href="/first-pitches">First Pitches</Link><Link href="/heritage-collection">Heritage Collection</Link><Link href="/photo-archive">Photo Archive</Link></div></footer></body>
    </html>
  );
}
