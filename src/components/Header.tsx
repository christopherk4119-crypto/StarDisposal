import Link from "next/link";
import Logo from "./Logo";
import PhoneBadge from "./PhoneBadge";
import { business } from "@/lib/business";

const navLinks = [
  { href: "#home", label: "HOME", core: true },
  { href: "#about", label: "ABOUT", core: false },
  { href: "#services", label: "SERVICES", core: true },
  { href: "#why-choose-star", label: "WHY CHOOSE STAR", core: false },
  { href: "#gallery", label: "GALLERY", core: true },
  { href: "#contact", label: "CONTACT", core: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-1 px-2 py-2 md:gap-3 md:px-4 lg:gap-4 lg:px-8">
        <Link href="#home" className="flex shrink-0 items-center gap-1.5 md:gap-2 lg:gap-3">
          <Logo className="h-9 w-9 md:h-11 md:w-11 lg:h-16 lg:w-16" />
          <span className="hidden font-display text-lg leading-tight text-white lg:block">
            STAR DISPOSAL
            <br />
            SERVICES
          </span>
        </Link>

        <nav className="flex items-center gap-1.5 font-display text-[10px] text-white md:gap-3 md:text-xs lg:gap-2.5 lg:text-[11px] xl:gap-6 xl:text-sm xl:tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap hover:text-brand-yellow ${
                link.core ? "" : "hidden lg:inline-block"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="glow-yellow shrink-0 rounded-md bg-brand-yellow px-2 py-1.5 text-center font-display text-[10px] text-brand-red shadow-md ring-2 ring-brand-red/20 transition hover:brightness-105 md:px-3 md:py-2 md:text-xs xl:px-4 xl:text-sm"
        >
          <span className="xl:hidden">QUOTE</span>
          <span className="hidden xl:inline">GET A FREE QUOTE</span>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-brand-yellow px-3 py-2 md:gap-x-4">
        <PhoneBadge className="px-3 py-1 text-sm" />
        <a
          href={`tel:${business.phoneTedTel}`}
          className="text-xs font-bold text-brand-navy md:text-sm"
        >
          Ted&apos;s Cell: {business.phoneTedDisplay}
        </a>
      </div>
    </header>
  );
}
