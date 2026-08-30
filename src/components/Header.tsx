"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { business } from "@/lib/business";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#why-choose-star", label: "WHY CHOOSE STAR" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-yellow/35 bg-brand-navy">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3.5 lg:gap-6 lg:px-10">
        <Link
          href="#home"
          className="flex min-w-0 shrink items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Logo className="h-11 w-11 shrink-0" />
          <span className="hidden font-display text-sm leading-tight text-white sm:block">
            STAR DISPOSAL
            <br />
            SERVICES
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center gap-x-6 gap-y-3 font-display text-[11px] tracking-[0.14em] lg:flex">
          <Link
            href="#home"
            className="whitespace-nowrap border-b-2 border-brand-yellow pb-[3px] text-white/85 hover:text-brand-yellow"
          >
            HOME
          </Link>
          {navLinks.slice(1).map((link) => (
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
          <Link
            href="#contact"
            className="whitespace-nowrap bg-brand-yellow px-3 py-2.5 font-display text-[10px] tracking-[0.1em] text-brand-navy transition hover:brightness-105 sm:px-4 sm:py-3 sm:text-[11px] sm:tracking-[0.12em]"
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

      <nav className="flex items-center gap-5 border-t border-white/10 px-5 py-2.5 font-display text-[11px] tracking-[0.12em] lg:hidden">
        <Link
          href="#home"
          className="whitespace-nowrap border-b-2 border-brand-yellow pb-[3px] text-white"
        >
          HOME
        </Link>
        <Link
          href="#services"
          className="whitespace-nowrap border-b-2 border-transparent pb-[3px] text-white/85"
        >
          SERVICES
        </Link>
        <Link
          href="#contact"
          className="whitespace-nowrap border-b-2 border-transparent pb-[3px] text-white/85"
        >
          CONTACT
        </Link>
      </nav>

      {menuOpen && (
        <nav className="flex flex-col border-t border-white/15 bg-brand-navy px-6 py-2 font-display text-sm tracking-[0.1em] lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-[15px] text-white last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${business.phoneMainTel}`}
            className="mt-3 bg-white/10 py-4 text-center text-base text-brand-yellow"
          >
            CALL {business.phoneMainDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
