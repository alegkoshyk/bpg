"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  Shield,
  Lock,
  Landmark,
  Building2,
  Layers,
  Compass,
  Ship,
  Anchor,
  BarChart3,
  Target,
} from "lucide-react";

const features = [
  { label: "Swiss legal framework", icon: Shield },
  { label: "ISIN-identified security", icon: Lock },
  { label: "Bank-issued structure", icon: Landmark },
  { label: "Institutional custody", icon: Building2 },
  { label: "Greater structural flexibility", icon: Layers },
];

const capitalCards = [
  {
    title: "Acquisition",
    desc: "Proportional interest in the Swiss management company Navischart GmbH for vessel acquisition and fleet management.",
    icon: Anchor,
  },
  {
    title: "Fleet Development",
    desc: "Vessel acquisition strategy with proceeds allocated toward fleet development and management.",
    icon: Ship,
  },
  {
    title: "Operations",
    desc: "Technical management, commercial management, and operational services.",
    icon: BarChart3,
  },
];

export default function SwissAMC() {
  return (
    <>
      <PageHero
        title="Swiss AMC"
        subtitle="Actively Managed Certificates providing institutional-grade exposure to alternative assets with Swiss legal framework."
        breadcrumb="Investment Platform"
        image="/images/8.jpeg"
      />

      {/* What AMCs Offer */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              What AMCs Offer
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <p className="mt-8 text-lg lg:text-xl text-muted leading-relaxed max-w-3xl">
              Actively Managed Certificates (AMCs) provide investors with
              institutional-grade exposure to alternative assets and tailored
              strategies &mdash; combining the flexibility of private
              investments with the simplicity of a publicly issued security.
            </p>
          </ScrollReveal>

          {/* Feature pills */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div className="rounded-2xl border border-border/60 bg-white p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <AnimatedIcon
                    icon={item.icon}
                    className="mx-auto text-primary mb-3"
                    size={24}
                    delay={i * 80 + 200}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qualified Investors Note */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-start gap-6 max-w-3xl">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <AnimatedIcon icon={Compass} className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Reserved for Qualified Investors
                </h2>
                <p className="text-muted leading-relaxed">
                  AMCs are reserved for qualified investors under Swiss law,
                  typically high-net-worth individuals, family offices, and
                  investors acting through regulated banks or wealth managers.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Investment Philosophy Quote */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl bg-primary p-12 lg:p-16 text-center">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-8">
                Investment Philosophy
              </p>
              <p className="text-xl lg:text-2xl font-semibold text-white italic leading-relaxed max-w-3xl mx-auto">
                &ldquo;The ship creates value &mdash; the AMC structure makes
                that value accessible, tradable, and reportable.&rdquo;
              </p>
              <div className="mt-8 w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capital Structure */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Capital Structure
            </p>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <h2 className="mt-6 text-3xl font-bold text-foreground">
              Financing the Fleet
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-3xl">
              The investment is intended to finance the purchase of a fleet
              dedicated to the transportation of dry bulk cargo. Capital is
              raised through Actively Managed Certificates / Tracker
              Certificates.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {capitalCards.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="rounded-2xl border border-border/60 bg-white p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                  <AnimatedIcon
                    icon={item.icon}
                    className="text-primary mb-5"
                    size={28}
                    delay={i * 120 + 200}
                  />
                  <h3 className="text-base font-semibold text-foreground mb-3">
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

      {/* Investment Objective */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border-2 border-accent/30 bg-white p-10 lg:p-14 flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <AnimatedIcon icon={Target} className="text-accent" size={28} />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">
                  Investment Objective
                </p>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Building a Dry Bulk Fleet
                </h2>
                <p className="text-muted leading-relaxed">
                  Acquisition of 10&ndash;15 vessels for dry bulk cargo /
                  breakbulk transportation. Five to seven years of operation,
                  followed by the eventual sale of the vessels and fleet upgrade.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
