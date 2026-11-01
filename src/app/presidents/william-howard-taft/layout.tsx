import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "William Howard Taft & Baseball History | Presidential Pastime",
  description:
    "Discover William Howard Taft and the presidential first-pitch tradition that began in 1910.",
  openGraph: {
    title: "William Howard Taft & Baseball History | Presidential Pastime",
    description:
      "Discover William Howard Taft and the presidential first-pitch tradition that began in 1910.",
    url: "https://presidentialpastime.com/presidents/william-howard-taft",
    siteName: "Presidential Pastime",
    type: "article",
    images: [
      {
        url: "/presidents/william-howard-taft/opengraph-image",
        alt: "William Howard Taft — Presidential Pastime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "William Howard Taft & Baseball History | Presidential Pastime",
    images: ["/presidents/william-howard-taft/opengraph-image"],
  },
};

export default function TaftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
