export function productFormat(products: any[]) {
  return products.map((product) => {
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
    };
  });
}
