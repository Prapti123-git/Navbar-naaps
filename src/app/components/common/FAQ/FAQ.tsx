"use client";

import { useState } from "react";
import { faqData, faqContent } from "@/app/content/faq";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">
          {faqContent.title} <span className="faq-title-italic">{faqContent.titleItalic}</span>
        </h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleAnswer(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="faq-see-all">
          <a href={faqContent.seeAllLink} className="see-all-link">
            {faqContent.seeAllText}
          </a>
        </div>
      </div>
    </section>
  );
} 