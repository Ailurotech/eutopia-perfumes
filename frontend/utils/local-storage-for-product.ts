import { ICartItem } from "@/interface/cart";
import { ILocalStorage } from "@/interface/localStorage";

export const STORAGE_TOKEN = "cart";
export const STORAGE_EVENT = "cartUpdated";

export function storeProductToLocal(product: ICartItem) {
  const cart: string | null = localStorage.getItem(STORAGE_TOKEN);
  const newProduct = {
    ...product,
    variantId: product.variantId,
    quantity: product.quantity || 1,
    totalPrice: product.quantity
      ? product.quantity * product.maxPrice
      : product.maxPrice,
  };

  if (!cart) {
    localStorage.setItem(
      STORAGE_TOKEN,
      JSON.stringify({ [product.id]: newProduct })
    );
    window.dispatchEvent(new StorageEvent(STORAGE_EVENT));
    return;
  }

  let parsedCart: ILocalStorage = JSON.parse(cart);

  const isExist = parsedCart[product.id];
  // if product is already stored but has no quantity params
  if (isExist && !product.quantity) {
    isExist.quantity += 1;
    isExist.totalPrice = isExist.quantity * isExist.maxPrice;
  }
  // if product is already stored but has quantity params
  if (isExist && product.quantity) {
    isExist.quantity += product.quantity;
    isExist.totalPrice = isExist.quantity * isExist.maxPrice;
  }

  if (!isExist) {
    parsedCart[product.id] = newProduct;
  }

  localStorage.setItem(STORAGE_TOKEN, JSON.stringify({ ...parsedCart }));
  window.dispatchEvent(new StorageEvent(STORAGE_EVENT));
}

export function getProductsFromLocal() {
  const cart: string | null = localStorage.getItem(STORAGE_TOKEN);
  if (!cart) {
    return {};
  }
  return JSON.parse(cart);
}

export function updateEntireLocal(updatedProduct: ILocalStorage) {
  localStorage.setItem(STORAGE_TOKEN, JSON.stringify(updatedProduct));
  window.dispatchEvent(new StorageEvent(STORAGE_EVENT));
}
