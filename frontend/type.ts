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

export type TCommentType = {
  createdAt: string;
  isVerified: boolean;
  reviewedAt: string;
  comment: string;
  commenter: string;
  starRating: number;
  title: string;
  commentFrom: string;
};

export type TProductPageExtraContent = {
  comments: TCommentType[];
  avgStar: number;
};

export type ProductPageContent = BasicProductType & TProductPageExtraContent;

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

export enum ERatingOption {
  OneStar = "1 star",
  TwoStar = "2 stars",
  ThreeStar = "3 stars",
  FourStar = "4 stars",
  FiveStar = "5 stars",
}
type TRating = (typeof ERatingOption)[keyof typeof ERatingOption];
type TRatingProps = {
  starAmount: number;
  starValue: number;
};
export type TRatingDistribution = {
  [key in TRating]: TRatingProps;
};
