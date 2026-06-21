'use client';

import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import { useInView } from '@/app/hooks/useInView';

export default function Home() {
  const { ref, inView } = useInView();

  return (
    <main className="main_content">
      <PageHero />
    </main>
  );
}
