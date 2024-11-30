import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FilterLists, FilterListTitle, SelectedFilters } from "@/type";
import { Icon } from "@/components/common/Icon";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface DropdownMenuProps {
  menuTitle: string;
  menuItems: string[];
  setSelectedFilters?: Dispatch<SetStateAction<SelectedFilters[]>>;
  selectedFilters?: SelectedFilters[];
}

export function DropdownMenu({
  menuTitle,
  menuItems,
  setSelectedFilters,
  selectedFilters,
}: DropdownMenuProps) {
  const [value, setValue] = useState<FilterLists>([]);

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        className={clsx(
          poppins.className,
          "uppercase text-start text-sm lg:text-base xl:text-xl 2xl:text-2xl flex gap-4 md:gap-8 2xl:gap-20"
        )}
        as={Button}
        rightIcon={<Icon name="arrowDown" />}
        fontFamily={"Poppins"}
        fontWeight={"bold"}
      >
        {menuTitle}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup type="radio">
          {menuItems.map((item, index) => (
            <MenuItemOption key={index} value={item}>
              {item}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
