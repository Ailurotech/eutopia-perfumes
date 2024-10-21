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
  SelectedFilters,
} from "../shopping-page/utils/filters";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface DropdownMenuProps {
  menuTitle: FilterListTitle;
  menuItems: readonly FilterListFilters[];
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters[]>>;
  selectedFilters: SelectedFilters[];
}

export function DropdownMenu({
  menuTitle,
  menuItems,
  setSelectedFilters,
  selectedFilters,
}: DropdownMenuProps) {
  const [value, setValue] = useState<FilterListFilters[]>([]);

  useEffect(() => {
    const selectedValues = selectedFilters?.find(
      (filter) => filter.title === menuTitle
    );
    setValue(selectedValues?.conditions || []);
  }, [selectedFilters, menuTitle]);

  function onChangeHandler(e: FilterListFilters[]) {
    if (e.length === 0) {
      setSelectedFilters((prev) => {
        return prev.filter((filter) => filter.title !== menuTitle);
      });
      return;
    }
    const selectedFilters = { title: menuTitle, conditions: e };
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
              onChangeHandler(data as FilterListFilters[]);
            }}
            type="radio"
            value={value[0] || ""}
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
