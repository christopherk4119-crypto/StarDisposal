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

The quote form has two delivery modes and picks one from a single env var.

| `NEXT_PUBLIC_FORMSPREE_ID` | Behaviour |
|---|---|
| set | POSTs to Formspree; the visitor never leaves the page |
| unset | falls back to opening the visitor's mail app via `mailto:` |

**Set it in production.** The `mailto:` fallback depends on the visitor having
a mail client configured — on a phone without one it silently does nothing, the
lead is lost, and nobody finds out.

### Turning on Formspree

1. Create a free account at [formspree.io](https://formspree.io) using the
   business inbox (`stardisposalservices@outlook.com`) so notifications land
   where the quotes are read.
2. **+ New Form** → name it "Star Disposal quote form" → set the send-to
   address → **Create Form**.
3. Formspree shows an endpoint like `https://formspree.io/f/abcdwxyz`. The ID
   is the part after `/f/`.
4. In Vercel → Settings → Environment Variables, add
   `NEXT_PUBLIC_FORMSPREE_ID` = `abcdwxyz` for Production (and Preview if you
   want to test there).
5. **Redeploy.** The variable is inlined at build time, so an existing
   deployment will not pick it up — this step is skipped constantly.
6. Submit the live form once. Formspree emails a confirmation link the first
   time; click it or nothing is delivered.

Locally, copy `.env.example` to `.env.local` and fill in the same value.

The form already sends a `_subject` line and carries a `_gotcha` honeypot field
that Formspree uses to drop bot submissions. The free tier allows 50
submissions a month, which is comfortable for this volume; if it is ever
exceeded, Formspree holds the submissions rather than dropping them.

If the POST fails, the form does not fail silently — it tells the visitor and
shows the phone number and email address instead.

To move off Formspree entirely, replace the `fetch` in `handleSubmit` with a
POST to a route handler at `src/app/api/quote/route.ts`; nothing else needs to
change.

## Privacy policy

`/privacy` describes what the quote form collects and why, and it is linked
from the footer and from under the form's submit button.

Its "Who else sees it" section reads from `usesFormBackend`, so it names
Formspree when Formspree is configured and says "nobody" when the site is on
the `mailto:` fallback. It stays accurate automatically — but **any other
change to how data is handled means editing this page**, in particular adding
analytics, since the policy currently states that the site runs none. Update
`lastUpdated` when you do.

It is a solid, accurate starting point rather than legal advice; if the client
wants certainty, it is cheap to have reviewed.

## Before going live

- Confirm the production domain matches `siteUrl` in `src/lib/business.ts`.
- Set up a Search Console **Domain** property (not URL-prefix) so www and
  non-www are not tracked as two separate sites.
- Submit `/sitemap.xml` and request indexing on the three hub URLs first.
- Run each page type through Google's Rich Results Test after deploy.
