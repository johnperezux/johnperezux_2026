import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header_container flex justify-between flex-row">
          <div className="header_logo_container">
            <Image
              src="/jp_logo.svg"
              alt="John Perez logo"
              width={80}
              height={80}
            />
          </div>
          <div className="header_links_container flex flex-row">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
