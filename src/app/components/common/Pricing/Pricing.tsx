"use client";

import { useState, useEffect } from "react";
import { pricingContent } from "@/app/content/pricing";
import Features from "@/app/components/common/Features/Features";
import "./Pricing.css";

export default function Pricing() {
  const [photosCount, setPhotosCount] = useState(30);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual' | 'save17%' >('monthly');

  // Calculate the progress percentage for the range input
  const calculateProgress = (value: number) => {
    const min = 20;
    const max = 500;
    return ((value - min) / (max - min)) * 100;
  };

  // Update the CSS variable when photosCount changes
  useEffect(() => {
    const progress = calculateProgress(photosCount);
    document.documentElement.style.setProperty('--range-progress', `${progress}%`);
  }, [photosCount]);

  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-medium mb-16 text-black">
            Take <span className="italic">your</span> fashion photos<br />
            to the next level
          </h1>
          
          <div className="mb-12">
            <p className="text-xl mb-6 text-gray-700">I need {photosCount} photos per month</p>
            
            {/* Slider */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <input
                type="range"
                min="20"
                max="500"
                value={photosCount}
                onChange={(e) => setPhotosCount(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>20</span>
                <span>500+</span>
              </div>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <button
                className={`px-4 py-2 rounded-full ${
                  billingCycle === 'monthly'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  billingCycle === 'annual'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  billingCycle === 'save17%'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setBillingCycle('save17%')}
              >
                {/* <span className="bg-gray-100 text-sm px-3 py-1 rounded-full border border-gray-300 text-gray-700"> */}
                Save 17%
              {/* </span> */}
              </button>
              
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pricingContent.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative p-6 rounded-xl border ${
                    tier.isPopular
                      ? 'border-black shadow-lg'
                      : 'border-gray-200'
                  }`}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <h3 className="text-2xl font-medium mb-2">{tier.name}</h3>
                      <p className="text-gray-600 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold">${tier.price}</span>
                        <span className="text-gray-600 ml-2">USD/Month</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{tier.billingNote}</p>
                    </div>

                    <div className="flex-grow">
                      <div className="text-center mb-4">
                        <span className="font-medium">{tier.credits} Credits</span>
                        <p className="text-sm text-gray-600">Access all to credits upfront</p>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-black mt-0.5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-600 text-left">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className={`w-full py-3 rounded-full ${
                        tier.isPopular
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                      } transition-colors duration-200`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
} 