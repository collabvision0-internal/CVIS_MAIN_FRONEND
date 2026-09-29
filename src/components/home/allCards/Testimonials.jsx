
import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    review:
      "I’m very happy with the website created by Collab Vision. The website is responsive, modern, and has attractive animations. Great work and professional service.",
    rating: 5,
    name: "Om Shetty",
    company: "TheVision9",
    website: "https://www.thevision9.com",
    websiteLabel: "www.thevision9.com",
  },
  {
    id: 2,
    review:
      "Collab Vision did a great job creating our education website for students in Singapore. The website is user-friendly, professional, and works smoothly on different devices. Highly recommended.",
    rating: 5,
    name: "Peter",
    company: "Plenrich",
    website: "https://www.plenrich.com",
    websiteLabel: "www.plenrich.com",
  },
  {
    id: 3,
    review:
      "I am very satisfied with Collab Vision’s work. They developed an Android and iOS app for my Gold Jewellery Retail and Girvi Software. The app is easy to use and works very well.",
    rating: 5,
    name: "Raju Hanamasagar",
    company: "Gold Jewellery Retail & Girvi Software",
    website: "",
    websiteLabel: "",
  },
  {
    id: 4,
    review:
      "I am very satisfied with the work done by Collab Vision. They understood our requirements and created a professional website for Lakeview Hospitals. Thank you for the excellent service.",
    rating: 5,
    name: "Dr. Girish K. Sonwalkar",
    company: "Lakeview Hospitals",
    website: "https://lakeviewhospitals.in",
    websiteLabel: "lakeviewhospitals.in",
  },
  {
    id: 5,
    review:
      "I am very satisfied with Collab Vision’s work on my website. They created a professional and attractive website that represents my holistic healing services beautifully. Thank you for the great work.",
    rating: 5,
    name: "Dr. Uma Patil",
    company: "Holistic Healing",
    website: "https://drumapatilholistichealing.com/",
    websiteLabel: "drumapatilholistichealing.com",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card-quote" aria-hidden="true">
        “
      </div>

      <p className="testimonial-card-review">
        {testimonial.review}
      </p>

      <div className="testimonial-card-footer">
        <div
          className="testimonial-card-rating"
          role="img"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }, (_, index) => (
            <span key={index} aria-hidden="true">
              ★
            </span>
          ))}
        </div>

        <h3 className="testimonial-card-name">
          {testimonial.name}
        </h3>

        <p className="testimonial-card-company">
          {testimonial.company}
        </p>

        {testimonial.website && (
          <a
            className="testimonial-card-link"
            href={testimonial.website}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
          >
            {testimonial.websiteLabel}
          </a>
        )}
      </div>
    </article>
  );
};

const Testimonials = () => {
  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <div className="testimonials-header">
        <span className="testimonials-subtitle">
          CLIENT TESTIMONIALS
        </span>

        <h2 id="testimonials-heading">
          What Our Customers Say?
        </h2>

        <p>
          Discover what our clients say about their experience
          with Collab Vision.
        </p>
      </div>

      <div className="testimonials-marquee">
        <div className="testimonials-marquee-track">
          {/* Original testimonial cards */}
          <div className="testimonials-marquee-group">
            {testimonials.map((testimonial) => (
              <div
                className="testimonials-marquee-item"
                key={testimonial.id}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Duplicate group creates a seamless animation loop */}
          <div
            className="testimonials-marquee-group"
            aria-hidden="true"
          >
            {testimonials.map((testimonial) => (
              <div
                className="testimonials-marquee-item"
                key={`duplicate-${testimonial.id}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;