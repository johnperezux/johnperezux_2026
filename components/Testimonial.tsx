import { testimonialsData, TestimonialData } from './data/TestimonialData';

const Testimonial = ({
  name,
  titles,
  testimony,
}: Omit<TestimonialData, 'id'>) => {
  return (
    <div
      style={{ backgroundColor: 'var(--foreground)' }}
      className="group flex review_card w-full max-w-[592px] h-[334px] rounded-[17px] 
             items-center shrink-0 border-2 border-transparent
             transition-all duration-300 ease-in-out 
             hover:border-[var(--accent)]"
    >
      <div className="review_item flex flex-col gap-[30px] p-[30px]">
        <div className="name_title">
          <h4>{name}</h4>
          <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>
            {titles}
          </span>
        </div>
        <div className="testimony">
          <p>
            <i>"{testimony}"</i>
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="review_marquee flex gap-[30px]">
      {testimonialsData.map((testimonial) => (
        <Testimonial key={testimonial.id} {...testimonial} />
      ))}
      {testimonialsData.map((testimonial) => (
        <Testimonial key={`dupe-${testimonial.id}`} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
