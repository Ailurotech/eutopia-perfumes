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
import { Dispatch, SetStateAction } from "react";
import { ERatingOption, EReviewFilterOption, TCommentType } from "@/type";
import { Icon } from "@/components/common/Icon";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface DropdownMenuProps {
  menuTitle: string;
  menuItems: string[];
  setDisplayComments: Dispatch<SetStateAction<TCommentType[]>>;
}

export function DropdownMenu({
  menuTitle,
  menuItems,
  setDisplayComments,
}: DropdownMenuProps) {
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
        <MenuOptionGroup
          type="radio"
          onChange={(value) => {
            switch (value) {
              case EReviewFilterOption.MOST_RECENT:
                setDisplayComments((prev) => [
                  ...prev.sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  ),
                ]);
                break;
              case EReviewFilterOption.MOST_OLDEST:
                setDisplayComments((prev) => [
                  ...prev.sort(
                    (a, b) =>
                      new Date(a.createdAt).getTime() -
                      new Date(b.createdAt).getTime()
                  ),
                ]);
                break;
              default:
                break;
            }
          }}
        >
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
