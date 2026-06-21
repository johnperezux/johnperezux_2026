interface ButtonProps {
  label: string;
  href: string;
  className?: string;
  variant?: 'hero' | 'default';
  target?: string;
}

export default function Button({
  label,
  href,
  className,
  variant = 'default',
  target,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      className={`hero_button ${className ?? `button--${variant}`}`}
    >
      <span className="button_text">{label}</span>
      <span className="button_arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </span>
    </a>
  );
}
