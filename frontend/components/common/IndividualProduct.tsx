import Image, { StaticImageData } from "next/image";
import { Literata } from "next/font/google";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import {
  ILocalStorage,
  ISingleProductForLocalStorage,
  ProductType,
} from "@/type";
import { storeProductToLocal } from "@/utils/local-storage-for-product";
interface IndividualProductProps {
  image: string;
  tag: string;
  title: string;
  price: number;
  isHovered?: boolean;
  themeColor?: string;
  id?: number;
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
}: IndividualProductProps) {
  const router = useRouter();
  const parsedTitle = title.includes(splitOperator)
    ? title.split(splitOperator).slice(0, 2)
    : [title];

  function clickHandler(id: number) {
    router.push(`/product/${id}`);
  }

  return (
    <div className="flex flex-col items-center group gap-1 md:gap-2 2xl:gap-4 justify-between cursor-pointer">
      <div className="w-full aspect-[23/30] relative rounded-xl">
        <Image
          src={image}
          alt={title}
          className="object-contain"
          fill
          onClick={() => clickHandler(id)}
        />
        {isHovered && (
          <button
            type="button"
            className={clsx(
              `group-hover:block hidden ${themeColor} uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `,
              "border-2 border-default w-4/5 text-center py-1 rounded-xl font-extrabold cursor-pointer",
              "text-xs md:text-sm"
            )}
            onClick={() => {
              storeProductToLocal({ id, image, title, maxPrice: price });
            }}
          >
            add to cart
          </button>
        )}
      </div>
      <h5 className="capitalize text-xs xl:text-lg">{tag}</h5>
      <div className="min-h-[140px] md:min-h-[120px] xl:min-h-28 2xl:min-h-32 flex flex-col justify-start gap-1 lg:gap-3">
        {parsedTitle.map((title, index) => {
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
  function clickHandler(id: number) {
    router.push(`/product/${id}`);
  }

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={() => clickHandler(id)}
    >
      <div className="h-64 aspect-[23/30] relative">
        <Image src={image} alt={title} className="object-contain" fill />
      </div>
      <h5 className="capitalize">{tag}</h5>
      <h2
        className={clsx(
          literata.className,
          "xl:min-h-24 2xl:min-h-12 text-[20px] mt-6 mb-4 uppercase text-center"
        )}
      >
        {parsedTitle}
      </h2>
      <h2 className="text-[26px]">${price}</h2>
    </div>
  );
}
