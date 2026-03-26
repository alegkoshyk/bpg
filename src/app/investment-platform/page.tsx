import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Platform — Bulkers Pool Group",
  description: "Swiss AMC investment platform for maritime assets.",
};

const sections = [
  {
    href: "/investment-platform/swiss-amc",
    num: "3.1",
    title: "Swiss AMC",
    description:
      "Actively Managed Certificates providing institutional-grade exposure to alternative maritime assets.",
  },
  {
    href: "/investment-platform/why-maritime-assets",
    num: "3.2",
    title: "Why Maritime Assets",
    description:
      "Own the infrastructure of global trade. Nearly 90% of global trade moves by sea.",
  },
  {
    href: "/investment-platform/investment-strategy",
    num: "3.3",
    title: "Investment Strategy",
    description:
      "Acquire at attractive valuations, optimize operating income, and exit strategically.",
  },
  {
    href: "/investment-platform/structure-investor-protection",
    num: "3.4",
    title: "Structure & Investor Protection",
    description:
      "Swiss Issuer + SPV Structure + Independent Oversight for institutional-grade protection.",
  },
  {
    href: "/investment-platform/documents",
    num: "3.5",
    title: "Investor Materials",
    description: "Access subscription documents and Private Placement Memorandum.",
  },
];

export default function InvestmentPlatform() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Investment Platform
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            A Swiss-structured investment platform providing access to maritime
            assets through Actively Managed Certificates.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group flex items-start gap-6 rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-sm font-bold">
                  {section.num}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
