# Star Disposal Services — Website

Local-SEO site for **Star Disposal Services**, Calgary's junk removal, bin
rental and site services company since 1996. Next.js (App Router) + Tailwind,
deploy-ready on Vercel.

```bash
npm install
npm run dev
```

## Architecture: hub and spoke

Every service has its own page. Spokes nest under their hub so the topic
cluster is legible to crawlers and to people.

```
/                                          homepage
/junk-removal                              HUB
├── /appliance-removal   /furniture-removal   /mattress-disposal
├── /garage-cleanouts    /estate-cleanouts    /dump-runs
└── /yard-waste-removal  /scrap-metal-removal
/bin-rentals                               HUB
└── /10-yard-bin-rental  /12-yard-bin-rental  /15-yard-bin-rental
    /20-yard-bin-rental  /renovation-bin-rental
/site-services                             HUB
└── /demolition  /bobcat-services  /site-cleanup  /construction-waste-removal
/service-areas   /about   /contact
```

24 indexable pages. Each spoke carries 850–1100 words of real content, a
unique title and description, one matching `<h1>`, a 5–6 question FAQ, a
tappable phone CTA top and bottom, a link up to its hub and cross-links to
related pages in other hubs.

## Single sources of truth

Nothing about the business or the URL structure is hardcoded twice.

| File | Owns |
|---|---|
| `src/lib/business.ts` | `siteUrl`, NAP, hours, geo, service areas. **The only place the domain and phone numbers are defined.** |
| `src/content/hubs.ts` | The three hub pages |
| `src/content/{junk-removal,bin-rentals,site-services}.ts` | Spoke page content |
| `src/lib/services.ts` | Registry + `allRoutes`, consumed by routes, nav, footer, sitemap and cross-links |

Because routes (`src/app/[hub]/`, `src/app/[hub]/[service]/`) and the sitemap
are both generated from `allRoutes`, **a page cannot exist without being in the
sitemap**, and a `related` cross-link cannot point at a page that doesn't exist.

### Adding a service

Append one object to the relevant `src/content/*.ts` file. The route, sitemap
entry, header menu, footer index, hub card and schema all follow automatically.

## SEO implementation

- **Canonical host** declared once as `siteUrl`. No code-level host redirect —
  if www vs non-www needs enforcing, do it in the host platform's domain
  settings only, never in both places.
- **Structured data** — `LocalBusiness` in the root layout (every page inherits
  it); per-page `Service` pointing at that entity by `@id`; `BreadcrumbList` on
  every interior page; `FAQPage` on every FAQ block. 92 blocks, all validated
  as parsing.
- **Testimonials carry no `Review` or `aggregateRating` structured data**, on
  purpose. They originate from the company's Yelp listing, and Google's review
  snippet policy requires review markup to come from reviews the site collects
  itself — marking up third-party reviews risks a manual action rather than
  earning stars. To earn review stars in search results, collect reviews
  through a form on this site.
- **Zero orphan pages** — the footer carries a full service index, so every page
  is one click from every other page.
- **Icons** — `public/icon-512.png` and `public/apple-icon-180.png` are square
  (Google silently falls back to a generic icon otherwise), plus `icon.svg`.
- **`sameAs`** carries the Yelp listing. Add the Google Business Profile share
  link to `business.sameAs` when available — it is the highest-value entry for
  entity confirmation. Real profile URLs only; a bare domain does nothing.

## Phone numbers

The main line is displayed as the vanity string **403-50-WASTE** to match the
truck signage, and dials **403-861-2361**.

Those two are not the same digits — `403-50-WASTE` literally spells
403-509-2783 — so `business.phoneMainSub` (the real digits) is rendered
directly beneath the vanity string in every CTA, and running prose, meta
descriptions and FAQ answers always use the digits, never the vanity string.
Do not display `phoneMainDisplay` on its own anywhere, or people who dial what
they read will reach the wrong number.

`403-204-7827` is kept as a second line in the footer and on the contact page.

**Known NAP mismatch:** the Google Business Profile currently lists
403-509-2783 (which is what 403-50-WASTE actually spells). The site and the
profile therefore disagree on the primary phone number. The manual is blunt
that NAP inconsistency is the number one off-site hygiene problem, so this
should be resolved — either by updating the profile to 403-861-2361, or by
switching the site to the profile's number.

## Verifying before you ship

```bash
npm run lint && npx tsc --noEmit && npm run build

# one h1 per page
grep -rn "<h1" src/app src/components --include="*.tsx"

# referenced images that don't exist
grep -rohE '"/images/[^"]+"' src --include="*.tsx" | tr -d '"' | sort -u \
  | while read i; do [ -f "public$i" ] || echo "MISSING: $i"; done

# the domain must appear only in business.ts
grep -rn "stardisposalservices.ca" src --include="*.ts" --include="*.tsx" \
  | grep -v src/lib/business.ts

# every page showing the vanity number must also show the dialable digits
for f in $(find .next/server/app -name "*.html"); do
  v=$(grep -c '403-50-WASTE' "$f"); d=$(grep -c '403-861-2361' "$f")
  [ "$v" -gt 0 ] && [ "$d" -eq 0 ] && echo "VANITY WITHOUT DIGITS: $f"
done
```

**Code pushed is not the same as code live.** After deploying, open the live
URL yourself and confirm the newest deployment's commit hash matches what you
pushed and is marked Production.

## Contact form

`src/components/ContactForm.tsx` opens a pre-filled `mailto:` on submit, so the
site stays fully static with no backend. To take submissions server-side, swap
`handleSubmit` for a POST to a form service or a route handler at
`src/app/api/quote/route.ts`.

## Before going live

- Confirm the production domain matches `siteUrl` in `src/lib/business.ts`.
- Set up a Search Console **Domain** property (not URL-prefix) so www and
  non-www are not tracked as two separate sites.
- Submit `/sitemap.xml` and request indexing on the three hub URLs first.
- Run each page type through Google's Rich Results Test after deploy.
