import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://presidentialpastime.com/sitemap.xml",
    host: "https://presidentialpastime.com",
  };
}
