import { ICartItem } from "./cart";
export interface ILocalStorage {
  [key: string]: ICartItem;
}
