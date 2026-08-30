import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { siteUrl } from "@/lib/business";

/**
 * Reviews stay on the homepage only, attached to the LocalBusiness entity
 * declared in the root layout. No aggregateRating is published — the review
 * count and average are not verified against a Google Business Profile.
 */
const reviewSchema = {
  "@context": "https://schema.org",
  "@id": `${siteUrl}/#business`,
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ingrid H." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Ted was prompt, friendly, polite... provided excellent service. I would absolutely recommend Star Disposal Services for any hauling job.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Candi Miranda" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Awesome customer service. They sure helped my elderly father and his wife. They went above and beyond in helping them. Thanks",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "April G." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "He was polite, helpful, knowledgeable.",
    },
  ],
};

const faqs = [
  {
    q: "How much does junk removal cost in Calgary?",
    a: "Jobs start at $50. Beyond that it is priced by volume and weight — a single item at the curb is at the bottom of the range, a packed garage is a truckload. Call 403-204-7827, describe the material, and you get a price before anything moves.",
  },
  {
    q: "Should I book junk removal or rent a bin?",
    a: "Junk removal when the stuff already exists and you do not want to touch it. A bin when the work happens over several days and generates debris as you go. If you are unsure, describe the job on the phone — we will tell you honestly which one costs you less.",
  },
  {
    q: "What size bins do you have?",
    a: "10, 12, 15 and 20 yard bins. The 15 is the most common for renovations and clear-outs; the 10 is the right size for heavy material like concrete and tile, which reaches its weight limit before it fills the space.",
  },
  {
    q: "Can you come the same day?",
    a: "Often, especially for smaller loads booked in the morning. We answer the phone 8 AM to 8 PM, seven days a week, including weekends.",
  },
  {
    q: "What will you not take?",
    a: "No hazardous waste — paint, solvents, motor oil, chemicals, propane tanks — and no asbestos-containing material. Household hazardous waste can be dropped free at a City of Calgary landfill site by residents.",
  },
  {
    q: "Do you serve Airdrie?",
    a: "Yes, and there is no surcharge on a normal-sized load. We also cover Cochrane and Chestermere.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={reviewSchema} />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <FaqSection faqs={faqs} heading="Common questions" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
