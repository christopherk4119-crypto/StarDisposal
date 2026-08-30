import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/lib/business";
import { allHubs } from "@/lib/services";

export const metadata = {
  title: "Page Not Found | Star Disposal Services",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 bg-brand-navy px-8 py-[120px] lg:px-14">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-white/60">
              404
            </span>
          </div>
          <h1 className="font-display text-[clamp(38px,6vw,72px)] leading-[0.98] tracking-[-0.02em] text-white">
            That page is gone.
          </h1>
          <p className="mt-6 max-w-[560px] text-xl leading-[1.5] text-white/80">
            Hauling things away is our whole job, so this is a little on the
            nose. Here is where everything actually lives.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {allHubs.map((hub) => (
              <Link
                key={hub.slug}
                href={`/${hub.slug}`}
                className="border border-brand-yellow/60 px-6 py-4 font-display text-[13px] tracking-[0.1em] text-brand-yellow transition hover:bg-brand-yellow/10"
              >
                {hub.navLabel}
              </Link>
            ))}
            <Link
              href="/"
              className="bg-brand-yellow px-6 py-4 font-display text-[13px] tracking-[0.1em] text-brand-navy transition hover:brightness-105"
            >
              HOME
            </Link>
          </div>

          <a
            href={`tel:${business.phoneMainTel}`}
            className="mt-12 block font-display text-[34px] leading-none text-brand-yellow hover:brightness-110"
          >
            {business.phoneMainDisplay}
          </a>
          <p className="mt-2.5 text-[15px] font-semibold text-white/70">
            8 AM – 8 PM, seven days a week.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
