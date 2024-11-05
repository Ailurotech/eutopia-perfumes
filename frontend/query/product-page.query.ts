export function productPageQuery(id: number) {
  return `
      *[_type == "product" && store.id == ${id}]{
            "image":store.previewImageUrl,
            "maxPrice":store.priceRange.maxVariantPrice,
            "title":store.title,
            "tag":store.tags,
            "productType":store.options[0].values[0],
            "inspiredBy":store.options[1].values[0],
            "description": store.descriptionHtml,
            }
        `;
}

export function skuQuery(id: number) {
  return `
      *[_type == "productVariant" && store.productId == ${id}]{
        "sku": store.sku
      }
  `;
}

export function recommendedProductQuery(slug: string, category: string) {
  return `
        *[_type == "perfume" && slug.current != "${slug}" && category == "${category}"]{
            name,
            "image": image.asset -> url,
            price
            }[0...10]
        `;
}
