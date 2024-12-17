import { IProduct } from "@/interface/product";
import { EDefaultProductProps } from "@/constants/productPage";
import { IProductPageContent } from "@/interface/pages/productPage";

export function productFormat<T extends IProductPageContent | IProduct>(
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

function setDefaultValues<T extends IProductPageContent | IProduct>(
  products: T[]
): T[] {
  const res = products.map((product) => {
    const defaultProductValues = {
      image: product.image ?? EDefaultProductProps.DEFAULT,
      description: product.description ?? EDefaultProductProps.DESCRIPTION,
      maxPrice: product.maxPrice ?? EDefaultProductProps.MAX_PRICE,
      tag: product.tag ?? EDefaultProductProps.DEFAULT,
      productType: product.productType ?? EDefaultProductProps.DEFAULT,
      inspiredBy: product.inspiredBy ?? EDefaultProductProps.DEFAULT,
      title: product.title ?? EDefaultProductProps.TITLE,
    };
    if ("comments" in product) {
      const avgStar =
        (
          product.comments?.reduce(
            (acc, comment) => (acc += comment.starRating),
            0
          ) / product.comments?.length
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

function addWeightByTitle(product: IProductPageContent | IProduct) {
  const sizeRegex = /\d+ml/g;
  const weight = product.title.match(sizeRegex);
  if (weight === null) {
    return {
      ...product,
      weight: EDefaultProductProps.WEIGHT,
      weightOfOz: EDefaultProductProps.WEIGHT,
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
  if (weight === EDefaultProductProps.WEIGHT) {
    return weight;
  }

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
