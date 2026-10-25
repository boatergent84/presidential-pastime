import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

import { presidents } from "./presidents/presidents-data";
import { exhibits } from "./heritage-collection/collection-data";

const BASE_URL = "https://presidentialpastime.com";

function getRoutes(directory: string, prefix = ""): string[] {
  if (!fs.existsSync(directory)) return [];

  const routes: string[] = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const segment = entry.name;

    // Dynamic routes are added from their actual data below.
    if (
      segment.startsWith("[") ||
      segment.startsWith("(") ||
      segment.startsWith("@")
    ) {
      continue;
    }

    const folder = path.join(directory, segment);
    const route = `${prefix}/${segment}`;

    if (fs.existsSync(path.join(folder, "page.tsx"))) {
      routes.push(route);
    }

    routes.push(...getRoutes(folder, route));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDirectory = path.join(process.cwd(), "src", "app");

  const staticRoutes = ["/", ...getRoutes(appDirectory)];

  const presidentRoutes = presidents.map(
    (president) => `/presidents/${president.slug}`
  );

  const exhibitRoutes = exhibits.map(
    (exhibit) => `/heritage-collection/${exhibit.slug}`
  );

  const allRoutes = [
    ...staticRoutes,
    ...presidentRoutes,
    ...exhibitRoutes,
  ];

  return [...new Set(allRoutes)].map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
