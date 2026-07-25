"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import PhoneBadge from "./PhoneBadge";
import { business } from "@/lib/business";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#services", label: "SERVICES" },
  { href: "#bins", label: "BIN RENTALS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 lg:px-8">
        <Link
          href="#home"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Logo className="h-14 w-14 lg:h-16 lg:w-16" />
          <span className="hidden font-display text-lg leading-tight text-white sm:block lg:text-xl">
            STAR DISPOSAL
            <br />
            SERVICES
          </span>
        </Link>

        <nav className="hidden items-center gap-6 font-display text-sm tracking-wide text-white md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-yellow">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-col items-end gap-1 leading-tight lg:flex">
          <PhoneBadge className="text-lg" />
          <a
            href={`tel:${business.phoneTedTel}`}
            className="text-xs font-semibold text-white/90 hover:text-brand-yellow"
          >
            Ted&apos;s Cell: {business.phoneTedDisplay}
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="#contact"
            className="glow-yellow rounded-md bg-brand-yellow px-4 py-2 text-center font-display text-xs text-brand-red shadow-md ring-2 ring-brand-red/20 transition hover:brightness-105 sm:text-sm"
          >
            GET A FREE QUOTE
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md ring-1 ring-white/30 md:hidden"
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 bg-brand-yellow px-4 py-2 md:hidden">
        <PhoneBadge className="px-3 py-1 text-sm" />
        <a
          href={`tel:${business.phoneTedTel}`}
          className="text-xs font-bold text-brand-navy"
        >
          Ted&apos;s Cell: {business.phoneTedDisplay}
        </a>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 bg-brand-navy px-4 pb-4 font-display text-sm tracking-wide text-white md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2 hover:bg-white/10 hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
