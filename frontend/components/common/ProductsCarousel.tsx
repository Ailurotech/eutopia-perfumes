import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";
import clsx from "clsx";
import Slider from "react-slick";
import { Icon } from "@/components/common/Icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IndividualProductForProductPage } from "./IndividualProduct";
import { IRecommendedProduct } from "@/interface/product";

interface IProductsCarouselProps {
  title: string;
  category: string;
  recommendedProducts: IRecommendedProduct[];
}

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export function ProductsCarousel({
  title,
  category,
  recommendedProducts,
}: IProductsCarouselProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h1
          className={clsx(
            playFair.className,
            "text-[48px] xl:text-[40px] 2xl:text-[48px] font-extrabold uppercase"
          )}
        >
          {title}
        </h1>
        <Link
          href="/all"
          className={clsx(poppins.className, "underline text-[35px]")}
        >
          Shop Now
        </Link>
      </div>
      <div className="relative flex items-center justify-center">
        <button onClick={previous}>
          <Icon name="back" className="text-3xl" />
        </button>
        <div
          className={clsx(
            "h-full space-x-4 w-full",
            "max-w-[15rem] sm:max-w-[28rem] md:max-w-[36rem] lg:max-w-[45rem] xl:max-w-[42rem] 2xl:max-w-[55rem] min-[1600px]:max-w-[70rem]"
          )}
        >
          <Slider ref={sliderRef} {...settings}>
            {recommendedProducts.map((product, index) => (
              <IndividualProductForProductPage
                key={index}
                image={product.image}
                tag={category}
                title={product.title}
                price={product.price}
                id={product.id}
              />
            ))}
          </Slider>
        </div>
        <button onClick={next}>
          <Icon name="forward" className="text-3xl" />
        </button>
      </div>
    </>
  );
}
