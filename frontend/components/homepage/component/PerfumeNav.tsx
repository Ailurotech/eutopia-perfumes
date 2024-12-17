import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity.image";
import { IPerfume } from "@/interface/product";

interface IPerfumeNavProps extends IPerfume {
  title: string;
  linkUrl: string;
  imageOnLeft?: boolean;
}

const PerfumeNav = ({
  title,
  description,
  image,
  linkUrl,
  imageOnLeft = true,
}: IPerfumeNavProps) => {
  return (
    <div
      className={`flex flex-1 flex-col lg:flex-row ${imageOnLeft ? "" : "lg:flex-row-reverse"} gap-10 lg:gap-20 xl:gap-40 justify-center items-center`}
    >
      <div className="flex justify-end md:justify-start">
        <Image
          src={urlForImage(image).url()}
          alt={description}
          width={383}
          height={500}
          className="max-w-full max-h-[500px] w-auto h-auto object-contain"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start justify-center gap-4 text-[#66685A] tracking-tight md:tracking-normal">
        <h2
          className={`text-[36px] sm:text-[40px] lg:text-[48px] font-playfair font-bold `}
        >
          {title}
        </h2>
        <p className={`text-[20px] sm:text-[24px] lg:text-[32px] font-poppins`}>
          {description}
        </p>
        <Link
          href={linkUrl}
          className={`text-[30px] lg:text-[36px] font-poppins underline ml-3 mt-6 lg:mt-20 inline-block`}
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default PerfumeNav;
