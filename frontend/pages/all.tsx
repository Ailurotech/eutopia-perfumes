import { NavigationRoute } from "@/components/route";
import { ShoppingPageLayout } from "@/components/shopping-page/ShoppingPageLayout";
import { ShoppingPageProps } from "@/type";
import { productPageGetData } from "@/utils/product-page-get-data";
import { GetStaticProps } from "next";

export default function Page({
  video,
  products,
  pageSetting,
}: ShoppingPageProps) {
  return (
    <ShoppingPageLayout
      variant="all"
      video={video}
      linkPath={NavigationRoute.All.Path}
      products={products}
      pageSetting={pageSetting}
    />
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const { video, products, pageSetting } = await productPageGetData("all");
  return {
    props: {
      video,
      products,
      pageSetting,
    },
  };
};
