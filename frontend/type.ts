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
}

export interface RecommendedProducts {
  name: string;
  image: string;
  price: number;
}

const category = ["for-her", "for-him", "neutral"] as const;
export type Category = (typeof category)[number];
