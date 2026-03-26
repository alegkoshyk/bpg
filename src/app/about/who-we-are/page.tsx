import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are — Bulkers Pool Group",
  description: "Company overview - active in the maritime market since 2006.",
};

export default function WhoWeAre() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Who We Are
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Bulkers Pool Group has been active in the maritime market since 2006.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-muted leading-relaxed">
              Over nearly two decades &mdash; including the 2008 financial
              crisis and multiple shipping cycles &mdash; we have consistently
              navigated volatility and structural market shifts.
            </p>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Our approach is grounded in practical, day-to-day operational
              experience rather than theoretical or purely academic frameworks.
              The effectiveness of this strategy is reflected in measurable
              results and value creation achieved under our management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <InfoCard
              title="Management"
              items={[
                "Deep operational maritime expertise",
                "Structured investment governance",
                "Established international counterparty network",
                "Disciplined risk oversight and commercial execution",
              ]}
            />
            <InfoCard
              title="Risk Management"
              items={[
                "Active market monitoring",
                "Counterparty discipline",
                "Use of cleared FFA hedging instruments",
                "Multi-layered protection framework",
              ]}
            />
            <InfoCard
              title="Strategic Positioning"
              items={[
                "Integrated within Greek shipping ecosystem",
                "Operational depth and market access",
                "Established maritime infrastructure",
                "Greece's constitutional maritime framework (Law 89/67)",
              ]}
            />
          </div>

          {/* Track Record */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-10">
              Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-border p-8">
                <div className="text-sm font-medium text-accent mb-2">
                  2009 &ndash; 2017
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-muted text-sm">Tons transported</span>
                    <span className="text-2xl font-bold text-foreground">
                      50M+
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-muted text-sm">
                      Commercial contracts
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      1,000+
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border p-8">
                <div className="text-sm font-medium text-accent mb-2">
                  2017 &ndash; 2025
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-muted text-sm">Tons transported</span>
                    <span className="text-2xl font-bold text-foreground">
                      15.5M+
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-muted text-sm">
                      Commercial contracts
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      730+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What This Means */}
          <div className="mt-20 rounded-2xl bg-section-alt p-10">
            <h2 className="text-xl font-bold text-foreground mb-6">
              What This Means for Investors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Access to counterparties and commercial opportunities",
                "Ability to operate through volatile market cycles",
                "Cost control and operational discipline",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-muted leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border p-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-muted">
            <span className="text-accent mt-0.5">&#8226;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
