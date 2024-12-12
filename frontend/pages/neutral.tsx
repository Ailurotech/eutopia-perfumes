import { NavigationRoute } from "@/components/route";
import { ShoppingPageLayout } from "@/components/shopping-page/ShoppingPageLayout";
import { ShoppingPageProps } from "@/type";
import { GetStaticProps } from "next";
import { productPageGetData } from "@/utils/product-page-get-data";

export default function Page({
  video,
  products,
  pageSetting,
}: ShoppingPageProps) {
  return (
    <ShoppingPageLayout
      variant="neutral"
      video={video}
      linkPath={NavigationRoute.Neutral.Path}
      products={products}
      pageSetting={pageSetting}
    />
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const { video, products, pageSetting } = await productPageGetData("neutral");

  return {
    props: {
      video,
      products,
      pageSetting,
    },
  };
};
