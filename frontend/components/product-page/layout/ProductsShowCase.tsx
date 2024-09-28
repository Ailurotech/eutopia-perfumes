import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";
import clsx from "clsx";
import { RecommendedProducts } from "@/type";
import Slider from "react-slick";
import { Icon } from "@/components/common/Icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { RecommendedProduct } from "./RecommendedProduct";

interface ProductsShowCaseProps {
  title: string;
  category: string;
  recommendedProducts: RecommendedProducts[];
}

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export function ProductsShowCase({
  title,
  category,
  recommendedProducts,
}: ProductsShowCaseProps) {
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
            "text-[48px] font-extrabold uppercase"
          )}
        >
          {title}
        </h1>
        <Link
          href="/product"
          className={clsx(poppins.className, "underline text-[35px]")}
        >
          Shop Now
        </Link>
      </div>
      <div className="relative flex items-center">
        <button onClick={next}>
          <Icon name="back" className="text-3xl" />
        </button>
        <div className="space-x-4 w-full xl:max-w-[60rem] 2xl:max-w-[70rem] ">
          <Slider ref={sliderRef} {...settings}>
            {recommendedProducts.map((product) => (
              <RecommendedProduct
                key={product.name}
                image={product.image}
                category={category}
                name={product.name}
                price={product.price}
              />
            ))}
          </Slider>
        </div>
        <button onClick={previous}>
          <Icon name="forward" className="text-3xl" />
        </button>
      </div>
    </>
  );
}
