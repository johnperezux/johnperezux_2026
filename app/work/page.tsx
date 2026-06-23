'use client';

import PageHero from '@/components/PageHero';
import { useInView } from '@/app/hooks/useInView';
import Work from '@/components/Work';
import WorkGrid from '@/components/WorkGrid';

export default function Home() {
  const { ref, inView } = useInView();

  return (
    <main className="main_content">
      <PageHero />
      {/* Work Section */}
      <section className="work_section" id="work">
        <div className="work_container container margin_top_container">
          <div className="container_content work_content">
            <div className="container_content intro_content">
              <Work />
              <WorkGrid />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
