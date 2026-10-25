import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://presidentialpastime.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Presidential Pastime | The Baseball History of the American Presidency",
  description:
    "Explore the history of American presidents and baseball through presidential first pitches, historic photographs, original baseball artifacts, and archival research.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Presidential Pastime | The Baseball History of the American Presidency",
    description:
      "Discover the remarkable connections between America's presidents and America's pastime.",
    url: siteUrl,
    siteName: "Presidential Pastime",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Presidential Pastime",
      url: siteUrl,
      description:
        "A historical research website exploring the relationship between American presidents and baseball.",
      inLanguage: "en-US",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Presidential Pastime",
      url: siteUrl,
      description:
        "An independent historical website documenting presidential baseball history, ceremonial first pitches, photographs, and historical artifacts.",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
