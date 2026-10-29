
import type { Metadata } from "next";

const siteUrl = "https://presidentialpastime.com/";

export const homeMetadata: Metadata = {
  title: "Presidential Pastime | Presidents & Baseball History",

  description:
    "Presidential Pastime explores the baseball history of America's presidents, featuring historic first pitches, rare photographs, presidential stories, and authentic baseball memorabilia.",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Presidential Pastime | Presidents & Baseball History",
    description:
      "Explore the remarkable connection between America's presidents and baseball through historical photographs, first pitches, presidential profiles, and authentic memorabilia.",
    url: siteUrl,
    siteName: "Presidential Pastime",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Presidential Pastime | Presidents & Baseball History",
    description:
      "Discover historic presidential first pitches, rare photographs, and the baseball history of America's presidents.",
  },
};
