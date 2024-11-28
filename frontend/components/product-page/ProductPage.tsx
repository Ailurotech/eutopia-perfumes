import { ProductPageContent, RecommendedProducts } from "@/type";
import { Description } from "./components/Description";
import { DetailedProduct } from "./components/DetailedProduct";
import { ProductsCarousel } from "../common/ProductsCarousel";
import { descriptionFormat } from "@/utils";
import { ReviewSection } from "./components/ReviewSection/ReviewSection";

interface ProductPageProps {
  productPageContent: ProductPageContent;
  recommendedProducts: RecommendedProducts[];
}

export function ProductPage({
  productPageContent,
  recommendedProducts,
}: ProductPageProps) {
  const { description, ...detailedProductContent } = productPageContent;
  const parsedDescription = descriptionFormat(description);
  const category = productPageContent.tag;
  return (
    <>
      <section className="text-default space-y-10">
        <div className="px-16 xl:pr-24">
          <DetailedProduct detailedProductContent={detailedProductContent} />
        </div>
        <div className="px-16 lg:px-24 flex flex-col gap-14 xl:grid xl:grid-rows-[100px_2fr] xl:grid-cols-[25%_1fr] xl:gap-x-10 xl:gap-y-10">
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
      </section>
      <ReviewSection />
    </>
  );
}
