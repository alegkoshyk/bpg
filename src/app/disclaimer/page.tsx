"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import { FileText, Shield } from "lucide-react";

const sections = [
  {
    title: "Informational Purpose",
    content:
      "This material does not constitute investment advice and is provided for informational purposes only. It does not constitute an offer or solicitation to purchase any financial instrument.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Liability claims regarding damage caused by the use of any information provided, including any kind of information that is incomplete or incorrect, will therefore be rejected.",
  },
  {
    title: "Content Modifications",
    content:
      "Parts of the pages or the complete publication, including all information, may be extended, changed, or partly or completely deleted by the author without separate announcement.",
  },
  {
    title: "Investor Qualification",
    content:
      "The offering is directed exclusively at qualified or professional investors according to Art. 4 para. 3 of the Swiss Financial Services Act (FinSA) or institutional investors according to Art. 4 para. 4 FinSA.",
  },
  {
    title: "Investment Risks",
    content:
      "The acquisition of an investment involves considerable risks and may lead to the complete loss of the invested capital. The expected return is not guaranteed and may be considerably lower.",
  },
  {
    title: "Third-Party Links",
    content:
      "References and links to third-party websites are outside our responsibility. Any responsibility for such websites is declined. Access to and use of such websites is at the sole risk of the respective user.",
  },
  {
    title: "Legal Documents",
    content:
      "The legal documents regarding the AMC, namely its Term Sheet, may be obtained at the address of Navischart: Seeblick 1, 6330 Cham, Switzerland.",
  },
];

export default function Disclaimer() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        subtitle="Important legal information regarding the use of this website and investment materials."
        breadcrumb="Legal"
        image="/images/17.jpg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Legal Notice
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Important Information
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {sections.map((section, idx) => (
              <ScrollReveal key={section.title} delay={idx * 80}>
                <div className="rounded-2xl border border-border/60 bg-white p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AnimatedIcon
                        icon={Shield}
                        size={18}
                        className="text-accent"
                        delay={idx * 80}
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-3">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Footer note */}
          <ScrollReveal delay={600}>
            <div className="mt-16 text-center">
              <AnimatedIcon
                icon={FileText}
                size={28}
                className="text-accent mx-auto mb-4"
              />
              <p className="text-xs text-muted/60 max-w-md mx-auto leading-relaxed">
                This disclaimer applies to Bulkers Pool Group AG and its affiliated entities. For questions regarding these terms, please contact{" "}
                <a
                  href="mailto:info@bulkerspool.com"
                  className="text-primary hover:text-primary-light transition-colors underline"
                >
                  info@bulkerspool.com
                </a>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
