import Link from "next/link";
import Logo from "./Logo";
import { business } from "@/lib/business";
import { allHubs, servicesByHub } from "@/lib/services";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Area" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-yellow px-8 pb-[34px] pt-16 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0">
            <Link href="/" className="flex items-center gap-3.5">
              <Logo background={false} className="h-[88px] w-auto" />
            </Link>
            <p className="mt-[22px] max-w-[380px] text-base font-semibold leading-[1.55] text-brand-navy/80">
              {business.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`tel:${business.phoneMainTel}`}
                className="flex flex-col gap-1 text-brand-navy hover:text-brand-red"
              >
                <span className="font-display text-[26px] leading-none">
                  {business.phoneMainDisplay}
                </span>
                <span className="text-[15px] font-semibold">
                  {business.phoneMainSub}
                </span>
              </a>
              <a
                href={`tel:${business.phoneTedTel}`}
                className="text-[15px] font-semibold text-brand-navy hover:text-brand-red"
              >
                Ted&rsquo;s Cell (backup): {business.phoneTedDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="break-words text-[15px] font-semibold text-brand-navy hover:text-brand-red"
              >
                {business.email}
              </a>
              <span className="text-[15px] font-semibold text-brand-navy/75">
                Open {business.hours[0].day}, {business.hours[0].time}
              </span>
            </div>
          </div>

          {/* Full service index — every page reachable from every page. */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-4">
            {allHubs.map((hub) => (
              <div key={hub.slug}>
                <Link
                  href={`/${hub.slug}`}
                  className="flex min-h-[40px] items-end border-b border-brand-navy/30 pb-2 font-display text-[12px] tracking-[0.08em] text-brand-navy hover:text-brand-red sm:block sm:min-h-0"
                >
                  {hub.navLabel}
                </Link>
                <ul className="mt-2 flex flex-col sm:mt-3 sm:gap-2.5">
                  {servicesByHub(hub.slug).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/${service.hub}/${service.slug}`}
                        className="flex min-h-[38px] items-center text-[14px] font-medium leading-snug text-brand-navy/75 hover:text-brand-red sm:min-h-0 sm:text-[13px]"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <span className="block border-b border-brand-navy/30 pb-2 font-display text-[12px] tracking-[0.08em] text-brand-navy">
                COMPANY
              </span>
              <ul className="mt-2 flex flex-col sm:mt-3 sm:gap-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[38px] items-center text-[14px] font-medium leading-snug text-brand-navy/75 hover:text-brand-red sm:min-h-0 sm:text-[13px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-11 border-t border-brand-navy/25 pt-5">
          <span className="text-[13px] text-brand-navy/65">
            © {new Date().getFullYear()} {business.name} — Calgary, AB — Since{" "}
            {business.foundingDate}
          </span>
        </div>
      </div>
    </footer>
  );
}
