"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { isConfigured, navItems, profile } from "@/config/profile";

function CvButton({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md border px-3.5 py-2 text-sm font-medium transition-colors";
  if (isConfigured(profile.links.cv)) {
    return (
      <a
        href={profile.links.cv}
        download
        onClick={onClick}
        className={`${base} border-accent/50 text-accent hover:bg-accent/10 ${className}`}
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download CV
      </a>
    );
  }
  return (
    <button
      type="button"
      disabled
      title="CV not available yet. Set the file path in src/config/profile.ts"
      className={`${base} cursor-not-allowed border-dashed border-slate-600 text-slate-500 ${className}`}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      Download CV
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "border-white/10 bg-ink-900/85 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-white">
          {profile.name.toLowerCase()}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CvButton />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-300 hover:bg-white/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink-900 md:hidden">
          <ul className="mx-auto flex max-w-content flex-col px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <CvButton className="w-full" onClick={() => setOpen(false)} />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
