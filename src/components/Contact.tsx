import ContactForm from "./ContactForm";
import { business } from "@/lib/business";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f5f1] px-8 pb-[104px] pt-[100px] lg:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-[72px] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="min-w-0">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
              Free quote
            </span>
          </div>
          <h2 className="font-display text-[36px] leading-[1.02] tracking-[-0.02em] text-brand-navy lg:text-[46px]">
            Get Your Free Quote
            <br />— Starting at $50
          </h2>

          <div className="mt-10 border-t-2 border-brand-navy pt-[22px]">
            <div className="font-display text-[11px] tracking-[0.16em] text-brand-navy/55">
              MAIN LINE
            </div>
            <a
              href={`tel:${business.phoneMainTel}`}
              className="mt-1.5 block font-display text-4xl leading-none tracking-[-0.01em] text-brand-navy transition hover:text-brand-red lg:text-[42px]"
            >
              {business.phoneMainDisplay}
            </a>
            {business.phoneMainSub && (
              <div className="mt-2 text-sm font-semibold text-brand-navy/60">
                {business.phoneMainSub}
              </div>
            )}
          </div>

          <div className="mt-[26px] grid grid-cols-2 gap-[26px]">
            <div>
              <div className="font-display text-[11px] tracking-[0.16em] text-brand-navy/55">
                TED&rsquo;S CELL (BACKUP)
              </div>
              <a
                href={`tel:${business.phoneTedTel}`}
                className="mt-1.5 block font-display text-xl text-brand-navy transition hover:text-brand-red"
              >
                {business.phoneTedDisplay}
              </a>
            </div>
            <div>
              <div className="font-display text-[11px] tracking-[0.16em] text-brand-navy/55">
                TEXT (TED)
              </div>
              <a
                href={`sms:${business.phoneTedTel}`}
                className="mt-1.5 block font-display text-xl text-brand-navy transition hover:text-brand-red"
              >
                {business.phoneTedDisplay}
              </a>
            </div>
          </div>

          <div className="mt-[30px] border-t border-brand-navy/18 pt-5">
            <div className="font-display text-[11px] tracking-[0.16em] text-brand-navy/55">
              ADDRESS
            </div>
            <p className="mt-[7px] text-[15px] font-semibold text-brand-navy">
              {business.address}
            </p>
          </div>

          <div className="mt-6 border-t border-brand-navy/18 pt-5">
            <div className="mb-2.5 font-display text-[11px] tracking-[0.16em] text-brand-navy/55">
              HOURS
            </div>
            {business.hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between gap-4 py-[7px] text-[15px]"
              >
                <span className="font-semibold text-brand-navy">{h.day}</span>
                <span className="text-brand-navy/65">{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
