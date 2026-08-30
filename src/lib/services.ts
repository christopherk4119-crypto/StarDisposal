import { hubs } from "@/content/hubs";
import { junkRemovalServices } from "@/content/junk-removal";
import { binRentalServices } from "@/content/bin-rentals";
import { siteServices } from "@/content/site-services";
import type { Hub, Service } from "@/lib/service-types";

export type { Hub, Service, Faq, Section, ProcessStep } from "@/lib/service-types";
export { hubPath, servicePath } from "@/lib/service-types";

export const allHubs: Hub[] = hubs;

export const allServices: Service[] = [
  ...junkRemovalServices,
  ...binRentalServices,
  ...siteServices,
];

export const servicesByHub = (hubSlug: string) =>
  allServices.filter((s) => s.hub === hubSlug);

export const findHub = (hubSlug: string) =>
  allHubs.find((h) => h.slug === hubSlug);

export const findService = (hubSlug: string, slug: string) =>
  allServices.find((s) => s.hub === hubSlug && s.slug === slug);

/** Lookup by full path, used to resolve `related` cross-links into real cards. */
export const findByPath = (path: string) => {
  const [, hub, slug] = path.split("/");
  if (!hub) return undefined;
  if (!slug) return findHub(hub);
  return findService(hub, slug);
};

/** Every indexable route on the site, in sitemap order. Single source for sitemap + link audits. */
export const allRoutes: string[] = [
  "/",
  ...allHubs.flatMap((h) => [
    `/${h.slug}`,
    ...servicesByHub(h.slug).map((s) => `/${h.slug}/${s.slug}`),
  ]),
  "/service-areas",
  "/about",
  "/contact",
];
