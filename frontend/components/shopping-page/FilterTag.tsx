import { Button } from "@chakra-ui/button";
import { Icon } from "../common/Icon";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { SelectedFilters } from "@/type";

interface FilterTagProps {
  filter: string;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters[]>>;
}

export function FilterTag({ filter, setSelectedFilters }: FilterTagProps) {
  const handleFilterTagsClick = (filter: string) => {
    setSelectedFilters((prev) => {
      const remainSelectedConditions = prev.map((item) => {
        const newCondition = item.filterLists.filter((f: string) => {
          return f.toLowerCase() !== filter.toLowerCase();
        });

        return { ...item, filterLists: newCondition };
      });

      const exceptEmptyConditions = remainSelectedConditions.filter(
        (item) => item.filterLists.length > 0
      );
      return exceptEmptyConditions;
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
        const condition = e.currentTarget.innerText;
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
