import ContactForm from "./ContactForm";
import { business } from "@/lib/business";

/**
 * The quote form, inline on the page the visitor is already reading.
 *
 * The business's goal is quote requests, so the form belongs wherever someone
 * decides they want one — not one navigation away on /contact. The service is
 * pre-selected from the page they are on.
 */
export default function QuoteSection({
  heading,
  blurb,
  defaultService = "",
}: {
  heading: string;
  blurb: string;
  defaultService?: string;
}) {
  return (
    <section
      id="quote"
      className="scroll-mt-4 bg-[#f5f5f1] px-8 pb-24 pt-[92px] lg:px-14"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="min-w-0">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
              Free quote
            </span>
          </div>
          <h2 className="font-display text-[32px] leading-[1.02] tracking-[-0.02em] text-brand-navy lg:text-[42px]">
            {heading}
          </h2>
          <p className="mt-5 max-w-[420px] text-[17px] leading-[1.6] text-brand-navy/72">
            {blurb}
          </p>

          <div className="mt-9 border-t-2 border-brand-navy pt-[22px]">
            <div className="font-display text-[11px] tracking-[0.16em] text-brand-navy/55">
              OR CALL
            </div>
            <a
              href={`tel:${business.phoneMainTel}`}
              className="mt-1.5 block font-display text-[34px] leading-none tracking-[-0.01em] text-brand-navy transition hover:text-brand-red"
            >
              {business.phoneMainDisplay}
            </a>
            <div className="mt-2 text-sm font-semibold text-brand-navy/60">
              {business.phoneMainSub} · 8 AM – 8 PM, seven days
            </div>
            <a
              href={`tel:${business.phoneTedTel}`}
              className="mt-2 flex min-h-[44px] items-center text-[15px] font-semibold text-brand-navy/70 transition hover:text-brand-red"
            >
              Ted&rsquo;s Cell (backup): {business.phoneTedDisplay} &mdash;
              texts &amp; job photos
            </a>
          </div>
        </div>

        <ContactForm defaultService={defaultService} />
      </div>
    </section>
  );
}
