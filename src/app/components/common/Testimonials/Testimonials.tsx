"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials, testimonialsContent } from "@/app/content/testimonials";
import "./Testimonials.css";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          {testimonialsContent.title}{" "}
          <span className="testimonials-title-italic">
            {testimonialsContent.titleItalic}
          </span>{" "}
          {testimonialsContent.titleEnd}
        </h2>
        <p className="testimonials-subtitle">{testimonialsContent.subtitle}</p>

        <div className="testimonials-slider">
          <button
            className="slider-button prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="testimonials-content">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-item ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <div className="testimonial-image">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.author}'s testimonial`}
                    className="model-image"
                  />
                </div>
                <div className="testimonial-text">
                  <p className="quote">{testimonial.text}</p>
                  <div className="author-info">
                    <div className="author-details">
                      <p className="author-name">{testimonial.author}</p>
                      <p className="author-position">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                    {testimonial.companyLogo && (
                      <img
                        src={testimonial.companyLogo}
                        alt={`${testimonial.company} logo`}
                        className="company-logo"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="slider-button next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
} 