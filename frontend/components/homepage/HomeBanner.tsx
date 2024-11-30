import React from "react";
import { Potta_One } from "next/font/google";
import Link from "next/link";
import { HomeBannerItems } from "../../type";
import { Icon } from "../common/Icon";
import {
  Box,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pattaOne = Potta_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

interface HomeBannerProps {
  bannerItems: HomeBannerItems[];
}

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
}

const HomeBanner = ({ bannerItems }: HomeBannerProps) => {
  const [slider, setSlider] = React.useState<Slider | null>(null)
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })


  return (
    <div className="bg-[#F5E1C9] w-screen md:h-[90vh] flex items-center justify-center relative">
      <Box className="h-[300px] md:h-[600px] w-[90%] md:w-[70%] overflow-hidden p-4">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          className="left-20 md:left-24"
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <Icon name='arrow'  style={{ fill: 'white' }} className="transform rotate-180 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
        </IconButton>
        <IconButton
          className="right-20 md:right-24"
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <Icon name='arrow'  style={{ fill: 'white' }} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"/>
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)} className="!flex justify-center">
          {bannerItems.map((item, index) => (
            <div key={item._id} className='flex justify-center'>
            <Link href={"/#"}>
              <div className='md:w-full md:h-[55vh] mx-auto rounded-[20px] overflow-hidden'>
                <video className='w-full h-full object-cover z-1 relative' autoPlay muted loop playsInline preload="none">
                  <source src={item.video} type="video/mp4" />
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl text-center flex flex-col gap-2 md:gap-16 z-10">
                  <h1 className={`${pattaOne.className} text-base md:text-3xl`}>{item.title}</h1>
                  <p className='text-sm md:text-base lg:text-lg underline'>{item.description}  </p>
                </div>
              </div>
            </Link>
          </div>
          ))}
        </Slider>
      </Box>
    </div>
    
  );
};

export default HomeBanner;
