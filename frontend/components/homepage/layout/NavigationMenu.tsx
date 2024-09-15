import Link from "next/link";
import { Icon } from "../common/Icon";
import { Poppins } from "next/font/google";
import { cva, type VariantProps } from "class-variance-authority";
import { NavigationMenuTypes } from "../route";

export interface NavigationMenuVariants
  extends VariantProps<typeof navigationMenuVariants> {}

const navigationMenuVariants = cva("", {
  variants: {
    direction: {
      vertical: ["text-base"],
      horizontal: [
        "hidden md:text-sm md:block lg:text-lg xl:text-xl 2xl:text-2xl",
      ],
    },
    defaultVariant: {
      direction: "horizontal",
    },
  },
});

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

type NavigationMenuProps = {
  navigationMenuRoute: Partial<NavigationMenuTypes>;
  iconPosition?: "left" | "right";
  iconName?: Icon;
  direction: "vertical" | "horizontal";
} & NavigationMenuVariants;

export function NavigationMenu({
  navigationMenuRoute,
  iconPosition,
  iconName,
  direction,
}: NavigationMenuProps) {
  return (
    <>
      {iconPosition == "left" && (
        <Icon
          name={iconName!}
          className="md:text-[20px] lg:text-[30px] xl:text-[40px]"
        />
      )}
      {Object.values(navigationMenuRoute).map((route) => (
        <li key={route.Name} className={navigationMenuVariants({ direction })}>
          <Link href={route.Path}>{route.Name}</Link>
        </li>
      ))}
      {iconPosition == "right" && (
        <Icon
          name={iconName!}
          className="md:text-[20px] lg:text-[30px] xl:text-[40px]"
        />
      )}
    </>
  );
}
