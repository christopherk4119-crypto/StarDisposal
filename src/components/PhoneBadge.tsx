import { business } from "@/lib/business";

export default function PhoneBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${business.phoneMainTel}`}
      className={`glow-orange inline-block rounded-md bg-brand-orange px-4 py-2 text-center font-display text-white transition hover:brightness-110 ${className}`}
    >
      {business.phoneMainDisplay}
    </a>
  );
}
