import Image from "next/image";

interface ServiceIconProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  imageWidth: number;
  imageHeight: number;
}

export function ServiceIcon({
  src,
  alt,
  title,
  description,
  imageWidth,
  imageHeight,
}: ServiceIconProps) {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-2 text-center xl:gap-4">
      <Image
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        style={{ width: "auto", height: "auto" }}
        className="sm:w-16 sm:h-16 md:w-auto md:h-auto"
      />
      <div className="xl:text-left xl:min-h-0">
        <p className="text-[#808274] text-xs md:text-sm font-merriweather lg:text-2xl">
          {title}
        </p>
        <p className="text-gray-400 text-xs font-light font-merriweather md:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
