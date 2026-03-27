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

            <div className="mt-12 flex flex-wrap gap-3">
              {section.items.map((item, i) => (
                <ScrollReveal key={item} delay={i * 40} direction="up">
                  <span className="inline-block rounded-2xl border border-border/60 bg-white px-5 py-3 text-sm text-muted hover:border-primary/30 hover:text-foreground hover:shadow-md hover:shadow-primary/5 transition-all duration-300 cursor-default">
                    {item}
                  </span>
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

      {/* Trust Band */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedIcon
                icon={HandshakeIcon}
                size={40}
                className="text-accent mx-auto"
              />
              <h2 className="mt-6 text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                Built on Trust, Proven by Performance
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
              <p className="mt-6 text-muted leading-relaxed">
                Every partnership in our network has been earned through
                consistent execution, transparent communication, and a shared
                commitment to operational excellence across global dry bulk
                markets.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
