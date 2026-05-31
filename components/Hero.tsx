import Header from "@/components/Header";
import {ScrollMouse} from "@/components/ScrollMouse";

export default function Hero() {
  return (
    <section className="bg-foreground m-[20px] rounded-[30px] p-[30px] h-[calc(100vh-40px)] relative">
        <Header />

        <div className="hero_container">
          <div className="hero_text_container">
           <div className="mouse_scroll_box absolute top-[40%]">
              <span className="line" />
              <ScrollMouse />
          </div>
          </div>
        </div>

      
        
    

    </section>
  );
}