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
import { NavigationRoute, RoutRoute } from "../route";
import { IVideo } from "@/interface/video";

interface HomeBannerProps {
  videos: IVideo[];
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
    <div className="bg-[#F5E1C9] w-full p-0 sm:px-6 md:px-12 lg:px-28 2xl:px-32">
      <Splide hasTrack={false} options={options} style={{ padding: "2rem 0" }}>
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
        <div className="splide__arrows !text-white !fill-white text-xs sm:text-2xl xl:text-4xl">
          <button
            className="splide__arrow splide__arrow--prev"
            style={{ left: "2%" }}
          >
            <Icon name="arrow" style={{ fill: "white" }} />
          </button>
          <button
            className="splide__arrow splide__arrow--next"
            style={{ right: "2%" }}
          >
            <Icon name="arrow" style={{ fill: "white" }} />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default HomeBanner;
