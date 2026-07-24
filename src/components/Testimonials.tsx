const testimonials = [
  {
    quote:
      "Ted was prompt, friendly, polite... provided excellent service. I would absolutely recommend Star Disposal Services for any hauling job.",
    author: "Ingrid H.",
  },
  {
    quote: "He was polite, helpful, knowledgeable.",
    author: "April G.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-yellow py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <h2 className="text-center font-display text-3xl text-brand-navy sm:text-4xl">
          What Our Customers Say
        </h2>
        <div className="mx-auto mt-2 h-1.5 w-20 bg-brand-red" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <p className="text-brand-navy/40 font-display text-3xl leading-none">
                &ldquo;
              </p>
              <p className="-mt-4 text-lg font-medium text-brand-navy">
                {t.quote}
              </p>
              <footer className="mt-4 font-display text-sm text-brand-red">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
