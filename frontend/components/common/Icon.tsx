import { IconBaseProps } from "react-icons";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const commonIcon = {
  search: IoMdSearch,
  shoppingBag: MdOutlineShoppingBag,
  menu: IoMenu,
};

const productIcon = {
  warehouse: MdOutlineWarehouse,
  info: IoIosInformationCircleOutline,
  search: IoSearch,
  back: IoIosArrowBack,
  forward: IoIosArrowForward,
};

const homeBannerIcon = {
  arrow: FaRegArrowAltCircleRight,
};

const icons = {
  ...commonIcon,
  ...productIcon,
  ...homeBannerIcon,
};

export type Icon = keyof typeof icons;
type IconProps = {
  name: Icon;
} & IconBaseProps;
export function Icon({ name, ...props }: IconProps) {
  const Icon = icons[name];
  return <Icon {...props} />;
}
