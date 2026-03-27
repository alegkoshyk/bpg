"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import { FileCheck, ArrowRight, Lock, Shield } from "lucide-react";

export default function Documents() {
  return (
    <>
      <PageHero
        title="Investor Materials"
        subtitle="Access the documentation you need to evaluate and participate in the investment platform."
        breadcrumb="Investment Platform"
        image="/images/13.jpeg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="rounded-2xl border border-border/60 bg-white p-12 lg:p-16 text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
                  <AnimatedIcon
                    icon={FileCheck}
                    className="text-primary"
                    size={32}
                  />
                </div>

                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">
                  Confidential Materials
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Request Investor Documents
                </h2>

                <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />

                <p className="text-muted leading-relaxed mb-10">
                  Subscription documents as well as the Private Placement
                  Memorandum (PPM) can be ordered through our contact page.
                  Materials are provided to qualified investors upon request.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
                >
                  Contact Us to Request
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-accent" />
                    Confidential
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-accent" />
                    Qualified investors only
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
