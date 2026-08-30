import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/business";
import { allRoutes } from "@/lib/services";

/**
 * Generated from the same registry that generates the routes, so a new page
 * cannot exist without being in the sitemap. Canonical URLs only.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return allRoutes.map((route) => {
    const depth = route === "/" ? 0 : route.split("/").length - 1;
    return {
      url: route === "/" ? siteUrl : `${siteUrl}${route}`,
      lastModified,
      changeFrequency: depth === 0 ? ("weekly" as const) : ("monthly" as const),
      priority: depth === 0 ? 1 : depth === 1 ? 0.9 : 0.8,
    };
  });
}
