"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Lock, Shield, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumb="Legal"
        image="/images/17.jpg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Data Protection
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Your Privacy Matters
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
              <p className="mt-6 text-muted max-w-2xl mx-auto leading-relaxed">
                Last updated: March 2026
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={80}>
              <PolicyCard number="01" title="Introduction">
                <p>
                  Bulkers Pool Group AG (&ldquo;BPG&rdquo;, &ldquo;we&rdquo;,
                  &ldquo;us&rdquo;, or &ldquo;our&rdquo;), with registered office
                  at Gotthardstrasse 26, 6300 Zug, Switzerland, is committed to
                  protecting your privacy and personal data. This Privacy Policy
                  explains how we collect, use, store, and protect your personal
                  information when you visit our website and interact with our
                  services.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <PolicyCard number="02" title="Data Controller">
                <p>
                  The data controller responsible for processing your personal data
                  is:
                </p>
                <address className="not-italic mt-4 rounded-xl bg-section-alt p-6 text-sm">
                  <strong className="text-foreground">
                    Bulkers Pool Group AG
                  </strong>
                  <br />
                  Gotthardstrasse 26
                  <br />
                  6300 Zug, Switzerland
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@bulkerspool.com"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    info@bulkerspool.com
                  </a>
                </address>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PolicyCard number="03" title="Information We Collect">
                <p>We may collect the following types of information:</p>
                <ul className="mt-4 space-y-3">
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Information you provide:
                    </strong>{" "}
                    When you fill out our contact form, we collect your name, email
                    address, and any message content you provide.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Automatically collected data:
                    </strong>{" "}
                    When you visit our website, we may automatically collect certain
                    technical information, including your IP address, browser type,
                    operating system, referring URLs, pages viewed, and the date and
                    time of your visit.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">Cookies:</strong> We use
                    cookies and similar tracking technologies. Please refer to our{" "}
                    <a
                      href="/cookie-policy"
                      className="text-primary hover:text-primary-light underline transition-colors"
                    >
                      Cookie Policy
                    </a>{" "}
                    for more details.
                  </PolicyListItem>
                </ul>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <PolicyCard number="04" title="Purpose of Data Processing">
                <p>We process your personal data for the following purposes:</p>
                <ul className="mt-4 space-y-3">
                  <PolicyListItem>To respond to your inquiries and requests</PolicyListItem>
                  <PolicyListItem>To provide information about our investment platform</PolicyListItem>
                  <PolicyListItem>To improve and optimize our website and user experience</PolicyListItem>
                  <PolicyListItem>To comply with legal and regulatory obligations</PolicyListItem>
                  <PolicyListItem>To protect our legitimate interests, including fraud prevention and security</PolicyListItem>
                </ul>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <PolicyCard number="05" title="Legal Basis for Processing">
                <p>
                  We process your personal data on the following legal grounds under
                  the Swiss Federal Act on Data Protection (FADP) and, where
                  applicable, the EU General Data Protection Regulation (GDPR):
                </p>
                <ul className="mt-4 space-y-3">
                  <PolicyListItem>
                    <strong className="text-foreground">Consent:</strong> Where you
                    have given explicit consent to the processing of your personal
                    data.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Contractual necessity:
                    </strong>{" "}
                    Where processing is necessary for the performance of a contract
                    or pre-contractual measures.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Legitimate interest:
                    </strong>{" "}
                    Where processing is necessary for our legitimate business
                    interests, provided your rights do not override those interests.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">Legal obligation:</strong>{" "}
                    Where processing is required by applicable laws or regulations.
                  </PolicyListItem>
                </ul>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <PolicyCard number="06" title="Data Sharing and Transfers">
                <p>
                  We do not sell or rent your personal data to third parties. We may
                  share your information with:
                </p>
                <ul className="mt-4 space-y-3">
                  <PolicyListItem>
                    Service providers who assist us in operating our website and
                    services (e.g., hosting, analytics)
                  </PolicyListItem>
                  <PolicyListItem>
                    Professional advisors (legal, accounting) as necessary
                  </PolicyListItem>
                  <PolicyListItem>
                    Regulatory authorities where required by law
                  </PolicyListItem>
                </ul>
                <p className="mt-4">
                  Where personal data is transferred outside of Switzerland or the
                  EEA, we ensure appropriate safeguards are in place in accordance
                  with applicable data protection laws.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <PolicyCard number="07" title="Data Retention">
                <p>
                  We retain your personal data only for as long as necessary to
                  fulfil the purposes for which it was collected, or as required by
                  applicable laws and regulations. Contact form submissions are
                  typically retained for a period of 24 months, unless a longer
                  retention period is required or permitted by law.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <PolicyCard number="08" title="Data Security">
                <p>
                  We implement appropriate technical and organizational measures to
                  protect your personal data against unauthorized access, alteration,
                  disclosure, or destruction. These measures include encrypted data
                  transmission (SSL/TLS), access controls, and regular security
                  reviews.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <PolicyCard number="09" title="Your Rights">
                <p>
                  Under applicable data protection laws, you have the following
                  rights regarding your personal data:
                </p>
                <ul className="mt-4 space-y-3">
                  <PolicyListItem>
                    <strong className="text-foreground">Right of access:</strong>{" "}
                    Request information about the personal data we hold about you.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Right to rectification:
                    </strong>{" "}
                    Request correction of inaccurate or incomplete data.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">Right to erasure:</strong>{" "}
                    Request deletion of your personal data, subject to legal
                    retention requirements.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Right to restrict processing:
                    </strong>{" "}
                    Request limitation of how we process your data.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Right to data portability:
                    </strong>{" "}
                    Receive your data in a structured, commonly used format.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">Right to object:</strong>{" "}
                    Object to the processing of your data based on legitimate
                    interests.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Right to withdraw consent:
                    </strong>{" "}
                    Withdraw previously given consent at any time.
                  </PolicyListItem>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:info@bulkerspool.com"
                    className="text-primary hover:text-primary-light underline transition-colors"
                  >
                    info@bulkerspool.com
                  </a>
                  .
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <PolicyCard number="10" title="Third-Party Links">
                <p>
                  Our website may contain links to third-party websites. We are not
                  responsible for the privacy practices or content of these external
                  sites. We encourage you to review the privacy policies of any
                  third-party websites you visit.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <PolicyCard number="11" title="Children's Privacy">
                <p>
                  Our website and services are not directed at individuals under the
                  age of 18. We do not knowingly collect personal data from minors.
                  If we become aware that we have inadvertently collected personal
                  data from a minor, we will take steps to delete such information.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <PolicyCard number="12" title="Changes to This Policy">
                <p>
                  We reserve the right to update this Privacy Policy at any time.
                  Changes will be posted on this page with an updated revision date.
                  We encourage you to review this policy periodically.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <PolicyCard number="13" title="Contact">
                <p>
                  If you have any questions about this Privacy Policy or wish to
                  exercise your data protection rights, please contact:
                </p>
                <address className="not-italic mt-4 rounded-xl bg-section-alt p-6 text-sm">
                  <strong className="text-foreground">
                    Bulkers Pool Group AG
                  </strong>
                  <br />
                  Gotthardstrasse 26
                  <br />
                  6300 Zug, Switzerland
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@bulkerspool.com"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    info@bulkerspool.com
                  </a>
                </address>
              </PolicyCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

function PolicyCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-white p-8">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold text-accent">{number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-bold text-foreground mb-3">{title}</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function PolicyListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 list-none">
      <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}
