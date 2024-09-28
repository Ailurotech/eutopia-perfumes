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
