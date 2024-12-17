import clsx from "clsx";
import { DropdownMenu } from "./DropdownMenu";
import { IndividualProductForShoppingPage } from "../common/IndividualProduct";
import { FilterTag } from "./FilterTag";
import { Pagination } from "./Pagination";
import { cva, type VariantProps } from "class-variance-authority";
import { usePagination } from "@/hooks/usePagination";
import { useEffect, useState, useMemo } from "react";
import { IProduct } from "@/interface/product";
import { IFilter } from "@/interface/filter";
import { IPageSetting } from "@/interface/pages/pageSetting";
import { filter, getFilterLists } from "@/utils/filter";

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

interface IShoppingDisplayProps extends ShoppingDisplayVariants {
  products: IProduct[];
  pageSetting: IPageSetting;
}

export function ShoppingDisplay({
  variant,
  products,
  pageSetting,
}: IShoppingDisplayProps) {
  const filterLists = getFilterLists(pageSetting);
  const [selectedFilters, setSelectedFilters] = useState<IFilter>(null);
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);
  const displayNum = 16;
  const { currentPage, setCurrentPage, displayProducts } = usePagination({
    filteredProducts,
    displayNum,
  });
  console.log(selectedFilters);
  useEffect(() => {
    if (selectedFilters && Object.keys(selectedFilters).length > 0) {
      const filtered = filter(products, selectedFilters);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, selectedFilters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts, setCurrentPage]);

  return (
    <div
      className={clsx(
        shoppingDisplayVariants({ variant }),
        "px-6 sm:px-14 md:px-20 lg:px-40 xl:px-48 2xl:px-56 py-4 sm:py-20 space-y-10 md:space-y-20"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-4 grid-rows-[repeat(7,auto)]",
          "gap-y-4 lg:gap-y-7 xl:gap-y-10 gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-20"
        )}
      >
        <div className="col-span-4">
          <div className="flex justify-between gap-4 lg:gap-10 xl:gap-16 flex-wrap">
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
            {selectedFilters &&
              Object.values(selectedFilters).map((filter) =>
                filter.map((filter) => (
                  <FilterTag
                    key={filter}
                    filter={filter}
                    setSelectedFilters={setSelectedFilters}
                  />
                ))
              )}
          </div>
        </div>
        {!displayProducts.length && (
          <div className="col-span-4 flex justify-center">
            <h1 className="text-3xl font-black">No products found</h1>
          </div>
        )}
        {displayProducts.map((product, index) => (
          <IndividualProductForShoppingPage
            key={index}
            image={product.image}
            title={product.title}
            tag={product.tag}
            price={product.maxPrice}
            id={product.id}
            variantId={product.variantId}
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
