import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-brand-navy sm:text-4xl">
              About Star Disposal Services
            </h2>
            <div className="mt-2 h-1.5 w-20 bg-brand-red" />

            <p className="mt-6 text-lg text-brand-navy/80">
              Star Disposal Services has been Calgary&apos;s go-to junk
              removal and bin rental company since 1996 — nearly 30 years of
              hauling, cleaning up, and getting the job done right.
            </p>
            <p className="mt-4 text-brand-navy/80">
              Owned and operated by <strong>Talib (Ted) Ferris</strong>, we
              built this business the old-fashioned way: hard work, honest
              pricing, and showing up when we say we will. Whether it&apos;s
              a garage full of junk, a full-scale demolition, or a bin drop
              for your next reno, Ted and the crew treat every job — big or
              small — like it&apos;s the only one that matters.
            </p>
            <p className="mt-4 text-brand-navy/80">
              We&apos;re still local, still family-run, and you can still
              reach Ted directly on his cell. That&apos;s not changing.
            </p>

            <Link
              href="#contact"
              className="glow-yellow mt-8 inline-block rounded-md bg-brand-yellow px-6 py-3 font-display text-sm text-brand-red transition hover:brightness-105"
            >
              GET A FREE QUOTE
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/about/truck-signage.webp"
                alt="Star Disposal Services branded truck with 403-50 WASTE signage"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/about/heritage-bin.webp"
                alt="A vintage Star Disposal Service bin from earlier years in business"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <span className="absolute bottom-0 left-0 right-0 bg-brand-navy/80 px-3 py-1.5 text-center font-display text-xs tracking-wide text-brand-yellow">
                OUR ROOTS — SERVING CALGARY SINCE 1996
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
