import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface ProductCardProps {
  slug: string;
  image: string;
  title: string;
  description: string;
  price: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  image,
  title,
  description,
  price,
  onAddToCart,
}) => {
  const router = useRouter();

  return (
    <div className="relative group">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="w-full h-full object-cover"
        priority={false}
        quality={75}
        onClick={() => router.push(`/product/${slug}`)}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          className="absolute top-[150px] left-[29px] w-[189px] h-[36px] bg-[#E0E0E0] text-[#808274] border-2 border-[#808274] rounded-[10px] p-0 opacity-0 group-hover:opacity-100 flex items-center justify-center"
        >
          Add to Cart
        </button>
      </div>
      <div className="p-4 text-center">
        <p className="text-[#808274] mb-4 font-poppins text-base font-normal leading-6">
          {description}
        </p>
        <h2 className="text-[#808274] text-xl font-literata font-bold mb-2 leading-[29.7px]">
          {title}
        </h2>
        <p className="text-[#808274] text-[30px] font-rokkitt font-normal mb-4 leading-[45px]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
