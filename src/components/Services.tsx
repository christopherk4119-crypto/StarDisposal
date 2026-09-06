import Image from "next/image";
import Link from "next/link";
import { allHubs, servicesByHub } from "@/lib/services";

/**
 * Homepage services grid. Every tile is a real <Link> wrapping the whole
 * card — the visual card is the click target, not a small text row beside it.
 */
export default function Services() {
  const [junk, bins, site] = allHubs;

  return (
    <section
      id="services"
      className="mx-auto max-w-[1400px] px-8 pb-28 pt-[104px] lg:px-14"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="min-w-0 flex flex-col justify-end pb-2 lg:col-span-5">
          <div className="mb-[22px] flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
              What we haul
            </span>
          </div>
          <h2 className="font-display text-[42px] leading-[0.92] tracking-[-0.02em] text-brand-navy sm:text-[52px] lg:text-[68px]">
            Our
            <br />
            Services
          </h2>
          <p className="mt-[26px] max-w-[400px] text-[17px] leading-[1.6] text-brand-navy/72">
            Junk removal, bin rentals, dump runs, bobcat work, demolition and
            full site clean-outs across Calgary. Ted picks up the phone. Jobs
            start at $50.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block self-start bg-brand-yellow px-6 py-4 font-display text-[13px] tracking-[0.12em] text-brand-navy transition hover:brightness-105"
          >
            GET A FREE QUOTE
          </Link>
        </div>

        {/* Junk removal hub */}
        <Link
          href={`/${junk.slug}`}
          className="group relative h-[430px] overflow-hidden bg-brand-navy lg:col-span-7"
        >
          <Image
            src="/images/gallery/mattress-furniture-bin.webp"
            alt="Bin loaded with a mattress and furniture during a Calgary junk removal job"
            fill
            sizes="(min-width: 1024px) 55vw, 90vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(30,42,94,.1) 0%, rgba(30,42,94,.35) 45%, rgba(30,42,94,.93) 100%)",
            }}
          />
          <div className="absolute right-[22px] top-[22px] bg-brand-yellow px-3.5 py-2 font-display text-[13px] tracking-[0.08em] text-brand-navy">
            FROM $50
          </div>
          <div className="absolute inset-x-8 bottom-[30px]">
            <div className="mb-2.5 font-display text-xs tracking-[0.2em] text-brand-yellow">
              01
            </div>
            <h3 className="font-display text-4xl leading-none text-white">
              Junk Removal Calgary
            </h3>
            <p className="mt-3 max-w-[440px] text-[15px] leading-[1.55] text-white/85">
              {junk.summary}
            </p>
            <span className="mt-[18px] inline-block border-b-2 border-brand-yellow/50 font-display text-xs tracking-[0.14em] text-brand-yellow transition group-hover:border-brand-yellow">
              VIEW JUNK REMOVAL →
            </span>
          </div>
        </Link>

        {/* Bin rentals hub */}
        <Link
          href={`/${bins.slug}`}
          id="bins"
          className="group relative h-[340px] overflow-hidden bg-brand-navy lg:col-span-8"
        >
          <Image
            src="/images/gallery/bin-trailer-apartment.webp"
            alt="Bin trailer rental delivered to a Calgary apartment complex"
            fill
            sizes="(min-width: 1024px) 62vw, 90vw"
            className="object-cover object-[60%_50%] transition duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(96deg, rgba(30,42,94,.95) 0%, rgba(30,42,94,.82) 42%, rgba(30,42,94,.18) 88%)",
            }}
          />
          <div className="absolute inset-y-8 left-8 flex w-[70%] flex-col justify-between sm:w-1/2">
            <div>
              <div className="mb-2.5 font-display text-xs tracking-[0.2em] text-brand-yellow">
                02
              </div>
              <h3 className="font-display text-4xl leading-none text-white">
                Bin Rental Calgary
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-white/85">
                10, 12, 15 and 20 yard bins dropped where you need them.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["10 YD", "12 YD", "15 YD", "20 YD"].map((size, i) => (
                <span
                  key={size}
                  className={`px-3 py-2 font-display text-xs tracking-[0.08em] ${
                    i === 3
                      ? "bg-brand-yellow text-brand-navy"
                      : "border border-brand-yellow/60 text-brand-yellow"
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Two spoke tiles */}
        <div className="flex flex-col bg-brand-navy lg:col-span-4">
          <Link
            href="/junk-removal/appliance-removal"
            className="group flex flex-1 flex-col justify-center px-7 py-[30px] transition hover:bg-white/[0.06]"
          >
            <div className="mb-2 font-display text-xs tracking-[0.2em] text-brand-yellow">
              03
            </div>
            <h3 className="font-display text-[25px] leading-[1.05] text-white">
              Appliance Removal
            </h3>
            <p className="mt-2 text-sm leading-[1.5] text-white/70">
              Fridges, washers, dryers and stoves carried out — stairs included.
            </p>
            <span className="mt-3 font-display text-[10px] tracking-[0.14em] text-brand-yellow opacity-0 transition group-hover:opacity-100">
              VIEW SERVICE →
            </span>
          </Link>
          <div className="h-px bg-white/15" />
          <Link
            href="/junk-removal/dump-runs"
            className="group flex flex-1 flex-col justify-center px-7 py-[30px] transition hover:bg-white/[0.06]"
          >
            <div className="mb-2 font-display text-xs tracking-[0.2em] text-brand-yellow">
              04
            </div>
            <h3 className="font-display text-[25px] leading-[1.05] text-white">
              Dump Runs
            </h3>
            <p className="mt-2 text-sm leading-[1.5] text-white/70">
              We load it, haul it, and pay the tipping fee at the scale.
            </p>
            <span className="mt-3 font-display text-[10px] tracking-[0.14em] text-brand-yellow opacity-0 transition group-hover:opacity-100">
              VIEW SERVICE →
            </span>
          </Link>
        </div>

        {/* Demolition spoke */}
        <Link
          href="/site-services/demolition"
          className="group relative flex min-h-[250px] flex-col justify-end overflow-hidden bg-brand-yellow px-[30px] py-[34px] lg:col-span-4"
        >
          <span className="pointer-events-none absolute -top-6 right-1.5 font-display text-[140px] leading-none text-brand-navy/10">
            05
          </span>
          <h3 className="relative font-display text-[34px] leading-none text-brand-navy">
            Demolition Calgary
          </h3>
          <p className="relative mt-3 text-[15px] leading-[1.55] text-brand-navy/78">
            Garages, sheds, decks, fences and interior strip-outs — debris
            hauled in the same job.
          </p>
          <span className="relative mt-4 font-display text-[11px] tracking-[0.14em] text-brand-navy/70 transition group-hover:text-brand-navy">
            VIEW DEMOLITION →
          </span>
        </Link>

        {/* Site services hub */}
        <Link
          href={`/${site.slug}`}
          className="group relative min-h-[250px] overflow-hidden bg-brand-navy lg:col-span-8"
        >
          <Image
            src="/images/gallery/yard-cleanup-debris.webp"
            alt="Site clean-up and yard debris removal on a Calgary property"
            fill
            sizes="(min-width: 1024px) 62vw, 90vw"
            className="object-cover object-[50%_55%] transition duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(30,42,94,.15) 0%, rgba(30,42,94,.55) 55%, rgba(30,42,94,.94) 100%)",
            }}
          />
          <div className="absolute inset-x-8 bottom-7 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-2.5 font-display text-xs tracking-[0.2em] text-brand-yellow">
                06
              </div>
              <h3 className="font-display text-[34px] leading-none text-white">
                Site Clean-Up &amp; Bobcat
              </h3>
              <p className="mt-[11px] max-w-[440px] text-[15px] leading-[1.55] text-white/85">
                {site.summary}
              </p>
            </div>
            <span className="shrink-0 bg-brand-yellow px-[18px] py-3.5 font-display text-xs tracking-[0.12em] text-brand-navy transition group-hover:brightness-105">
              VIEW SITE SERVICES
            </span>
          </div>
        </Link>
      </div>

      {/* Every spoke, linked in plain text — no page is more than one click away */}
      <div className="mt-16 border-t border-brand-navy/18 pt-10">
        <h3 className="mb-7 font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
          Every service we offer
        </h3>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-3">
          {allHubs.map((hub) => (
            <div key={hub.slug}>
              <Link
                href={`/${hub.slug}`}
                className="flex min-h-[44px] items-end border-b-2 border-brand-yellow pb-2 font-display text-[15px] text-brand-navy hover:text-brand-red sm:block sm:min-h-0"
              >
                {hub.h1}
              </Link>
              <ul className="mt-2 flex flex-col sm:mt-3.5 sm:gap-2.5">
                {servicesByHub(hub.slug).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.hub}/${service.slug}`}
                      className="flex min-h-[44px] items-center text-[15px] font-medium text-brand-navy/72 hover:text-brand-red sm:min-h-0"
                    >
                      {service.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
