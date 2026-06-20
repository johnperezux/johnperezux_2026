'use client';

import { useRef, useState } from 'react';
import { testimonialsData, TestimonialData } from './data/TestimonialData';
import QuoteIcon from '@/icons/QuoteIcon';

const WORD_LIMIT = 26;

const truncateText = (text: string, limit: number) => {
  const words = text.split(' ');
  if (words.length <= limit) {
    return text;
  }
  return words.slice(0, limit).join(' ') + '...';
};

const Testimonial = ({
  name,
  titles,
  testimony,
  onClick,
}: Omit<TestimonialData, 'id'> & { onClick: () => void }) => {
  const displayText = truncateText(testimony, WORD_LIMIT);
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: 'var(--foreground)' }}
      className="group flex review_card max-w-[500px] rounded-[17px] 
             items-start shrink-0 border-2 border-transparent
             transition-all duration-300 ease-in-out 
             hover:border-[var(--accent)] relative"
    >
      <div className="review_item flex flex-col gap-[30px] p-[30px] z-1 cursor-pointer">
        <div className="name_title">
          <h4>{name}</h4>
          <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>
            {titles}
          </span>
        </div>
        <div className="testimony">
          <p>
            <i>"{displayText}"</i>
          </p>
        </div>
      </div>
      <div className="quote_icon_container absolute z-[-1px] top-[30px] right-[20px]">
        <QuoteIcon className="group-hover:fill-[var(--accent)]" />{' '}
      </div>
    </div>
  );
};

const useMarquee = () => {
  const ref = useRef<HTMLDivElement>(null);

  const slowDown = () => {
    const animations = ref.current?.getAnimations();
    if (!animations) return;
    let rate = 1;
    const interval = setInterval(() => {
      rate = Math.max(0, rate - 0.05);
      animations.forEach((a) => a.updatePlaybackRate(rate));
      if (rate === 0) clearInterval(interval);
    }, 30);
  };

  const speedUp = () => {
    const animations = ref.current?.getAnimations();
    if (!animations) return;
    let rate = 0;
    const interval = setInterval(() => {
      rate = Math.min(1, rate + 0.05);
      animations.forEach((a) => a.updatePlaybackRate(rate));
      if (rate >= 1) clearInterval(interval);
    }, 30);
  };

  return { ref, slowDown, speedUp };
};

const Modal = ({
  testimonial,
  onClose,
}: {
  testimonial: TestimonialData;
  onClose: () => void;
}) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: 'var(--foreground)' }}
        className="max-w-[600px] w-full rounded-[17px] p-[30px] flex flex-col gap-[20px] relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl cursor-pointer"
        >
          &times;
        </button>
        <div className="name_title">
          <h4>{testimonial.name}</h4>
          <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>
            {testimonial.titles}
          </span>
        </div>
        <p>
          <i>"{testimonial.testimony}"</i>
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const marquee1 = useMarquee();
  const marquee2 = useMarquee();

  const [selected, setSelected] = useState<TestimonialData | null>(null);
  console.log('selected:', selected);
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="overflow-hidden">
        <div
          ref={marquee1.ref}
          onMouseEnter={marquee1.slowDown}
          onMouseLeave={marquee1.speedUp}
          className="review_marquee flex gap-[30px] w-max"
        >
          {testimonialsData.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              {...testimonial}
              onClick={() => setSelected(testimonial)}
            />
          ))}
          {testimonialsData.map((testimonial) => (
            <Testimonial
              key={`dupe-${testimonial.id}`}
              {...testimonial}
              onClick={() => setSelected(testimonial)}
            />
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={marquee2.ref}
          onMouseEnter={marquee2.slowDown}
          onMouseLeave={marquee2.speedUp}
          className="review_marquee_reverse flex gap-[30px] w-max"
        >
          {testimonialsData.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              {...testimonial}
              onClick={() => setSelected(testimonial)}
            />
          ))}
          {testimonialsData.map((testimonial) => (
            <Testimonial
              key={`dupe-${testimonial.id}`}
              {...testimonial}
              onClick={() => setSelected(testimonial)}
            />
          ))}
        </div>
      </div>
      {selected && (
        <Modal testimonial={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Testimonials;
