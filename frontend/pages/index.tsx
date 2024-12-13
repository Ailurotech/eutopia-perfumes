import { Inter } from "next/font/google";
import HomeBanner from "../components/homepage/HomeBanner";
import { GetStaticProps } from "next";
import { sanityClient } from "@/lib/sanityClient";
import { IPerfumeSectionContent, RecommendedProducts, VideoType } from "@/type";
import JoinOurFamilyPage from "@/components/homepage/JoinOurFamily";
import { ProductsCarousel } from "@/components/common/ProductsCarousel";
import PerfumeSection from "@/components/homepage/PerfumeSection";
import {
  perfumeSectionQuery,
  videoSectionQuery,
} from "@/query/home-page.query";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  videos: VideoType[];
  bestSellers: RecommendedProducts[];
  newArrivals: RecommendedProducts[];
  perfumeSectionContent: IPerfumeSectionContent;
}

export default function Home({
  videos,
  bestSellers,
  newArrivals,
  perfumeSectionContent,
}: HomeProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className} gap-32 lg:gap-40 xl:gap-64`}
    >
      <HomeBanner videos={videos} />
      <section className="text-default">
        <div className="px-16 lg:px-24 flex flex-col gap-14 items-center xl:grid xl:grid-rows-[auto_auto] xl:grid-cols-[25%_1fr] xl:gap-x-10 xl:gap-y-20">
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
      <section className="container px-8 flex flex-col gap-16 lg:gap-36">
        <PerfumeSection content={perfumeSectionContent} />
      </section>
      <JoinOurFamilyPage />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const videosQuery = videoSectionQuery();

  const productsQuery = `
    *[_type == "product" && store.status == "active" && store.isDeleted == false]{
      "title": store.title,
      "image": store.previewImageUrl,
      "price": store.priceRange.maxVariantPrice
    }[0...10]
  `;

  const perfumeQuery = perfumeSectionQuery();

  let videos = [];
  let bestSellers = [];
  let newArrivals = [];
  let perfumeSectionContent = {};

  try {
    const [videosResult, productsResult, perfumeResult] = await Promise.all([
      sanityClient.fetch(videosQuery),
      sanityClient.fetch(productsQuery),
      sanityClient.fetch(perfumeQuery),
    ]);

    videos = videosResult;
    bestSellers = productsResult;
    newArrivals = [...productsResult].reverse();
    perfumeSectionContent = perfumeResult[0].perfumeSection;
  } catch (error) {
    console.error("Error in getStaticProps:", error);
  }

  return {
    props: {
      videos,
      bestSellers: bestSellers || [],
      newArrivals: newArrivals || [],
      perfumeSectionContent: perfumeSectionContent || {},
    },
  };
};
