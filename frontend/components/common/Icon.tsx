import { IconBaseProps } from "react-icons";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const commonIcon = {
  search: IoMdSearch,
  shoppingBag: MdOutlineShoppingBag,
  menu: IoMenu,
};

const productIcon = {
  warehouse: MdOutlineWarehouse,
  info: IoIosInformationCircleOutline,
  search: IoSearch,
};

const icons = {
  ...commonIcon,
  ...productIcon,
};

export type Icon = keyof typeof icons;
type IconProps = {
  name: Icon;
} & IconBaseProps;
export function Icon({ name, ...props }: IconProps) {
  const Icon = icons[name];
  return <Icon {...props} />;
}
