import {
  InspiredBy,
  PerfumeType,
  Size,
} from "./components/shopping-page/utils/filters";

export interface ProductPageContent {
  image: string;
  description: string;
  maxPrice: number;
  tag: string;
  productType: string;
  inspiredBy: string;
  title: string;
  weight: null | Size;
  sku: number;
  stars: number;
}

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

export interface ProductType {
  image: string;
  description: string;
  maxPrice: number;
  tag: string;
  productType: PerfumeType;
  inspiredBy: InspiredBy;
  title: string;
  weight: Size;
  sku: number;
  id: number;
}

export interface ShoppingPageProps {
  video: VideoType;
  products: ProductType[];
}

const pages = ["all", "for-her", "for-him", "neutral"] as const;
export type PageType = (typeof pages)[number];
