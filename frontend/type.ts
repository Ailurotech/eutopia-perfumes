import {
  InspiredBy,
  PerfumeType,
  Size,
} from "./components/shopping-page/utils/filters";

interface BasicProductType {
  image: string;
  description: string;
  maxPrice: number;
  tag: string;
  productType: string;
  inspiredBy: string;
  title: string;
  weight: Size;
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

export interface ShoppingPageProps {
  video: VideoType;
  products: ProductType[];
}

const pages = ["all", "for-her", "for-him", "neutral"] as const;
export type PageType = (typeof pages)[number];
