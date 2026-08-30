import Image from "next/image";
import Link from "next/link";

export default function Services() {
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
            Junk removal, bin rentals, dump runs, bobcat work, demolition
            and full site clean-outs across Calgary. Ted picks up the
            phone. Jobs start at $50.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-block w-fit border-b-2 border-brand-yellow font-display text-xs tracking-[0.14em] text-brand-navy hover:text-brand-red"
          >
            VIEW ALL SERVICES →
          </Link>
        </div>

        <div className="relative h-[430px] overflow-hidden bg-brand-navy lg:col-span-7">
          <Image
            src="/images/gallery/mattress-furniture-bin.webp"
            alt="Bin loaded with mattress and furniture for junk removal in Calgary"
            fill
            sizes="(min-width: 1024px) 55vw, 90vw"
            className="object-cover"
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
              Junk Removal
            </h3>
            <p className="mt-3 max-w-[420px] text-[15px] leading-[1.55] text-white/85">
              Garage, home, and yard junk removal — starting at $50.
            </p>
            <div className="mt-[18px] flex flex-wrap items-center gap-5">
              <Link
                href="#contact"
                className="inline-block border-b-2 border-brand-yellow/50 font-display text-xs tracking-[0.14em] text-brand-yellow hover:border-brand-yellow"
              >
                GET QUOTE →
              </Link>
              <Link
                href="/services/junk-removal"
                className="inline-block border-b-2 border-white/30 font-display text-xs tracking-[0.14em] text-white/80 hover:border-brand-yellow hover:text-brand-yellow"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>

        <div
          id="bins"
          className="relative h-[340px] overflow-hidden bg-brand-navy lg:col-span-8"
        >
          <Image
            src="/images/gallery/bin-trailer-apartment.webp"
            alt="Bin trailer rental service at a Calgary apartment complex"
            fill
            sizes="(min-width: 1024px) 62vw, 90vw"
            className="object-cover object-[60%_50%]"
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
                All Size Bins
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-white/85">
                10, 12, 15, and 20 yard bins available for any size
                project.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="border border-brand-yellow/60 px-3 py-2 font-display text-xs tracking-[0.08em] text-brand-yellow">
                10 YD
              </span>
              <span className="border border-brand-yellow/60 px-3 py-2 font-display text-xs tracking-[0.08em] text-brand-yellow">
                12 YD
              </span>
              <span className="border border-brand-yellow/60 px-3 py-2 font-display text-xs tracking-[0.08em] text-brand-yellow">
                15 YD
              </span>
              <span className="bg-brand-yellow px-3 py-2 font-display text-xs tracking-[0.08em] text-brand-navy">
                20 YD
              </span>
            </div>
            <Link
              href="/services/bin-rentals"
              className="mt-4 inline-block w-fit border-b-2 border-white/30 font-display text-xs tracking-[0.14em] text-white/80 hover:border-brand-yellow hover:text-brand-yellow"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        <div className="flex flex-col bg-brand-navy lg:col-span-4">
          <div className="flex flex-1 flex-col justify-center px-7 py-[30px]">
            <div className="mb-2 font-display text-xs tracking-[0.2em] text-brand-yellow">
              03
            </div>
            <h3 className="font-display text-[25px] leading-[1.05] text-white">
              Bobcat Services
            </h3>
            <p className="mt-2 text-sm leading-[1.5] text-white/70">
              Bobcat work for site prep, landscaping, and material moving.
            </p>
            <Link
              href="/services/bobcat-services"
              className="mt-3 inline-block w-fit border-b-2 border-white/30 font-display text-xs tracking-[0.14em] text-white/80 hover:border-brand-yellow hover:text-brand-yellow"
            >
              LEARN MORE
            </Link>
          </div>
          <div className="h-px bg-white/15" />
          <div className="flex flex-1 flex-col justify-center px-7 py-[30px]">
            <div className="mb-2 font-display text-xs tracking-[0.2em] text-brand-yellow">
              04
            </div>
            <h3 className="font-display text-[25px] leading-[1.05] text-white">
              Dump Runs
            </h3>
            <p className="mt-2 text-sm leading-[1.5] text-white/70">
              Fast, reliable dump runs for residential and commercial
              waste.
            </p>
            <Link
              href="/services/dump-runs"
              className="mt-3 inline-block w-fit border-b-2 border-white/30 font-display text-xs tracking-[0.14em] text-white/80 hover:border-brand-yellow hover:text-brand-yellow"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[250px] flex-col justify-end overflow-hidden bg-brand-yellow px-[30px] py-[34px] lg:col-span-4">
          <span className="pointer-events-none absolute -top-6 right-1.5 font-display text-[140px] leading-none text-brand-navy/10">
            05
          </span>
          <h3 className="relative font-display text-[34px] leading-none text-brand-navy">
            Demolition
          </h3>
          <p className="relative mt-3 text-[15px] leading-[1.55] text-brand-navy/78">
            Small demolition jobs handled quickly and safely.
          </p>
          <Link
            href="/services/demolition"
            className="relative mt-4 inline-block w-fit border-b-2 border-brand-navy/40 font-display text-xs tracking-[0.14em] text-brand-navy hover:border-brand-navy"
          >
            LEARN MORE
          </Link>
        </div>

        <div className="relative min-h-[250px] overflow-hidden bg-brand-navy lg:col-span-8">
          <Image
            src="/images/gallery/yard-cleanup-debris.webp"
            alt="Site clean-up and yard debris removal in Calgary"
            fill
            sizes="(min-width: 1024px) 62vw, 90vw"
            className="object-cover object-[50%_55%]"
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
                Site Clean-Up
              </h3>
              <p className="mt-[11px] max-w-[420px] text-[15px] leading-[1.55] text-white/85">
                Complete site clean-up services for construction and
                renovation projects.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-4">
              <Link
                href="/services/site-clean-up"
                className="border-b-2 border-white/30 font-display text-xs tracking-[0.14em] text-white/80 hover:border-brand-yellow hover:text-brand-yellow"
              >
                LEARN MORE
              </Link>
              <Link
                href="#contact"
                className="bg-brand-yellow px-[18px] py-3.5 font-display text-xs tracking-[0.12em] text-brand-navy transition hover:brightness-105"
              >
                GET QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
