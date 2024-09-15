import Navigation from "@/components/homepage/layout/Navigation";
import { buttonTheme } from "@/components/homepage/styles/button-style";
import "@/styles/globals.css";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { Button, Drawer } = chakraTheme.components;

  const theme = extendBaseTheme({
    components: {
      Button: buttonTheme,
      Drawer,
    },
  });
  return (
    <ChakraBaseProvider theme={theme}>
      <Navigation>
        <main className="relative top-[70px] lg:top-[100px] xl:top-32">
          <Component {...pageProps} />
        </main>
      </Navigation>
    </ChakraBaseProvider>
  );
}
