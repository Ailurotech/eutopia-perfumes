import React from "react";
import {
  Splide,
  SplideSlide,
  SplideProps,
  SplideTrack,
} from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Potta_One } from "next/font/google";
import Link from "next/link";
import { HomeBannerItems } from "../../types";
import { Icon } from "./common/Icon";
const pattaOne = Potta_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

interface HomeBannerProps {
  bannerItems: HomeBannerItems[];
}

const HomeBanner = ({ bannerItems }: HomeBannerProps) => {
  const options: SplideProps["options"] = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    interval: 3000,
  };

  return (
    <div className="bg-[#F5E1C9] w-screen md:h-[80vh] flex items-center">
      <Splide hasTrack={false} options={options} className="">
        <SplideTrack>
          {bannerItems.map((item) => (
            <SplideSlide key={item._id} className="flex justify-center">
              <Link href={"/#"}>
                <div className="relative w-full h-[60vh] mx-auto rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl text-center flex flex-col gap-2 md:gap-16">
                    <h1
                      className={`${pattaOne.className} text-base md:text-3xl`}
                    >
                      {item.title}
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg underline">
                      {item.description}{" "}
                    </p>
                  </div>
                </div>
              </Link>
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
