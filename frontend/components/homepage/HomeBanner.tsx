import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { VideoPlayer } from "../common/VideoPlayer";
import { NavigationRoute, RoutRoute } from "../route";
import { IVideo } from "@/interface/video";

interface HomeBannerProps {
  videos: IVideo[];
}

const HomeBanner = ({ videos }: HomeBannerProps) => {
  const swiperRef = useRef<any>(null);

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
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        slidesPerView={1}
        className="swiper-container"
        style={{ padding: "2rem 0" }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {videos.map((item) => (
          <SwiperSlide
            key={item._id}
            className="flex justify-center"
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}
          >
            <VideoPlayer
              video={item}
              page="home"
              linkPath={matchPath(item.slug)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
