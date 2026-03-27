"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import { HelpCircle, ChevronDown, Ship, TrendingUp, BarChart3, Anchor } from "lucide-react";

const faqSections = [
  {
    title: "About the AMC Structure",
    icon: Ship,
    items: [
      {
        q: "What am I buying?",
        a: "You purchase an AMC (Actively Managed Certificate) identified by an ISIN through your bank or broker. The investment strategy is executed by the appointed asset management team.",
      },
      {
        q: "Is this a fund?",
        a: "No. The AMC is a structured certificate (a security), not a collective investment fund. It is actively managed and held via a custodian.",
      },
      {
        q: "How transparent is the AMC?",
        a: "The AMC provides institutional-grade transparency through ISIN registration, independent valuation, clear investment guidelines (Term Sheet), bank-issued structure, and a defined reporting schedule.",
      },
      {
        q: "How is investor protection ensured?",
        a: "Through a regulated issuer framework, disclosure via Term Sheet, Swiss ISIN registration, and custody via recognized clearing systems.",
      },
      {
        q: "What happens to funds before vessels are acquired?",
        a: "Funds are temporarily placed in low-risk instruments such as deposits or US Treasuries until deployment.",
      },
    ],
  },
  {
    title: "Investment Rationale",
    icon: TrendingUp,
    items: [
      {
        q: "Why invest in ships / maritime transport?",
        a: "Shipping is the backbone of global trade. Over 80% of global goods are transported by sea. Dry bulk vessels carry essential commodities like iron ore, coal, grains, fertilizers, and steel.",
      },
      {
        q: "What makes shipping an attractive investment?",
        a: "Hard asset exposure with tangible, income-generating assets. Inflation protection as freight rates and vessel values often rise during inflation. Supply discipline since fleet growth is cyclical and capital-intensive. High operating leverage where small rate changes can significantly impact returns. Diversification with low correlation to traditional equities and bonds.",
      },
      {
        q: "Why invest via AMC instead of buying ships directly?",
        a: "Direct ownership requires operational management, technical expertise, a chartering network, and significant capital commitment. The AMC provides professional management, liquidity via bank-issued structure, diversified exposure, lower operational burden, and transparent reporting.",
      },
      {
        q: "Where does the return come from?",
        a: "Returns are generated from operating income via charter contracts and potential asset appreciation upon vessel sale.",
      },
    ],
  },
  {
    title: "How Can I Invest?",
    icon: Anchor,
    items: [
      {
        q: "How can I invest in a ship via Direct Investment?",
        a: "You invest directly by acquiring shares in a dedicated shipowning company (SPV) that owns a specific vessel. You hold equity in the shipowning company and participate directly in the vessel's performance.",
      },
      {
        q: "How can I invest via AMC?",
        a: "You invest through an Actively Managed Certificate — a structured financial instrument issued by a regulated institution. You hold a bank-issued security with an ISIN, gain exposure to maritime assets, and avoid direct operational involvement.",
      },
    ],
  },
  {
    title: "Market Monitoring & Performance",
    icon: BarChart3,
    items: [
      {
        q: "How can investors monitor fleet performance?",
        a: "The Baltic Exchange serves as the primary independent benchmark for freight earnings and market positioning.",
      },
      {
        q: "What are the main Baltic freight indices?",
        a: "BDI (Baltic Dry Index) for overall market direction, BCI for Capesize, BPI for Panamax/Kamsarmax, BSI for Supramax, and BHSI for Handysize time charter averages.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about investing in maritime assets through our Swiss AMC structure."
        breadcrumb="Support"
        image="/images/faq.jpg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Knowledge Base
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Find Your Answers
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
              <p className="mt-6 text-muted max-w-2xl mx-auto leading-relaxed">
                Explore our comprehensive FAQ covering the AMC structure, investment rationale, participation process, and market monitoring.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {faqSections.map((section, sIdx) => (
              <ScrollReveal key={section.title} delay={sIdx * 100}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <AnimatedIcon
                        icon={section.icon}
                        size={20}
                        className="text-accent"
                        delay={sIdx * 100}
                      />
                    </div>
                    <h2 className="text-lg font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {section.items.map((item, iIdx) => {
                      const key = `${sIdx}-${iIdx}`;
                      const isOpen = openItems[key] || false;

                      return (
                        <div
                          key={key}
                          className="rounded-2xl border border-border/60 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-sm"
                        >
                          <button
                            onClick={() => toggleItem(key)}
                            className="flex w-full items-center justify-between px-6 py-5 text-left group transition-colors duration-200"
                          >
                            <span className="text-sm font-medium text-foreground pr-6 group-hover:text-primary transition-colors duration-200">
                              {item.q}
                            </span>
                            <div
                              className={`w-8 h-8 rounded-full bg-section-alt flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                isOpen ? "bg-accent/10 rotate-180" : ""
                              }`}
                            >
                              <ChevronDown
                                size={16}
                                className={`transition-colors duration-300 ${
                                  isOpen ? "text-accent" : "text-muted"
                                }`}
                              />
                            </div>
                          </button>
                          <div
                            className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{
                              gridTemplateRows: isOpen ? "1fr" : "0fr",
                              opacity: isOpen ? 1 : 0,
                            }}
                          >
                            <div className="overflow-hidden">
                              <div className="px-6 pb-6">
                                <div className="w-full h-px bg-border/40 mb-4" />
                                <p className="text-sm text-muted leading-relaxed">
                                  {item.a}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <AnimatedIcon
                icon={HelpCircle}
                size={32}
                className="text-accent mx-auto mb-6"
              />
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                Still Have Questions?
              </h2>
              <p className="mt-4 text-muted max-w-lg mx-auto leading-relaxed">
                Our team is ready to provide detailed information about the investment structure and opportunities.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
