"use client";

import Link from "next/link";
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
      {
        href: "/investment-platform/why-maritime-assets",
        label: "Why Maritime Assets",
      },
      {
        href: "/investment-platform/investment-strategy",
        label: "Investment Strategy",
      },
      {
        href: "/investment-platform/structure-investor-protection",
        label: "Structure & Protection",
      },
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
      className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-border bg-white shadow-lg py-2 z-50"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-section-alt transition-colors"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-primary leading-tight">
                BPG
              </span>
              <span className="text-[10px] text-muted font-medium uppercase tracking-widest leading-tight">
                Bulkers Pool Group
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.href ? null : link.href
                        )
                      }
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md"
                    >
                      {link.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${openDropdown === link.href ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
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
                    className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-4 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-foreground/70 hover:text-primary py-2.5"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 border-l-2 border-border ml-2 mb-2">
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
              className="rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary-light mt-3"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
