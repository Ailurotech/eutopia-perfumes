import { NavigationRoute, RoutRoute } from "../../route";
import { NavigationMenu } from "./NavigationMenu";
import { Playfair_Display } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import { NavigationDrawer } from "./NavigationDrawer";

const playFair = Playfair_Display({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Navigation() {
  const { All, ForHer, ForHim, Neutral, ...NavigationMenuRightPart } =
    NavigationRoute;
  const NavigationMenuLeftPart = { All, ForHer, ForHim, Neutral };

  return (
    <>
      <header className="sticky top-0 z-10">
        <nav
          className={clsx(
            "w-screen flex h-[70px] lg:h-[100px] xl:h-32 text-default bg-white justify-evenly items-center md:items-end",
            "py-4 lg:py-6 xl:py-8 lg:gap-10 xl:gap-12 2xl:gap-16"
          )}
        >
          <NavigationMenu
            navigationMenuRoute={NavigationMenuLeftPart}
            iconName="search"
            iconPosition="left"
            direction="horizontal"
          />
          <NavigationDrawer />
          <Link
            href={RoutRoute.Rout.Path}
            className={clsx(
              playFair.className,
              "text-xl md:text-2xl lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] flex items-center md:items-start h-full tracking-widest"
            )}
          >
            <h1>Eutopia</h1>
          </Link>
          <NavigationMenu
            navigationMenuRoute={NavigationMenuRightPart}
            iconName="shoppingBag"
            iconPosition="right"
            direction="horizontal"
          />
        </nav>
      </header>
    </>
  );
}
