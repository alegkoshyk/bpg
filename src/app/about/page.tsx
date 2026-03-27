"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Users, Ship, HandshakeIcon, ArrowRight } from "lucide-react";

const sections = [
  {
    href: "/about/who-we-are",
    title: "Who We Are",
    description:
      "Nearly two decades of navigating shipping cycles with operational excellence and disciplined risk management.",
    icon: Users,
    image: "/images/19.jpg",
  },
  {
    href: "/about/what-we-do",
    title: "What We Do",
    description:
      "Global dry bulk transportation serving leading industrial and trading counterparties across major trade routes.",
    icon: Ship,
    image: "/images/1.jpeg",
  },
  {
    href: "/about/partners",
    title: "Our Partners",
    description:
      "Established global counterparties across shipping and commodity markets, built on reliability and performance.",
    icon: HandshakeIcon,
    image: "/images/17.jpg",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Bulkers Pool Group has been active in the maritime market since 2006, consistently navigating volatility and structural market shifts."
        image="/images/2.jpg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Explore
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Get to Know BPG
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, i) => (
              <ScrollReveal key={section.href} delay={i * 150} direction="up">
                <Link
                  href={section.href}
                  className="group relative flex flex-col rounded-2xl border border-border/60 bg-white overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <AnimatedIcon
                        icon={section.icon}
                        size={32}
                        color="white"
                        delay={i * 150 + 300}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-8">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                      {section.description}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brief intro band */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Since 2006
              </p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Built on Operational Depth
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent" />
              <p className="mt-6 text-muted leading-relaxed">
                Over nearly two decades — including the 2008 financial crisis
                and multiple shipping cycles — we have consistently navigated
                volatility and structural market shifts. Our approach is grounded
                in practical, day-to-day operational experience rather than
                theoretical or purely academic frameworks.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/4.jpg"
                  alt="Ship bow in Panama Canal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
