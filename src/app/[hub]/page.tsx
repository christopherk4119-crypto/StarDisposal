import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHub from "@/components/ServiceHub";
import { allHubs, findHub, servicesByHub } from "@/lib/services";
import { siteUrl, business } from "@/lib/business";

export const dynamicParams = false;

export function generateStaticParams() {
  return allHubs.map((hub) => ({ hub: hub.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string }>;
}): Promise<Metadata> {
  const { hub: hubSlug } = await params;
  const hub = findHub(hubSlug);
  if (!hub) return {};

  const url = `${siteUrl}/${hub.slug}`;

  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical: url },
    openGraph: {
      title: hub.title,
      description: hub.description,
      url,
      siteName: business.name,
      locale: "en_CA",
      type: "website",
      images: [{ url: hub.image, alt: hub.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: hub.title,
      description: hub.description,
      images: [hub.image],
    },
  };
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub: hubSlug } = await params;
  const hub = findHub(hubSlug);
  if (!hub) notFound();

  return <ServiceHub hub={hub} services={servicesByHub(hub.slug)} />;
}
