import { Description } from "./components/Description";
import { DetailedProduct } from "./components/DetailedProduct";
import { ProductsShowCase } from "./layout/ProductsShowCase";

export function ProductPage() {
  return (
    <section className="px-20 2xl:px-40 text-default space-y-20">
      <DetailedProduct />
      <div className="flex flex-col gap-20 xl:grid xl:grid-rows-[15%_2fr] xl:grid-cols-[20%_1fr] xl:gap-x-20 xl:gap-y-20 xl:min-h-[50rem]">
        <Description />
        <ProductsShowCase category="Related Products" />
        <ProductsShowCase category="Top Seller" />
      </div>
    </section>
  );
}
