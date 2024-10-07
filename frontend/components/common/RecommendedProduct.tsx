import Image, { StaticImageData } from "next/image";
import { Literata } from "next/font/google";
import clsx from "clsx";

interface RecommendedProductProps {
  image: string | StaticImageData;
  category: string;
  name: string;
  price: number;
}

const literata = Literata({ weight: "700", subsets: ["latin"] });

export function RecommendedProduct({
  image,
  category,
  name,
  price,
}: RecommendedProductProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-64">
        <Image src={image} alt={name} height={180} width={180} />
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
