import { VideoPlayer } from "../common/VideoPlayer";
import { ShoppingDisplay, ShoppingDisplayVariants } from "./ShoppingDisplay";
import { IShoppingPage } from "@/interface/pages/shoppingPage";

interface IShoppingPageLayout extends ShoppingDisplayVariants, IShoppingPage {
  linkPath: string;
}

export function ShoppingPageLayout({
  video,
  variant,
  linkPath,
  products,
  pageSetting,
}: IShoppingPageLayout) {
  return (
    <section className="space-y-16 text-default">
      <VideoPlayer video={video} linkPath={linkPath} />
      <ShoppingDisplay
        variant={variant}
        products={products}
        pageSetting={pageSetting}
      />
    </section>
  );
}
