'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { NAV_LINKS } from '@/components/data/HeaderData';
import { LightTheme } from './dark_light_mode';
import { DarkTheme } from './dark_light_mode';

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links?: NavLink[];
  drawerSide?: 'left' | 'right';
  ctaLabel?: string;
  ctaHref?: string;
}

export default function MobileNav({
  links = NAV_LINKS,
  drawerSide = 'right',
  ctaLabel,
  ctaHref,
}: MobileNavProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

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

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-drawer"
        className="mobile-nav-trigger"
      >
        <span className="bar one" />
        <span className="bar two" />
        <span className="bar three" />
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
          <div className="theme_toggle_container flex items-center">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <LightTheme className="theme_icon" />
                ) : (
                  <DarkTheme className="theme_icon" />
                )}
              </button>
            )}
          </div>
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
