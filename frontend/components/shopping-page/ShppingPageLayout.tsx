import { HeroImage } from "./HeroImage";
import { ShoppingDisplay, ShoppingDisplayVariants } from "./ShoppingDisplay";

export function ShoppingPageLayout({ variant }: ShoppingDisplayVariants) {
  return (
    <section className="space-y-16 text-default">
      <HeroImage />
      <ShoppingDisplay variant={variant} />
    </section>
  );
}
