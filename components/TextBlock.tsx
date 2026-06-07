interface BlockProps {
  heading: string;
  spanText?: string;
  spanColor?: string;
  paragraph?: string;
  className?: string;
  cta?: React.ReactNode;
}

export default function TextBlock({
  heading,
  spanText,
  spanColor = "var(--accent)",
  paragraph,
  className,
  cta,
}: BlockProps) {
  const renderHeading = () => {
    if (!spanText) return heading;

    const parts = heading.split(spanText);
    return (
      <>
        {parts[0]}
        <span style={{ color: spanColor }}>{spanText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`w-full max-w-[777px] m-auto text-center ${className ?? ""}`}>
      <h2>{renderHeading()}</h2>
      {paragraph && <p className="intro_text mb-[60px]">{paragraph}</p>}
      {cta && cta}
    </div>
  );
}