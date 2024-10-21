import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { Icon } from "./Icon";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import {
  FilterListFilters,
  FilterListTitle,
} from "../shopping-page/utils/filters";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface DropdownMenuProps {
  menuTitle: FilterListTitle;
  menuItems: readonly FilterListFilters[];
  setSelectedFilters: any;
}

export function DropdownMenu({
  menuTitle,
  menuItems,
  setSelectedFilters,
}: DropdownMenuProps) {
  function onChangeHandler(e: FilterListFilters[]) {
    if (e.length === 0) {
      setSelectedFilters((prev) => {
        return prev.filter((filter) => filter.title !== menuTitle);
      });
      return;
    }
    const selectedFilters = { title: menuTitle, filters: e };
    setSelectedFilters((prev) => {
      if (!prev) {
        return [selectedFilters];
      }

      const isExisting = prev.some(
        (filter) => filter.title === selectedFilters.title
      );

      if (isExisting) {
        return prev.map((filter) =>
          filter.title === selectedFilters.title ? selectedFilters : filter
        );
      }
      return [...prev, selectedFilters];
    });
  }

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        className={clsx(
          poppins.className,
          "uppercase text-start text-sm lg:text-base xl:text-xl 2xl:text-2xl flex gap-4 md:gap-10 lg:gap-14 2xl:gap-20"
        )}
        as={Button}
        rightIcon={<Icon name="arrowDown" />}
        fontFamily={"Poppins"}
        fontWeight={"bold"}
      >
        {menuTitle}
      </MenuButton>
      <MenuList>
        {menuTitle != FilterListTitle.SortPrice && (
          <MenuOptionGroup
            type="checkbox"
            onChange={(value) => onChangeHandler(value as FilterListFilters[])}
          >
            {menuItems.map((item, index) => (
              <MenuItemOption key={index} value={item}>
                {item}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        )}
        {menuTitle === FilterListTitle.SortPrice && (
          <MenuOptionGroup
            onChange={(value) => {
              const data = [value];
              onChangeHandler(data as FilterListFilters[]);
            }}
            type="radio"
          >
            {menuItems.map((item, index) => (
              <MenuItemOption key={index} value={item}>
                {item}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        )}
      </MenuList>
    </Menu>
  );
}
