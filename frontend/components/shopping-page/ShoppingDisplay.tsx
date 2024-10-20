import clsx from "clsx";
import { DropdownMenu } from "../common/DropdownMenu";
import { IndividualProduct } from "../common/IndividualProduct";
import { Filters } from "./Filters";
import { Pagination } from "./Pagination";
import { cva, type VariantProps } from "class-variance-authority";
import { ProductType } from "@/type";
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

const selectedFilters = ["Chanel", "Dior", "Gucci", "Prada", "Versace"];

type ShoppingDisplayProps = {
  products: ProductType[];
} & ShoppingDisplayVariants;

export function ShoppingDisplay({ variant, products }: ShoppingDisplayProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayProducts, setDisplayProducts] = useState<ProductType[]>([]);
  const displayNum = 16;
  function paginatedProducts(products: ProductType[]) {
    const startIndex = (currentPage - 1) * displayNum;
    const endIndex = startIndex + displayNum;
    return products.slice(startIndex, endIndex);
  }

  useEffect(() => {
    const parsedProducts = paginatedProducts(products);
    setDisplayProducts(parsedProducts);
  }, [currentPage]);

  console.log(currentPage);
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
                buttonTitle={list.title}
                menuItems={list.items}
              />
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-start gap-4 lg:gap-8">
            {selectedFilters.map((filter) => (
              <Filters key={filter} filter={filter} />
            ))}
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
        maxPage={Math.ceil(products.length / displayNum)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
