"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  Anchor,
  BarChart3,
  TrendingUp,
  Banknote,
  PieChart,
  Shield,
  Layers,
  Eye,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Acquire at Attractive Valuations",
    desc: "We acquire vessels when asset pricing and forward market expectations provide compelling risk-adjusted entry points.",
    icon: Anchor,
  },
  {
    step: "02",
    title: "Optimize Operating Income",
    desc: "We secure charter contracts, maximize utilization, and maintain strict cost discipline to enhance operating margins.",
    icon: BarChart3,
  },
  {
    step: "03",
    title: "Exit Strategically",
    desc: "Assets are divested during favorable market phases, with proceeds either reinvested into fleet renewal or distributed.",
    icon: TrendingUp,
  },
];

const capitalPriorities = [
  { label: "Stabilization of cash flow", icon: Banknote },
  { label: "Operational optimization", icon: BarChart3 },
  { label: "Margin enhancement", icon: TrendingUp },
];

const riskBenefits = [
  { label: "Transparency", icon: Eye },
  { label: "Risk containment", icon: Shield },
  { label: "Capital protection discipline", icon: Lock },
];

export default function InvestmentStrategy() {
  return (
    <>
      <PageHero
        title="AMC Investment Strategy"
        subtitle="Essential infrastructure. Tangible assets. Active management."
        breadcrumb="Investment Platform"
        image="/images/9.jpg"
      />

      {/* Three-Step Model */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Core Approach
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <h2 className="mt-6 text-3xl font-bold text-foreground">
              The Three-Step Model
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className="rounded-2xl border border-border/60 bg-white p-8 lg:p-10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                  <span className="text-5xl font-bold text-accent/20">
                    {item.step}
                  </span>
                  <AnimatedIcon
                    icon={item.icon}
                    className="text-primary mt-4"
                    size={28}
                    delay={i * 150 + 200}
                  />
                  <h3 className="text-lg font-semibold text-foreground mt-5 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Discipline */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Deployment Strategy
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <h2 className="mt-6 text-3xl font-bold text-foreground">
              Capital Discipline
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-3xl">
              Undeployed capital is conservatively placed in low-risk
              instruments until deployment. The initial operating phase
              prioritizes:
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {capitalPriorities.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="rounded-2xl border border-border/60 bg-white p-6 flex items-center gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <AnimatedIcon
                    icon={item.icon}
                    className="text-primary flex-shrink-0"
                    size={22}
                    delay={i * 100 + 200}
                  />
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="mt-8 text-sm text-muted italic">
              The focus is structured growth &mdash; not short-term yield
              extraction.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Sources of Return */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Return Profile
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <h2 className="mt-6 text-3xl font-bold text-foreground">
              Two Sources of Return
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-border/60 bg-white p-8 lg:p-10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <AnimatedIcon
                      icon={Banknote}
                      className="text-accent"
                      size={20}
                      delay={300}
                    />
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                    Source 1
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Operating Income (Cash Yield)
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Vessels generate revenue under charter contracts. A portion of
                  this income accrues to the AMC and is reflected in certificate
                  value.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="rounded-2xl border border-border/60 bg-white p-8 lg:p-10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <AnimatedIcon
                      icon={PieChart}
                      className="text-accent"
                      size={20}
                      delay={450}
                    />
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                    Source 2
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Asset Appreciation (Capital Gains)
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Vessel values may increase during favorable freight cycles.
                  Strategic divestment can crystallize capital gains.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Structural Risk Segregation */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Risk Architecture
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <h2 className="mt-6 text-3xl font-bold text-foreground">
              Structural Risk Segregation
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-3xl">
              Each vessel is held within a dedicated SPV structure, isolating
              operational and legal exposure. This multi-layered framework
              enhances:
            </p>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-4">
            {riskBenefits.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white px-6 py-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <AnimatedIcon
                    icon={item.icon}
                    className="text-primary"
                    size={18}
                    delay={i * 100 + 200}
                  />
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Is Simple */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl bg-primary p-10 lg:p-16 text-center">
              <AnimatedIcon
                icon={CheckCircle2}
                className="mx-auto text-accent mb-6"
                size={36}
              />
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Why This Is Simple for Investors
              </h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
              <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
                You invest in a structured certificate. The management team
                handles asset selection, operations, and market timing &mdash;
                so you don&apos;t have to.
              </p>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/40">
                <span className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" /> One certificate
                </span>
                <span className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" /> Full fleet exposure
                </span>
                <span className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" /> Professional management
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
