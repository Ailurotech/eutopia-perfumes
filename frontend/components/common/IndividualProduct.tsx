import Image, { StaticImageData } from "next/image";
import { Literata } from "next/font/google";
import clsx from "clsx";
import style from "styled-jsx/style";

interface IndividualProductProps {
  image: string | StaticImageData;
  category: string;
  name: string;
  price: number;
  isHovered?: boolean;
  themeColor?: string;
}

const literata = Literata({ weight: "700", subsets: ["latin"] });

export function IndividualProduct({
  image,
  category,
  name,
  price,
  isHovered = false,
  themeColor,
}: IndividualProductProps) {
  return (
    <div className="flex flex-col items-center group gap-4">
      <div className="w-full aspect-[23/30] relative rounded-xl">
        <Image src={image} alt={name} className="object-contain" fill />
        {isHovered && (
          <span
            className={clsx(
              `group-hover:block hidden ${themeColor} uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-default w-4/5 text-center py-1 rounded-xl text-sm font-extrabold cursor-pointer`
            )}
          >
            add to cart
          </span>
        )}
      </div>
      <h5 className="capitalize">{category}</h5>
      <h2
        className={clsx(literata.className, "text-[20px] mt-2 mb-1 uppercase")}
      >
        {name}
      </h2>
      <h2 className="text-[26px]">${price}</h2>
    </div>
  );
}