import { ProductPageContent, ProductType } from "@/type";

export function productFormat<T extends ProductPageContent | ProductType>(
  products: T[],
  sku?: number
): T[] {
  let res = setDefaultValues(products);
  res = res.map((product) => addWeightByTitle(product) as T);
  if (sku) {
    res.map((product) => (product.sku = sku));
  }
  return res;
}

function setDefaultValues<T extends ProductPageContent | ProductType>(
  products: T[]
): T[] {
  const res = products.map((product) => {
    const defaultProductValues = {
      image: product.image ?? "default",
      description: product.description ?? "No description available",
      maxPrice: product.maxPrice ?? 0,
      tag: product.tag ?? "default",
      productType: product.productType ?? "default",
      inspiredBy: product.inspiredBy ?? "default",
      title: product.title ?? "Untitled",
    };
    if ("comments" in product) {
      const avgStar =
        (
          product.comments.reduce(
            (acc, comment) => (acc += comment.starRating),
            0
          ) / product.comments.length
        ).toFixed(1) ?? 0;
      return {
        ...product,
        ...defaultProductValues,
        stars: product.comments ?? [],
        avgStar,
      };
    }
    return {
      ...product,
      ...defaultProductValues,
    };
  });
  return res;
}

function addWeightByTitle(product: ProductPageContent | ProductType) {
  const sizeRegex = /\d+ml/g;
  const defaultWeight = "no weight available";
  const weight = product.title.match(sizeRegex);
  if (weight === null) {
    return {
      ...product,
      weight: defaultWeight,
      weightOfOz: defaultWeight,
    };
  }

  const parsedWeight = weight.length > 1 ? weight.join("&") : weight[0];
  return {
    ...product,
    weight: parsedWeight,
    weightOfOz: parsedWeight,
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

export function descriptionFormat(description: string) {
  const descriptionReg = /<\/?p>/g;
  return description.replace(descriptionReg, "");
}
