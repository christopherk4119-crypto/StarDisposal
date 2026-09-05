import type { Service } from "@/lib/service-types";

const hub = "site-services";

export const siteServices: Service[] = [
  {
    slug: "demolition",
    hub,
    name: "Demolition",
    h1: "Demolition Calgary",
    title: "Demolition Calgary | Garages, Sheds, Decks & Interiors",
    description:
      "Small demolition in Calgary and Airdrie, from $50 — garages, sheds, decks, fences and interior strip-outs, haul-away included. 403-509-2783.",
    summary:
      "Garages, sheds, decks, fences and interior strip-outs taken down and hauled away in the same job.",
    image: "/images/gallery/yard-cleanup-debris.webp",
    imageAlt:
      "Demolition debris cleared from a Calgary residential property by Star Disposal Services",
    serviceType: "Demolition",
    intro: [
      "We do small demolition: detached garages, sheds, decks, fences, old concrete pads and interior strip-outs. The structure comes down and the debris leaves with us in the same job.",
      "That last part is the reason to hire one outfit for both. A demolition contractor who does not haul leaves you with a pile in the yard, and that pile is normally what holds up whatever comes next — the new garage, the new deck, the landscaping.",
      "What we do not do is multi-storey or structural commercial demolition. That needs different equipment and different qualifications, and we would rather tell you that than take the job.",
    ],
    sections: [
      {
        heading: "Garage demolition",
        body: [
          "A detached garage is our most common demolition job in Calgary, usually because it is being replaced or because the lot is being redeveloped. A typical 20 by 22 foot single-storey detached garage on a back alley is a straightforward job.",
          "What changes the price is what the walls are made of, whether the concrete slab is coming out too, and access. Alley access is normally good news. A garage boxed in behind a fence with no alley is harder.",
          "The slab is the decision worth making early. Leaving it in place is cheaper, and it works if the replacement structure is going in the same footprint and the concrete is sound. Taking it out means breaking it up and hauling it, and concrete is heavy — that is a weight-driven cost, not a volume one.",
        ],
      },
      {
        heading: "Decks, fences and outbuildings",
        body: [
          "Deck teardowns are seasonal and they come in a rush every spring. An average Calgary back deck produces more material than it appears to once boards, joists, beams, railings and stair stringers are separated, and the posts usually come up with concrete footings attached.",
          "Fences are the same story along a longer line. Panels, rails, posts and footings. If you are replacing the fence, getting the old one out and the debris gone before the new posts go in is what keeps that project on schedule.",
          "Sheds, old playhouses, hot tub surrounds and pergolas are all routine. A hot tub itself is worth mentioning separately when you call — they are heavy, awkward, and often need to be cut down to be moved out of a back yard.",
        ],
      },
      {
        heading: "Interior strip-outs",
        body: [
          "Interior demolition is the controlled kind: taking a space back to studs without touching anything structural. Kitchens, bathrooms, basements and old panelled rec rooms are the usual candidates.",
          "The work is drywall, flooring, subfloor, cabinetry, tile, fixtures and old mechanical. It is dusty and it is faster with the right people than it is on a weekend with a sledgehammer and a friend.",
          "Two hard rules on interiors. We do not remove or cut load-bearing structure — that needs an engineer and a permit. And in any Calgary home built before about 1990, the material has to be assessed for asbestos before demolition starts, because vinyl floor tile, textured ceilings, joint compound and pipe insulation from that era commonly contain it.",
        ],
      },
      {
        heading: "Permits, utilities and what is on you",
        body: [
          "Demolishing a permanent structure in Calgary generally requires a permit from the City, and arranging it is the property owner's responsibility rather than ours. It is worth starting early because it is the thing that most often delays a booking.",
          "Any structure with power, gas or water running into it needs those services properly disconnected by the utility first. We will not start work on a building with live services, and no reputable outfit should.",
          "We will tell you plainly when we think a job needs a permit, a disconnect or an asbestos assessment. That is not us being difficult — it is the part that goes badly wrong when it is skipped.",
        ],
      },
    ],
    included: [
      "Detached garage demolition, slab optional",
      "Shed, playhouse, pergola and outbuilding teardowns",
      "Deck removal including footings and stairs",
      "Fence line removal including posts and concrete",
      "Interior strip-outs to studs — kitchens, bathrooms, basements",
      "Old concrete pad and sidewalk breakout",
      "Bin or truck on site so debris leaves with us",
      "Metal separated for scrap rather than landfill",
      "Site left swept and clear for the next trade",
    ],
    process: [
      {
        step: "Send photos",
        detail:
          "Text a few to 403-509-2783. For demolition, photos get you a far more accurate number than a phone description.",
      },
      {
        step: "Sort permits and disconnects",
        detail:
          "Permit from the City is the owner's responsibility. Power, gas and water must be disconnected by the utility before we start.",
      },
      {
        step: "Asbestos assessment if pre-1990",
        detail:
          "Floor tile, textured ceilings, joint compound and pipe insulation from that era commonly contain it. Abatement comes first.",
      },
      {
        step: "Teardown with disposal on site",
        detail:
          "The bin or truck comes with us, so the structure goes straight into disposal rather than sitting in the yard.",
      },
      {
        step: "Swept and handed over",
        detail:
          "Site left clear and ready for the next trade or the rebuild.",
      },
    ],
    limits: [
      "No multi-storey or structural commercial demolition.",
      "No removal or cutting of load-bearing structure — that requires an engineer and a permit.",
      "No asbestos work. Suspect material must be handled by a licensed abatement contractor before demolition.",
      "We do not arrange City permits or utility disconnects on the owner's behalf.",
    ],
    faqs: [
      {
        q: "How much does it cost to demolish a garage in Calgary?",
        a: "It depends on size, what it is built from, whether the concrete slab is coming out, and access. A standard detached garage on a back alley is a straightforward job. Text photos to 403-509-2783 for an accurate number.",
      },
      {
        q: "Do you take the debris away as well?",
        a: "Yes, and that is the main reason to hire one outfit for both. The bin or truck comes with us, so the site is clear when we leave rather than a week later.",
      },
      {
        q: "Do I need a permit?",
        a: "Usually yes for a permanent structure, and arranging it with the City of Calgary is the property owner's responsibility. Start it early — it is the most common cause of a delayed booking.",
      },
      {
        q: "Should the concrete slab come out too?",
        a: "Only if it needs to. Leaving a sound slab in place is cheaper and works fine if the replacement is going in the same footprint. Removing it means breaking and hauling concrete, which is a weight-driven cost.",
      },
      {
        q: "Can you gut a bathroom or kitchen?",
        a: "Yes — interior strip-outs to studs are routine, covering drywall, flooring, cabinetry, tile and fixtures. We do not touch load-bearing structure, which needs an engineer and a permit.",
      },
      {
        q: "What about asbestos in an older house?",
        a: "It has to be assessed and abated by a licensed contractor before demolition starts. Calgary homes built before about 1990 commonly contain it in floor tile, textured ceilings, joint compound and pipe insulation. We will not work around it.",
      },
    ],
    related: [
      "/site-services/construction-waste-removal",
      "/junk-removal/garage-cleanouts",
      "/bin-rentals/renovation-bin-rental",
    ],
  },

  {
    slug: "bobcat-services",
    hub,
    name: "Bobcat Services",
    h1: "Bobcat Services Calgary",
    title: "Bobcat Services Calgary | Site Prep & Material Moving",
    description:
      "Bobcat and skid steer work in Calgary and Airdrie, from $50 — site prep, grading, material moving and debris piles. Call 403-509-2783.",
    summary:
      "Skid steer work for site prep, grading, material moving and anything too heavy to shift by hand.",
    image: "/images/gallery/yard-cleanup-debris.webp",
    imageAlt:
      "Bobcat clearing debris and levelling ground on a Calgary work site",
    serviceType: "Excavation",
    intro: [
      "A bobcat earns its keep the moment a job involves moving more material than two people can shift in a day. Gravel, soil, sod, debris piles, snow, landscaping rock — all of it moves in minutes rather than hours.",
      "We run bobcat work across Calgary and Airdrie for site prep, rough grading, material placement, debris clearing and load-out. It pairs naturally with our demolition and disposal work: the machine loads the bin directly and nothing gets handled twice.",
      "It is not the right tool for every job, and we will say so. Fine finish grading, anything requiring survey-grade levels, and work needing a full-size excavator are all beyond what a skid steer should be doing.",
    ],
    sections: [
      {
        heading: "What a bobcat is actually good at",
        body: [
          "Moving bulk material is the core of it. Spreading a load of gravel across a parking pad, moving topsoil to where the new beds are going, pushing a debris pile into a bin, backfilling around a foundation, stripping sod off a lawn before re-turfing.",
          "Rough grading is the other main use — getting a site level enough to build on, laying a base for a garage pad, shaping a yard so it drains away from the house rather than toward it. Drainage is a genuinely common Calgary problem on older lots and it is usually a grading issue.",
          "And load-out. A machine loading a bin directly is dramatically faster than a crew with wheelbarrows, and on a demolition or a large clean-up it is often what makes the job a one-day job instead of a three-day one.",
        ],
      },
      {
        heading: "Access is the whole conversation",
        body: [
          "The first question on any bobcat job is whether the machine can physically get to the work. A standard skid steer needs roughly six feet of clear width to pass, and it has to get there without crossing anything that will not take its weight.",
          "Practically, that means gate widths, fence gaps, side-yard clearance and alley access. A back yard reachable only through a 36 inch gate is not a bobcat job, and it is much better to establish that on the phone than after a trailer has been driven across the city.",
          "The other access question is what the machine crosses on the way in. Fresh sod, paving stone, a new driveway and buried utilities are all things worth mentioning. We can put plywood down over a route that needs protecting.",
        ],
      },
      {
        heading: "Ground conditions and the Calgary calendar",
        body: [
          "Ground conditions change what a machine can do more than anything else, and Calgary has a wider swing than most places.",
          "Frozen ground in December through February is hard, which is good for driving on and bad for digging into. Frost can extend well over a metre down here in a cold winter, and material that would be easy to move in September becomes genuinely difficult.",
          "Spring thaw is the other extreme and it is the worse one. Saturated ground means a machine will rut a yard badly and get stuck doing it. For any job that is not urgent, waiting two weeks after a thaw produces a better result and a lower cost.",
          "Summer and early fall are simply the best time for this work, which is also why they are the busiest.",
        ],
      },
      {
        heading: "Bobcat plus disposal in one visit",
        body: [
          "The combination people most often want is a machine and a bin at the same time. The bobcat clears, the bin takes it, and the site is finished in one visit rather than being staged over two.",
          "That applies to demolition debris, large yard clean-ups, old landscaping being ripped out, and construction site clear-downs. It is meaningfully cheaper than booking the machine and the disposal separately, because you are paying for one mobilisation rather than two.",
          "Call 403-509-2783 and describe both halves of the job at once so we bring the right setup the first time.",
        ],
      },
    ],
    included: [
      "Site preparation and rough grading",
      "Gravel, soil, sand and landscaping rock placement",
      "Sod stripping and yard levelling",
      "Debris pile clearing and direct bin load-out",
      "Backfilling and material moving",
      "Snow clearing and pushing on lots and pads",
      "Demolition support and site clean-down",
      "Plywood protection over routes that need it",
      "Machine and bin on the same visit",
    ],
    process: [
      {
        step: "Describe the job and the access",
        detail:
          "Call 403-509-2783. The first question is always whether the machine can physically get to the work — gate widths, side yards, alley access.",
      },
      {
        step: "Flag what it crosses",
        detail:
          "New sod, paving stone, fresh driveway, buried utilities. We can lay plywood over a route that needs protecting.",
      },
      {
        step: "Time it to the ground",
        detail:
          "Frozen ground is hard to dig; spring thaw means ruts and stuck machines. Summer and early fall give the best result.",
      },
      {
        step: "Bring the bin at the same time",
        detail:
          "Machine loads the bin directly. One mobilisation instead of two, and the site finishes in a single visit.",
      },
      {
        step: "Levelled and cleared",
        detail:
          "Ground shaped, material placed, debris gone.",
      },
    ],
    limits: [
      "Not suitable where the machine cannot pass — roughly six feet of clear access width is needed.",
      "No fine or survey-grade finish grading, and no work requiring a full-size excavator.",
      "Underground utility locates are the property owner's responsibility before any digging.",
      "Spring thaw conditions may make a job impractical until the ground firms up.",
    ],
    faqs: [
      {
        q: "How much space does a bobcat need to get in?",
        a: "Roughly six feet of clear width. That usually comes down to gate width, side-yard clearance or alley access. A back yard reachable only through a standard 36 inch gate is not a bobcat job — worth checking on the phone before we drive out.",
      },
      {
        q: "Will it damage my lawn or driveway?",
        a: "A machine on soft ground will rut it, which is why spring thaw is the worst time for this work. We lay plywood over routes that need protecting, so tell us about new sod, paving stone or a fresh driveway when you book.",
      },
      {
        q: "Can you work in winter?",
        a: "Yes, but frozen Calgary ground is hard to dig and it slows the work. Driving on it is fine; excavating it is not. We will tell you honestly whether a job is better done now or after a thaw.",
      },
      {
        q: "Do you do the disposal too?",
        a: "Yes, and booking both together is the cheaper way to do it. The bobcat loads the bin directly, so you pay for one mobilisation and the site finishes in one visit.",
      },
      {
        q: "Do you do fine grading for a patio or landscaping?",
        a: "We do rough grading — getting a site level enough to build on. Fine finish grading and anything needing survey-grade levels should go to a landscaping contractor with the right equipment.",
      },
      {
        q: "Do I need utility locates before you dig?",
        a: "Yes, and arranging them is the property owner's responsibility. Alberta One-Call is free and should be done before any digging starts.",
      },
    ],
    related: [
      "/site-services/site-cleanup",
      "/junk-removal/yard-waste-removal",
      "/site-services/demolition",
    ],
  },

  {
    slug: "site-cleanup",
    hub,
    name: "Site Clean-Up",
    h1: "Site Clean-Up Calgary",
    title: "Site Clean-Up Calgary | Post-Construction Clear-Down",
    description:
      "Construction and property site clean-up in Calgary and Airdrie, from $50. Final clear-down before handover or possession. Call 403-509-2783.",
    summary:
      "Final clear-down of a construction site or a neglected property — everything gone, ground swept.",
    image: "/images/gallery/scrap-tires-cleanup.webp",
    imageAlt:
      "Property site clean-up clearing scrap and accumulated debris in Calgary",
    serviceType: "Site Clean Up",
    intro: [
      "Site clean-up is the last job on a build and the first job on a neglected property. Either way it is the same work: everything that should not be there goes, and the ground is left clear.",
      "On construction, that is the post-build clear-down — offcuts, packaging, broken sheet goods, pallets, forms, site rubbish and whatever ended up in the bushes at the edge of the lot. It is what stands between a finished build and a handover.",
      "On property, it is the accumulation — an overgrown yard full of scrap, an acreage with twenty years of stored material, a rental left in a state, a hoarding situation. We have done a lot of both across Calgary since 1996.",
    ],
    sections: [
      {
        heading: "Post-construction clear-down",
        body: [
          "Every build finishes with more material on site than anyone planned for. Lumber offcuts, drywall scrap, empty pails, packaging, banding, broken sheet goods, pallets, form boards, and the general layer of rubbish that accumulates over months.",
          "The clean-down is what turns that into a handover. It matters commercially, because a site that is not clear does not get signed off, and the last trade off the job is usually the one holding it up.",
          "We bring a machine where the volume justifies it, and a bin so material goes straight into disposal rather than being piled first. Metal comes out for scrap, clean wood goes where it should, and the remainder is landfilled.",
        ],
      },
      {
        heading: "Property clean-ups and accumulations",
        body: [
          "The other half of this work is properties that have collected material over years. Overgrown yards with scrap vehicles and appliances in them, acreages with decades of stored equipment, rentals left in a state at the end of a tenancy.",
          "These jobs are almost always bigger than they look from the road, because a good part of the material is under vegetation or behind something else. We walk the property before quoting rather than pricing it from a photo, precisely for that reason.",
          "Scrap metal is the saving grace on this kind of job. Old appliances, vehicle parts, farm equipment, steel and wire are worth money at the scrap yard, and on a metal-heavy property clean-up that offsets a real portion of the cost.",
        ],
      },
      {
        heading: "Hoarding and estate situations",
        body: [
          "Some clean-ups involve someone's home rather than a site, and those need a different pace. Hoarding situations in particular are not junk removal jobs with a bigger truck — they involve a person who is often present and often distressed.",
          "The approach is the same one we take on estate work: no pressure, nothing leaves until it has been agreed, and no commentary. If it is easier to work in stages over several visits rather than clearing everything at once, that is a completely normal way to do it.",
          "Practically, these jobs need a bin on site for the duration rather than a single truck visit. Call 403-509-2783 and we will talk it through before anything is booked.",
        ],
      },
      {
        heading: "Bylaw notices and deadlines",
        body: [
          "A number of property clean-ups happen because the City has issued a notice — accumulated material, an untidy property, or a nuisance complaint under Calgary's Community Standards Bylaw.",
          "If you are working to a compliance deadline, say so on the first call. It changes how we schedule and it is much easier handled with two weeks of notice than three days. We will tell you honestly whether a date is achievable rather than agreeing and letting it slip.",
        ],
      },
    ],
    included: [
      "Post-construction clear-down before handover",
      "Lumber offcuts, drywall scrap, packaging and pallets",
      "Overgrown property and acreage clean-ups",
      "Scrap vehicles, appliances and farm equipment",
      "End-of-tenancy and rental property clear-outs",
      "Staged clean-ups for hoarding and estate situations",
      "Bobcat on site where the volume justifies it",
      "Metal separated for scrap to offset the cost",
      "Ground swept and left clear",
    ],
    process: [
      {
        step: "Walk the property",
        detail:
          "These jobs are almost always bigger than they look from the road. We walk it rather than pricing from a photo.",
      },
      {
        step: "Flag any deadline",
        detail:
          "Handover date, possession, or a City bylaw compliance notice. Tell us on the first call at 403-509-2783.",
      },
      {
        step: "Bin on site, machine if needed",
        detail:
          "Material goes straight into disposal rather than being piled twice. A bobcat speeds up anything high-volume.",
      },
      {
        step: "Work in stages if that suits",
        detail:
          "For hoarding and estate situations, several visits at a manageable pace is completely normal.",
      },
      {
        step: "Swept and clear",
        detail:
          "Metal to scrap, the rest disposed of, ground left clear for handover.",
      },
    ],
    limits: [
      "No hazardous waste, drums of unknown chemicals, or contaminated soil — those require a specialist contractor.",
      "No asbestos-containing material.",
      "Biohazard and medical waste situations require a specialist remediation company.",
      "Scrap vehicles need proof of ownership before they can be removed.",
    ],
    faqs: [
      {
        q: "What does a site clean-up include?",
        a: "Everything that should not be there. On construction that is offcuts, packaging, pallets, broken sheet goods and site rubbish. On a property it is accumulated material, scrap, appliances and overgrowth. The ground is left swept and clear.",
      },
      {
        q: "How do you price a property clean-up?",
        a: "By walking it. These jobs are almost always bigger than they look from the road because material hides under vegetation and behind other material. A photo quote on this kind of work is guesswork.",
      },
      {
        q: "Can scrap on the property reduce the cost?",
        a: "Yes, significantly. Old appliances, vehicle parts, farm equipment, steel and wire have real value at the scrap yard, and on a metal-heavy property that offsets a genuine portion of the job.",
      },
      {
        q: "Do you handle hoarding situations?",
        a: "Yes, and we treat them differently from a normal clear-out. No pressure, nothing leaves until it has been agreed, no commentary, and we work in stages over several visits if that is easier. Call and we will talk it through first.",
      },
      {
        q: "I have a City bylaw notice with a deadline. Can you help?",
        a: "Yes — tell us the date on the first call. Two weeks of notice makes it straightforward. If a deadline genuinely is not achievable we will say so rather than agree and let it slip.",
      },
      {
        q: "Can you remove an old vehicle from the yard?",
        a: "Yes, with proof of ownership. Vehicles are good scrap, which usually works in your favour on the overall price of the clean-up.",
      },
    ],
    related: [
      "/site-services/bobcat-services",
      "/junk-removal/scrap-metal-removal",
      "/site-services/construction-waste-removal",
    ],
  },

  {
    slug: "construction-waste-removal",
    hub,
    name: "Construction Waste",
    h1: "Construction Waste Removal Calgary",
    title: "Construction Waste Removal Calgary | Contractor Bins",
    description:
      "Construction and demolition waste removal for Calgary and Airdrie job sites, from $50. Bins, swaps and contractor accounts. 403-509-2783.",
    summary:
      "Job site waste handled on a schedule — bins, swaps and standing arrangements for contractors.",
    image: "/images/gallery/bin-trailer-apartment.webp",
    imageAlt:
      "Bin trailer servicing a Calgary construction site for construction waste removal",
    serviceType: "Construction Waste Disposal",
    intro: [
      "On a job site, waste is a scheduling problem before it is a disposal problem. A full bin on a Tuesday morning stops trades from working, and that costs more than the haul does.",
      "We service construction and demolition waste across Calgary and Airdrie with bins sized to the build and swaps timed to the schedule. For contractors running multiple sites, a standing arrangement beats booking job by job.",
      "Ted has been doing this since 1996 and answers the phone himself. That is genuinely the service — the bin goes when it is called, and your site does not become the bottleneck.",
    ],
    sections: [
      {
        heading: "Sizing and swap scheduling",
        body: [
          "Volume on a construction site is predictable in shape even when it is not predictable in quantity. Demolition and strip-out produce an enormous spike. Framing produces steady offcuts. Drywall produces a second spike. Finishing produces packaging, which is high volume and almost no weight.",
          "That shape is what a swap schedule should follow. A 20 yard bin delivered before the strip-out, swapped once the demolition debris is gone, and left on site through framing and drywall covers most residential builds without anyone having to think about it.",
          "The alternative — calling for a haul each time a bin fills — works, but it means someone on site is monitoring bin capacity, and that person is usually busy.",
        ],
      },
      {
        heading: "What construction waste actually costs",
        body: [
          "The cost is the bin, the haul and the tipping fee, and the tipping fee is charged by weight. Which material is in the bin therefore matters a great deal.",
          "Light and bulky — packaging, insulation, drywall offcuts, framing scrap, vapour barrier. High volume, low weight, cheaper per bin than it looks.",
          "Heavy — concrete, mortar, tile, plaster, mixed shingle, wet lumber. These reach legal haul weight while the bin still looks half empty, which is normal and expected rather than a problem.",
          "Where a site can separate concrete from general waste, it is worth doing. Clean concrete has its own disposal route and it keeps the dense material out of a mixed load.",
        ],
      },
      {
        heading: "Metal on a construction site is worth money",
        body: [
          "This is the part that gets thrown away most often and should not be. Mechanical rip-outs produce furnaces, hot water tanks, ductwork and copper pipe. Electrical rough-ins produce copper wire offcuts. Structural work produces steel, rebar and banding.",
          "All of it has scrap value, and pulling it out of the general waste stream both lowers your tipping weight and returns something. On a mechanical replacement job the old equipment can be worth a meaningful amount.",
          "Give us a separate pile or a separate bin for metal and we will handle it as scrap rather than landfill. It takes the site almost no extra effort.",
        ],
      },
      {
        heading: "Asbestos and pre-1990 buildings",
        body: [
          "Any renovation or demolition on a Calgary building from before roughly 1990 needs asbestos assessed before work starts. It commonly appears in vinyl floor tile and its mastic, sheet flooring backing, drywall joint compound, textured ceiling coating, pipe and duct insulation, and vermiculite attic insulation.",
          "Asbestos-containing material cannot go into a construction bin. It requires a licensed abatement contractor and a separate disposal route, and Alberta OHS requirements around it are strict.",
          "We will not accept it, and we will flag it if we see something on a site that looks like it should be tested. Testing is cheap compared to what happens when this is discovered mid-job.",
        ],
      },
    ],
    included: [
      "Bins sized to the build and its material profile",
      "Scheduled swaps timed to the trade sequence",
      "Framing offcuts, drywall, insulation and packaging",
      "Demolition debris, flooring, tile and fixtures",
      "Concrete, brick and masonry as a separated load",
      "Old mechanical and metal separated for scrap",
      "Standing arrangements for contractors and multi-site builders",
      "Long-term rentals on extended builds",
      "Final site clear-down before handover",
    ],
    process: [
      {
        step: "Talk through the build",
        detail:
          "Call 403-509-2783 with the scope and the trade sequence. Waste volume follows a predictable shape and the schedule should follow it.",
      },
      {
        step: "Set the swap schedule",
        detail:
          "Pre-booked swaps beat monitoring bin capacity on site. Nobody on your crew should be doing that job.",
      },
      {
        step: "Separate the metal",
        detail:
          "A separate pile is enough. It lowers tipping weight and returns scrap value.",
      },
      {
        step: "Handle asbestos before demo",
        detail:
          "Pre-1990 buildings need assessment first. It cannot go in the bin and it cannot be discovered mid-job.",
      },
      {
        step: "Clear down at the end",
        detail:
          "Final clean-down before handover, with a machine on site where the volume justifies it.",
      },
    ],
    limits: [
      "Asbestos-containing material is not accepted — licensed abatement only.",
      "No paints, solvents, adhesives, sealants, fuels or other hazardous site chemicals.",
      "No contaminated soil; that requires a specialist contractor and a separate disposal route.",
      "Load must sit level with the top rail to be tarped and legally hauled.",
    ],
    faqs: [
      {
        q: "Do you set up accounts for contractors?",
        a: "Yes. A standing arrangement with known bin sizes and scheduled swaps works far better than booking job by job. Call 403-509-2783 and speak to Ted directly.",
      },
      {
        q: "How quickly can you swap a full bin?",
        a: "We schedule swaps around your trade sequence so the full bin is replaced before it becomes a bottleneck. Pre-booking the swap is always better than calling on the morning it fills.",
      },
      {
        q: "Can I put concrete in a construction bin?",
        a: "Yes, but it is heavy enough to reach legal haul weight while the bin still looks half empty. Where a site can separate clean concrete into its own load, it is worth doing.",
      },
      {
        q: "What should I keep out of the general bin?",
        a: "Metal, because it has scrap value and lowers your tipping weight. And hazardous material — paints, solvents, adhesives, fuels — which cannot go in at all.",
      },
      {
        q: "Do you handle asbestos?",
        a: "No. It requires a licensed abatement contractor and a separate disposal route. Any Calgary building from before about 1990 should be assessed before demolition or renovation begins.",
      },
      {
        q: "Do you service sites in Airdrie?",
        a: "Yes, along with Cochrane and Chestermere, on the same swap and scheduling basis as Calgary sites.",
      },
    ],
    related: [
      "/bin-rentals/20-yard-bin-rental",
      "/site-services/site-cleanup",
      "/bin-rentals/renovation-bin-rental",
    ],
  },
];
