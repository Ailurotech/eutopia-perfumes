import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { VideoPlayer } from "../common/VideoPlayer";
import { NavigationRoute, RoutRoute } from "../route";
import { IVideo } from "@/interface/video";
import { Icon } from "../common/Icon";

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
    <div className="bg-[#F5E1C9] w-full p-0 sm:px-6 md:px-12 lg:px-28 2xl:px-32 relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        className="swiper-container"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          prevEl: "#swiper-button-prev",
          nextEl: "#swiper-button-next",
        }}
      >
        {videos.map((item) => (
          <SwiperSlide
            key={item._id}
            className="flex justify-center py-12"
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
          >
            <VideoPlayer
              video={item}
              page="home"
              linkPath={matchPath(item.slug)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="splide__arrows !text-white !fill-white text-xs sm:text-2xl xl:text-4xl absolute inset-0 flex justify-between items-center">
        <button
          id="swiper-button-prev"
          className="splide__arrow splide__arrow--prev sm:ml-4 md:ml-8 xl:ml-32 z-10 p-0 sm:p-2 md:p-3 lg:p-4"
        >
          <Icon
            name="arrow"
            className="w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-24 xl:h-24 rotate-180"
          />
        </button>

        <button
          id="swiper-button-next"
          className="splide__arrow splide__arrow--prev rotate-180 sm:mr-4 md:mr-8 xl:mr-32 z-10 p-0 sm:p-2 md:p-3 lg:p-4"
        >
          <Icon
            name="arrow"
            className="w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-24 xl:h-24 rotate-180"
          />
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
