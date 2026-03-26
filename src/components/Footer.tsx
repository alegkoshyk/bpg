import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <div className="text-lg font-bold">BPG</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">
                  Bulkers Pool Group
                </div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Disciplined, asset-backed investment in dry bulk maritime
              transport. Swiss-structured. Actively managed.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about/who-we-are"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/about/what-we-do"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/about/partners"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Our Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Investment */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Investment
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/investment-platform/swiss-amc"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Swiss AMC
                </Link>
              </li>
              <li>
                <Link
                  href="/investment-platform/why-maritime-assets"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Why Maritime Assets
                </Link>
              </li>
              <li>
                <Link
                  href="/investment-platform/investment-strategy"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  Investment Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-white/50 space-y-2 leading-relaxed">
              <p>Bulkers Pool Group AG</p>
              <p>
                Gotthardstrasse 26
                <br />
                6300 Zug, Switzerland
              </p>
              <p>
                <a
                  href="mailto:info@bulkerspool.com"
                  className="hover:text-white transition-colors"
                >
                  info@bulkerspool.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Bulkers Pool Group AG. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Disclaimer
            </Link>
            <a
              href="https://www.linkedin.com/company/bulkerspoolgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
