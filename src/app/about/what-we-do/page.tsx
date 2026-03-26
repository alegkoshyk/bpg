import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do — Bulkers Pool Group",
  description: "Global dry bulk transportation serving leading counterparties.",
};

export default function WhatWeDo() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What We Do
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Global dry bulk transportation serving leading industrial and
            trading counterparties across major trade routes.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Cargoes */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Cargoes We Transport
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-border p-8">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  Major Bulks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Iron Ore", "Coal", "Grain"].map((c) => (
                    <span
                      key={c}
                      className="rounded-lg bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-border p-8">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  Minor Bulks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
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
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded-lg bg-section-alt px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fleet Focus */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Fleet Focus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: "Handysize", dwt: "25-40k DWT" },
                { type: "Supramax / Ultramax", dwt: "40-66k DWT" },
                { type: "Panamax", dwt: "67-100k DWT" },
              ].map((v) => (
                <div
                  key={v.type}
                  className="rounded-2xl border border-border p-8 text-center"
                >
                  <div className="text-lg font-semibold text-foreground">
                    {v.type}
                  </div>
                  <div className="text-sm text-muted mt-1">{v.dwt}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Network */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Operational Network
            </h2>
            <p className="text-muted leading-relaxed max-w-3xl">
              The Company conducts its operations through a network of
              strategically located offices in{" "}
              <strong className="text-foreground">Piraeus</strong>,{" "}
              <strong className="text-foreground">Dubai</strong>,{" "}
              <strong className="text-foreground">New Delhi</strong> and{" "}
              <strong className="text-foreground">Odesa</strong>. This global
              presence ensures institutional-grade oversight, operational
              continuity, and efficient execution across key maritime and trading
              centers.
            </p>
          </div>

          {/* Business Philosophy */}
          <div className="rounded-2xl bg-primary p-10 lg:p-14">
            <h2 className="text-2xl font-bold text-white mb-8">
              Our Business Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Long-Term Commitment",
                  desc: "We build enduring relationships, not short-term engagements.",
                },
                {
                  title: "Stability & Reliability",
                  desc: "Consistency and dependability define our operations and partnerships.",
                },
                {
                  title: "Transparent Communication",
                  desc: "We value clarity, honesty, and professionalism in every interaction.",
                },
                {
                  title: "Performance Before Promises",
                  desc: "We prioritize measurable results and long-term collaboration.",
                },
                {
                  title: "Operational Credibility",
                  desc: "Execution excellence and disciplined processes are the foundation of our reputation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white/5 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-sm font-semibold text-accent mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
