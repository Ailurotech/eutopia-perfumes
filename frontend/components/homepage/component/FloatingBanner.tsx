import React, { useEffect, useState } from "react";
import Image from "next/image";
import { sanityClient } from "@/lib/sanityClient";
import { urlForImage } from "@/lib/sanity.image";

type BannerData = {
  text: string;
  textColor: string;
  backgroundColor: string;
  icon?: { asset: { url: string } };
};

export default function FloatingBanner() {
  const [banner, setBanner] = useState<BannerData | null>(null);

  useEffect(() => {
    const fetchBanner = async () => {
      const query = `*[_type == "floatingBanner"][0]{
        text,
        textColor,
        backgroundColor,
        "icon": icon.asset->url
      }`;
      const data = await sanityClient.fetch(query);
      setBanner(data);
    };
    fetchBanner();
  }, []);

  if (!banner) return null;

  return (
    <div
      className="relative w-full overflow-hidden py-2 px-4 bg-opacity-90"
      style={{
        backgroundColor: banner.backgroundColor,
        color: banner.textColor,
      }}
    >
      <div className="whitespace-nowrap flex items-center space-x-4 animate-marquee">
        {banner.icon && (
          <Image
            src={urlForImage(banner.icon).url()}
            alt="Banner Icon"
            width={30}
            height={30}
            className="inline-block"
          />
        )}
        <p className="text-lg font-semibold">{banner.text}</p>
      </div>
    </div>
  );
}
