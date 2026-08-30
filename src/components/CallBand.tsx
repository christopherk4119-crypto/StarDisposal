import Link from "next/link";
import { business } from "@/lib/business";

/** Tappable phone CTA. Used at the top and bottom of every service page. */
export default function CallBand({
  heading = "Tell us about the job",
  blurb = "Ted picks up the phone, 8 AM to 8 PM, seven days a week. Jobs start at $50.",
  tone = "navy",
}: {
  heading?: string;
  blurb?: string;
  tone?: "navy" | "yellow";
}) {
  const yellow = tone === "yellow";

  return (
    <section
      className={`px-8 py-[72px] lg:px-14 ${
        yellow ? "bg-brand-yellow" : "bg-brand-navy"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-10">
        <div className="min-w-0 max-w-[560px]">
          <h2
            className={`font-display text-[32px] leading-[1.02] tracking-[-0.015em] lg:text-[42px] ${
              yellow ? "text-brand-navy" : "text-white"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`mt-4 text-[17px] leading-[1.55] ${
              yellow ? "text-brand-navy/75" : "text-white/80"
            }`}
          >
            {blurb}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`tel:${business.phoneMainTel}`}
            className={`flex max-w-full items-center gap-3 px-4 py-5 transition hover:brightness-105 sm:gap-[18px] sm:px-7 ${
              yellow
                ? "bg-brand-navy text-white"
                : "bg-brand-yellow text-brand-navy"
            }`}
          >
            <span className="font-display text-[13px] tracking-[0.1em]">
              CALL NOW
            </span>
            <span
              className={`block h-[30px] w-px ${
                yellow ? "bg-white/25" : "bg-brand-navy/25"
              }`}
            />
            <span className="flex flex-col gap-[3px]">
              <span className="whitespace-nowrap font-display text-[22px] leading-none sm:text-[24px]">
                {business.phoneMainDisplay}
              </span>
              <span
                className={`text-[11px] font-semibold ${
                  yellow ? "text-white/70" : "text-brand-navy/70"
                }`}
              >
                {business.phoneMainSub}
              </span>
            </span>
          </a>
          <Link
            href="/contact"
            className={`px-4 py-5 font-display text-[13px] tracking-[0.1em] transition sm:px-7 ${
              yellow
                ? "border border-brand-navy/45 text-brand-navy hover:bg-brand-navy/10"
                : "border border-brand-yellow/60 text-brand-yellow hover:bg-brand-yellow/10"
            }`}
          >
            GET A FREE QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}
