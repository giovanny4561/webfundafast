"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { PSEButton } from "@/components/pse-button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-fundafast.png"
            alt="FundaFast S.A.S."
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <span className="hidden text-lg font-bold text-fundafast-blue-dark sm:block">
            FundaFast
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            "children" in link ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-fundafast-text-secondary transition-colors hover:bg-fundafast-surface hover:text-fundafast-text"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-1 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-fundafast-text-secondary transition-colors hover:bg-fundafast-surface hover:text-fundafast-text"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-fundafast-text-secondary transition-colors hover:bg-fundafast-surface hover:text-fundafast-text"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <PSEButton />
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-fundafast-text-secondary lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) =>
            "children" in link ? (
              <div key={link.label}>
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-fundafast-text-secondary">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-6 py-2.5 text-sm text-fundafast-text-secondary hover:bg-fundafast-surface"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-fundafast-text-secondary hover:bg-fundafast-surface"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-4 border-t border-gray-100 pt-4">
            <PSEButton />
          </div>
        </div>
      )}
    </header>
  );
}
