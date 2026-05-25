import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header_container flex justify-between flex-row items-center">
          <div className="header_logo_container">
            <a href="#home">
            <Image
              src="/jp_logo.svg"
              alt="John Perez logo"
              width={80}
              height={80}
            />
            </a>
          </div>
          <div className="header_links_container flex flex-row gap-[60px]">
            <span className="bright_dot hero_link flex items-center">I'm Available to Work</span>
            <a className="hero_link" href="#work"><span>Let's Connect</span></a>
            <a className="hero_link" href="#work"><span>See my Work</span></a>
          </div>
        </div>
      </nav>
    </header>
  );
}
