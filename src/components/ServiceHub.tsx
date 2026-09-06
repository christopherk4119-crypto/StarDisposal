import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import FaqSection from "./FaqSection";
import CallBand from "./CallBand";
import ServiceSchema from "./ServiceSchema";
import QuoteSection from "./QuoteSection";
import type { Hub, Service } from "@/lib/service-types";
import { allHubs } from "@/lib/services";
import { areaSentence } from "@/lib/business";
import { quoteCategoryFor } from "@/lib/forms";
import { sectionPhotos } from "@/lib/photos";

/**
 * Hub layout: overview plus a link to every spoke beneath it.
 *
 * Every card below is a real <Link>, not a div with an href somewhere inside
 * it — the whole card is the click target, which is how a person actually
 * uses it and the only version that passes a real click test.
 */
export default function ServiceHub({
  hub,
  services,
}: {
  hub: Hub;
  services: Service[];
}) {
  const otherHubs = allHubs.filter((h) => h.slug !== hub.slug);
  const sectionImages = sectionPhotos(`/${hub.slug}`, hub.sections.length);

  return (
    <>
      <ServiceSchema
        name={hub.h1}
        serviceType={hub.serviceType}
        description={hub.description}
        path={`/${hub.slug}`}
      />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          h1={hub.h1}
          summary={hub.summary}
          image={hub.image}
          imageAlt={hub.imageAlt}
          eyebrow="Since 1996"
          trail={[{ name: hub.name, path: `/${hub.slug}` }]}
        />

        <section className="mx-auto max-w-[1300px] px-8 pb-16 pt-[88px] lg:px-14">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0">
              {hub.intro.map((para, i) => (
                <p
                  key={para.slice(0, 40)}
                  className={
                    i === 0
                      ? "text-xl leading-[1.5] text-brand-navy"
                      : "mt-5 text-[17px] leading-[1.65] text-brand-navy/78"
                  }
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="self-start border-l-4 border-brand-yellow bg-[#f5f5f1] px-7 py-8">
              <div className="mb-4 font-display text-[11px] tracking-[0.16em] text-brand-navy/55">
                WHERE WE RUN
              </div>
              <p className="text-[17px] font-semibold leading-[1.55] text-brand-navy">
                {areaSentence}
              </p>
              <Link
                href="/service-areas"
                className="mt-5 inline-block border-b-2 border-brand-yellow pb-1 font-display text-xs tracking-[0.12em] text-brand-navy hover:text-brand-red"
              >
                SEE OUR SERVICE AREA →
              </Link>
            </div>
          </div>
        </section>

        {/* Spoke cards — every one is a full-card link */}
        <section className="mx-auto max-w-[1400px] px-8 pb-24 lg:px-14">
          <div className="mb-[18px] flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
              Every {hub.name.toLowerCase()} service
            </span>
          </div>
          <h2 className="mb-9 font-display text-[34px] leading-[0.98] tracking-[-0.02em] text-brand-navy lg:text-[48px]">
            Pick the job you have
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/${service.hub}/${service.slug}`}
                className="group relative flex min-h-[290px] flex-col justify-between overflow-hidden bg-brand-navy px-7 py-8 transition"
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
                  className="object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(30,42,94,.72) 0%, rgba(30,42,94,.86) 55%, rgba(30,42,94,.96) 100%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-2.5 font-display text-xs tracking-[0.2em] text-brand-yellow">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-[26px] leading-[1.05] text-white">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-white/80">
                    {service.summary}
                  </p>
                </div>
                <span className="relative mt-6 inline-block border-b-2 border-brand-yellow/50 pb-1 font-display text-[11px] tracking-[0.14em] text-brand-yellow transition group-hover:border-brand-yellow">
                  WHAT&rsquo;S INVOLVED →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <CallBand
          heading="Not sure which one you need?"
          blurb="Describe the job on the phone and we will tell you honestly which service costs you least — including when the answer is a bin rather than a haul."
        />

        {/* Hub body sections */}
        <section className="mx-auto max-w-[1300px] px-8 pb-24 pt-[92px] lg:px-14">
          <div className="flex flex-col gap-14">
            {hub.sections.map((section, i) => (
              <article
                key={section.heading}
                className="grid grid-cols-1 gap-8 border-t border-brand-navy/18 pt-9 lg:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="min-w-0">
                  <div className="mb-3 font-display text-xs tracking-[0.2em] text-brand-yellow">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-display text-[28px] leading-[1.05] tracking-[-0.015em] text-brand-navy lg:text-[34px]">
                    {section.heading}
                  </h2>
                  {sectionImages[i] && (
                    <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-brand-navy">
                      <Image
                        src={sectionImages[i].src}
                        alt={sectionImages[i].alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 34vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  {section.body.map((para, j) => (
                    <p
                      key={para.slice(0, 40)}
                      className={`text-[17px] leading-[1.68] text-brand-navy/78 ${
                        j > 0 ? "mt-4" : ""
                      }`}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <QuoteSection
          heading="Get a price for your job"
          blurb="Describe the job and we will come back with a price. If a different service would cost you less, we will say so."
          defaultService={quoteCategoryFor(hub.slug, hub.slug)}
        />

        <FaqSection faqs={hub.faqs} heading={`${hub.name} questions`} />

        {/* Cross-hub links so no hub is a dead end */}
        <section className="mx-auto max-w-[1300px] px-8 pb-24 pt-[92px] lg:px-14">
          <div className="mb-[18px] flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
              Also from Star Disposal
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {otherHubs.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="group flex flex-col justify-between gap-6 border border-brand-navy/15 bg-white px-8 py-9 transition hover:border-brand-yellow hover:bg-brand-navy"
              >
                <div>
                  <h3 className="font-display text-[28px] leading-[1.05] text-brand-navy transition group-hover:text-white">
                    {other.h1}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.55] text-brand-navy/70 transition group-hover:text-white/75">
                    {other.summary}
                  </p>
                </div>
                <span className="font-display text-[11px] tracking-[0.14em] text-brand-navy/55 transition group-hover:text-brand-yellow">
                  VIEW {other.name.toUpperCase()} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <CallBand
          tone="yellow"
          heading={`${hub.name} in Calgary and Airdrie`}
          blurb="Family run since 1996. Ted answers the phone himself, 8 AM to 8 PM, seven days a week."
        />
      </main>
      <Footer />
    </>
  );
}
