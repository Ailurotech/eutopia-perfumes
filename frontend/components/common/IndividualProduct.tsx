import Image, { StaticImageData } from "next/image";
import { Literata } from "next/font/google";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { storeProductToLocal } from "@/utils/local-storage-for-product";
import React from "react";
import { createSlug } from "@/utils/slug";

interface IndividualProductProps {
  image: string;
  tag: string;
  title: string;
  price: number;
  isHovered?: boolean;
  themeColor?: string;
  id?: number;
  variantId?: number;
}

const literata = Literata({ weight: "700", subsets: ["latin"] });
const splitOperator = "|";

export function IndividualProductForShoppingPage({
  image,
  tag,
  title,
  price,
  id,
  isHovered = false,
  themeColor,
  variantId,
}: IndividualProductProps) {
  const router = useRouter();
  const parsedTitle = title.includes(splitOperator)
    ? title.split(splitOperator).slice(0, 2)
    : [title];

  function clickHandler(e: React.MouseEvent<HTMLElement>, id: number) {
    if (!title) return;
    const slug = createSlug(title);
    const target = e.target as HTMLElement;
    if (target.tagName === "IMG" || target.tagName === "H5" || target.tagName === "H2") {
      router.push(`/product/${slug}`);
    }
  }

  return (
    <div 
      className="grid grid-rows-[repeat(4,auto)] items-center justify-center group gap-1 md:gap-2 2xl:gap-4 cursor-pointer text-center"
      onClick={(e) => id && clickHandler(e, id)}
    >
      <div className="w-full aspect-[23/30] relative rounded-xl">
        <Image
          src={image}
          alt={title}
          className="object-contain"
          fill
        />
        {isHovered && (
          <button
            type="button"
            className={clsx(
              `group-hover:block hidden ${themeColor} uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `,
              "border-2 border-default w-[90%] md:w-4/5 text-center p-1 rounded-xl font-extrabold cursor-pointer",
              "text-[8px] sm:text-xs md:text-sm"
            )}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              // Stop propagation to prevent triggering the parent navigation click
              e.stopPropagation();
              storeProductToLocal({
                id: id,
                variantId: variantId,
                image,
                title,
                maxPrice: price,
              });
            }}
          >
            add to cart
          </button>
        )}
      </div>
      <h5 className="capitalize text-xs xl:text-lg">{tag}</h5>
      <div className="flex flex-col justify-center gap-1 lg:gap-3 items-stretch min-h-[130px]">
        {parsedTitle.map((title, index) => {
          return (
            <h2
              key={title}
              className={clsx(
                literata.className,
                "uppercase text-center text-pretty",
                index === 0 &&
                  "text-[10px] sm:text-[14px] xl:text-base 2xl:text-xl",
                index != 0 && "text-[8px] sm:text-[10px] xl:text-xs 2xl:text-sm"
              )}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <h2 className="text-lg xl:text-[22px] 2xl:text-[30px]">${price}</h2>
    </div>
  );
}

export function IndividualProductForProductPage({
  image,
  tag,
  title,
  price,
  id,
}: IndividualProductProps) {
  const parsedTitle = title.includes(splitOperator)
    ? title.split(splitOperator).slice(0, 1)
    : [title];
  const router = useRouter();
  function clickHandler(e: React.MouseEvent<HTMLElement>, id: number) {
    if (!title) return;
    const slug = createSlug(title);
    console.log("Navigating to product with:", {
      originalTitle: title,
      generatedSlug: slug,
      id,
    });
    const target = e.target as HTMLElement;
    if (target.tagName === "IMG" || target.tagName === "H5" || target.tagName === "H2") {
      router.push(`/product/${slug}`);
    }
  }

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={(e) => id && clickHandler(e, id)}
    >
      <div className="h-64 aspect-[23/30] relative">
        <Image src={image} alt={title} className="object-contain" fill />
      </div>
      <h5 className="capitalize">{tag}</h5>
      <h2
        className={clsx(
          literata.className,
          "lg:min-h-16 xl:min-h-24 2xl:min-h-12 text-base sm:text-[20px] mt-6 mb-4 uppercase text-center"
        )}
      >
        {parsedTitle}
      </h2>
      <h2 className="text-[26px]">${price}</h2>
    </div>
  );
}
