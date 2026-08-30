export type ServiceSlug =
  | "junk-removal"
  | "bin-rentals"
  | "bobcat-services"
  | "dump-runs"
  | "demolition"
  | "site-clean-up";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: ServiceSlug;
  number: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  summary: string;
  heroImage: { src: string; alt: string };
  eyebrow: string;
  intro: string[];
  included: string[];
  faqs: ServiceFaq[];
  related: ServiceSlug[];
}

export const services: ServiceData[] = [
  {
    slug: "junk-removal",
    number: "01",
    name: "Junk Removal",
    h1: "Junk Removal in Calgary",
    title: "Junk Removal Calgary | Same-Day Hauling",
    description:
      "Same-day junk removal in Calgary & Airdrie — furniture, appliances, garage and yard clean-outs. Jobs from $50. Call 403-204-7827.",
    summary:
      "Furniture, appliances, garage and yard clean-outs — we load and haul it all.",
    heroImage: {
      src: "/images/gallery/mattress-furniture-bin.webp",
      alt: "Bin loaded with mattress and furniture for junk removal in Calgary",
    },
    eyebrow: "What we haul",
    intro: [
      "Star Disposal Services has been hauling junk out of Calgary homes and yards since 1996. If it fits in a bin, our crew can carry it out — furniture, appliances, garage clean-outs, basement clutter, yard debris, and general household junk that's taken over a space you'd rather have back.",
      "You don't lift a finger. We show up, load everything ourselves, and sweep up when we're done. Most jobs are priced by volume and labour, starting at $50 for a small load, with same-day or next-day pickup available in most parts of Calgary and Airdrie.",
      "We don't take hazardous materials — paint, chemicals, asbestos, or anything requiring special disposal handling. If you're not sure whether something qualifies, call and ask before we come out; we'd rather tell you upfront than show up and leave a job half done.",
    ],
    included: [
      "Furniture and appliance removal",
      "Garage, basement and yard clean-outs",
      "Renovation debris (non-hazardous)",
      "Loading and hauling — we do the lifting",
      "Broom-clean sweep-up after pickup",
      "Same-day and next-day availability in most cases",
    ],
    faqs: [
      {
        q: "How much does junk removal cost in Calgary?",
        a: "Jobs start at $50 and are priced by how much volume and labour is involved. Call the main line and Ted or a member of the crew will give you a straight quote before any work starts.",
      },
      {
        q: "What items can't you take?",
        a: "We don't handle hazardous materials — things like paint, chemicals, or asbestos need a specialized disposal service. If you're unsure about an item, call ahead and we'll tell you honestly whether it's something we can haul.",
      },
      {
        q: "Do you offer same-day junk removal?",
        a: "In most cases, yes. Call the main line in the morning and we'll do our best to fit you in that day, depending on the schedule.",
      },
      {
        q: "Do I need to be home for the pickup?",
        a: "Not always — if the items are accessible and payment is arranged ahead of time, we can often handle it without you needing to be there. Just let us know when you call.",
      },
      {
        q: "What areas do you serve?",
        a: "Calgary and Airdrie, plus Cochrane and Chestermere. If you're just outside that area, call and ask — we may still be able to help.",
      },
    ],
    related: ["bin-rentals", "dump-runs", "site-clean-up"],
  },
  {
    slug: "bin-rentals",
    number: "02",
    name: "Bin Rentals",
    h1: "Bin Rentals in Calgary",
    title: "Bin Rentals Calgary | 10–20 Yard Bins",
    description:
      "Bin rentals in Calgary from 10 to 20 yards, delivered and picked up on your schedule. Renovation, move-out & yard jobs. Call 403-204-7827.",
    summary:
      "10, 12, 15 and 20 yard bins delivered and picked up on your schedule.",
    heroImage: {
      src: "/images/gallery/bin-trailer-apartment.webp",
      alt: "Bin trailer rental delivered to a Calgary apartment complex",
    },
    eyebrow: "All size bins",
    intro: [
      "When a job is too big for a truckload but doesn't need a full crew, a bin on-site is usually the fastest way through it. We deliver 10, 12, 15, and 20 yard bins around Calgary for renovations, move-outs, yard clean-ups, and construction sites, and pick them up as soon as you're done.",
      "We work around your timeline, not the other way around — delivery and pickup are scheduled to fit the job, and rental periods are flexible rather than locked to a fixed number of days. Bins can be placed on a driveway, in an alley, or directly on a job site, as long as there's clear access for the truck.",
      "Not everything can go in a bin — hazardous materials, and certain items like tires or large appliances, may need separate handling depending on the load. Tell us what you're loading when you call and we'll help you pick the right size and confirm what's fine to toss in.",
    ],
    included: [
      "10, 12, 15 and 20 yard bin sizes",
      "Delivery and pickup scheduled around your job",
      "Flexible rental periods",
      "Placement on driveways, alleys or job sites",
      "Guidance on what can and can't go in the bin",
    ],
    faqs: [
      {
        q: "What size bin do I need?",
        a: "It depends on the job — a 10 yard bin usually covers a small clean-out, while a 20 yard bin suits a full renovation or larger construction project. Call and describe the job and we'll help you pick the right size.",
      },
      {
        q: "How long can I keep the bin?",
        a: "Rental periods are flexible. Let us know roughly how long you'll need it when you book and we'll work the pickup around your timeline.",
      },
      {
        q: "What can't go in the bin?",
        a: "Hazardous materials aren't accepted, and some items like tires or appliances may need to go through a dump run instead. Ask when you book if you're not sure about something specific.",
      },
      {
        q: "Where can the bin be placed?",
        a: "Most driveways, alleys, and job sites work fine, as long as there's clear access for delivery. Let us know the drop location when you call so we can confirm it'll work.",
      },
      {
        q: "How fast can you deliver a bin?",
        a: "In many cases we can deliver within the week. Call the main line for current availability in your area.",
      },
    ],
    related: ["junk-removal", "site-clean-up", "demolition"],
  },
  {
    slug: "bobcat-services",
    number: "03",
    name: "Bobcat Services",
    h1: "Bobcat Services in Calgary",
    title: "Bobcat Services Calgary | Site Prep & Grading",
    description:
      "Bobcat services in Calgary for site prep, grading and material moving on tight city lots. Experienced operator. Call 403-204-7827.",
    summary:
      "Site prep, grading and material moving — built for tight city lots.",
    heroImage: {
      src: "/images/about/truck-signage.webp",
      alt: "Star Disposal Services truck on-site for a Calgary bobcat and hauling job",
    },
    eyebrow: "Site work",
    intro: [
      "Bobcat work covers a lot of the ground between junk removal and a full renovation — site prep, grading, and moving material around a property that's too much for hand labour but doesn't call for a full excavation crew.",
      "We run bobcat jobs for landscaping prep, small excavation, and moving soil, gravel, mulch, or debris around a site. A lot of our bobcat work is in established Calgary neighbourhoods, so tight driveways and narrow alley access are the norm, not the exception.",
      "We move and grade material — we don't sell or supply soil, gravel, or landscaping product ourselves. If your job needs new material brought in, let us know and we'll talk through how that fits with the work we do on-site.",
    ],
    included: [
      "Site preparation and grading",
      "Material moving (soil, gravel, mulch, debris)",
      "Landscaping support work",
      "Small excavation and load-out",
      "Experienced operator on every job",
    ],
    faqs: [
      {
        q: "What kind of jobs is bobcat work good for?",
        a: "Site prep before landscaping or construction, grading a yard, and moving large volumes of material that would take days by hand. Call and describe the job and we'll tell you if it's a fit.",
      },
      {
        q: "Can you access tight city lots?",
        a: "Most of our bobcat jobs are in established Calgary neighbourhoods with narrow driveways and alley access, so yes — tell us about the access when you call and we'll plan around it.",
      },
      {
        q: "Do you supply material like gravel or soil?",
        a: "No — we move and grade material on-site, but we don't sell or supply landscaping product ourselves.",
      },
      {
        q: "How is bobcat work priced?",
        a: "Pricing depends on scope and time on-site. Call the main line with the details of the job for a straight quote.",
      },
      {
        q: "Can bobcat work be combined with a dump run or bin rental?",
        a: "Yes — a lot of our bobcat jobs pair naturally with a bin on-site or a dump run for the material we clear. Ask when you book and we'll plan it together.",
      },
    ],
    related: ["dump-runs", "demolition", "site-clean-up"],
  },
  {
    slug: "dump-runs",
    number: "04",
    name: "Dump Runs",
    h1: "Dump Runs in Calgary",
    title: "Dump Runs Calgary | Fast Waste Hauling",
    description:
      "Fast dump runs in Calgary for residential & commercial waste, scrap and yard debris. No trailer or trip needed. Call 403-204-7827.",
    summary:
      "Skip the trailer rental — we haul your load to the dump ourselves.",
    heroImage: {
      src: "/images/gallery/scrap-tires-cleanup.webp",
      alt: "Scrap tires and debris loaded for a Calgary dump run",
    },
    eyebrow: "Fast hauling",
    intro: [
      "Sometimes you don't need a bin sitting on your property for a week or a full junk removal crew — you just need what's already piled up hauled away. That's what a dump run is for: we load it, drive it to the landfill or transfer station, and it's gone.",
      "It's a fit for residential and commercial waste, yard debris, and scrap that's already sitting curbside or staged in one spot. Skip renting a trailer and making the trip yourself — we handle the drive, the drop-off, and the fees.",
      "Turnaround is usually fast, and pricing is straightforward — by the load, quoted before we come out. If you're not sure whether a dump run or a full junk removal visit fits your situation better, call and we'll help you figure out which makes more sense.",
    ],
    included: [
      "Residential and commercial dump runs",
      "Yard waste, scrap and general debris",
      "No trailer rental or landfill trip required",
      "Fast turnaround",
      "Upfront, per-load pricing",
    ],
    faqs: [
      {
        q: "What's the difference between a dump run and junk removal?",
        a: "A dump run is for material that's already loaded or piled up and just needs hauling away. Junk removal includes us doing the loading too. Call and describe what you've got — we'll tell you which fits.",
      },
      {
        q: "Can you take scrap metal or tires?",
        a: "In many cases, yes — tell us what's in the load when you call so we can confirm it and quote it properly.",
      },
      {
        q: "How fast can you come for a dump run?",
        a: "Often same-day or next-day, depending on the schedule. Call the main line for current availability.",
      },
      {
        q: "Is there a minimum load size for a dump run?",
        a: "Not a strict minimum, but very small loads may be more cost-effective as part of a junk removal visit. Call and we'll quote it either way.",
      },
      {
        q: "Do you do dump runs outside Calgary?",
        a: "Yes, we also serve Airdrie, Cochrane, and Chestermere. Call to confirm your area.",
      },
    ],
    related: ["junk-removal", "bobcat-services", "site-clean-up"],
  },
  {
    slug: "demolition",
    number: "05",
    name: "Demolition",
    h1: "Demolition Services in Calgary",
    title: "Demolition Calgary | Small & Residential Demo",
    description:
      "Small-scale demolition in Calgary — sheds, decks, fences and interior demo, debris haul-away included. Call 403-204-7827.",
    summary:
      "Sheds, decks, fences and interior tear-outs, with haul-away included.",
    heroImage: {
      src: "/images/gallery/bin-trailer-alley.webp",
      alt: "Bin trailer positioned in a Calgary alley for demolition debris removal",
    },
    eyebrow: "Demo work",
    intro: [
      "We handle small, residential-scale demolition — sheds, decks, fences, and interior tear-outs like flooring, drywall, or old fixtures. It's the kind of job that's too much to do yourself but doesn't call for a large commercial demolition contractor.",
      "Debris haul-away is included, so once the structure is down, it's gone with it — no separate bin rental or dump run to arrange unless the job is big enough to need one, which we'll flag upfront.",
      "For larger structural or commercial demolition, or anything involving hazardous materials like asbestos, we're not the right call — that work needs a certified contractor, and we'll say so rather than take on something outside our scope. Permits, where required, are the homeowner's responsibility; check with the City of Calgary before work starts.",
    ],
    included: [
      "Shed, deck and fence removal",
      "Interior demo (flooring, drywall, fixtures)",
      "Small structure teardown",
      "Debris loading and haul-away included",
      "Site left broom-clean",
    ],
    faqs: [
      {
        q: "What size demolition jobs do you handle?",
        a: "Small, residential-scale work — sheds, decks, fences, and interior tear-outs. For large structural or commercial demolition, we'll point you to a contractor better suited to it.",
      },
      {
        q: "Do you handle permits?",
        a: "Permits are the homeowner's responsibility. Check with the City of Calgary before the job starts to confirm what's required for your project.",
      },
      {
        q: "Is debris haul-away included?",
        a: "Yes, for the jobs we take on — clearing the debris is part of the work, not a separate charge.",
      },
      {
        q: "How much does small demolition cost?",
        a: "It depends on the size of the structure and how much debris needs hauling. Call the main line with the details for a straight quote.",
      },
      {
        q: "Do you handle asbestos or other hazardous materials?",
        a: "No — that work requires a certified abatement contractor. If you're not sure whether a structure might contain hazardous material, get it checked before calling us.",
      },
    ],
    related: ["bin-rentals", "dump-runs", "site-clean-up"],
  },
  {
    slug: "site-clean-up",
    number: "06",
    name: "Site Clean-Up",
    h1: "Site Clean-Up in Calgary",
    title: "Site Clean-Up Calgary | Construction & Reno Debris",
    description:
      "Site clean-up in Calgary for construction, renovation and property clean-outs. One crew for loading, hauling and disposal. Call 403-204-7827.",
    summary:
      "Full construction, renovation and property clean-outs, start to finish.",
    heroImage: {
      src: "/images/gallery/yard-cleanup-debris.webp",
      alt: "Site clean-up and yard debris removal in Calgary",
    },
    eyebrow: "Full site clean-outs",
    intro: [
      "Once a construction or renovation project wraps up, someone still has to deal with what's left behind — offcuts, packaging, old fixtures, and general site debris. That's the job we come in for: full site clean-up, not just picking up a few extra bags.",
      "It's also a fit for yard and lot clean-ups, move-out clean-outs, and getting a property fully cleared before it's listed or handed over — anywhere the goal is a clean, empty space at the end of the day rather than a partial tidy-up.",
      "One crew handles loading, hauling, and disposal, so you're not coordinating a bin rental and a separate hauling trip — though if the job's big enough to benefit from a bin on-site while work is ongoing, we'll set that up too.",
    ],
    included: [
      "Construction and renovation debris removal",
      "Yard and lot clean-up",
      "Move-out and property clean-outs",
      "Full-property clean-up before listing or handover",
      "One crew for loading, hauling and disposal",
    ],
    faqs: [
      {
        q: "What's included in a site clean-up?",
        a: "Loading, hauling, and disposal of construction, renovation, or general property debris — the goal is a clean, empty site when we're done.",
      },
      {
        q: "Do you clean up after contractors or renovations?",
        a: "Yes — this is one of the most common jobs we do, whether it's your own reno or clean-up after a contractor has finished.",
      },
      {
        q: "Can you clean up an entire property before it's listed?",
        a: "Yes, full-property clean-outs before a sale or handover are something we handle regularly.",
      },
      {
        q: "How is site clean-up priced?",
        a: "It's based on the volume of debris and labour involved. Call the main line with details of the site for a straight quote.",
      },
      {
        q: "Can this be combined with a bin rental?",
        a: "Yes — for larger or ongoing jobs, having a bin on-site while work continues often makes sense. We can set both up together.",
      },
    ],
    related: ["junk-removal", "bin-rentals", "demolition"],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
