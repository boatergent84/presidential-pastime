import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ball Through Time | Historic Baseballs | Presidential Pastime",
  description:
    "Explore authentic historic baseballs from the 19th century through the modern game. Discover original artifacts, period craftsmanship, photographs, and documented historical sources.",
  alternates: {
    canonical:
      "https://presidentialpastime.com/1600-collection/the-ball-through-time",
  },
  openGraph: {
    title: "The Ball Through Time | Presidential Pastime",
    description:
      "A museum-style journey through baseball history featuring original period baseballs and documented historical artifacts.",
    url: "https://presidentialpastime.com/1600-collection/the-ball-through-time",
    siteName: "Presidential Pastime",
    type: "article",
    images: [
      {
        url: "https://presidentialpastime.com/ball-through-time-social.png",
        width: 1200,
        height: 630,
        alt: "The Ball Through Time — Presidential Pastime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://presidentialpastime.com/ball-through-time-social.png",
    ],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
