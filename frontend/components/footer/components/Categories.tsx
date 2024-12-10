import { NavigationRoute } from "@/components/route";
import { footerTheme } from "@/components/styles/footer-style";
import { Text, Link } from "@chakra-ui/react";

export function Categories() {
  return (
    <div className="flex-1 flex flex-col text-center space-y-4">
      <Text as="p" sx={footerTheme.baseStyle?.title}>
        CATEGORIES
      </Text>
      <Link
        href={NavigationRoute.All.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        Shop All
      </Link>
      <Link
        href={NavigationRoute.ForHer.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        For Her
      </Link>
      <Link
        href={NavigationRoute.ForHim.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        For Him
      </Link>
      <Link
        href={NavigationRoute.Neutral.Path}
        sx={{
          ...footerTheme.baseStyle?.link,
        }}
      >
        Neutral
      </Link>
    </div>
  );
}
