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
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { EFilterListTitle } from "@/constants/shoppingPage";
import { IFilter, TFilterLists } from "@/interface/filter";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface DropdownMenuProps {
  menuTitle: EFilterListTitle;
  menuItems: TFilterLists;
  setSelectedFilters: Dispatch<SetStateAction<IFilter>>;
  selectedFilters: IFilter;
}

export function DropdownMenu({
  menuTitle,
  menuItems,
  selectedFilters,
  setSelectedFilters,
}: DropdownMenuProps) {
  const [value, setValue] = useState<TFilterLists>([]);

  useEffect(() => {
    if (!selectedFilters) return;
    const selected = selectedFilters[menuTitle];
    selected ? setValue(selected) : setValue([]);
  }, [selectedFilters, menuTitle]);

  const onChangeHandler = (e: TFilterLists) => {
    setValue(e);
    setSelectedFilters((prev) => {
      if (e.length === 0) {
        const { [menuTitle]: _, ...rest } = prev;
        return;
      }
      return {
        ...prev,
        [menuTitle]: e,
      };
    });
  };

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
        {menuTitle != EFilterListTitle.SortPrice && (
          <MenuOptionGroup
            type="checkbox"
            onChange={(e) => {
              onChangeHandler(e as TFilterLists);
            }}
            value={value}
          >
            {menuItems.map((item, index) => (
              <MenuItemOption key={index} value={item}>
                {item}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        )}
        {menuTitle === EFilterListTitle.SortPrice && (
          <MenuOptionGroup
            onChange={(e) => {
              const data = [e];
              onChangeHandler(data as TFilterLists);
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
