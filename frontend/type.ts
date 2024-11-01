import {
  InspiredBy,
  PerfumeType,
  Size,
} from "./components/shopping-page/utils/filters";

export interface ProductPageContent {
  volumeOfMl: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  volumeOfOz: number;
  price: number;
  category: string;
  tag: string;
  stars: number;
}

export interface RecommendedProducts {
  name: string;
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
  title: string;
  description: string;
  maxPrice: number;
  minPrice: number;
  image: string;
  tag: string;
  productType: PerfumeType;
  weight: Size;
  inspiredBy: InspiredBy;
}

export interface ShoppingPageProps {
  video: VideoType;
  products: ProductType[];
}

const pages = ["all", "for-her", "for-him", "neutral"] as const;
export type PageType = (typeof pages)[number];
