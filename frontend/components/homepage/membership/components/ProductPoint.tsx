import Image from "next/image";

interface ProductPointProps {
  src: string;
  alt: string;
  description: string;
}

export function ProductPoint({ src, alt, description }: ProductPointProps) {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center text-center md:text-left gap-2">
      <div className="w-[20px] h-[20px] relative">
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
      </div>
      <p className="text-white text-xs text-center xl:text-start font-semibold lg:text-sm">
        {description}
      </p>
    </div>
  );
}
