export interface NavLink {
  label: string;
  href: string;
  download?: boolean;
  target: string;
  rel: string;
}

export const NAV_LINKS: NavLink[] = [
  // { label: 'See My Work', href: '/work' },
  {
    label: 'Resume',
    href: '/johnperezux-resume.pdf',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
