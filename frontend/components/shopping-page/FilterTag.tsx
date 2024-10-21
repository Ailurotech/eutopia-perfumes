import { Button } from "@chakra-ui/button";
import { Icon } from "../common/Icon";
import clsx from "clsx";
import { FilterListFilters } from "./utils/filters";

interface FilterTagProps {
  filter: FilterListFilters;
  setSelectedFilters: any;
}

export function FilterTag({ filter, setSelectedFilters }: FilterTagProps) {
  const handleFilterTagsClick = (condition: FilterListFilters) => {
    setSelectedFilters((prev) => {
      return prev.map((item) => {
        const newCondition = item.filters.filter((f: string) => {
          return f.toLocaleLowerCase() !== condition.toLocaleLowerCase();
        });
        return { ...prev, filters: newCondition };
      });
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
