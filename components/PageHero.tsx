import Header from '@/components/Header';

export default function Hero() {
  return (
    <section className="bg-foreground m-[20px] rounded-[30px] p-[30px] h-[calc(90vh-40px)] relative overflow-hidden">
      <Header />

      <div className="hero_container w-100% h-100% flex items-center justify-center">
        <div className="hero_content w-100% max-w-[777px] text-center m-auto">
          <span className="hero animate_on_scroll">check out</span>
          <h1 className="animate_on_scroll">Work I’ve Built</h1>
        </div>
      </div>
    </section>
  );
}
