'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LightTheme } from './dark_light_mode';
import { DarkTheme } from './dark_light_mode';
import { Logo } from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';
import { NAV_LINKS } from '@/components/data/HeaderData';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const enteredFromRight = e.clientX > rect.left + rect.width / 2;
    e.currentTarget.style.setProperty(
      '--origin',
      enteredFromRight ? 'right' : 'left',
    );
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const exitedFromRight = e.clientX > rect.left + rect.width / 2;
    e.currentTarget.style.setProperty(
      '--origin',
      exitedFromRight ? 'right' : 'left',
    );
  };

  return (
    <header>
      <nav>
        <div className="header_container flex justify-between flex-row items-center">
          <div className="header_logo_container">
            <a href="#home">
              <Logo className="header_logo" />
            </a>
          </div>

          <div className="header_links_container flex flex-row gap-[60px]">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                className="hero_link desktop"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href={href}
              >
                <span>{label}</span>
              </a>
            ))}

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
          </div>

          <div className="hamburger_menu_container" />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
