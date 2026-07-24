import Link from "next/link";
import Logo from "./Logo";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-brand-yellow py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <Logo className="h-14 w-14" />
          <span className="font-display text-lg text-brand-navy">
            STAR DISPOSAL SERVICES
          </span>
        </Link>

        <p className="max-w-xl font-semibold text-brand-navy/80">
          {business.tagline}
        </p>

        <nav className="flex flex-wrap justify-center gap-6 font-display text-sm text-brand-navy">
          <Link href="#home" className="hover:text-brand-red">
            HOME
          </Link>
          <Link href="#services" className="hover:text-brand-red">
            SERVICES
          </Link>
          <Link href="#bins" className="hover:text-brand-red">
            BIN RENTALS
          </Link>
          <Link href="#contact" className="hover:text-brand-red">
            CONTACT
          </Link>
        </nav>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-brand-navy">
          <a href={`tel:${business.phoneMainTel}`} className="hover:text-brand-red">
            {business.phoneMainDisplay} {business.phoneMainSub}
          </a>
          <a href={`tel:${business.phoneTedTel}`} className="hover:text-brand-red">
            Ted&apos;s Cell: {business.phoneTedDisplay}
          </a>
          <a href={`mailto:${business.email}`} className="hover:text-brand-red">
            {business.email}
          </a>
        </div>

        <p className="text-sm text-brand-navy/70">{business.address}</p>

        <p className="text-xs text-brand-navy/60">
          © 2026 Star Disposal Services — Calgary, AB — Since 1996
        </p>
      </div>
    </footer>
  );
}
