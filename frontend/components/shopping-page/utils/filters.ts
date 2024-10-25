import { ProductType } from "@/type";

// All the filters
const inspiredBy = ["Chanel", "Zara", "TomFord", "Dior", "JoMalone"];
const perfumeType = ["For-Him", "For-Her", "Neutral"];
const size = ["100ml/3.4oz", "120ml/3.8oz", "150ml/4.2oz"];
const sortPrice = ["Low to High", "High to Low"];
export enum FilterListTitle {
  InspiredBy = "Inspired by",
  PerfumeType = "Perfume Type",
  Size = "Size",
  SortPrice = "Sort by Price",
}
export const filterLists: SelectedFilters[] = [
  {
    title: FilterListTitle.InspiredBy,
    filterLists: inspiredBy,
  },
  {
    title: FilterListTitle.PerfumeType,
    filterLists: perfumeType,
  },
  {
    title: FilterListTitle.Size,
    filterLists: size,
  },
  {
    title: FilterListTitle.SortPrice,
    filterLists: sortPrice,
  },
];

// Filter types
export type InspiredBy = (typeof inspiredBy)[number];
export type PerfumeType = (typeof perfumeType)[number];
export type Size = (typeof size)[number];
export type SortPrice = (typeof sortPrice)[number];
export type FilterLists = InspiredBy | PerfumeType | Size | SortPrice;
export type SelectedFilters = {
  title: FilterListTitle;
  filterLists: FilterLists[];
};

// Filter function
export function filterProcessor(
  products: ProductType[],
  selectedFilters: SelectedFilters[]
): ProductType[] {
  if (!selectedFilters) return;

  const filteredProducts = products.filter((product) =>
    filterByCategory(product, selectedFilters)
  );

  if (selectedFilters.some((filter) => filter.title === "Sort by Price")) {
    const sortType = selectedFilters.find(
      (filter) => filter.title === "Sort by Price"
    )?.filterLists[0];

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
        return filterItem.filterLists.includes(product.productType);
      case "Perfume Type":
        return filterItem.filterLists.includes(product.tag);
      case "Size":
        return filterItem.filterLists.includes(product.weight);
      default:
        return true;
    }
  });
}
