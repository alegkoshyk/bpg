"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  Ship,
  Anchor,
  Globe,
  MapPin,
  Target,
  HandshakeIcon,
  Eye,
  Award,
  CheckCircle2,
  Navigation,
} from "lucide-react";

const majorBulks = ["Iron Ore", "Coal", "Grain"];

const minorBulks = [
  "Bauxite",
  "Alumina",
  "Phosphate Rock",
  "Cement",
  "Fertilizers",
  "Forest Products",
  "Petcoke",
  "Salt",
  "Scrap",
  "Steel",
  "Sugar",
];

const fleetSegments = [
  {
    type: "Handysize",
    dwt: "25-40k DWT",
    icon: Ship,
    desc: "Versatile vessels for regional and niche trade routes with port flexibility.",
  },
  {
    type: "Supramax / Ultramax",
    dwt: "40-66k DWT",
    icon: Anchor,
    desc: "Self-geared workhorses handling diverse cargoes across global trade lanes.",
  },
  {
    type: "Panamax",
    dwt: "67-100k DWT",
    icon: Navigation,
    desc: "High-capacity tonnage for major bulk routes and long-haul voyages.",
  },
];

const offices = [
  {
    city: "Piraeus",
    country: "Greece",
    role: "Headquarters",
  },
  {
    city: "Dubai",
    country: "UAE",
    role: "Middle East & Africa",
  },
  {
    city: "New Delhi",
    country: "India",
    role: "Indian Subcontinent",
  },
  {
    city: "Odesa",
    country: "Ukraine",
    role: "Black Sea & CIS",
  },
];

const philosophy = [
  {
    icon: HandshakeIcon,
    title: "Long-Term Commitment",
    desc: "We build enduring relationships, not short-term engagements.",
  },
  {
    icon: Anchor,
    title: "Stability & Reliability",
    desc: "Consistency and dependability define our operations and partnerships.",
  },
  {
    icon: Eye,
    title: "Transparent Communication",
    desc: "We value clarity, honesty, and professionalism in every interaction.",
  },
  {
    icon: Target,
    title: "Performance Before Promises",
    desc: "We prioritize measurable results and long-term collaboration.",
  },
  {
    icon: Award,
    title: "Operational Credibility",
    desc: "Execution excellence and disciplined processes are the foundation of our reputation.",
  },
];

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        title="What We Do"
        subtitle="Global dry bulk transportation serving leading industrial and trading counterparties across major trade routes."
        breadcrumb="About Us"
        image="/images/1.jpeg"
      />

      {/* Global Dry Bulk */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Core Business
              </p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Global Dry Bulk Transportation
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent" />
              <p className="mt-6 text-muted leading-relaxed">
                BPG specializes in the global transportation of dry bulk
                commodities, serving leading industrial producers, commodity
                traders, and multinational enterprises across major trade routes
                worldwide.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Our operational scope spans the Atlantic, Pacific, and Indian
                Ocean basins, with a focus on delivering reliable,
                cost-efficient shipping solutions backed by nearly two decades of
                market expertise.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/4.jpg"
                  alt="Ship bow in Panama Canal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cargoes */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Commodities
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Cargoes We Transport
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0} direction="left">
              <div className="rounded-2xl border border-border/60 bg-white p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <AnimatedIcon
                    icon={Ship}
                    size={24}
                    className="text-primary"
                  />
                  <h3 className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                    Major Bulks
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {majorBulks.map((c, i) => (
                    <ScrollReveal key={c} delay={i * 100 + 200} direction="up">
                      <span className="inline-block rounded-xl bg-primary/5 px-5 py-3 text-sm font-medium text-primary border border-primary/10">
                        {c}
                      </span>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} direction="right">
              <div className="rounded-2xl border border-border/60 bg-white p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <AnimatedIcon
                    icon={Anchor}
                    size={24}
                    className="text-primary"
                    delay={150}
                  />
                  <h3 className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                    Minor Bulks
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {minorBulks.map((c, i) => (
                    <ScrollReveal key={c} delay={i * 60 + 300} direction="up">
                      <span className="inline-block rounded-lg bg-section-alt px-3.5 py-2 text-xs font-medium text-muted border border-border/40">
                        {c}
                      </span>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fleet Photo Break */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <Image
          src="/images/19.jpg"
          alt="Bulk carriers at open sea"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/50" />
      </section>

      {/* Fleet Focus */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Tonnage
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Fleet Focus
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetSegments.map((v, i) => (
              <ScrollReveal key={v.type} delay={i * 150} direction="up">
                <div className="rounded-2xl border border-border/60 bg-white p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full text-center">
                  <AnimatedIcon
                    icon={v.icon}
                    size={32}
                    className="text-primary mx-auto"
                    delay={i * 150 + 200}
                  />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {v.type}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                    {v.dwt}
                  </p>
                  <p className="mt-4 text-sm text-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Network */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Global Presence
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Operational Network
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
            <p className="mt-6 text-muted leading-relaxed max-w-3xl">
              The Company conducts its operations through a network of
              strategically located offices, ensuring institutional-grade
              oversight, operational continuity, and efficient execution across
              key maritime and trading centers.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 120} direction="up">
                <div className="rounded-2xl border border-border/60 bg-white p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 text-center h-full">
                  <AnimatedIcon
                    icon={MapPin}
                    size={28}
                    className="text-accent mx-auto"
                    delay={i * 120 + 200}
                  />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {office.city}
                  </h3>
                  <p className="text-sm text-muted">{office.country}</p>
                  <div className="mt-3 w-8 h-0.5 bg-accent mx-auto" />
                  <p className="mt-3 text-xs text-muted">{office.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Our Values
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Business Philosophy
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophy.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120} direction="up">
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 h-full">
                  <AnimatedIcon
                    icon={item.icon}
                    size={28}
                    color="white"
                    delay={i * 120 + 300}
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

      {/* Closing Image — blends from Business Philosophy (bg-primary) into Footer (bg-primary-dark) */}
      <section className="relative h-48 lg:h-64 overflow-hidden">
        <Image
          src="/images/17.jpg"
          alt="Port with ships and cranes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/60 to-[#1c182e]" />
      </section>
    </>
  );
}
