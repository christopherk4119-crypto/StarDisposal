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

  address: "2729 14 Ave SE, Calgary, AB T2A 0J7",
  streetAddress: "2729 14 Ave SE",
  addressLocality: "Calgary",
  addressRegion: "AB",
  postalCode: "T2A 0J7",
  addressCountry: "CA",
  geo: { latitude: 51.0447, longitude: -113.9905 },

  email: "stardisposalservices@outlook.com",

  /**
   * Main line — the vanity number from the truck signage, and the number on
   * the Google Business Profile and BBB listing. `phoneMainDisplay` and
   * `phoneMainSub` are the same line: 403-50-WASTE spells 403-509-2783.
   * Anyone who reads the vanity string and dials it by hand reaches us.
   *
   * Calls only. For anything that needs a text or a photo, use Ted's cell.
   */
  phoneMainDisplay: "403-50-WASTE",
  phoneMainSub: "403-509-2783",
  phoneMainTel: "+14035092783",

  /** Secondary line. Takes calls and texts — use this one for job photos. */
  phoneCellLabel: "Ted's Cell",
  phoneCellDisplay: "403-861-2361",
  phoneCellTel: "+14038612361",

  /**
   * Real profile URLs only — a bare domain does nothing for entity
   * confirmation. Add the Google Business Profile share link here when
   * available; that is the highest-value entry in this list.
   */
  sameAs: [
    "https://www.yelp.ca/biz/star-disposal-services-calgary-5",
    "https://www.bbb.org/ca/ab/calgary/profile/auto-wholesale/star-disposal-service-calgary-0017-45169",
  ],

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
