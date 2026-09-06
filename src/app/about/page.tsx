import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CallBand from "@/components/CallBand";
import Testimonials from "@/components/Testimonials";
import QuoteSection from "@/components/QuoteSection";
import { siteUrl, business } from "@/lib/business";
import { allHubs } from "@/lib/services";

const title = "About Star Disposal Services | Calgary Since 1996";
const description =
  "Family run Calgary junk removal and bin rental since 1996. Owned by Talib (Ted) Ferris, who still answers the phone. Call 403-509-2783.";
const url = `${siteUrl}/about`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: business.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

const facts = [
  { value: "1996", label: "Year we started", note: "Nearly 30 years in the same city." },
  { value: "$50", label: "Smallest job", note: "One item at the curb is still a job." },
  { value: "7 days", label: "Open every day", note: "8 AM to 8 PM, weekends included." },
  { value: "Insured", label: "On every job", note: "Residential and commercial." },
  { value: "WCB", label: "Crew covered", note: "Every job, every crew member." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          h1="About Star Disposal Services"
          summary="Family run out of the same southeast Calgary yard since 1996. Ted still answers the phone himself."
          image="/images/about/heritage-bin.webp"
          imageAlt="A vintage Star Disposal bin from the company's earlier years in Calgary"
          eyebrow="Who you're calling"
          trail={[{ name: "About", path: "/about" }]}
        />

        <section className="mx-auto max-w-[1300px] px-8 pb-20 pt-[88px] lg:px-14">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0">
              <p className="text-xl leading-[1.5] text-brand-navy">
                Star Disposal Services has been hauling junk, dropping bins and
                cleaning up sites in Calgary since 1996 — nearly thirty years
                out of the same southeast Calgary yard.
              </p>
              <p className="mt-5 text-[17px] leading-[1.65] text-brand-navy/78">
                The business is owned and operated by{" "}
                <strong className="text-brand-navy">{business.owner}</strong>,
                and it was built the old-fashioned way: hard work, honest
                pricing, and showing up when we say we will. Ted has been doing
                this long enough to tell you on the phone whether your job is a
                truck or a bin, whether a 15 yard will fit down your driveway,
                and what a load of concrete is actually going to weigh.
              </p>
              <p className="mt-5 text-[17px] leading-[1.65] text-brand-navy/78">
                We are not a franchise and we are not a call centre. When you
                ring {business.phoneMainSub}, you get someone who has been
                on the trucks. That is not a marketing line — it is the whole
                reason people call us back.
              </p>
              <p className="mt-6 border-l-4 border-brand-yellow py-1 pl-5 text-[17px] font-semibold leading-[1.55] text-brand-navy">
                Still local, still family-run, and the number on the truck is
                still the number that answers. That is not changing.
              </p>
            </div>

            <div className="bg-brand-navy px-8 py-9">
              <div className="mb-6 font-display text-[11px] tracking-[0.16em] text-brand-yellow">
                THE SHORT VERSION
              </div>
              <div className="flex flex-col">
                {facts.map((fact, i) => (
                  <div
                    key={fact.label}
                    className={`grid grid-cols-[100px_1fr] items-baseline gap-5 border-t border-white/18 py-[18px] ${
                      i === facts.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="font-display text-[26px] leading-[0.9] text-brand-yellow">
                      {fact.value}
                    </span>
                    <div>
                      <div className="font-display text-[15px] text-white">
                        {fact.label}
                      </div>
                      <p className="mt-1.5 text-[14px] leading-[1.5] text-white/70">
                        {fact.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f1] px-8 pb-24 pt-[88px] lg:px-14">
          <div className="mx-auto max-w-[1300px]">
            <div className="flex flex-col gap-14">
              <article className="grid grid-cols-1 gap-8 border-t border-brand-navy/18 pt-9 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <div className="mb-3 font-display text-xs tracking-[0.2em] text-brand-yellow">
                    01
                  </div>
                  <h2 className="font-display text-[28px] leading-[1.05] text-brand-navy lg:text-[34px]">
                    How we quote
                  </h2>
                </div>
                <div>
                  <p className="text-[17px] leading-[1.68] text-brand-navy/78">
                    You get a price before anything moves. If the pile turns out
                    to be bigger than it sounded on the phone, you hear the
                    revised number before it goes on the truck — not after it is
                    loaded and you have no leverage.
                  </p>
                  <p className="mt-4 text-[17px] leading-[1.68] text-brand-navy/78">
                    Disposal is priced by volume and by weight, and weight is
                    the part people do not expect. Concrete, tile, dirt and
                    shingles cost more than their size suggests because the
                    landfill charges by the tonne. Telling us what the material
                    actually is gets you a number that holds.
                  </p>
                </div>
              </article>

              <article className="grid grid-cols-1 gap-8 border-t border-brand-navy/18 pt-9 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <div className="mb-3 font-display text-xs tracking-[0.2em] text-brand-yellow">
                    02
                  </div>
                  <h2 className="font-display text-[28px] leading-[1.05] text-brand-navy lg:text-[34px]">
                    What we will not do
                  </h2>
                </div>
                <div>
                  <p className="text-[17px] leading-[1.68] text-brand-navy/78">
                    We do not take hazardous waste, we do not touch asbestos,
                    and we do not take on structural or multi-storey demolition.
                    Those need licensed specialists, and a disposal company
                    pretending otherwise is how people get hurt and properties
                    get damaged.
                  </p>
                  <p className="mt-4 text-[17px] leading-[1.68] text-brand-navy/78">
                    We also will not tell you that you need a bigger bin than
                    you do, or a haul when a bin would cost you less. Turning
                    down the wrong job is cheaper for us than doing it badly.
                  </p>
                </div>
              </article>

              <article className="grid grid-cols-1 gap-8 border-t border-brand-navy/18 pt-9 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <div className="mb-3 font-display text-xs tracking-[0.2em] text-brand-yellow">
                    03
                  </div>
                  <h2 className="font-display text-[28px] leading-[1.05] text-brand-navy lg:text-[34px]">
                    Where it goes
                  </h2>
                </div>
                <div>
                  <p className="text-[17px] leading-[1.68] text-brand-navy/78">
                    Metal comes out of every load and goes to a scrap yard
                    rather than the landfill. Clean yard waste goes to compost.
                    Tires go through Alberta&rsquo;s recycling program.
                    Electronics go through the provincial program.
                  </p>
                  <p className="mt-4 text-[17px] leading-[1.68] text-brand-navy/78">
                    What is left goes to the City of Calgary landfill and we pay
                    the tipping fee. We are not going to claim everything gets
                    diverted — a load of broken particleboard is landfill. But
                    sorting the metal and the organics out of a load is worth
                    doing, and we do it every time.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="mx-auto max-w-[1300px] px-8 pb-24 pt-[92px] lg:px-14">
          <h2 className="mb-8 font-display text-[32px] leading-[1.02] text-brand-navy lg:text-[42px]">
            What we do
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {allHubs.map((hub) => (
              <Link
                key={hub.slug}
                href={`/${hub.slug}`}
                className="group flex flex-col justify-between gap-6 border border-brand-navy/15 bg-white px-7 py-8 transition hover:border-brand-yellow hover:bg-brand-navy"
              >
                <div>
                  <h3 className="font-display text-2xl leading-[1.08] text-brand-navy transition group-hover:text-white">
                    {hub.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-brand-navy/70 transition group-hover:text-white/75">
                    {hub.summary}
                  </p>
                </div>
                <span className="font-display text-[11px] tracking-[0.14em] text-brand-navy/55 transition group-hover:text-brand-yellow">
                  VIEW SERVICE →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <QuoteSection
          heading="Tell us about the job"
          blurb="Nearly thirty years doing this in Calgary. Send the details and you get a straight number back."
        />

        <CallBand
          tone="yellow"
          heading="Talk to Ted directly"
          blurb={`${business.phoneMainSub} — ${business.phoneMainDisplay} — 8 AM to 8 PM, seven days. No call centre, no callback queue.`}
        />
      </main>
      <Footer />
    </>
  );
}
