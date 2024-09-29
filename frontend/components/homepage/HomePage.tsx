import React from "react";
import { HomePageContent } from "@/types";
import PerfumeSection from "@/components/homepage/component/PerfumeSection";
import ProductCarousel from "@/components/homepage/component/ProductCarousel";

const HomePage: React.FC<{ content: HomePageContent }> = ({ content }) => {
  if (!content) {
    return (
      <div className="container mx-auto px-4 text-center">
        <p>Failed to load homepage content. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <ProductCarousel
        title="TOP SELLERS"
        items={content.topSellers}
        itemsPerPage={4}
        shopLink="/shop"
      />

      <ProductCarousel
        title="NEW ARRIVALS"
        items={content.newArrivals}
        itemsPerPage={4}
        shopLink="/shop"
      />

      <PerfumeSection
        title={content.womenPerfume.sectionTitle}
        subtitle={content.womenPerfume.subtitle}
        image={content.womenPerfume.image}
        linkText={content.womenPerfume.linkText}
        linkUrl={content.womenPerfume.linkUrl}
        imageOnLeft={true}
      />

      <PerfumeSection
        title={content.menPerfume.sectionTitle}
        subtitle={content.menPerfume.subtitle}
        image={content.menPerfume.image}
        linkText={content.menPerfume.linkText}
        linkUrl={content.menPerfume.linkUrl}
        imageOnLeft={false}
      />

      <PerfumeSection
        title={content.neutralPerfume.sectionTitle}
        subtitle={content.neutralPerfume.subtitle}
        image={content.neutralPerfume.image}
        linkText={content.neutralPerfume.linkText}
        linkUrl={content.neutralPerfume.linkUrl}
        imageOnLeft={true}
      />
    </div>
  );
};

export default HomePage;
