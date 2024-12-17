import { IRecommendedProduct } from "@/interface/product";
import Image from "next/image";
import { useRouter } from "next/router";

interface IIndividualSearchProduct {
  item: IRecommendedProduct;
  handleOnClose: () => void;
}

export function IndividualSearchProduct({
  item,
  handleOnClose,
}: IIndividualSearchProduct) {
  const router = useRouter();
  return (
    <div key={item.id} className="flex flex-col items-center">
      {/* image */}
      <div
        className="w-[100px] h-[100px] rounded-lg relative overflow-clip cursor-pointer"
        onClick={() => {
          router.push(`/product/${item.id}`);
          handleOnClose();
        }}
      >
        <Image src={item.image} alt={item.title} fill />
      </div>
      {/* title */}
      <div className="max-w-[150px] md:max-w-[180px] lg:max-w-[220px] text-pretty">
        {item.title.split("|").map((title, index) =>
          index === 0 ? (
            <h1 key={index} className="text-sm font-bold text-center">
              {title}
            </h1>
          ) : (
            <p key={index} className="text-xs text-center">
              {title}
            </p>
          )
        )}
      </div>
    </div>
  );
}
