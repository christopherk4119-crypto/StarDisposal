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
   * Main line. `phoneMainDisplay` is the vanity string from the truck signage;
   * `phoneMainSub` carries the dialable digits and must always be rendered
   * next to it. Never show the vanity string on its own — 403-50-WASTE spells
   * 403-509-2783, which is NOT this line, so anyone dialling it by hand would
   * reach the wrong number.
   */
  phoneMainDisplay: "403-50-WASTE",
  phoneMainSub: "403-861-2361",
  phoneMainTel: "+14038612361",

  /** Second line kept from the intake form. */
  phoneAltDisplay: "403-204-7827",
  phoneAltTel: "+14032047827",

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
