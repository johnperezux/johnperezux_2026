import Header from "@/components/Header";
import {ScrollMouse} from "@/components/ScrollMouse";

export default function Hero() {
  return (
    <section className="bg-foreground m-[20px] rounded-[30px] p-[30px] h-[calc(100vh-40px)] relative overflow-hidden">
  <Header />
      <div className="mouse_scroll_box absolute top-[40%]">
        <span className="line" />
        <ScrollMouse />
      </div>

  <div className="hero_container w-100% h-100% flex items-center justify-center">
    <div className="hero_content w-100% max-w-[777px] text-center">
        <span className="h3ero">Designer & Developer</span>
        <h1>Johnathan Perez</h1>
        <p className="hero">Designing intuitive experiences and building scalable web solutions across WordPress and full-stack development.</p>
        <a href="#projects" className="hero_button">View Projects</a>

        
    </div>
  </div>



</section>
  );
}