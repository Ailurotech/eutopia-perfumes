import { Inter } from "next/font/google";
import HomeBanner from "../components/homepage/HomeBanner";
import { GetStaticProps } from "next";
import { sanityClient } from "@/lib/sanityClient";
import { HomeBannerItems } from "@/type";
const inter = Inter({ subsets: ["latin"] });
interface HomeProps {
  bannerItems: HomeBannerItems[];
}

export default function Home({ bannerItems }: HomeProps) {
  return (
    <main
      className={`flex md:min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <HomeBanner bannerItems={bannerItems} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    *[_type == "homeBanner"]{
      _id,
      title,
      slug,
      description,
      "video": videoFile.asset->url
    }
  `;

  let bannerItems = [];

  try {
    bannerItems = await sanityClient.fetch(query);
  } catch (error) {
    console.error("Error fetching banner items:", error);
    bannerItems = [];
  }

  return {
    props: {
      bannerItems,
    },
  };
};