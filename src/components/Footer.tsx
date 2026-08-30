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

export default function Footer() {
  return (
    <footer className="bg-brand-yellow px-8 pb-[34px] pt-16 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div className="min-w-0">
            <Link href="#home" className="flex items-center gap-3.5">
              <Logo className="h-[54px] w-[54px]" />
              <span className="font-display text-lg leading-[1.1] text-brand-navy">
                STAR DISPOSAL
                <br />
                SERVICES
              </span>
            </Link>
            <p className="mt-[22px] max-w-[380px] text-base font-semibold leading-[1.55] text-brand-navy/80">
              {business.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-[11px] font-display text-[13px] tracking-[0.06em]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-navy hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3.5">
            <a
              href={`tel:${business.phoneMainTel}`}
              className="font-display text-[26px] leading-none text-brand-navy hover:text-brand-red"
            >
              {business.phoneMainDisplay}
            </a>
            <span className="text-sm font-semibold text-brand-navy/70">
              {business.phoneMainSub}
            </span>
            <a
              href={`tel:${business.phoneTedTel}`}
              className="text-[15px] font-semibold text-brand-navy hover:text-brand-red"
            >
              Ted&rsquo;s Cell: {business.phoneTedDisplay}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="break-words text-[15px] font-semibold text-brand-navy hover:text-brand-red"
            >
              {business.email}
            </a>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap justify-between gap-6 border-t border-brand-navy/25 pt-5">
          <span className="text-[13px] text-brand-navy/75">
            {business.address}
          </span>
          <span className="text-[13px] text-brand-navy/65">
            © 2026 Star Disposal Services — Calgary, AB — Since 1996
          </span>
        </div>
      </div>
    </footer>
  );
}
