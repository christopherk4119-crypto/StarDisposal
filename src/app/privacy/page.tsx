import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CallBand from "@/components/CallBand";
import { siteUrl, business } from "@/lib/business";
import { usesFormBackend } from "@/lib/forms";

const title = "Privacy Policy | Star Disposal Services";
const description =
  "How Star Disposal Services collects, uses and protects the information you give us when requesting a quote in Calgary or Airdrie.";
const url = `${siteUrl}/privacy`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
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

/**
 * Last substantive review of this policy. Update whenever the data practices
 * change — adding analytics, a booking system, or a different form service.
 */
const lastUpdated = "August 2026";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          h1="Privacy Policy"
          summary="What we collect when you ask us for a quote, why we collect it, and what we do not do with it."
          image="/images/about/truck-signage.webp"
          imageAlt="Star Disposal Services truck in Calgary"
          eyebrow="Your information"
          trail={[{ name: "Privacy Policy", path: "/privacy" }]}
        />

        <section className="mx-auto max-w-[820px] px-8 pb-24 pt-[88px] lg:px-14">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-navy/50">
            Last updated {lastUpdated}
          </p>

          <p className="mt-6 text-xl leading-[1.55] text-brand-navy">
            {business.name} is a family-run junk removal and bin rental business
            in Calgary. We collect the least information we can get away with:
            enough to call you back about a job, and nothing else.
          </p>

          <div className="mt-4 border-l-4 border-brand-yellow py-2 pl-5 text-[17px] leading-[1.6] text-brand-navy/80">
            We do not sell your information, we do not share it for advertising,
            and we do not send marketing emails.
          </div>

          <h2 className="mt-14 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            Who we are
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            {business.name}, serving Calgary, Airdrie, Cochrane and
            Chestermere, AB. You can reach us at{" "}
            <a
              href={`tel:${business.phoneMainTel}`}
              className="break-words font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-red"
            >
              {business.phoneMainSub}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${business.email}`}
              className="break-words font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-red"
            >
              {business.email}
            </a>
            . We are responsible for the information described below.
          </p>

          <h2 className="mt-12 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            What we collect
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            Only what you type into the quote form on this site:
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {[
              "Your name",
              "Your phone number",
              "Your email address",
              "The service you need",
              "Whatever you tell us about the job in the details box",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3.5 text-[17px] leading-[1.6] text-brand-navy/80"
              >
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-brand-yellow"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[17px] leading-[1.7] text-brand-navy/80">
            If you call or email us directly instead, we have whatever you tell
            us on that call or in that message. That is the whole picture — there
            are no hidden fields and no profile being built in the background.
          </p>

          <h2 className="mt-12 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            Why we collect it
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            To quote your job and to do the work. That means calling or emailing
            you back, asking follow-up questions about access or materials,
            scheduling the pickup or the bin drop, and keeping a record of the job
            afterwards. Submitting the form is you asking us to get in touch, and
            that is the only basis on which we use your details.
          </p>

          <h2 className="mt-12 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            Who else sees it
          </h2>
          {usesFormBackend ? (
            <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
              Quote form submissions are delivered to our inbox by{" "}
              <a
                href="https://formspree.io/legal/privacy-policy/"
                rel="noopener noreferrer"
                target="_blank"
                className="break-words font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-red"
              >
                Formspree
              </a>
              , a form delivery service. They process the message on our behalf so
              it reaches us reliably, and they do not use it for their own
              purposes. Our email is hosted by Microsoft Outlook. Nobody else
              receives your information.
            </p>
          ) : (
            <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
              Nobody. The quote form opens your own email application with the
              message pre-filled, so your details go straight from your device to
              our inbox without passing through anyone else. Our email is hosted
              by Microsoft Outlook.
            </p>
          )}
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            We do not sell, rent or trade your information. We would only ever
            hand it over if the law required it.
          </p>

          <h2 className="mt-12 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            Cookies and tracking
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            This site sets no advertising or tracking cookies and runs no
            analytics. There is no cookie banner because there is nothing to
            consent to. Some pages remember small preferences in your own browser;
            that stays on your device and never reaches us.
          </p>

          <h2 className="mt-12 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            How long we keep it
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            Quote requests stay in our email for as long as we might reasonably
            need them — to handle a follow-up job, a warranty question, or our own
            bookkeeping. If you ask us to delete your information, we will, unless
            we are legally required to keep a record of work we have invoiced.
          </p>

          <h2 className="mt-12 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            Your rights
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            Under Canadian privacy law you can ask us what information we hold
            about you, ask us to correct it if it is wrong, ask us to delete it,
            and withdraw your consent at any time. Email{" "}
            <a
              href={`mailto:${business.email}`}
              className="break-words font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-red"
            >
              {business.email}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${business.phoneMainTel}`}
              className="break-words font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-red"
            >
              {business.phoneMainSub}
            </a>{" "}
            and we will sort it out. No forms, no process — just ask.
          </p>

          <h2 className="mt-12 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            Keeping it safe
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            This site is served over an encrypted connection, and quote requests
            are transmitted encrypted. We keep access to our email limited to the
            people who need it to run the business. No system is perfectly secure,
            but the less we collect the less there is to lose, which is part of why
            we collect so little.
          </p>

          <h2 className="mt-12 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            Children
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            This is a service for property owners and contractors. We do not
            knowingly collect information from children.
          </p>

          <h2 className="mt-12 font-display text-[26px] leading-[1.15] tracking-[-0.015em] text-brand-navy">
            Changes
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-brand-navy/80">
            If we change how we handle your information we will update this page
            and the date at the top of it.
          </p>

          <div className="mt-14 border-t border-brand-navy/20 pt-6">
            <p className="text-[15px] leading-[1.6] text-brand-navy/70">
              Questions about any of this? Call{" "}
              <a
                href={`tel:${business.phoneMainTel}`}
                className="break-words font-semibold text-brand-navy hover:text-brand-red"
              >
                {business.phoneMainSub}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${business.email}`}
                className="break-words font-semibold text-brand-navy hover:text-brand-red"
              >
                {business.email}
              </a>
              . You can also{" "}
              <Link
                href="/contact"
                className="break-words font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-red"
              >
                use the contact page
              </Link>
              .
            </p>
          </div>
        </section>

        <CallBand
          tone="yellow"
          heading="Still just need your junk gone?"
          blurb={`${business.phoneMainSub} — ${business.phoneMainDisplay} — 8 AM to 8 PM, seven days. Jobs start at $50.`}
        />
      </main>
      <Footer />
    </>
  );
}
