"use client";

import { howItWorksContent } from "@/app/content/how-it-works";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">
            {howItWorksContent.title}{" "}
            <span className="highlight">{howItWorksContent.titleHighlight}</span>{" "}
            {howItWorksContent.titleEnd}
          </h2>
          <p className="how-it-works-subtitle">{howItWorksContent.subtitle}</p>
        </div>

        <div className="steps-container">
          {howItWorksContent.steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-content">
                <div className="step-number">{step.number}.</div>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="demo-container">
          <div className="video-wrapper">
            <video
              className="demo-video"
              poster={howItWorksContent.demoVideo.thumbnail}
              controls
              aria-label="LookLoom app interface demonstration"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="cta-buttons">
          <a href={howItWorksContent.ctaButtons.primary.link} className="cta-button primary">
            {howItWorksContent.ctaButtons.primary.text}
          </a>
          <a href={howItWorksContent.ctaButtons.secondary.link} className="cta-button secondary">
            <img
              src={howItWorksContent.ctaButtons.secondary.icon}
              alt="Shopify icon"
              className="button-icon"
            />
            {howItWorksContent.ctaButtons.secondary.text}
          </a>
        </div>
      </div>
    </section>
  );
} 