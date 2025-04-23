"use client";

import { featuresContent } from "@/app/content/features";
import Image from "next/image";
import "./Features.css";

export default function Features() {
  return (
    <section className="features py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-medium mb-6">
            {featuresContent.title.start}{" "}
            <span className="italic">{featuresContent.title.highlight}</span>{" "}
            {featuresContent.title.end}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {featuresContent.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuresContent.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="aspect-[4/3] relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 