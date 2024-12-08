import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Libre_Bodoni, Poppins } from "next/font/google";
import { StarRating } from "./StarRating";
import { NumberAdder } from "./NumberAdder";
import { Button } from "@chakra-ui/react";
import { Icon } from "@/components/common/Icon";
import { useState } from "react";
import { ProductPageContent } from "@/type";
import { parseWeight } from "@/utils";
import { covertPageToPathName } from "@/utils/page-path-name-convert";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const libreBodoni = Libre_Bodoni({ weight: "400", subsets: ["latin"] });

interface DetailedProductProps {
  detailedProductContent: Omit<ProductPageContent, "description" | "comments">;
}

export function DetailedProduct({
  detailedProductContent,
}: DetailedProductProps) {
  const { title, maxPrice, image, tag, avgStar, weight, productType, sku } =
    detailedProductContent;
  const [quantity, setQuantity] = useState(1);
  const pathName = covertPageToPathName(tag);
  const weightOfOz = parseWeight(weight);
  return (
    <div
      className={clsx(
        poppins.className,
        "grid-rows-2 gap-10 grid xl:grid-cols-2 xl:grid-rows-none"
      )}
    >
      <div className="relative">
        <Image src={image} alt="perfume" fill className="object-contain" />
      </div>
      <div className="2xl:p-5 flex flex-col gap-[26px] 2xl:gap-8">
        <h1 className="text-[32px] 2xl:text-[40px] tracking-[0.4rem]">
          PERFUME
        </h1>
        <div className="space-y-3">
          <h1 className={clsx(libreBodoni.className, "text-3xl 2xl:text-4xl")}>
            {title}
          </h1>
          <div className="space-y-1">
            <span className="flex gap-2">
              <h3>SKU:{sku}</h3>
              <h3>
                Category:
                <Link href={`/${pathName}`} className="underline capitalize">
                  {tag}
                </Link>
              </h3>
              <h3>
                Tag:
                <Link href={`/${pathName}`} className="underline">
                  {productType}
                </Link>
              </h3>
            </span>
          </div>
          <span className="flex gap-3">
            <StarRating starNum={avgStar} />
            <Link href="/product" className="underline text-lg 2xl:text-xl">
              Read Review
            </Link>
          </span>
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold">{`${weight}/${weightOfOz}`}</h3>
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
            ${quantity ? (quantity * maxPrice).toFixed(2) : 0}
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
