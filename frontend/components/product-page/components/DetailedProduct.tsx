import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Libre_Bodoni, Poppins } from "next/font/google";
import { NavigationRoute } from "@/components/route";
import { StarRating } from "./StarRating";
import { NumberAdder } from "./NumberAdder";
import { Button } from "@chakra-ui/react";
import { Icon } from "@/components/common/Icon";
import { useState } from "react";
import { ProductPageContent } from "@/type";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const libreBodoni = Libre_Bodoni({ weight: "400", subsets: ["latin"] });

interface DetailedProductProps {
  detailedProductContent: Omit<ProductPageContent, "description">;
}

export function DetailedProduct({
  detailedProductContent,
}: DetailedProductProps) {
  const { name, slug, price, image, volumeOfMl, volumeOfOz, category, tag } =
    detailedProductContent;
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className={clsx(
        poppins.className,
        "flex flex-col gap-10 xl:gap-10 xl:grid xl:grid-cols-[50%_1fr]"
      )}
    >
      <Image src={image} alt="perfume" width={800} height={800} />
      <div className="xl:p-10 flex flex-col gap-[26px] 2xl:gap-8">
        <h1 className="text-[32px] 2xl:text-[40px] tracking-[0.4rem]">
          PERFUME
        </h1>
        <div className="space-y-3">
          <h1 className={clsx(libreBodoni.className, "text-3xl 2xl:text-4xl ")}>
            {name}
          </h1>
          <div className="space-y-1">
            <span className="flex gap-2">
              <h3>SKU:{slug}</h3>
              <h3>
                Category:
                <Link href={`/${category}`} className="underline capitalize">
                  {category}
                </Link>
              </h3>
              <h3>
                Tag:
                <Link href={`/${category}`} className="underline">
                  {tag}
                </Link>
              </h3>
            </span>
          </div>
          <span className="flex gap-3">
            <StarRating starNum={4} />
            <Link href="/product" className="underline text-lg 2xl:text-xl">
              Read Review
            </Link>
          </span>
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold">
              {volumeOfMl}ml / {volumeOfOz} oz
            </h3>
            <span className="text-xl">
              {"This item has\n"}
              <Link href="/product" className="underline">
                special conditions for returns
              </Link>
            </span>
          </div>
          <div className="flex gap-4">
            <NumberAdder onSetQuantity={setQuantity} />
            <Button className="bg-default text-white px-24 rounded-xl font-bold text-sm uppercase">
              Add To Cart
            </Button>
          </div>
          <div className="text-[32px] font-black">
            ${quantity ? (quantity * price).toFixed(2) : 0}
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-lg">
            <Icon name="warehouse" className="text-black" />
            <span className="text-[#0d5257] font-bold">
              Find your item in store
            </span>
          </div>
          <div className="bg-[#e4f0f5] py-4 px-8 border-l-4 border-[#79b6cb] grid grid-cols-[50px_1fr] grid-rows-2 items-center max-w-[80%] xl:max-w-full">
            <Icon name="info" className="text-[#79b6cb] text-3xl"></Icon>
            <h5 className="text-xs text-black">
              We are unable to determine your nearest store
            </h5>
            <Icon name="search" className="text-black text-xl font-thin" />
            <h5 className="text-xs text-black font-bold">Set your store</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
