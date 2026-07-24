"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/business";

const services = [
  "Bobcat",
  "Dump Run",
  "Site Clean-Up",
  "Demolition",
  "Junk Removal",
  "Bin Rental",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const service = data.get("service")?.toString().trim() ?? "";
    const details = data.get("details")?.toString().trim() ?? "";

    const subject = `Free Quote Request — ${service || "General"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Needed: ${service}`,
      "",
      "Project Details:",
      details,
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brand-navy">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-brand-navy/20 px-3 py-2 text-brand-navy focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-md border border-brand-navy/20 px-3 py-2 text-brand-navy focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-brand-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-brand-navy/20 px-3 py-2 text-brand-navy focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-yellow"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-brand-navy">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="mt-1 w-full rounded-md border border-brand-navy/20 bg-white px-3 py-2 text-brand-navy focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-yellow"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-semibold text-brand-navy">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="mt-1 w-full rounded-md border border-brand-navy/20 px-3 py-2 text-brand-navy focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-yellow"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-brand-yellow px-6 py-4 font-display text-base text-brand-red shadow-md transition hover:brightness-105"
      >
        REQUEST MY FREE QUOTE
      </button>

      {submitted && (
        <p className="rounded-md bg-brand-navy/5 px-4 py-3 text-sm font-semibold text-brand-navy">
          Thanks! Your email app should now be open with your quote request
          ready to send. Prefer to talk now? Call{" "}
          <a href={`tel:${business.phoneMainTel}`} className="text-brand-red underline">
            {business.phoneMainDisplay}
          </a>
          .
        </p>
      )}
    </form>
  );
}
