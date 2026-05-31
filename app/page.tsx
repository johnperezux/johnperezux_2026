import Hero from "@/components/Hero";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="main_content">
      <Hero />
      { /* Intro Section */ }
      <section className="intro_section">
        <div className="intro_container container">
            <div className="w-100% max-w-[777px] text-center intro_content">
              <h2>I <span style={{ color: 'var(--accent)' }}>Build</span> Websites for a living</h2>
              <p className="intro_text mb-[60px]">I graduated from the University of Central Florida with a Bachelor's degree in Web & Social Platforms. Throughout my time there, I developed a strong foundation in web development, working with various coding languages and frameworks to build modern websites.</p>
             <Button label="See my work" href="#projects" />
          </div>
        </div>  
      </section>
    </main>
  );
}  
