import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Materials — Bulkers Pool Group",
  description: "Access subscription documents and Private Placement Memorandum.",
};

export default function Documents() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent mb-3">
            Investment Platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Investor Materials
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-2xl border border-border p-12">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Request Documents
              </h2>
              <p className="text-muted mb-8">
                Subscription documents as well as the Private Placement
                Memorandum (PPM) can be ordered through our contact page.
              </p>
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
              >
                Contact Us to Request
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
