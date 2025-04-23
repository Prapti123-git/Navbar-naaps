"use client";

import Image from "next/image";
import { heroContent } from "@/app/content/hero";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {heroContent.title.main}{" "}
            <span className="highlight">{heroContent.title.highlight}</span>{" "}
            {heroContent.title.end}
          </h1>
          <p className="hero-description">{heroContent.description}</p>
          <div className="hero-buttons">
            <a href={heroContent.buttons.primary.link} className="hero-button primary">
              {heroContent.buttons.primary.text}
            </a>
            <a href={heroContent.buttons.secondary.link} className="hero-button secondary">
              <img
                src={heroContent.buttons.secondary.icon}
                alt="Shopify icon"
                className="button-icon"
              />
              {heroContent.buttons.secondary.text}
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            className="hero-image"
          />
          <div className="hero-watermark">{heroContent.watermark}</div>
        </div>
      </div>
    </section>
  );
} 