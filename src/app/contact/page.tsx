"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedIcon from "@/components/AnimatedIcon";
import { MapPin, Mail, ExternalLink, Building2, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch to learn more about our investment platform and maritime operations."
        breadcrumb="Get in Touch"
        image="/images/2.jpg"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                Contact
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Let&apos;s Start a Conversation
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="rounded-2xl border border-border/60 bg-white p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <AnimatedIcon icon={Building2} size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      Bulkers Pool Group AG
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <AnimatedIcon icon={MapPin} size={18} className="text-primary" delay={100} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Registered Address
                        </p>
                        <p className="text-sm text-muted mt-1 leading-relaxed">
                          Gotthardstrasse 26<br />
                          6300 Zug, Switzerland
                        </p>
                        <p className="text-xs text-muted/60 mt-1 font-mono">
                          CH-170.3.050.501-3
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-border/40" />

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <AnimatedIcon icon={Mail} size={18} className="text-primary" delay={200} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Email
                        </p>
                        <a
                          href="mailto:info@bulkerspool.com"
                          className="text-sm text-primary hover:text-primary-light transition-colors mt-1 block"
                        >
                          info@bulkerspool.com
                        </a>
                      </div>
                    </div>

                    <div className="w-full h-px bg-border/40" />

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <AnimatedIcon icon={ExternalLink} size={18} className="text-primary" delay={300} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          LinkedIn
                        </p>
                        <a
                          href="https://www.linkedin.com/company/bulkerspoolgroup"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary-light transition-colors mt-1 block"
                        >
                          Bulkers Pool Group
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* SPV */}
              <ScrollReveal delay={200}>
                <div className="rounded-2xl border border-border/60 bg-white p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <AnimatedIcon icon={Building2} size={20} className="text-accent" delay={400} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        Navischart GmbH
                      </h3>
                      <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                        SPV
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <AnimatedIcon icon={MapPin} size={18} className="text-primary" delay={500} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Registered Address
                      </p>
                      <p className="text-sm text-muted mt-1 leading-relaxed">
                        Seeblick 1<br />
                        6330 Cham, Switzerland
                      </p>
                      <p className="text-xs text-muted/60 mt-1 font-mono">
                        CH-170.4.024.395-1
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal delay={150}>
              <div className="rounded-2xl border border-border/60 bg-white p-8 lg:p-10">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Send a Message
                </h2>
                <p className="text-sm text-muted mb-8 leading-relaxed">
                  Fill out the form below and our team will respond promptly.
                </p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200">
                      <option>General Inquiry</option>
                      <option>Investment Information</option>
                      <option>Request Investor Materials</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your interest..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors duration-300"
                  >
                    Send Message
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
