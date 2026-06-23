'use client';

import Hero from '@/components/Hero';
import Button from '@/components/Button';
import Cards from '@/components/Cards';
import Work from '@/components/Work';
import Testimonial from '@/components/Testimonial';
import TextBlock from '@/components/TextBlock';
import ConnectFooter from '@/icons/ConnectFooter';
import { useInView } from '@/app/hooks/useInView';

export default function Home() {
  const { ref, inView } = useInView();

  return (
    <main className="main_content">
      <Hero />
      {/* Intro Section */}
      <section className="intro_section">
        <div
          className="intro_container container margin_top_container"
          id="about_me"
        >
          <TextBlock
            heading="I Build Websites for a living"
            spanText="Build"
            spanColor="var(--accent)"
            paragraph="I Graduated From The University Of Central Florida With A Bachelor's Degree In Web & Social Platforms. Throughout My Journey In School, I Learned How To Develop Websites Using Coding Languages And Various Frameworks."
            cta={
              <Button
                className="default"
                label="Let's Connect"
                href="#projects"
              />
            }
          />
          <div
            ref={ref}
            className="see_work_container mt-[1px] flex items-center justify-center flex-col gap-[15px]"
          >
            <span className={`see_work_line ${inView ? 'animate' : ''}`}></span>
          </div>
        </div>
      </section>
      {/* Tools Section */}
      <section className="tools_section" id="tools">
        <div className="tools_container container">
          <Cards />
        </div>
      </section>
      {/* Work Section */}
      <section className="work_section" id="work">
        <div className="work_container container margin_top_container">
          <div className="container_content work_content">
            <div className="container_content intro_content">
              <TextBlock
                heading="Explore My Portfolio"
                spanText="Portfolio"
                spanColor="var(--accent)"
                paragraph="I Graduated From The University Of Central Florida With A Bachelor's Degree In Web & Social Platforms. Throughout My Journey In School, I Learned How To Develop Websites Using Coding Languages And Various Frameworks."
              />
              <Work />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="testimonial_section" id="testimonial">
        <div className="testimonial_container container margin_top_container">
          <TextBlock
            heading="Client Stories"
            spanText="Stories"
            spanColor="var(--accent)"
          />
        </div>
        <Testimonial />
      </section>
      {/* Let's Connect Section */}
      <section className="connect_section" id="connect">
        <div className="connect_container container margin_top_container">
          <TextBlock
            heading="Let's Connect on LinkedIn"
            spanText="LinkedIn"
            spanColor="var(--accent)"
            paragraph="Looking for a developer who can bridge the gap between stunning design and clean code? I'm currently available for freelance contracts and full-time opportunities. Let's connect to discuss how I can help bring your next digital product to life."
            cta={
              <Button
                className="default mb-[60px]"
                label="Let's Connect"
                href="https://www.linkedin.com/in/johnperezux/"
                target="_blank"
              />
            }
          />
          <div className="after_content_svg">
            <ConnectFooter />
          </div>
        </div>
      </section>
    </main>
  );
}
