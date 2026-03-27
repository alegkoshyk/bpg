"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Cookie, Lock, ExternalLink, CheckCircle2 } from "lucide-react";

export default function CookiePolicy() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies on our website."
        breadcrumb="Legal"
        image="/images/17.jpg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Cookie Information
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Cookie Usage & Preferences
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
              <p className="mt-6 text-muted max-w-2xl mx-auto leading-relaxed">
                Last updated: March 2026
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={80}>
              <PolicyCard number="01" title="What Are Cookies?">
                <p>
                  Cookies are small text files that are placed on your device
                  (computer, tablet, or mobile phone) when you visit a website.
                  Cookies are widely used to make websites work efficiently and to
                  provide information to website owners. They help enhance your
                  browsing experience by remembering your preferences and enabling
                  certain functionalities.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <PolicyCard number="02" title="How We Use Cookies">
                <p>
                  Bulkers Pool Group AG (&ldquo;BPG&rdquo;) uses cookies and
                  similar technologies on our website for the following purposes:
                </p>
                <ul className="mt-4 space-y-3">
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Essential cookies:
                    </strong>{" "}
                    These are necessary for the website to function properly. They
                    enable basic functionalities such as page navigation and access
                    to secure areas. The website cannot function properly without
                    these cookies.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Analytics cookies:
                    </strong>{" "}
                    These cookies help us understand how visitors interact with our
                    website by collecting and reporting information anonymously. This
                    helps us improve the website&rsquo;s structure and content.
                  </PolicyListItem>
                  <PolicyListItem>
                    <strong className="text-foreground">
                      Functional cookies:
                    </strong>{" "}
                    These cookies enable the website to provide enhanced
                    functionality and personalization, such as remembering your
                    preferences and settings.
                  </PolicyListItem>
                </ul>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PolicyCard number="03" title="Types of Cookies We Use">
                <div className="mt-4 rounded-xl overflow-hidden border border-border/60">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-section-alt">
                        <th className="text-left px-5 py-3.5 font-semibold text-foreground text-xs uppercase tracking-wider">
                          Cookie Type
                        </th>
                        <th className="text-left px-5 py-3.5 font-semibold text-foreground text-xs uppercase tracking-wider">
                          Purpose
                        </th>
                        <th className="text-left px-5 py-3.5 font-semibold text-foreground text-xs uppercase tracking-wider">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      <tr className="hover:bg-section-alt/50 transition-colors">
                        <td className="px-5 py-4 font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            <Lock size={14} className="text-accent" />
                            Essential
                          </div>
                        </td>
                        <td className="px-5 py-4 text-muted">
                          Required for basic site functionality (session management,
                          security)
                        </td>
                        <td className="px-5 py-4 text-muted">Session</td>
                      </tr>
                      <tr className="hover:bg-section-alt/50 transition-colors">
                        <td className="px-5 py-4 font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            <Cookie size={14} className="text-accent" />
                            Analytics
                          </div>
                        </td>
                        <td className="px-5 py-4 text-muted">
                          Anonymous usage statistics to improve user experience
                        </td>
                        <td className="px-5 py-4 text-muted">Up to 24 months</td>
                      </tr>
                      <tr className="hover:bg-section-alt/50 transition-colors">
                        <td className="px-5 py-4 font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            <Cookie size={14} className="text-accent" />
                            Functional
                          </div>
                        </td>
                        <td className="px-5 py-4 text-muted">
                          Remember user preferences and settings
                        </td>
                        <td className="px-5 py-4 text-muted">Up to 12 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <PolicyCard number="04" title="Third-Party Cookies">
                <p>
                  We may use third-party services that set their own cookies on your
                  device. These include:
                </p>
                <ul className="mt-4 space-y-3">
                  <PolicyListItem>
                    <strong className="text-foreground">Cloudflare:</strong> For
                    website security, performance optimization, and DDoS protection.
                    Cloudflare may place cookies to identify trusted web traffic.
                  </PolicyListItem>
                </ul>
                <p className="mt-4">
                  We do not control third-party cookies. Please refer to the
                  respective third-party privacy policies for more information about
                  how they use cookies.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <PolicyCard number="05" title="Managing Cookies">
                <p>
                  You can control and manage cookies in several ways. Please note
                  that removing or blocking cookies may impact your user experience
                  and parts of our website may no longer be fully accessible.
                </p>
                <h3 className="text-sm font-semibold text-foreground mt-6 mb-3">
                  Browser Settings
                </h3>
                <p>
                  Most browsers allow you to manage cookie settings. You can set
                  your browser to refuse cookies or delete certain cookies. The
                  following links provide information on how to manage cookies in
                  common browsers:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      name: "Google Chrome",
                      url: "https://support.google.com/chrome/answer/95647",
                    },
                    {
                      name: "Mozilla Firefox",
                      url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer",
                    },
                    {
                      name: "Apple Safari",
                      url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471",
                    },
                    {
                      name: "Microsoft Edge",
                      url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
                    },
                  ].map((browser) => (
                    <a
                      key={browser.name}
                      href={browser.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-border/60 bg-section-alt/50 px-4 py-3 text-sm text-primary hover:text-primary-light hover:border-accent/30 transition-all duration-200"
                    >
                      <ExternalLink size={14} />
                      {browser.name}
                    </a>
                  ))}
                </div>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <PolicyCard number="06" title="Consent">
                <p>
                  By continuing to use our website, you consent to the use of
                  essential cookies. For non-essential cookies (analytics and
                  functional), we will seek your consent where required by applicable
                  law. You may withdraw your consent at any time by adjusting your
                  browser settings or contacting us directly.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <PolicyCard number="07" title="Changes to This Cookie Policy">
                <p>
                  We may update this Cookie Policy from time to time to reflect
                  changes in technology, legislation, or our data practices. Any
                  changes will be posted on this page with an updated revision date.
                </p>
              </PolicyCard>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <PolicyCard number="08" title="Contact">
                <p>
                  If you have any questions about our use of cookies, please
                  contact:
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
