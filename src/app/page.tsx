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
import { business } from "@/lib/business";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description:
      "Calgary junk removal, bin rentals, dump runs, bobcat services, demolition, and site clean-up since 1996. Jobs start at $50.",
    telephone: business.phoneMainTel,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2729 14 Ave SE",
      addressLocality: "Calgary",
      addressRegion: "AB",
      postalCode: "T2A 0J7",
      addressCountry: "CA",
    },
    areaServed: ["Calgary", "Airdrie", "Cochrane", "Chestermere"],
    priceRange: "$50+",
    foundingDate: "1996",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        "Junk Removal",
        "All Size Bin Rentals",
        "Bobcat Services",
        "Dump Runs",
        "Demolition",
        "Site Clean-Up",
      ].map((serviceName) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: serviceName },
      })),
    },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
