"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  Shield,
  TrendingUp,
  Building2,
  Anchor,
  Globe,
  BarChart3,
  CheckCircle2,
  Target,
  Compass,
  Eye,
} from "lucide-react";

const managementItems = [
  {
    icon: Anchor,
    text: "Deep operational maritime expertise",
  },
  {
    icon: Building2,
    text: "Structured investment governance",
  },
  {
    icon: Globe,
    text: "Established international counterparty network",
  },
];

const riskItems = [
  {
    icon: Eye,
    text: "Active market monitoring",
  },
  {
    icon: Shield,
    text: "Counterparty discipline",
  },
  {
    icon: BarChart3,
    text: "Use of cleared FFA hedging instruments",
  },
];

const strategicItems = [
  {
    label: "Greek Shipping Ecosystem",
    desc: "Fully integrated within the world's largest shipping hub, offering unmatched access to tonnage, commercial intelligence, and operational networks.",
  },
  {
    label: "Operational Depth",
    desc: "Hands-on management across chartering, operations, and risk — grounded in nearly two decades of practical market experience.",
  },
  {
    label: "Maritime Infrastructure",
    desc: "Established infrastructure across key maritime and trading centers ensuring operational continuity and institutional-grade oversight.",
  },
  {
    label: "Law 89/67",
    desc: "Greece's constitutional maritime framework provides a stable, internationally recognized regulatory environment for shipping operations.",
  },
];

const investorBenefits = [
  {
    icon: Globe,
    title: "Access to Counterparties",
    desc: "Access to counterparties and commercial opportunities across global dry bulk markets.",
  },
  {
    icon: TrendingUp,
    title: "Operate Through Cycles",
    desc: "Proven ability to operate through volatile market cycles with consistent performance.",
  },
  {
    icon: Target,
    title: "Cost Control",
    desc: "Rigorous cost control and operational discipline to maximize value creation.",
  },
];

export default function WhoWeAre() {
  return (
    <>
      <PageHero
        title="Who We Are"
        subtitle="Bulkers Pool Group has been active in the maritime market since 2006."
        breadcrumb="About Us"
        image="/images/19.jpg"
      />

      {/* Company Overview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Since 2006
              </p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Nearly Two Decades of Maritime Excellence
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent" />
              <p className="mt-6 text-muted leading-relaxed">
                Over nearly two decades — including the 2008 financial crisis
                and multiple shipping cycles — we have consistently navigated
                volatility and structural market shifts.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Our approach is grounded in practical, day-to-day operational
                experience rather than theoretical or purely academic frameworks.
                The effectiveness of this strategy is reflected in measurable
                results and value creation achieved under our management.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/5.jpg"
                  alt="Ship in icy waters with tugboat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Management
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementItems.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 150} direction="up">
                <div className="rounded-2xl border border-border/60 bg-white p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                  <AnimatedIcon
                    icon={item.icon}
                    size={32}
                    className="text-primary"
                    delay={i * 150 + 200}
                  />
                  <p className="mt-5 text-foreground font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/6.jpg"
                  alt="Crane pouring material into ship hold"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Discipline
              </p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Risk Management
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent" />
              <div className="mt-8 space-y-6">
                {riskItems.map((item, i) => (
                  <ScrollReveal key={item.text} delay={i * 100 + 200}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                        <AnimatedIcon
                          icon={item.icon}
                          size={24}
                          className="text-primary"
                          delay={i * 100 + 400}
                        />
                      </div>
                      <p className="text-muted leading-relaxed pt-2.5">
                        {item.text}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Advantage
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Strategic Positioning
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 120} direction="up">
                <div className="rounded-2xl border border-border/60 bg-white p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <AnimatedIcon
                      icon={Compass}
                      size={22}
                      className="text-accent"
                      delay={i * 120 + 200}
                    />
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Performance
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Track Record
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0} direction="left">
              <div className="rounded-2xl border border-border/60 bg-white p-10 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                  2009 &ndash; 2017
                </p>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-sm text-muted mb-1">Tons transported</p>
                    <AnimatedCounter
                      end={50}
                      suffix="M+"
                      className="text-4xl font-bold text-foreground"
                    />
                  </div>
                  <div className="w-full h-px bg-border/60" />
                  <div>
                    <p className="text-sm text-muted mb-1">
                      Commercial contracts
                    </p>
                    <AnimatedCounter
                      end={1000}
                      suffix="+"
                      className="text-4xl font-bold text-foreground"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="right">
              <div className="rounded-2xl border border-border/60 bg-white p-10 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                  2017 &ndash; 2025
                </p>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-sm text-muted mb-1">Tons transported</p>
                    <div className="text-4xl font-bold text-foreground">
                      <AnimatedCounter
                        end={15}
                        suffix=".5M+"
                        className="text-4xl font-bold text-foreground"
                      />
                    </div>
                  </div>
                  <div className="w-full h-px bg-border/60" />
                  <div>
                    <p className="text-sm text-muted mb-1">
                      Commercial contracts
                    </p>
                    <AnimatedCounter
                      end={730}
                      suffix="+"
                      className="text-4xl font-bold text-foreground"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What This Means for Investors */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Value Proposition
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white tracking-tight">
              What This Means for Investors
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {investorBenefits.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150} direction="up">
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 h-full">
                  <AnimatedIcon
                    icon={item.icon}
                    size={28}
                    color="white"
                    delay={i * 150 + 300}
                  />
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
