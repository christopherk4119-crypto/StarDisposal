import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] px-8 pb-24 pt-[100px] lg:px-14"
    >
      <div className="grid grid-cols-1 items-start gap-[72px] lg:grid-cols-[1fr_0.95fr]">
        <div className="min-w-0 max-w-[580px]">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
              Who you&rsquo;re calling
            </span>
          </div>
          <h2 className="font-display text-[36px] leading-[1.02] tracking-[-0.02em] text-brand-navy sm:text-[44px] sm:leading-none lg:text-[52px]">
            About Star
            <br />
            Disposal Services
          </h2>
          <p className="mt-7 text-xl leading-[1.5] text-brand-navy">
            Star Disposal Services has been Calgary&rsquo;s go-to junk
            removal and bin rental company since 1996 — nearly 30 years of
            hauling, cleaning up, and getting the job done right.
          </p>
          <p className="mt-[22px] text-base leading-[1.65] text-brand-navy/75">
            Owned and operated by{" "}
            <strong className="text-brand-navy">Talib (Ted) Ferris</strong>,
            we built this business the old-fashioned way: hard work, honest
            pricing, and showing up when we say we will. Whether it&rsquo;s
            a garage full of junk, a full-scale demolition, or a bin drop
            for your next reno, Ted and the crew treat every job — big or
            small — like it&rsquo;s the only one that matters.
          </p>
          <p className="mt-5 border-l-4 border-brand-yellow py-1 pl-5 text-[17px] font-semibold leading-[1.55] text-brand-navy">
            We&rsquo;re still local, still family-run, and you can still
            reach Ted directly on his cell. That&rsquo;s not changing.
          </p>
          <div className="mt-[34px] flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-brand-yellow px-6 py-4 font-display text-[13px] tracking-[0.12em] text-brand-navy transition hover:brightness-105"
            >
              GET A FREE QUOTE
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-[44px] items-center border-b-2 border-brand-yellow pb-1 font-display text-[13px] tracking-[0.12em] text-brand-navy hover:text-brand-red"
            >
              MORE ABOUT US →
            </Link>
          </div>
        </div>

        <div className="relative pb-[86px]">
          <div className="relative h-[430px] overflow-hidden bg-brand-navy">
            <Image
              src="/images/about/truck-signage.webp"
              alt="Star Disposal Services branded truck with 403-50 WASTE signage"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-[45%_50%]"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[230px] w-[62%] overflow-hidden border-8 border-white bg-brand-navy lg:-left-14">
            <Image
              src="/images/about/heritage-bin.webp"
              alt="A vintage Star Disposal Service bin from earlier years in business"
              fill
              sizes="40vw"
              className="object-cover"
            />
            <span className="absolute inset-x-0 bottom-0 bg-brand-navy/90 px-1.5 py-2 text-center font-display text-[10px] tracking-[0.14em] text-brand-yellow">
              OUR ROOTS — SERVING CALGARY SINCE 1996
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
