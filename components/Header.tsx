'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LightTheme } from './dark_light_mode';
import { DarkTheme } from './dark_light_mode';
import {Logo} from "@/components/Logo";


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
              <Logo className="header_logo" />
            </a>
          </div>

          <div className="header_links_container flex flex-row gap-[60px]">
            {/* <a className="hero_link" href="https://www.linkedin.com/in/johnperezux/" target="_blank" rel="noopener noreferrer">
              <span className="bright_dot hero_link flex items-center">Available for Hire</span>
            </a> */}
            <a className="hero_link" href="#work"><span>See My Work</span></a>

            <div className="theme_toggle_container">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
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
        </div>
      </nav>
    </header>
  );
}
