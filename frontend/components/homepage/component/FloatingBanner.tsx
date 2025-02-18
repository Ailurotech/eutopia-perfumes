import React, { useEffect, useState } from "react";
import Image from "next/image";
import { sanityClient } from "@/lib/sanityClient";
import { urlForImage } from "@/lib/sanity.image";

type FloatingBannerData = {
  textColor: string;
  backgroundColor: string;
  icon?: string;
  messages?: string[];
};

export default function FloatingBanner() {
  const [banner, setBanner] = useState<FloatingBannerData | null>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const query = `*[_type == "floatingBanner"][0]{
        textColor,
        backgroundColor,
        "icon": icon.asset->url,
        messages
      }`;
        const data = await sanityClient.fetch(query);
        setBanner(data);
      } catch (error) {
        console.log("Failed to fetch banner data:", error);
      }
    };
    fetchBannerData();
  }, []);

  useEffect(() => {
    if (!banner || !banner.messages?.length) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % banner.messages.length
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [banner]);

  if (!banner || !banner.messages || banner.messages.length === 0) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className="relative w-full overflow-hidden py-2 px-4 flex items-center justify-center"
      style={{
        backgroundColor: banner.backgroundColor,
        color: banner.textColor,
      }}
    >
      <p
        className="text-lg font-semibold"
        style={{
          display: "inline-block",
          animation: "marquee 15s linear infinite",
        }}
      >
        <p className="w-full flex justify-center items-center space-x-2 gap-x-2">
          {banner.icon && (
            <Image
              src={urlForImage(banner.icon).url()}
              alt="Banner Icon"
              width={30}
              height={30}
            />
          )}
          {banner.messages[currentMessageIndex]}
        </p>
      </p>
    </div>
  );
}
