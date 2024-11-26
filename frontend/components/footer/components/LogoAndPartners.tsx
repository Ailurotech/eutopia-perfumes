import { FooterRoute } from "@/components/route";
import { footerTheme } from "@/components/styles/footer-style";
import { Text, Link, Image } from "@chakra-ui/react";

export function LogoAndPartners() {
  return (
    <div className="flex-1 flex-col flex items-center justify-center text-center space-y-8 mt-[calc(10%)] mb-[calc(4%)] order-3 lg:order-none">
      <div>
        <Image src="/images/eutopia.png" alt="Eutopia Logo" />
      </div>
      <div className="flex-1 flex justify-center text-center space-x-1">
        <Link
          href={FooterRoute.Privacy.Path}
          sx={{
            ...footerTheme.baseStyle?.link,
          }}
        >
          Privacy Policy
        </Link>
        <Text sx={footerTheme.baseStyle?.text}>|</Text>
        <Link
          href={FooterRoute.Privacy.Path}
          sx={{
            ...footerTheme.baseStyle?.link,
          }}
        >
          Terms of Service
        </Link>
      </div>
      <div>
        <Image src="/images/payment.png" alt="Payment Methods" />
      </div>
      <div>
        <Text sx={footerTheme.baseStyle?.text}>
          © Copyright Eutopia Perfumes. All Rights Reserved
        </Text>
      </div>
    </div>
  );
}
