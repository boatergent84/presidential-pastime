import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://presidentialpastime.com";

function getRoutes(directory: string, prefix = ""): string[] {
  if (!fs.existsSync(directory)) return [];

  const routes: string[] = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const segment = entry.name;

    // Dynamic routes require actual slugs, not folder names.
    if (segment.startsWith("[") || segment.startsWith("(") || segment.startsWith("@")) {
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

  const routes = ["/", ...getRoutes(appDirectory)];

  return [...new Set(routes)].map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
