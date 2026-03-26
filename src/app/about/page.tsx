import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Bulkers Pool Group",
  description: "Learn about Bulkers Pool Group AG - active in the maritime market since 2006.",
};

const sections = [
  {
    href: "/about/who-we-are",
    title: "Who We Are",
    description:
      "Nearly two decades of navigating shipping cycles with operational excellence and disciplined risk management.",
  },
  {
    href: "/about/what-we-do",
    title: "What We Do",
    description:
      "Global dry bulk transportation serving leading industrial and trading counterparties across major trade routes.",
  },
  {
    href: "/about/partners",
    title: "Our Partners",
    description:
      "Established global counterparties across shipping and commodity markets, built on reliability and performance.",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About Us
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Bulkers Pool Group has been active in the maritime market since 2006,
            consistently navigating volatility and structural market shifts.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {section.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-primary">
                  Learn more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
