'use client';

import { useState, useEffect, useCallback } from 'react';
import { Logo } from '@/components/Logo';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links?: NavLink[];
  drawerSide?: 'right' | 'right';
  ctaLabel?: string;
  ctaHref?: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function MobileNav({
  links = NAV_LINKS,
  drawerSide = 'right',
  ctaLabel,
  ctaHref,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-drawer"
        className="mobile-nav-trigger"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* ── Backdrop ── */}
      {isOpen && (
        <div
          onClick={close}
          aria-hidden="true"
          className="mobile-nav-backdrop"
        />
      )}

      <nav
        id="mobile-drawer"
        aria-label="Mobile navigation"
        className={`mobile-nav-drawer mobile-nav-drawer--${drawerSide} ${isOpen ? 'is-open' : ''}`}
      >
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <button
            onClick={close}
            aria-label="Close menu"
            className="drawer-close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="drawer-links" role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hero_link drawer-link" onClick={close}>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {ctaLabel && ctaHref && (
          <div className="drawer-cta">
            <Link href={ctaHref} className="hero_link" onClick={close}>
              <span>{ctaLabel}</span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
