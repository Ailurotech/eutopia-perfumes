import { NavigationRoute } from "@/components/route";
import { ShoppingPageLayout } from "@/components/shopping-page/ShppingPageLayout";
import { sanityClient } from "@/lib/sanityClient";
import { shoppingVideoQuery } from "@/query";
import { ShoppingPageProps } from "@/type";
import { GetStaticProps } from "next";

export default function Page({ video }: ShoppingPageProps) {
  return (
    <ShoppingPageLayout
      variant="forHim"
      video={video}
      linkPath={NavigationRoute.ForHim.Path}
    />
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const query = shoppingVideoQuery("for-him");

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
