import { testimonialsData, TestimonialData } from "./data/TestimonialData"



const Testimonial = ({ name, titles, testimony }: Omit<TestimonialData, "id">) => {

  return (
        <div className="review_card">
            <div className="review_item">
                <div className="name_title">
                    <h4>{name}</h4>
                    <span>{titles}</span>
                </div>
                <div className="testimony">
                    <p>{testimony}</p>
                </div>

            </div>
        </div>

  )
}

const Testimonials = () => {
  return (
    <div className="review_marquee">
      {testimonialsData.map((testimonial) => (
        <Testimonials key={testimonial.id} name={testimonial.name} titles={testimonial.titles} testimony={testimonial.testimony} />
      ))}
    </div>
  )
}

export default Testimonials