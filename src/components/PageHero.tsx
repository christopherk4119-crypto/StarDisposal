import Image from "next/image";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { business } from "@/lib/business";

/**
 * Shared hero for every interior page. Carries the single <h1>, the
 * breadcrumb trail and the top phone CTA.
 */
export default function PageHero({
  h1,
  summary,
  image,
  imageAlt,
  trail,
  eyebrow,
}: {
  h1: string;
  summary: string;
  image: string;
  imageAlt: string;
  trail: Crumb[];
  eyebrow: string;
}) {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-brand-navy">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_45%]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(30,42,94,.95) 0%, rgba(30,42,94,.9) 40%, rgba(30,42,94,.42) 74%, rgba(30,42,94,.2) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-[clamp(20px,4vw,56px)] pb-[clamp(48px,6vw,72px)] pt-[clamp(28px,4vw,44px)]">
        <Breadcrumbs trail={trail} />

        <div className="mt-8 inline-flex items-center gap-2.5 border border-brand-yellow/50 px-4 py-[7px] font-display text-[11px] uppercase tracking-[0.14em] text-brand-yellow">
          <span className="h-[7px] w-[7px] bg-brand-yellow" />
          {eyebrow}
        </div>

        <h1 className="mt-[18px] max-w-[900px] font-display text-[clamp(38px,5.5vw,68px)] leading-[0.98] tracking-[-0.025em] text-white">
          {h1}
        </h1>

        <p className="mt-6 max-w-[600px] text-xl leading-[1.55] text-white/85">
          {summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`tel:${business.phoneMainTel}`}
            className="flex max-w-full items-center gap-3 bg-brand-yellow px-4 py-5 text-brand-navy transition hover:brightness-105 sm:gap-[18px] sm:px-7"
          >
            <span className="font-display text-[13px] tracking-[0.1em]">
              CALL NOW
            </span>
            <span className="block h-[30px] w-px bg-brand-navy/25" />
            <span className="flex flex-col gap-[3px]">
              <span className="whitespace-nowrap font-display text-[22px] leading-none sm:text-[24px]">
                {business.phoneMainDisplay}
              </span>
              <span className="text-[11px] font-semibold text-brand-navy/70">
                {business.phoneMainSub} · 8 AM – 8 PM
              </span>
            </span>
          </a>
          <a
            href={`mailto:${business.email}`}
            className="border border-brand-yellow/60 bg-white/[0.06] px-4 py-5 font-display text-[13px] tracking-[0.1em] text-brand-yellow transition hover:bg-brand-yellow/[0.12] sm:px-7"
          >
            EMAIL FOR A QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}
