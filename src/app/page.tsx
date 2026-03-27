"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  TrendingUp,
  Building2,
  Anchor,
  Globe,
  BarChart3,
  Ship,
  Waves,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Photo background */}
        <Image
          src="/images/19.jpg"
          alt="Bulk carrier at sea"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary/70 z-[1]" />
        {/* Particle animation */}
        <HeroBackground />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1C182E] to-transparent z-[2]" />

        <div className="relative z-[3] mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="max-w-3xl">
            <ScrollReveal delay={100} direction="none">
              <div className="inline-flex items-center gap-2.5 rounded-full glass-card px-5 py-2 text-xs font-medium text-accent tracking-wider uppercase mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Swiss-Structured Maritime Investment
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <h1 className="text-[2.75rem] leading-[1.1] lg:text-7xl font-bold text-white tracking-tight">
                Invest in
                <br />
                <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                  Real Assets
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="mt-3 text-xl lg:text-2xl text-white/40 font-light">
                A Dry Bulk Fleet Through a Swiss AMC
              </p>
            </ScrollReveal>

            <ScrollReveal delay={550}>
              <p className="mt-8 text-base lg:text-lg text-white/50 leading-relaxed max-w-xl">
                A disciplined, asset-backed investment strategy focused on
                acquiring and actively managing a diversified fleet of
                income-generating dry bulk vessels.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={700}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/investment-platform/swiss-amc"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-primary-dark hover:bg-accent-light transition-all hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-0.5"
                >
                  Learn About AMC
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-4 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 hover:border-white/25 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ KEY HIGHLIGHTS ═══════════ */}
      <section className="py-24 lg:py-32 relative bg-[#1C182E]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Why BPG
              </span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-white tracking-tight">
                Three Key Highlights
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Shield,
                title: "Real Asset Backed",
                description:
                  "The investment is backed by physical vessels — tangible, income-generating assets with intrinsic value and an active secondary market.",
                delay: 0,
              },
              {
                icon: TrendingUp,
                title: "Active Management",
                description:
                  "Disciplined acquisition, chartering, and sale aligned with market cycles. Professional commercial and technical management.",
                delay: 150,
              },
              {
                icon: Building2,
                title: "Swiss Structure",
                description:
                  "Management and certificate issuance in Switzerland, supported by independent valuation, audit, and institutional custody.",
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-7 group-hover:bg-accent/20 transition-colors">
                    <AnimatedIcon icon={item.icon} color="#4887C7" delay={item.delay + 200} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GLOBAL TRADE + PHOTO ═══════════ */}
      <section className="py-24 lg:py-32 bg-section-alt overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                  What We Do
                </span>
                <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                  Infrastructure of
                  <br />
                  Global Trade
                </h2>
                <div className="mt-4 w-16 h-0.5 bg-accent" />
                <p className="mt-8 text-lg text-muted leading-relaxed">
                  We invest in and operate vessels transporting essential raw
                  materials worldwide. Nearly 90% of global trade moves by sea.
                </p>
                <p className="mt-4 text-muted leading-relaxed">
                  Investors access this exposure through a Swiss-issued Actively
                  Managed Certificate (AMC) — a bankable instrument with an
                  ISIN, held directly through their private bank or broker.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {["Iron Ore", "Coal", "Grain", "Fertilizers", "Steel", "Bauxite"].map(
                    (cargo) => (
                      <span
                        key={cargo}
                        className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/80"
                      >
                        {cargo}
                      </span>
                    )
                  )}
                </div>

                <Link
                  href="/investment-platform/why-maritime-assets"
                  className="group inline-flex items-center gap-2 mt-10 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Why Maritime Assets
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                  <Image
                    src="/images/6.jpg"
                    alt="Crane loading cargo into vessel"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover parallax-photo"
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-6 shadow-2xl text-white">
                  <div className="flex items-center gap-3">
                    <AnimatedIcon icon={Globe} color="#4887C7" size={24} />
                    <div>
                      <div className="text-2xl font-bold">90%</div>
                      <div className="text-xs text-white/50">of trade by sea</div>
                    </div>
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ FLEET GALLERY ═══════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Operations
              </span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
                Our Fleet in Action
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/4.jpg", alt: "Panama Canal transit", span: "col-span-2 row-span-2" },
              { src: "/images/1.jpeg", alt: "Grain cargo", span: "" },
              { src: "/images/5.jpg", alt: "Ice navigation", span: "" },
              { src: "/images/17.jpg", alt: "Port operations", span: "" },
              { src: "/images/2.jpg", alt: "Greek port", span: "" },
            ].map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 100} className={photo.span}>
                <div className="rounded-xl overflow-hidden h-full group cursor-pointer">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TRACK RECORD ═══════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/17.jpg"
          alt="Port with ships"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Since 2006
              </span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-white tracking-tight">
                Proven Track Record
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 20, suffix: "+", label: "Years of Experience", icon: Anchor },
              { value: 65, suffix: "M+", label: "Tons Transported", icon: Ship },
              { value: 1700, suffix: "+", label: "Commercial Contracts", icon: BarChart3 },
              { value: 4, suffix: "", label: "Global Offices", icon: Globe },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 150}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center mx-auto mb-5">
                    <AnimatedIcon icon={stat.icon} color="#4887C7" size={22} delay={i * 150} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-white/40">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Investment Strategy
              </span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
                Three-Step Model
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                step: "01",
                title: "Acquire",
                subtitle: "At Attractive Valuations",
                desc: "We acquire vessels when asset pricing and forward market expectations provide compelling risk-adjusted entry points.",
                icon: Anchor,
              },
              {
                step: "02",
                title: "Optimize",
                subtitle: "Operating Income",
                desc: "We secure charter contracts, maximize utilization, and maintain strict cost discipline to enhance operating margins.",
                icon: TrendingUp,
              },
              {
                step: "03",
                title: "Exit",
                subtitle: "Strategically",
                desc: "Assets are divested during favorable market phases, with proceeds reinvested into fleet renewal or distributed.",
                icon: BarChart3,
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 200}>
                <div className="relative p-10 lg:p-12 border border-border/60 first:rounded-t-2xl last:rounded-b-2xl md:first:rounded-l-2xl md:first:rounded-tr-none md:last:rounded-r-2xl md:last:rounded-bl-none hover:bg-section-alt/50 transition-colors group">
                  <span className="text-6xl font-bold text-accent/10 absolute top-6 right-8">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <AnimatedIcon icon={item.icon} color="#0c1f3f" delay={i * 200 + 300} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-accent font-medium mt-1">{item.subtitle}</p>
                  <p className="text-[15px] text-muted leading-relaxed mt-4">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SWISS STRUCTURE ═══════════ */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/10.jpg"
                    alt="Panama Canal operations"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover parallax-photo"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                  Structure
                </span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                  Swiss AMC — Bankable, Transparent, Secure
                </h2>
                <div className="mt-4 w-16 h-0.5 bg-accent" />

                <div className="mt-10 space-y-5">
                  {[
                    "Swiss legal framework with ISIN-identified security",
                    "Bank-issued structure with institutional custody",
                    "Independent valuation and audit",
                    "Dedicated SPV per vessel — legally ring-fenced",
                    "FINMA transparency and disclosure standards",
                  ].map((item, i) => (
                    <div key={item} className="flex gap-3">
                      <AnimatedIcon
                        icon={CheckCircle2}
                        color="#4887C7"
                        size={20}
                        delay={i * 100 + 400}
                      />
                      <span className="text-[15px] text-muted leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/investment-platform/swiss-amc"
                  className="group inline-flex items-center gap-2 mt-10 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Learn About AMC Structure
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ QUOTE ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="relative">
              <span className="text-8xl text-accent/10 font-serif absolute -top-10 left-0">&ldquo;</span>
              <p className="text-2xl lg:text-3xl font-light text-foreground/80 leading-relaxed italic">
                The ship creates value — the AMC structure makes that value
                accessible, tradable, and reportable.
              </p>
              <div className="mt-6 w-12 h-0.5 bg-accent mx-auto" />
              <p className="mt-4 text-sm text-muted">Investment Philosophy</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/4.jpg"
          alt="Ship in Panama Canal"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/90 to-primary/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Get Started
              </span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-white tracking-tight">
                Ready to Explore
                <br />
                Maritime Investment?
              </h2>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                Learn how our Swiss-structured AMC provides institutional-grade
                access to the dry bulk shipping market.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/investment-platform/swiss-amc"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-primary-dark hover:bg-accent-light transition-all hover:shadow-2xl hover:shadow-accent/20"
                >
                  Explore the AMC
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-8 py-4 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
