import Link from "next/link";
import { NavigationMenuProps } from "../route";
import { Icon } from "../common/Icon";
import { Poppins } from "next/font/google";
import clsx from "clsx";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export function NavigationMenu({
  navigationMenuRoute,
  iconPosition,
  iconName,
}: {
  navigationMenuRoute: Partial<NavigationMenuProps>;
  iconPosition?: "left" | "right";
  iconName: Icon;
}) {
  return (
    <ul
      className={clsx(
        "flex xl:gap-12 items-center tracking-widest",
        poppins.className
      )}
    >
      {iconPosition == "left" && (
        <Icon name={iconName} className="xl:text-[40px]" />
      )}
      {Object.values(navigationMenuRoute).map((route) => (
        <li key={route.Name} className="xl:text-2xl">
          <Link href={route.Path}>{route.Name}</Link>
        </li>
      ))}
      {iconPosition == "right" && (
        <Icon name={iconName} className="xl:text-[60px]" />
      )}
    </ul>
  );
}
