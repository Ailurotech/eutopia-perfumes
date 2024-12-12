import { Inter } from "next/font/google";
import HomeBanner from "../components/homepage/HomeBanner";
import { GetStaticProps } from "next";
import { sanityClient } from "@/lib/sanityClient";
import { RecommendedProducts, VideoType } from "@/type";
import JoinOurFamilyPage from "@/components/homepage/JoinOurFamily";
import { ProductsCarousel } from "@/components/common/ProductsCarousel";
import { recommendedProductQuery } from "@/query";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  videos: VideoType[];
  bestSellers: RecommendedProducts[];
  newArrivals: RecommendedProducts[];
}

export default function Home({ videos, bestSellers, newArrivals }: HomeProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <HomeBanner videos={videos} />
      <section className="text-default mb-20">
        <div className="px-16 lg:px-24 flex flex-col gap-14">
          <ProductsCarousel
            category="all"
            title="Best Sellers"
            recommendedProducts={bestSellers}
          />
          <ProductsCarousel
            category="all"
            title="New Arrivals"
            recommendedProducts={newArrivals}
          />
        </div>
      </section>
      <JoinOurFamilyPage />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const videosQuery = `
    *[_type == "videos"]{
      _id,
      title,
      "slug": slug.current,
      description,
      video
    }
  `;

  const productsQuery = recommendedProductQuery();

  let videos = [];
  let bestSellers = [];
  let newArrivals = [];

  try {
    const [videosResult, productsResult] = await Promise.all([
      sanityClient.fetch(videosQuery),
      sanityClient.fetch(productsQuery),
    ]);

    videos = videosResult;
    bestSellers = productsResult;
    newArrivals = [...productsResult].reverse();
  } catch (error) {
    console.error("Error in getStaticProps:", error);
  }

  return {
    props: {
      videos,
      bestSellers: bestSellers || [],
      newArrivals: newArrivals || [],
    },
  };
};
