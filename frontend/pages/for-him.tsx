import { NavigationRoute } from "@/components/route";
import { ShoppingPageLayout } from "@/components/shopping-page/ShoppingPageLayout";
import { ShoppingPageProps } from "@/type";
import { GetStaticProps } from "next";
import { productPageGetData } from "@/utils/product-page-get-data";

export default function Page({ video, products }: ShoppingPageProps) {
  return (
    <ShoppingPageLayout
      variant="forHim"
      video={video}
      linkPath={NavigationRoute.ForHim.Path}
      products={products}
    />
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const { video, products } = await productPageGetData("for-him");

  return {
    props: {
      video,
      products,
    },
  };
};
