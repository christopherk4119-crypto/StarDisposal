import JsonLd from "./JsonLd";
import { business, siteUrl, areaServed } from "@/lib/business";
import { allHubs } from "@/lib/services";

/**
 * Global LocalBusiness JSON-LD. Rendered once in the root layout so every
 * page inherits it. `@id` is the stable entity identifier that per-page
 * Service schema points back at as its provider.
 */
export default function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${siteUrl}/#business`,
        name: business.name,
        alternateName: [...business.alternateNames],
        legalName: business.legalName,
        description:
          "Junk removal, bin rentals, dump runs, bobcat work, demolition and site clean-up across Calgary and Airdrie. Family run since 1996.",
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        image: `${siteUrl}/images/about/truck-signage.webp`,
        telephone: business.phoneMainTel,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: business.phoneMainTel,
            contactType: "customer service",
            areaServed: "CA",
            availableLanguage: "English",
          },
          {
            "@type": "ContactPoint",
            telephone: business.phoneTedTel,
            contactType: "customer service",
            areaServed: "CA",
            availableLanguage: "English",
          },
        ],
        email: business.email,
        sameAs: [...business.sameAs],
        founder: { "@type": "Person", name: business.owner },
        foundingDate: business.foundingDate,
        priceRange: business.priceRange,
        currenciesAccepted: "CAD",
        address: {
          "@type": "PostalAddress",
          streetAddress: business.streetAddress,
          addressLocality: business.addressLocality,
          addressRegion: business.addressRegion,
          postalCode: business.postalCode,
          addressCountry: business.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        areaServed: areaServed.map((city) => ({
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "State", name: "Alberta" },
        })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: business.opensAt,
          closes: business.closesAt,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: allHubs.map((hub) => ({
            "@type": "OfferCatalog",
            name: hub.name,
            url: `${siteUrl}/${hub.slug}`,
          })),
        },
      }}
    />
  );
}
