import {
  FilterListTitle,
  PageSettingType,
  ProductType,
  SelectedFilters,
} from "@/type";

export function useFilter(pageSetting: PageSettingType) {
  const inspiredBy = pageSetting.inspiredBy;
  const perfumeType = pageSetting.perfumeType;
  const size = pageSetting.size;
  const sortPrice = ["Low to High", "High to Low"];

  const filterLists: SelectedFilters[] = [
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

  // Filter function
  function filter(
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
          return lowerCaseFilterLists.includes(
            toLowerCaseFormat(product.weight)
          );
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

  return {
    inspiredBy,
    perfumeType,
    size,
    sortPrice,
    filterLists,
    filter,
  };
}
