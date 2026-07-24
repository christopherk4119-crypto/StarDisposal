# Star Disposal Services — Website

Single-page marketing site for **Star Disposal Services**, Calgary's junk
removal, hauling, and bin rental company since 1996. Built with Next.js
(App Router) and Tailwind CSS, ready to deploy on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project structure

- `src/app/page.tsx` — assembles all page sections, plus `LocalBusiness`
  JSON-LD structured data for SEO.
- `src/components/` — Header, Hero, Services, WhyChooseUs, Testimonials,
  ServiceArea, Contact (+ ContactForm), Footer.
- `src/components/Logo.tsx` — inline SVG recreation of the Star Disposal
  star logo (also used to generate `src/app/icon.svg`, the site favicon).
- `src/lib/business.ts` — single source of truth for business info (phone
  numbers, email, address, hours). Edit this file to update contact
  details site-wide.

## Contact form

The quote form (`src/components/ContactForm.tsx`) collects Name, Phone,
Email, Service Needed, and Project Details. On submit it opens a
pre-filled `mailto:` to `talibstar@outlook.com` with the request — this
works out of the box with **zero backend configuration**, which keeps the
site fully static and deploy-ready.

If you'd like a true backend submission (no dependency on the visitor's
email client), swap the `handleSubmit` function for a POST to a form
service such as [Formspree](https://formspree.io) or
[Resend](https://resend.com), or add a Next.js API route
(`src/app/api/quote/route.ts`) that sends the email server-side.

## Before going live

- Replace the placeholder domain `stardisposalservices.ca` in
  `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` with
  the real production domain once one is chosen.
- Consider adding real customer photos / job site photos to the hero and
  services sections (currently a bold navy/yellow/red graphic treatment
  is used instead of a stock photo).

## Deploy on Vercel

Push this repo to GitHub and [import it on Vercel](https://vercel.com/new) —
no environment variables or extra configuration are required. Vercel will
detect the Next.js app automatically.
