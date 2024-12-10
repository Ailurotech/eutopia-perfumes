import Image from "next/image";
import { urlForImage } from "../../../lib/sanity.image";
import clsx from "clsx";

interface SanityImageProps {
  value: {
    asset: any;
    alt?: string;
    caption?: string;
    position?: "left" | "center" | "right" | "full";
    size?: "small" | "medium" | "large";
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
  };
}

const SanityImage = ({ value }: SanityImageProps) => {
  if (!value?.asset?._ref) {
    return null;
  }

  const sizeClasses = {
    small: "max-w-sm",
    medium: "max-w-2xl",
    large: "max-w-4xl",
  };

  const positionClasses = {
    left: "float-left mr-8 mb-4",
    center: "mx-auto",
    right: "float-right ml-8 mb-4",
    full: "w-full",
  };

  return (
    <figure
      className={clsx(
        "my-8",
        value.size && sizeClasses[value.size],
        value.position && positionClasses[value.position]
      )}
    >
      <div className="relative aspect-video">
        <Image
          src={urlForImage(value).url()}
          alt={value.alt || " "}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
        />
      </div>
      {value.caption && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

export default SanityImage;
