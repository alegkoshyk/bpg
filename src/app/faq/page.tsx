"use client";

import { useState } from "react";

const faqSections = [
  {
    title: "About the AMC Structure",
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
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Everything you need to know about investing in maritime assets
            through our Swiss AMC structure.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-16">
            {faqSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-section-alt/50 transition-colors"
      >
        <span className="text-sm font-medium text-foreground pr-4">{q}</span>
        <svg
          className={`w-4 h-4 text-muted flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm text-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}
