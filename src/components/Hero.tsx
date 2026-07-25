import Link from "next/link";
import Logo from "./Logo";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      {/* faint watermark logo */}
      <Logo
        background={false}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:h-[110%] sm:w-[110%]"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center lg:px-8 lg:py-28">
        <span className="mb-4 inline-block rounded-full bg-brand-yellow px-4 py-1 font-display text-xs tracking-wide text-brand-red">
          LOCALLY OWNED & OPERATED SINCE 1996
        </span>

        <h1 className="max-w-4xl font-display text-4xl leading-tight text-brand-yellow sm:text-5xl lg:text-6xl">
          Calgary&apos;s Junk Removal &amp; Bin Rental Experts Since 1996
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-semibold text-white/90 sm:text-xl">
          Bobcat Work, Dump Runs, Site Clean-Up, Demolition, Junk &amp; All
          Size Bins — Starting at $50
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="glow-yellow rounded-md bg-brand-yellow px-8 py-4 font-display text-base text-brand-red shadow-lg transition hover:brightness-105"
          >
            GET A FREE QUOTE
          </Link>
          <a
            href={`tel:${business.phoneMainTel}`}
            className="glow-orange rounded-md bg-brand-orange px-8 py-4 font-display text-base text-white transition hover:brightness-110"
          >
            CALL {business.phoneMainDisplay}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-display text-xs tracking-wide text-white/90 sm:text-sm">
          <span className="flex items-center gap-2">
            <span className="text-brand-yellow">✅</span> SERVING CALGARY SINCE 1996
          </span>
          <span className="flex items-center gap-2">
            <span className="text-brand-yellow">✅</span> FULLY INSURED
          </span>
          <span className="flex items-center gap-2">
            <span className="text-brand-yellow">✅</span> ALL SIZE BINS AVAILABLE
          </span>
        </div>
      </div>
    </section>
  );
}
