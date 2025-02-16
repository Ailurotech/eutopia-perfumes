import { footerTheme } from "@/components/styles/footer-style";
import { Text, Link } from "@chakra-ui/react";

export function EmailAndAddress() {
  return (
    <div className="flex-1 flex flex-col text-center space-y-4">
      <Text as="p" sx={footerTheme.baseStyle?.title}>
        EMAIL
      </Text>
      <Link
        href="mailto:info@eutopiaperfumes.com.au"
        sx={footerTheme.baseStyle?.link}
      >
        info@eutopiaperfumes.com.au
      </Link>

      <Text as="p" sx={footerTheme.baseStyle?.title}>
        ADDRESS
      </Text>
      <Text as="p" sx={footerTheme.baseStyle?.text}>
        Unit 9/54 Quilton Place
        <br />
        Crestmead
        <br />
        QLD 4132
      </Text>
    </div>
  );
}
