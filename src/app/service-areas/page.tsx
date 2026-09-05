import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CallBand from "@/components/CallBand";
import FaqSection from "@/components/FaqSection";
import QuoteSection from "@/components/QuoteSection";
import { siteUrl, business } from "@/lib/business";
import { allHubs } from "@/lib/services";

const title = "Service Area | Junk Removal Calgary & Airdrie";
const description =
  "Star Disposal Services covers all quadrants of Calgary plus Airdrie, Cochrane and Chestermere. Yard on 14 Ave SE. Call 403-509-2783.";
const url = `${siteUrl}/service-areas`;

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

const quadrants = [
  {
    name: "SE Calgary",
    note: "Our home quadrant — the yard is on 14 Ave SE.",
    body: "Inglewood, Ramsay, Forest Lawn, Dover, Erin Woods, Ogden, Riverbend, McKenzie Towne, Auburn Bay, Mahogany, Douglasdale and the industrial areas around Foothills. Short response times here because it is where we are based.",
  },
  {
    name: "NE Calgary",
    note: "Heavy bin and clean-out volume.",
    body: "Marlborough, Rundle, Whitehorn, Temple, Falconridge, Castleridge, Martindale, Saddleridge, Taradale, Cornerstone and Skyview. A lot of our garage clean-out and bin work happens in the northeast.",
  },
  {
    name: "NW Calgary",
    note: "Renovation and estate work.",
    body: "Bowness, Montgomery, Varsity, Brentwood, Dalhousie, Tuscany, Citadel, Evanston, Sage Hill and Kensington. Older housing stock here means a lot of renovation bins and estate clear-outs.",
  },
  {
    name: "SW Calgary",
    note: "Inner-city access and tight driveways.",
    body: "Killarney, Marda Loop, Altadore, Mission, Beltline, Lakeview, Signal Hill, Aspen Woods and Silverado. Narrow inner-city driveways here are exactly where a 10 or 12 yard bin earns its keep.",
  },
];

const towns = [
  {
    name: "Airdrie",
    body: "A regular run, not an occasional trip. No surcharge on a normal-sized load. Bins, junk removal, dump runs and site work all available on the same basis as Calgary.",
    links: [
      { label: "Junk removal in Airdrie", path: "/junk-removal-airdrie" },
      { label: "Bin rentals in Airdrie", path: "/bin-rental-airdrie" },
    ],
  },
  {
    name: "Cochrane",
    body: "Covered for bins, clean-outs and site work. Worth calling ahead for scheduling on larger jobs so we can plan the run.",
  },
  {
    name: "Chestermere",
    body: "Covered for the full range of services. Acreage clean-ups and larger property jobs are common out this way.",
  },
];

const faqs = [
  {
    q: "Do you charge extra to come to Airdrie?",
    a: "No surcharge on a normal-sized load. Airdrie is a regular run for us rather than an occasional trip, and bins, junk removal and site work are all available on the same basis as Calgary.",
  },
  {
    q: "Which part of Calgary are you based in?",
    a: "Our yard is at 2729 14 Ave SE, in the southeast. That means the shortest response times are in SE Calgary, but we run all four quadrants every week.",
  },
  {
    q: "Do you go outside Calgary and Airdrie?",
    a: "Cochrane and Chestermere are covered as standard. For anything further out, call 403-509-2783 and describe the job — we will tell you honestly whether it makes sense for us to take it.",
  },
  {
    q: "Can you get a bin into an inner-city back alley?",
    a: "Usually yes, and in Inglewood, Ramsay, Bridgeland and Killarney the alley is often easier than the driveway. A 10 or 12 yard bin fits where larger ones will not. Check for low overhead wires — that is the most common reason a drop has to be re-sited.",
  },
  {
    q: "Do you serve acreages?",
    a: "Yes. Acreage clean-ups around Chestermere and outside city limits are common work for us, and they are usually metal-heavy, which works in your favour on the price.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          h1="Junk Removal &amp; Bin Rentals Across Calgary"
          summary="All four Calgary quadrants plus Airdrie, Cochrane and Chestermere. Our yard is on 14 Ave SE."
          image="/images/about/truck-signage.webp"
          imageAlt="Star Disposal Services truck serving Calgary, Airdrie, Cochrane and Chestermere"
          eyebrow="Where we run"
          trail={[{ name: "Service Area", path: "/service-areas" }]}
        />

        <section className="mx-auto max-w-[1300px] px-8 pb-16 pt-[88px] lg:px-14">
          <p className="max-w-[760px] text-xl leading-[1.5] text-brand-navy">
            We have been running out of the same southeast Calgary yard since
            1996. That is long enough to know which alleys a bin truck fits
            down, which driveways will not take a 20 yard, and how long it
            takes to get from Forest Lawn to Airdrie at four in the afternoon.
          </p>
          <p className="mt-5 max-w-[760px] text-[17px] leading-[1.65] text-brand-navy/78">
            Rather than building a page for every neighbourhood, here is the
            honest version: we cover the whole city and the towns immediately
            around it. If you are inside that area, call{" "}
            <a
              href={`tel:${business.phoneMainTel}`}
              className="font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-red"
            >
              {business.phoneMainSub}
            </a>{" "}
            and we will be there.
          </p>
        </section>

        <section className="bg-[#f5f5f1] px-8 pb-24 pt-[88px] lg:px-14">
          <div className="mx-auto max-w-[1300px]">
            <div className="mb-[18px] flex items-center gap-2.5">
              <span className="h-2 w-2 bg-brand-yellow" />
              <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
                Calgary
              </span>
            </div>
            <h2 className="mb-9 font-display text-[34px] leading-[0.98] tracking-[-0.02em] text-brand-navy lg:text-[46px]">
              All four quadrants
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {quadrants.map((q) => (
                <div key={q.name} className="bg-white px-8 py-9">
                  <h3 className="font-display text-[28px] leading-none text-brand-navy">
                    {q.name}
                  </h3>
                  <p className="mt-2 font-display text-[11px] uppercase tracking-[0.14em] text-brand-navy/50">
                    {q.note}
                  </p>
                  <p className="mt-4 text-[16px] leading-[1.62] text-brand-navy/75">
                    {q.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1300px] px-8 pb-20 pt-[88px] lg:px-14">
          <div className="mb-[18px] flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
              Surrounding towns
            </span>
          </div>
          <h2 className="mb-9 font-display text-[34px] leading-[0.98] tracking-[-0.02em] text-brand-navy lg:text-[46px]">
            Beyond the city limits
          </h2>
          <div className="flex flex-col">
            {towns.map((town, i) => (
              <div
                key={town.name}
                className={`grid grid-cols-1 gap-4 border-t border-brand-navy/18 py-7 lg:grid-cols-[260px_1fr] lg:gap-10 ${
                  i === towns.length - 1 ? "border-b" : ""
                }`}
              >
                <h3 className="font-display text-[30px] leading-none text-brand-navy">
                  {town.name}
                </h3>
                <div>
                  <p className="max-w-[820px] text-[16px] leading-[1.65] text-brand-navy/75">
                    {town.body}
                  </p>
                  {"links" in town && town.links && (
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                      {town.links.map((link) => (
                        <Link
                          key={link.path}
                          href={link.path}
                          className="font-display text-[13px] tracking-[0.06em] text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-red"
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1300px] px-8 pb-24 lg:px-14">
          <h2 className="mb-8 font-display text-[28px] leading-[1.05] text-brand-navy lg:text-[34px]">
            What we do everywhere we go
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
          heading="Get a quote anywhere in our area"
          blurb="Calgary, Airdrie, Cochrane or Chestermere — tell us the job and we will come back with a price."
        />

        <FaqSection faqs={faqs} heading="Service area questions" />

        <CallBand
          tone="yellow"
          heading="Inside our area? Call and we will be there."
          blurb={`${business.phoneMainSub} — ${business.phoneMainDisplay} — 8 AM to 8 PM, seven days. Jobs start at $50.`}
        />
      </main>
      <Footer />
    </>
  );
}
