import { business } from "@/lib/business";

const points = [
  {
    icon: "⭐",
    title: "Serving Calgary Since 1996",
    description: "Nearly 30 years of local experience.",
  },
  {
    icon: "🛡️",
    title: "Fully Insured",
    description: "Protected on every job.",
  },
  {
    icon: "💰",
    title: "Starting at $50",
    description: "Honest, affordable pricing, no surprises.",
  },
  {
    icon: "📞",
    title: "Two Ways to Reach Us",
    description: `Call the main line ${business.phoneMainDisplay} or Ted's cell directly.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-navy py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-display text-3xl text-white sm:text-4xl">
          Why Calgary Trusts Star Disposal Services
        </h2>
        <div className="mx-auto mt-2 h-1.5 w-20 bg-brand-yellow" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-lg bg-white/5 p-6 text-center ring-1 ring-white/10"
            >
              <div className="text-4xl">{point.icon}</div>
              <h3 className="mt-4 font-display text-base text-brand-yellow">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-white/75">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
