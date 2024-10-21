import { ProductType } from "@/type";

// All the filters
const inspiredBy = ["Chanel", "Zara", "TomFord", "Dior", "JoMalone"] as const;
const perfumeType = ["For-Him", "For-Her", "Neutral"] as const;
const size = ["100ml/3.4oz", "120ml/3.8oz", "150ml/4.2oz"] as const;
const sortPrice = ["Low to High", "High to Low"] as const;
export enum FilterListTitle {
  InspiredBy = "Inspired by",
  PerfumeType = "Perfume Type",
  Size = "Size",
  SortPrice = "Sort by Price",
}
export const filterLists = [
  {
    title: FilterListTitle.InspiredBy,
    conditions: inspiredBy,
  },
  {
    title: FilterListTitle.PerfumeType,
    conditions: perfumeType,
  },
  {
    title: FilterListTitle.Size,
    conditions: size,
  },
  {
    title: FilterListTitle.SortPrice,
    conditions: sortPrice,
  },
] as const;

// Filter types
export type InspiredBy = (typeof inspiredBy)[number];
export type PerfumeType = (typeof perfumeType)[number];
export type Size = (typeof size)[number];
export type SortPrice = (typeof sortPrice)[number];
export type FilterListFilters = InspiredBy | PerfumeType | Size | SortPrice;
export type SelectedFilters = {
  title: FilterListTitle;
  conditions: FilterListFilters[];
};

// Filter function
export function combinedFilter(
  products: ProductType[],
  selectedFilters: SelectedFilters[]
): ProductType[] {
  if (!selectedFilters) return;
  let filteredProducts = products.filter((product) =>
    filterByCategory(product, selectedFilters)
  );
  if (selectedFilters.some((filter) => filter.title === "Sort by Price")) {
    const sortType = selectedFilters.find(
      (filter) => filter.title === "Sort by Price"
    )?.conditions[0];
    return sortType === "Low to High"
      ? filteredProducts.sort((a, b) => a.maxPrice - b.maxPrice)
      : filteredProducts.sort((a, b) => b.maxPrice - a.maxPrice);
  }
  return filteredProducts;
}

function filterByCategory(
  product: ProductType,
  selectedFilters: SelectedFilters[]
) {
  return selectedFilters.every((filterItem) => {
    switch (filterItem.title) {
      case "Inspired by":
        return filterItem.conditions.includes(product.productType);
      case "Perfume Type":
        return filterItem.conditions.includes(product.tag);
      case "Size":
        return filterItem.conditions.includes(product.weight);
      case "Sort by Price":
        return true;
      default:
        return true;
    }
  });
}
