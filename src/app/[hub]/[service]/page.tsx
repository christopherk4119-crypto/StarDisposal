import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { allServices, findHub, findService } from "@/lib/services";
import { siteUrl, business } from "@/lib/business";

export const dynamicParams = false;

export function generateStaticParams() {
  return allServices.map((s) => ({ hub: s.hub, service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string; service: string }>;
}): Promise<Metadata> {
  const { hub, service: slug } = await params;
  const service = findService(hub, slug);
  if (!service) return {};

  const url = `${siteUrl}/${service.hub}/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.description,
      url,
      siteName: business.name,
      locale: "en_CA",
      type: "website",
      images: [{ url: service.image, alt: service.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ hub: string; service: string }>;
}) {
  const { hub: hubSlug, service: slug } = await params;
  const service = findService(hubSlug, slug);
  const hub = findHub(hubSlug);
  if (!service || !hub) notFound();

  return <ServiceDetail service={service} hub={hub} />;
}
