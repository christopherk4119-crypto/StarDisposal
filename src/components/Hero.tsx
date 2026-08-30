import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[660px] items-center overflow-hidden bg-brand-navy"
    >
      <Image
        src="/images/about/truck-signage.webp"
        alt="Star Disposal truck with 403-50 WASTE signage"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_45%]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(30,42,94,.94) 0%, rgba(30,42,94,.88) 38%, rgba(30,42,94,.35) 72%, rgba(30,42,94,.15) 100%)",
        }}
      />

      <div className="relative w-full max-w-[1400px] px-[clamp(20px,4vw,56px)] pb-[clamp(56px,7vw,84px)] pt-[clamp(56px,8vw,92px)] mx-auto">
        <div className="inline-flex items-center gap-2.5 border border-brand-yellow/50 px-4 py-[7px] font-display text-[11px] uppercase tracking-[0.14em] text-brand-yellow">
          <span className="h-[7px] w-[7px] bg-brand-yellow" />
          Calgary owned since 1996
        </div>

        <h1 className="mt-[22px] font-display text-[clamp(46px,7vw,88px)] leading-[0.94] tracking-[-0.025em] text-white">
          Junk gone
          <br />
          <span className="text-brand-yellow">today.</span>
        </h1>

        <p className="mt-[26px] max-w-[540px] text-xl leading-[1.55] text-white/85">
          Bins, dump runs, bobcat work and full clean-outs across Calgary and
          Airdrie. Ted picks up the phone. Jobs start at $50.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={`tel:${business.phoneMainTel}`}
            className="flex max-w-full items-center gap-3 bg-brand-yellow px-4 py-[22px] text-brand-navy transition hover:brightness-105 sm:gap-[18px] sm:px-8"
          >
            <span className="font-display text-sm tracking-[0.1em]">
              CALL NOW
            </span>
            <span className="block h-[34px] w-px bg-brand-navy/25" />
            <span className="flex flex-col gap-[3px]">
              <span className="whitespace-nowrap font-display text-[26px] leading-none">
                {business.phoneMainDisplay}
              </span>
              <span className="text-xs font-semibold text-brand-navy/70">
                {business.phoneMainSub} · 8 AM – 8 PM
              </span>
            </span>
          </a>
          <Link
            href="/contact"
            className="flex max-w-full items-center gap-3 border border-brand-yellow/60 bg-white/[0.06] px-4 py-[22px] text-white transition hover:border-brand-yellow hover:bg-brand-yellow/[0.12] sm:gap-[18px] sm:px-8"
          >
            <span className="font-display text-sm tracking-[0.1em] text-brand-yellow">
              EMAIL US
            </span>
            <span className="block h-[34px] w-px bg-white/25" />
            <span className="flex flex-col gap-[3px]">
              <span className="font-display text-xl leading-none">
                Rather get a quote by email
              </span>
              <span className="text-xs font-semibold text-white/70">
                Reply next business day
              </span>
            </span>
          </Link>
        </div>

        <div className="mt-16 flex max-w-[800px] flex-wrap gap-12 border-t border-white/18 pt-[26px]">
          <div className="flex flex-col gap-1">
            <span className="font-display text-[28px] text-brand-yellow">29 yrs</span>
            <span className="text-[13px] text-white/70">Serving Calgary</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-[28px] text-brand-yellow">$50</span>
            <span className="text-[13px] text-white/70">Smallest job</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-[28px] text-brand-yellow">10–20 yd</span>
            <span className="text-[13px] text-white/70">Bin sizes</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-[28px] text-brand-yellow">Insured</span>
            <span className="text-[13px] text-white/70">Every job</span>
          </div>
        </div>
      </div>
    </section>
  );
}
