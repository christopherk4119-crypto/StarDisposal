import Hero from "@/components/Hero";
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
      "Calgary junk removal, hauling, bobcat services, dump runs, site clean-up, demolition, and bin rentals since 1996.",
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
