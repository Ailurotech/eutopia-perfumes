import { ProductPageContent } from "@/type";
import { Description } from "./components/Description";
import { DetailedProduct } from "./components/DetailedProduct";
import { ProductsShowCase } from "./layout/ProductsShowCase";

interface ProductPageProps {
  productPageContent: ProductPageContent;
}

export function ProductPage({ productPageContent }: ProductPageProps) {
  const { description, ...detailedProductContent } = productPageContent;
  return (
    <section className="px-20 2xl:px-40 text-default space-y-20">
      <DetailedProduct detailedProductContent={detailedProductContent} />
      <div className="flex flex-col gap-20 xl:grid xl:grid-rows-[15%_2fr] xl:grid-cols-[20%_1fr] xl:gap-x-20 xl:gap-y-20 xl:min-h-[50rem]">
        <Description description={description} />
        <ProductsShowCase category="Related Products" />
        <ProductsShowCase category="Top Seller" />
      </div>
    </section>
  );
}
