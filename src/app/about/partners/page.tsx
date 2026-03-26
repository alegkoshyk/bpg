import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners — Bulkers Pool Group",
  description: "Established global counterparties across shipping and commodity markets.",
};

const shipowners = [
  "Transbulk Management Inc.",
  "PetroVietnam Transportation Corporation",
  "Everfast Shipping Co.",
  "Cargill International SA",
  "Chinaland",
  "The Shipping Corporation of India",
  "Koch Shipping Pte Ltd",
  "MUR Shipping B.V.",
  "Cyprus Sea Lines S.A",
  "Goldenport Shipmanagement Ltd",
  "Arion Shipping Ltd.",
  "Safesea Transport Inc",
  "Seacon Ships Management",
  "Genoa Shipping S.A.",
  "Dai Fu Ocean Shipping",
  "Alma Shipmanagement",
  "Primebulk Shipmanagement",
  "S-Bulkers Ltd.",
  "Genimar Shipping & Trading",
  "Valerie Ship Management LLC",
];

const charterers = [
  "Bunge", "Olam", "Dreyfus", "OCP", "Borusan", "Casillo", "Midstar",
  "Lecureur", "Ameropa", "Vale", "InVivo", "SSOE", "Everdere", "Galoo",
  "Brampton", "Sucden", "Kernel/Inerco", "HMS Bergbau AG",
  "ADNOC Logistics and Services", "Mera", "Jindal",
  "Agroprosperis Trading", "Delta Global", "Continental Farmers Group",
];

const brokers = [
  "Fulmar Shipping", "Clarksons", "SSY", "BRS",
  "Howe Robinson Partners", "Omnia Shipbrokers", "Hellaschart",
  "Banchero Costa", "Lightship Chartering", "Reshamwala Shipbrokers",
  "Lynx Freight & Trading", "Oino Shipbrokers", "Doric Shipbrokers",
];

const bunkerSuppliers = [
  "Alpic Energy CY Limited", "Propeller Fuels", "Shipergy",
  "Island Oil Limited", "Integr8 Fuel Inc",
];

export default function Partners() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Partners
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            We work with established global counterparties across the shipping
            and commodity markets, building long-term relationships based on
            reliability, transparency, and performance.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          <PartnerSection title="Shipowners" items={shipowners} />
          <PartnerSection title="Cargo Charterers & Traders" items={charterers} />
          <PartnerSection title="Ship Broker Houses" items={brokers} />
          <PartnerSection title="Bunker Suppliers" items={bunkerSuppliers} />

          {/* Insurance */}
          <div className="rounded-2xl bg-section-alt p-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Insurance & Coverage
            </h2>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                Our vessels are entered with{" "}
                <strong className="text-foreground">The London P&I Club</strong>{" "}
                for Protection & Indemnity insurance coverage.
              </p>
              <p>
                Marine insurance placement is arranged through{" "}
                <strong className="text-foreground">
                  MARINCON GmbH & Co. KG
                </strong>{" "}
                (Hamburg).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PartnerSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-6">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted hover:border-primary/30 hover:text-foreground transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
