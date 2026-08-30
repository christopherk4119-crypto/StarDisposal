"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import PhoneBadge from "./PhoneBadge";
import { business } from "@/lib/business";

const allLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#why-choose-star", label: "WHY CHOOSE STAR" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#contact", label: "CONTACT" },
];

const coreLinks = allLinks.filter((link) =>
  ["#home", "#services", "#gallery", "#contact"].includes(link.href)
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-4 lg:px-8">
        <Link
          href="#home"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Logo className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16" />
          <span className="hidden font-display text-base leading-tight text-white sm:block xl:text-xl">
            STAR DISPOSAL
            <br />
            SERVICES
          </span>
        </Link>

        <nav className="hidden items-center gap-3 font-display text-xs tracking-wide text-white lg:flex xl:gap-8 xl:text-base">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="#contact"
            className="glow-yellow rounded-md bg-brand-yellow px-3 py-2 text-center font-display text-xs text-brand-red shadow-md ring-2 ring-brand-red/20 transition hover:brightness-105 sm:px-4 sm:text-sm"
          >
            GET A FREE QUOTE
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md ring-1 ring-white/30 lg:hidden"
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/10 px-3 py-2.5 font-display text-sm tracking-wide text-white sm:gap-x-6 sm:text-base lg:hidden">
        {coreLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap hover:text-brand-yellow"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-brand-navy px-4 py-3 font-display text-base tracking-wide text-white lg:hidden">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2.5 hover:bg-white/10 hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-brand-yellow px-3 py-2 sm:gap-x-4">
        <PhoneBadge className="px-3 py-1 text-sm" />
        <a
          href={`tel:${business.phoneTedTel}`}
          className="text-xs font-bold text-brand-navy sm:text-sm"
        >
          Ted&apos;s Cell: {business.phoneTedDisplay}
        </a>
      </div>
    </header>
  );
}
