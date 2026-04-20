'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Features', href: '/features' },
  { label: 'Early Access', href: '/pricing' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-divider bg-surface/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 sm:py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-plane.png" alt="PlayPilot" width={96} height={96} priority />
          <span className="text-3xl font-bold text-primary">PlayPilot</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="btn-secondary rounded-xl border border-border bg-surface px-6 py-3 text-base font-medium text-text"
          >
            Log In
          </Link>
          <Link
            href="/demo"
            className="btn-primary rounded-xl bg-primary px-7 py-3 text-base font-semibold text-text-on-primary"
          >
            Try the Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-text transition-transform ${
              mobileOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-text transition-opacity ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-text transition-transform ${
              mobileOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-divider bg-surface/95 backdrop-blur-md px-6 pb-6 pt-4 lg:hidden">
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
            className="block py-3 text-sm font-medium text-text-secondary"
          >
            Log In
          </Link>
          <Link
            href="/demo"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block btn-primary rounded-xl bg-primary px-5 py-2.5 text-center text-sm font-semibold text-text-on-primary"
          >
            Try the Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
