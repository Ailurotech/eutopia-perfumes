import Image, { StaticImageData } from "next/image";
import { Literata } from "next/font/google";
import clsx from "clsx";
import src from "@emotion/styled";
import { div, h5, h2 } from "framer-motion/client";

interface IndividualProductProps {
  image: string | StaticImageData;
  category: string;
  name: string;
  price: number;
  isHovered?: boolean;
  themeColor?: string;
}

const literata = Literata({ weight: "700", subsets: ["latin"] });

export function IndividualProductForShoppingPage({
  image,
  category,
  name,
  price,
  isHovered = false,
  themeColor,
}: IndividualProductProps) {
  const parsedName = name.split("|").slice(0, 2);
  return (
    <div className="flex flex-col items-center group gap-1 md:gap-2 2xl:gap-4 justify-between">
      <div className="w-full aspect-[23/30] relative rounded-xl">
        <Image src={image} alt={name} className="object-contain" fill />
        {isHovered && (
          <span
            className={clsx(
              `group-hover:block hidden ${themeColor} uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `,
              "border-2 border-default w-4/5 text-center py-1 rounded-xl font-extrabold cursor-pointer",
              "text-xs md:text-sm"
            )}
          >
            add to cart
          </span>
        )}
      </div>
      <h5 className="capitalize text-xs xl:text-lg">{category}</h5>
      <div className="min-h-[140px] md:min-h-[120px] lg:min-h-20 xl:min-h-28 2xl:min-h-32 flex flex-col justify-start gap-1 lg:gap-3">
        {parsedName.map((name, index) => {
          return (
            <h2
              key={index}
              className={clsx(
                literata.className,
                "uppercase text-center text-pretty",
                index === 0 && "text-[14px] xl:text-base 2xl:text-xl",
                index != 0 && "text-[10px] xl:text-xs 2xl:text-sm"
              )}
            >
              {name}
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
  category,
  name,
  price,
}: IndividualProductProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-64 aspect-[23/30] relative">
        <Image src={image} alt={name} className="object-contain" fill />
      </div>
      <h5 className="capitalize">{category}</h5>
      <h2
        className={clsx(literata.className, "text-[20px] mt-6 mb-4 uppercase")}
      >
        {name}
      </h2>
      <h2 className="text-[26px]">${price}</h2>
    </div>
  );
}
