import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/homepage.module.css";
import { IBasePerfumeSection } from "@/type";
import { urlForImage } from "@/lib/sanity.image";

interface IPerfumeNavProps extends IBasePerfumeSection {
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
    <section
      className={`flex flex-col md:flex-row mt-10 ${imageOnLeft ? "" : "md:flex-row-reverse"}`}
    >
      <div className="flex-1 flex justify-center md:justify-start">
        <Image
          src={urlForImage(image).url()}
          alt={description}
          width={383}
          height={500}
          className="max-w-full max-h-[500px] w-auto h-auto object-contain"
        />
      </div>

      <div className="flex-1 mt-4 md:ml-4 text-center">
        <h2
          className={`text-[24px] md:text-[32px] lg:text-[48px] font-playfair font-black text-[#66685A] mt-4 tracking-tight md:tracking-normal`}
        >
          {title}
        </h2>
        <p
          className={`text-[20px] md:text-[24px] lg:text-[32px] font-poppins text-[#66685A] mt-2 md:mt-4 tracking-tight md:tracking-normal`}
        >
          {description}
        </p>
        <Link
          href={linkUrl}
          className={`text-[20px] md:text-[24px] lg:text-[36px] ${styles["font-Poppins"]} text-[#66685A] underline mt-4 ml-3 md:mt-20 inline-block tracking-tight md:tracking-normal`}
        >
          Shop now
        </Link>
      </div>
    </section>
  );
};

export default PerfumeNav;
