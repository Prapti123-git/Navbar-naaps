export interface Step {
  number: number;
  title: string;
  description: string;
}

export const howItWorksContent = {
  title: "How",
  titleHighlight: "LookLoom",
  titleEnd: "Works",
  subtitle: "No creative skills required - just a few clicks and you've got realistic stunning photos. Experience the magic of LookLoom's AI-powered fashion photography today.",
  steps: [
    {
      number: 1,
      title: "Upload",
      description: "Upload the images of your products"
    },
    {
      number: 2,
      title: "Transform",
      description: "Select the model and background"
    },
    {
      number: 3,
      title: "Share",
      description: "Add to your website, social media profile or digital campaign"
    }
  ],
  demoVideo: {
    url: "https://cdn.prod.website-files.com/66fa67b1f207f846cd05b5a1/67768b99d40d49c1a56565bf_Botika_Homepage_AIGeneratedModelsforFashion_CreateProductPhotosQuickly.avif", // Replace with actual video URL
    thumbnail: "https://cdn.prod.website-files.com/66fa67b1f207f846cd05b5a1/67768b99d40d49c1a56565bf_Botika_Homepage_AIGeneratedModelsforFashion_CreateProductPhotosQuickly.avif"
  },
  ctaButtons: {
    primary: {
      text: "Try Now",
      link: "#"
    },
    secondary: {
      text: "Available on Shopify App Store",
      link: "#",
      icon: "/images/shopify-icon.png"
    }
  }
}; 