"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  Landmark,
  Ship,
  Target,
  Shield,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    href: "/investment-platform/swiss-amc",
    num: "01",
    title: "Swiss AMC",
    description:
      "Actively Managed Certificates providing institutional-grade exposure to alternative maritime assets through a Swiss-regulated framework.",
    icon: Landmark,
  },
  {
    href: "/investment-platform/why-maritime-assets",
    num: "02",
    title: "Why Maritime Assets",
    description:
      "Own the infrastructure of global trade. Nearly 90% of global trade moves by sea — real assets generating real cash flow.",
    icon: Ship,
  },
  {
    href: "/investment-platform/investment-strategy",
    num: "03",
    title: "Investment Strategy",
    description:
      "Acquire at attractive valuations, optimize operating income, and exit strategically for maximum risk-adjusted returns.",
    icon: Target,
  },
  {
    href: "/investment-platform/structure-investor-protection",
    num: "04",
    title: "Structure & Investor Protection",
    description:
      "Swiss Issuer + SPV Structure + Independent Oversight — institutional-grade investor protection at every level.",
    icon: Shield,
  },
  {
    href: "/investment-platform/documents",
    num: "05",
    title: "Investor Materials",
    description:
      "Access subscription documents and Private Placement Memorandum to begin the investment process.",
    icon: FileCheck,
  },
];

export default function InvestmentPlatform() {
  return (
    <>
      <PageHero
        title="Investment Platform"
        subtitle="A Swiss-structured investment platform providing access to maritime assets through Actively Managed Certificates."
        breadcrumb="Platform Overview"
        image="/images/4.jpg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Explore the Platform
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              Our investment platform is built on five core pillars — each
              designed to deliver transparency, discipline, and institutional
              quality to qualified investors.
            </p>
          </ScrollReveal>

          <div className="mt-16 space-y-6">
            {sections.map((section, i) => (
              <ScrollReveal key={section.href} delay={i * 100}>
                <Link
                  href={section.href}
                  className="group flex items-start gap-6 rounded-2xl border border-border/60 bg-white p-8 lg:p-10 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-3">
                    <span className="flex w-14 h-14 rounded-2xl bg-primary/5 text-primary items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {section.num}
                    </span>
                    <AnimatedIcon
                      icon={section.icon}
                      className="text-accent"
                      size={20}
                      delay={i * 100 + 300}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-1 flex-shrink-0" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Qualified Investors
            </p>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-white">
              Ready to explore further?
            </h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto leading-relaxed">
              Our investment materials are available to qualified investors.
              Contact our team to request the Private Placement Memorandum.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
