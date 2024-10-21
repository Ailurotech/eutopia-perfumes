import { Button } from "@chakra-ui/button";
import { Icon } from "../common/Icon";
import clsx from "clsx";
import { FilterListFilters, SelectedFilters } from "./utils/filters";
import { Dispatch, SetStateAction } from "react";

interface FilterTagProps {
  filter: FilterListFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters[]>>;
}

export function FilterTag({ filter, setSelectedFilters }: FilterTagProps) {
  const handleFilterTagsClick = (condition: FilterListFilters) => {
    setSelectedFilters((prev) => {
      const res = prev.map((item) => {
        const newCondition = item.conditions.filter((f: string) => {
          return f.toLocaleLowerCase() !== condition.toLocaleLowerCase();
        });
        return { ...item, conditions: newCondition };
      });
      const allEmpty = res.every((item) => item.conditions.length === 0);
      return allEmpty ? [] : res;
    });
  };

  return (
    <Button
      className={clsx(
        "bg-[#D9D9D9] rounded-lg uppercase py-2 px-2 xl:px-4 flex items-center font-black",
        "text-[10px] lg:text-xs xl:text-[14px] 2xl:text-[16px]",
        "flex gap-2"
      )}
      onClick={(e) => {
        e.preventDefault;
        const condition = e.currentTarget.innerText as FilterListFilters;
        handleFilterTagsClick(condition);
      }}
    >
      {filter}
      <span className="bg-[#EEEEEE] rounded-full py-[2px] px-[3px]">
        <Icon name="close" />
      </span>
    </Button>
  );
}
