import React from "react";
import {
  Splide,
  SplideSlide,
  SplideProps,
  SplideTrack,
} from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Icon } from "../common/Icon";
import { VideoPlayer } from "../common/VideoPlayer";
import { VideoType } from "@/type";
import { NavigationRoute, RoutRoute } from "../route";

interface HomeBannerProps {
  videos: VideoType[];
}

const HomeBanner = ({ videos }: HomeBannerProps) => {
  const options: SplideProps["options"] = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    interval: 3000,
  };

  const matchPath = (path: string) => {
    switch (path) {
      case "for-him":
        return NavigationRoute.ForHim.Path;
      case "for-her":
        return NavigationRoute.ForHer.Path;
      case "neutral":
        return NavigationRoute.Neutral.Path;
      default:
        return RoutRoute.Rout.Path;
    }
  };

  return (
    <div className="bg-[#F5E1C9] w-full lg:py-8 lg:px-14 2xl:px-24">
      <Splide hasTrack={false} options={options}>
        <SplideTrack>
          {videos.map((item) => (
            <SplideSlide key={item._id} className="flex justify-center">
              <VideoPlayer
                video={item}
                page="home"
                linkPath={matchPath(item.slug)}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows !text-white !fill-white">
          <button className="splide__arrow splide__arrow--prev md:ml-36 text-1xl md:text-5xl !left-16 md:!left-0">
            <Icon name="arrow" style={{ fill: "white" }} />
          </button>
          <button className="splide__arrow splide__arrow--next md:mr-36 text-1xl md:text-5xl !right-16 md:!right-0">
            <Icon name="arrow" style={{ fill: "white" }} />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default HomeBanner;
