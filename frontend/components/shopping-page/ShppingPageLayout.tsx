import { HeroImage } from "./HeroImage";
import { ShoppingDisplay } from "./ShoppingDisplay";

export function ShoppingPageLayout() {
  return (
    <section className="space-y-16 text-default">
      <HeroImage />
      <ShoppingDisplay />
    </section>
  );
}
