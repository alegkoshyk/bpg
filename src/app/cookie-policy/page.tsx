import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Bulkers Pool Group",
  description: "Cookie policy of Bulkers Pool Group AG.",
};

export default function CookiePolicy() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-white/40">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-12">
          <PolicySection title="1. What Are Cookies?">
            <p>
              Cookies are small text files that are placed on your device
              (computer, tablet, or mobile phone) when you visit a website.
              Cookies are widely used to make websites work efficiently and to
              provide information to website owners. They help enhance your
              browsing experience by remembering your preferences and enabling
              certain functionalities.
            </p>
          </PolicySection>

          <PolicySection title="2. How We Use Cookies">
            <p>
              Bulkers Pool Group AG (&ldquo;BPG&rdquo;) uses cookies and
              similar technologies on our website bpg.redcats.uk for the
              following purposes:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong className="text-foreground">
                  Essential cookies:
                </strong>{" "}
                These are necessary for the website to function properly. They
                enable basic functionalities such as page navigation and access
                to secure areas. The website cannot function properly without
                these cookies.
              </li>
              <li>
                <strong className="text-foreground">
                  Analytics cookies:
                </strong>{" "}
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously. This
                helps us improve the website&rsquo;s structure and content.
              </li>
              <li>
                <strong className="text-foreground">
                  Functional cookies:
                </strong>{" "}
                These cookies enable the website to provide enhanced
                functionality and personalization, such as remembering your
                preferences and settings.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Types of Cookies We Use">
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                      Cookie Type
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                      Purpose
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">
                      Essential
                    </td>
                    <td className="px-4 py-3">
                      Required for basic site functionality (session management,
                      security)
                    </td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">
                      Analytics
                    </td>
                    <td className="px-4 py-3">
                      Anonymous usage statistics to improve user experience
                    </td>
                    <td className="px-4 py-3">Up to 24 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">
                      Functional
                    </td>
                    <td className="px-4 py-3">
                      Remember user preferences and settings
                    </td>
                    <td className="px-4 py-3">Up to 12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PolicySection>

          <PolicySection title="4. Third-Party Cookies">
            <p>
              We may use third-party services that set their own cookies on your
              device. These include:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong className="text-foreground">Cloudflare:</strong> For
                website security, performance optimization, and DDoS protection.
                Cloudflare may place cookies to identify trusted web traffic.
              </li>
            </ul>
            <p className="mt-3">
              We do not control third-party cookies. Please refer to the
              respective third-party privacy policies for more information about
              how they use cookies.
            </p>
          </PolicySection>

          <PolicySection title="5. Managing Cookies">
            <p>
              You can control and manage cookies in several ways. Please note
              that removing or blocking cookies may impact your user experience
              and parts of our website may no longer be fully accessible.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">
              Browser Settings
            </h3>
            <p>
              Most browsers allow you to manage cookie settings. You can set
              your browser to refuse cookies or delete certain cookies. The
              following links provide information on how to manage cookies in
              common browsers:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light underline"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Consent">
            <p>
              By continuing to use our website, you consent to the use of
              essential cookies. For non-essential cookies (analytics and
              functional), we will seek your consent where required by applicable
              law. You may withdraw your consent at any time by adjusting your
              browser settings or contacting us directly.
            </p>
          </PolicySection>

          <PolicySection title="7. Changes to This Cookie Policy">
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in technology, legislation, or our data practices. Any
              changes will be posted on this page with an updated revision date.
            </p>
          </PolicySection>

          <PolicySection title="8. Contact">
            <p>
              If you have any questions about our use of cookies, please
              contact:
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
