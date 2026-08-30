import Link from "next/link";
import { findByPath } from "@/lib/services";

/**
 * Cross-link row. Resolves `related` paths through the registry so a link
 * can never point at a page that does not exist.
 */
export default function RelatedServices({ paths }: { paths: string[] }) {
  const items = paths
    .map((path) => ({ path, entry: findByPath(path) }))
    .filter((i): i is { path: string; entry: NonNullable<typeof i.entry> } =>
      Boolean(i.entry)
    );

  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1300px] px-8 pb-24 pt-[92px] lg:px-14">
      <div className="mb-[18px] flex items-center gap-2.5">
        <span className="h-2 w-2 bg-brand-yellow" />
        <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
          Often booked together
        </span>
      </div>
      <h2 className="mb-9 font-display text-[32px] leading-[1.02] tracking-[-0.015em] text-brand-navy lg:text-[40px]">
        Related services
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map(({ path, entry }) => (
          <Link
            key={path}
            href={path}
            className="group flex flex-col justify-between gap-6 border border-brand-navy/15 bg-white px-7 py-8 transition hover:border-brand-yellow hover:bg-brand-navy"
          >
            <div>
              <h3 className="font-display text-2xl leading-[1.08] text-brand-navy transition group-hover:text-white">
                {entry.name}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-brand-navy/70 transition group-hover:text-white/75">
                {entry.summary}
              </p>
            </div>
            <span className="font-display text-[11px] tracking-[0.14em] text-brand-navy/55 transition group-hover:text-brand-yellow">
              VIEW SERVICE →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
