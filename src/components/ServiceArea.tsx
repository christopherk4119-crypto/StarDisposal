const areas = [
  "NW Calgary",
  "NE Calgary",
  "SW Calgary",
  "SE Calgary",
  "Airdrie",
  "Cochrane",
  "Chestermere",
];

export default function ServiceArea() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl text-brand-navy sm:text-4xl">
          Serving Calgary &amp; Surrounding Areas
        </h2>
        <div className="mx-auto mt-2 h-1.5 w-20 bg-brand-red" />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border-2 border-brand-navy bg-white px-5 py-2 font-display text-sm text-brand-navy"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
