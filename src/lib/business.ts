/**
 * Single source of truth for NAP (Name, Address, Phone) and site identity.
 *
 * NAP consistency is a compliance issue, not a style preference — the name
 * here must match the Google Business Profile character for character, and
 * every title, meta tag, JSON-LD block and footer must read from this file.
 * Never hardcode the business name, phone number or domain anywhere else.
 */

/** Canonical host. Declared once; every canonical, sitemap and JSON-LD url derives from it. */
export const siteUrl = "https://stardisposalservices.ca";

export const business = {
  name: "Star Disposal Services",
  legalName: "Star Disposal Services",
  /** Historic / DBA names — kept in schema `alternateName` so the entity association survives. */
  alternateNames: ["Star Disposal Service", "Star Disposal"],
  tagline: "Calgary's Trusted Junk Removal & Bin Rental Experts Since 1996",
  owner: "Talib (Ted) Ferris",
  foundingDate: "1996",

  /**
   * Service-area business — no public street address by request. City,
   * region and country are enough for local SEO and are all that should
   * ever be shown; never add streetAddress, postalCode or geo back in
   * without asking first.
   */
  addressLocality: "Calgary",
  addressRegion: "AB",
  addressCountry: "CA",

  email: "stardisposalservices@outlook.com",

  /**
   * Main line, confirmed directly by the owner. `phoneMainDisplay` is the
   * vanity string from the truck signage and the Google Business Profile
   * listing; `phoneMainSub` is the same number spelled out in digits, shown
   * beside it so anyone who can't dial letters on their device still has a
   * number to type. `phoneMainTel` dials those same digits — 403-50-WASTE
   * decodes to 403-509-2783 on a phone keypad, it is not a different number.
   *
   * Ted's cell (`phoneTedDisplay` / `phoneTedTel`) is the explicit backup:
   * call it only if the main line doesn't connect. It must always be labelled
   * "Ted's Cell", never presented as an equal second main line.
   */
  phoneMainDisplay: "403-50-WASTE",
  phoneMainSub: "(403-509-2783)",
  phoneMainTel: "+14035092783",

  phoneTedDisplay: "403-861-2361",
  phoneTedTel: "+14038612361",

  /**
   * Real profile URLs only — a bare domain does nothing for entity
   * confirmation. Add the Google Business Profile share link here once
   * available; that is the highest-value entry in this list.
   *
   * Note: the business is NOT BBB Accredited (confirmed on the BBB profile
   * itself). The link is included as an honest reference to a real listing,
   * never as an accreditation or trust claim.
   */
  sameAs: [
    "https://www.yelp.ca/biz/star-disposal-services-calgary-5",
    "https://www.bbb.org/ca/ab/calgary/profile/auto-wholesale/star-disposal-service-calgary-0017-45169",
  ],

  /**
   * Real Google Business Profile rating, as shown on Google Maps. Update
   * these two numbers whenever the profile's rating or review count
   * changes — never estimate or round in a way that drifts from what
   * Google Maps actually shows.
   */
  googleRatingValue: "5.0",
  googleReviewCount: "2",

  priceRange: "$50+",
  startingPrice: "$50",

  hours: [{ day: "Monday – Sunday", time: "8:00 AM – 8:00 PM" }],
  opensAt: "08:00",
  closesAt: "20:00",

  /** Primary service area — matches the Google Business Profile service area. */
  primaryAreas: ["Calgary", "Airdrie"],
  /** Wider area we run to on request. */
  secondaryAreas: ["Cochrane", "Chestermere"],
} as const;

export const areaServed = [...business.primaryAreas, ...business.secondaryAreas];

/**
 * The number to use in running prose, meta descriptions and FAQ answers.
 * Always the real digits — a reader must be able to dial what they read.
 * The vanity string is for the visual CTAs only, where the digits sit
 * directly beneath it.
 */
export const phoneInText = business.phoneMainSub;

/** Human-readable service area sentence, reused across pages instead of a page-per-town. */
export const areaSentence =
  "We run across Calgary — NW, NE, SW and SE — plus Airdrie, Cochrane and Chestermere.";
