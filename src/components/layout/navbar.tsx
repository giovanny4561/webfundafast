"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, CreditCard } from "lucide-react";
import { NAV_LINKS, PSE_URL } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white border-b border-slate-100"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/logo-fundafast.png"
            alt="FundaFast"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <div className="hidden sm:block">
            <span className="block text-base font-bold leading-tight text-ff-blue-dark">FundaFast</span>
            <span className="block text-[10px] font-normal text-ff-text-muted leading-none tracking-wide uppercase">Su Socio en el Desarrollo</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) =>
            "children" in link ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                  className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-ff-text-muted transition-colors hover:bg-ff-surface hover:text-ff-blue"
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-44 rounded-xl border border-slate-100 bg-white p-1.5 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center rounded-lg px-3.5 py-2.5 text-sm text-ff-text-muted transition-colors hover:bg-ff-surface hover:text-ff-blue"
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
                className="rounded-md px-3.5 py-2 text-sm font-medium text-ff-text-muted transition-colors hover:bg-ff-surface hover:text-ff-blue"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={PSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-ff-blue px-4 py-2 text-sm font-semibold text-ff-blue transition-all hover:bg-ff-blue hover:text-white sm:flex"
          >
            <CreditCard className="h-3.5 w-3.5" />
            Pagar PSE
          </a>
          <Link
            href="/creditos"
            className="rounded-lg bg-ff-red px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-ff-red-hover hover:shadow-md"
          >
            Solicitar Crédito
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-ff-text-muted transition-colors hover:bg-ff-surface lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <div className="space-y-0.5">
            {NAV_LINKS.map((link) =>
              "children" in link ? (
                <div key={link.label}>
                  <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-ff-text-muted">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-5 py-2.5 text-sm font-medium text-ff-text hover:bg-ff-surface"
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
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ff-text hover:bg-ff-surface"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <a
              href={PSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-ff-blue py-2.5 text-sm font-semibold text-ff-blue"
            >
              <CreditCard className="h-4 w-4" /> Pagar PSE
            </a>
            <Link
              href="/creditos"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-lg bg-ff-red py-2.5 text-sm font-semibold text-white"
            >
              Solicitar Crédito
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
