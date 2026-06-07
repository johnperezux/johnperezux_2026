import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Cards from "@/components/Cards";
import Work from "@/components/Work";
import TextBlock from "@/components/TextBlock";

export default function Home() {
  return (
    <main className="main_content">
      <Hero />
      { /* Intro Section */ }
      <section className="intro_section">
        <div className="intro_container container margin_top_container" id="about_me">
            <TextBlock
                heading="I Build Websites for a living"
                spanText="Build"
                spanColor="var(--accent)"
                paragraph="I Graduated From The University Of Central Florida With A Bachelor's Degree In Web & Social Platforms. Throughout My Journey In School, I Learned How To Develop Websites Using Coding Languages And Various Frameworks."
                cta={<Button className="default" label="Let’s Connect" href="#projects" />}
              />
              <div className="see_work_container mt-[1px] flex items-center justify-center flex-col gap-[15px]">
              <span className="see_work_line"></span>
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
        <div className="work_container container margin_top_container">
          <div className="container_content work_content">
             <div className="container_content intro_content">
               <TextBlock
                heading="Check Out My Work"
                spanText="Work"
                spanColor="var(--accent)"
                paragraph="I Graduated From The University Of Central Florida With A Bachelor's Degree In Web & Social Platforms. Throughout My Journey In School, I Learned How To Develop Websites Using Coding Languages And Various Frameworks."
              />
              <Work/>
              <div className="m-auto text-center">
                <Button className="default" label="Let’s Connect" href="#projects" />
              </div>
            </div>
          </div>
        </div>

      </section>
      

    </main>
  );
}  
