import Navigation from "@/components/homepage/layout/Navigation";
import { buttonTheme } from "@/components/common/styles/button-style";
import "@/styles/globals.css";
import {
  extendBaseTheme,
  theme as chakraTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  const { Button, ...components } = chakraTheme.components;

  const theme = extendBaseTheme({
    components: {
      Button: buttonTheme,
      ...components,
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ChakraProvider>
  );
}
