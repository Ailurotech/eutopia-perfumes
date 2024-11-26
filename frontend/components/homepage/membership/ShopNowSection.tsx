import Image from "next/image";
import React from "react";
import Link from "next/link";
import { NavigationRoute } from "@/components/route";

const ShopNowSection = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center h-auto py-10 w-full px-20 md:px-28 bg-gradient-bg-shop-now">
      <h1 className="text-center font-playfair front-semibold text-3xl md:text-4xl max-w-[1000px] lg:text-[50px] text-gray-500 md:leading-[60px] tracking-widest">
        DISCOVER THE FULL FRAGRANCE COLLECTION.
      </h1>
      <div className="relative w-full max-w-screen mx-auto flex justify-center px-4 md:px-8">
        <Image
          src="/Perfume4.png"
          alt="Perfume Collection"
          width={600}
          height={600}
          className="rounded-lg"
          style={{ objectFit: "contain" }}
          priority={true}
        />
        <div className="absolute inset-0 flex justify-center items-center -translate-y-4">
          <Link
            href={NavigationRoute.All.Path}
            className="text-white text-4xl underline font-bold bg-transparent border-none cursor-pointer transform transition-transform hover:scale-110"
          >
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopNowSection;
