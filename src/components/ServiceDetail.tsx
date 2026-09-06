import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import FaqSection from "./FaqSection";
import CallBand from "./CallBand";
import RelatedServices from "./RelatedServices";
import ServiceSchema from "./ServiceSchema";
import QuoteSection from "./QuoteSection";
import type { Hub, Service } from "@/lib/service-types";
import { areaSentence } from "@/lib/business";
import { quoteCategoryFor } from "@/lib/forms";
import { sectionPhotos } from "@/lib/photos";

/** Long-form spoke page. One component, so each new page is content, not markup. */
export default function ServiceDetail({
  service,
  hub,
}: {
  service: Service;
  hub: Hub;
}) {
  const path = `/${service.hub}/${service.slug}`;
  const sectionImages = sectionPhotos(path, service.sections.length);

  return (
    <>
      <ServiceSchema
        name={service.h1}
        serviceType={service.serviceType}
        description={service.description}
        path={path}
      />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          h1={service.h1}
          summary={service.summary}
          image={service.image}
          imageAlt={service.imageAlt}
          eyebrow={hub.name}
          trail={[
            { name: hub.name, path: `/${hub.slug}` },
            { name: service.name, path },
          ]}
        />

        {/* Intro + what's included */}
        <section className="mx-auto max-w-[1300px] px-8 pb-20 pt-[88px] lg:px-14">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="h-2 w-2 bg-brand-yellow" />
                <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
                  The short version
                </span>
              </div>
              {service.intro.map((para, i) => (
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
              <p className="mt-6 border-l-4 border-brand-yellow py-1 pl-5 text-[16px] font-semibold leading-[1.55] text-brand-navy">
                {areaSentence}
              </p>
            </div>

            <div className="bg-brand-navy px-8 py-9">
              <div className="mb-6 font-display text-[11px] tracking-[0.16em] text-brand-yellow">
                WHAT&rsquo;S INCLUDED
              </div>
              <ul className="flex flex-col">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3.5 border-t border-white/15 py-3.5 text-[15px] leading-[1.5] text-white/85 first:border-t-0 first:pt-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-[7px] w-[7px] shrink-0 bg-brand-yellow"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Body sections */}
        <section className="bg-[#f5f5f1] px-8 pb-24 pt-[92px] lg:px-14">
          <div className="mx-auto max-w-[1300px]">
            <div className="flex flex-col gap-14">
              {service.sections.map((section, i) => (
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
          </div>
        </section>

        <CallBand
          heading="Want a number before you commit?"
          blurb="Describe the job on the phone and you get a price before anything moves. No pressure, no callbacks from a call centre."
        />

        {/* How it works */}
        <section className="mx-auto max-w-[1300px] px-8 pb-20 pt-[92px] lg:px-14">
          <div className="mb-[18px] flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
              Start to finish
            </span>
          </div>
          <h2 className="mb-10 font-display text-[32px] leading-[1.02] tracking-[-0.015em] text-brand-navy lg:text-[42px]">
            How the job runs
          </h2>

          <ol className="flex flex-col">
            {service.process.map((step, i) => (
              <li
                key={step.step}
                className={`grid grid-cols-[46px_1fr] items-baseline gap-6 border-t border-brand-navy/18 py-6 sm:grid-cols-[90px_1fr] ${
                  i === service.process.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-display text-[28px] leading-none text-brand-yellow sm:text-[38px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[19px] leading-[1.2] text-brand-navy">
                    {step.step}
                  </h3>
                  <p className="mt-2 max-w-[720px] text-[16px] leading-[1.6] text-brand-navy/72">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {service.limits && service.limits.length > 0 && (
            <div className="mt-12 border-l-4 border-brand-red bg-[#f5f5f1] px-7 py-7">
              <div className="mb-4 font-display text-[11px] tracking-[0.16em] text-brand-red">
                WHAT WE DON&rsquo;T DO
              </div>
              <ul className="flex flex-col gap-3">
                {service.limits.map((limit) => (
                  <li
                    key={limit}
                    className="max-w-[900px] text-[16px] leading-[1.6] text-brand-navy/80"
                  >
                    {limit}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[15px] font-semibold leading-[1.55] text-brand-navy">
                We would rather tell you this up front than take a job we
                should not be doing.
              </p>
            </div>
          )}
        </section>

        <QuoteSection
          heading="Get a price for this job"
          blurb={`Tell us what you have and where it is — ${service.name.toLowerCase()} anywhere in Calgary or Airdrie. You get a number before anything moves, and there is no obligation.`}
          defaultService={quoteCategoryFor(service.hub, service.slug)}
        />

        <FaqSection faqs={service.faqs} heading={`${service.name} questions`} />

        <RelatedServices paths={service.related} />

        <section className="mx-auto max-w-[1300px] px-8 pb-16 lg:px-14">
          <Link
            href={`/${hub.slug}`}
            className="inline-block border-b-2 border-brand-yellow pb-1 font-display text-[13px] tracking-[0.12em] text-brand-navy hover:text-brand-red"
          >
            ← ALL {hub.name.toUpperCase()} SERVICES
          </Link>
        </section>

        <CallBand
          tone="yellow"
          heading={`${service.name} in Calgary & Airdrie`}
          blurb="Same-day pickups are often possible. Call Ted directly and describe the job — you get a price on that call."
        />
      </main>
      <Footer />
    </>
  );
}
