import { FooterRoute } from "@/components/route";
import {
  facebookIconStyle,
  footerTheme,
  instagramIconStyle,
  twitterIconStyle,
  youtubeIconStyle,
} from "@/components/styles/footer-style";
import { Text, Link, Image } from "@chakra-ui/react";

export function Support() {
  return (
    <div className="flex-1 flex flex-col justify-center text-center space-y-4 mt-[calc(10%)] order-2 lg:order-none">
      <Text as="p" sx={footerTheme.baseStyle?.title}>
        SUPPORT
      </Text>
      <Link
        href={FooterRoute.FAQ.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        FAQ
      </Link>
      <Link
        href={FooterRoute.FRR.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        Shipping, Returns and Refund
      </Link>

      <div className="flex-1 flex justify-center text-center space-x-4">
        <Link href="#">
          <div className="w-[36px] h-[36px]">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              sx={facebookIconStyle}
            />
          </div>
        </Link>
        <Link href="#">
          <div className="w-[36px] h-[36px]">
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              sx={instagramIconStyle}
            />
          </div>
        </Link>
        <Link href="#">
          <div className="w-[36px] h-[36px]">
            <Image
              src="/images/twitter.png"
              alt="Twitter"
              sx={twitterIconStyle}
            />
          </div>
        </Link>
        <Link href="#">
          <div className="w-[36px] h-[36px]">
            <Image
              src="/images/youtube.png"
              alt="Youtube"
              sx={youtubeIconStyle}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
