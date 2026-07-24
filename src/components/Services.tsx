import Link from "next/link";

const services = [
  {
    icon: "🚜",
    title: "Bobcat Services",
    description: "Bobcat work for site prep, landscaping, and material moving.",
  },
  {
    icon: "🚛",
    title: "Dump Runs",
    description: "Fast, reliable dump runs for residential and commercial waste.",
  },
  {
    icon: "🧹",
    title: "Site Clean-Up",
    description:
      "Complete site clean-up services for construction and renovation projects.",
  },
  {
    icon: "🔨",
    title: "Demolition",
    description: "Small demolition jobs handled quickly and safely.",
  },
  {
    icon: "🗑️",
    title: "Junk Removal",
    description: "Garage, home, and yard junk removal — starting at $50.",
  },
  {
    icon: "📦",
    title: "All Size Bins",
    description: "10, 12, 15, and 20 yard bins available for any size project.",
    id: "bins",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-display text-3xl text-brand-navy sm:text-4xl">
          Our Services
        </h2>
        <div className="mx-auto mt-2 h-1.5 w-20 bg-brand-red" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              id={service.id}
              className="flex flex-col rounded-lg border-2 border-brand-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-yellow hover:shadow-lg"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 font-display text-xl text-brand-navy">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-brand-navy/70">
                {service.description}
              </p>
              <Link
                href="#contact"
                className="mt-5 inline-block rounded-md bg-brand-yellow px-4 py-2 text-center font-display text-xs text-brand-red transition hover:brightness-105"
              >
                GET QUOTE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
