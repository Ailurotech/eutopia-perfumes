import { productType } from "./../studio/schemasTypes/documents/product";
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
  productType: string;
  weightML: number;
  weightOZ: number;
}

export interface ShoppingPageProps {
  video: VideoType;
  products: ProductType[];
}
