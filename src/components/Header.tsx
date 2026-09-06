"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { business } from "@/lib/business";
import { allHubs, servicesByHub } from "@/lib/services";

const mainLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/service-areas", label: "SERVICE AREA" },
  { href: "/#gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const close = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-yellow/35 bg-brand-navy">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3.5 lg:gap-6 lg:px-10">
        <Link href="/" className="flex min-w-0 shrink items-center gap-3" onClick={close}>
          <Logo variant="compact" className="h-[46px] w-auto shrink-0 sm:hidden" />
          <Logo className="hidden h-[58px] w-auto shrink-0 sm:block" />
        </Link>

        <nav
          aria-label="Main"
          className="hidden min-w-0 flex-1 items-center justify-center gap-x-7 font-display text-[11px] tracking-[0.14em] lg:flex"
        >
          <Link
            href="/"
            className="whitespace-nowrap border-b-2 border-transparent pb-[3px] text-white/85 hover:border-brand-yellow/60 hover:text-brand-yellow"
          >
            HOME
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1.5 whitespace-nowrap border-b-2 border-transparent pb-[3px] font-display text-[11px] tracking-[0.14em] text-white/85 hover:border-brand-yellow/60 hover:text-brand-yellow"
            >
              SERVICES
              <span aria-hidden="true" className="text-brand-yellow">
                ▾
              </span>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[min(92vw,880px)] -translate-x-1/2 border border-brand-yellow/30 bg-brand-navy p-7 shadow-2xl">
                <div className="grid grid-cols-3 gap-7">
                  {allHubs.map((hub) => (
                    <div key={hub.slug}>
                      <Link
                        href={`/${hub.slug}`}
                        onClick={close}
                        className="block border-b border-brand-yellow/35 pb-2.5 font-display text-[13px] tracking-[0.08em] text-brand-yellow hover:text-white"
                      >
                        {hub.navLabel}
                      </Link>
                      <ul className="mt-3 flex flex-col gap-2.5">
                        {servicesByHub(hub.slug).map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/${service.hub}/${service.slug}`}
                              onClick={close}
                              className="block font-sans text-[13px] font-medium tracking-normal text-white/75 hover:text-brand-yellow"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {mainLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap border-b-2 border-transparent pb-[3px] text-white/85 hover:border-brand-yellow/60 hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${business.phoneMainTel}`}
            className="hidden shrink-0 flex-col items-end leading-none text-brand-yellow hover:brightness-110 xl:flex"
          >
            <span className="whitespace-nowrap font-display text-[15px]">
              {business.phoneMainDisplay}
            </span>
            <span className="mt-1 whitespace-nowrap text-[11px] font-semibold text-white/70">
              {business.phoneMainSub}
            </span>
          </a>
          <Link
            href="/contact"
            onClick={close}
            className="flex min-h-[46px] items-center whitespace-nowrap bg-brand-yellow px-4 font-display text-[12px] tracking-[0.1em] text-brand-navy transition hover:brightness-105 sm:px-4 sm:text-[11px] sm:tracking-[0.12em]"
          >
            <span className="sm:hidden">QUOTE</span>
            <span className="hidden sm:inline">GET A FREE QUOTE</span>
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-[46px] w-[46px] shrink-0 flex-col items-center justify-center gap-[5px] border border-white/35 lg:hidden"
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile: three options only — everything else lives behind the hamburger. */}
      <nav
        aria-label="Quick links"
        className="grid grid-cols-3 border-t border-white/10 font-display text-[11px] tracking-[0.12em] lg:hidden"
      >
        <Link
          href="/"
          onClick={close}
          className="flex min-h-[48px] items-center justify-center border-r border-white/10 text-white/85 active:bg-white/10"
        >
          HOME
        </Link>
        <Link
          href="/#services"
          onClick={close}
          className="flex min-h-[48px] items-center justify-center border-r border-white/10 text-white/85 active:bg-white/10"
        >
          SERVICES
        </Link>
        <Link
          href="/contact"
          onClick={close}
          className="flex min-h-[48px] items-center justify-center text-white/85 active:bg-white/10"
        >
          CONTACT
        </Link>
      </nav>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="max-h-[75vh] overflow-y-auto border-t border-white/15 bg-brand-navy px-6 py-2 lg:hidden"
        >
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="block border-b border-white/10 py-[15px] font-display text-sm tracking-[0.1em] text-white"
            >
              {link.label}
            </Link>
          ))}

          {allHubs.map((hub) => (
            <div key={hub.slug} className="border-b border-white/10 py-4">
              <Link
                href={`/${hub.slug}`}
                onClick={close}
                className="block font-display text-sm tracking-[0.1em] text-brand-yellow"
              >
                {hub.navLabel}
              </Link>
              <ul className="mt-3 flex flex-col gap-3 pl-4">
                {servicesByHub(hub.slug).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.hub}/${service.slug}`}
                      onClick={close}
                      className="block text-[15px] font-medium text-white/75"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <a
            href={`tel:${business.phoneMainTel}`}
            className="mt-3 mb-2 block bg-white/10 py-4 text-center text-brand-yellow"
          >
            <span className="block font-display text-base">
              CALL {business.phoneMainDisplay}
            </span>
            <span className="mt-1 block text-[13px] font-semibold text-white/70">
              {business.phoneMainSub}
            </span>
          </a>
        </nav>
      )}
    </header>
  );
}
