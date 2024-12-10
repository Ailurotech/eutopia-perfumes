import Link from "next/link";
import { Icon } from "../../common/Icon";
import { Poppins } from "next/font/google";
import { cva, type VariantProps } from "class-variance-authority";
import { NavigationMenuTypes } from "../../route";
import clsx from "clsx";

export interface NavigationMenuVariants
  extends VariantProps<typeof navigationMenuVariants> {}

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const navigationMenuVariants = cva(poppins.className, {
  variants: {
    direction: {
      vertical: ["text-base"],
      horizontal: [
        "hidden text-sm md:block lg:text-lg xl:text-xl 2xl:text-2xl",
      ],
    },
    defaultVariant: {
      direction: "horizontal",
    },
  },
});

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
  const NavigationButton = (
    <button>
      <Icon
        name={iconName!}
        className="md:text-[20px] lg:text-[30px] xl:text-[40px]"
      />
    </button>
  );

  return (
    <ul
      className={clsx(
        direction == "horizontal" &&
          "flex gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 items-center tracking-wide md:tracking-widest",
        direction == "vertical" && "space-y-4"
      )}
    >
      {iconPosition == "left" && NavigationButton}
      {Object.values(navigationMenuRoute).map((route) => (
        <li key={route.Name} className={navigationMenuVariants({ direction })}>
          <Link href={route.Path}>{route.Name}</Link>
        </li>
      ))}
      {iconPosition == "right" && NavigationButton}
    </ul>
  );
}
