import React, { useEffect, useState } from "react";
import Image from "next/image";
import { sanityClient } from "@/lib/sanityClient";
import { urlForImage } from "@/lib/sanity.image";

type BannerSettings = {
  textColor: string;
  backgroundColor: string;
  icon?: { asset: { url: string } };
};

type BannerMessages = {
  messages: string[];
};

export default function FloatingBanner() {
  const [settings, setSettings] = useState<BannerSettings | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const fetchBannerData = async () => {
      const settingsQuery = `*[_type == "floatingBannerSettings"][0]{
        textColor,
        backgroundColor,
        "icon": icon.asset->url
      }`;
      const messagesQuery = `*[_type == "floatingBannerMsgs"][0]{
        messages
      }`;
      const settingsData = await sanityClient.fetch(settingsQuery);
      const messagesData = await sanityClient.fetch(messagesQuery);
      setSettings(settingsData);
      setMessages(messagesData?.messages || []);
    };

    fetchBannerData();
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [messages]);

  if (!settings || messages.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden py-2 px-4 flex items-center justify-center"
      style={{
        backgroundColor: settings.backgroundColor,
        color: settings.textColor,
      }}
    >
      <p
        className="text-lg font-semibold animate-marquee"
        key={currentMessageIndex}
        style={{
          animation: "marquee 15s linear infinite",
        }}
      >
        <div className="w-full flex justify-center items-center space-x-2 gap-x-2">
          {settings.icon && (
            <Image
              src={urlForImage(settings.icon).url()}
              alt="Banner Icon"
              width={30}
              height={30}
            />
          )}
          {messages[currentMessageIndex]}
        </div>
      </p>
    </div>
  );
}
