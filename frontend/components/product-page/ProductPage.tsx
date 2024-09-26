import { Description } from "./components/Descrpition";
import { DetailedProduct } from "./components/DetailedProduct";

export function ProductPage() {
  return (
    <section className="px-20 2xl:px-40 text-default space-y-20">
      <DetailedProduct />
      <Description />
    </section>
  );
}
