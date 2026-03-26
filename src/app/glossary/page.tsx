import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossary — Bulkers Pool Group",
  description: "Maritime and investment terminology explained.",
};

const glossary = [
  { term: "Annual Survey", meaning: "Mandatory yearly inspection conducted by a classification society on behalf of the flag state." },
  { term: "Asset Value", meaning: "The market price of a vessel in the sale & purchase market." },
  { term: "Baltic Exchange", meaning: "Independent organization publishing global freight rate benchmarks." },
  { term: "Bareboat Charter", meaning: "Charter agreement where the charterer takes full operational control of the vessel, including crew and management." },
  { term: "Brokerage Commission", meaning: "Commission paid to a shipbroker, typically a percentage of freight or hire." },
  { term: "Bulk Carrier", meaning: "A vessel designed to transport unpackaged dry commodities such as iron ore, coal, and grain." },
  { term: "Bunkers", meaning: "Marine fuel (fuel oil or diesel) consumed by the vessel." },
  { term: "Capesize", meaning: "Large dry bulk vessels (typically 150,000-200,000 DWT) mainly used for iron ore and coal trades." },
  { term: "Charter", meaning: "The hiring of a vessel for transporting cargo." },
  { term: "Charterer", meaning: "The party hiring the vessel." },
  { term: "Charterparty", meaning: "Legal contract defining terms of cargo transportation by sea." },
  { term: "Charter Hire", meaning: "Revenue earned under a charter agreement." },
  { term: "Classification Society", meaning: "Independent organization certifying vessel construction and maintenance standards (e.g., DNV, Lloyd's Register)." },
  { term: "Drydocking", meaning: "Scheduled removal of a vessel from the water for inspection, repairs, and maintenance." },
  { term: "DWT (Deadweight Tonnage)", meaning: "Measure of a vessel's total carrying capacity, including cargo, fuel, water, and supplies." },
  { term: "Flag State", meaning: "Country where the vessel is registered and whose laws it follows." },
  { term: "Freight Rate", meaning: "Price paid for transporting cargo by sea." },
  { term: "Hire Rate", meaning: "Agreed daily payment for vessel use under a time or bareboat charter." },
  { term: "Hull & Machinery (H&M)", meaning: "Insurance covering physical damage to the vessel." },
  { term: "IMO", meaning: "International Maritime Organization — UN agency regulating global shipping safety and environmental standards." },
  { term: "ISM Code", meaning: "International Safety Management Code governing ship safety procedures." },
  { term: "Laytime", meaning: "Time allowed for loading or unloading cargo." },
  { term: "MARPOL", meaning: "International convention preventing pollution from ships." },
  { term: "Newbuilding", meaning: "Vessel under construction or recently delivered from shipyard." },
  { term: "Off-Hire", meaning: "Period when a vessel is unavailable for service (repairs or technical issues)." },
  { term: "Operating Days", meaning: "Days a vessel is available and earning revenue." },
  { term: "Operating Costs (OPEX)", meaning: "Daily running costs including crew wages, insurance, repairs, and maintenance." },
  { term: "Orderbook", meaning: "Total number of vessels on order at shipyards, indicating future fleet supply growth." },
  { term: "Panamax", meaning: "Vessel size originally designed to transit the Panama Canal (approx. 65,000-85,000 DWT)." },
  { term: "P&I (Protection & Indemnity)", meaning: "Insurance covering third-party liabilities such as cargo claims, pollution, and crew injury." },
  { term: "P&I Club", meaning: "Mutual insurance association providing P&I coverage." },
  { term: "Scrap Value", meaning: "Residual value of a vessel sold for recycling." },
  { term: "Special Survey (S/S)", meaning: "Major inspection conducted every five years by a classification society." },
  { term: "Spot Market", meaning: "Market where vessels are chartered for single voyages." },
  { term: "Supramax / Ultramax", meaning: "Mid-sized dry bulk vessels (approx. 50,000-66,000 DWT) offering trade flexibility." },
  { term: "TCE (Time Charter Equivalent)", meaning: "Standardized earnings metric calculated as revenue minus voyage expenses divided by operating days." },
  { term: "Time Charter", meaning: "Charter where the owner provides crew and technical management, and the charterer pays daily hire plus voyage costs." },
  { term: "Ton-Mile Demand", meaning: "Measure of shipping demand calculated as cargo volume multiplied by distance transported." },
  { term: "Voyage Charter", meaning: "Charter agreement for a single voyage between specific ports." },
  { term: "War Risk Insurance", meaning: "Insurance covering losses due to war, piracy, or geopolitical conflict." },
];

export default function Glossary() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Glossary
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Maritime and investment terminology explained.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="divide-y divide-border">
            {glossary.map((item) => (
              <div key={item.term} className="py-5 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8">
                <dt className="text-sm font-semibold text-foreground">
                  {item.term}
                </dt>
                <dd className="text-sm text-muted leading-relaxed">
                  {item.meaning}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
