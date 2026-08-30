import Image from "next/image";
import { business } from "@/lib/business";

const calgaryAreas = [
  { name: "NW Calgary", sub: "City · Northwest" },
  { name: "NE Calgary", sub: "City · Northeast" },
  { name: "SW Calgary", sub: "City · Southwest" },
  { name: "SE Calgary", sub: "City · Southeast · Yard on 14 Ave SE" },
];

const surroundingAreas = [
  { name: "Airdrie", sub: "Surrounding" },
  { name: "Cochrane", sub: "Surrounding" },
  { name: "Chestermere", sub: "Surrounding" },
];

export default function ServiceArea() {
  return (
    <section className="bg-brand-navy px-8 pb-24 pt-[92px] lg:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-16 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="min-w-0">
          <div className="mb-[18px] flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-white/60">
              Where we run
            </span>
          </div>
          <h2 className="mb-10 font-display text-[40px] leading-[1.02] tracking-[-0.015em] text-white lg:text-[48px]">
            Serving Calgary &amp;
            <br />
            Surrounding Areas
          </h2>

          <div className="flex flex-col">
            {calgaryAreas.map((area) => (
              <div
                key={area.name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-white/16 py-4"
              >
                <span className="font-display text-2xl leading-none text-white lg:text-[34px]">
                  {area.name}
                </span>
                <span className="max-w-[140px] text-right text-xs font-semibold uppercase leading-snug tracking-[0.1em] text-white/50 sm:max-w-none sm:text-right sm:tracking-[0.12em]">
                  {area.sub}
                </span>
              </div>
            ))}
            {surroundingAreas.map((area, i) => (
              <div
                key={area.name}
                className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-brand-yellow/35 py-4 ${
                  i === surroundingAreas.length - 1
                    ? "border-b border-brand-yellow/35"
                    : ""
                }`}
              >
                <span className="font-display text-2xl leading-none text-brand-yellow lg:text-[34px]">
                  {area.name}
                </span>
                <span className="text-right text-xs font-semibold uppercase tracking-[0.12em] text-brand-yellow/65">
                  {area.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[320px] self-stretch overflow-hidden lg:min-h-[560px]">
          <Image
            src="/images/about/truck-signage.webp"
            alt="Star Disposal truck serving Calgary, Airdrie, Cochrane and Chestermere"
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover object-[45%_50%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(30,42,94,.05) 0%, rgba(30,42,94,.25) 55%, rgba(30,42,94,.92) 100%)",
            }}
          />
          <div className="absolute inset-x-6 bottom-[26px]">
            <div className="font-display text-xl leading-[1.15] text-white">
              {business.phoneMainDisplay}
            </div>
            <div className="mt-[7px] text-[13px] font-semibold text-white/75">
              Ted or the yard, 8 AM – 8 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
