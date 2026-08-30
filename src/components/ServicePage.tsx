import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import { getService, type ServiceData } from "@/lib/services-data";

export default function ServicePage({ service }: { service: ServiceData }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is ServiceData => Boolean(s));

  return (
    <>
      <section className="border-b border-brand-yellow/25 bg-brand-navy px-8 pb-16 pt-14 lg:px-14">
        <div className="mx-auto max-w-[1180px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 font-display text-[11px] tracking-[0.1em] text-white/55"
          >
            <Link href="/" className="hover:text-brand-yellow">
              HOME
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-brand-yellow">
              SERVICES
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/85">{service.name.toUpperCase()}</span>
          </nav>

          <div className="mb-2.5 flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-yellow/80">
              {service.eyebrow}
            </span>
          </div>
          <h1 className="max-w-[820px] font-display text-[38px] leading-[1.02] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[64px]">
            {service.h1}
          </h1>

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

      <section className="px-8 pt-14 lg:px-14">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            {service.intro.map((paragraph, i) => (
              <p
                key={i}
                className="mb-5 text-[17px] leading-[1.65] text-brand-navy/80"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 border-t-2 border-brand-navy pt-6">
              <h2 className="font-display text-[13px] uppercase tracking-[0.16em] text-brand-navy/55">
                What&rsquo;s Included
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.5] text-brand-navy/85"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden bg-brand-navy lg:min-h-[420px]">
            <Image
              src={service.heroImage.src}
              alt={service.heroImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute right-3.5 top-3.5 bg-brand-yellow px-3.5 py-2 font-display text-[13px] tracking-[0.08em] text-brand-navy">
              FROM $50
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 lg:px-14">
        <div className="mx-auto max-w-[820px]">
          <h2 className="mb-8 font-display text-[28px] leading-tight tracking-[-0.01em] text-brand-navy">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col">
            {service.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-t border-brand-navy/18 py-5 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[16px] leading-snug text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-brand-navy/50 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[680px] text-[15px] leading-[1.6] text-brand-navy/75">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f1] px-8 py-16 lg:px-14">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="mb-8 font-display text-[13px] uppercase tracking-[0.16em] text-brand-navy/55">
            Related Services
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group block border border-brand-navy/15 bg-white p-6 transition hover:border-brand-yellow"
              >
                <span className="font-display text-xs tracking-[0.2em] text-brand-navy/40">
                  {r.number}
                </span>
                <h3 className="mt-2 font-display text-xl text-brand-navy">
                  {r.name}
                </h3>
                <span className="mt-3 inline-block border-b-2 border-brand-yellow/50 font-display text-xs tracking-[0.12em] text-brand-navy/70 group-hover:border-brand-yellow group-hover:text-brand-navy">
                  LEARN MORE →
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-block font-display text-[13px] tracking-[0.1em] text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-red"
          >
            ← View All Services
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-brand-navy px-8 py-14 lg:px-14">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-[520px] font-display text-2xl leading-[1.15] text-white sm:text-3xl">
            Ready to book {service.name.toLowerCase()} in Calgary?
          </h2>
          <div className="flex flex-wrap items-center gap-4">
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
    </>
  );
}
