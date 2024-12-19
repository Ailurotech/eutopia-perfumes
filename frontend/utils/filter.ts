import { EFilterListTitle } from "@/constants/shoppingPage";
import { IFilter, IFilterList, TFilterLists } from "@/interface/filter";
import { IPageSetting } from "@/interface/pages/pageSetting";
import { IProduct } from "@/interface/product";

export function getFilterLists(pageSetting: IPageSetting): IFilterList[] {
  const { inspiredBy, perfumeType, size } = pageSetting;
  const sortPrice = ["Low to High", "High to Low"];

  const filterLists: IFilterList[] = [
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
  selectedFilters: IFilter
): IProduct[] {
  if (!selectedFilters) return;

  const filteredProducts = products.filter((product) =>
    filterByCategory(product, selectedFilters)
  );
  if (!!selectedFilters["Sort by Price"]) {
    const sortType = selectedFilters["Sort by Price"][0];
    return sortType === "Low to High"
      ? filteredProducts.sort((a, b) => a.maxPrice - b.maxPrice)
      : filteredProducts.sort((a, b) => b.maxPrice - a.maxPrice);
  }

  return filteredProducts;
}

function filterByCategory(product: IProduct, selectedFilters: IFilter) {
  const filterKeys = Object.keys(selectedFilters);
  return filterKeys.every((key) => {
    const filterList = selectedFilters[key].map((filter) =>
      toLowerCaseFormat(filter)
    ) as TFilterLists;
    switch (key) {
      case EFilterListTitle.InspiredBy:
        return filterList.includes(toLowerCaseFormat(product.inspiredBy));
      case EFilterListTitle.PerfumeType:
        return filterList.includes(toLowerCaseFormat(product.productType));
      case EFilterListTitle.Size:
        return filterList.includes(toLowerCaseFormat(product.weight));
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
