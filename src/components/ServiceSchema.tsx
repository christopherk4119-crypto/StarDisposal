import JsonLd from "./JsonLd";
import { business, siteUrl, areaServed } from "@/lib/business";

/**
 * Per-page Service JSON-LD. `provider` points at the single LocalBusiness
 * entity declared in the root layout rather than redeclaring the business.
 */
export default function ServiceSchema({
  name,
  serviceType,
  description,
  path,
}: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        serviceType,
        description,
        url: `${siteUrl}${path}`,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: areaServed.map((city) => ({ "@type": "City", name: city })),
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 50,
            priceCurrency: "CAD",
          },
          availability: "https://schema.org/InStock",
          url: `${siteUrl}${path}`,
          seller: { "@id": `${siteUrl}/#business` },
        },
        termsOfService: `${siteUrl}${path}`,
        telephone: business.phoneMainTel,
      }}
    />
  );
}
