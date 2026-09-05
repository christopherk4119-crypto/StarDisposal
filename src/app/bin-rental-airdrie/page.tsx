import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CallBand from "@/components/CallBand";
import FaqSection from "@/components/FaqSection";
import QuoteSection from "@/components/QuoteSection";
import ServiceSchema from "@/components/ServiceSchema";
import { siteUrl, business } from "@/lib/business";

const path = "/bin-rental-airdrie";
const title = "Bin Rental Airdrie | 10 to 20 Yard | Star Disposal";
const description =
  "Bin rentals in Airdrie from $50 — 10, 12, 15 and 20 yard bins, delivered and picked up on your schedule. Call 403-509-2783.";
const url = `${siteUrl}${path}`;

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

const faqs = [
  {
    q: "What bin sizes do you deliver to Airdrie?",
    a: "10, 12, 15 and 20 yard bins, the same range we run in Calgary. If you're not sure which size fits the job, call and describe it and we'll tell you honestly which one you need.",
  },
  {
    q: "Is there an extra delivery fee for Airdrie?",
    a: "No. Airdrie is a regular route for our delivery truck, not a special trip, so it's priced the same as a Calgary drop-off.",
  },
  {
    q: "How long can I keep the bin?",
    a: "Rental periods are flexible — tell us roughly how long the job will take when you book, and we'll plan pickup around that rather than a fixed number of days.",
  },
  {
    q: "Will a bin fit on an Airdrie driveway or in a new-build cul-de-sac?",
    a: "In most cases, yes. Newer Airdrie subdivisions often have wider driveways than older Calgary inner-city lots, which usually makes placement straightforward — but tell us about the space when you book and we'll confirm before the truck rolls out.",
  },
  {
    q: "What can't go in the bin?",
    a: "Hazardous materials aren't accepted, and some items like tires or certain appliances may need separate handling. Ask when you book if you're unsure about something specific.",
  },
];

export default function BinRentalAirdriePage() {
  return (
    <>
      <ServiceSchema
        name="Bin Rentals"
        serviceType="Dumpster Rental"
        description={description}
        path={path}
        areaServedOverride={["Airdrie"]}
      />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          h1="Bin Rentals in Airdrie"
          summary="10, 12, 15 and 20 yard bins delivered to Airdrie on your schedule — from $50, no delivery surcharge."
          image="/images/gallery/bin-trailer-apartment.webp"
          imageAlt="Bin trailer delivered for a rental job"
          eyebrow="Serving Airdrie"
          trail={[{ name: "Bin Rental Airdrie", path }]}
        />

        <section className="mx-auto max-w-[1180px] px-8 pb-20 pt-[88px] lg:px-14">
          <p className="max-w-[760px] text-xl leading-[1.5] text-brand-navy">
            A bin is the right call when a job runs over several days and
            keeps generating debris — a renovation, a garage clear-out
            you&rsquo;re chipping away at on weekends, a landscaping project.
            We drop it
            in Airdrie on the same schedule and pricing as a Calgary delivery.
          </p>
          <p className="mt-5 max-w-[760px] text-[17px] leading-[1.65] text-brand-navy/78">
            We run 10, 12, 15 and 20 yard bins, and Airdrie is a regular stop
            on our delivery route rather than a special out-of-town trip —
            which is exactly why there&rsquo;s no distance surcharge added to
            an Airdrie drop-off. Newer subdivisions in Airdrie often have
            wider driveways than the older inner-city lots we work around in
            Calgary, which in practice makes placement more straightforward,
            though we&rsquo;ll always confirm the space with you before the
            truck rolls out.
          </p>
          <p className="mt-5 max-w-[760px] text-[17px] leading-[1.65] text-brand-navy/78">
            Rental periods are flexible rather than locked to a fixed number
            of days — tell us roughly how long the job will run when you
            book, and we&rsquo;ll plan the pickup around your timeline, not
            the other way around.
          </p>

          <div className="mt-10 border-t-2 border-brand-navy pt-6">
            <h2 className="font-display text-[13px] uppercase tracking-[0.16em] text-brand-navy/55">
              What&rsquo;s Included
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                "10, 12, 15 and 20 yard bin sizes",
                "Delivery and pickup scheduled around your job",
                "No distance surcharge for Airdrie",
                "Flexible rental periods",
                "Guidance on the right size and what can go in it",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-[1.5] text-brand-navy/85"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <QuoteSection
          heading="Get an Airdrie bin price"
          blurb="Tell us the job and where the bin can sit. You get a number before we deliver, with no surcharge for the drive up."
          defaultService="Bin Rental"
        />

        <FaqSection faqs={faqs} heading="Airdrie bin rental questions" />

        <CallBand
          tone="yellow"
          heading="Bin rentals in Airdrie, from $50"
          blurb={`${business.phoneMainSub} — ${business.phoneMainDisplay} — 8 AM to 8 PM, seven days. No delivery surcharge.`}
        />
      </main>
      <Footer />
    </>
  );
}
