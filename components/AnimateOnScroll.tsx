'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms, for stagger control
}

export function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate_on_scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
