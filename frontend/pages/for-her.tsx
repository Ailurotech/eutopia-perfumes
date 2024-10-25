import { NavigationRoute } from "@/components/route";
import { ShoppingPageLayout } from "@/components/shopping-page/ShoppingPageLayout";
import { sanityClient } from "@/lib/sanityClient";
import { shoppingVideoQuery } from "@/query";
import { ShoppingPageProps } from "@/type";
import { GetStaticProps } from "next";
import mockProducts from "@/components/shopping-page/assets/mockdata.json";

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
  const query = shoppingVideoQuery("for-her");
  let video = {};

  try {
    const data = await sanityClient.fetch(query);
    video = data[0];
  } catch (error) {
    console.error("Error fetching banner items:", error);
    video = {};
  }

  return {
    props: {
      video,
      products: mockProducts,
    },
  };
};
