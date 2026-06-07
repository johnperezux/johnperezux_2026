import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Cards from "@/components/Cards";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="main_content">
      <Hero />
      { /* Intro Section */ }
      <section className="intro_section">
        <div className="intro_container container" id="about_me">
            <div className="w-100% max-w-[777px] text-center container_content intro_content">
              <h2>I <span style={{ color: 'var(--accent)' }}>Build</span> Websites for a living</h2>
              <p className="intro_text mb-[60px]">I graduated from the University of Central Florida with a Bachelor's degree in Web & Social Platforms. Throughout my time there, I developed a strong foundation in web development, working with various coding languages and frameworks to build modern websites.</p>
             <Button className="default" label="Let's Connect" href="#projects" />
             <div className="see_work_container mt-[1px] flex items-center justify-center flex-col gap-[15px]">
              <span className="see_work_line"></span>
            </div>
          </div>
        </div>  
      </section>
      { /* Tools Section */ }
      <section className="tools_section" id="tools">
        <div className="tools_container container">
          <Cards/>
        </div>
      </section>
      { /* Work Section */ }
      <section className="work_section" id="work">
        <div className="work_container container">
          <div className="container_content work_content">
             <div className="container_content intro_content">
              <div className="w-100% max-w-[777px] text-center">
                <h2> Check Out My <span style={{ color: 'var(--accent)' }}>Work</span></h2>
                <p className="intro_text mb-[60px]">I graduated from the University of Central Florida with a Bachelor's degree in Web & Social Platforms. Throughout my time there, I developed a strong foundation in web development, working with various coding languages and frameworks to build modern websites.</p>
              </div>
             <Button className="default" label="See What I’ve Built" href="#projects" />
              <Work/>

            
          </div>
          </div>
        </div>

      </section>
      

    </main>
  );
}  
