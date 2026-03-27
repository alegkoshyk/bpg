"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import Image from "next/image";
import {
  Globe,
  Ship,
  TrendingUp,
  Waves,
  BarChart3,
  Anchor,
  CheckCircle2,
} from "lucide-react";

const advantages = [
  {
    label: "Income-generating physical assets",
    icon: Ship,
  },
  {
    label: "Global market pricing (Baltic Exchange benchmarks)",
    icon: BarChart3,
  },
  {
    label: "Inflation sensitivity",
    icon: TrendingUp,
  },
  {
    label: "Limited replacement supply",
    icon: Anchor,
  },
];

export default function WhyMaritimeAssets() {
  return (
    <>
      <PageHero
        title="Why Maritime Assets"
        subtitle="Own the infrastructure of global trade."
        breadcrumb="Investment Platform"
        image="/images/5.jpg"
      />

      {/* 90% Stat — immersive split */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          {/* Left: Photo */}
          <div className="relative h-64 lg:h-auto">
            <Image
              src="/images/17.jpg"
              alt="Global shipping routes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/40" />
          </div>
          {/* Right: Content */}
          <div className="bg-primary flex items-center">
            <div className="px-10 lg:px-16 py-16 lg:py-24">
              <ScrollReveal>
                <AnimatedIcon
                  icon={Globe}
                  className="text-accent mb-6"
                  size={32}
                />
                <div className="flex items-baseline gap-3">
                  <span className="text-[80px] lg:text-[120px] font-black text-white leading-none tracking-tighter">
                    90
                  </span>
                  <span className="text-[48px] lg:text-[72px] font-black text-accent leading-none">
                    %
                  </span>
                </div>
                <div className="mt-3 w-16 h-0.5 bg-accent" />
                <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-md">
                  of global trade moves by sea. Energy, food, steel,
                  infrastructure &mdash; none of it moves without ships.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Iron Ore", "Coal", "Grain", "Steel", "Fertilizers"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Real Assets, Real Cash Flow */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <ScrollReveal>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                The Maritime Advantage
              </p>
              <div className="mt-4 w-16 h-0.5 bg-accent" />
              <h2 className="mt-6 text-3xl font-bold text-foreground">
                Real Assets. Real Cash Flow.
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Shipping is a hard-asset business. Unlike financial assets,
                ships participate directly in the real economy &mdash; carrying
                the raw materials and goods the world depends on.
              </p>

              <div className="mt-10 space-y-4">
                {advantages.map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 100}>
                    <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-white p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      <AnimatedIcon
                        icon={item.icon}
                        className="text-primary flex-shrink-0"
                        size={22}
                        delay={i * 100 + 200}
                      />
                      <span className="text-sm font-medium text-foreground">
                        {item.label}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Market Dynamics
              </p>
              <div className="mt-4 w-16 h-0.5 bg-accent" />
              <h2 className="mt-6 text-3xl font-bold text-foreground">
                Cycles Create Opportunity
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Shipping is cyclical &mdash; and that is the opportunity. Fleet
                growth is constrained by capital intensity, shipyard capacity,
                and regulation.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                When supply tightens and demand shifts, earnings can reprice
                rapidly. Disciplined investors who understand the cycle can
                acquire assets at attractive valuations and benefit from both
                operating income and asset appreciation.
              </p>

              <div className="mt-10 rounded-2xl bg-primary p-8 lg:p-10">
                <AnimatedIcon
                  icon={Waves}
                  className="text-accent mb-5"
                  size={28}
                  delay={400}
                />
                <p className="text-lg font-semibold text-white mb-2">
                  Active management unlocks value.
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  By timing entry and exit points within the shipping cycle,
                  active management can generate returns beyond passive
                  exposure to vessel ownership.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-border/60 bg-white p-10 lg:p-14 flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <AnimatedIcon
                  icon={CheckCircle2}
                  className="text-accent"
                  size={28}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Infrastructure That Cannot Be Replaced Overnight
                </h3>
                <p className="text-muted leading-relaxed max-w-2xl">
                  New vessel construction takes 2&ndash;3 years and requires
                  significant capital. Aging fleets and tightening environmental
                  regulations further constrain supply, creating structural
                  tailwinds for well-positioned maritime asset portfolios.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
