import Link from "next/link";
import Logo from "./Logo";
import PhoneBadge from "./PhoneBadge";
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
  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-4 lg:px-8">
        <Link href="#home" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Logo className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
          <span className="hidden font-display text-base leading-tight text-white sm:block lg:text-xl">
            STAR DISPOSAL
            <br />
            SERVICES
          </span>
        </Link>

        <Link
          href="#contact"
          className="glow-yellow shrink-0 rounded-md bg-brand-yellow px-3 py-2 text-center font-display text-xs text-brand-red shadow-md ring-2 ring-brand-red/20 transition hover:brightness-105 sm:px-4 sm:text-sm"
        >
          GET A FREE QUOTE
        </Link>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/10 px-3 py-2.5 font-display text-sm tracking-wide text-white sm:gap-x-6 sm:text-base">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap hover:text-brand-yellow"
          >
            {link.label}
          </Link>
        ))}
      </nav>

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
