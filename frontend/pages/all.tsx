import { NavigationRoute } from "@/components/route";
import { ShoppingPageLayout } from "@/components/shopping-page/ShoppingPageLayout";
import { sanityClient } from "@/lib/sanityClient";
import { shoppingPageQuery, shoppingVideoQuery } from "@/query";
import { ShoppingPageProps } from "@/type";
import { productFormat } from "@/utils";
import { GetStaticProps } from "next";

export default function Page({ video, products }: ShoppingPageProps) {
  return (
    <ShoppingPageLayout
      variant="all"
      video={video}
      linkPath={NavigationRoute.All.Path}
      products={products}
    />
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const videoQuery = shoppingVideoQuery("all");
  const pageQuery = shoppingPageQuery();
  let video = {};
  let products = [];
  try {
    const data = await Promise.all([
      sanityClient.fetch(videoQuery),
      sanityClient.fetch(pageQuery),
    ]);
    video = data[0][0];
    products = productFormat(data[1]);
    console.log("products", products);
  } catch (error) {
    console.error("Error fetching banner items:", error);
    video = {};
    products = [];
  }

  return {
    props: {
      video,
      products,
    },
  };
};
