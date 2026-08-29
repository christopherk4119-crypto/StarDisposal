"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { business } from "@/lib/business";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#bins", label: "Bins" },
  { href: "#gallery", label: "Our Work" },
  { href: "#about", label: "About Ted" },
];

export default function Hero() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/about/truck-signage.webp"
          alt="Star Disposal truck with 403-50 WASTE signage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_50%] lg:object-[center_45%]"
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(30,42,94,0) 0%, rgba(30,42,94,.7) 40%, rgba(30,42,94,.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(100deg, rgba(30,42,94,.94) 0%, rgba(30,42,94,.88) 38%, rgba(30,42,94,.35) 72%, rgba(30,42,94,.15) 100%)",
          }}
        />
      </div>

      {/* header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-5 lg:px-16">
        <Link href="#home" className="flex items-center gap-2.5 lg:gap-3.5">
          <Logo className="h-10 w-10 lg:h-[52px] lg:w-[52px]" />
          <span className="font-display text-[13px] leading-tight text-white lg:text-[17px]">
            STAR DISPOSAL
            <br />
            SERVICES
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-display text-[13px] uppercase tracking-[0.13em] text-white/80 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-yellow">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="hidden items-center gap-2.5 rounded-md bg-brand-yellow px-5 py-3 font-display text-[15px] text-brand-navy transition hover:brightness-105 lg:flex"
        >
          <span className="h-[9px] w-[9px] rounded-full bg-brand-navy" />
          {business.phoneMainDisplay}
        </button>

        <button
          type="button"
          aria-label="Menu"
          className="flex flex-col gap-[5px] p-2.5 lg:hidden"
        >
          <span className="block h-0.5 w-[22px] bg-white" />
          <span className="block h-0.5 w-[22px] bg-white" />
          <span className="block h-0.5 w-[22px] bg-white" />
        </button>
      </div>

      {/* content */}
      <div className="relative z-10 px-5 pb-40 pt-16 lg:max-w-[900px] lg:px-16 lg:pb-24 lg:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/50 px-3.5 py-1.5 font-display text-[10px] uppercase tracking-[0.13em] text-brand-yellow lg:gap-2.5 lg:px-4 lg:py-[7px] lg:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow lg:h-[7px] lg:w-[7px]" />
          Calgary owned since 1996
        </div>

        <h1 className="mt-[18px] font-display text-[52px] leading-[0.98] tracking-tight text-white lg:mt-6 lg:text-[82px]">
          Junk gone
          <br />
          <span className="text-brand-yellow">today.</span>
        </h1>

        <p className="mt-4 text-base leading-relaxed text-white/85 lg:mt-[26px] lg:max-w-[520px] lg:text-xl">
          <span className="lg:hidden">
            Bins, dump runs, bobcat work and clean-outs. Ted picks up. From $50.
          </span>
          <span className="hidden lg:inline">
            Bins, dump runs, bobcat work and full clean-outs across Calgary. Ted
            picks up the phone. Jobs start at $50.
          </span>
        </p>

        {/* mobile: feature pills */}
        <div className="mt-[26px] flex flex-wrap gap-2 lg:hidden">
          <span className="rounded-[5px] bg-brand-yellow px-[11px] py-1.5 font-display text-[11px] uppercase tracking-[0.08em] text-brand-navy">
            Fully insured
          </span>
          <span className="rounded-[5px] border border-white/30 px-[11px] py-1.5 font-display text-[11px] uppercase tracking-[0.08em] text-white/85">
            10–20 yd bins
          </span>
          <span className="rounded-[5px] border border-white/30 px-[11px] py-1.5 font-display text-[11px] uppercase tracking-[0.08em] text-white/85">
            Same-day
          </span>
        </div>

        {/* desktop: call CTA + email link */}
        <div className="mt-10 hidden items-center gap-5 lg:flex">
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className="pulse-ring flex items-center gap-4 rounded-[10px] bg-brand-yellow px-[34px] py-[22px] text-left text-brand-navy transition hover:brightness-105"
          >
            <span className="font-display text-[15px] tracking-wide">CALL NOW</span>
            <span className="block h-[34px] w-px bg-brand-navy/25" />
            <span className="flex flex-col gap-0.5">
              <span className="font-display text-[26px] leading-none">
                {business.phoneMainDisplay}
              </span>
              <span className="text-xs font-semibold text-brand-navy/70">
                Ted or the yard, 7 AM – 6 PM
              </span>
            </span>
          </button>
          <Link
            href="#contact"
            className="border-b-2 border-brand-yellow/70 pb-[3px] text-[15px] font-bold text-white hover:text-brand-yellow"
          >
            Rather get a quote by email →
          </Link>
        </div>

        {/* desktop: stats row */}
        <div className="mt-16 hidden max-w-[760px] gap-11 border-t border-white/15 pt-[26px] lg:flex">
          <div className="flex flex-col gap-1">
            <span className="font-display text-[28px] text-brand-yellow">29 yrs</span>
            <span className="text-[13px] text-white/70">Serving Calgary</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-[28px] text-brand-yellow">$50</span>
            <span className="text-[13px] text-white/70">Smallest job</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-[28px] text-brand-yellow">10–20 yd</span>
            <span className="text-[13px] text-white/70">Bin sizes</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-[28px] text-brand-yellow">Insured</span>
            <span className="text-[13px] text-white/70">Every job</span>
          </div>
        </div>
      </div>

      {/* mobile: fixed bottom call bar */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 px-4 pb-7 pt-4 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,42,94,0) 0%, rgba(30,42,94,.96) 34%)",
        }}
      >
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand-yellow px-5 py-5 text-brand-navy transition hover:brightness-105"
        >
          <span className="font-display text-xl">CALL {business.phoneMainDisplay}</span>
        </button>
        <div className="mt-2.5 text-center text-[13px] font-semibold text-white/75">
          Ted or the yard, 7 AM – 6 PM
        </div>
      </div>

      {/* tap-to-call sheet */}
      {sheetOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center lg:items-center lg:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Reach us"
        >
          <div
            className="absolute inset-0 bg-[rgba(15,23,56,0.72)]"
            onClick={() => setSheetOpen(false)}
          />
          <div className="relative w-full rounded-t-[20px] bg-white p-[18px] pb-7 lg:w-[440px] lg:rounded-2xl lg:p-7">
            <div className="mx-auto mb-4 h-1 w-11 rounded-full bg-brand-navy/20 lg:hidden" />
            <div className="hidden font-display text-xs uppercase tracking-[0.14em] text-[#8a8a80] lg:block">
              Reach us
            </div>

            <div className="flex flex-col gap-2.5 lg:mt-4">
              <a
                href={`tel:${business.phoneMainTel}`}
                className="flex flex-col gap-0.5 rounded-xl bg-brand-yellow px-[18px] py-4 text-brand-navy transition hover:brightness-105 lg:flex-row lg:items-center lg:justify-between"
              >
                <span className="font-display text-[19px] lg:text-xl">
                  {business.phoneMainDisplay}
                </span>
                <span className="text-xs font-semibold lg:text-[13px]">
                  Main line · {business.phoneMainSub.replace(/[()]/g, "")}
                </span>
              </a>
              <a
                href={`tel:${business.phoneTedTel}`}
                className="flex flex-col gap-0.5 rounded-xl border border-brand-navy/20 px-[18px] py-4 text-brand-navy transition hover:border-brand-navy lg:flex-row lg:items-center lg:justify-between"
              >
                <span className="font-display text-[19px] lg:text-xl">
                  {business.phoneTedDisplay}
                </span>
                <span className="text-xs font-semibold opacity-70 lg:text-[13px]">
                  Ted&apos;s cell
                </span>
              </a>
              <a
                href={`sms:${business.phoneTedTel}`}
                className="flex items-center justify-between rounded-xl border border-brand-navy/20 px-[18px] py-4 text-brand-navy transition hover:border-brand-navy"
              >
                <span className="text-[15px] font-bold">Text photos of the job</span>
                <span className="text-xs font-semibold opacity-70 lg:text-[13px]">
                  Fastest quote
                </span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center justify-between rounded-xl border border-brand-navy/20 px-[18px] py-4 text-brand-navy transition hover:border-brand-navy"
              >
                <span className="text-[15px] font-bold">Email a quote request</span>
                <span className="text-xs font-semibold opacity-70 lg:text-[13px]">
                  Reply next business day
                </span>
              </a>
            </div>

            <div className="mt-4 hidden text-center text-[13px] text-brand-navy/60 lg:block">
              Mon–Fri 7:00–6:00 · Sat 8:00–4:00 · Sun by appointment
            </div>

            <button
              type="button"
              onClick={() => setSheetOpen(false)}
              className="mt-3.5 w-full text-center text-sm font-semibold text-[#8a8a80]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
