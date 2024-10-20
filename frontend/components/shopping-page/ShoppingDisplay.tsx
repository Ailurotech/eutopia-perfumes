import clsx from "clsx";
import { DropdownMenu } from "../common/DropdownMenu";
import { IndividualProduct } from "../common/IndividualProduct";
import { FilterTag } from "./FilterTag";
import { Pagination } from "./Pagination";
import { cva, type VariantProps } from "class-variance-authority";
import { ProductType } from "@/type";
import { combinedFilter, filterLists, SelectedFilters } from "./utils/filters";
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
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters[]>();
  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(products);
  const { displayNum, currentPage, setCurrentPage, displayProducts } =
    usePagination({
      filteredProducts,
    });
  useEffect(() => {
    selectedFilters
      ? setFilteredProducts(combinedFilter(products, selectedFilters))
      : setFilteredProducts(products);
  }, [selectedFilters]);
  return (
    <div
      className={clsx(
        shoppingDisplayVariants({ variant }),
        "px-14 md:px-20 lg:px-40 xl:px-56 py-20 space-y-20"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-4 grid-rows-[50px_50px_4fr]",
          "gap-y-4 lg:gap-y-7 xl:gap-y-10 gap-x-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20"
        )}
      >
        <div className="col-span-4">
          <div className="flex justify-between gap-4 lg:gap-10 xl:gap-16">
            {filterLists.map((list) => (
              <DropdownMenu
                key={list.title}
                menuTitle={list.title}
                menuItems={list.filters}
                setSelectedFilters={setSelectedFilters}
              />
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-start gap-4 lg:gap-8">
            {selectedFilters?.map((filter) =>
              filter.filters.map((filter, index) => (
                <FilterTag key={index} filter={filter} />
              ))
            )}
          </div>
        </div>
        {displayProducts.map((product, index) => (
          <IndividualProduct
            key={index}
            image={product.image}
            name={product.title}
            category={product.tag}
            price={product.maxPrice}
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
