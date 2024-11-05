import { ProductPageContent, RecommendedProducts } from "@/type";
import { Description } from "./components/Description";
import { DetailedProduct } from "./components/DetailedProduct";
import { ProductsCarousel } from "../common/ProductsCarousel";

interface ProductPageProps {
  productPageContent: ProductPageContent;
  recommendedProducts: RecommendedProducts[];
}

export function ProductPage({
  productPageContent,
  recommendedProducts,
}: ProductPageProps) {
  const { description, ...detailedProductContent } = productPageContent;
  const category = productPageContent.tag;
  return (
    <section className="px-16 lg:px-32 text-default space-y-20">
      <DetailedProduct detailedProductContent={detailedProductContent} />
      <div className="flex flex-col gap-14 xl:gap-20 xl:grid xl:grid-rows-[15%_2fr] xl:grid-cols-[20%_1fr] xl:gap-x-20 xl:gap-y-20 xl:min-h-[50rem]">
        <Description description={description} />
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
  );
}
