import { ILocalStorage, ISingleProductForLocalStorage } from "@/type";

export const STORAGE_TOKEN = "cart";
export const STORAGE_EVENT = "cartUpdated";

export function storeProductToLocal(product: ISingleProductForLocalStorage) {
  const cart: string | null = localStorage.getItem(STORAGE_TOKEN);
  if (!cart) {
    const newProduct = {
      ...product,
      quantity: 1,
      totalPrice: product.maxPrice,
    };
    localStorage.setItem(
      STORAGE_TOKEN,
      JSON.stringify({ [product.id]: newProduct })
    );
    window.dispatchEvent(new StorageEvent(STORAGE_EVENT));
    return;
  }

  let parsedCart: ILocalStorage = JSON.parse(cart);

  const isExist = parsedCart[product.id];
  if (isExist) {
    isExist.quantity += 1;
    isExist.totalPrice = isExist.quantity * isExist.maxPrice;
  }

  if (!isExist) {
    const newProduct = {
      ...product,
      quantity: 1,
      totalPrice: product.maxPrice,
    };
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
