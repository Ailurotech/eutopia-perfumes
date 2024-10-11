import { DropdownMenu } from "../common/DropdownMenu";
import { IndividualProduct } from "../common/IndividualProduct";
import testImage from "./assets/Rectangle 1142.png";
import { Filters } from "./Filters";
import { Pagination } from "./Pagination";

const filterLists = [
  {
    title: "Inspired by",
    items: ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Accessories"],
  },
  {
    title: "Perfume Type",
    items: ["All", "For-Him", "For-Her", "Neutral"],
  },
  {
    title: "Size",
    items: ["All", "XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    title: "Sort by Price",
    items: ["All", "Low to High", "High to Low", "Discounted", "Best Sellers"],
  },
];

export function ShoppingDisplay() {
  return (
    <div className="bg-[#ECF2F5] px-56 py-20 space-y-20">
      <div className="grid grid-cols-4 grid-rows-[50px_50px_4fr] gap-y-10 gap-x-20">
        <div className="col-span-4">
          <div className="flex justify-between">
            {filterLists.map((list) => (
              <DropdownMenu
                key={list.title}
                buttonTitle={list.title}
                menuItems={list.items}
              />
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex">
            <Filters filter="chanel" />
          </div>
        </div>
        {Array.from({ length: 16 }).map((_, index) => (
          <IndividualProduct
            key={index}
            image={testImage}
            name="Armaf Passion"
            category="for him"
            price={51.74}
            isHovered={true}
            themeColor="#ECF2F5"
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
}
