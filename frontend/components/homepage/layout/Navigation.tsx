import { NavigationRoute, RoutRoute } from "../route";
import { NavigationMenu } from "./NavigationMenu";
import { Playfair_Display } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const playFair = Playfair_Display({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const { All, ForHer, ForHim, Neutral, ...NavigationMenuRightPart } =
    NavigationRoute;
  const NavigationMenuLeftPart = { All, ForHer, ForHim, Neutral };

  return (
    <>
      <header className="fixed top-0 z-10">
        <nav
          className=" w-screen flex h-32
         text-[#66685A] justify-evenly bg-white items-end py-4 xl:gap-16"
        >
          <NavigationMenu
            navigationMenuRoute={NavigationMenuLeftPart}
            iconName="search"
            iconPosition="left"
          />
          <Link
            href={RoutRoute.Rout.Path}
            className={clsx(
              playFair.className,
              "xl:text-[3rem] flex items-start h-full tracking-widest"
            )}
          >
            <h1>Eutopia</h1>
          </Link>
          <NavigationMenu
            navigationMenuRoute={NavigationMenuRightPart}
            iconName="shoppingBag"
            iconPosition="right"
          />
        </nav>
      </header>
      {children}
    </>
  );
}
