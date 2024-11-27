interface BasicProductType {
  image: string;
  description: string;
  maxPrice: number;
  tag: string;
  productType: string;
  inspiredBy: string;
  title: string;
  weight: string;
  weightOfOz: string;
  sku: number;
}

export type ProductPageContent = BasicProductType & {
  stars: number;
};

export interface RecommendedProducts {
  title: string;
  image: string;
  price: number;
}

export interface VideoType {
  _id: string;
  title: string;
  description: string;
  slug: string;
  video: string;
}

export type ProductType = BasicProductType & {
  id: number;
};

export interface PageSettingType {
  size: Size;
  inspiredBy: InspiredBy;
  perfumeType: PerfumeType;
}

export interface ShoppingPageProps {
  video: VideoType;
  products: ProductType[];
  pageSetting: PageSettingType;
}

export enum FilterListTitle {
  InspiredBy = "Inspired by",
  PerfumeType = "Perfume Type",
  Size = "Size",
  SortPrice = "Sort by Price",
}

export type InspiredBy = string[];
export type PerfumeType = string[];
export type Size = string[];
export type SortPrice = string[];
export type FilterLists = InspiredBy | PerfumeType | Size | SortPrice;
export type SelectedFilters = {
  title: FilterListTitle;
  filterLists: FilterLists;
};

const pages = ["all", "for-her", "for-him", "neutral"] as const;
export type PageType = (typeof pages)[number];

export interface HomeBannerItems {
  _id: string;
  title: string;
  description: string;
  slug: string;
  video: string;
}
