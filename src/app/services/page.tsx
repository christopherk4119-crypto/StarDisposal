import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/lib/business";
import { services } from "@/lib/services-data";

const siteUrl = "https://stardisposalservices.ca";
const url = `${siteUrl}/services`;

const title = "Junk Removal & Bin Rental Services | Calgary";
const description =
  "Junk removal, bin rentals, bobcat work, dump runs, demolition and site clean-up in Calgary since 1996. Jobs from $50. Call 403-204-7827.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: business.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ServicesHub() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-brand-navy px-8 pb-16 pt-14 lg:px-14">
          <div className="mx-auto max-w-[1180px]">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 font-display text-[11px] tracking-[0.1em] text-white/55"
            >
              <Link href="/" className="hover:text-brand-yellow">
                HOME
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/85">SERVICES</span>
            </nav>

            <div className="mb-2.5 flex items-center gap-2.5">
              <span className="h-2 w-2 bg-brand-yellow" />
              <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-yellow/80">
                What we haul
              </span>
            </div>
            <h1 className="max-w-[760px] font-display text-[38px] leading-[1.02] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[64px]">
              Junk Removal &amp; Bin Rental Services in Calgary
            </h1>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.6] text-white/75">
              Six ways we help Calgary homeowners and contractors clear a
              site — from a single load of junk to a full property
              clean-out. Jobs start at $50, and Ted picks up the phone.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${business.phoneMainTel}`}
                className="inline-block bg-brand-yellow px-6 py-4 font-display text-[13px] tracking-[0.1em] text-brand-navy transition hover:brightness-105"
              >
                CALL {business.phoneMainDisplay}
              </a>
              <Link
                href="/#contact"
                className="inline-block border border-white/35 px-6 py-4 font-display text-[13px] tracking-[0.1em] text-white transition hover:border-brand-yellow hover:text-brand-yellow"
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
        </section>

        <section className="px-8 py-16 lg:px-14">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden border border-brand-navy/12 bg-white transition hover:border-brand-yellow"
              >
                <div className="relative h-[190px] overflow-hidden bg-brand-navy">
                  <Image
                    src={service.heroImage.src}
                    alt={service.heroImage.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 90vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-display text-xs tracking-[0.2em] text-brand-navy/40">
                    {service.number}
                  </span>
                  <h2 className="mt-2 font-display text-2xl leading-tight text-brand-navy">
                    {service.name}
                  </h2>
                  <p className="mt-2 flex-1 text-[15px] leading-[1.55] text-brand-navy/70">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-block border-b-2 border-brand-yellow/50 font-display text-xs tracking-[0.12em] text-brand-navy group-hover:border-brand-yellow">
                    LEARN MORE →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
