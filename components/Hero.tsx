import Header from '@/components/Header';
import { ScrollMouse } from '@/components/ScrollMouse';

export default function Hero() {
  return (
    <section className="bg-foreground m-[20px] rounded-[30px] p-[30px] h-[calc(100vh-40px)] relative overflow-hidden">
      <Header />
      <div className="mouse_scroll_box absolute top-[40%]">
        <span className="line" />
        <ScrollMouse className="mouse_scroll_svg overflow-visible" />
      </div>

      <div className="hero_container w-100% h-100% flex items-center justify-center">
        <div className="hero_content w-100% max-w-[777px] text-center m-auto">
          <span className="hero animate_on_scroll">Designer & Developer</span>
          <h1 className="animate_on_scroll">Johnathan Perez</h1>
          <p className="hero animate_on_scroll">
            Designing intuitive experiences and building scalable web solutions
            across WordPress and full-stack development.
          </p>
          <a href="#projects" className="hero_button animate_on_scroll">
            <span className="button_text">See what i've built</span>
            <span className="button_arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
