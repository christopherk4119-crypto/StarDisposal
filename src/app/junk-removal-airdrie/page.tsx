import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CallBand from "@/components/CallBand";
import FaqSection from "@/components/FaqSection";
import ServiceSchema from "@/components/ServiceSchema";
import { siteUrl, business } from "@/lib/business";

const path = "/junk-removal-airdrie";
const title = "Junk Removal Airdrie | Star Disposal Services";
const description =
  "Junk removal in Airdrie, from $50 — appliances, furniture, garage and estate clean-outs. No surcharge on a normal load. Call 403-509-2783.";
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
    q: "Do you charge extra to come to Airdrie?",
    a: "No. Airdrie is a regular run for us, not an occasional trip out of town, and there's no surcharge on a normal-sized load. It's priced the same way a Calgary job is: by volume and weight.",
  },
  {
    q: "How fast can you get to Airdrie?",
    a: "Often same-day, especially for a job booked in the morning. We run Airdrie routes throughout the week rather than scheduling it as a special trip, so it doesn't add lead time the way a one-off out-of-town call might.",
  },
  {
    q: "What can't you take?",
    a: "The same rule as everywhere: no hazardous waste — paint, solvents, motor oil, chemicals, propane tanks, asbestos or anything with a hazard symbol on it. Ask when you call if you're not sure about something specific.",
  },
  {
    q: "Do you do bin rentals in Airdrie too, or just junk removal?",
    a: "Both. If the job runs over several days and generates debris as you go, a bin usually works out better than a truck visit — see our Airdrie bin rental page for sizes and pricing.",
  },
  {
    q: "Do I need to be home for pickup?",
    a: "Not necessarily. As long as the items are accessible and price and payment are agreed on the phone first, plenty of our Airdrie jobs happen while the customer is at work.",
  },
];

export default function JunkRemovalAirdriePage() {
  return (
    <>
      <ServiceSchema
        name="Junk Removal"
        serviceType="Junk Removal"
        description={description}
        path={path}
        areaServedOverride={["Airdrie"]}
      />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          h1="Junk Removal in Airdrie"
          summary="Appliances, furniture, garage and estate clean-outs — from $50, no surcharge for the drive up from Calgary."
          image="/images/gallery/mattress-furniture-bin.webp"
          imageAlt="Bin loaded with mattress and furniture for a junk removal job"
          eyebrow="Serving Airdrie"
          trail={[{ name: "Junk Removal Airdrie", path }]}
        />

        <section className="mx-auto max-w-[1180px] px-8 pb-20 pt-[88px] lg:px-14">
          <p className="max-w-[760px] text-xl leading-[1.5] text-brand-navy">
            We run out of a southeast Calgary yard, and Airdrie is a regular
            stop on the route up Highway 2 — not a special trip we schedule
            around, and not something we price like one.
          </p>
          <p className="mt-5 max-w-[760px] text-[17px] leading-[1.65] text-brand-navy/78">
            Junk removal in Airdrie works exactly like it does in Calgary: we
            show up, we load it ourselves, we sweep up when we&rsquo;re done.
            Furniture, appliances, garage clean-outs, basement clutter, and
            full estate or move-out clear-outs — priced by volume and labour,
            starting at $50 for a small load. The only real difference is the
            drive; a normal-sized Airdrie job costs the same as the same job
            in Calgary, with no distance surcharge tacked on.
          </p>
          <p className="mt-5 max-w-[760px] text-[17px] leading-[1.65] text-brand-navy/78">
            Because we&rsquo;re on this route regularly rather than
            occasionally, same-day or next-day pickup is realistic for most
            Airdrie jobs booked in the morning — the same way it is for a
            Calgary job on our side of the city.
          </p>

          <div className="mt-10 border-t-2 border-brand-navy pt-6">
            <h2 className="font-display text-[13px] uppercase tracking-[0.16em] text-brand-navy/55">
              What&rsquo;s Included
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                "Furniture and appliance removal",
                "Garage, basement and yard clean-outs",
                "Estate and full house clean-outs",
                "Loading and hauling — we do the lifting",
                "No surcharge for a normal-sized Airdrie load",
                "Same-day and next-day availability in most cases",
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

        <FaqSection faqs={faqs} heading="Airdrie junk removal questions" />

        <CallBand
          tone="yellow"
          heading="Junk removal in Airdrie, from $50"
          blurb={`${business.phoneMainSub} — ${business.phoneMainDisplay} — 8 AM to 8 PM, seven days. No surcharge for the drive.`}
        />
      </main>
      <Footer />
    </>
  );
}
