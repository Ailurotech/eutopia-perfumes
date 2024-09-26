import Image, { StaticImageData } from "next/image";

interface RecommendedProductProps {
  image: string | StaticImageData;
  category: string;
  name: string;
  price: number;
}
export function RecommendedProduct({
  image,
  category,
  name,
  price,
}: RecommendedProductProps) {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt={name} />
      <h5>{category}</h5>
      <h2>{name}</h2>
      <h2>{price}</h2>
    </div>
  );
}
