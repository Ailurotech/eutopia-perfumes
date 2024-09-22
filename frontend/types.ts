export interface ProductCardProps {
  slug: string;
  image: string;
  name: string;
  tag: string;
  price: number;
  description: string;
  onAddToCart: () => void;
}