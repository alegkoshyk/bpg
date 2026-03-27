"use client";

import { useState, useMemo } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import { BookOpen, ArrowRight } from "lucide-react";

const glossary = [
  { term: "Annual Survey", meaning: "Mandatory yearly inspection conducted by a classification society on behalf of the flag state." },
  { term: "Asset Value", meaning: "The market price of a vessel in the sale & purchase market." },
  { term: "Baltic Exchange", meaning: "Independent organization publishing global freight rate benchmarks." },
  { term: "Bareboat Charter", meaning: "Charter agreement where the charterer takes full operational control of the vessel, including crew and management." },
  { term: "Brokerage Commission", meaning: "Commission paid to a shipbroker, typically a percentage of freight or hire." },
  { term: "Bulk Carrier", meaning: "A vessel designed to transport unpackaged dry commodities such as iron ore, coal, and grain." },
  { term: "Bunkers", meaning: "Marine fuel (fuel oil or diesel) consumed by the vessel." },
  { term: "Capesize", meaning: "Large dry bulk vessels (typically 150,000-200,000 DWT) mainly used for iron ore and coal trades." },
  { term: "Charter", meaning: "The hiring of a vessel for transporting cargo." },
  { term: "Charterer", meaning: "The party hiring the vessel." },
  { term: "Charterparty", meaning: "Legal contract defining terms of cargo transportation by sea." },
  { term: "Charter Hire", meaning: "Revenue earned under a charter agreement." },
  { term: "Classification Society", meaning: "Independent organization certifying vessel construction and maintenance standards (e.g., DNV, Lloyd's Register)." },
  { term: "Drydocking", meaning: "Scheduled removal of a vessel from the water for inspection, repairs, and maintenance." },
  { term: "DWT (Deadweight Tonnage)", meaning: "Measure of a vessel's total carrying capacity, including cargo, fuel, water, and supplies." },
  { term: "Flag State", meaning: "Country where the vessel is registered and whose laws it follows." },
  { term: "Freight Rate", meaning: "Price paid for transporting cargo by sea." },
  { term: "Hire Rate", meaning: "Agreed daily payment for vessel use under a time or bareboat charter." },
  { term: "Hull & Machinery (H&M)", meaning: "Insurance covering physical damage to the vessel." },
  { term: "IMO", meaning: "International Maritime Organization — UN agency regulating global shipping safety and environmental standards." },
  { term: "ISM Code", meaning: "International Safety Management Code governing ship safety procedures." },
  { term: "Laytime", meaning: "Time allowed for loading or unloading cargo." },
  { term: "MARPOL", meaning: "International convention preventing pollution from ships." },
  { term: "Newbuilding", meaning: "Vessel under construction or recently delivered from shipyard." },
  { term: "Off-Hire", meaning: "Period when a vessel is unavailable for service (repairs or technical issues)." },
  { term: "Operating Days", meaning: "Days a vessel is available and earning revenue." },
  { term: "Operating Costs (OPEX)", meaning: "Daily running costs including crew wages, insurance, repairs, and maintenance." },
  { term: "Orderbook", meaning: "Total number of vessels on order at shipyards, indicating future fleet supply growth." },
  { term: "Panamax", meaning: "Vessel size originally designed to transit the Panama Canal (approx. 65,000-85,000 DWT)." },
  { term: "P&I (Protection & Indemnity)", meaning: "Insurance covering third-party liabilities such as cargo claims, pollution, and crew injury." },
  { term: "P&I Club", meaning: "Mutual insurance association providing P&I coverage." },
  { term: "Scrap Value", meaning: "Residual value of a vessel sold for recycling." },
  { term: "Special Survey (S/S)", meaning: "Major inspection conducted every five years by a classification society." },
  { term: "Spot Market", meaning: "Market where vessels are chartered for single voyages." },
  { term: "Supramax / Ultramax", meaning: "Mid-sized dry bulk vessels (approx. 50,000-66,000 DWT) offering trade flexibility." },
  { term: "TCE (Time Charter Equivalent)", meaning: "Standardized earnings metric calculated as revenue minus voyage expenses divided by operating days." },
  { term: "Time Charter", meaning: "Charter where the owner provides crew and technical management, and the charterer pays daily hire plus voyage costs." },
  { term: "Ton-Mile Demand", meaning: "Measure of shipping demand calculated as cargo volume multiplied by distance transported." },
  { term: "Voyage Charter", meaning: "Charter agreement for a single voyage between specific ports." },
  { term: "War Risk Insurance", meaning: "Insurance covering losses due to war, piracy, or geopolitical conflict." },
];

export default function Glossary() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const alphabet = useMemo(() => {
    const letters = new Set(glossary.map((item) => item.term[0].toUpperCase()));
    return Array.from(letters).sort();
  }, []);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof glossary> = {};
    for (const item of glossary) {
      const letter = item.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(item);
    }
    return groups;
  }, []);

  const scrollToLetter = (letter: string) => {
    setActiveLetter(letter);
    const el = document.getElementById(`glossary-${letter}`);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHero
        title="Glossary"
        subtitle="Maritime and investment terminology explained. A comprehensive reference for industry-specific terms."
        breadcrumb="Resources"
        image="/images/5.jpg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Reference
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Maritime Terminology
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
              <p className="mt-6 text-muted max-w-2xl mx-auto leading-relaxed">
                {glossary.length} essential terms covering vessel types, charter structures, market benchmarks, and operational concepts.
              </p>
            </div>
          </ScrollReveal>

          {/* Alphabet Quick Jump */}
          <ScrollReveal delay={100}>
            <div className="sticky top-20 z-20 mb-12">
              <div className="rounded-2xl border border-border/60 bg-white/95 backdrop-blur-md p-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-center gap-1">
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
                    const hasTerms = alphabet.includes(letter);
                    return (
                      <button
                        key={letter}
                        onClick={() => hasTerms && scrollToLetter(letter)}
                        disabled={!hasTerms}
                        className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeLetter === letter
                            ? "bg-accent text-white"
                            : hasTerms
                            ? "text-foreground hover:bg-accent/10 hover:text-accent"
                            : "text-muted/30 cursor-default"
                        }`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Glossary Terms */}
          <div className="space-y-12">
            {Object.entries(grouped).map(([letter, terms], gIdx) => (
              <ScrollReveal key={letter} delay={gIdx * 30}>
                <div id={`glossary-${letter}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-accent">
                        {letter}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-border/40" />
                  </div>

                  <div className="grid gap-3">
                    {terms.map((item) => (
                      <div
                        key={item.term}
                        className="group rounded-2xl border border-border/60 bg-white px-6 py-5 hover:border-accent/30 hover:shadow-sm transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                          <dt className="text-sm font-semibold text-foreground md:w-56 md:flex-shrink-0 group-hover:text-accent transition-colors duration-200">
                            {item.term}
                          </dt>
                          <dd className="text-sm text-muted leading-relaxed">
                            {item.meaning}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Back to top */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <AnimatedIcon
                icon={BookOpen}
                size={32}
                className="text-accent mx-auto mb-6"
              />
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                Need More Information?
              </h2>
              <p className="mt-4 text-muted max-w-lg mx-auto leading-relaxed">
                Explore our FAQ or contact our team for detailed explanations of maritime investment concepts.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors duration-300"
                >
                  View FAQ
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
