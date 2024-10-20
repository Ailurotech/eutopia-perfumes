import { ProductType } from "@/type";

const inspiredBy = ["Chanel", "Zara", "TomFord", "Dior", "JoMalone"] as const;
const perfumeType = ["For-Him", "For-Her", "Neutral"] as const;
const size = ["100ml/3.4oz", "120ml/3.8oz", "150ml/4.2oz"] as const;
const sortPrice = ["Low to High", "High to Low"] as const;
export const filterLists = [
  {
    title: "Inspired by",
    filters: inspiredBy,
  },
  {
    title: "Perfume Type",
    filters: perfumeType,
  },
  {
    title: "Size",
    filters: size,
  },
  {
    title: "Sort by Price",
    filters: sortPrice,
  },
] as const;

export type InspiredBy = (typeof inspiredBy)[number];
export type PerfumeType = (typeof perfumeType)[number];
export type Size = (typeof size)[number];
type SortPrice = (typeof sortPrice)[number];
export type FilterListTitle = (typeof filterLists)[number]["title"];
export type FilterListFilters = InspiredBy | PerfumeType | Size | SortPrice;
export type SelectedFilters = {
  title: FilterListTitle;
  filters: FilterListFilters[];
};

export function comboFilter(
  products: ProductType[],
  selectedFilters: SelectedFilters[]
): ProductType[] {
  const res = products.filter((product) =>
    filterByCategory(product, selectedFilters)
  );
  console.log(res);
  return res;
}

function filterByCategory(
  product: ProductType,
  selectedFilters: SelectedFilters[]
) {
  return selectedFilters.every((filterItem) => {
    switch (filterItem.title) {
      case "Inspired by":
        return filterItem.filters.includes(product.productType);
      case "Perfume Type":
        return filterItem.filters.includes(product.tag);
      case "Size":
        return filterItem.filters.includes(product.weight);
      case "Sort by Price":
        return true;
      default:
        return true;
    }
  });
}
