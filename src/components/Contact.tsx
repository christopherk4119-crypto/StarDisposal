import ContactForm from "./ContactForm";
import PhoneBadge from "./PhoneBadge";
import { business } from "@/lib/business";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-navy py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="text-center font-display text-3xl text-white sm:text-4xl">
          Get Your Free Quote — Starting at $50
        </h2>
        <div className="mx-auto mt-2 h-1.5 w-20 bg-brand-yellow" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="rounded-lg bg-white p-6 shadow-xl sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-white/5 p-6 text-white ring-1 ring-white/10 sm:p-8 lg:col-span-2">
            <div className="space-y-6">
              <div>
                <p className="font-display text-xs tracking-wide text-brand-yellow">
                  MAIN LINE
                </p>
                <PhoneBadge className="mt-1 text-xl" />
                <p className="mt-1 text-sm text-white/70">{business.phoneMainSub}</p>
              </div>

              <div>
                <p className="font-display text-xs tracking-wide text-brand-yellow">
                  TED&apos;S CELL
                </p>
                <a
                  href={`tel:${business.phoneTedTel}`}
                  className="font-display text-xl"
                >
                  {business.phoneTedDisplay}
                </a>
              </div>

              <div>
                <p className="font-display text-xs tracking-wide text-brand-yellow">
                  EMAIL
                </p>
                <a
                  href={`mailto:${business.email}`}
                  className="break-words text-sm font-semibold underline"
                >
                  {business.email}
                </a>
              </div>

              <div>
                <p className="font-display text-xs tracking-wide text-brand-yellow">
                  ADDRESS
                </p>
                <p className="text-sm font-semibold">{business.address}</p>
              </div>

              <div>
                <p className="font-display text-xs tracking-wide text-brand-yellow">
                  HOURS
                </p>
                <ul className="text-sm font-semibold text-white/90">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="text-white/70">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
