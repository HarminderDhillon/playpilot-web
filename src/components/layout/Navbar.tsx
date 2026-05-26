'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Early Access', href: '/pricing' },
];

const forYouItems = [
  {
    label: 'Educators',
    href: '/for-educators',
    icon: '🎨',
    description: 'Capture moments without losing presence.',
  },
  {
    label: 'Families',
    href: '/for-families',
    icon: '🏡',
    description: 'Stay connected to your child\'s journey.',
  },
  {
    label: 'Leaders',
    href: '/for-leaders',
    icon: '🌿',
    description: 'Guide educators and strengthen quality.',
  },
  {
    label: 'Admin & Operations',
    href: '/for-admin',
    icon: '📋',
    description: 'Clarity across reporting and systems.',
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [forYouOpen, setForYouOpen] = useState(false);
  const [forYouMobileOpen, setForYouMobileOpen] = useState(false);

  const enterTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = useCallback(() => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
    enterTimeout.current = setTimeout(() => setForYouOpen(true), 100);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
      enterTimeout.current = null;
    }
    leaveTimeout.current = setTimeout(() => setForYouOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (enterTimeout.current) clearTimeout(enterTimeout.current);
      if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-divider bg-surface/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text-on-primary"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 sm:py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-plane.png" alt="PlayPilot" width={160} height={107} priority className="w-20 h-auto sm:w-40 object-contain" />
          <span className="text-xl sm:text-3xl font-bold text-primary">PlayPilot</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {/* Home */}
          <Link
            href="/"
            className="text-base font-medium text-text-secondary transition-colors hover:text-primary"
          >
            Home
          </Link>

          {/* For You dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-base font-medium text-text-secondary transition-colors hover:text-primary"
              onClick={() => setForYouOpen((prev) => !prev)}
              aria-expanded={forYouOpen}
              aria-haspopup="true"
            >
              For You
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${forYouOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {forYouOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 bg-surface/95 backdrop-blur-md border border-divider rounded-xl shadow-lg p-3">
                {forYouItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setForYouOpen(false)}
                    className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-primary/5"
                  >
                    <span className="mt-0.5 text-base leading-none" aria-hidden="true">{item.icon}</span>
                    <div>
                      <span className="block text-sm font-semibold text-text">{item.label}</span>
                      <span className="block text-xs text-text-secondary mt-0.5">{item.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining nav links: Features, About, Blog, Early Access */}
          {navLinks.filter((link) => link.label !== 'Home').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

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
          className="flex flex-col gap-1 lg:hidden p-2"
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
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-4 text-sm font-medium text-text-secondary"
          >
            Home
          </Link>

          {/* For You accordion */}
          <button
            onClick={() => setForYouMobileOpen((prev) => !prev)}
            className="flex w-full items-center justify-between py-4 text-sm font-medium text-text-secondary"
            aria-expanded={forYouMobileOpen}
          >
            For You
            <svg
              className={`h-3.5 w-3.5 transition-transform duration-200 ${forYouMobileOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {forYouMobileOpen && (
            <div className="pl-6 pb-2">
              {forYouItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-start gap-3 py-3"
                >
                  <span className="mt-0.5 text-sm leading-none" aria-hidden="true">{item.icon}</span>
                  <div>
                    <span className="block text-sm font-semibold text-text">{item.label}</span>
                    <span className="block text-xs text-text-secondary mt-0.5">{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Remaining nav links */}
          {navLinks.filter((link) => link.label !== 'Home').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-sm font-medium text-text-secondary"
            >
              {link.label}
            </Link>
          ))}

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
