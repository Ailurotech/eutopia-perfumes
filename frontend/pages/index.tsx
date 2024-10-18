import { Inter } from "next/font/google";
import HomeBanner from "../components/homepage/HomeBanner";
import { GetStaticProps } from "next";
import { sanityClient } from "@/lib/sanityClient";
import { VideoType } from "@/type";
const inter = Inter({ subsets: ["latin"] });
interface HomeProps {
  videos: VideoType[];
}

export default function Home({ videos }: HomeProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <HomeBanner videos={videos} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    *[_type == "videos"]{
      _id,
      title,
      "slug": slug.current,
      description,
      "video": videoFile.asset->url
    }
  `;

  let videos = [];

  try {
    videos = await sanityClient.fetch(query);
  } catch (error) {
    console.error("Error fetching banner items:", error);
    videos = [];
  }

  return {
    props: {
      videos,
    },
  };
};
