import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";
import clsx from "clsx";
import { RecommendedProduct } from "./RecommendedProduct";
import Slider from "react-slick";
import image1 from "../assets/test1.png";
import image2 from "../assets/test2.png";
import image3 from "../assets/test3.png";
import image4 from "../assets/test4.png";
import { Icon } from "@/components/common/Icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

interface ProductsShowCaseProps {
  category: string;
}

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const testProducts = [
  {
    image: image1,
    category: "for him",
    name: "ARMAF PASSION",
    price: 51.74,
  },
  {
    image: image2,
    category: "for him",
    name: "ARMAF PASSION",
    price: 51.74,
  },
  {
    image: image3,
    category: "for him",
    name: "ARMAF PASSION",
    price: 51.74,
  },
  {
    image: image4,
    category: "for him",
    name: "ARMAF PASSION",
    price: 51.74,
  },
  {
    image: image1,
    category: "for him",
    name: "ARMAF PASSION",
    price: 51.74,
  },
  {
    image: image2,
    category: "for him",
    name: "ARMAF PASSION",
    price: 51.74,
  },
  {
    image: image3,
    category: "for him",
    name: "ARMAF PASSION",
    price: 51.74,
  },
  {
    image: image4,
    category: "for him",
    name: "ARMAF PASSION",
    price: 51.74,
  },
];

export function ProductsShowCase({ category }: ProductsShowCaseProps) {
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
          {category}
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
            {testProducts.map((product) => (
              <RecommendedProduct
                key={product.name}
                image={product.image}
                category={product.category}
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
