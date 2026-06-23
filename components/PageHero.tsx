import Header from '@/components/Header';

export default function Hero() {
  return (
    <section className="page_hero bg-foreground m-[20px] rounded-[30px] p-[30px] relative overflow-hidden flex flex-col">
      <Header />
      <div className="hero_container w-full h-full flex items-center justify-center">
        <div className="hero_content w-full max-w-[777px] text-center m-auto">
          <span className="hero animate_on_scroll">check out</span>
          <h1 className="animate_on_scroll">Work I've Built</h1>
        </div>
      </div>
    </section>
  );
}
