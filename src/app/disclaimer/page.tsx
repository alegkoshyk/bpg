import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Bulkers Pool Group",
  description: "Legal disclaimer for Bulkers Pool Group AG.",
};

export default function Disclaimer() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Disclaimer
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-sm max-w-none text-muted leading-relaxed space-y-6">
            <p>
              This material does not constitute investment advice and is
              provided for informational purposes only. It does not constitute
              an offer or solicitation to purchase any financial instrument.
            </p>
            <p>
              Liability claims regarding damage caused by the use of any
              information provided, including any kind of information that is
              incomplete or incorrect, will therefore be rejected.
            </p>
            <p>
              Parts of the pages or the complete publication, including all
              information, may be extended, changed, or partly or completely
              deleted by the author without separate announcement.
            </p>
            <p>
              The offering is directed exclusively at qualified or professional
              investors according to Art. 4 para. 3 of the Swiss Financial
              Services Act (FinSA) or institutional investors according to Art.
              4 para. 4 FinSA.
            </p>
            <p>
              The acquisition of an investment involves considerable risks and
              may lead to the complete loss of the invested capital. The
              expected return is not guaranteed and may be considerably lower.
            </p>
            <p>
              References and links to third-party websites are outside our
              responsibility. Any responsibility for such websites is declined.
              Access to and use of such websites is at the sole risk of the
              respective user.
            </p>
            <p>
              The legal documents regarding the AMC, namely its Term Sheet, may
              be obtained at the address of Navischart: Seeblick 1, 6330 Cham,
              Switzerland.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
