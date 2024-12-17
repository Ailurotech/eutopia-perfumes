import { IPerfumeSection } from "./product.d";
import { IPerfumeSectionContent } from "@/type";
export interface IProduct {
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
  id: number;
  variantId: number;
}

export interface IRecommendedProduct {
  id: number;
  title: string;
  image: string;
  price: number;
}

export interface IPerfume {
  description: string;
  image: string;
}

export interface IPerfumeSection {
  women: IPerfume;
  men: IPerfume;
  neutral: IPerfume;
}
