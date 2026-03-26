import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Bulkers Pool Group",
  description: "Privacy policy of Bulkers Pool Group AG.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/40">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-12">
          <PolicySection title="1. Introduction">
            <p>
              Bulkers Pool Group AG (&ldquo;BPG&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;), with registered office
              at Gotthardstrasse 26, 6300 Zug, Switzerland, is committed to
              protecting your privacy and personal data. This Privacy Policy
              explains how we collect, use, store, and protect your personal
              information when you visit our website bpg.redcats.uk and interact
              with our services.
            </p>
          </PolicySection>

          <PolicySection title="2. Data Controller">
            <p>
              The data controller responsible for processing your personal data
              is:
            </p>
            <address className="not-italic mt-3 rounded-xl bg-section-alt p-6 text-sm">
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
                className="text-primary hover:text-primary-light"
              >
                info@bulkerspool.com
              </a>
            </address>
          </PolicySection>

          <PolicySection title="3. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong className="text-foreground">
                  Information you provide:
                </strong>{" "}
                When you fill out our contact form, we collect your name, email
                address, and any message content you provide.
              </li>
              <li>
                <strong className="text-foreground">
                  Automatically collected data:
                </strong>{" "}
                When you visit our website, we may automatically collect certain
                technical information, including your IP address, browser type,
                operating system, referring URLs, pages viewed, and the date and
                time of your visit.
              </li>
              <li>
                <strong className="text-foreground">Cookies:</strong> We use
                cookies and similar tracking technologies. Please refer to our{" "}
                <a
                  href="/cookie-policy/"
                  className="text-primary hover:text-primary-light underline"
                >
                  Cookie Policy
                </a>{" "}
                for more details.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Purpose of Data Processing">
            <p>We process your personal data for the following purposes:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>To respond to your inquiries and requests</li>
              <li>To provide information about our investment platform</li>
              <li>
                To improve and optimize our website and user experience
              </li>
              <li>To comply with legal and regulatory obligations</li>
              <li>
                To protect our legitimate interests, including fraud prevention
                and security
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Legal Basis for Processing">
            <p>
              We process your personal data on the following legal grounds under
              the Swiss Federal Act on Data Protection (FADP) and, where
              applicable, the EU General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong className="text-foreground">Consent:</strong> Where you
                have given explicit consent to the processing of your personal
                data.
              </li>
              <li>
                <strong className="text-foreground">
                  Contractual necessity:
                </strong>{" "}
                Where processing is necessary for the performance of a contract
                or pre-contractual measures.
              </li>
              <li>
                <strong className="text-foreground">
                  Legitimate interest:
                </strong>{" "}
                Where processing is necessary for our legitimate business
                interests, provided your rights do not override those interests.
              </li>
              <li>
                <strong className="text-foreground">Legal obligation:</strong>{" "}
                Where processing is required by applicable laws or regulations.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Data Sharing and Transfers">
            <p>
              We do not sell or rent your personal data to third parties. We may
              share your information with:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                Service providers who assist us in operating our website and
                services (e.g., hosting, analytics)
              </li>
              <li>
                Professional advisors (legal, accounting) as necessary
              </li>
              <li>
                Regulatory authorities where required by law
              </li>
            </ul>
            <p className="mt-4">
              Where personal data is transferred outside of Switzerland or the
              EEA, we ensure appropriate safeguards are in place in accordance
              with applicable data protection laws.
            </p>
          </PolicySection>

          <PolicySection title="7. Data Retention">
            <p>
              We retain your personal data only for as long as necessary to
              fulfil the purposes for which it was collected, or as required by
              applicable laws and regulations. Contact form submissions are
              typically retained for a period of 24 months, unless a longer
              retention period is required or permitted by law.
            </p>
          </PolicySection>

          <PolicySection title="8. Data Security">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction. These measures include encrypted data
              transmission (SSL/TLS), access controls, and regular security
              reviews.
            </p>
          </PolicySection>

          <PolicySection title="9. Your Rights">
            <p>
              Under applicable data protection laws, you have the following
              rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong className="text-foreground">Right of access:</strong>{" "}
                Request information about the personal data we hold about you.
              </li>
              <li>
                <strong className="text-foreground">
                  Right to rectification:
                </strong>{" "}
                Request correction of inaccurate or incomplete data.
              </li>
              <li>
                <strong className="text-foreground">Right to erasure:</strong>{" "}
                Request deletion of your personal data, subject to legal
                retention requirements.
              </li>
              <li>
                <strong className="text-foreground">
                  Right to restrict processing:
                </strong>{" "}
                Request limitation of how we process your data.
              </li>
              <li>
                <strong className="text-foreground">
                  Right to data portability:
                </strong>{" "}
                Receive your data in a structured, commonly used format.
              </li>
              <li>
                <strong className="text-foreground">Right to object:</strong>{" "}
                Object to the processing of your data based on legitimate
                interests.
              </li>
              <li>
                <strong className="text-foreground">
                  Right to withdraw consent:
                </strong>{" "}
                Withdraw previously given consent at any time.
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:info@bulkerspool.com"
                className="text-primary hover:text-primary-light underline"
              >
                info@bulkerspool.com
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="10. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies of any
              third-party websites you visit.
            </p>
          </PolicySection>

          <PolicySection title="11. Children's Privacy">
            <p>
              Our website and services are not directed at individuals under the
              age of 18. We do not knowingly collect personal data from minors.
              If we become aware that we have inadvertently collected personal
              data from a minor, we will take steps to delete such information.
            </p>
          </PolicySection>

          <PolicySection title="12. Changes to This Policy">
            <p>
              We reserve the right to update this Privacy Policy at any time.
              Changes will be posted on this page with an updated revision date.
              We encourage you to review this policy periodically.
            </p>
          </PolicySection>

          <PolicySection title="13. Contact">
            <p>
              If you have any questions about this Privacy Policy or wish to
              exercise your data protection rights, please contact:
            </p>
            <address className="not-italic mt-3 rounded-xl bg-section-alt p-6 text-sm">
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
                className="text-primary hover:text-primary-light"
              >
                info@bulkerspool.com
              </a>
            </address>
          </PolicySection>
        </div>
      </section>
    </>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
