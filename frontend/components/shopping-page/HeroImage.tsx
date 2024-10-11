import shoppingImage from "./assets/pexels-sebastian-312105 1.png";
import Image from "next/image";
import { NavigationRoute } from "../route";
import { Potta_One, Poppins } from "next/font/google";
import clsx from "clsx";

const pottaOne = Potta_One({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export function HeroImage() {
  return (
    <div className="w-full aspect-[1440/600] relative">
      <Image src={shoppingImage} alt="hero pic" fill className="-z-10" />
      <span className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center gap-32">
        <h1 className={clsx(pottaOne.className, "text-[32px]")}>
          {'"Discover the Art of Sophisticated Scent."'}
        </h1>
        <NavigationRoute.ForHer.Link
          className={clsx(poppins.className, "underline text-[20px]")}
        >
          {"Women's Perfume"}
        </NavigationRoute.ForHer.Link>
      </span>
    </div>
  );
}
