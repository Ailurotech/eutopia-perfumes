import { NavigationRoute } from "@/components/route";
import { ShoppingPageLayout } from "@/components/shopping-page/ShoppingPageLayout";
import { ShoppingPageProps } from "@/type";
import { GetStaticProps } from "next";
import { productPageGetData } from "@/utils/product-page-get-data";

export default function Page({ video, products }: ShoppingPageProps) {
  return (
    <ShoppingPageLayout
      variant="forHer"
      video={video}
      linkPath={NavigationRoute.ForHer.Path}
      products={products}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { video, products } = await productPageGetData("for-her");
  return {
    props: {
      video,
      products,
    },
  };
};
