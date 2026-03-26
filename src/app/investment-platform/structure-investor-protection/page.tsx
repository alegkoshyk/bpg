import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structure & Investor Protection — Bulkers Pool Group",
  description: "Swiss Issuer + SPV Structure + Independent Oversight.",
};

export default function StructureProtection() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-3">
            Investment Platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Structure & Investor Protection
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Swiss Issuer + SPV Structure + Independent Oversight
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-muted leading-relaxed">
              The investment framework combines institutional-grade structuring
              with operational flexibility.
            </p>
          </div>

          {/* Core Components */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Core Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Swiss-issued AMC",
                  desc: "Investors participate via an ISIN through their bank.",
                },
                {
                  title: "Dedicated SPV per Vessel",
                  desc: "Each asset is legally ring-fenced.",
                },
                {
                  title: "Independent Auditor",
                  desc: "Financial oversight and accountability.",
                },
                {
                  title: "External Valuation Agent",
                  desc: "Independent asset valuation.",
                },
                {
                  title: "SPV Administrator",
                  desc: "Corporate governance and reporting.",
                },
                {
                  title: "Custodian Bank (DVP)",
                  desc: "Secure transaction execution.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border p-6"
                >
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Mitigation */}
          <div className="rounded-2xl bg-section-alt p-10 mb-20">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Risk Mitigation Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Tangible asset backing with intrinsic value",
                "Active secondary vessel market enabling divestment",
                "Disciplined acquisition pricing",
                "Phased capital deployment to reduce timing risk",
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
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory */}
          <div className="rounded-2xl border-2 border-primary/20 p-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Regulatory & Transparency Framework
            </h2>
            <p className="text-muted leading-relaxed">
              The Swiss Financial Market Supervisory Authority (FINMA) imposes
              enhanced due diligence and cost transparency standards on
              structured products, reinforcing investor protection and
              disclosure discipline.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
