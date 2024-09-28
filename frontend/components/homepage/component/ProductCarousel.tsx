import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/homepage.module.css";

interface ProductCarouselProps {
  title: string;
  items: Array<{
    slug: { current: string };
    image: string;
    name: string;
    categories: string;
    price: number;
  }>;
  itemsPerPage: number;
  shopLink: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  items,
  itemsPerPage,
  shopLink,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if ((currentIndex + 1) * itemsPerPage < items.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const displayedItems = items.slice(
    currentIndex * itemsPerPage,
    Math.min((currentIndex + 1) * itemsPerPage, items.length)
  );

  return (
    <section className="mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:pr-0">
        <div className="md:w-1/3 w-full md:pr-2">
          <h2
            className={`text-[24px] sm:text-[28px] md:text-[30px] lg:text-[50px] ${styles["font-playfair"]} text-[#66685A] md:mb-6`}
          >
            {title}
          </h2>
          <Link
            href={shopLink}
            className={`text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] ${styles["font-poppins"]} text-[#66685A] underline ml-10`}
          >
            Shop Now
          </Link>
        </div>

        <div className="w-full md:w-2/3 flex overflow-x-auto">
          <button
            onClick={handlePrev}
            className="text-[15px] md:text-[30px] mb-10 mr-2 text-[#808274]"
            disabled={currentIndex === 0}
          >
            {"<"}
          </button>
          <div className="grid grid-cols-4 gap-4">
            {displayedItems.map((product) => (
              <div
                key={product.slug.current}
                className="flex flex-col items-center"
              >
                <div className="flex flex-col items-center justify-between h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={195}
                    height={298}
                    className="rounded-[20px] object-contain"
                  />
                  <div className="flex flex-col items-center text-center">
                    <p
                      className={`text-[10px] sm:text-[12px] md:text-[16px] ${styles["font-poppins"]} text-[#66685A] mb-3`}
                    >
                      {product.categories}
                    </p>
                    <p
                      className={`text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] ${styles["font-literata"]} whitespace-nowrap mb-2 text-[#808274]`}
                    >
                      {product.name}
                    </p>
                    <p
                      className={`text-[12px] sm:text-[16px] md:text-[20px] lg:text-[30px] ${styles["font-rokkitt"]} text-[#808274]`}
                    >
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <button
              onClick={handleNext}
              className="text-[15px] md:text-[30px] mb-10 ml-2 text-[#808274]"
              disabled={(currentIndex + 1) * itemsPerPage >= items.length}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
