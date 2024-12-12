import { PageSettingType, ProductType, VideoType } from "@/type";
import { VideoPlayer } from "../common/VideoPlayer";
import { ShoppingDisplay, ShoppingDisplayVariants } from "./ShoppingDisplay";

type ShoppingPageLayoutProps = {
  video: VideoType;
  linkPath: string;
  products: ProductType[];
  pageSetting: PageSettingType;
} & ShoppingDisplayVariants;

export function ShoppingPageLayout({
  video,
  variant,
  linkPath,
  products,
  pageSetting,
}: ShoppingPageLayoutProps) {
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
