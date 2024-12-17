import { EFilterListTitle } from "@/constants/shoppingPage";
import { IFilter } from "@/interface/filter";
import { IPageSetting } from "@/interface/pages/pageSetting";
import { IProduct } from "@/interface/product";

export function getFilterLists(pageSetting: IPageSetting): IFilter[] {
  const { inspiredBy, perfumeType, size } = pageSetting;
  const sortPrice = ["Low to High", "High to Low"];

  const filterLists: IFilter[] = [
    {
      title: EFilterListTitle.InspiredBy,
      filterLists: inspiredBy,
    },
    {
      title: EFilterListTitle.PerfumeType,
      filterLists: perfumeType,
    },
    {
      title: EFilterListTitle.Size,
      filterLists: size,
    },
    {
      title: EFilterListTitle.SortPrice,
      filterLists: sortPrice,
    },
  ];

  return filterLists;
}

// Filter function
export function filter(
  products: IProduct[],
  selectedFilters: IFilter[]
): IProduct[] {
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

function filterByCategory(product: IProduct, selectedFilters: IFilter[]) {
  return selectedFilters.every((filterItem) => {
    const lowerCaseFilterLists = filterItem.filterLists.map((list) =>
      toLowerCaseFormat(list)
    );
    switch (filterItem.title) {
      case "Inspired by":
        return lowerCaseFilterLists.includes(
          toLowerCaseFormat(product.inspiredBy)
        );

      case "Perfume Type":
        return lowerCaseFilterLists.includes(
          toLowerCaseFormat(product.productType)
        );
      case "Size":
        return lowerCaseFilterLists.includes(toLowerCaseFormat(product.weight));
      default:
        return true;
    }
  });
}

function toLowerCaseFormat(list: string) {
  if (!list.includes("&")) {
    return list.toLowerCase();
  }
  const splitList = list.split("&");
  return splitList.map((item) => item.toLowerCase()).join("&");
}
