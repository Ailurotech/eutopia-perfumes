import { IconBaseProps } from "react-icons";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const commonIcon = {
  search: IoMdSearch,
  shoppingBag: MdOutlineShoppingBag,
  menu: IoMenu,
};

const icons = {
  ...commonIcon,
};

export type Icon = keyof typeof icons;
type IconProps = {
  name: Icon;
} & IconBaseProps;
export function Icon({ name, ...props }: IconProps) {
  const Icon = icons[name];
  return <Icon {...props} />;
}
