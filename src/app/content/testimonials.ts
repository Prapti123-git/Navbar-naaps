export interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
  companyLogo: string;
  image: string;
}

export const testimonialsContent = {
  title: "Don't take our",
  titleItalic: "word",
  titleEnd: "for it",
  subtitle: "Take a look at what our customers think about using our AI generated models for fashion"
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "LookLoom is an amazing app. The pictures look amazing and very professional. I recommend it to any fashion entrepreneur. Also, the customer service is amazing.",
    author: "Victoria af Burén",
    position: "CEO & Co-Founder",
    company: "Dérive af Burén",
    companyLogo: "/images/derive-logo.png",
    image: "https://cdn.prod.website-files.com/66fa67b1f207f846cd05b5a1/67768b992eea46ce3d813aed_Botika_Homepage_AIGeneratedModelsforFashion_SaveMoney.avif"
  },
  {
    id: 2,
    text: "I've been searching for apps to change the product images and none worked until I started using LookLoom. It's unbelievable and does the job better.",
    author: "John Smith",
    position: "Founder",
    company: "Fashion Brand",
    companyLogo: "/images/fashion-brand-logo.png",
    image: "https://cdn.prod.website-files.com/66fa67b1f207f846cd05b5a1/67768b9af6bc45dc6d893f8b_Botika_Homepage_AIGeneratedModelsforFashion_IncreaseModelDiversity.avif"
  }
]; 