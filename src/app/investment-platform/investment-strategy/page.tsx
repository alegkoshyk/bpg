import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Strategy — Bulkers Pool Group",
  description: "AMC investment strategy: acquire, optimize, exit strategically.",
};

export default function InvestmentStrategy() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-3">
            Investment Platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            AMC Investment Strategy
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Essential infrastructure. Tangible assets. Active management.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Three-Step Model */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-10">
              The Three-Step Model
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Acquire at Attractive Valuations",
                  desc: "We acquire vessels when asset pricing and forward market expectations provide compelling risk-adjusted entry points.",
                },
                {
                  step: "02",
                  title: "Optimize Operating Income",
                  desc: "We secure charter contracts, maximize utilization, and maintain strict cost discipline to enhance operating margins.",
                },
                {
                  step: "03",
                  title: "Exit Strategically",
                  desc: "Assets are divested during favorable market phases, with proceeds either reinvested into fleet renewal or distributed.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-border p-8"
                >
                  <span className="text-4xl font-bold text-accent/30">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Capital Discipline */}
          <div className="rounded-2xl bg-section-alt p-10 mb-20">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Capital Discipline
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Undeployed capital is conservatively placed in low-risk instruments
              until deployment. The initial operating phase prioritizes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Stabilization of cash flow",
                "Operational optimization",
                "Margin enhancement",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted mt-6">
              The focus is structured growth &mdash; not short-term yield
              extraction.
            </p>
          </div>

          {/* Two Sources of Return */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Two Sources of Return
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-border p-8">
                <div className="text-sm font-medium text-accent mb-2">
                  Source 1
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Operating Income (Cash Yield)
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Vessels generate revenue under charter contracts. A portion of
                  this income accrues to the AMC and is reflected in certificate
                  value.
                </p>
              </div>
              <div className="rounded-2xl border border-border p-8">
                <div className="text-sm font-medium text-accent mb-2">
                  Source 2
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Asset Appreciation (Capital Gains)
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Vessel values may increase during favorable freight cycles.
                  Strategic divestment can crystallize capital gains.
                </p>
              </div>
            </div>
          </div>

          {/* Risk Segregation */}
          <div className="mb-16">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Structural Risk Segregation
            </h2>
            <p className="text-muted leading-relaxed max-w-3xl mb-6">
              Each vessel is held within a dedicated SPV structure, isolating
              operational and legal exposure. This multi-layered framework
              enhances:
            </p>
            <div className="flex flex-wrap gap-3">
              {["Transparency", "Risk containment", "Capital protection discipline"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Simple */}
          <div className="rounded-2xl bg-primary p-10 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Why This Is Simple for Investors
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              You invest in a structured certificate. The management team handles
              asset selection, operations, and market timing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
