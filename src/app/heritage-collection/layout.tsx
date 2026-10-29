import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The Heritage Collection | Presidential Pastime",
  description:
    "Explore historical presidential baseball artifacts, original photographs, signed baseballs, tickets, and America's presidential baseball heritage.",
  alternates: {
    canonical: "https://presidentialpastime.com/heritage-collection",
  },
  openGraph: {
    title: "The Heritage Collection | Presidential Pastime",
    description:
      "Discover the historical artifacts connecting America's presidents with America's pastime.",
    url: "https://presidentialpastime.com/heritage-collection",
    siteName: "Presidential Pastime",
    type: "website",
    images: [{
      url: "/coolidge-walter-johnson-1924.jpg",
      alt: "Calvin Coolidge and Walter Johnson — Presidential Pastime historical archive",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/coolidge-walter-johnson-1924.jpg"],
  },
};

export default function HeritageCollectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
