const testimonials = [
  {
    quote:
      "Ted was prompt, friendly, polite... provided excellent service. I would absolutely recommend Star Disposal Services for any hauling job.",
    author: "Ingrid H.",
  },
  {
    quote:
      "Awesome customer service. They sure helped my elderly father and his wife. They went above and beyond in helping them. Thanks \u{1F60A}",
    author: "Candi Miranda",
    meta: "5 reviews · 4 years ago",
  },
  {
    quote: "He was polite, helpful, knowledgeable.",
    author: "April G.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-yellow py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="text-center font-display text-3xl text-brand-navy sm:text-4xl">
          What Our Customers Say
        </h2>
        <div className="mx-auto mt-2 h-1.5 w-20 bg-brand-red" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="flex flex-col rounded-lg bg-white p-8 shadow-md"
            >
              <p className="text-brand-navy/40 font-display text-3xl leading-none">
                &ldquo;
              </p>
              <p className="-mt-4 flex-1 text-lg font-medium text-brand-navy">
                {t.quote}
              </p>
              <footer className="mt-4">
                <span className="font-display text-sm text-brand-red">
                  — {t.author}
                </span>
                {t.meta && (
                  <span className="mt-1 block text-xs text-brand-navy/50">
                    {t.meta}
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
