import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Maritime Assets — Bulkers Pool Group",
  description: "Own the infrastructure of global trade through maritime investment.",
};

export default function WhyMaritimeAssets() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-3">
            Investment Platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Maritime Assets
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Own the infrastructure of global trade.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* 90% stat */}
          <div className="text-center mb-20">
            <div className="text-6xl lg:text-8xl font-bold text-primary">
              90%
            </div>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              of global trade moves by sea. Energy, food, steel, infrastructure
              &mdash; none of it moves without ships.
            </p>
          </div>

          {/* Real Assets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Real Assets. Real Cash Flow.
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Shipping is a hard-asset business. Unlike financial assets,
                ships participate directly in the real economy.
              </p>
              <ul className="space-y-3">
                {[
                  "Income-generating physical assets",
                  "Global market pricing (Baltic Exchange benchmarks)",
                  "Inflation sensitivity",
                  "Limited replacement supply",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cycles Create Opportunity
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Shipping is cyclical &mdash; and that is the opportunity. Fleet
                growth is constrained by capital intensity, shipyard capacity,
                and regulation.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                When supply tightens and demand shifts, earnings can reprice
                rapidly.
              </p>
              <div className="rounded-xl bg-primary p-6">
                <p className="text-lg font-semibold text-accent text-center">
                  Active management unlocks value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
