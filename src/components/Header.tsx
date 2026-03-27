"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    children: [
      { href: "/about/who-we-are", label: "Who We Are" },
      { href: "/about/what-we-do", label: "What We Do" },
      { href: "/about/partners", label: "Our Partners" },
    ],
  },
  {
    href: "/investment-platform",
    label: "Investment Platform",
    children: [
      { href: "/investment-platform/swiss-amc", label: "Swiss AMC" },
      { href: "/investment-platform/why-maritime-assets", label: "Why Maritime Assets" },
      { href: "/investment-platform/investment-strategy", label: "Investment Strategy" },
      { href: "/investment-platform/structure-investor-protection", label: "Structure & Protection" },
      { href: "/investment-platform/documents", label: "Investor Materials" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/glossary", label: "Glossary" },
  { href: "/contact", label: "Contact" },
];

function DropdownMenu({
  items,
  open,
  onClose,
}: {
  items: { href: string; label: string }[];
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-xl border border-border/80 bg-white shadow-xl shadow-black/5 py-2 z-50 animate-dropdown"
    >
      <style>{`@keyframes dropdownIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } } .animate-dropdown { animation: dropdownIn 200ms ease forwards; }`}</style>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block px-5 py-2.5 text-[13px] text-foreground/70 hover:text-primary hover:bg-section-alt/60 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroPage, setIsHeroPage] = useState(false);

  useEffect(() => {
    // Detect if current page has a dark hero (home page)
    setIsHeroPage(window.location.pathname === "/");
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-hero pages, always show solid header
  const showSolid = scrolled || !isHeroPage;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        showSolid
          ? "bg-white/95 backdrop-blur-xl shadow-sm shadow-black/5 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <Image
              src={showSolid ? "/logo/bpg_logo.svg" : "/logo/bpg_logo_white.svg"}
              alt="BPG Logo"
              width={120}
              height={40}
              className="h-9 w-auto transition-all duration-500"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.href ? null : link.href)
                      }
                      className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                        showSolid
                          ? "text-foreground/60 hover:text-primary hover:bg-section-alt/60"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform ${openDropdown === link.href ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <DropdownMenu
                      items={link.children}
                      open={openDropdown === link.href}
                      onClose={() => setOpenDropdown(null)}
                    />
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3.5 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                      showSolid
                        ? "text-foreground/60 hover:text-primary hover:bg-section-alt/60"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-5 rounded-lg bg-accent px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showSolid ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-white overflow-y-auto shadow-2xl" style={{ height: "calc(100vh - 80px)" }}>
          <nav className="flex flex-col px-6 py-5 gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[15px] font-medium text-foreground/70 hover:text-primary py-2.5"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 border-l-2 border-accent/30 ml-2 mb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-muted hover:text-primary py-2"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-white hover:bg-accent-light mt-3"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
