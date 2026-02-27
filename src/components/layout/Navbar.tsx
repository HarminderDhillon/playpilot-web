'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-divider bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          PlayPilot
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
          >
            Log In
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-text transition-transform ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-5 bg-text transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-text transition-transform ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-divider bg-surface px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-text-secondary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-text-on-primary"
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
}
