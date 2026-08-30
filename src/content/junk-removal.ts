import type { Service } from "@/lib/service-types";

const hub = "junk-removal";

export const junkRemovalServices: Service[] = [
  {
    slug: "appliance-removal",
    hub,
    name: "Appliance Removal",
    h1: "Appliance Removal Calgary",
    title: "Appliance Removal Calgary | Fridges, Washers, Stoves",
    description:
      "Fridge, freezer, washer, dryer and stove removal in Calgary and Airdrie. We carry it out — stairs included. From $50. Call 403-861-2361.",
    summary:
      "Fridges, freezers, washers, dryers, stoves and dishwashers carried out and hauled away — basement stairs included.",
    image: "/images/gallery/bin-trailer-alley.webp",
    imageAlt:
      "Star Disposal trailer loaded in a Calgary back alley during an appliance removal job",
    serviceType: "Appliance Removal",
    intro: [
      "Appliances are the single most common thing we get called about, and for good reason. A dead fridge weighs somewhere between 250 and 350 pounds, it will not fit in a car, the city will not take it at the curb, and the new one is being delivered on Thursday.",
      "We take fridges, freezers, washers, dryers, stoves, ovens, dishwashers, microwaves, hot water tanks, air conditioners and deep freezers. Out of the basement, up the stairs, through the door, onto the truck. You do not need to disconnect anything beyond shutting off the water and power, and you do not need to help us lift.",
      "Single appliance pickups start at $50 in Calgary and Airdrie. If you have two or three going at once — which is common on a kitchen renovation — it is cheaper per item than doing them one at a time.",
    ],
    sections: [
      {
        heading: "Why appliances cannot just go to the curb",
        body: [
          "Calgary's residential collection does not take large appliances, and there is a real reason beyond weight. Fridges, freezers and air conditioners contain refrigerant, which has to be recovered by a certified technician before the unit can be scrapped or landfilled. Putting one at the curb does not make it disappear; it makes it a bylaw problem.",
          "Older units are worse. Fridges and freezers built before the mid-1990s often contain CFC refrigerants and, in some cases, mercury switches and PCB-containing capacitors. Those are exactly the components that have to be pulled before the steel can go to a scrap yard.",
          "This is the part we handle for you. The unit goes to a facility set up to strip it properly rather than into a hole in the ground.",
        ],
      },
      {
        heading: "Getting it out of the basement",
        body: [
          "Most of the actual work in an appliance removal is not the driving. It is the twelve feet between a basement laundry room and the top of the stairs.",
          "Full-size washers and dryers run 150 to 250 pounds, and front-load washers are heavier than they look because of the concrete counterweight bolted inside the drum. Basement stairs in older Calgary homes are frequently narrow, sometimes with a turn at the bottom. We bring an appliance dolly and straps and we do this constantly, so it takes us minutes rather than the afternoon it takes two people who do not.",
          "What genuinely helps before we arrive: shut off the water to the washer and disconnect the hoses, unplug everything, and clear a path from the appliance to the door. Doors coming off hinges we can handle ourselves if it comes to that.",
        ],
      },
      {
        heading: "Appliance removal on a kitchen renovation",
        body: [
          "If you are gutting a kitchen, the appliances are rarely the only thing going. Cabinets, countertop, backsplash tile, flooring and old drywall all come out over a day or two, and the appliances tend to come out first.",
          "In that situation, a bin usually beats a series of pickups. You strip the kitchen at your own pace and everything goes in one place. If the reno is bigger than a kitchen, the same logic applies across the whole job.",
          "Where a truck pickup still wins is a straight appliance swap: the old fridge out, the new one in, nothing else changing. That is a $50 call, not a bin rental.",
        ],
      },
    ],
    included: [
      "Carry-out from anywhere in the home — basement, second floor, garage",
      "Fridges, freezers, deep freezers and bar fridges",
      "Washers, dryers and stacked laundry units",
      "Stoves, wall ovens, cooktops, range hoods and dishwashers",
      "Hot water tanks, air conditioners and dehumidifiers",
      "Microwaves, small appliances and the packaging the new one came in",
      "Refrigerant-bearing units routed for proper recovery",
      "Metal separated for scrap rather than landfill",
      "Sweep-up of the space the appliance came out of",
    ],
    process: [
      {
        step: "Tell us what and where",
        detail:
          "Call 403-861-2361 with the appliance type and which floor it is on. A photo texted over is even better. You get a price on that call.",
      },
      {
        step: "Book a window",
        detail:
          "We run 8 AM to 8 PM, seven days. Same-day is often possible on single items booked in the morning.",
      },
      {
        step: "Disconnect and clear a path",
        detail:
          "Water off, hoses off, unplugged. Move anything breakable out of the route between the appliance and the door.",
      },
      {
        step: "We carry it out",
        detail:
          "Dolly and straps, stairs included. You do not lift anything and you do not need to help.",
      },
      {
        step: "Sweep and go",
        detail:
          "We tidy the spot it came out of. Payment on completion, at the price quoted.",
      },
    ],
    limits: [
      "We are not gas fitters. If a stove or dryer is on a gas line, the line must be capped by a licensed gas fitter before we move the unit.",
      "Hot water tanks must be drained and disconnected from gas or power before pickup.",
      "We do not repair appliances or perform refrigerant recovery ourselves — units are routed to a facility that does.",
    ],
    faqs: [
      {
        q: "How much does appliance removal cost in Calgary?",
        a: "Single-item pickups start at $50. Multiple appliances in one visit — common on a kitchen renovation — work out cheaper per item than separate trips. You get the price on the phone before we come out.",
      },
      {
        q: "Do you take fridges and freezers with refrigerant?",
        a: "Yes. Refrigerant-bearing units go to a facility that recovers the refrigerant properly before the steel is scrapped. That is exactly why they cannot go to the curb.",
      },
      {
        q: "Can you get it out of my basement?",
        a: "Yes, and most of our appliance jobs are basement laundry. We bring an appliance dolly and straps. Narrow stairs and a turn at the bottom are normal in older Calgary homes and are not a problem.",
      },
      {
        q: "Do I need to disconnect it first?",
        a: "Shut off the water and disconnect the hoses on a washer, and unplug everything. If the unit runs on gas, the line has to be capped by a licensed gas fitter before we touch it — we are not gas fitters.",
      },
      {
        q: "Will you take a working appliance?",
        a: "Yes, though if it genuinely still works you will usually do better listing it — plenty of people in Calgary will collect a working fridge for free. We will take it either way if you would rather it were just gone.",
      },
      {
        q: "Do you pick up in Airdrie?",
        a: "Yes. Airdrie is a regular run, along with Cochrane and Chestermere, at no surcharge for a normal pickup.",
      },
    ],
    related: [
      "/junk-removal/scrap-metal-removal",
      "/junk-removal/furniture-removal",
      "/bin-rentals/renovation-bin-rental",
    ],
  },

  {
    slug: "furniture-removal",
    hub,
    name: "Furniture Removal",
    h1: "Furniture Removal Calgary",
    title: "Furniture Removal Calgary | Couches, Beds, Desks",
    description:
      "Couch, sectional, bed, table and desk removal across Calgary and Airdrie. We carry it out and haul it away. From $50 — call 403-861-2361.",
    summary:
      "Couches, sectionals, beds, dressers, tables and office furniture carried out of the room they are in and hauled away.",
    image: "/images/gallery/mattress-furniture-bin.webp",
    imageAlt:
      "Bin loaded with furniture and a mattress during a Calgary furniture removal job",
    serviceType: "Furniture Removal",
    intro: [
      "Furniture is awkward rather than heavy. A three-seat sectional that walked into a basement fifteen years ago through a door that has since been reframed is the classic Calgary furniture removal job, and it comes up more than you would think.",
      "We take couches, sectionals, recliners, beds and bed frames, dressers, wardrobes, dining tables, chairs, desks, filing cabinets, bookshelves, entertainment units, patio furniture and office furniture. Out of the room it is in, down the stairs, onto the truck.",
      "Jobs start at $50. A single chair at the curb is at the bottom of that range; a full basement suite worth of furniture is a truckload.",
    ],
    sections: [
      {
        heading: "When furniture will not fit back out the door",
        body: [
          "This is genuinely common. Sectionals get carried into basements before a stair railing goes in. Wardrobes get assembled in the room. Older Calgary bungalows have narrow basement stairwells with a low soffit at the turn, and a piece that came down in 2009 does not come back up in one piece.",
          "The answer is that it comes apart. Sofa legs unbolt, backs often separate from the base, bed frames disassemble, and particleboard wardrobes come apart along the panels they were built from. We bring tools and we do this without ceremony.",
          "If the piece is solid hardwood and genuinely will not come apart or fit out, we will tell you that on site rather than damaging your stairwell trying.",
        ],
      },
      {
        heading: "Donation, resale, or disposal",
        body: [
          "Not everything should be thrown out, and we would rather say so. Solid wood furniture in good condition, quality dining sets and decent office furniture are all worth listing or donating in Calgary, and there are charities that will collect.",
          "What is genuinely not worth trying to donate: anything with structural damage, upholstered furniture with stains or odours, particleboard flat-pack that has been moved more than twice, and anything that has been stored in a damp basement or garage over a winter. Charities turn all of that away, and by then you have wasted a week.",
          "For everything in that second category, disposal is the honest answer, and metal frames get pulled for scrap rather than landfilled.",
        ],
      },
      {
        heading: "Apartments, condos and walk-ups",
        body: [
          "Multi-unit buildings have their own rules and they are worth checking before you book. Many Calgary condo boards require elevator booking for moves and removals, some restrict it to certain hours, and most want the loading dock or a specific door used rather than the front lobby.",
          "Tell us the building situation when you call. Third-floor walk-up with no elevator is a real factor in what a job takes, and it is much better dealt with on the phone than discovered on arrival.",
          "We do a lot of apartment and condo work across the inner city and the northeast, so unusual access is normal rather than a problem.",
        ],
      },
    ],
    included: [
      "Carry-out from any floor, stairs and tight stairwells included",
      "Couches, sectionals, loveseats, recliners and armchairs",
      "Beds, bed frames, headboards and box springs",
      "Dressers, wardrobes, nightstands and armoires",
      "Dining tables, chairs, desks and office furniture",
      "Bookshelves, entertainment units and flat-pack furniture",
      "Patio and outdoor furniture",
      "Disassembly where a piece will not fit through the door",
      "Metal frames separated for scrap",
    ],
    process: [
      {
        step: "Describe the pieces",
        detail:
          "Call 403-861-2361 with what is going and which floor it is on. Photos help us price it accurately first time.",
      },
      {
        step: "Flag the access",
        detail:
          "Basement, third-floor walk-up, elevator booking needed, alley only — tell us up front and the day runs smoothly.",
      },
      {
        step: "We quote before loading",
        detail:
          "You get the number before anything goes on the truck, not after.",
      },
      {
        step: "Carry-out and disassembly",
        detail:
          "We take pieces apart where they will not fit through the door. Walls and stair rails stay intact.",
      },
      {
        step: "Sweep and haul",
        detail:
          "The room gets tidied, the load goes out, metal gets separated at the yard.",
      },
    ],
    limits: [
      "We do not move furniture between homes — this is removal and disposal, not a moving service.",
      "Upholstered furniture with visible bed bug activity has to be disclosed before we arrive so it can be handled and disposed of appropriately.",
    ],
    faqs: [
      {
        q: "How much does it cost to remove a couch in Calgary?",
        a: "Jobs start at $50, and a single couch at ground level with clear access sits near the bottom of the range. A basement sectional that has to be taken apart takes longer and prices accordingly. You get the number before we load.",
      },
      {
        q: "Will you take furniture apart to get it out?",
        a: "Yes. Sofa legs unbolt, backs often separate from the base, bed frames and flat-pack come apart along the panels. We bring tools and it is a routine part of the job.",
      },
      {
        q: "Can you remove furniture from a third-floor walk-up?",
        a: "Yes. Tell us on the phone that there is no elevator so we can price the job properly and bring enough hands. Condo elevator bookings should be arranged by you in advance if your building requires one.",
      },
      {
        q: "Should I donate it instead?",
        a: "If it is solid, clean and structurally sound, yes — several Calgary charities will collect. Damaged, stained, odorous or damp-stored furniture will be refused, and flat-pack that has been moved a few times is usually beyond donating.",
      },
      {
        q: "Do you take mattresses too?",
        a: "Yes, though mattresses have their own disposal route and we cover that in detail on our mattress disposal page.",
      },
    ],
    related: [
      "/junk-removal/mattress-disposal",
      "/junk-removal/estate-cleanouts",
      "/junk-removal/appliance-removal",
    ],
  },

  {
    slug: "mattress-disposal",
    hub,
    name: "Mattress Disposal",
    h1: "Mattress Disposal Calgary",
    title: "Mattress Disposal Calgary | Pickup From $50",
    description:
      "Mattress and box spring removal in Calgary and Airdrie. Any size, picked up from inside the home. From $50 — call 403-861-2361.",
    summary:
      "Mattresses and box springs of any size, picked up from the bedroom rather than the curb, and routed for recycling.",
    image: "/images/gallery/mattress-furniture-bin.webp",
    imageAlt:
      "Mattress loaded into a Star Disposal bin during a Calgary mattress disposal pickup",
    serviceType: "Mattress Disposal",
    intro: [
      "Mattresses are one of the worst things to get rid of on your own. They do not fit in a car, they are unwieldy for one person, most charities will not accept them, and Calgary's residential collection will not take them at the curb.",
      "We pick up mattresses and box springs of any size — twin, double, queen, king, California king, crib mattresses and bunk sets. From the bedroom, not the curb. Pickups start at $50, and a mattress and box spring together are usually a single-item price rather than two.",
      "If you are getting a new bed delivered, book the pickup around the delivery. Most Calgary retailers will not haul the old set away, and the ones that do often charge more than we do.",
    ],
    sections: [
      {
        heading: "Why charities will not take your old mattress",
        body: [
          "Almost every Alberta charity and thrift operation refuses used mattresses outright, and it is not fussiness. Health regulations around used bedding are strict, the risk of bed bugs is real and expensive, and the organisations that once accepted them stopped because a single infested donation can contaminate a warehouse.",
          "That leaves resale, which is realistically only viable for a nearly-new mattress with a receipt, or disposal. For everything else, the honest answer is that it needs to be hauled and processed.",
        ],
      },
      {
        heading: "What actually happens to a mattress",
        body: [
          "A mattress is roughly 25 cubic feet of mostly recoverable material, which is why straight landfilling is wasteful. Broken down, a typical set yields steel from the innerspring and the box spring frame, softwood from the box spring, foam, and textile.",
          "The steel is genuinely valuable and goes to scrap. Where a recycling route is available for the foam and textile, that is where it goes. Where it is not — and that varies by what the facilities are accepting — the remainder goes to landfill and we pay the tipping fee.",
          "We are not going to overstate this. Not every mattress gets fully diverted. Pulling the steel out is worth doing regardless, and we do it.",
        ],
      },
      {
        heading: "Bed bugs: tell us before we arrive",
        body: [
          "If the mattress is being replaced because of bed bugs, say so when you book. There is no judgment in it — Calgary has plenty of it, particularly in multi-unit buildings — and it changes how the item has to be handled.",
          "An infested mattress should be sealed in a mattress bag before it leaves the room, precisely so the problem does not spread through the hallway, the elevator and the truck. It also cannot go into a recycling stream and has to be landfilled.",
          "Telling us up front costs you nothing and means the job is done properly. Not telling us risks spreading it through your own building.",
        ],
      },
    ],
    included: [
      "Pickup from inside the home — bedroom, basement, any floor",
      "Twin, double, queen, king and California king mattresses",
      "Box springs, bunkie boards and crib mattresses",
      "Bed frames, headboards and slats taken in the same trip",
      "Mattress and box spring together usually priced as one item",
      "Innerspring steel separated for scrap",
      "Sealed handling for bed-bug-related disposals when disclosed",
      "Stairs, walk-ups and tight stairwells included",
    ],
    process: [
      {
        step: "Call with the size and floor",
        detail:
          "403-861-2361. Tell us the mattress size, how many pieces, and which floor. You get a price on the call.",
      },
      {
        step: "Time it with the delivery",
        detail:
          "If a new bed is arriving, book us for the same day so you are never storing the old one in a hallway.",
      },
      {
        step: "Disclose bed bugs if relevant",
        detail:
          "It changes how we bag and route the item. No extra fuss, but we need to know before we arrive.",
      },
      {
        step: "We carry it out",
        detail:
          "Out of the bedroom, down the stairs, onto the truck. You do not need to drag anything to the curb.",
      },
      {
        step: "Steel to scrap",
        detail:
          "Innerspring and frame steel is separated at the yard rather than going straight to landfill.",
      },
    ],
    limits: [
      "Mattresses soaked through with water or contaminated with biohazard material cannot be recycled and must be landfilled.",
      "We do not clean, sanitise or treat mattresses — if the issue is bed bugs, disposal is the service, not treatment.",
    ],
    faqs: [
      {
        q: "How much is mattress removal in Calgary?",
        a: "Pickups start at $50, and a mattress with its box spring is usually a single-item price rather than two. Call 403-861-2361 and you get the number on the phone.",
      },
      {
        q: "Will the City of Calgary take a mattress at the curb?",
        a: "No. Residential black cart collection does not take mattresses. They have to go to a landfill drop-off yourself or be picked up by a hauler.",
      },
      {
        q: "Can I donate my old mattress instead?",
        a: "Realistically, no. Almost every Alberta charity refuses used mattresses because of health regulations and bed bug risk. A nearly-new mattress may sell privately; anything older needs disposal.",
      },
      {
        q: "Do you take the box spring and frame too?",
        a: "Yes, in the same trip — box springs, bunkie boards, slats, headboards and metal frames all go together.",
      },
      {
        q: "What if my mattress has bed bugs?",
        a: "Tell us when you book. It gets sealed in a bag before it leaves the room so it does not spread through your building, and it goes to landfill rather than into a recycling stream. There is no judgment in it and it is common.",
      },
      {
        q: "Do you pick up mattresses in Airdrie?",
        a: "Yes, along with Cochrane and Chestermere. No surcharge on a normal pickup.",
      },
    ],
    related: [
      "/junk-removal/furniture-removal",
      "/junk-removal/estate-cleanouts",
      "/bin-rentals/10-yard-bin-rental",
    ],
  },

  {
    slug: "garage-cleanouts",
    hub,
    name: "Garage Clean-Outs",
    h1: "Garage Clean-Out Calgary",
    title: "Garage Clean-Out Calgary | Full Clear-Out From $50",
    description:
      "Garage clean-outs in Calgary and Airdrie — we empty it, sort the metal, sweep the pad. Since 1996. Call 403-861-2361 for a quote.",
    summary:
      "We empty the garage, sort the scrap out of it, and sweep the pad — so you can park in it again.",
    image: "/images/gallery/scrap-tires-cleanup.webp",
    imageAlt:
      "Scrap tires and stored clutter removed from a Calgary garage clean-out",
    serviceType: "Garage Clean Out",
    intro: [
      "A garage fills up quietly over ten or fifteen years. Old paint, tires that came off a car you no longer own, half a deck's worth of lumber, a broken lawnmower, boxes that came from the last house and never got opened.",
      "We clear the whole thing. You walk through it with us first and point out anything staying, and everything else goes — including the shelving it is sitting on if you want the walls back.",
      "Garage clean-outs are one of our most common jobs across Calgary, and one where the difference between a truckload and a bin is worth thinking about. Most single-car garages fit in a truck; a double-car garage packed floor to ceiling is usually a bin.",
    ],
    sections: [
      {
        heading: "Truck or bin for a garage",
        body: [
          "If the garage is going to be cleared in one push and you want it done today, a truck and two people is the answer. We arrive, you point, it is empty in a few hours, and you have your Saturday back.",
          "If you want to sort as you go — keep this, sell that, decide about the rest — a bin dropped on the driveway is better. You work through it over a week at your own pace and call when it is full. A 10 or 15 yard bin covers most residential garages.",
          "The one case where a bin is clearly right is when the garage also contains construction leftovers: old lumber, drywall offcuts, a stack of shingles from a re-roof. That material is heavy and awkward, and you do not want to be holding it while someone else loads a truck.",
        ],
      },
      {
        heading: "What comes out of a typical Calgary garage",
        body: [
          "Tires are the single most common item and they have their own rules. Alberta runs a tire recycling program, so tires are recyclable, but they cannot go into a general landfill load and they are handled separately. Tell us how many you have.",
          "After that it is broadly predictable: old bikes, a barbecue, patio furniture, scrap lumber, sheets of plywood, garden tools, a broken snowblower or lawnmower, empty planters, boxes of paperwork, sports equipment, and shelving. All of it goes.",
          "Metal is worth separating and we do it as a matter of course. Old bikes, a barbecue frame, the lawnmower deck, steel shelving and a water heater all go to scrap rather than landfill, which reduces the tipping weight and therefore the cost of the job.",
        ],
      },
      {
        heading: "The things we cannot take out of a garage",
        body: [
          "Garages are where household hazardous waste ends up, and this is the part to sort before we arrive. Paint, stain, solvents, thinner, motor oil, antifreeze, gasoline, pesticides, pool chemicals and propane tanks all fall outside what a disposal company can legally haul.",
          "The good news is that Calgary has free household hazardous waste drop-offs for residents at its landfill sites, and propane tanks are taken by most refill exchanges. It is an hour of your time and it costs nothing.",
          "Set that material aside in one corner and tell us it is staying. Everything else, we take.",
        ],
      },
      {
        heading: "Getting the pad clean",
        body: [
          "An empty garage with fifteen years of grit, sawdust and mouse droppings on the floor is not really a finished job, so we sweep the pad out before we leave.",
          "If you are clearing the garage because it is being demolished or rebuilt, say so — that changes the sequence and we would rather bring the right setup once. Garage demolition is something we do, and combining the clear-out with the teardown saves a visit.",
        ],
      },
    ],
    included: [
      "Full clear-out — you point, we carry",
      "Shelving, workbenches and storage racking removed",
      "Tires routed through Alberta's tire recycling program",
      "Scrap metal, bikes, barbecues and mowers separated for scrap",
      "Old lumber, plywood and construction leftovers",
      "Boxes, paperwork, sports gear and garden tools",
      "Patio furniture and seasonal items",
      "Pad swept out at the end of the job",
      "Truck or bin, whichever actually suits the job",
    ],
    process: [
      {
        step: "Walk through it",
        detail:
          "We look at the garage with you and you tell us what stays. Photos over text to 403-861-2361 work for an initial number.",
      },
      {
        step: "Pull the hazardous material aside",
        detail:
          "Paint, oil, solvents, gas cans and propane go in one corner. Those are yours to drop at a City site — it is free.",
      },
      {
        step: "Price before loading",
        detail:
          "You get the number for the job as it actually is, before anything moves.",
      },
      {
        step: "Clear it out",
        detail:
          "Everything goes. Metal is set aside for scrap, tires are kept separate, the rest goes to disposal.",
      },
      {
        step: "Sweep and hand back",
        detail:
          "The pad gets swept. You get a garage you can park a car in.",
      },
    ],
    limits: [
      "No paint, stain, solvents, motor oil, antifreeze, gasoline, pesticides or pool chemicals — these go free to a City of Calgary household hazardous waste drop-off.",
      "No propane tanks; most refill depots take them back.",
      "Tires are taken but must be declared up front as they are handled through a separate recycling stream.",
    ],
    faqs: [
      {
        q: "How much does a garage clean-out cost in Calgary?",
        a: "It depends on volume and weight. A partly full single-car garage is often a truckload; a double-car garage packed floor to ceiling is usually a bin. Jobs start at $50 and you get a firm number before we load. Call 403-861-2361.",
      },
      {
        q: "Do I need to sort anything before you come?",
        a: "Only the hazardous material — paint, solvents, oil, gas cans and propane tanks. Set those aside in one corner. Everything else you can leave exactly where it is.",
      },
      {
        q: "Can you take old tires?",
        a: "Yes, but tell us how many when you book. Alberta handles tires through a separate recycling program, so they cannot go into a general landfill load and they are dealt with on their own.",
      },
      {
        q: "How long does a garage clean-out take?",
        a: "A single-car garage is usually a few hours. A packed double takes most of a day, or you take a bin and work through it over a week — which is often the better option if you want to sort as you go.",
      },
      {
        q: "Will you take the shelving out too?",
        a: "Yes. Shelving, workbenches, racking and wall storage all come out if you want the walls back. Steel shelving goes to scrap.",
      },
      {
        q: "Can you demolish the garage as well?",
        a: "Yes — garage demolition is one of our site services, and combining the clear-out with the teardown saves a separate visit. Mention it when you call so we bring the right setup.",
      },
    ],
    related: [
      "/junk-removal/scrap-metal-removal",
      "/site-services/demolition",
      "/bin-rentals/15-yard-bin-rental",
    ],
  },

  {
    slug: "estate-cleanouts",
    hub,
    name: "Estate Clean-Outs",
    h1: "Estate Clean-Out Calgary",
    title: "Estate Clean-Out Calgary | Full House Clearance",
    description:
      "Compassionate estate and full house clean-outs in Calgary and Airdrie. Downsizing, probate and possession deadlines. Call 403-861-2361.",
    summary:
      "Full house clearances for estates, downsizing and possession deadlines — handled patiently and without pressure.",
    image: "/images/gallery/bin-trailer-alley.webp",
    imageAlt:
      "Star Disposal bin trailer positioned in a Calgary alley during a full house estate clean-out",
    serviceType: "Estate Clean Out",
    intro: [
      "Clearing a house after someone has died, or helping a parent downsize out of a home they have been in for forty years, is not a normal junk removal job. There is usually a deadline attached — probate, a possession date, a sale closing — and there is usually someone standing in the middle of it who is exhausted.",
      "We have done a lot of these in Calgary since 1996 and the approach is the same every time: no pressure, no rushing you through decisions, and nothing leaves the house until you have said it can.",
      "The work itself is a full house clearance. Furniture, appliances, mattresses, clothing, kitchenware, paperwork, garage contents, basement storage, the shed out back. When we are finished, the house is empty and swept.",
    ],
    sections: [
      {
        heading: "How we handle a house that has to be sorted first",
        body: [
          "Most estate clean-outs are not one visit. There is a sorting phase where the family goes through the house deciding what is kept, what goes to other family members, what might be worth selling and what is going.",
          "The most practical setup for that is a bin on the driveway for the duration. You work through the house at whatever pace you can manage, and the bin absorbs everything as you go rather than piling up in the front room. When it is full we swap it or take it away.",
          "For the final clear-out, we bring the truck and crew. By that point the decisions are made and it becomes a straightforward, fast job.",
        ],
      },
      {
        heading: "Things worth checking before anything leaves",
        body: [
          "This is the practical advice we give every family, because things get thrown out that should not be. Check pockets, drawers, tins, envelopes and the backs of picture frames. Cash, jewellery, documents and small valuables turn up in all of them.",
          "Look specifically for: identity documents and passports, land titles and property paperwork, insurance policies, bank and investment statements, war medals and service records, photographs and negatives, and anything with a name written on the back.",
          "Furniture is worth a second look too. Solid wood furniture from the 1950s and 60s, older tools, and quality kitchenware often have real resale value in Calgary. We will point out anything that looks worth keeping rather than just loading it.",
        ],
      },
      {
        heading: "Deadlines, realtors and possession dates",
        body: [
          "A lot of estate work runs against a hard date. The house sold, possession is on the 30th, and it needs to be empty and broom-clean before then.",
          "Tell us the date on the first call. It changes how we schedule and it is much better handled with two weeks of notice than three days. If the timeline is genuinely tight, we will tell you honestly what is achievable rather than agreeing and then failing.",
          "We can also work around a realtor's staging schedule, and we coordinate with estate sale companies where one is involved — they take what sells, we clear what is left.",
        ],
      },
      {
        heading: "Discretion on the day",
        body: [
          "Estate work is often done with neighbours watching and family in the house. We keep it quiet and unmarked in the way that matters — no shouting across the yard, no leaving personal belongings visible on the lawn, no comments about the contents of the house.",
          "If it is easier for you not to be there at all, that works. Plenty of families walk us through it once, hand over a key, and come back to an empty house.",
        ],
      },
    ],
    included: [
      "Complete house clearance — every room, basement, garage and shed",
      "Furniture, appliances and mattresses in one job",
      "Clothing, kitchenware, books, paperwork and personal effects",
      "Basement and crawlspace storage",
      "Garage, shed and yard contents",
      "Bin on site for the sorting phase, truck for the final clear-out",
      "Scrap metal separated rather than landfilled",
      "Coordination with realtors, estate sale companies and possession dates",
      "House swept out at the end",
    ],
    process: [
      {
        step: "Talk it through first",
        detail:
          "Call 403-861-2361. Tell us the size of the house, the deadline and where you are in the process. There is no pressure to book on that call.",
      },
      {
        step: "Walk the house",
        detail:
          "We look at every room including the basement, garage and shed, so the quote reflects the actual job rather than a guess.",
      },
      {
        step: "Sorting phase",
        detail:
          "A bin sits on the driveway while the family works through the house. Swapped when full. No rush.",
      },
      {
        step: "Final clear-out",
        detail:
          "Truck and crew for the last push. Everything remaining goes in one visit.",
      },
      {
        step: "Swept and handed over",
        detail:
          "The house is left empty and broom-clean, ready for possession or listing.",
      },
    ],
    limits: [
      "We are not an estate sale or appraisal company — where items may have real value we will say so, but valuation is not something we do.",
      "Household hazardous waste in the garage or under the sink has to be set aside for a City of Calgary drop-off.",
      "Firearms must be handled through the appropriate legal channels and cannot go in a disposal load.",
    ],
    faqs: [
      {
        q: "How much does an estate clean-out cost in Calgary?",
        a: "It is priced by volume and weight, and a full house is usually multiple loads or a bin over several days. We walk the property first so the number reflects the real job. Call 403-861-2361 to arrange that.",
      },
      {
        q: "How long does clearing a house take?",
        a: "The physical clear-out of an average Calgary bungalow is one to two days. The sorting phase before it is what takes time, and that is entirely down to the family. A bin on the driveway during that phase is usually the least stressful option.",
      },
      {
        q: "Can you work to a possession date?",
        a: "Yes, and tell us that date on the first call. Two weeks of notice makes it straightforward; three days makes it tight. If a deadline is not achievable we will say so rather than agree and let you down.",
      },
      {
        q: "What if we find something valuable partway through?",
        a: "It stops and stays with you. We are not an appraisal service, but if we come across something that looks worth keeping — old tools, solid wood furniture, documents, medals — we will point it out rather than load it.",
      },
      {
        q: "Do we need to be there?",
        a: "No. Many families walk us through once, hand over a key and come back to an empty house. If being there is difficult, that is completely normal and we work that way often.",
      },
      {
        q: "Can you coordinate with an estate sale company?",
        a: "Yes. That is a common sequence — the estate sale runs first and takes what sells, then we clear everything that is left and sweep the house.",
      },
    ],
    related: [
      "/junk-removal/furniture-removal",
      "/junk-removal/garage-cleanouts",
      "/bin-rentals/20-yard-bin-rental",
    ],
  },

  {
    slug: "dump-runs",
    hub,
    name: "Dump Runs",
    h1: "Dump Runs Calgary",
    title: "Dump Run Calgary | We Haul It to the Landfill",
    description:
      "Dump runs across Calgary and Airdrie — we load it, we pay the tipping fee, you skip the landfill queue. Call 403-861-2361.",
    summary:
      "You have a pile and no truck. We load it, haul it, pay the tipping fee, and you never see the landfill.",
    image: "/images/gallery/yard-cleanup-debris.webp",
    imageAlt:
      "Debris pile loaded for a dump run to the Calgary landfill by Star Disposal Services",
    serviceType: "Waste Hauling",
    intro: [
      "A dump run is the simplest thing we do. You have a pile of material that needs to go to the landfill, you do not own a truck, and you do not want to spend a Saturday queueing at East Calgary with a borrowed trailer.",
      "We come, we load it, we haul it, and we pay the tipping fee at the scale. You never go to the landfill and you never handle the weigh-in. Jobs start at $50.",
      "This is the service people book when the material has already been gathered — a deck that came apart last weekend, a yard cleanup pile, boxes stacked in the garage after a move, or leftovers from a project that is otherwise finished.",
    ],
    sections: [
      {
        heading: "What a Calgary dump run actually involves",
        body: [
          "If you do this yourself, the day looks like this: borrow or rent a truck, load it, drive to East Calgary or Shepard, queue at the scale, get weighed in, find the right disposal area, unload it by hand, drive back to the scale, get weighed out, pay by weight, return the truck.",
          "It is usually four to five hours and the truck rental frequently costs more than having someone else do the whole thing. The tipping fee is charged by weight either way, so that part does not change.",
          "What you are actually buying from us is the loading, the vehicle, the queue and the unloading. That is where the time goes.",
        ],
      },
      {
        heading: "Weight is what drives the price",
        body: [
          "The single most useful thing to understand about disposal costs is that landfills charge by weight, not by volume. A truck stacked high with bagged household junk can weigh less than a quarter-load of concrete.",
          "Heavy material — concrete, brick, dirt, sod, tile, plaster, shingles and wet lumber — costs more to dispose of than its size suggests. Light and bulky material — furniture, boxes, plastic, insulation, clean cardboard — costs less.",
          "This matters when you describe the job on the phone. Telling us it is half a garage of boxes gets you a very different and much more accurate quote than telling us it is half a garage. Say what the material is and the number we give you will hold.",
        ],
      },
      {
        heading: "Loaded or unloaded, your choice",
        body: [
          "Most dump runs we do include the loading, because that is the labour people want to avoid. But if the material is already in a pile in the driveway and you would rather load it yourself, that is a cheaper job and we are happy to do it that way.",
          "Where self-loading is genuinely worth it: the material is light, it is already at ground level, and you have a couple of people. Where it is not: anything heavy, anything down stairs, and anything that has to come out of a basement or a back yard.",
          "Tell us which way you want to run it and we will price accordingly.",
        ],
      },
    ],
    included: [
      "Loading, hauling and landfill tipping fees",
      "Household junk, boxes and general clear-out material",
      "Yard waste, branches, sod and soil",
      "Renovation debris — lumber, drywall, flooring and fixtures",
      "Furniture, appliances and mattresses",
      "Scrap metal separated at the yard",
      "Self-load option if the material is already piled and ready",
      "Same-day pickups where the schedule allows",
    ],
    process: [
      {
        step: "Describe the material",
        detail:
          "Call 403-861-2361 and say what it actually is — boxes, lumber, concrete, yard waste. Material matters more than volume for the price.",
      },
      {
        step: "Pick loaded or self-load",
        detail:
          "We do the lifting, or you pile it and we just haul. Self-loading is the cheaper option when the material is light and at ground level.",
      },
      {
        step: "Firm price before we start",
        detail:
          "Quoted before anything goes on the truck, including the tipping fee.",
      },
      {
        step: "We haul and weigh in",
        detail:
          "Material goes to the appropriate facility — metal to scrap, clean yard waste to compost, the rest to the landfill.",
      },
      {
        step: "Done in one visit",
        detail:
          "You never go to the landfill, never queue at the scale, and never handle the weigh-in.",
      },
    ],
    limits: [
      "No hazardous waste — paint, solvents, oil, chemicals, propane or anything with a hazard symbol.",
      "Extremely heavy loads such as full loads of concrete or soil may need to be split across trips for legal axle weight.",
      "We do not accept asbestos-containing material; that requires a licensed abatement contractor.",
    ],
    faqs: [
      {
        q: "How much is a dump run in Calgary?",
        a: "Jobs start at $50 and the price is driven by weight and volume. Tell us what the material actually is when you call 403-861-2361 — concrete and boxes are very different loads — and the number you get will hold.",
      },
      {
        q: "Does the price include the landfill fee?",
        a: "Yes. The quote covers loading, hauling and the tipping fee at the scale. You do not pay anything separately at the landfill.",
      },
      {
        q: "Can I load it myself and just have you haul it?",
        a: "Yes, and it is cheaper that way. It works well when the material is light and already piled at ground level. For anything heavy or coming out of a basement, having us load it is usually worth the difference.",
      },
      {
        q: "What can you not take on a dump run?",
        a: "No hazardous waste — paint, solvents, motor oil, chemicals, propane tanks — and no asbestos-containing material. Household hazardous waste goes free to a City of Calgary drop-off.",
      },
      {
        q: "Can you come the same day?",
        a: "Often, especially for smaller loads booked in the morning. We answer the phone 8 AM to 8 PM seven days a week.",
      },
      {
        q: "Is a dump run cheaper than renting a bin?",
        a: "For a one-time pile that already exists, usually yes. For work generating debris over several days, a bin is normally cheaper because you are not paying for repeat visits.",
      },
    ],
    related: [
      "/bin-rentals/10-yard-bin-rental",
      "/junk-removal/yard-waste-removal",
      "/site-services/construction-waste-removal",
    ],
  },

  {
    slug: "yard-waste-removal",
    hub,
    name: "Yard Waste Removal",
    h1: "Yard Waste Removal Calgary",
    title: "Yard Waste Removal Calgary | Branches, Sod, Debris",
    description:
      "Yard waste, branch, sod and landscaping debris removal in Calgary and Airdrie. More than the green cart holds. Call 403-861-2361.",
    summary:
      "Branches, sod, soil, leaves and landscaping debris — everything that will never fit in a green cart.",
    image: "/images/gallery/yard-cleanup-debris.webp",
    imageAlt:
      "Yard waste and landscaping debris pile cleared from a Calgary property",
    serviceType: "Yard Waste Removal",
    intro: [
      "The green cart handles a weekly pruning. It does not handle a tree coming down, a hedge being pulled out, or forty square metres of old sod stripped off a lawn before new turf goes in.",
      "We take branches, brush, tree trunks and stumps, old sod, soil, leaves, garden waste, hedge trimmings, old fencing, deck boards, landscaping rock and the general debris that a yard project produces.",
      "Calgary yards produce this in bursts — a spring cleanup, a storm, a landscaping job — and the material is heavy, awkward and worth getting off the property before it kills the lawn underneath it.",
    ],
    sections: [
      {
        heading: "Why sod and soil are heavier than they look",
        body: [
          "This surprises people every time. A cubic yard of soil weighs roughly a tonne. Sod is soil plus grass plus water, and it is heavier still — a single roll of freshly cut sod is around 15 to 20 kilograms, and stripping a modest front lawn produces dozens of them.",
          "That is why a small-looking pile of sod costs more to dispose of than a mountain of branches. Landfill tipping is by weight, and dense wet material is the most expensive kind.",
          "It also means a bin full of soil hits its legal haul weight long before it is physically full. If your project is producing soil or sod in quantity, say so when you call — we will size it correctly rather than deliver a bin you cannot legally fill.",
        ],
      },
      {
        heading: "Clean yard waste goes to compost, not landfill",
        body: [
          "This is the one genuinely good news item in disposal. Clean organic yard waste — branches, leaves, grass, brush, untreated wood — goes to a composting facility rather than the landfill. It is cheaper to tip and it is a genuinely better outcome.",
          "The word doing the work there is clean. A load of branches with a broken plastic planter, a roll of landscape fabric and half a bag of concrete mix in it is no longer a compost load, and it gets landfilled at landfill prices.",
          "So it is worth keeping the piles separate if you can. Organic material in one pile, everything else in another. It takes you no extra effort and it lowers the cost of the job.",
        ],
      },
      {
        heading: "Spring cleanups and storm damage",
        body: [
          "Calgary yard waste work is seasonal and it clusters. Late April and May are the spring cleanup rush, when everyone deals with a winter's worth of accumulation at once. September and October bring the fall cleanup.",
          "Storm damage is the unpredictable one. A heavy wet snowfall in September, before the leaves have dropped, will take branches off half the mature trees in the older neighbourhoods — the 2014 storm that hit Calgary is still the reference point. After an event like that, everyone calls at once.",
          "If you are dealing with storm damage, call early. And if a limb is on a power line, that is Enmax's job before it is anybody else's — do not go near it.",
        ],
      },
      {
        heading: "Fences, decks and landscaping teardowns",
        body: [
          "A lot of yard waste jobs are not really organic material at all. Pulling out an old fence, taking down a rotten deck or ripping out landscaping produces treated lumber, posts set in concrete, wire, landscape fabric and rock.",
          "Treated lumber and painted wood cannot go into compost and has to be landfilled. Concrete footings are heavy. Landscaping rock is very heavy. All of that is normal work for us, but it prices differently from a load of branches, so it is worth mentioning on the call.",
          "If the fence or deck still has to come down, that is demolition work and we do that too — it saves you doing the teardown yourself and then paying for a separate haul.",
        ],
      },
    ],
    included: [
      "Branches, brush, hedge trimmings and tree limbs",
      "Tree trunks, stumps and cut rounds",
      "Old sod, soil and topsoil",
      "Leaves, grass clippings and garden waste",
      "Old fencing, posts and deck boards",
      "Landscaping rock, gravel and edging",
      "Clean organic material routed to compost rather than landfill",
      "Bin option for multi-day landscaping projects",
      "Post-storm branch and debris clearing",
    ],
    process: [
      {
        step: "Tell us what the material is",
        detail:
          "Call 403-861-2361. Branches, sod, fence panels and landscaping rock all price differently — describing the material gets you an accurate number.",
      },
      {
        step: "Keep organics separate if you can",
        detail:
          "Clean branches and leaves in one pile, treated lumber and rock in another. It genuinely lowers the cost.",
      },
      {
        step: "Truck or bin",
        detail:
          "A finished pile is a truck job. A landscaping project running over several days is a bin on the driveway.",
      },
      {
        step: "We load and haul",
        detail:
          "Including the heavy material. You do not need to bag or bundle anything first.",
      },
      {
        step: "Sorted at the yard",
        detail:
          "Clean organics to compost, metal to scrap, the remainder to landfill.",
      },
    ],
    limits: [
      "We are not arborists — we do not fell standing trees or do climbing work. We haul what is already down.",
      "Never approach a branch or limb touching a power line; that is a utility call.",
      "Treated, painted or stained lumber cannot be composted and is landfilled.",
    ],
    faqs: [
      {
        q: "Can you take more than my green cart holds?",
        a: "That is the whole point of the service. A tree coming down, a hedge being pulled out or a lawn being re-sodded produces far more than a green cart can take in a season. We haul it in one go.",
      },
      {
        q: "How much does yard waste removal cost in Calgary?",
        a: "It depends heavily on the material. Branches and leaves are light and go to compost, which is cheaper. Sod, soil and landscaping rock are dense and price higher. Call 403-861-2361 and describe the material.",
      },
      {
        q: "Do you remove tree stumps?",
        a: "We haul stumps that are already out of the ground, and we can move them with a bobcat where access allows. We are not arborists, so we do not fell standing trees or do climbing work.",
      },
      {
        q: "Do I need to bag or bundle it first?",
        a: "No. Leave it in a pile. Bundling helps nothing for a truck pickup and costs you an afternoon.",
      },
      {
        q: "Can you take old fence panels and deck boards?",
        a: "Yes. That is treated lumber, so it goes to landfill rather than compost, but it is routine work. If the fence or deck still needs to come down, we can do the teardown too.",
      },
      {
        q: "Do you clear storm damage?",
        a: "Yes, and after a major Calgary storm we get busy quickly, so call early. If a limb is touching a power line, call the utility first and stay away from it.",
      },
    ],
    related: [
      "/junk-removal/dump-runs",
      "/site-services/bobcat-services",
      "/site-services/demolition",
    ],
  },

  {
    slug: "scrap-metal-removal",
    hub,
    name: "Scrap Metal Removal",
    h1: "Scrap Metal Removal Calgary",
    title: "Scrap Metal Removal Calgary | Free On Volume",
    description:
      "Scrap metal pickup in Calgary and Airdrie — appliances, steel, tires, machinery. Often cheaper than general junk. Call 403-861-2361.",
    summary:
      "Steel, appliances, machinery and metal scrap picked up and taken to the scrap yard rather than the landfill.",
    image: "/images/gallery/scrap-tires-cleanup.webp",
    imageAlt:
      "Scrap metal and tire pile collected from a Calgary property clean-up",
    serviceType: "Scrap Metal Removal",
    intro: [
      "Metal is the one category of junk that is genuinely worth something, and it is the reason a scrap-heavy job often costs less than a general junk load of the same size.",
      "We take steel, appliances, machinery, old bikes, barbecues, water heaters, furnaces, ductwork, steel shelving, car parts, rebar, pipe, radiators, aluminium and copper. It goes to a scrap yard rather than into a hole at the landfill.",
      "For larger volumes of clean metal, the scrap value can offset most or all of the cost of the pickup. Call 403-861-2361, describe what you have, and we will tell you honestly where your job lands.",
    ],
    sections: [
      {
        heading: "Why scrap jobs price differently",
        body: [
          "General junk costs money to dispose of, because the landfill charges a tipping fee by weight. Scrap metal is the opposite — a scrap yard pays for it by weight.",
          "That flips the economics of a job. A pickup that is mostly steel means our disposal cost is negative rather than positive, and we price accordingly. A pile of old steel shelving, a dead furnace and three bicycles is a much cheaper call than the same volume of broken particleboard furniture.",
          "It is worth telling us on the phone if a job is metal-heavy. It is the one thing that reliably makes a quote go down.",
        ],
      },
      {
        heading: "Ferrous, non-ferrous, and why it matters",
        body: [
          "Ferrous metal — steel and iron, anything a magnet sticks to — is by far the most common. Appliances, shelving, rebar, structural steel, car parts and old machinery are almost all ferrous. It is low value per kilogram but there is usually a lot of it.",
          "Non-ferrous metal — copper, brass, aluminium, stainless steel and lead — is worth substantially more per kilogram. Copper pipe and wire from a plumbing or electrical renovation, brass fittings, aluminium siding, window frames and radiators all fall here.",
          "You do not need to sort it yourself. But if a job includes a meaningful amount of copper or brass, mention it, because it changes the value of the load.",
        ],
      },
      {
        heading: "Appliances, furnaces and hot water tanks",
        body: [
          "The heaviest scrap in a typical Calgary home is mechanical. A furnace is largely sheet steel. A hot water tank is a steel cylinder. Ductwork is galvanised steel and there is often a lot of it in an older basement.",
          "This material comes up constantly on renovations, and it is the reason a mechanical replacement job is cheap for us to clear. The old furnace, the old tank and the stripped-out ductwork are all scrap, not garbage.",
          "Fridges, freezers and air conditioners are a special case. They are scrap steel, but the refrigerant has to be recovered by a certified technician before the shell can be processed. That is handled through the appropriate facility, not at the curb.",
        ],
      },
      {
        heading: "Tires and what happens to them",
        body: [
          "Tires are not metal, but they come up in almost every scrap and garage job so they are worth covering here. Alberta runs a province-wide tire recycling program, funded by a levy paid when tires are bought, and used tires are processed rather than landfilled.",
          "What that means practically is that tires cannot go into a general disposal load. They are handled separately, so tell us how many you have when you book. Rims on or off both work, though rims are separated as scrap steel.",
        ],
      },
    ],
    included: [
      "Steel, iron and structural metal",
      "Appliances, furnaces, hot water tanks and ductwork",
      "Copper pipe and wire, brass fittings and radiators",
      "Aluminium siding, window frames and eavestrough",
      "Old bikes, barbecues, lawnmowers and snowblowers",
      "Steel shelving, racking, filing cabinets and lockers",
      "Machinery, engine parts and vehicle components",
      "Tires, with or without rims, via Alberta's recycling program",
      "No sorting required on your end",
    ],
    process: [
      {
        step: "Describe the metal",
        detail:
          "Call 403-861-2361. Say roughly what it is and how much — a photo helps. Metal-heavy jobs price better and we will tell you so.",
      },
      {
        step: "Leave it where it is",
        detail:
          "No sorting needed. If there is a lot of copper or brass in there, just mention it.",
      },
      {
        step: "We price the load",
        detail:
          "Scrap value is factored in. On larger clean-metal volumes it can offset most of the cost of the pickup.",
      },
      {
        step: "Loaded and hauled",
        detail:
          "Including heavy items like furnaces, tanks and machinery. Stairs and basements included.",
      },
      {
        step: "To the scrap yard",
        detail:
          "It goes to be processed and reused rather than landfilled. Tires go through the provincial program.",
      },
    ],
    limits: [
      "Fridges, freezers and air conditioners need refrigerant recovered by a certified technician — handled through the appropriate facility, not on site.",
      "Fuel tanks, propane cylinders and pressurised vessels cannot be taken.",
      "We do not buy vehicles or issue scrap payments to customers; scrap value is reflected in the job price instead.",
    ],
    faqs: [
      {
        q: "Is scrap metal removal free?",
        a: "Not automatically, but it is cheaper than general junk removal because the metal has value. On larger volumes of clean metal, the scrap value can offset most or all of the pickup cost. Call 403-861-2361 and describe what you have.",
      },
      {
        q: "What metal do you take?",
        a: "Steel, iron, copper, brass, aluminium and stainless. Practically: appliances, furnaces, hot water tanks, ductwork, shelving, bikes, barbecues, machinery, rebar, pipe and car parts.",
      },
      {
        q: "Do I have to sort it?",
        a: "No. We sort it at the yard. If the load includes a meaningful amount of copper or brass, mention it on the call, because it changes the value.",
      },
      {
        q: "Will you take a furnace or hot water tank?",
        a: "Yes, and both are good scrap. They come up constantly on renovations. They need to be disconnected from gas, power and water before we move them.",
      },
      {
        q: "Can you take tires?",
        a: "Yes, with or without rims. Tell us how many when you book — Alberta processes tires through a separate recycling program so they cannot go into a general load.",
      },
      {
        q: "Do you pay me for the scrap?",
        a: "We do not issue payments for scrap. The value is reflected in a lower job price instead, which for most people is simpler than a separate transaction.",
      },
    ],
    related: [
      "/junk-removal/appliance-removal",
      "/junk-removal/garage-cleanouts",
      "/site-services/construction-waste-removal",
    ],
  },
];
