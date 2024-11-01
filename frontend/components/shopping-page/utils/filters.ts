import { ProductType } from "@/type";

// All the filters
const inspiredBy = [
  "Lancôme",
  "Paco Rabone",
  "YSL",
  "Maison",
  "Dior",
  "Versace",
  "Jo Malone",
  "Burberry",
  "Prada",
  "Hermes",
  "Giorgio Armani",
  "Chanel",
  "Carolina Herrera",
  "Anna Sui",
  "Elizabeth Arden",
  "Creed",
  "Dolce Gabbana",
  "Tom Ford",
  "Boss",
  "Gucci",
  "Maison Francis Kurkdjian",
  "Bvlgari",
  "Dolce&Gabbana",
];
const perfumeType = [
  "Eau de Parfum",
  "Eau de Toilette",
  "Eau de Cologne",
  "Mirror HanginEau de Parfumg, Aircon Vent",
  "Mirror HEau de Parfumanging, Aircon Vent",
  "Mirror Hanging, AEau de Parfumircon Vent",
  "Mirror Hanging, AirconEau de Toilette Vent",
  "Mirror Hanging, Aircon VeEau de Toilettent",
  "Mirror Hanging, Aircon Vent",
  "Mirror Hanging",
  "Aircon Vent",
];
const size = ["10ml", "50ml", "50ml&10ml"];
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
        return filterItem.filterLists.includes(product.inspiredBy);
      case "Perfume Type":
        return filterItem.filterLists.includes(product.productType);
      case "Size":
        return filterItem.filterLists.includes(product.weight);
      default:
        return true;
    }
  });
}
