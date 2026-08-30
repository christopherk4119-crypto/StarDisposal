import Link from "next/link";
import JsonLd from "./JsonLd";
import { siteUrl } from "@/lib/business";

export type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb trail plus matching BreadcrumbList JSON-LD.
 * The last crumb is the current page and is not a link.
 */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", path: "/" }, ...trail];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: full.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.name,
            item: `${siteUrl}${crumb.path === "/" ? "" : crumb.path}`,
          })),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-[10px] uppercase tracking-[0.14em] text-white/55"
      >
        {full.map((crumb, i) => {
          const last = i === full.length - 1;
          return (
            <span key={crumb.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-brand-yellow">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-brand-yellow">
                  {crumb.name}
                </Link>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </span>
          );
        })}
      </nav>
    </>
  );
}
