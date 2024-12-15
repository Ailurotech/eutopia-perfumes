import Link from "next/link";
import { Potta_One } from "next/font/google";
import { cva, type VariantProps } from "class-variance-authority";
import { VideoType } from "@/type";

type VideoPlayerProps = {
  video: VideoType;
  linkPath: string;
} & VideoPlayerVariants;

export interface VideoPlayerVariants
  extends VariantProps<typeof videoVariants> {}

const pattaOne = Potta_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const videoVariants = cva("relative w-full", {
  variants: {
    page: {
      home: ["mx-auto rounded-lg overflow-hidden"],
      shopping: ["aspect-[1440/600]"],
    },
  },
});

export function VideoPlayer({ video, page, linkPath }: VideoPlayerProps) {
  if (!video?.video) {
    return null;
  }

  // Use the video URL directly without YouTube parameters
  const videoUrl = video.video;

  return (
    <div className="w-full flex justify-center items-center">
      <div className={videoVariants({ page })}>
        <video
          src={videoUrl}
          className="w-full object-cover aspect-[4/3] md:aspect-[16/9]"
          autoPlay
          muted
          loop
          playsInline
          style={{
            border: "none",
            pointerEvents: "none",
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl text-center flex flex-col gap-2 md:gap-16 pointer-events-none">
          <h1 className={`${pattaOne.className} text-base md:text-3xl`}>
            {video.title}
          </h1>
          <Link
            href={linkPath}
            className="text-sm md:text-base lg:text-lg underline pointer-events-auto"
          >
            {video.description}
          </Link>
        </div>
      </div>
    </div>
  );
}
