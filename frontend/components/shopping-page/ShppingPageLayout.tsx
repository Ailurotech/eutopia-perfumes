import { VideoType } from "@/type";
import { VideoPlayer } from "../common/VideoPlayer";
import { ShoppingDisplay, ShoppingDisplayVariants } from "./ShoppingDisplay";

type ShoppingPageLayoutProps = {
  video: VideoType;
  linkPath: string;
} & ShoppingDisplayVariants;

export function ShoppingPageLayout({
  video,
  variant,
  linkPath,
}: ShoppingPageLayoutProps) {
  return (
    <section className="space-y-16 text-default">
      <VideoPlayer video={video} linkPath={linkPath} />
      <ShoppingDisplay variant={variant} />
    </section>
  );
}
