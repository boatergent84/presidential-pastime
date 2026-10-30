import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presidential Signed Baseballs | Presidential Pastime",
  description:
    "Explore the history of baseballs signed by American presidents, with archival photographs, documented examples, historical references, and presidential baseball connections.",
  alternates: {
    canonical:
      "https://presidentialpastime.com/heritage-collection/presidential-signatures",
  },
  openGraph: {
    title: "Presidential Signed Baseballs | Presidential Pastime",
    description:
      "Discover the history of presidential autographed baseballs through archival records and documented historical examples.",
    url: "https://presidentialpastime.com/heritage-collection/presidential-signatures",
    siteName: "Presidential Pastime",
    type: "article",
    images: [{
      url: "https://presidentialpastime.com/heritage/presidential-signatures/social-preview.png",
      width: 1200,
      height: 630,
      alt: "Presidential Signature Collection — George H. W. Bush signed baseball",
    }],
  },  twitter: {
    card: "summary_large_image",
    images: ["https://presidentialpastime.com/heritage/presidential-signatures/social-preview.png"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
