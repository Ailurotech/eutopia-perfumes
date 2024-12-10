import { ILocalStorage, ISingleProductForLocalStorage } from "@/type";

const TOKEN = "cart";

export function storeProductToLocal(product: ISingleProductForLocalStorage) {
  const cart: string | null = localStorage.getItem(TOKEN);
  if (!cart) {
    const newProduct = {
      ...product,
      quantity: 1,
      totalPrice: product.maxPrice,
    };
    localStorage.setItem(TOKEN, JSON.stringify({ [product.id]: newProduct }));
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

  localStorage.setItem(TOKEN, JSON.stringify({ ...parsedCart }));
}
