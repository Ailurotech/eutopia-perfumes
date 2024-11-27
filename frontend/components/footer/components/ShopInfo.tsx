import { FooterRoute, NavigationRoute, RoutRoute } from "@/components/route";
import { footerTheme } from "@/components/styles/footer-style";
import { Text, Link } from "@chakra-ui/react";

export function ShopInfo() {
  return (
    <div className="flex-1 flex flex-col text-center space-y-4">
      <Text as="p" sx={footerTheme.baseStyle?.title}>
        SHOP INFO
      </Text>
      <Link
        href={RoutRoute.Rout.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        Home
      </Link>
      <Link
        href={FooterRoute.AboutUs.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        About Us
      </Link>
      <Link
        href={FooterRoute.StoreLocation.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        Store Locations
      </Link>
      <Link
        href={NavigationRoute.Contact.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        Contact Us
      </Link>
    </div>
  );
}
