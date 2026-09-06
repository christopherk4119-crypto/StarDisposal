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
  purpose. They are collected on Google, Yelp and BBB rather than by this site,
  and Google's review snippet policy requires review markup to come from
  reviews the site gathers itself — marking up third-party reviews risks a
  manual action rather than earning stars. To earn review stars in search
  results, collect reviews through a form on this site.
- **`sameAs`** carries the Yelp and BBB listings. Add the Google Business
  Profile share link to `business.sameAs` when available.

## Logo

`src/components/Logo.tsx` is an SVG rebuild of the owner's artwork — navy star
on gold, "STAR" in red with a navy outline, "Since 1996", "DISPOSAL SERVICES".

- `variant="full"` (default) is the landscape lockup, used in the header from
  the `sm` breakpoint up and in the footer.
- `variant="mark"` is the star alone, used in the header on phones where the
  lockup's sub-text would be too small to read. The favicons in `/public` come
  from the same star.
- `background={false}` drops the gold panel — used in the footer, which already
  sits on gold.

Each text line is pinned with `textLength`, so the proportions hold even when
the viewer has no Arial Black and the browser substitutes another face.

**If the owner supplies the original vector file**, that beats a rebuild: drop
it in `public/images/`, and replace this component's body with an `<Image>` (or
inline the SVG). The `variant` and `background` props exist so callers don't
have to change.

## Photos

`src/lib/photos.ts` holds the seven real job photos with literal alt text, and
`sectionPhotos(key, count)` assigns one to each body section on hub and service
pages. Assignment is deterministic, so a page shows the same photos on every
build, and distinct within a page — no page repeats an image against itself.

Seven photos across ~71 sections means each is reused roughly ten times
site-wide. A visitor only ever sees one page, so the repetition is invisible in
practice, but **more real job photos is the single easiest content improvement
available.** Drop new `.webp` files into `public/images/gallery/`, add them to
the `photos` array with honest alt text, and every page picks them up
automatically.

Alt text describes what is actually in the frame, not the page it sits on — the
same photo appears on many pages, so page-specific alt text would be false
somewhere.
- **Zero orphan pages** — the footer carries a full service index, so every page
  is one click from every other page.
- **Icons** — `public/icon-512.png` and `public/apple-icon-180.png` are square
  (Google silently falls back to a generic icon otherwise), plus `icon.svg`.

## Phone numbers

| | Number | Use |
|---|---|---|
| Main | **403-50-WASTE** = 403-509-2783 | Calls only |
| Secondary | **Ted's Cell** 403-861-2361 | Calls, texts, job photos |

The vanity string and the digits are the same line — 403-50-WASTE spells
403-509-2783 — and this matches the Google Business Profile and the BBB
listing, so the site's NAP is consistent with both.

Two rules the copy follows, and any new copy must too:

- **Never render `phoneMainDisplay` without `phoneMainSub` beside it.** Some
  people dial what they read rather than tapping.
- **Never tell anyone to text the main line.** It takes calls only. Anything
  involving a text or a job photo points at `phoneCellDisplay`.

`403-204-7827` (from the original intake form) has been removed. It appears on
neither the Business Profile nor the BBB listing and was never confirmed.

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

## The quote form is the conversion goal

The business's stated goal is quote requests, so the form is on **26 of 29
pages** — every service page, both hubs and spokes, plus the homepage, about,
service areas, contact and both Airdrie landing pages. Only the 404, the error
page and the privacy policy are without it.

It is rendered by `QuoteSection`, which pre-selects the service from the page
the visitor is reading (`quoteCategoryFor` in `src/lib/forms.ts`) so there is
one less field to fill in. Someone arriving on a service page from Google can
request a quote without navigating anywhere.

If you add a service whose category is new, extend `quoteCategoryFor` and the
`services` array in `ContactForm` together, or the pre-selection silently
falls back to nothing.

## Contact form

Submissions go to **Formspree form `mdawrdyw`**
(`https://formspree.io/f/mdawrdyw`). The visitor never leaves the page.

The form ID ships as the default in `src/lib/forms.ts` rather than living only
in a Vercel environment variable. It is not a secret — the endpoint is visible
in any page that posts to it — and hardcoding it removes the failure mode where
someone deploys without setting the variable and the form silently degrades.

`NEXT_PUBLIC_FORMSPREE_ID` still overrides it, which is the right way to point
a preview or local build at a throwaway form so test submissions don't reach
the business inbox. Copy `.env.example` to `.env.local` to do that.

If the ID is ever blanked out, the form falls back to opening the visitor's
mail app via `mailto:`. **That fallback is the dangerous path** — on a phone
with no mail client configured it silently does nothing, the lead is lost, and
nobody finds out. Don't ship in that state.

The form sends a `_subject` line and carries a `_gotcha` honeypot that Formspree
uses to drop bot submissions. The free tier allows 50 submissions a month, which
is comfortable at this volume; over that, Formspree holds submissions rather
than dropping them.

**First live submission:** Formspree emails a confirmation link the very first
time the form is used. Until someone clicks it, nothing is delivered. Submit the
form once after deploying and confirm that email.

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
