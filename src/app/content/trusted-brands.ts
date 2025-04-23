export interface Metric {
  value: string;
  label: string;
}

export interface Brand {
  name: string;
  logo: string;
  alt: string;
}

export const trustedBrandsContent = {
  title: "Trusted by thousands of fashion brands",
  metrics: [
    {
      value: "-90%",
      label: "Visual production costs"
    },
    {
      value: "3x",
      label: "Faster time to market"
    },
    {
      value: "+10%",
      label: "In conversion rates"
    },
    {
      value: "+12%",
      label: "Average order value"
    },
    {
      value: "+30%",
      label: "In ad click-through rates"
    }
  ],
  brands: [
    // Row 1
    { name: "Dot Com", logo: "/images/brands/dot-com.png", alt: "Dot Com logo" },
    { name: "BLVCK", logo: "/images/brands/blvck.png", alt: "BLVCK Paris logo" },
    { name: "Felipe Albernaz", logo: "/images/brands/felipe-albernaz.png", alt: "Felipe Albernaz logo" },
    { name: "Nil+Mon", logo: "/images/brands/nil-mon.png", alt: "Nil+Mon logo" },
    { name: "One33 Social", logo: "/images/brands/one33-social.png", alt: "One33 Social logo" },
    { name: "Rare", logo: "/images/brands/rare.png", alt: "Rare logo" },
    { name: "Snapdeal", logo: "/images/brands/snapdeal.png", alt: "Snapdeal logo" },
    
    // Row 2
    { name: "Loulou", logo: "/images/brands/loulou.png", alt: "Loulou logo" },
    { name: "Meotine", logo: "/images/brands/meotine.png", alt: "Meotine logo" },
    { name: "Lavinia", logo: "/images/brands/lavinia.png", alt: "Lavinia logo" },
    { name: "Ender Legard", logo: "/images/brands/ender-legard.png", alt: "Ender Legard logo" },
    { name: "Derive", logo: "/images/brands/derive.png", alt: "Derive logo" },
    { name: "Hope", logo: "/images/brands/hope.png", alt: "Hope logo" },
    
    // Row 3
    { name: "Copperose", logo: "/images/brands/copperose.png", alt: "Copperose logo" },
    { name: "Like A Party", logo: "/images/brands/like-a-party.png", alt: "Like A Party logo" },
    { name: "NKSW", logo: "/images/brands/nksw.png", alt: "NKSW logo" },
    { name: "Nogin", logo: "/images/brands/nogin.png", alt: "Nogin logo" },
    { name: "Salty Crush", logo: "/images/brands/salty-crush.png", alt: "Salty Crush logo" },
    { name: "LM", logo: "/images/brands/lm.png", alt: "LM logo" },
    { name: "Hipland", logo: "/images/brands/hipland.png", alt: "Hipland logo" },
    { name: "Fionna", logo: "/images/brands/fionna.png", alt: "Fionna logo" },
    { name: "Promoda", logo: "/images/brands/promoda.png", alt: "Promoda logo" }
  ]
}; 