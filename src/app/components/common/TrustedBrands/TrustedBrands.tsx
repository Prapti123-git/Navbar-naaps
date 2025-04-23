"use client";

import { trustedBrandsContent } from "@/app/content/trusted-brands";
import "./TrustedBrands.css";

export default function TrustedBrands() {
  return (
    <section className="trusted-brands">
      <div className="trusted-brands-container">
        <h2 className="trusted-brands-title">{trustedBrandsContent.title}</h2>

        <div className="brands-grid">
          {trustedBrandsContent.brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.logo} alt={brand.alt} className="brand-logo" />
            </div>
          ))}
        </div>

        <div className="metrics-container">
          <div className="metrics-background">
            <div className="metrics-grid">
              {trustedBrandsContent.metrics.map((metric, index) => (
                <div key={index} className="metric-item">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 