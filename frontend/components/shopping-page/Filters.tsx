import { Button } from "@chakra-ui/button";
import { Icon } from "../common/Icon";

interface FiltersProps {
  filter: string;
}

export function Filters({ filter }: FiltersProps) {
  return (
    <div className="bg-[#D9D9D9] rounded-lg uppercase py-2 px-4 flex items-center gap-2 font-black">
      {filter}
      <Button className="bg-[#EEEEEE] rounded-full py-[2px] px-[3px]">
        <Icon name="close" />
      </Button>
    </div>
  );
}
