export interface ICartItem {
  id: number;
  variantId: number;
  image: string;
  title: string;
  maxPrice: number;
  quantity?: number;
  totalPrice?: number;
}
