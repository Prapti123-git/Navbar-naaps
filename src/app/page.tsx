import Navbar from "./components/common/Navbar/Navbar";
import Card from "./components/common/Card/Card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-16 px-6">
        <h1 className="text-3xl font-bold">Welcome to Look Loom</h1>
        <p className="mt-4 text-gray-600">This is the homepage content.</p>
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
    </div>
  );
}
