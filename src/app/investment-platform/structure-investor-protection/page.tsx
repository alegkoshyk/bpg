"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  Landmark,
  Layers,
  Eye,
  Scale,
  FileCheck,
  Lock,
  CheckCircle2,
  Shield,
  Target,
  Anchor,
} from "lucide-react";

const coreComponents = [
  {
    title: "Swiss-issued AMC",
    desc: "Investors participate via an ISIN through their bank.",
    icon: Landmark,
  },
  {
    title: "Dedicated SPV per Vessel",
    desc: "Each asset is legally ring-fenced for maximum isolation.",
    icon: Layers,
  },
  {
    title: "Independent Auditor",
    desc: "Financial oversight and accountability at every level.",
    icon: Eye,
  },
  {
    title: "External Valuation Agent",
    desc: "Independent asset valuation ensuring fair pricing.",
    icon: Scale,
  },
  {
    title: "SPV Administrator",
    desc: "Corporate governance and structured reporting.",
    icon: FileCheck,
  },
  {
    title: "Custodian Bank (DVP)",
    desc: "Secure transaction execution and asset safekeeping.",
    icon: Lock,
  },
];

const riskPrinciples = [
  "Tangible asset backing with intrinsic value",
  "Active secondary vessel market enabling divestment",
  "Disciplined acquisition pricing",
  "Phased capital deployment to reduce timing risk",
];

export default function StructureProtection() {
  return (
    <>
      <PageHero
        title="Structure & Investor Protection"
        subtitle="Swiss Issuer + SPV Structure + Independent Oversight"
        breadcrumb="Investment Platform"
        image="/images/12.jpeg"
      />

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Institutional Framework
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <p className="mt-8 text-lg lg:text-xl text-muted leading-relaxed max-w-3xl">
              The investment framework combines institutional-grade structuring
              with operational flexibility &mdash; designed to protect capital
              while enabling active management.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Architecture
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <h2 className="mt-6 text-3xl font-bold text-foreground">
              Core Components
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreComponents.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="rounded-2xl border border-border/60 bg-white p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-5">
                    <AnimatedIcon
                      icon={item.icon}
                      className="text-primary"
                      size={24}
                      delay={i * 100 + 200}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation Principles */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Risk Management
              </p>
              <div className="mt-4 w-16 h-0.5 bg-accent" />
              <h2 className="mt-6 text-3xl font-bold text-foreground">
                Risk Mitigation Principles
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Every layer of the structure is designed to reduce risk and
                enhance transparency for investors.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4">
                {riskPrinciples.map((item, i) => (
                  <ScrollReveal key={item} delay={i * 100 + 300}>
                    <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
                        <AnimatedIcon
                          icon={CheckCircle2}
                          className="text-accent"
                          size={16}
                          delay={i * 100 + 500}
                        />
                      </div>
                      <span className="text-sm text-foreground font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border-2 border-primary/20 bg-white p-10 lg:p-14 flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                <AnimatedIcon
                  icon={Shield}
                  className="text-primary"
                  size={28}
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">
                  Regulatory Compliance
                </p>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  FINMA Regulatory Framework
                </h2>
                <p className="text-muted leading-relaxed">
                  The Swiss Financial Market Supervisory Authority (FINMA)
                  imposes enhanced due diligence and cost transparency standards
                  on structured products, reinforcing investor protection and
                  disclosure discipline across all aspects of the investment
                  platform.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl bg-primary p-10 lg:p-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <AnimatedIcon
                  icon={Anchor}
                  className="text-accent"
                  size={28}
                />
                <AnimatedIcon
                  icon={Shield}
                  className="text-accent"
                  size={28}
                  delay={200}
                />
                <AnimatedIcon
                  icon={Target}
                  className="text-accent"
                  size={28}
                  delay={400}
                />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Built for Institutional Trust
              </h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
              <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
                From Swiss regulatory compliance to independent oversight at
                every level, the structure is designed to meet the standards
                expected by institutional and qualified investors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
