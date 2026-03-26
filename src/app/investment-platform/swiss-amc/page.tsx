import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swiss AMC — Bulkers Pool Group",
  description: "Actively Managed Certificates for maritime investment.",
};

export default function SwissAMC() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-3">
            Investment Platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Swiss AMC
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Actively Managed Certificates providing institutional-grade exposure
            to alternative assets with Swiss legal framework.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* What AMCs Offer */}
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-muted leading-relaxed">
              Actively Managed Certificates (AMCs) provide investors with
              institutional-grade exposure to alternative assets and tailored
              strategies &mdash; combining the flexibility of private
              investments with the simplicity of a publicly issued security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
            {[
              "Swiss legal framework",
              "ISIN-identified security",
              "Bank-issued structure",
              "Institutional custody",
              "Greater structural flexibility",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border p-5 text-center"
              >
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-section-alt p-10 mb-16">
            <p className="text-sm text-muted leading-relaxed">
              AMCs are reserved for qualified investors under Swiss law,
              typically high-net-worth individuals, family offices, and investors
              acting through regulated banks or wealth managers.
            </p>
          </div>

          {/* Investment Philosophy */}
          <div className="rounded-2xl bg-primary p-10 lg:p-14 mb-16 text-center">
            <p className="text-xl lg:text-2xl font-semibold text-white italic">
              &ldquo;The ship creates value &mdash; the AMC structure makes that
              value accessible, tradable, and reportable.&rdquo;
            </p>
          </div>

          {/* Capital Structure */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Capital Structure
            </h2>
            <p className="text-muted leading-relaxed max-w-3xl mb-8">
              The investment is intended to finance the purchase of a fleet
              dedicated to the transportation of dry bulk cargo. Capital is
              raised through Actively Managed Certificates / Tracker
              Certificates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Acquisition",
                  desc: "Proportional interest in the Swiss management company Navischart GmbH for vessel acquisition and fleet management.",
                },
                {
                  title: "Fleet Development",
                  desc: "Vessel acquisition strategy with proceeds allocated toward fleet development and management.",
                },
                {
                  title: "Operations",
                  desc: "Technical management, commercial management, and operational services.",
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

          {/* Investment Objective */}
          <div className="rounded-2xl border-2 border-accent/30 p-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Investment Objective
            </h2>
            <p className="text-muted leading-relaxed">
              Acquisition of 10-15 vessels for dry bulk cargo / breakbulk
              transportation. Five to seven years of operation, followed by the
              eventual sale of the vessels and fleet upgrade.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
