import { FooterRoute } from "@/components/route";
import {
  facebookIconStyle,
  footerTheme,
  instagramIconStyle,
} from "@/components/styles/footer-style";
import { Text, Link, Image } from "@chakra-ui/react";

export function Support() {
  return (
    <div className="flex-1 flex flex-col text-center space-y-4">
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
        href={FooterRoute.RRP.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        Returns and Refund Policy
      </Link>
      <Link
        href={FooterRoute.Privacy.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        Privacy Policy
      </Link>
      <Link
        href={FooterRoute.Terms.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        Terms of Service
      </Link>
      <div className="flex-1 flex justify-center text-center space-x-4">
        <Link href="https://www.facebook.com/eutopiaperfumes/">
          <div className="w-[36px] h-[36px]">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              sx={facebookIconStyle}
            />
          </div>
        </Link>
        <Link href="https://www.instagram.com/eutopia.perfumes/">
          <div className="w-[36px] h-[36px]">
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              sx={instagramIconStyle}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
