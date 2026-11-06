import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CallBand from "@/components/CallBand";
import FaqSection from "@/components/FaqSection";
import QuoteSection from "@/components/QuoteSection";
import ServiceSchema from "@/components/ServiceSchema";
import { siteUrl, business, commercialSentence } from "@/lib/business";

const path = "/bin-rental-chestermere";
const title = "Bin Rental Chestermere | 10 to 20 Yard | Star Disposal";
const description =
  "Bin rentals in Chestermere from $50 — 10, 12, 15 and 20 yard bins for acreages, lake properties and renovations. Call 403-509-2783.";
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
    q: "Do you deliver bins to Chestermere?",
    a: "Yes. Chestermere is covered for bin rentals at the same sizes and pricing as a Calgary delivery. It's not a daily route, so call ahead and we'll schedule the run around your job.",
  },
  {
    q: "Do you handle larger acreage or lake-property jobs?",
    a: "Yes — acreage clean-ups and larger property jobs are common work for us around Chestermere. Describe the scope on the phone and we'll tell you honestly which bin size actually fits it.",
  },
  {
    q: "How far ahead should I book?",
    a: "A few days' notice is usually enough. If you need it sooner, call and describe the job — we'll tell you what's realistic.",
  },
  {
    q: "What bin sizes are available?",
    a: "10, 12, 15 and 20 yard, the same range we run everywhere. If you're not sure which size fits, call and describe it.",
  },
  {
    q: "How long can I keep the bin?",
    a: "Rental periods are flexible. Tell us roughly how long the job will run when you book, and we'll plan pickup around that rather than a fixed number of days.",
  },
];

export default function BinRentalChestermerePage() {
  return (
    <>
      <ServiceSchema
        name="Bin Rentals"
        serviceType="Dumpster Rental"
        description={description}
        path={path}
        areaServedOverride={["Chestermere"]}
      />
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          h1="Bin Rentals in Chestermere"
          summary="10, 12, 15 and 20 yard bins, from $50 — covered for acreages, lake properties and renovations alike."
          image="/images/gallery/bin-trailer-apartment.webp"
          imageAlt="Bin trailer delivered for a rental job"
          eyebrow="Serving Chestermere"
          trail={[{ name: "Bin Rental Chestermere", path }]}
        />

        <section className="mx-auto max-w-[1180px] px-8 pb-20 pt-[88px] lg:px-14">
          <p className="max-w-[760px] text-xl leading-[1.5] text-brand-navy">
            A bin is the right call when a job runs over several days and
            keeps generating debris — a renovation, a yard or garage
            clean-out, an acreage or lake-property project. We cover
            Chestermere for bin rentals at the same sizes and pricing as a
            Calgary delivery.
          </p>
          <p className="mt-5 max-w-[760px] text-[17px] leading-[1.65] text-brand-navy/78">
            Chestermere isn&rsquo;t a daily route, so a delivery out this way
            works best with a bit of notice rather than a same-day call.
            Tell us the job and your timeline when you book and we&rsquo;ll
            plan the run.
          </p>
          <p className="mt-5 max-w-[760px] text-[17px] leading-[1.65] text-brand-navy/78">
            Acreage clean-ups and larger property jobs are common work for us
            around Chestermere, and those properties usually have plenty of
            room for a bin truck to work. We&rsquo;ll confirm the space with
            you before the truck heads out.
          </p>
          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.55] text-brand-navy/70">
            {commercialSentence}
          </p>

          <div className="mt-10 border-t-2 border-brand-navy pt-6">
            <h2 className="font-display text-[13px] uppercase tracking-[0.16em] text-brand-navy/55">
              What&rsquo;s Included
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                "10, 12, 15 and 20 yard bin sizes",
                "Same per-bin pricing as a Calgary delivery",
                "Delivery scheduled a few days out, or sooner if timing allows",
                "Flexible rental periods",
                "Guidance on the right size for acreage and lake-property jobs",
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
          heading="Get a Chestermere bin price"
          blurb="Tell us the job and when you need it, and we'll come back with a number and a realistic delivery date."
          defaultService="Bin Rental"
        />

        <FaqSection faqs={faqs} heading="Chestermere bin rental questions" />

        <CallBand
          tone="yellow"
          heading="Bin rentals in Chestermere, from $50"
          blurb={`${business.phoneMainSub} — ${business.phoneMainDisplay} — 8 AM to 8 PM, seven days. Call ahead to schedule.`}
        />
      </main>
      <Footer />
    </>
  );
}
