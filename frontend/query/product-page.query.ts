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
            "id":store.id,
            comments
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

export function recommendedProductQuery(tag: string) {
  return `
        *[_type == "product" && store.status == "active" && store.isDeleted == false && store.tags == "${tag}"]{
            "title":store.title,
            "image":store.previewImageUrl,
            "price":store.priceRange.maxVariantPrice,
            }[0...10]
        `;
}
