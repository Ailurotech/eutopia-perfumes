import clsx from "clsx";
import { DropdownMenu } from "./DropdownMenu";
import { IndividualProductForShoppingPage } from "../common/IndividualProduct";
import { FilterTag } from "./FilterTag";
import { Pagination } from "./Pagination";
import { cva, type VariantProps } from "class-variance-authority";
import { ProductType } from "@/type";
import { filterProcessor, filterLists, SelectedFilters } from "./utils/filters";
import { usePagination } from "@/hooks/usePagination";
import { useEffect, useState } from "react";

export type ShoppingDisplayVariants = VariantProps<
  typeof shoppingDisplayVariants
>;
export const shoppingDisplayVariants = cva("", {
  variants: {
    variant: {
      all: ["bg-all"],
      forHim: ["bg-forHim"],
      forHer: ["bg-forHer"],
      neutral: ["bg-neutral"],
    },
  },
});

type ShoppingDisplayProps = {
  products: ProductType[];
} & ShoppingDisplayVariants;

export function ShoppingDisplay({ variant, products }: ShoppingDisplayProps) {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(products);
  const { displayNum, currentPage, setCurrentPage, displayProducts } =
    usePagination({
      filteredProducts,
    });

  useEffect(() => {
    selectedFilters
      ? setFilteredProducts(filterProcessor(products, selectedFilters))
      : setFilteredProducts(products);
  }, [selectedFilters, products]);
  return (
    <div
      className={clsx(
        shoppingDisplayVariants({ variant }),
        "px-14 md:px-20 lg:px-40 xl:px-48 2xl:px-56 py-20 space-y-20"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-4 grid-rows-[3%_min(3%,1fr)_5fr]",
          "gap-y-4 lg:gap-y-7 xl:gap-y-10 gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-20"
        )}
      >
        <div className="col-span-4">
          <div className="flex justify-between gap-4 lg:gap-10 xl:gap-16">
            {filterLists.map((list) => (
              <DropdownMenu
                key={list.title}
                menuTitle={list.title}
                menuItems={list.filterLists}
                setSelectedFilters={setSelectedFilters}
                selectedFilters={selectedFilters}
              />
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-start gap-x-4 lg:gap-x-8 flex-wrap gap-y-2">
            {selectedFilters?.map((filter) =>
              filter.filterLists.map((filter, index) => (
                <FilterTag
                  key={index}
                  filter={filter}
                  setSelectedFilters={setSelectedFilters}
                />
              ))
            )}
          </div>
        </div>
        {displayProducts.map((product, index) => (
          <IndividualProductForShoppingPage
            key={index}
            image={product.image}
            title={product.title}
            category={product.tag}
            price={product.maxPrice}
            id={product.id}
            isHovered={true}
            themeColor={shoppingDisplayVariants({ variant })}
          />
        ))}
      </div>
      <Pagination
        maxPage={Math.ceil(filteredProducts.length / displayNum)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
