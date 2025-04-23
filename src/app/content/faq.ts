export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is LookLoom?",
    answer: "LookLoom is an AI-powered platform that transforms product imagery for fashion and retail. We help brands create high-quality, diverse product photos using advanced AI technology, making it easier and more cost-effective to showcase your products.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a free trial period where you can test our platform and see the quality of our AI-generated images. Sign up on our website to get started with your free trial today.",
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply create an account, upload your product images, and use our intuitive interface to generate new variations. Our step-by-step guide will walk you through the process, and our support team is always available to help.",
  },
  {
    question: "Can I customize clothing or models using my own prompts?",
    answer: "Yes, you can! Our platform allows for extensive customization through detailed prompts. You can specify styles, colors, poses, and other attributes to ensure the generated images match your brand's vision perfectly.",
  },
  {
    question: "Can I use your service for jewelry, footwear, or cosmetics?",
    answer: "Yes, our AI technology is trained to handle various product categories including jewelry, footwear, and cosmetics. Each category has specialized models to ensure the highest quality results for your specific needs.",
  },
];

export const faqContent = {
  title: "Frequently asked",
  titleItalic: "questions",
  seeAllText: "See All",
  seeAllLink: "/faq"
}; 