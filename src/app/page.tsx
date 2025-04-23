import Navbar from "@/app/components/common/Navbar/Navbar";
import Hero from "@/app/components/common/Hero/Hero";
import Card from "./components/common/Card/Card";
import FAQ from "./components/common/FAQ/FAQ";
import Testimonials from "./components/common/Testimonials/Testimonials";
import HowItWorks from "./components/common/HowItWorks/HowItWorks";
import TrustedBrands from "./components/common/TrustedBrands/TrustedBrands";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <TrustedBrands />
      <main className="pt-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-medium mb-6 text-black">
            LookLoom's AI fashion models will revolutionize{" "}
            <span className="italic">your</span> business
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            LookLoom makes creating amazing images of your clothing a breeze, and affordable.
          </p>
          <p className="text-xl text-gray-700">
            Our AI generated models for fashion allow you to:
          </p>
        </div>
        <div>
          <Card
            imageUrl="https://cdn.prod.website-files.com/66fa67b1f207f846cd05b5a1/67768b992eea46ce3d813aed_Botika_Homepage_AIGeneratedModelsforFashion_SaveMoney.avif"
            altText="Save Money"
            title="Reduce Production Expenses"
            subtitle="Save Money"
            description="Lower your costs while maintaining quality. Obtain high-quality product images affordably, ensuring professional and realistic fashion visuals within budget."
            linkText="Discover More"
            linkUrl="/use-case/refresh-your-catalog"
          />
          <Card
            imageUrl="https://cdn.prod.website-files.com/66fa67b1f207f846cd05b5a1/67768b9af6bc45dc6d893f8b_Botika_Homepage_AIGeneratedModelsforFashion_IncreaseModelDiversity.avif"
            altText="Increase Diversity"
            title="Expand Model Diversity"
            subtitle="Increase Diversity"
            description="Enhance diversity without the need for numerous models. Showcase a variety of styles and looks with fewer resources, accessing a broad model portfolio swiftly and effectively."
            linkText="Discover More"
            linkUrl="/use-case/increase-diversity"
            reverse
          />
          <Card
            imageUrl="https://cdn.prod.website-files.com/66fa67b1f207f846cd05b5a1/67768b99d40d49c1a56565bf_Botika_Homepage_AIGeneratedModelsforFashion_CreateProductPhotosQuickly.avif"
            altText="No Usage Fees"
            title="Quick Product Imagery"
            subtitle="No Usage Fees"
            description="Achieve realistic images in minutes instead of weeks. Deliver top-tier results rapidly, enabling you to launch collections and start selling promptly."
            linkText="Discover More"
            linkUrl="/use-case/refresh-your-catalog"
          />
        </div>
      </main>
      
      
      <Testimonials />
      <FAQ />
    </main>
  );
}
