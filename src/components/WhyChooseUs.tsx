import Image from "next/image";
import { business } from "@/lib/business";

const stats = [
  {
    value: "1996",
    valueSize: "text-[44px]",
    title: "Serving Calgary Since 1996",
    description: "Nearly 30 years of local experience.",
  },
  {
    value: "Insured",
    valueSize: "text-[36px]",
    title: "Fully Insured",
    description: "Protected on every job.",
  },
  {
    value: "$50",
    valueSize: "text-[44px]",
    title: "Starting at $50",
    description: "Upfront flat pricing, no surprises.",
  },
  {
    value: "Two lines",
    valueSize: "text-[30px]",
    title: "Two Ways to Reach Us",
    description: `Call ${business.phoneMainDisplay} ${business.phoneMainSub}, or Ted's cell ${business.phoneTedDisplay} as backup.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-star" className="bg-brand-navy">
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">
          <Image
            src="/images/about/heritage-bin.webp"
            alt="Star Disposal heritage bin with hand-painted signage"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[55%_50%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(30,42,94,.35) 0%, rgba(30,42,94,0) 40%, rgba(30,42,94,.75) 100%)",
            }}
          />
          <div className="absolute bottom-11 left-0 bg-brand-yellow px-5 py-3 font-display text-[13px] tracking-[0.14em] text-brand-navy">
            SINCE 1996
          </div>
        </div>

        <div className="min-w-0 max-w-[720px] px-8 py-16 lg:px-16 lg:py-24">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-white/60">
              The short version
            </span>
          </div>
          <h2 className="mb-11 font-display text-[32px] leading-[1.05] tracking-[-0.015em] text-white sm:text-[38px] sm:leading-[1.02] lg:text-[46px]">
            Why Choose Star
            <br />
            Disposal Services
          </h2>

          <div className="flex flex-col">
            {stats.map((stat, i) => (
              <div
                key={stat.title}
                className={`grid grid-cols-[110px_1fr] items-baseline gap-7 border-t border-white/18 py-6 sm:grid-cols-[190px_1fr] ${
                  i === stats.length - 1 ? "border-b" : ""
                }`}
              >
                <span
                  className={`font-display leading-[0.9] text-brand-yellow ${stat.valueSize}`}
                >
                  {stat.value}
                </span>
                <div>
                  <h3 className="font-display text-[17px] text-white">
                    {stat.title}
                  </h3>
                  <p className="mt-[7px] text-[15px] leading-[1.5] text-white/72">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
