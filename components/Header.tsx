'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header>
      <nav>
        <div className="header_container flex justify-between flex-row items-center">
          <div className="header_logo_container">
            <a href="#home">
              <Image
                src="/jp_logo.svg"
                alt="John Perez logo"
                width={80}
                height={80}
                loading="eager"
                style={{ height: 'auto' }}
              />
            </a>
          </div>

          <div className="header_links_container flex flex-row gap-[60px]">
            <span className="bright_dot hero_link flex items-center">I'm Available To Work</span>
            <a className="hero_link" href="#work"><span>See My Work</span></a>

            <div className="theme_toggle_container">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Image
                      src="/light.svg"
                      alt="Switch to light mode"
                      width={30}
                      height={30}
                      loading="eager"
                      style={{ height: 'auto' }}
                    />
                  ) : (
                    <Image
                      src="/dark.svg"
                      alt="Switch to dark mode"
                      width={30}
                      height={30}
                      loading="eager"
                      style={{ height: 'auto' }}
                    />
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="hamburger_menu_container" />
        </div>
      </nav>
    </header>
  );
}
