import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { Icon } from "../common/Icon";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import { FilterLists, FilterListTitle, SelectedFilters } from "./utils/filters";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface DropdownMenuProps {
  menuTitle: FilterListTitle;
  menuItems: readonly FilterLists[];
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters[]>>;
  selectedFilters: SelectedFilters[];
}

export function DropdownMenu({
  menuTitle,
  menuItems,
  setSelectedFilters,
  selectedFilters,
}: DropdownMenuProps) {
  const [value, setValue] = useState<FilterLists[]>([]);

  useEffect(() => {
    const selectedValues = selectedFilters?.find(
      (filter) => filter.title === menuTitle
    );
    setValue(selectedValues?.filterLists);
  }, [selectedFilters, menuTitle]);

  function onChangeHandler(e: FilterLists[]) {
    if (e.length === 0) {
      setSelectedFilters((prev) => {
        return prev.filter((filter) => filter.title !== menuTitle);
      });
      return;
    }
    const selectedFilters = { title: menuTitle, filterLists: e };
    setSelectedFilters((prev = []) => {
      const isExisted = prev.some(
        (filter) => filter.title === selectedFilters.title
      );

      if (isExisted) {
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
        {menuTitle != FilterListTitle.SortPrice && (
          <MenuOptionGroup
            type="checkbox"
            onChange={(value) => onChangeHandler(value as FilterLists[])}
            value={value}
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
              onChangeHandler(data as FilterLists[]);
            }}
            type="radio"
            value={value ? value[0] : ""}
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
