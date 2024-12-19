import { Description } from "./components/Description";
import { DetailedProduct } from "./components/DetailedProduct";
import { ProductsCarousel } from "../common/ProductsCarousel";
import { descriptionFormat } from "@/utils";
import { ReviewSection } from "./components/ReviewSection/ReviewSection";
import { IProductPageContent } from "@/interface/pages/productPage";
import { IRecommendedProduct } from "@/interface/product";
import { useRef } from "react";

interface IProductPage {
  productPageContent: IProductPageContent;
  recommendedProducts: IRecommendedProduct[];
}

export function ProductPage({
  productPageContent,
  recommendedProducts,
}: IProductPage) {
  const { description, comments, ...detailedProductContent } =
    productPageContent;
  const parsedDescription = descriptionFormat(description);
  const category = productPageContent.tag;
  const reviewSectionRef = useRef<HTMLDivElement>(null);
  const scrollToReview = () => {
    reviewSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="text-default flex flex-col gap-28">
        <div className="px-2 sm:px-16 xl:pr-24">
          <DetailedProduct
            detailedProductContent={detailedProductContent}
            scrollToReview={scrollToReview}
          />
        </div>
        <div className="px-2 sm:px-16 lg:px-24 flex flex-col gap-14 xl:grid xl:grid-rows-[repeat(3,auto)] xl:grid-cols-[25%_1fr] xl:gap-x-10 xl:gap-y-10">
          <Description description={parsedDescription} />
          <ProductsCarousel
            category={category}
            title="Related Products"
            recommendedProducts={recommendedProducts}
          />
          <ProductsCarousel
            category={category}
            title="Top Seller"
            recommendedProducts={recommendedProducts}
          />
        </div>
        <div className="scroll-mt-32" ref={reviewSectionRef}>
          <ReviewSection
            comments={comments}
            avgStar={detailedProductContent.avgStar}
          />
        </div>
      </section>
    </>
  );
}
