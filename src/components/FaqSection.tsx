import JsonLd from "./JsonLd";
import type { Faq } from "@/lib/service-types";

/** FAQ block with automatic FAQPage structured data. */
export default function FaqSection({
  faqs,
  heading = "Questions we get asked",
  eyebrow = "FAQ",
}: {
  faqs: Faq[];
  heading?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-[#f5f5f1] px-8 pb-24 pt-[92px] lg:px-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-[18px] flex items-center gap-2.5">
          <span className="h-2 w-2 bg-brand-yellow" />
          <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
            {eyebrow}
          </span>
        </div>
        <h2 className="mb-10 font-display text-[34px] leading-[1.02] tracking-[-0.015em] text-brand-navy lg:text-[44px]">
          {heading}
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              className={`group border-t border-brand-navy/18 ${
                i === faqs.length - 1 ? "border-b" : ""
              }`}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-[22px] font-display text-[17px] leading-[1.35] text-brand-navy marker:hidden lg:text-xl">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 font-display text-xl leading-none text-brand-yellow transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[820px] pb-6 text-[16px] leading-[1.65] text-brand-navy/75">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
