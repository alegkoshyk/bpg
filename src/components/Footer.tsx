import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Top accent line */}
      <div className="h-px shimmer-border" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo/bpg_logo_white.svg"
              alt="BPG Logo"
              width={100}
              height={36}
              className="h-8 w-auto mb-5"
            />
            <p className="text-sm text-white/35 leading-relaxed">
              Disciplined, asset-backed investment in dry bulk maritime
              transport. Swiss-structured. Actively managed.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about/who-we-are", label: "Who We Are" },
                { href: "/about/what-we-do", label: "What We Do" },
                { href: "/about/partners", label: "Our Partners" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/35 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-5">
              Investment
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/investment-platform/swiss-amc", label: "Swiss AMC" },
                { href: "/investment-platform/why-maritime-assets", label: "Why Maritime Assets" },
                { href: "/investment-platform/investment-strategy", label: "Investment Strategy" },
                { href: "/faq", label: "FAQ" },
                { href: "/glossary", label: "Glossary" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/35 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent mb-5">
              Contact
            </h3>
            <address className="not-italic text-sm text-white/35 space-y-3 leading-relaxed">
              <p className="text-white/50 font-medium">Bulkers Pool Group AG</p>
              <p>
                Gotthardstrasse 26
                <br />
                6300 Zug, Switzerland
              </p>
              <p>
                <a
                  href="mailto:info@bulkerspool.com"
                  className="hover:text-white/70 transition-colors"
                >
                  info@bulkerspool.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Bulkers Pool Group AG. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Disclaimer
            </Link>
            <a
              href="https://www.linkedin.com/company/bulkerspoolgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
