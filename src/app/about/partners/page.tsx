"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  Ship,
  BarChart3,
  Briefcase,
  Shield,
  HandshakeIcon,
  Users,
} from "lucide-react";

const shipowners = [
  "Transbulk Management Inc.",
  "PetroVietnam Transportation Corporation",
  "Everfast Shipping Co.",
  "Cargill International SA",
  "Chinaland",
  "The Shipping Corporation of India",
  "Koch Shipping Pte Ltd",
  "MUR Shipping B.V.",
  "Cyprus Sea Lines S.A",
  "Goldenport Shipmanagement Ltd",
  "Arion Shipping Ltd.",
  "Safesea Transport Inc",
  "Seacon Ships Management",
  "Genoa Shipping S.A.",
  "Dai Fu Ocean Shipping",
  "Alma Shipmanagement",
  "Primebulk Shipmanagement",
  "S-Bulkers Ltd.",
  "Genimar Shipping & Trading",
  "Valerie Ship Management LLC",
];

const charterers = [
  "Bunge",
  "Olam",
  "Dreyfus",
  "OCP",
  "Borusan",
  "Casillo",
  "Midstar",
  "Lecureur",
  "Ameropa",
  "Vale",
  "InVivo",
  "SSOE",
  "Everdere",
  "Galoo",
  "Brampton",
  "Sucden",
  "Kernel/Inerco",
  "HMS Bergbau AG",
  "ADNOC Logistics and Services",
  "Mera",
  "Jindal",
  "Agroprosperis Trading",
  "Delta Global",
  "Continental Farmers Group",
];

const brokers = [
  "Fulmar Shipping",
  "Clarksons",
  "SSY",
  "BRS",
  "Howe Robinson Partners",
  "Omnia Shipbrokers",
  "Hellaschart",
  "Banchero Costa",
  "Lightship Chartering",
  "Reshamwala Shipbrokers",
  "Lynx Freight & Trading",
  "Oino Shipbrokers",
  "Doric Shipbrokers",
];

const bunkerSuppliers = [
  "Alpic Energy CY Limited",
  "Propeller Fuels",
  "Shipergy",
  "Island Oil Limited",
  "Integr8 Fuel Inc",
];

const partnerSections = [
  {
    title: "Shipowners",
    icon: Ship,
    items: shipowners,
    label: "Tonnage Partners",
  },
  {
    title: "Cargo Charterers & Traders",
    icon: BarChart3,
    items: charterers,
    label: "Commercial Partners",
  },
  {
    title: "Ship Broker Houses",
    icon: Briefcase,
    items: brokers,
    label: "Brokerage Network",
  },
  {
    title: "Bunker Suppliers",
    icon: Users,
    items: bunkerSuppliers,
    label: "Fuel Supply",
  },
];

function getMonogram(name: string) {
  const words = name.replace(/[&]/g, "").split(/\s+/).filter(w => w.length > 1 && w[0] === w[0].toUpperCase());
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

const monogramColors = [
  "from-primary/80 to-primary",
  "from-accent/80 to-accent",
  "from-primary/60 to-accent/80",
  "from-[#2d4a7a] to-primary",
  "from-accent to-primary/70",
];

export default function Partners() {
  return (
    <>
      <PageHero
        title="Our Partners"
        subtitle="We work with established global counterparties across the shipping and commodity markets, building long-term relationships based on reliability, transparency, and performance."
        breadcrumb="About Us"
        image="/images/17.jpg"
      />

      {/* Partner Sections */}
      {partnerSections.map((section, sectionIdx) => (
        <section
          key={section.title}
          className={`py-24 lg:py-32 ${sectionIdx % 2 === 1 ? "bg-section-alt" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-4">
                <AnimatedIcon
                  icon={section.icon}
                  size={32}
                  className="text-primary"
                  delay={100}
                />
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                    {section.label}
                  </p>
                  <h2 className="mt-1 text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                    {section.title}
                  </h2>
                </div>
              </div>
              <div className="mt-4 w-16 h-0.5 bg-accent" />
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {section.items.map((item, i) => (
                <ScrollReveal key={item} delay={i * 50} direction="up">
                  <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-white p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${monogramColors[i % monogramColors.length]} flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {getMonogram(item)}
                    </div>
                    <span className="text-xs text-center text-muted leading-snug font-medium group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Insurance & Coverage */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4">
              <AnimatedIcon
                icon={Shield}
                size={32}
                color="white"
                delay={100}
              />
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                  Protection
                </p>
                <h2 className="mt-1 text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  Insurance & Coverage
                </h2>
              </div>
            </div>
            <div className="mt-4 w-16 h-0.5 bg-accent" />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0} direction="left">
              <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 h-full">
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">
                  P&I Insurance
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Our vessels are entered with{" "}
                  <strong className="text-white">The London P&I Club</strong>{" "}
                  for Protection & Indemnity insurance coverage, providing
                  comprehensive liability protection across all operational
                  activities.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} direction="right">
              <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 h-full">
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">
                  Marine Insurance
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Marine insurance placement is arranged through{" "}
                  <strong className="text-white">
                    MARINCON GmbH & Co. KG
                  </strong>{" "}
                  (Hamburg), ensuring institutional-grade coverage and risk
                  management.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Band — network stats + quote */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-section-alt to-white" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
              {[
                { value: "60+", label: "Partner Companies" },
                { value: "20+", label: "Countries" },
                { value: "4", label: "Partner Categories" },
                { value: "15+", label: "Years of Collaboration" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl lg:text-5xl font-black text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs font-semibold text-muted uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
              <blockquote className="text-xl lg:text-2xl font-light text-foreground/80 italic leading-relaxed">
                &ldquo;Every partnership in our network has been earned through
                consistent execution, transparent communication, and a shared
                commitment to operational excellence.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <AnimatedIcon
                  icon={HandshakeIcon}
                  size={20}
                  className="text-accent"
                />
                <span className="text-sm font-semibold text-muted uppercase tracking-[0.15em]">
                  Built on Trust
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
