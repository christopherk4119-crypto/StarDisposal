export type Faq = { q: string; a: string };

export type ProcessStep = { step: string; detail: string };

export type Section = { heading: string; body: string[] };

/** A spoke page — one service, covered properly. */
export type Service = {
  /** URL segment, unique within its hub. */
  slug: string;
  /** Slug of the hub this spoke nests under. */
  hub: string;
  /** Short label used in cards and nav. */
  name: string;
  /** The single <h1>. Should match the target query closely. */
  h1: string;
  /** <title> — target term first, under 60 characters. */
  title: string;
  /** Meta description — under 155 characters, includes the phone number. */
  description: string;
  /** One-line summary used on hub cards. */
  summary: string;
  image: string;
  imageAlt: string;
  /** Opening paragraphs, below the hero. */
  intro: string[];
  /** Body sections — the practical detail a customer actually wants. */
  sections: Section[];
  /** "What's included" checklist. */
  included: string[];
  /** How the job runs, start to finish. */
  process: ProcessStep[];
  /** Honest limits — what we don't take, what gets referred out. */
  limits?: string[];
  faqs: Faq[];
  /** Paths of genuinely related pages, including across hubs. */
  related: string[];
  /** schema.org Service serviceType. */
  serviceType: string;
};

/** A hub page — overview plus links to every spoke beneath it. */
export type Hub = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  /** Label used in the header nav. */
  navLabel: string;
  summary: string;
  image: string;
  imageAlt: string;
  intro: string[];
  sections: Section[];
  faqs: Faq[];
  serviceType: string;
};

export const hubPath = (hub: string) => `/${hub}`;
export const servicePath = (s: Pick<Service, "hub" | "slug">) =>
  `/${s.hub}/${s.slug}`;
