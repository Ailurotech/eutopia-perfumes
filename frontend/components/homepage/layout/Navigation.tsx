import { NavigationRoute, RoutRoute } from "../route";
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
        <nav className=" w-screen flex md:h-[70px] lg:h-[100px] xl:h-32 text-[#66685A] justify-evenly bg-white items-center md:items-end py-4 lg:py-6 xl:py-8 lg:gap-10 xl:gap-12 2xl:gap-16">
          <ul className="flex md:gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 items-center tracking-widest">
            <NavigationMenu
              navigationMenuRoute={NavigationMenuLeftPart}
              iconName="search"
              iconPosition="left"
              direction="horizontal"
            />
          </ul>
          <NavigationDrawer />
          <Link
            href={RoutRoute.Rout.Path}
            className={clsx(
              playFair.className,
              "text-xl md:text-2xl lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] flex items-start h-full tracking-widest"
            )}
          >
            <h1>Eutopia</h1>
          </Link>
          <ul className="flex md:gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 items-center tracking-widest">
            <NavigationMenu
              navigationMenuRoute={NavigationMenuRightPart}
              iconName="shoppingBag"
              iconPosition="right"
              direction="horizontal"
            />
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}
