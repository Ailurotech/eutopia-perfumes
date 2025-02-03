import Head from "next/head";
import { NavigationRoute } from "@/components/route";
import { ShoppingPageLayout } from "@/components/shopping-page/ShoppingPageLayout";
import { GetStaticProps } from "next";
import { productPageGetData } from "@/utils/product-page-get-data";
import { IShoppingPage } from "@/interface/pages/shoppingPage";

export default function Page({ video, products, pageSetting }: IShoppingPage) {
  return (
    <>
      <Head>
        <meta name="description" content="Distinctive Allure: Explore Our Range of Bold Fragrances." />
      </Head>
      <ShoppingPageLayout
        variant="forHim"
        video={video}
        linkPath={NavigationRoute.ForHim.Path}
        products={products}
        pageSetting={pageSetting}
      />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const { video, products, pageSetting } = await productPageGetData("for-him");

  return {
    props: {
      video,
      products,
      pageSetting,
    },
  };
};
