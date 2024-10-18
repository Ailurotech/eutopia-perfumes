import { NavigationRoute } from "@/components/route";
import { ShoppingPageLayout } from "@/components/shopping-page/ShppingPageLayout";
import { sanityClient } from "@/lib/sanityClient";
import { shoppingVideoQuery } from "@/query";
import { ShoppingPageProps } from "@/type";
import { GetStaticProps } from "next";

export default function Page({ video }: ShoppingPageProps) {
  return (
    <ShoppingPageLayout
      variant="neutral"
      video={video}
      linkPath={NavigationRoute.Neutral.Path}
    />
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const query = shoppingVideoQuery("neutral");

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
    },
  };
};
