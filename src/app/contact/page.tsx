import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import { siteUrl, business } from "@/lib/business";

const title = "Contact Star Disposal Services | 403-204-7827";
const description =
  "Get a free quote for junk removal, bin rentals or site work in Calgary and Airdrie. Call 403-204-7827, 8 AM to 8 PM, seven days.";
const url = `${siteUrl}/contact`;

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
    q: "What is the fastest way to get a price?",
    a: `Call ${business.phoneMainDisplay} and describe the job, or text photos to the same number. Photos get you a far more accurate number than a description, especially for demolition and property clean-ups.`,
  },
  {
    q: "What are your hours?",
    a: "8 AM to 8 PM, seven days a week, including weekends. Ted answers the phone himself rather than routing you to a call centre.",
  },
  {
    q: "Can you come the same day?",
    a: "Often, especially for smaller loads booked in the morning. Call and we will tell you honestly what today looks like rather than promising a window we cannot hit.",
  },
  {
    q: "Do you charge for a quote?",
    a: "No. Quotes are free, whether over the phone or on site. For larger property and estate jobs we walk the site first, because those are almost always bigger than they look from the road.",
  },
  {
    q: "What information should I have ready?",
    a: "What the material actually is (boxes and concrete are very different loads), roughly how much, which floor it is on, and where a bin could sit if you want one. That is enough for a number that holds.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          h1="Contact Star Disposal Services"
          summary="Call, text photos, or send the form. Ted answers the phone himself, 8 AM to 8 PM, seven days a week."
          image="/images/about/truck-signage.webp"
          imageAlt="Star Disposal Services truck with 403-50 WASTE signage in Calgary"
          eyebrow="Free quote"
          trail={[{ name: "Contact", path: "/contact" }]}
        />
        <Contact />
        <FaqSection faqs={faqs} heading="Before you call" />
      </main>
      <Footer />
    </>
  );
}
