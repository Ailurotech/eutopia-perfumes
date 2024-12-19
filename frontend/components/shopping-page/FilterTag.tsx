import { Icon } from "../common/Icon";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@chakra-ui/react";
import { IFilter } from "@/interface/filter";

interface FilterTagProps {
  filter: string;
  setSelectedFilters: Dispatch<SetStateAction<IFilter>>;
}

export function FilterTag({ filter, setSelectedFilters }: FilterTagProps) {
  const handleFilterTagsClick = (filter: string) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      for (const key in updatedFilters) {
        if (updatedFilters[key].includes(filter)) {
          updatedFilters[key] = updatedFilters[key].filter(
            (item) => item !== filter
          );
        }
        if (updatedFilters[key].length === 0) {
          delete updatedFilters[key];
        }
      }
      return updatedFilters;
    });
  };

  return (
    <Button
      className={clsx(
        "bg-[#D9D9D9] rounded-lg py-2 px-2 xl:px-4 flex items-center font-black",
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
