import { ProductPageContent, ProductType } from "@/type";

//todo fix type
export function productFormat<T extends ProductPageContent | ProductType>(
  products: T[],
  sku?: number
) {
  let res = products.map((product) => addWeightByTitle(product));
  if (sku) {
    res.map((product) => (product.sku = sku));
  }
  return res;
}

function addWeightByTitle(product: ProductPageContent | ProductType) {
  const sizeRegex = /\d+ml/g;
  const weight: string[] | null = product.title.match(sizeRegex);
  if (weight === null) {
    return {
      ...product,
      weight: null,
    };
  }
  return {
    ...product,
    weight: weight.length > 1 ? weight.join("&") : weight[0],
    weightOfOz: weight.length > 1 ? weight.join("&") : weight[0],
  };
}

export function parseWeight(weight: string) {
  const concatSymbol = "&";
  const mlSymbol = "ml";
  const ozSymbol = "oz";
  const weightNumber = weight.replace(mlSymbol, "");

  if (weight.includes(concatSymbol)) {
    const weightArray = weightNumber.split(concatSymbol);
    const weightOfOz = weightArray.map((weight) => convertMLToOz(weight));
    return weightOfOz.join(concatSymbol).concat(ozSymbol);
  }

  return convertMLToOz(weightNumber).concat(ozSymbol);
}

function convertMLToOz(weight: string) {
  const mlToOz = 0.033814;
  return (parseInt(weight) * mlToOz).toFixed(2);
}
