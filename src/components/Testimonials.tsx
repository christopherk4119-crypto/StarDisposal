/**
 * Customer quotes, verbatim.
 *
 * These are collected on Google, Yelp and BBB rather than by this site, so
 * they carry no Review structured data — Google only permits review markup
 * for reviews a site gathers itself. See the README before adding any.
 */
export default function Testimonials() {
  return (
    <section className="bg-brand-yellow px-8 pb-[104px] pt-24 lg:px-14">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 flex items-center gap-2.5">
          <span className="h-2 w-2 bg-brand-navy" />
          <h2 className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/65">
            What Our Customers Say
          </h2>
        </div>

        <blockquote className="m-0 max-w-[1020px]">
          <p className="font-display text-[26px] leading-[1.18] tracking-[-0.015em] text-brand-navy lg:text-[38px]">
            &ldquo;We called Star Disposal Services today (Sunday) to remove an
            old fridge from a condo we own. Ted was prompt, friendly, polite and
            provided excellent service. I would absolutely recommend Star
            Disposal Services for any hauling job you may have. Five Star
            Service all the way!&rdquo;
          </p>
          <footer className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-[15px] tracking-[3px] text-brand-navy">
              ★★★★★
            </span>
            <span className="block h-0.5 w-7 bg-brand-navy/35" />
            <span className="font-display text-[15px] text-brand-navy">
              Ingrid H.
            </span>
          </footer>
        </blockquote>

        <div className="mt-[76px] grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.25fr_1fr]">
          <blockquote className="m-0 border-t-2 border-brand-navy pt-[22px]">
            <p className="text-xl font-medium leading-[1.5] text-brand-navy">
              &ldquo;Awesome customer service. They sure helped my elderly
              father and his wife. They went above and beyond in helping them.
              Thanks&rdquo;
            </p>
            <footer className="mt-5 flex flex-wrap items-center gap-3.5">
              <span className="text-[13px] tracking-[3px] text-brand-navy">
                ★★★★★
              </span>
              <span className="font-display text-[13px] text-brand-navy">
                Candi Miranda
              </span>
            </footer>
          </blockquote>

          <blockquote className="m-0 border-t-2 border-brand-navy pt-[22px] lg:mt-11">
            <p className="text-xl font-medium leading-[1.5] text-brand-navy">
              &ldquo;I called Ted to recycle a 2000 Lincoln Town Car. He was
              polite, helpful, knowledgeable.&rdquo;
            </p>
            <footer className="mt-5 flex flex-wrap items-center gap-3.5">
              <span className="text-[13px] tracking-[3px] text-brand-navy">
                ★★★★★
              </span>
              <span className="font-display text-[13px] text-brand-navy">
                April G.
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
