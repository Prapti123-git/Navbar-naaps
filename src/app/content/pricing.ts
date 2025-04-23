interface PricingTier {
  name: string;
  description: string;
  credits: number;
  price: number;
  billingNote: string;
  features: string[];
  isPopular?: boolean;
}

export const pricingContent = {
  tiers: [
    {
      name: "Lite",
      description: "A great way to explore the LookLoom platform.",
      credits: 30,
      price: 33,
      billingNote: "Billed Annually. Unlimited credit rollover",
      features: [
        "No LookLoom watermarks",
        "Limited selection of AI models",
        "Limited selection of backgrounds",
        "HD image resolution",
        "1 free photo review per credit",
        "Photo fixes ready in 4 business days",
        "Social-ready images"
      ]
    },
    {
      name: "Pro",
      description: "Perfect for businesses of all sizes",
      credits: 30,
      price: 35,
      billingNote: "Billed Annually. Unlimited credit rollover",
      isPopular: true,
      features: [
        "Includes everything in Lite, plus:",
        "Access to all models",
        "Access to all backgrounds",
        "2K image resolution",
        "2 free photo reviews per credit",
        "Photo fixes in 2 business days",
        "Support for headless images",
        "Allows uploads of flat lay images"
      ]
    },
    {
      name: "Advanced",
      description: "Best for scaling your business with extra AI features",
      credits: 30,
      price: 40,
      billingNote: "Billed Annually. Unlimited credit rollover",
      features: [
        "Includes everything in Pro, plus:",
        "4K image resolution",
        "3 free photo reviews per credit",
        "Photo fixes in 1 business day",
        "White-glove quality control",
        "Multi-user access"
      ]
    }
  ]
}; 