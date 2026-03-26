import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-28 lg:py-40 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-accent mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Swiss-Structured Maritime Investment
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Invest in Real Assets:
              <br />
              <span className="text-accent">A Dry Bulk Fleet</span>
              <br />
              Through a Swiss AMC
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl">
              A disciplined, asset-backed investment strategy focused on
              acquiring and actively managing a diversified fleet of
              income-generating dry bulk vessels.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/investment-platform/swiss-amc"
                className="rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-primary hover:bg-accent-light transition-colors text-center"
              >
                Learn About AMC
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Three Key Highlights
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              A structured approach to maritime investment, combining real asset
              ownership with institutional-grade infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HighlightCard
              icon={
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
              title="Real Asset Backed"
              description="The investment is backed by physical vessels - tangible, income-generating assets with intrinsic value and an active secondary market."
            />
            <HighlightCard
              icon={
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              }
              title="Active Management"
              description="Disciplined acquisition, chartering, and sale aligned with market cycles. Professional commercial and technical management."
            />
            <HighlightCard
              icon={
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
              title="Swiss Structure"
              description="Management and certificate issuance in Switzerland, supported by independent valuation, audit, and institutional custody."
            />
          </div>
        </div>
      </section>

      {/* What We Transport */}
      <section className="py-20 lg:py-28 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Infrastructure of
                <br />
                <span className="text-primary">Global Trade</span>
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                We invest in and operate vessels transporting essential raw
                materials worldwide. Nearly 90% of global trade moves by sea.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Investors access this exposure through a Swiss-issued Actively
                Managed Certificate (AMC) - a bankable instrument with an ISIN,
                held directly through their private bank or broker.
              </p>
              <Link
                href="/investment-platform/why-maritime-assets"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
              >
                Why Maritime Assets
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Iron Ore", sub: "Major Bulk" },
                { label: "Coal", sub: "Major Bulk" },
                { label: "Grain", sub: "Major Bulk" },
                { label: "Bauxite", sub: "Minor Bulk" },
                { label: "Fertilizers", sub: "Minor Bulk" },
                { label: "Steel", sub: "Minor Bulk" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-white p-5"
                >
                  <div className="text-sm font-semibold text-foreground">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Proven Track Record
            </h2>
            <p className="mt-4 text-lg text-muted">
              Active in the maritime market since 2006.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="20+" label="Years of Experience" />
            <StatCard value="65M+" label="Tons Transported" />
            <StatCard value="1,700+" label="Commercial Contracts" />
            <StatCard value="4" label="Global Offices" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Ready to Explore Maritime Investment?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Learn how our Swiss-structured AMC provides institutional-grade
            access to the dry bulk shipping market.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/investment-platform/swiss-amc"
              className="rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-primary hover:bg-accent-light transition-colors"
            >
              Explore the AMC
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function HighlightCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl lg:text-5xl font-bold text-primary">{value}</div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}
