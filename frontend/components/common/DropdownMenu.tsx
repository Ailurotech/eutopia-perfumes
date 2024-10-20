import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { Icon } from "./Icon";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import {
  FilterListFilters,
  FilterListTitle,
} from "../shopping-page/utils/comboFilter";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface DropdownMenuProps {
  buttonTitle: FilterListTitle;
  menuItems: readonly FilterListFilters[];
}

export function DropdownMenu({ buttonTitle, menuItems }: DropdownMenuProps) {
  return (
    <Menu>
      <MenuButton
        className={clsx(
          poppins.className,
          "uppercase text-start text-sm lg:text-base xl:text-xl 2xl:text-2xl flex"
        )}
        as={Button}
        rightIcon={<Icon name="arrowDown" />}
        fontFamily={"Poppins"}
        fontWeight={"bold"}
      >
        {buttonTitle}
      </MenuButton>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index} className={poppins.className}>
            <Checkbox>{item}</Checkbox>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
